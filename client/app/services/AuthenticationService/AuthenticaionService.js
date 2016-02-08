'use strict';

(function () {
	function AuthenticationService(firebase, $firebaseAuth, $q, $rootScope, UserApi, DialogService, BIEventService) {
		var self = this;
		var ref = firebase.getRef();
		var authObj = $firebaseAuth(ref);
	    var authData = null;
	    var isLoggedIn = authObj.$getAuth();
	    if (isLoggedIn) {
	    	authData = getRelevantData(isLoggedIn);
	    }

	    this.loginWithTwitter = function () {
	    	// not logged in - redirect to login
	    	if (!isLoggedIn) {
                BIEventService.sendBIEvent('twitter-modal-view', 'registration');
	            return authObj.$authWithOAuthPopup('twitter')
	            	.then(function(data) {
                        BIEventService.sendBIEvent('twitter-modal-authenticated', 'registration');
		                isLoggedIn = true;
		                authData = getRelevantData(data);
		                $rootScope.$broadcast('loginDataChanged');
		                UserApi.saveUserPublicData(authData.uid, authData);
		                return registerIfEmailMissing();
		            })
		            .catch(function(error) {
		            	console.error('Authentication failed:', error);
		            });
		    // logged in - check if we user already registered his email with us
	        } else {
	        	return registerIfEmailMissing();
	        }
	    };

	    var registerIfEmailMissing = function() {
	    	return checkIfAlreadyRegistered().then(function(isEmailExist) {
				// no email in the db, we need to request the additional info
				if (!isEmailExist) {
				    return DialogService.showDialog('loginModalCtrl', 'app/loginModal/loginModal.html')
				        .then(function(loginInfo) {
				            self.saveUserAdditionalData(loginInfo);
				        });
				// email is in the db, resolve the promise to let the user continue
				} else {
					var differed = $q.defer();
		        	differed.resolve();
		        	return differed.promise;
				}
			});
	    };

	    var checkIfAlreadyRegistered = function () {
	    	return UserApi.checkIfEmailExists(authData.uid);
	    };

	    this.saveUserAdditionalData = function(data) {
	    	var publicData = data.public;
	    	UserApi.updateUserPublicData(authData.uid, publicData);
	    	var privateData = data.private;
	    	UserApi.updateUserPrivateData(authData.uid, privateData);
	    };

	    this.logoutFromTwitter = function () {
	    	if (isLoggedIn) {
	            authObj.$unauth();
	            isLoggedIn = false;
	            authData = null;
        	}
	    };

	    this.isLoggedIn = function() {
	    	return isLoggedIn;
	    };

	    this.getAuthData = function() {
	    	return authData;
	    };

	    function getRelevantData (authData) {
	    	return {
	    		uid: authData.uid,
	    		authProvider: authData.provider,
	    		userId: authData.twitter.id,
	    		displayName: authData.twitter.displayName,
	    		username: authData.twitter.username,
	    		avatar: authData.twitter.profileImageURL
	    	};
	    }
	}

	angular.module('civicMakersClientApp').service('AuthenticationService', AuthenticationService);
})();
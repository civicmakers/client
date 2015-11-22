'use strict';

(function () {
	function AuthenticationService(firebase, $firebaseAuth, $q, $rootScope, UserApi, DialogService) {
		var self = this;
		var ref = firebase.getRef();
		var authObj = $firebaseAuth(ref);
	    var authData = null;
	    var isLoggedIn = authObj.$getAuth();
	    if (isLoggedIn) {
	    	authData = getRelevantData(isLoggedIn);
	    }

	    this.loginWithTwitter = function () {
	    	if (!isLoggedIn) {
	            return authObj.$authWithOAuthPopup('twitter')
	            	.then(function(data) {
		                isLoggedIn = true;
		                authData = getRelevantData(data);
		                $rootScope.$broadcast('loginDataChanged');
		                UserApi.saveUserPublicData(authData.uid, authData);
		                return self.checkIfAlreadyRegistered()
							.then(function(isEmailExist) {
								// no email in the db, we need to request the additional info
								if (!isEmailExist) {
								    return DialogService.showDialog('loginModalCtrl', 'app/loginModal/loginModal.html')
								        .then(function(loginInfo) {
								            self.saveUserAdditionalData(loginInfo);
								        });
								}
							});
		            })
		            .catch(function(error) {
		            	console.error('Authentication failed:', error);
		            });
	        } else {
	        	var differed = $q.defer();
	        	differed.resolve();
	        	return differed.promise;
	        }
	    };

	    this.checkIfAlreadyRegistered = function () {
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
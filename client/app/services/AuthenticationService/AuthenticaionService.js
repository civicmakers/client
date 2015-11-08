'use strict';

(function () {
	function AuthenticationService(firebase, $firebaseAuth, $q, UserApi) {
		var ref = firebase.getRef();
		var authObj = $firebaseAuth(ref);
	    var isLoggedIn = authObj.$getAuth();
	    var authData = null;

	    this.loginWithTwitter = function () {
	    	if (!isLoggedIn) {
	            return authObj.$authWithOAuthPopup('twitter')
	            	.then(function(data) {
		                isLoggedIn = true;
		                authData = getRelevantData(data);
		                UserApi.saveUserPublicData(authData.userId, authData.authProvider, authData);
		                console.log('Authenticated successfully with payload:', authData);
		            })
		            .catch(function(error) {
		            	console.error('Authentication failed:', error);
		            });
	        } else {
	        	var differed = $q.defer().resolve();
	        	return differed.promise;
	        }
	    };

	    this.logoutFromTwitter = function () {
	    	if (isLoggedIn) {
	            authObj.$unauth();
	            isLoggedIn = false;
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
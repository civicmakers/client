'use strict';

(function () {
	function AuthenticationService(firebase, $firebaseAuth, $q) {
		var ref = firebase.getRef();
		var authObj = $firebaseAuth(ref);
	    var isLoggedIn = authObj.$getAuth();
	    var authData = null;

	    this.loginWithTwitter = function () {
	    	if (!isLoggedIn) {
	            return authObj.$authWithOAuthPopup('twitter')
	            	.then(function(data) {
		                isLoggedIn = true;
		                authData = data;
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
	}

	angular.module('civicMakersClientApp').service('AuthenticationService', AuthenticationService);
})();
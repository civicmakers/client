'use strict';

(function () {
	function UserApi(firebase, $q) {
		// TODO - it would be better to subscribe to 'loginDataChanged' event from AuthenticationService and save the userId
		// as a field here also, this way we won't need to get it as a param in all the functions
		var usersPublicBaseUrl = firebase.baseUrl + '/users_public';
		var usersPrivateBaseUrl = firebase.baseUrl + '/users_private';

		this.saveUserPublicData = function(userId, data) {
			firebase.createIfDoesntExist(usersPublicBaseUrl, userId, data);
		};

		this.updateUserPublicData = function(userId, data) {
			firebase.updateData(usersPublicBaseUrl, userId, data);
		};

		this.updateNestedUserPublicData = function(userId, data, childRelativeUrl) {
			firebase.updateData(usersPublicBaseUrl + '/' + userId, childRelativeUrl, data);
		};

		this.saveUserPrivateData = function(userId, data) {
			firebase.createIfDoesntExist(usersPrivateBaseUrl, userId, data);
		};

		this.updateUserPrivateData = function(userId, data) {
			firebase.updateData(usersPrivateBaseUrl, userId, data);
		};

		this.updateNestedUserPrivateData = function(userId, data, childRelativeUrl) {
			firebase.updateData(usersPrivateBaseUrl + '/' + userId, childRelativeUrl, data);
		};

		this.checkIfEmailExists = function(userId) {
			return checkIfExists(usersPrivateBaseUrl, userId, 'email');
		};

		this.getUserDisplayDetailsById = function(userId) {
			return getUserInfoById(userId, 'public').then(function(userInfo) {
				if (userInfo !== null) {
					return {
						displayName: userInfo.displayName,
						avatar: userInfo.avatar
					};
				} else {
					return null;
				}
			});
		};

		this.getUserEmail = function (userId) {
			return getUserInfoById(userId, 'private').then(function(userInfo) {
				if (userInfo !== null) {
					return userInfo.email;
				} else {
					return null;
				}
			});
		};

		this.getUsersPublicBaseUrl = function() {
			return usersPublicBaseUrl;
		};

		this.getUsersPrivateBaseUrl = function() {
			return usersPrivateBaseUrl;
		};

		function checkIfExists (url, userId, valueToCheck) {
			return firebase.checkIfExist(url, userId, valueToCheck);
		}

		function getUserInfoById (userId, infoType) {
			var deffered = $q.defer();
			if (userId) {
				firebase.getRefTo('users_' + infoType).child(userId).on('value', function(snapshot) {
					// user data is valid - return the user info
					if (snapshot.exists()) {
						deffered.resolve(snapshot.val());
					// no such user!
					} else {
						deffered.resolve(null);
					}
				});
			} else {
				deffered.resolve(null);
			}
			return deffered.promise;
		}
	}

	angular.module('civicMakersClientApp').service('UserApi', UserApi);
})();
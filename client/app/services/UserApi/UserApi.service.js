'use strict';

(function () {
	function UserApi(firebase) {
		var usersPublicBaseUrl = firebase.baseUrl + '/users_public';
		var usersPrivateBaseUrl = firebase.baseUrl + '/users_private';

		this.saveUserPublicData = function(userId, data) {
			firebase.createIfDoesntExist(usersPublicBaseUrl, userId, data);
		};

		this.updateUserPublicData = function(userId, data) {
			firebase.updateData(usersPublicBaseUrl, userId, data);
		};

		this.saveUserPrivateData = function(userId, data) {
			firebase.createIfDoesntExist(usersPrivateBaseUrl, userId, data);
		};

		this.updateUserPrivateData = function(userId, data) {
			firebase.updateData(usersPrivateBaseUrl, userId, data);
		};

		this.checkIfEmailExists = function(userId) {
			return checkIfExists(usersPrivateBaseUrl, userId, 'email');
		};

		function checkIfExists (url, userId, valueToCheck) {
			return firebase.checkIfExist(url, userId, valueToCheck);
		}
	}

	angular.module('civicMakersClientApp').service('UserApi', UserApi);
})();
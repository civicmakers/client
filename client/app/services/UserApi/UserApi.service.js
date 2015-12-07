'use strict';

(function () {
	function UserApi(firebase) {
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
			firebase.updateData(usersPublicBaseUrl + '/' + childRelativeUrl, userId, data);
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

		this.getUsersPublicBaseUrl = function() {
			return usersPublicBaseUrl;
		};

		this.getUsersPrivateBaseUrl = function() {
			return usersPrivateBaseUrl;
		};

		function checkIfExists (url, userId, valueToCheck) {
			return firebase.checkIfExist(url, userId, valueToCheck);
		}
	}

	angular.module('civicMakersClientApp').service('UserApi', UserApi);
})();
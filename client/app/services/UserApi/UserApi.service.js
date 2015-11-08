'use strict';

(function () {
	function UserApi(firebase) {
		var usersPublicBaseUrl = firebase.baseUrl + '/users_public';

		this.saveUserPublicData = function(userId, authProvider, userData) {
			firebase.createIfDoesntExist(usersPublicBaseUrl, authProvider + '-' + userId, userData);
		};
	}

	angular.module('civicMakersClientApp').service('UserApi', UserApi);
})();
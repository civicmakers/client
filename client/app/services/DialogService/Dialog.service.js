'use strict';

(function() {
	function DialogService($mdDialog) {
		this.showDialog = function(ctrl, templateUrl, overrideOptions) {
			var params = {
				controller: ctrl,
				controllerAs: 'dialogVm',
				templateUrl: templateUrl
			};
			angular.extend(params, overrideOptions);
			// return a promise that's resolved/rejected once the modal is closed
			return $mdDialog.show(params);
		};
	}
	angular.module('civicMakersClientApp').service('DialogService', DialogService);
})();

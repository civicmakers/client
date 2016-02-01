'use strict';

(function () {
	function InterestInProjectModalCtrl($mdDialog, $timeout) {
		var self = this;
		this.isThankYouMessageShown = false;

		this.askOwnerAboutHelp = function() {
			$mdDialog.hide({
				contactUs: false,
				shownInterest: true
			});
		};

		this.contactUs = function() {
			this.isThankYouMessageShown = true;
			$timeout(function() {
				self.emailUs();
			}, 4000);
		};

		this.projectGuide = function() {
			$mdDialog.hide({
				contactUs: false,
				shownInterest: true,
				projectGuide: true
			});
		};

		this.emailUs = function() {
			$mdDialog.hide({
				contactUs: true,
				shownInterest: true
			});
		};

		this.closeDialog = function () {
			if (!this.isThankYouMessageShown) {
				$mdDialog.cancel();
			} else {
				this.emailUs();
			}
		};
	}

	angular.module('civicMakersClientApp').controller('interestInProjectModalCtrl', InterestInProjectModalCtrl);
})();

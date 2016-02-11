'use strict';

(function () {
	function LoginModalCtrl($mdDialog, BIEventService) {
		var self = this;
		this.isEmailError = false;
        // send GA event for modal opened
        BIEventService.sendBIEvent('email-modal-view', 'registration');
		this.submitLoginData = function() {
			if (self.email) {
				this.isError = false;
                BIEventService.sendBIEvent('email-submit', 'registration');
				$mdDialog.hide({
					private: {
						email: self.email
					},
					public: {
						// delete/don't add field from db if empty
						zipCode: self.zipCode || null,
						country: self.country || null
					},
					additionalInfo: {
						// !! to make sure it's boolean
						isSubscribing: !!self.isSubscribe
					}
				});
			} else {
				this.isEmailError = true;
				return;
			}
		};

		this.cancel = function () {
			$mdDialog.cancel();
		};
	}

	angular.module('civicMakersClientApp').controller('loginModalCtrl', LoginModalCtrl);
})();

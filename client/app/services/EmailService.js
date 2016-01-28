/* global emailjs */
'use strict';

(function() {
	function EmailService() {
		this.sendInterestInProjectEmail = function(emailData) {
			emailjs.send('civicmakers_email', 'interest_in_project', emailData);
		};
	}
	angular.module('civicMakersClientApp').service('EmailService', EmailService);
})();

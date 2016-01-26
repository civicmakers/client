/* global emailjs */
'use strict';

(function() {
	function EmailService() {
		this.sendContributeInterest = function(emailData) {
			emailjs.send('civicmakers_email', 'contribute_interest', emailData);
		};
	}
	angular.module('civicMakersClientApp').service('EmailService', EmailService);
})();

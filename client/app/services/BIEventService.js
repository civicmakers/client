'use strict';

(function() {
	function BIEventService($analytics) {
		this.sendBIEvent = function(action, category, label) {
            var eventData = {
                category: category
            };
            if (label !== undefined && label !== '') {
                eventData.label = label;
            }
			$analytics.eventTrack(action, eventData);
		};
	}
	angular.module('civicMakersClientApp').service('BIEventService', BIEventService);
})();

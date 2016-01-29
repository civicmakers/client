'use strict';

angular.module('civicMakersClientApp')
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/main.html'
			});
	})
	.run(function($anchorScroll) {
		$anchorScroll.yOffset = 65; // always scroll by 65 extra pixels to make up for the header height
	});
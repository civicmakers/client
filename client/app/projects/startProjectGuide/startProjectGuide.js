'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/start-a-project-guide', {
        templateUrl: 'app/projects/startProjectGuide/startProjectGuide.html'
      });
  });

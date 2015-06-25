'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project/:projectID', {
        templateUrl: 'app/projects/project/project.html',
        controller: 'ProjectCtrl'
      });
  });

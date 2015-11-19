'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/add/project', {
        templateUrl: 'app/projects/AddProject/AddProject.html',
        controller: 'AddProjectCtrl',
        controllerAs: 'addProjectCtrl'
      });
  });

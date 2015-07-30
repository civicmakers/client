'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectsCtrl', function ($scope, ProjectApi) {
    $scope.projects = ProjectApi.getAllProjects();
  });
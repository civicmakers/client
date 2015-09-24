'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectsCtrl', function ($scope, ProjectApi) {
    $scope.projects = [];
    // $scope.projects = ProjectApi.getAllProjects();
    ProjectApi.getAllProjects().then(function(projects){
      $scope.projects = projects;
    })
  });
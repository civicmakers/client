'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectsCtrl', function ($scope, ProjectApi) {

    ProjectApi.getAllProjects().then(function(projects){
      $scope.projects = projects;
    });

  });
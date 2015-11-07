'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectApi, ProjectComponentApi) {

    console.log("routeParams",$routeParams);

    ProjectApi.queryProject($routeParams.projectID).then(function(project){
      console.log('project',project)
      $scope.project = project.data[0];
    });

  });

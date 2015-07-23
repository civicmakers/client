'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectApi) {

    console.log("routeParams",$routeParams)
    $scope.project = ProjectApi.queryProject($routeParams.projectID);

  });

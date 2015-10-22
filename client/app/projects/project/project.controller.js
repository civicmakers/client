'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectApi, ProjectComponentApi) {

    console.log("routeParams",$routeParams);

    ProjectApi.queryProject($routeParams.projectID).then(function(project){
      console.log('project',project)
      $scope.project = project.data[0];
    });

    //Todo: replace dummyId with what comes in project api response. Create promise chain
    $scope.projectComponent = ProjectComponentApi.queryProjectComponent(123);
  });

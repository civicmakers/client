'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectApi, ToolApi) {

    console.log('routeParams', $routeParams);

    $scope.projectTools = [];

    ProjectApi.queryProject($routeParams.projectID).then(function(project){
      console.log('project',project);
      $scope.project = project;
      $scope.getTools(project.tools);
    });

    $scope.getTools = function (toolIds) {
        toolIds.forEach(function (tool) {
            ToolApi.queryTool(tool)
                .then(function (response) {
                    if (response) {
                        response.id = tool;
                        $scope.projectTools.push(response);
                    }
                });
        });
        console.log('tools',$scope.projectTools);
    };

  });

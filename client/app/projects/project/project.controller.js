'use strict';

angular.module('civicMakersClientApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, ProjectApi, ToolApi) {
    $scope.projectTools = [];
    $scope.projectId = $routeParams.projectID;

    ProjectApi.queryProject($routeParams.projectID).then(function(project){
      $scope.project = project;
      if (project.tools) {
        $scope.getTools(project.tools);
      }
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
    };
  });

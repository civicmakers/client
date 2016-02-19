'use strict';

angular.module('civicMakersClientApp')
  .controller('ToolCtrl', function ($scope, $routeParams, ToolApi) {
  	$scope.toolId = $routeParams.toolID;

    ToolApi.queryTool($routeParams.toolID).then(function (tool){
    	$scope.tool = tool;
    });
  });

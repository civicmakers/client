'use strict';

angular.module('civicMakersClientApp')
  .controller('ToolCtrl', function ($scope, $routeParams, ToolApi) {
  	console.log("routeParams",$routeParams)
    $scope.tool = ToolApi.queryTool($routeParams.toolID);
  });

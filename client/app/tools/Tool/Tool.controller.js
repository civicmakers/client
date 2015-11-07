'use strict';

angular.module('civicMakersClientApp')
  .controller('ToolCtrl', function ($scope, $routeParams, ToolApi) {

    ToolApi.queryTool($routeParams.toolID).then(function (tool){
    	console.log(tool)
      $scope.tool = tool
    })

  });

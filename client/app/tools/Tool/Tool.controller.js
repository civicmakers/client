'use strict';

angular.module('civicMakersClientApp')
  .controller('ToolCtrl', function ($scope, $routeParams, ToolApi) {

  	console.log("routeParams",$routeParams)

    ToolApi.queryTool($routeParams.toolID).then(function (tool){
      $scope.tool = tool.data[0]
    })

  });

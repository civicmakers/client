'use strict';

angular.module('civicMakersClientApp')
  .controller('ToolsCtrl', function ($scope, ToolApi) {
    ToolApi.getAllTools().then(function (tools){
      $scope.tools = tools
    });
  });

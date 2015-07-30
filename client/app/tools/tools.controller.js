'use strict';

angular.module('civicMakersClientApp')
  .controller('ToolsCtrl', function ($scope, ToolApi) {
    $scope.tools = ToolApi.getAllTools();
  });

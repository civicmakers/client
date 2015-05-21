'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tools', {
        templateUrl: 'app/tools/tools.html',
        controller: 'ToolsCtrl'
      });
  });

'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tool/:toolID', {
        templateUrl: 'app/tools/Tool/Tool.html',
        controller: 'ToolCtrl'
      });
  });

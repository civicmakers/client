'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/add/tool', {
        templateUrl: 'app/tools/AddTool/AddTool.html',
        controller: 'AddToolCtrl'
      });
  });

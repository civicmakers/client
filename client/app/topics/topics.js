'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/topics', {
        templateUrl: 'app/topics/topics.html',
        controller: 'TopicsCtrl'
      });
  });

'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/topic/:topicID', {
        templateUrl: 'app/topics/Topic/Topic.html',
        controller: 'TopicCtrl'
      });
  });

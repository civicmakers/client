'use strict';

angular.module('civicMakersClientApp')
  .controller('TopicCtrl', function ($scope, $routeParams, TopicApi) {
    $scope.topic = TopicApi.queryTopic($routeParams);
  });

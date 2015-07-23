'use strict';

angular.module('civicMakersClientApp')
  .controller('TopicsCtrl', function ($scope, TopicApi) {
    $scope.topics = TopicApi.getAllTopics();
  });

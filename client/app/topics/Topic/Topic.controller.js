'use strict';

angular.module('civicMakersClientApp')
  .controller('TopicCtrl', function ($scope, $routeParams, TopicApi) {

      console.log('routeParams',$routeParams.topicID);

      TopicApi.queryTopic($routeParams.topicID).then(function (topic){
        console.log('topic',topic);
        $scope.topic = topic.data[0];
      });

  });

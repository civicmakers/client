'use strict';

angular.module('civicMakersClientApp')
  .factory('TopicApi', function ($q, firebase) {

    function getAllTopics() {
      var deferred = $q.defer();
      firebase.getRef()
        .child('topics')
        .on('value', function(snapshot) {
          deferred.resolve(snapshot.val());
        });
      return deferred.promise;
    }

    function getFirstNTopics(n) {
      var deferred = $q.defer();
      getAllTopics().then(function(topics) {
        deferred.resolve(topics.slice(0, n));
      });
      return deferred.promise;
    }

    function getTopicsNum() {
      var deferred = $q.defer();
      getAllTopics().then(function(topics) {
        deferred.resolve(topics.length);
      });
      return deferred.promise;
    }

    function queryTopic(id) {
      var deferred = $q.defer();
      getAllTopics().then(function(topics) {
        topics.forEach(function(topic) {
          if (topic.data[0].id === id) {
            deferred.resolve(topic);
          }
        });
      });
      return deferred.promise;
    }

    return {
      getAllTopics: getAllTopics,
      queryTopic: queryTopic,
      getFirstNTopics: getFirstNTopics,
      getTopicsNum: getTopicsNum,
    };

  });

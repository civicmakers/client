'use strict';

angular.module('civicMakersClientApp')
  .factory('ToolApi', function ($q, firebase, $firebaseArray) {


    function getAllTools() {
      var deferred = $q.defer();
      firebase.getRef()
        .child('tools')
        .on('value', function(snapshot) {
          deferred.resolve(snapshot.val());
        });
      return deferred.promise;
    };

    function getFirstNTools(n) {
      var deferred = $q.defer();
      getAllTools().then(function(Tools) {
        console.log(Tools)
        deferred.resolve(Tools.slice(0, n));
      })
      return deferred.promise;
    };

    function getToolsNum() {
      var deferred = $q.defer();
      getAllTools().then(function(Tools) {
        deferred.resolve(Tools.length);
      })
      return deferred.promise;
    };

    function queryTool(id) {
      var deferred = $q.defer();
      getAllTools().then(function(tools) {
        tools.forEach(function(tool) {
          if (tool.data[0].id === id) {
            deferred.resolve(tool);
          }
        })
      })
      return deferred.promise;
    }

    return {
      getAllTools: getAllTools,
      queryTool: queryTool,
      getFirstNTools: getFirstNTools,
      getToolsNum: getToolsNum,
    };

});

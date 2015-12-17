'use strict';

angular.module('civicMakersClientApp')
  .factory('ToolApi', function ($q, firebase, $firebaseArray) {

    function getAllTools() {
      var deferred = $q.defer();
      var ref = firebase.getRefTo('tools');
      var tools = $firebaseArray(ref);
      tools.$loaded().then(function (results) {
        deferred.resolve(results);
      });
      return deferred.promise;
    }

    function getFirstNTools(n) {
      var deferred = $q.defer();
      getAllTools().then(function(tools) {
        deferred.resolve(tools.slice(0,n));
      });
      return deferred.promise;
    }

    function getToolsNum() {
      var deferred = $q.defer();
      getAllTools().then(function(tools) {
        deferred.resolve(tools.length);
      });
      return deferred.promise;
    }

    function queryTool(id) {
      var deferred = $q.defer();
      var ref = firebase.getRefTo('tools/' + id);
      ref.once('value', function(snapshot) {
          deferred.resolve(snapshot.val());
        });
      return deferred.promise;
    }

    function saveTool (toolData) {
      var deferred = $q.defer();
      var toolRef = firebase.getRef()
        .child('tools')
        .push(toolData, function (error){
        if (error) {
          deferred.resolve(error);
        } else {
          deferred.resolve(toolRef.name());
        }
      });
      return deferred.promise;
    }

    return {
      getAllTools: getAllTools,
      queryTool: queryTool,
      getFirstNTools: getFirstNTools,
      getToolsNum: getToolsNum,
      saveTool: saveTool
    };

});

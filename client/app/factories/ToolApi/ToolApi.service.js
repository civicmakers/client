'use strict';

angular.module('civicMakersClientApp')
  .factory('ToolApi', function ($q, firebase, $firebaseArray) {

    var baseUrl = 'civicmakers.firebaseIO.com'

    function getAllTools() {
      var deferred = $q.defer();
      var ref = new Firebase(baseUrl + '/tools')
      var tools = $firebaseArray(ref)
      tools.$loaded().then(function (results) {
        console.log('tools',results)
        deferred.resolve(results)
      })
      return deferred.promise;
    };

    function getFirstNTools(n) {
      var deferred = $q.defer();
      getAllTools().then(function(tools) {
        deferred.resolve(tools.slice(0,n));
      })
      return deferred.promise;
    };

    function getToolsNum() {
      var deferred = $q.defer();
      getAllTools().then(function(tools) {
        deferred.resolve(tools.length);
      })
      return deferred.promise;
    };

    function queryTool(id) {
      var deferred = $q.defer();
      console.log(baseUrl + '/tools/' + id)
      var ref = new Firebase(baseUrl + '/tools/' + id);
      ref.once('value', function(snapshot) {
          console.log(snapshot.val())
          deferred.resolve(snapshot.val());
        });
      return deferred.promise;
      // var deferred = $q.defer();
      // getAllTools().then(function(tools) {
      //   tool
      //   deferred.resolve(tools.id);
      // })
      // return deferred.promise;
    };

    function save (toolData) {
      var deferred = $q.defer();
      firebase.getRef()
        .child('tools')
        .push(toolData, function (error){
        if (error) {
          deferred.resolve('Saved')
        } else {
          deferred.resolve(error)
        }
      })
      return deferred.promise;
    }

    return {
      getAllTools: getAllTools,
      queryTool: queryTool,
      getFirstNTools: getFirstNTools,
      getToolsNum: getToolsNum,
      save: save
    };

});

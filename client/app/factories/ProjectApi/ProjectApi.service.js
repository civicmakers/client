'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectApi', function($q, firebase) {

    function getAllProjects() {
      var deferred = $q.defer();
      firebase.getRef()
        .child('projects')
        .on('value', function(snapshot) {
          deferred.resolve(snapshot.val());
        });
      return deferred.promise;
    };

    function getFirstNProjects(n) {
      var deferred = $q.defer();
      getAllProjects().then(function(projects) {
        deferred.resolve(projects.slice(0, n));
      })
      return deferred.promise;
    };

    function getProjectsNum() {
      var deferred = $q.defer();
      getAllProjects().then(function(projects) {
        deferred.resolve(projects.length);
      })
      return deferred.promise;
    };

    function queryProject(id) {
      var deferred = $q.defer();
      getAllProjects().then(function(projects) {
        projects.forEach(function(project) {
          if (project.id === id) {
            deferred.resolve(project);
          }
        })
      })
      return deferred.promise;
    }

    return {
      getAllProjects: getAllProjects,
      queryProject: queryProject,
      getFirstNProjects: getFirstNProjects,
      getProjectsNum: getProjectsNum,
    };

  });
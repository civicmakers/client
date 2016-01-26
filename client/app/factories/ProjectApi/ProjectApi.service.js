'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectApi', function ($q, firebase, $firebaseArray) {

    function getAllProjects() {
      var deferred = $q.defer();
      var ref = firebase.getRefTo('projects');
      var projects = $firebaseArray(ref);
      projects.$loaded().then(function (results) {
        deferred.resolve(results);
      });
      return deferred.promise;
    }

    function getFirstNProjects(n) {
      var deferred = $q.defer();
      getAllProjects().then(function(projects) {
        deferred.resolve(projects.slice(0, n));
      });
      return deferred.promise;
    }

    function getProjectsNum() {
      var deferred = $q.defer();
      getAllProjects().then(function(projects) {
        deferred.resolve(projects.length);
      });
      return deferred.promise;
    }

    function queryProject(id) {
      var deferred = $q.defer();
      var ref = firebase.getRefTo('projects/' + id);
      ref.once('value', function(snapshot) {
          deferred.resolve(snapshot.val());
        });
      return deferred.promise;
    }

    function saveProject (projectData) {
      var deferred = $q.defer();
      var projectRef = firebase.getRef()
        .child('projects')
        .push(projectData, function (error){
        if (error) {
          deferred.resolve(error);
        } else {
          deferred.resolve(projectRef.name());
        }
      });
      return deferred.promise;
    }

    function updateProjectData(projectId, data, nestedUrl) {
      var projectsBaseUrl = firebase.baseUrl + '/projects';
      if (nestedUrl !== undefined) {
        firebase.updateData(projectsBaseUrl + '/' + projectId, nestedUrl, data);
      } else {
        firebase.updateData(projectsBaseUrl, projectId, data);
      }
    }

    return {
      getAllProjects: getAllProjects,
      queryProject: queryProject,
      getFirstNProjects: getFirstNProjects,
      getProjectsNum: getProjectsNum,
      saveProject: saveProject,
      updateProjectData: updateProjectData
    };
});

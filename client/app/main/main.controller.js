'use strict';

angular.module('civicMakersClientApp')
  .controller('MainCtrl', function ($scope, $http, ProjectApi, ToolApi, AuthorApi, TopicApi) {

    // ToDo: configure this to use a promise once we have real API and ApiConfig factory is set up.

    // ProjectApi
    //   .getAllProjects().then(function (response) {
    //     console.log("response", response)
    //   })


    // For now using these functions, but will use api call with .then() once configured
    $scope.projects = ProjectApi.getAllProjects();
    $scope.tools = ToolApi.getAllTools();
    $scope.authors = AuthorApi.getAllAuthors();
    $scope.topics = TopicApi.getAllTopics();

  });

'use strict';

angular.module('civicMakersClientApp')
  .controller('MainCtrl', function ($scope, $http, ProjectApi, ToolApi, AuthorApi, TopicApi) {

    // ToDo: configure this to use a promise once we have real API and ApiConfig factory is set up.

    // ProjectApi
    //   .getAllProjects().then(function (response) {
    //     console.log("response", response)
    //   })


    // For now using these functions, but will use api call with .then() once configured
    $scope.projects = ProjectApi.getFirstNProjects(4);
    $scope.projectsNum = ProjectApi.getProjectsNum();

    $scope.tools = ToolApi.getFirstNTools(4);
    $scope.toolsNum = ToolApi.getToolsNum();

    $scope.authors = AuthorApi.getFirstNAuthors(4);
    $scope.authorsNum = AuthorApi.getAuthorsNum();

    $scope.topics = TopicApi.getFirstNTopics(4);
    $scope.topicsNum = TopicApi.getTopicsNum();

  });

'use strict';

angular.module('civicMakersClientApp')
  .controller('MainCtrl', function ($scope, $http, ProjectApi, AuthorApi, ToolApi, TopicApi, AuthenticationService) {
    var vm = this;
    this.isLoggedIn = AuthenticationService.isLoggedIn();

    ProjectApi.getFirstNProjects(4).then(function(projects){
        $scope.projects = projects;
    });
    ProjectApi.getProjectsNum().then(function(numOfProjects){
        $scope.projectsNum = numOfProjects;
    });

    AuthorApi.getFirstNAuthors(4).then(function(authors){
        $scope.authors = authors;
    });
    AuthorApi.getAuthorsNum().then(function(numOfAuthors){
        $scope.authorsNum = numOfAuthors;
    });

    ToolApi.getFirstNTools(4).then(function(tools){
        $scope.tools = tools;
    });
    ToolApi.getToolsNum().then(function(numOfTools){
        $scope.toolsNum = numOfTools;
    });

    TopicApi.getFirstNTopics(4).then(function(topics){
        $scope.topics = topics;
    });
    TopicApi.getTopicsNum().then(function(numOfTopics){
        $scope.topicsNum = numOfTopics;
    });

    this.loginToTwitter = function () {
        if (!AuthenticationService.isLoggedIn()) {
            AuthenticationService.loginWithTwitter().then(function () {
                vm.isLoggedIn = AuthenticationService.isLoggedIn();
                AuthorApi.getFirstNAuthors(4).then(function(authors) {
                    $scope.authors = authors;
                });
            });
        }
    };

    this.logoutFromTwitter = function () {
        if (AuthenticationService.isLoggedIn()) {
            AuthenticationService.logoutFromTwitter();
            vm.isLoggedIn = AuthenticationService.isLoggedIn();
        }
    };
  });

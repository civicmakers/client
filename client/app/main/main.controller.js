'use strict';

(function() {
    function MainCtrl($scope, $http, $location, ProjectApi, AuthorApi, ToolApi, TopicApi, AuthenticationService) {
        var self = this;
        this.isLoggedIn = AuthenticationService.isLoggedIn();
        this.userData = AuthenticationService.getAuthData();
        $scope.$on('loginDataChanged', function(){
            syncLoginData();
        });

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
                    syncLoginData();
                });
            }
        };

        this.logoutFromTwitter = function () {
            if (AuthenticationService.isLoggedIn()) {
                AuthenticationService.logoutFromTwitter();
                syncLoginData();
            }
        };

        this.loginAndRedirect = function(path) {
            if (!AuthenticationService.isLoggedIn()) {
                AuthenticationService.loginWithTwitter().then(function () {
                    syncLoginData();
                    $location.path(path);
                });
            } else {
                $location.path(path);
            }
        };

        this.openUserProfileMenu = function($mdOpenMenu, event) {
          $mdOpenMenu(event);
        };

        var syncLoginData = function() {
            self.isLoggedIn = AuthenticationService.isLoggedIn();
            self.userData = AuthenticationService.getAuthData();
        };
    }

    angular.module('civicMakersClientApp').controller('MainCtrl', MainCtrl);
})();

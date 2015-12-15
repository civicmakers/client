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
            self.projects = projects;
        });

        ProjectApi.getProjectsNum().then(function(numOfProjects){
            self.projectsNum = numOfProjects;
        });

        ToolApi.getFirstNTools(4).then(function(tools){
            self.tools = tools;
        });

        ToolApi.getToolsNum().then(function(numOfTools){
            self.toolsNum = numOfTools;
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
            AuthenticationService.loginWithTwitter().then(function () {
                syncLoginData();
                navigateTo(path);
            });
        };

        this.openUserProfileMenu = function($mdOpenMenu, event) {
          $mdOpenMenu(event);
        };

        this.navigateHome = function() {
            navigateTo('/');
        };

        var navigateTo = function(path) {
            $location.path(path);
        };

        var syncLoginData = function() {
            self.isLoggedIn = AuthenticationService.isLoggedIn();
            self.userData = AuthenticationService.getAuthData();
        };
    }

    angular.module('civicMakersClientApp').controller('MainCtrl', MainCtrl);
})();

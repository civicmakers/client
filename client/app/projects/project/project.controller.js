'use strict';

(function() {
  function ProjectCtrl($routeParams, ProjectApi, ToolApi, DialogService, EmailService, AuthenticationService, UserApi) {
    this.projectTools = [];
    this.projectId = $routeParams.projectID;
    var self = this;

    ProjectApi.queryProject($routeParams.projectID).then(function(project){
      self.project = project;
      if (project.tools) {
        self.getTools(project.tools);
      }
    });

    this.getTools = function (toolIds) {
        toolIds.forEach(function (tool) {
            ToolApi.queryTool(tool)
                .then(function (response) {
                    if (response) {
                        response.id = tool;
                        self.projectTools.push(response);
                    }
                });
        });
    };

    this.contributeToProject = function() {
      AuthenticationService.loginWithTwitter().then(function () {
        return DialogService.showDialog('contributeToProjectModalCtrl', 'app/projects/project/contributeToProjectModal/contributeToProjectModal.html')
          .then(function(modalData) {
            if (modalData.contactUs) {
              sendContributeInterestEmail();
            }
            if (modalData.shownInterest) {
              updateDBForInterest();
            }
          });
      });
    };

    function sendContributeInterestEmail() {
      var userData = AuthenticationService.getAuthData();
      UserApi.getUserEmail(userData.uid).then(function(userEmail) {
        var emailData = {
          projectName: self.project.name,
          projectId: self.projectId,
          userName: userData.displayName,
          userId: userData.uid,
          userEmail: userEmail,
          date: new Date().toLocaleString()
        };
        EmailService.sendContributeInterest(emailData);
      });
    }

    function updateDBForInterest() {
      var userId = AuthenticationService.getAuthData().uid;
      // add project to user list
      var data = {};
      data[self.projectId] = true;
      UserApi.updateNestedUserPublicData(AuthenticationService.getAuthData().uid, data, 'contributeToProjectList');
      // add user to interested project list
      data = {};
      data[userId] = true;
      ProjectApi.updateProjectData(self.projectId, data, 'contributionInterestList');
    }
  }

  angular.module('civicMakersClientApp').controller('ProjectCtrl', ProjectCtrl);
})();

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
      this.showInterestInProject('contribute');
    };

    this.replicateProject = function() {
      this.showInterestInProject('replicate');
    };

    this.showInterestInProject = function(interestType) {
      AuthenticationService.loginWithTwitter().then(function () {
        var modalTemplateUrlSuffix = interestType === 'contribute' ? 'contributeToProjectModal.html' : 'replicateProjectModal.html';
        return DialogService.showDialog('interestInProjectModalCtrl', 'app/projects/project/interestInProjectModal/' + modalTemplateUrlSuffix)
          .then(function(modalData) {
            if (modalData.contactUs) {
              sendContributeInterestEmail(interestType);
            }
            if (modalData.shownInterest) {
              updateDBForInterest(interestType);
            }
            if (modalData.downloadGuide) {
              // TODO - ADD THE CODE TO REDIRECT TO THE GUIDE!
            }
          });
      });
    };

    function sendContributeInterestEmail(interestType) {
      var userData = AuthenticationService.getAuthData();
      UserApi.getUserEmail(userData.uid).then(function(userEmail) {
        var emailData = {
          projectName: self.project.name,
          projectId: self.projectId,
          userName: userData.displayName,
          userId: userData.uid,
          userEmail: userEmail,
          date: new Date().toLocaleString(),
          interestType: interestType
        };
        EmailService.sendInterestInProjectEmail(emailData);
      });
    }

    function updateDBForInterest(interestType) {
      var userId = AuthenticationService.getAuthData().uid;
      // add project to user list
      var data = {};
      data[self.projectId] = true;
      var projectListName = interestType === 'contribute' ? 'contributeToProjectList' : 'replicateProjectList';
      UserApi.updateNestedUserPublicData(AuthenticationService.getAuthData().uid, data, projectListName);
      // add user to interested project list
      data = {};
      data[userId] = true;
      var interestedUsersListType = interestType === 'contribute' ? 'contributionInterestList' : 'replicationInterestList';
      ProjectApi.updateProjectData(self.projectId, data, interestedUsersListType);
    }
  }

  angular.module('civicMakersClientApp').controller('ProjectCtrl', ProjectCtrl);
})();

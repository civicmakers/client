/* global alert */
'use strict';

(function() {
  function AddProjectCtrl($scope, ProjectApi, $location, ToolApi, AuthenticationService, UserApi, BIEventService) {
    var self = this;
    this.projectFormData = {
        // TODO: prevent duplicates
        tools: []
        // authorIp:
        // cfApiProjId:
        // cfApiOrgId
    };
    // TODO: prevent duplicates
    this.selectedTools = [];
    this.selectedToolsNames = [];

    ToolApi.getAllTools().then(function (tools){
      self.tools = tools;
    });

    this.addToTools = function (selectedTool) {
      this.selectedTools.push(selectedTool);
      this.selectedToolsNames.push(selectedTool.name);
      this.projectFormData.tools.push(selectedTool.$id);
      this.searchInput = '';
    };
    
    this.searchToolsArrayFilter = function (toolToCheck) {
        var inputLength = self.searchInput.length;
        if (inputLength <= 0) {
            return false;
        } else {
            var toolNameToCheck = toolToCheck.name.substr(0, inputLength);
            var isSubstringEqual = self.searchInput.toLowerCase() === toolNameToCheck.toLowerCase();
            var isNotSelectedYet = !(_.contains(self.selectedToolsNames, toolToCheck.name));
            return isSubstringEqual && isNotSelectedYet;
        }
    };

    this.tagsEntryChanged = function () {
        this.projectFormData.tags = this.tagsEntry.split(', ');
    };

    this.loginAndSubmit = function() {
      AuthenticationService.loginWithTwitter().then(function () {
        submitProjectForm();
      });
    };

    var submitProjectForm = function(){
      if ($scope.projectForm.$valid){
        BIEventService.sendBIEvent('add-project-submit', 'projects');
        angular.extend(self.projectFormData, getAdditionalFormData());
        ProjectApi.saveProject(self.projectFormData).then(function(newProjectId) {
          var data = {};
          data[newProjectId] = true;
          UserApi.updateNestedUserPublicData(AuthenticationService.getAuthData().uid, data, 'projectList');
          $location.path('/');
        });
      } else {
        alert('The form is not valid');
      }
    };

    var getAdditionalFormData = function() {
      return {
        creatorId: AuthenticationService.getAuthData().uid,
        createdAt: Date.now(),
        type: 'project',
        display: true
      };
    };
  }

  angular.module('civicMakersClientApp').controller('AddProjectCtrl', AddProjectCtrl);
})();

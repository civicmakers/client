/* global alert */
'use strict';

(function() {
  function AddProjectCtrl($scope, ProjectApi, $location, ToolApi, AuthenticationService, UserApi) {
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

    ToolApi.getAllTools().then(function (tools){
      console.log('add project tools',tools);
      self.tools = tools;
    });

    this.addToTools = function (input) {
      this.selectedTools.push(input);
      this.projectFormData.tools.push(input.$id);
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

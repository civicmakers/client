/* global alert */
'use strict';

(function() {
  function AddProjectCtrl($scope, ProjectApi, $location, ToolApi, AuthenticationService) {
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
      if (!AuthenticationService.isLoggedIn()) {
          AuthenticationService.loginWithTwitter().then(function () {
            submitProjectForm();
          });
      } else {
          submitProjectForm();
      }
    };

    var submitProjectForm = function(){
      if ($scope.projectForm.$valid){
        angular.extend(self.projectFormData, getAdditionalFormData());
        ProjectApi.saveProject(self.projectFormData).then(function() {
          $location.path('/');
        });
      } else {
        alert('The form is not valid');
      }
    };

    var getAdditionalFormData = function() {
      return {
        createdAt: Date.now(),
        type: 'project',
        display: true
      };
    };
  }

  angular.module('civicMakersClientApp').controller('AddProjectCtrl', AddProjectCtrl);
})();

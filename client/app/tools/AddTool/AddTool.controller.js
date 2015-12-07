/* global alert */
'use strict';

(function() {
  function AddToolCtrl($scope, $routeParams, ToolApi, $location, AuthenticationService) {
    var self = this;
    this.toolFormData = {
        // authorIp:
        // cfApiProjId:
        // cfApiOrgId
    };

    this.tagsEntryChanged = function () {
        this.toolFormData.tags = this.tagsEntry.split(', ');
    };

    this.loginAndSubmit = function() {
      if (!AuthenticationService.isLoggedIn()) {
          AuthenticationService.loginWithTwitter().then(function () {
            submitToolForm();
          });
      } else {
          submitToolForm();
      }
    };

    var submitToolForm = function(){
      if ($scope.toolForm.$valid){
        angular.extend(self.toolFormData, getAdditionalFormData());
        ToolApi.saveTool(self.toolFormData).then(function() {
          $location.path('/');
        });
      } else {
        alert('The form is not valid');
      }
    };

    var getAdditionalFormData = function() {
      return {
        createdAt: Date.now(),
        type: 'tool',
        display: true
      };
    };
  }

  angular.module('civicMakersClientApp').controller('AddToolCtrl', AddToolCtrl);
})();

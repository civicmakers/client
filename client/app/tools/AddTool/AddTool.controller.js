/* global alert */
'use strict';

(function() {
  function AddToolCtrl($scope, $routeParams, ToolApi, $location, AuthenticationService, UserApi, BIEventService) {
    var self = this;

    this.toolFormData = {
        // authorIp:
        // cfApiProjId:
        // cfApiOrgId
        avatar: $routeParams.avatar || '',
        description: $routeParams.description || '',
        license: $routeParams.license || '',
        link: $routeParams.link || '',
        name: $routeParams.name || '',
        pricing: $routeParams.pricing || '',
        tags: [$routeParams.tags] || [],
        twitter: $routeParams.twitter || '',
        image: $routeParams.screenshot || ''
    };
    if (this.toolFormData.tags[0] && this.toolFormData.tags[0].indexOf(',') > -1) {
      this.toolFormData.tags = this.toolFormData.tags[0].split(',');
    }
    this.tagsEntry = this.toolFormData.tags.join(', ');
    this.tagsEntryChanged = function () {
        this.toolFormData.tags = this.tagsEntry.split(', ');
    };

    this.loginAndSubmit = function() {
      AuthenticationService.loginWithTwitter().then(function () {
        submitToolForm();
      });
    };

    var submitToolForm = function(){
      if ($scope.toolForm.$valid){
        BIEventService.sendBIEvent('add-tool-submit', 'tools');
        angular.extend(self.toolFormData, getAdditionalFormData());
        ToolApi.saveTool(self.toolFormData).then(function(newToolId) {
          var data = {};
          data[newToolId] = true;
          UserApi.updateNestedUserPublicData(AuthenticationService.getAuthData().uid, data, 'toolList');
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
        type: 'tool',
        display: true
      };
    };
  }

  angular.module('civicMakersClientApp').controller('AddToolCtrl', AddToolCtrl);
})();

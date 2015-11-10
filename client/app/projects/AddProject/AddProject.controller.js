/* global alert */
'use strict';

angular.module('civicMakersClientApp')
  .controller('AddProjectCtrl', function ($scope, ProjectApi, $location, ToolApi) {

    $scope.projectFormData = {
        createdAt: Date.now(),
// TODO: prevent duplicates
        tools: [],
        type: 'project',
        display: true,
        // authorIp:
        // cfApiProjId:
        // cfApiOrgId
    };

    ToolApi.getAllTools().then(function (tools){
      console.log('add project tools',tools);
      $scope.tools = tools;
    });

    $scope.addToTools = function (input) {
      $scope.selectedTools.push(input);
      $scope.projectFormData.tools.push(input.$id);
    };
// TODO: prevent duplicates
    $scope.selectedTools = [];

    $scope.tagsEntryChanged = function () {
        $scope.projectFormData.tags = $scope.tagsEntry.split(', ');
    };

    $scope.submitProjectForm = function(newProject){

      if ($scope.projectForm.$valid){
        console.log(newProject);
        ProjectApi.saveProject(newProject).then(function(result){
          console.log('Did it work?:', result);
          $location.path('/');
        });
      }
      else {
        alert('The form is not valid');
      }

    };

  });

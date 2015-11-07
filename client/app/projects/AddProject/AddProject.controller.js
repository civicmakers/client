'use strict';

angular.module('civicMakersClientApp')
  .controller('AddProjectCtrl', function ($scope, ProjectApi, $location) {

    $scope.projectFormData = {
        created_at: Date.now(),
        type: 'project'
    };

    $scope.submitProjectForm = function(newProject){

      if ($scope.projectForm.$valid){
        console.log(newProject);
        ProjectApi.saveProject(newProject).then(function(result){
          console.log('Did it work?:', result);
          $location.path('/')
        })
      }
      else {
        alert('The form is not valid');
      };

    };

  });

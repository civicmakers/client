'use strict';

angular.module('civicMakersClientApp')
  .controller('AddToolCtrl', function ($scope, $routeParams, ToolApi, $location) {

    $scope.toolFormData = {
        created_at: Date.now(),
        type: 'tool'
    };

    $scope.submitToolForm = function(newTool){

      if ($scope.toolForm.$valid){
        console.log(newTool);
        ToolApi.save(newTool).then(function(result){
          console.log('Did it work?:', result);
          $location.path('/')
        })
      } else{
        alert('The form is not valid');
      }

    };


  });

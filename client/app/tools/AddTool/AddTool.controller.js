'use strict';

angular.module('civicMakersClientApp')
  .controller('AddToolCtrl', function ($scope, $routeParams, ToolApi) {
    $scope.toolFormData = {};
    $scope.submitToolForm = function(newTool){
      if ($scope.toolForm.$valid){
        console.log(newTool);    
        ToolApi.save(newTool).then(function(result){
          console.log('Did it work?:', result);
        })
      } else{
        alert('the form is not valid');
      }
    }
  });

'use strict';

angular.module('civicMakersClientApp')
  .controller('AddToolCtrl', function ($scope, $routeParams, ToolApi, $location) {

    $scope.toolFormData = {
        created_at: Date.now(),
        type: 'tool',
    };

    $scope.tagsEntryChanged = function () {
        $scope.toolFormData.tags = $scope.tagsEntry.split(', ')
    }

    $scope.submitToolForm = function(newTool){

      if ($scope.toolForm.$valid){
        console.log(newTool);
        ToolApi.saveTool(newTool).then(function(result){
          console.log('Did it work?:', result);
          $location.path('/')
        })
      }
      else {
        alert('The form is not valid');
      };

    };

});

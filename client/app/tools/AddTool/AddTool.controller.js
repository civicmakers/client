'use strict';

angular.module('civicMakersClientApp')
  .controller('AddToolCtrl', function ($scope, $routeParams, ToolApi) {
    $scope.toolFormData = {};
    $scope.submitToolForm = function(form){
      if ($scope.toolForm.$valid){
        console.log(form);    
        // window.location.replace("/")
      } else{
        alert('the form is not valid');
      }
    }
  	// console.log("routeParams",$routeParams)
    // $scope.tool = ToolApi.queryTool($routeParams.toolID);
  });

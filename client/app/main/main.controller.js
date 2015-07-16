'use strict';

angular.module('civicMakersClientApp')
  .controller('MainCtrl', function ($scope, $http, ProjectApi) {

//TEST:
    console.log("projectapi", ProjectApi.getAllProjects())

    // ToDo: configure this to use a promise once we have real API and ApiConfig factory is set up.
    $scope.projects = ProjectApi.getAllProjects()

    // ProjectApi
    //   .getAllProjects().then(function (response) {
    //     console.log("response", response)
    //   })

  });

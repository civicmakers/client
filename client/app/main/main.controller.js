'use strict';

angular.module('civicMakersClientApp')
  .controller('MainCtrl', function ($scope, $http, ProjectApi, ToolApi, AuthorApi) {

//TESTs:
    console.log("projectapi", ProjectApi.getAllProjects());
    console.log("Toolapi", ToolApi.getAllTools());
    console.log("Authorapi", AuthorApi.getAllAuthors());


    // ToDo: configure this to use a promise once we have real API and ApiConfig factory is set up.
    // For now using this line, but will use api call with .then() once configured
    $scope.projects = ProjectApi.getAllProjects();
    $scope.tools = ToolApi.getAllTools();
    $scope.authors = AuthorApi.getAllAuthors();



    // ProjectApi
    //   .getAllProjects().then(function (response) {
    //     console.log("response", response)
    //   })

  });

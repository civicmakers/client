'use strict';

angular.module('civicMakersClientApp')
  .controller('AuthorCtrl', function ($scope, $routeParams, AuthorApi) {
    console.log("routeParams",$routeParams)
    $scope.author = AuthorApi.queryAuthor($routeParams.authorID);
  });

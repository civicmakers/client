'use strict';

angular.module('civicMakersClientApp')
  .controller('AuthorCtrl', function ($scope, $routeParams, AuthorApi) {

    console.log('routeParams', $routeParams.authorID);

    AuthorApi.queryAuthor($routeParams.authorId).then(function (author){
      $scope.author = author.data[0];
    });

  });

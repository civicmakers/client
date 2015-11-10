'use strict';

angular.module('civicMakersClientApp')
  .controller('AuthorsCtrl', function ($scope, AuthorApi) {

    AuthorApi.getAllAuthors().then(function (authors){
      console.log('authors', authors);
      $scope.authors = authors;
    });

  });

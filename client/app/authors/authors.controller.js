'use strict';

angular.module('civicMakersClientApp')
  .controller('AuthorsCtrl', function ($scope, AuthorApi) {
    $scope.authors = AuthorApi.getAllAuthors();
  });

'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/authors', {
        templateUrl: 'app/authors/authors.html',
        controller: 'AuthorsCtrl'
      });
  });

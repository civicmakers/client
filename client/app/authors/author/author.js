'use strict';

angular.module('civicMakersClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/author/:authorId', {
        templateUrl: 'app/authors/author/author.html',
        controller: 'AuthorCtrl'
      });
  });

'use strict';

angular.module('civicMakersClientApp')
  .directive('search', function () {
    return {
      templateUrl: 'app/directives/search/search.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      // link: function (scope) {};
      controller: 'SearchController'
    };
  });
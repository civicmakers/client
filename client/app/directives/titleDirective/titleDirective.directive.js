'use strict';

angular.module('civicMakersClientApp')
  .directive('titleDirective', function () {
    return {
      templateUrl: 'app/directives/titleDirective/titleDirective.html',
      restrict: 'EA',
      scope: {
        data: '='
      },
      link: function (scope, element, attrs) {
        scope.data = scope.data
        scope.upcase = function (input) {
          return input.toUpperCase()
        }
      }
    };
  });
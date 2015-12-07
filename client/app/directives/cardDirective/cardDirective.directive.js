'use strict';

angular.module('civicMakersClientApp')
  .directive('cardDirective', function () {
    return {
      templateUrl: 'app/directives/cardDirective/cardDirective.html',
      restrict: 'EA',
      scope: {
        data: '='
      },
      link: function (scope) {
        scope.data = scope.data;
        if (scope.data.description.length > 40) {
          scope.data.description = scope.data.description
            .slice(0, 50) + '...';
        }
      }
    };
  });

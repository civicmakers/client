'use strict';

angular.module('civicMakersClientApp')
  .directive('titleDirective', function () {
    return {
      templateUrl: 'app/directives/titleDirective/titleDirective.html',
      restrict: 'EA',
      scope: {
        data: '='
      }
    };
  });

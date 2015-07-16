'use strict';

angular.module('civicMakersClientApp')
  .directive('authorCard', function () {
    return {
      templateUrl: 'app/directives/authorCard/authorCard.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
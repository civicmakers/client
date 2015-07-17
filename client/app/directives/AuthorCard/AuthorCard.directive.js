'use strict';

angular.module('civicMakersClientApp')
  .directive('authorCard', function () {
    return {
      templateUrl: 'app/directives/authorCard/authorCard.html',
      restrict: 'EA',
      scope: {
        authorData: '='
      },
      link: function (scope, element, attrs) {
        console.log("Author: ", scope.authorData)
      }
    };
  });
'use strict';

angular.module('civicMakersClientApp')
  .directive('toolCard', function () {
    return {
      templateUrl: 'app/directives/toolCard/toolCard.html',
      restrict: 'EA',
      scope: {
        toolData: '='
      },
      link: function (scope, element, attrs) {
        console.log("Tool: ", scope.toolData)
      }
    };
  });
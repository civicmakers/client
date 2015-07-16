'use strict';

angular.module('civicMakersClientApp')
  .directive('projectCard', function () {
    return {
      templateUrl: 'app/directives/projectCard/projectCard.html',
      restrict: 'EA',
      scope: {
        projectData: '='
      },
      link: function (scope, element, attrs) {
        console.log("plan", scope.projectData)
      }
    };
  });
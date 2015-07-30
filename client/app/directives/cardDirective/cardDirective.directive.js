'use strict';

angular.module('civicMakersClientApp')
  .directive('cardDirective', function () {
    return {
      templateUrl: 'app/directives/cardDirective/cardDirective.html',
      restrict: 'EA',
      scope: {
        data: '='
      },
      link: function (scope, element, attrs) {

        // console.log("Data: ", scope.data);

        scope.type = function (type) {
          switch (type) {
            case 'tools':
              return 'tool';
            case 'projects':
              return 'project';
            case 'profiles':
              return 'author';
            case 'topics':
              return 'topic';
            }
          }
        }

      }
    // };
  });
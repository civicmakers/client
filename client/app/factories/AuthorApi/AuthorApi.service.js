'use strict';

angular.module('civicMakersClientApp')
  .factory('AuthorApi', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

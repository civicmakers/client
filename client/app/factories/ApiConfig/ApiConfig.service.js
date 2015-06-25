'use strict';

angular.module('civicMakersClientApp')
  .factory('ApiConfig', function () {
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

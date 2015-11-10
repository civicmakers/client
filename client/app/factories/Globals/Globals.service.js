'use strict';

angular.module('civicMakersClientApp')
  .factory('Globals', function () {

    // var Globals = {
    //     'firebaseBaseUrl': 'civicmakers.firebaseIO.com'
    // }

    var firebaseBaseUrl = 'civicmakers.firebaseIO.com';

    return {
      firebaseBaseUrl: firebaseBaseUrl
    };

  });

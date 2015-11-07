'use strict';

angular.module('civicMakersClientApp')
  .factory('firebase', function ($q) {

    var baseUrl = 'civicmakers.firebaseIO.com'

    function getRef (){
    	var ref = new Firebase(baseUrl);
      return ref;
    }

    return {
      getRef: getRef,
      baseUrl: baseUrl
    }
  })

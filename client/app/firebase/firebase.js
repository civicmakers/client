'use strict';

(function () {
  function firebase () {
    var baseUrl = 'civicmakers.firebaseIO.com';

    function getRef (){
      var ref = new Firebase(baseUrl);
      return ref;
    }

    function createIfDoesntExist (url, entryId, dataToSave, callbackOnSave) {
      var usersRef = new Firebase(url);
      usersRef.child(entryId).transaction(function (currentSavedData) {
        // if currentSavedData is null it means that it doesn't exist in the db yet and we need to create it
        if (currentSavedData === null) {
            return dataToSave;
          }
      // isCommittedSuccessfully - if true means that it was successfully created, false means it already existed
      }, function(error, isCommittedSuccessfully) {
        if (error) {
          console.log('transaction failed with error: ', error);
          return;
        }
        if (callbackOnSave) {
          callbackOnSave(entryId, isCommittedSuccessfully);
        }
      });
    }

    return {
      getRef: getRef,
      baseUrl: baseUrl,
      createIfDoesntExist: createIfDoesntExist
    };
  }

  angular.module('civicMakersClientApp').factory('firebase', firebase);
})();
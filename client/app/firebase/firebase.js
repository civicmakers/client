/* global Firebase */
'use strict';

(function () {
  function firebase ($q) {
    var baseUrl = 'civicmakers.firebaseIO.com';

    function getRef (){
      var ref = new Firebase(baseUrl);
      return ref;
    }

    function getRefTo (url) {
      var ref = new Firebase(baseUrl + '/' + url);
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

    function updateData(url, entryId, dataToUpdate) {
      var usersRef = new Firebase(url);
      usersRef.child(entryId).update(dataToUpdate, function(error) {
        if (error) {
          console.log('An error occured while trying to update data for entry: ' + entryId + ', in url: ' + url, error);
        }
      });
    }

    function checkIfExist(url, entryId, valueToCheck) {
      var deffered = $q.defer();
      var usersRef = new Firebase(url);
      usersRef.child(entryId).child(valueToCheck).once('value', function(snapshot) {
        deffered.resolve(snapshot.exists());
      });
      return deffered.promise;
    }

    return {
      getRef: getRef,
      getRefTo: getRefTo,
      baseUrl: baseUrl,
      createIfDoesntExist: createIfDoesntExist,
      updateData: updateData,
      checkIfExist: checkIfExist
    };
  }

  angular.module('civicMakersClientApp').factory('firebase', firebase);
})();
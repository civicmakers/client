/* global Firebase */
'use strict';

(function () {
  function firebase ($q, ENV) {
    var baseUrl = ENV.firebaseUrl;

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
      var ref = new Firebase(url);
      ref.child(entryId).update(dataToUpdate, function(error) {
        if (error) {
          console.log('An error occured while trying to update data for entry: ' + entryId + ', in url: ' + url, error);
        }
      });
    }

    function pushData(url, dataToPush) {
      var ref = new Firebase(url);
      return ref.push(dataToPush); // returns the ref to the just created object
    }

    function checkIfExist(url, entryId, valueToCheck) {
      var deffered = $q.defer();
      var usersRef = new Firebase(url);
      usersRef.child(entryId).child(valueToCheck).once('value', function(snapshot) {
        deffered.resolve(snapshot.exists());
      });
      return deffered.promise;
    }

    // This function is NOT connected to anything!!
    // It's meant for renaming keys in the firebase db - do not use it unless you know what you're doing :)
    // 
    // function renameKeys(relativeUrlToParent, currentKeyName, newKeyName) {
    //   var ref = new Firebase(baseUrl + relativeUrlToParent);
    //   ref.once('value', function (snapshot) {
    //     if (snapshot) {
    //       snapshot.forEach(function (childSnapshot) {
    //         var keySnapshot = childSnapshot.child(currentKeyName);
    //         if (keySnapshot.exists()) {
    //           var value = keySnapshot.val();
    //           var objectToInsert = {};
    //           objectToInsert[newKeyName] = value;
    //           childSnapshot.ref().update(objectToInsert, function (error) {
    //             if (error) {
    //               console.log('Failed to rename: ' + currentKeyName + ' to: ' + newKeyName);
    //             } else {
    //               keySnapshot.ref().remove();
    //             }
    //           });  
    //         }
            
    //       });
    //     }
    //   });
    // }

    return {
      getRef: getRef,
      getRefTo: getRefTo,
      baseUrl: baseUrl,
      createIfDoesntExist: createIfDoesntExist,
      updateData: updateData,
      pushData: pushData,
      checkIfExist: checkIfExist
    };
  }

  angular.module('civicMakersClientApp').factory('firebase', firebase);
})();
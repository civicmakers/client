'use strict';

angular.module('civicMakersClientApp')
  .factory('AuthorApi', function ($q, firebase, $firebaseArray) {

    function getAllAuthors() {
      // var deferred = $q.defer();
      // firebase.getRef()
      //   .child('profiles')
      //   .on('value', function(snapshot) {
      //     deferred.resolve(snapshot.val());
      //   });
      // return deferred.promise;
      var deferred = $q.defer();
      var ref = new Firebase(firebase.baseUrl + '/profiles')
      var tools = $firebaseArray(ref)
      tools.$loaded().then(function (results) {
        console.log('profiles',results)
        deferred.resolve(results)
      })
      return deferred.promise;
    };

    function getFirstNAuthors(n) {
      var deferred = $q.defer();
      getAllAuthors().then(function(authors) {
        deferred.resolve(authors.slice(0, n));
      })
      return deferred.promise;
    };

    function getAuthorsNum() {
      var deferred = $q.defer();
      getAllAuthors().then(function(authors) {
        deferred.resolve(authors.length);
      })
      return deferred.promise;
    };

    function queryAuthor(id) {
      var deferred = $q.defer();
      getAllAuthors().then(function(authors) {
        authors.forEach(function(author) {
          if (author.data[0].id === id) {
            deferred.resolve(author);
          }
        })
      })
      return deferred.promise;
    }

    return {
      getAllAuthors: getAllAuthors,
      queryAuthor: queryAuthor,
      getFirstNAuthors: getFirstNAuthors,
      getAuthorsNum: getAuthorsNum,
    };

});
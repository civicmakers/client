'use strict';

(function () {
  function ProfileCardDirective() {
    return {
      templateUrl: 'app/directives/profileCard/profileCard.html',
      restrict: 'E',
      scope: {},
      bindToController: {
        data: '='
      },
      controller: 'ProfileCardCtrl',
      controllerAs: 'profileCardCtrl',
    };
  }

  function ProfileCardCtrl(UserApi, $scope) {
    var self = this;

    // watch the data until it's set and then do api call to get creator name
    var dataSetListener = $scope.$watch(function() {
      return self.data;
    }, function(newValue) {
      if (newValue) {
        UserApi.getUserDisplayDetailsById(self.data.creatorId).then(function (creatorDetails) {
          self.creatorInfo = {
            displayName: creatorDetails.displayName,
            avatar: creatorDetails.avatar
          };
        });
        // removes the $watch since we don't need it after the first time we enter
        dataSetListener();
      }
    });
  }

  angular.module('civicMakersClientApp').directive('profileCard', ProfileCardDirective);
  angular.module('civicMakersClientApp').controller('ProfileCardCtrl', ProfileCardCtrl);
})();

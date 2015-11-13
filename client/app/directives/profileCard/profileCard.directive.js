'use strict';

angular.module('civicMakersClientApp')
  .directive('profileCard', function () {
    return {
      templateUrl: 'app/directives/profileCard/profileCard.html',
      restrict: 'E',
      scope: {},
      bindToController: {
      	data: '='
      },
      controller: function ProfileCardCtrl(){
        this.tagBGColor = [
          'bg-orange',
          'bg-blue',
          'bg-purple'
        ];
      },
      controllerAs: 'profileCardCtrl',
    };

});


'use strict';

describe('Controller: AddProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('civicMakersClientApp'));

  var AddProjectCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddProjectCtrl = $controller('AddProjectCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

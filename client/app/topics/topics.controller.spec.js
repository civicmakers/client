'use strict';

describe('Controller: TopicsCtrl', function () {

  // load the controller's module
  beforeEach(module('civicMakersClientApp'));

  var TopicsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopicsCtrl = $controller('TopicsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

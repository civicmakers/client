'use strict';

describe('Controller: ToolsCtrl', function () {

  // load the controller's module
  beforeEach(module('civicMakersClientApp'));

  var ToolsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsCtrl = $controller('ToolsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

'use strict';

describe('Directive: toolCard', function () {

  // load the directive's module and view
  beforeEach(module('civicMakersClientApp'));
  beforeEach(module('app/directives/toolCard/toolCard.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-tool-card></-tool-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the toolCard directive');
  }));
});
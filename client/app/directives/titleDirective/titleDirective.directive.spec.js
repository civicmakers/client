'use strict';

describe('Directive: titleDirective', function () {

  // load the directive's module and view
  beforeEach(module('civicMakersClientApp'));
  beforeEach(module('app/directives/titleDirective/titleDirective.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<title-directive></title-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the titleDirective directive');
  }));
});
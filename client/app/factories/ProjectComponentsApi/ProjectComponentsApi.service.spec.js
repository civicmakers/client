'use strict';

describe('Service: ProjectComponentsApi', function () {

  // load the service's module
  beforeEach(module('civicMakersClientApp'));

  // instantiate service
  var ProjectComponentsApi;
  beforeEach(inject(function (_ProjectComponentsApi_) {
    ProjectComponentsApi = _ProjectComponentsApi_;
  }));

  it('should do something', function () {
    expect(!!ProjectComponentsApi).toBe(true);
  });

});

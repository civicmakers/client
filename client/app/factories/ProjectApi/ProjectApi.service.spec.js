'use strict';

describe('Service: ProjectApi', function () {

  // load the service's module
  beforeEach(module('civicMakersClientApp'));

  // instantiate service
  var ProjectApi;
  beforeEach(inject(function (_ProjectApi_) {
    ProjectApi = _ProjectApi_;
  }));

  it('should do something', function () {
    expect(!!ProjectApi).toBe(true);
  });

});

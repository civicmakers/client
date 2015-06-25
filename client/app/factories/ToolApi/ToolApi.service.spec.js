'use strict';

describe('Service: ToolApi', function () {

  // load the service's module
  beforeEach(module('civicMakersClientApp'));

  // instantiate service
  var ToolApi;
  beforeEach(inject(function (_ToolApi_) {
    ToolApi = _ToolApi_;
  }));

  it('should do something', function () {
    expect(!!ToolApi).toBe(true);
  });

});

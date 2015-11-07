'use strict';

describe('Service: Globals', function () {

  // load the service's module
  beforeEach(module('civicMakersClientApp'));

  // instantiate service
  var Globals;
  beforeEach(inject(function (_Globals_) {
    Globals = _Globals_;
  }));

  it('should do something', function () {
    expect(!!Globals).toBe(true);
  });

});

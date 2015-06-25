'use strict';

describe('Service: ApiConfig', function () {

  // load the service's module
  beforeEach(module('civicMakersClientApp'));

  // instantiate service
  var ApiConfig;
  beforeEach(inject(function (_ApiConfig_) {
    ApiConfig = _ApiConfig_;
  }));

  it('should do something', function () {
    expect(!!ApiConfig).toBe(true);
  });

});

'use strict';

describe('Service: AuthorApi', function () {

  // load the service's module
  beforeEach(module('civicMakersClientApp'));

  // instantiate service
  var AuthorApi;
  beforeEach(inject(function (_AuthorApi_) {
    AuthorApi = _AuthorApi_;
  }));

  it('should do something', function () {
    expect(!!AuthorApi).toBe(true);
  });

});

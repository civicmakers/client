'use strict';

describe('Service: TopicApi', function () {

  // load the service's module
  beforeEach(module('civicMakersClientApp'));

  // instantiate service
  var TopicApi;
  beforeEach(inject(function (_TopicApi_) {
    TopicApi = _TopicApi_;
  }));

  it('should do something', function () {
    expect(!!TopicApi).toBe(true);
  });

});

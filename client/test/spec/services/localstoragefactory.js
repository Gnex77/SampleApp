'use strict';

describe('Service: localStorageFactory', function () {

  // load the service's module
  beforeEach(module('sampleCartClientApp'));

  // instantiate service
  var localStorageFactory;
  beforeEach(inject(function (_localStorageFactory_) {
    localStorageFactory = _localStorageFactory_;
  }));

  it('should do something', function () {
    expect(!!localStorageFactory).toBe(true);
  });

});

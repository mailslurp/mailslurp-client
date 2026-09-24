'use strict';

var assert = require('assert');
var MailSlurp = require('../dist').MailSlurp;
var originalFetch = global.fetch;
var originalFormData = global.FormData;
var originalURLSearchParams = global.URLSearchParams;
var customFetchCalls = 0;

function successfulResponse() {
  return { status: 200 };
}

function customFetch(url, init) {
  customFetchCalls += 1;
  assert.strictEqual(url, 'https://example.invalid/user/info');
  assert.strictEqual(init.method, 'GET');
  assert.strictEqual(init.headers['x-api-key'], 'test-api-key');
  return Promise.resolve(successfulResponse());
}

var customClient = new MailSlurp({
  apiKey: 'test-api-key',
  basePath: 'https://example.invalid',
  fetchApi: customFetch,
});
var defaultClient = new MailSlurp({
  apiKey: 'test-api-key',
  basePath: 'https://example.invalid',
});

// Emulate legacy Node runtimes that do not define browser body types.
global.FormData = undefined;
delete global.URLSearchParams;

customClient.userController
  .getUserInfoRaw()
  .then(function () {
    assert.strictEqual(customFetchCalls, 1);
    global.URLSearchParams = originalURLSearchParams;
    global.FormData = originalFormData;

    var globalFetchCalls = 0;
    global.fetch = function () {
      globalFetchCalls += 1;
      return Promise.resolve(successfulResponse());
    };

    return defaultClient.userController.getUserInfoRaw().then(function () {
      assert.strictEqual(globalFetchCalls, 1);
    });
  })
  .then(function () {
    global.fetch = originalFetch;
    console.log('Runtime smoke test passed on ' + process.version);
  })
  .catch(function (error) {
    global.URLSearchParams = originalURLSearchParams;
    global.FormData = originalFormData;
    global.fetch = originalFetch;
    console.error(error);
    process.exitCode = 1;
  });

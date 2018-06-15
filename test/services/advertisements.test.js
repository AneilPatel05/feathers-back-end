const assert = require('assert');
const app = require('../../src/app');

describe('\'advertisements\' service', () => {
  it('registered the service', () => {
    const service = app.service('advertisements');

    assert.ok(service, 'Registered the service');
  });
});

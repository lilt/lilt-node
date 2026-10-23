// The API key set on ApiKeyAuth is sent as HTTP Basic auth, never as the `key` query parameter.
const expect = require('expect.js');
const LiltNode = require(process.cwd() + '/src/index');

function stubRequest() {
  const calls = { auth: [], query: [], set: [] };
  return {
    calls,
    auth(username, password) { calls.auth.push([username, password]); return this; },
    query(params) { calls.query.push(params); return this; },
    set(headers) { calls.set.push(headers); return this; }
  };
}

describe('ApiKeyAuth', function () {
  it('sends the API key as HTTP Basic auth and never as a query parameter', function () {
    const client = new LiltNode.ApiClient();
    client.authentications['ApiKeyAuth'].apiKey = 'secret';
    const request = stubRequest();

    client.applyAuthToRequest(request, ['ApiKeyAuth', 'BasicAuth']);

    expect(request.calls.auth).to.eql([['secret', 'secret']]);
    expect(request.calls.query).to.eql([]);
  });

  it('matches BasicAuth configured with the key twice', function () {
    const client = new LiltNode.ApiClient();
    client.authentications['BasicAuth'].username = 'secret';
    client.authentications['BasicAuth'].password = 'secret';
    const request = stubRequest();

    client.applyAuthToRequest(request, ['BasicAuth']);

    expect(request.calls.auth).to.eql([['secret', 'secret']]);
  });

  it('adds nothing when no key is configured', function () {
    const client = new LiltNode.ApiClient();
    const request = stubRequest();

    client.applyAuthToRequest(request, ['ApiKeyAuth', 'BasicAuth']);

    expect(request.calls.auth).to.eql([]);
    expect(request.calls.query).to.eql([]);
  });
});

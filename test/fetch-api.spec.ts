import { Response } from 'cross-fetch';
import { FetchAPI, MailSlurp } from '../dist';

describe('fetch configuration', () => {
  test('uses a custom fetch implementation for generated controllers', async () => {
    const requests: Array<{ init?: RequestInit; url: RequestInfo | URL }> = [];
    const fetchApi: FetchAPI = async (url, init) => {
      requests.push({ init, url });
      return new Response('{}', {
        headers: { 'content-type': 'application/json' },
        status: 200,
      });
    };
    const mailslurp = new MailSlurp({
      apiKey: 'test-api-key',
      basePath: 'https://example.invalid',
      fetchApi,
      headers: { 'x-client-header': 'configured' },
    });

    await mailslurp.userController.getUserInfoRaw();

    expect(requests).toHaveLength(1);
    expect(requests[0].url).toEqual('https://example.invalid/user/info');
    expect(requests[0].init?.method).toEqual('GET');
    expect(requests[0].init?.headers).toMatchObject({
      'x-api-key': 'test-api-key',
      'x-client-header': 'configured',
    });
  });

  test('continues to use global fetch when no override is provided', async () => {
    const previousFetch = global.fetch;
    const requests: Array<{ init?: RequestInit; url: RequestInfo | URL }> = [];
    const mailslurp = new MailSlurp({
      apiKey: 'test-api-key',
      basePath: 'https://example.invalid',
    });
    global.fetch = (async (url, init) => {
      requests.push({ init, url });
      return new Response('{}', {
        headers: { 'content-type': 'application/json' },
        status: 200,
      });
    }) as FetchAPI;

    try {
      await mailslurp.userController.getUserInfoRaw();

      expect(requests).toHaveLength(1);
      expect(requests[0].url).toEqual('https://example.invalid/user/info');
    } finally {
      global.fetch = previousFetch;
    }
  });
});

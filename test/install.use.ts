import { ApiResponse, Configuration, InboxDto, MailSlurp } from '../dist';
import crossFetch from 'cross-fetch';

test('quick start', async () => {
  //<gen>quick_start
  // import mailslurp-client
  const MailSlurp = require('mailslurp-client').default;
  // OR import { MailSlurp } from "mailslurp-client"

  // create a client
  const apiKey = process.env.API_KEY ?? 'your-api-key';
  const mailslurp = new MailSlurp({ apiKey });

  // create an inbox
  const inbox = await mailslurp.inboxController.createInbox({});
  expect(inbox.emailAddress).toContain('@mailslurp');
  //</gen>
});

test('fetch setup', async () => {
  const apiKey = process.env.API_KEY ?? 'your-api-key';
  //<gen>fetch_setup
  const { MailSlurp } = require('mailslurp-client');
  const crossFetch = require('cross-fetch');
  const mailslurp = new MailSlurp({
    fetchApi: crossFetch,
    apiKey: apiKey,
  });
  //</gen>
  //<gen>fetch_raw
  // use methods with `Raw` suffix to access a wrapped response
  // that contains the status instead of throwing an exception
  const inboxRaw: ApiResponse<InboxDto> =
    await mailslurp.inboxController.createInboxRaw({});
  expect(inboxRaw.raw.ok).toBeTruthy();
  const inbox = await inboxRaw.value();
  expect(inbox.id).toBeTruthy();
  //</gen>
});
test('controller use', async () => {
  const apiKey = process.env.API_KEY ?? 'your-api-key';
  //<gen>controller_use
  // controllers are available on a MailSlurp instance
  const { MailSlurp } = require('mailslurp-client');
  const mailslurp = new MailSlurp({ apiKey });
  await mailslurp.inboxController.createInbox({});
  // or by import controllers and instantiating with a configuration
  const { InboxControllerApi } = require('mailslurp-client');
  const inboxController = new InboxControllerApi(new Configuration({ apiKey }));
  await inboxController.createInbox({});
  //</gen>
});

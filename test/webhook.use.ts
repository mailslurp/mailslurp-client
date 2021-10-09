import MailSlurp, { WebhookNewEmailPayload } from '../dist';

import express from 'express';
import * as bodyParser from 'body-parser';
import fetch from 'isomorphic-fetch';
const port = 4567;

test('webhook server', async () => {
  const config = { apiKey: process.env.API_KEY };
  const mailslurp = new MailSlurp(config);
  //<gen>webhook_server
  // example express server that you control
  const app = express();
  app.use(bodyParser.json());
  // receive new email webhook payload via post
  app.post('/new-email-endpoint', async (request, response) => {
    // can use typescript types
    const payload = request.body as WebhookNewEmailPayload;

    // do something with with email id
    expect(payload.emailId).toBeTruthy();

    // return a 2xx status code so MailSlurp knows you received it
    return response.sendStatus(200);
  });
  const server = app.listen(port);
  //</gen>
  //<gen>webhook_server_test
  // get a test payload for NEW_EMAIL event
  const testPayload =
    await mailslurp.webhookController.getTestWebhookPayloadNewEmail();
  // post payload to your server to test it
  const testResponse = await fetch(
    `http://localhost:${port}/new-email-endpoint`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    }
  );
  // expect 200
  expect(testResponse.status).toEqual(200);
  //</gen>
  server.close();
});

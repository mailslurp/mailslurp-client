# MailSlurp Javascript Client

Create real email addresses on demand. Send and receive emails and attachments from code and tests using Javascript or Typescript.

[MailSlurp](https://www.mailslurp.com) is an email [API](https://docs.mailslurp.com/js/) service that lets you create real email addresses in code. You can then send and receive emails and attachments in Javascript applications and tests. MailSlurp is free for personal use but requires an [API KEY](https://app.mailslurp.com). Please see the [getting started guide](https://www.mailslurp.com/guides/getting-started/) for an introduction on key MailSlurp concepts or continue reading. 

<br/>

![email testing](https://www.mailslurp.com/assets/slurpie-vibrant.png)

## Quick start
Install with npm `npm install --save mailslurp-client` or `yarn add mailslurp-client`

```javascript
// import mailslurp-client
const MailSlurp = require('mailslurp-client').default;
// OR import { MailSlurp } from "mailslurp-client"

// create a client
const apiKey = process.env.API_KEY ?? 'your-api-key';
const mailslurp = new MailSlurp({ apiKey });

// create an inbox
const inbox = await mailslurp.inboxController.createInbox({});
expect(inbox.emailAddress).toContain('@mailslurp');
```

More usage examples are included below.

## Links
Here are some links to get started (or see below for code examples).

- [Main class methods](https://docs.mailslurp.com/js/docs/classes/MailSlurp/)
- [Method Documentation](https://docs.mailslurp.com/js/docs/)
- [NPM Package](https://www.npmjs.com/package/mailslurp-client)
- [REST API Docs](https://docs.mailslurp.com/api/)
- [GraphQL Client](https://www.mailslurp.com/guides/graphql-email-api)
- [Github Source](https://github.com/mailslurp/mailslurp-client)

## Get started

This section describes how to get up and running with the Javascript client.

See the [guides page](https://www.mailslurp.com/guides/) for more examples and use with common frameworks. For use with CypressJS see the official [Cypress MailSlurp plugin](https://www.npmjs.com/package/cypress-mailslurp).

See the method documentation for a [list of all functions](https://docs.mailslurp.com/js/docs/). 

> See the `test/integration.spec.ts` in this package for usage examples of this client.

### Create API Key

First you'll need an API Key. [Create a free account](https://app.mailslurp.com) and copy the key from your dashboard.

![api-key](https://mailslurp.com/assets/guides/find-api-key.png)

### Install NPM dependency

Install MailSlurp using NPM (NodeJS) or by including the [source code](https://github.com/mailslurp/mailslurp-client) in your project.

```bash
npm install --save mailslurp-client
```

## Using in code
Here is how to use MailSlurp in your project.

### Import MailSlurp library
```javascript
const MailSlurp = require("mailslurp-client").default;
// or
import { MailSlurp } from "mailslurp-client";
```

### Instantiate a MailSlurp client

Create a MailSlurp instance by instantiating a class with [your API Key](https://app.mailslurp.com).

```javascript
const mailslurp = new MailSlurp({ apiKey: "your_api_key" });
```


#### Timeouts
MailSlurp API endpoints are built to hold a connection open if the query is told to wait for certain conditions - like a new email arriving. For this reason it is important to use appropriate timeouts in tests or when settings up a fetch client.

> MailSlurp recommends a 60_000 ms timeout to ensure emails arrive consistently. SMTP is a slow protocol so you may need to allow time for emails to arrive.


#### Fetch settings
MailSlurp is built on Javascript `fetch`. If you want to override the default `fetch` client you can do so when configuring MailSlurp.

```typescript
const { MailSlurp } = require('mailslurp-client');
const isomorphicFetch = require('isomorphic-fetch');
const mailslurp = new MailSlurp({
  fetchApi: isomorphicFetch,
  apiKey: apiKey,
});
```

#### Fetch handling exceptions
Any method that returns non-2xx response throws an exception by default (unless you use methods with the `Raw` suffix). There are valid 404 responses that you should handle, these include the 408 returned from `waitFor` methods when the required matching emails could not be found.

- `4xx` (400, 404...) response codes indicate a client error. Access the error message on the response body
- `5xx` (500, 501...) response codes indicate a server error. If encountered please contact support.

```typescript
try {
  await mailslurp.waitController.waitForLatestEmail({
    inboxId: inboxId,
    timeout: timeout,
    unreadOnly: true,
  });
} catch (e) {
  // handle the error and status code in your code
  const statusCode = e.status;
  const errorMessage = await e.text();

  expect(errorMessage).toContain('Failed to satisfy email query for inbox');
  expect(statusCode).toEqual(408);
}
```

#### Fetch without exceptions (using ApiResponse)
If you prefer not to use `try/catch` you can use methods with the `Raw` suffix. These methods return an `ApiResponse<T>` that includes a status and result instead of throwing exceptions.

```typescript
// use methods with `Raw` suffix to access a wrapped response
// that contains the status instead of throwing an exception
const inboxRaw: ApiResponse<InboxDto> =
  await mailslurp.inboxController.createInboxRaw({});
expect(inboxRaw.raw.ok).toBeTruthy();
const inbox = await inboxRaw.value();
expect(inbox.id).toBeTruthy();
```

### API Controllers
Note the `MailSlurp` object is a class with many common methods. It does not contain all MailSlurp API methods. **The full API is available as individually exported controllers**.

See the [MailSlurp class documentation](https://docs.mailslurp.com/js/docs/classes/MailSlurp/) for all methods or
see the `test/integration.spec.ts` file for usage examples. You can also instantiate controllers directly. See the [API controllers](https://docs.mailslurp.com/js/docs/classes/) for method details.

```javascript
// controllers are available on a MailSlurp instance
const { MailSlurp } = require('mailslurp-client');
const mailslurp = new MailSlurp({ apiKey });
await mailslurp.inboxController.createInbox({});
// or by import controllers and instantiating with a configuration
const { InboxControllerApi } = require('mailslurp-client');
const inboxController = new InboxControllerApi(new Configuration({ apiKey }));
await inboxController.createInbox({});
```

## Common usage examples

Here are some snippets of common usage.

### Create an email address
MailSlurp inboxes have real email addresses. There are several ways to create them. See the docs for full [inbox object reference](https://docs.mailslurp.com/js/docs/modules/Inbox/).
Inboxes can be either `SMTP` or `HTTP` type mailboxes. `HTTP` inboxes are powered by AWS SES and are great for most use cases. `SMTP` inboxes use a custom mail server running at `mx.mailslurp.com` to support older email clients. `SMTP` inboxes are more suitable for public facing usage.

#### Simple usage
You can create an inbox with a randomly assigned email address ending in `@mailslurp.com` like so:

```javascript
const inbox = await mailslurp.createInbox();
// { id: '123', emailAddress: '123@mailslurp.com' }
```

#### Create inbox options
Use the `createInboxWithOptions` or methods on the `inboxController` property to create email addresses using more options.

```javascript
await mailslurp.inboxController.createInbox({});
```

> To use custom domains see the [domain verification guide](https://www.mailslurp.com/guides/custom-domains/)

### Get an inbox
Inboxes have real email addresses. See the [inbox reference](https://docs.mailslurp.com/js/docs/modules/Inbox/) for all properties.

```javascript
const mailslurp = new MailSlurp(config);
const { id: inboxId } = await mailslurp.createInbox();
const inbox = await mailslurp.getInbox(inboxId);
expect(inbox.id).toEqual(inboxId);
```

### Access mailbox and emails using SMTP client
You can access SMTP_INBOX type inboxes using an SMTP client like nodemailer. First create an inbox then call the `getImapSmtpAccessDetails` function to obtain SMTP username and password:

```javascript
const {MailSlurp} = require('mailslurp-client');
const nodemailer = require("nodemailer");
const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

// get access details for smpt server
const server = await mailslurp.getImapSmtpAccessDetails();

// use details to configure SMTP client like NodeMailer
const opts = {
    host: server.smtpServerHost,
    port: server.smtpServerPort,
    secure: false, // Disable tls recommended
    auth: {
        user: server.smtpUsername,
        pass: server.smtpPassword,
        type: "PLAIN" // Note the use of PLAIN AUTH
    },
}
const transport = nodemailer.createTransport(opts)
```

### List inboxes
Inbox lists are paginated and sortable. List methods return a projection of an inbox. See the [inbox projection reference](https://docs.mailslurp.com/js/docs/modules/InboxProjection/) for properties.

```javascript
const mailslurp = new MailSlurp(config);

// get paginated inboxes
const [index, size] = [0, 20];
const pageInboxes = await mailslurp.getAllInboxes(0, 20);

expect(pageInboxes.size).toEqual(size);
expect(pageInboxes.number).toEqual(index);
```

### Fetch emails from inbox
To read emails that already exist in an inbox use the [EmailController](https://docs.mailslurp.com/js/docs/classes/EmailControllerApi/) `getEmail` method. To wait for expected emails that may not have arrived yet use the [WaitForController](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/).

There are many ways to receive and fetch emails in MailSlurp. Emails have many properties including body, subject, attachments and more. See the API docs for [full email reference](https://docs.mailslurp.com/js/docs/interfaces/Email/).

```javascript
const inbox = await mailslurp.createInbox();
await mailslurp.sendEmail(inbox.id, {
  to: [inbox.emailAddress],
  subject: 'test',
});

// wait for first email
const latestEmail = await mailslurp.waitForLatestEmail(inbox.id, timeoutMs);
expect(latestEmail.subject).toContain('test');

// send another
await mailslurp.sendEmail(inbox.id, {
  to: [inbox.emailAddress],
  subject: 'second',
});

// wait for second using controller instead
const secondEmail = await mailslurp.waitController.waitForLatestEmail({
  inboxId: inbox.id,
  unreadOnly: true,
});
expect(secondEmail.subject).toContain('second');

const allEmails = await mailslurp.getEmails(inbox.id);
expect(allEmails).toHaveLength(2);
```

For more fetching methods see the [WaitForController](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/) and the [EmailController](https://docs.mailslurp.com/js/docs/classes/EmailControllerApi/)

### Send emails
To send emails use the [SendEmailOptions](https://docs.mailslurp.com/js/docs/modules/SendEmailOptions/) arguments with the [InboxController](https://docs.mailslurp.com/js/docs/classes/InboxControllerApi/) or MailSlurp [instance methods](https://docs.mailslurp.com/js/docs/classes/MailSlurp/).

```typescript
const inbox = await mailslurp.createInbox();
const options = {
  to: [emailAddress],
  subject: 'Hello',
  body: 'Welcome',
};
const sent = await mailslurp.sendEmail(inbox.id, options);
expect(sent.subject).toContain('Hello');
```

### Verify email addresses
Validate an email address to find out if it exists and can receive email. This can help reduce your bounce rate and improve your sending reputation.

```javascript
const mailslurp = new MailSlurp(config);
const res =
  await mailslurp.emailVerificationController.validateEmailAddressList({
    validateEmailAddressListOptions: {
      emailAddressList: ['contact@mailslurp.dev', 'bad@mailslurp.dev'],
    },
  });
expect(res.resultMapEmailAddressIsValid['contact@mailslurp.dev']).toEqual(
  true
);
expect(res.resultMapEmailAddressIsValid['bad@mailslurp.dev']).toEqual(
  false
);
```

### Upload attachment
Upload attachment using the [AttachmentController](https://docs.mailslurp.com/js/docs/classes/AttachmentControllerApi/).

Attachments can be uploaded as base64 strings. The ids returned can the be used with `SendEmailOptions` send functions. See the [upload attachment options](https://docs.mailslurp.com/js/docs/interfaces/UploadAttachmentOptions/) for more information.

```javascript
const mailslurp = new MailSlurp(config);

// read a file as a base64 encoded string
const pathToAttachment = path.join(__dirname + '/attachment.txt');
const fileBase64Encoded = await fs.promises.readFile(pathToAttachment, {
  encoding: 'base64',
});

// upload the attachment as base64 string and get atttachment id
const [attachmentId] =
  await mailslurp.attachmentController.uploadAttachment({
    uploadAttachmentOptions: {
      base64Contents: fileBase64Encoded,
      contentType: 'text/plain',
      filename: path.basename(pathToAttachment),
    },
  });
```

### Send attachment
To send an attachment first upload the file using the [AttachmentController](https://docs.mailslurp.com/js/docs/classes/AttachmentControllerApi/) then send an email containing the attachment ID with the [InboxController](https://docs.mailslurp.com/js/docs/classes/AttachmentControllerApi/).

You can send attachments by including their IDs in the attachments options when sending.

```javascript
const inbox1 = await mailslurp.createInbox();
const inbox2 = await mailslurp.createInbox();

// send email and get saved result
const sentEmail = await mailslurp.inboxController.sendEmailAndConfirm({
  inboxId: inbox1.id,
  sendEmailOptions: {
    to: [inbox2.emailAddress],
    attachments: [attachmentId],
    subject: 'Send attachments',
    body: 'Here are your files',
  },
});

expect(sentEmail.attachments.length).toEqual(1);
```

### Receive attachments
To wait for expected emails to arrive and read their contents use the [WaitFor controller](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/) endpoints.

```javascript
// first wait for an email
const email = await mailslurp.waitController.waitForLatestEmail({
  inboxId: inboxId,
  timeout: 30000,
  unreadOnly: true,
});

// check has attachments
expect(email.attachments.length).toEqual(1);

// download with email controller as base64 string
const attachmentDto =
  await mailslurp.emailController.downloadAttachmentBase64({
    attachmentId: email.attachments[0]!!,
    emailId: email.id,
  });

// can access content
expect(attachmentDto.base64FileContents).toBeTruthy();
const fileContent = new Buffer(
  attachmentDto.base64FileContents,
  'base64'
).toString();
expect(fileContent).toContain('test');

// can access size etc
expect(attachmentDto.sizeBytes).toBeTruthy();
expect(attachmentDto.contentType).toBeTruthy();
```

### Wait for multiple emails
The WaitForController contains many methods for waiting for emails to arrive in an inbox. See the [waitFor controller reference](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/) for more information.

```javascript
it('can wait for multiple emails', async () => {
  const mailslurp = new MailSlurp(config);

  // example of creating inboxes simultaneously
  const inbox1 = await mailslurp.createInbox();
  const inbox2 = await mailslurp.createInbox();

  // send two emails
  await mailslurp.sendEmail(inbox1.id, {
    to: [inbox2.emailAddress],
    subject: 'Hello Dogs',
  });
  await mailslurp.sendEmail(inbox1.id, {
    to: [inbox2.emailAddress],
    subject: 'Hello Cats',
  });

  // wait for 2 emails
  const emails = await mailslurp.waitController.waitForEmailCount({
    count: 2,
    inboxId: inbox2.id,
    sort: WaitForEmailCountSortEnum.DESC,
  });

  const subjects = emails.map((e) => e.subject);
  expect(subjects).toContain('Hello Dogs');
  expect(subjects).toContain('Hello Cats');
});
```

### Wait for matching emails
MailSlurp allows one to wait for emails that match certain parameters. Here is an example:

```javascript
const inbox1 = await mailslurp.createInbox();
const inbox2 = await mailslurp.createInbox();

// specify recipient (must be array)
const to = [inbox2.emailAddress];

// send two emails
await mailslurp.sendEmail(inbox1.id, { to, subject: 'Apples' });
await mailslurp.sendEmail(inbox1.id, { to, subject: 'Oranges' });

// wait for matching email based on subject (see MatchOptions for all options)
const matchOptions: MatchOptions = {
  matches: [
    {
      field: MatchOptionFieldEnum.SUBJECT,
      should: MatchOptionShouldEnum.CONTAIN,
      value: 'Apples',
    },
  ],
};
const expectCount = 1;
const matchingEmails = await mailslurp.waitController.waitForMatchingEmails(
  {
    inboxId: inbox2.id,
    matchOptions: matchOptions,
    count: expectCount,
    timeout: timeoutMillis,
    unreadOnly: true,
  }
);
expect(matchingEmails.length).toEqual(1);
expect(matchingEmails[0].subject).toEqual('Apples');
```

See the [MatchOptions documentation](https://docs.mailslurp.com/js/docs/interfaces/MatchOptions/) for reference.

### Extract email content
You can extract useful information from emails using regular expressions. See the [EmailController](https://docs.mailslurp.com/js/docs/classes/EmailControllerApi/) for more information:

```javascript
const inbox1 = await mailslurp.createInbox();
const inbox2 = await mailslurp.createInbox();

const to = [inbox2.emailAddress];
const body = 'Hi there. Your code is: 123456';
await mailslurp.sendEmail(inbox1.id, { to, body });

// wait for email
const email = await mailslurp.waitController.waitForLatestEmail({
  inboxId: inbox2.id,
  timeout: timeoutMillis,
  unreadOnly: true,
});
const pattern = 'code is: ([0-9]{6})';
expect(email.body).toContain('Your code is');

// pass the pattern to mailslurp to match for emails
const result = await mailslurp.emailController.getEmailContentMatch({
  contentMatchOptions: { pattern },
  emailId: email.id,
});

// access the match groups
expect(result.matches).toHaveLength(2);
expect(result.matches[0]).toEqual('code is: 123456');
expect(result.matches[1]).toEqual('123456');
```

## Webhooks
To have received emails sent to your server using HTTP webhook push create a webhook using the [WebhookController](https://docs.mailslurp.com/js/docs/classes/WebhookControllerApi/) or see the [webhook email guide](https://docs.mailslurp.com/webhooks/).

### Create webhooks
You can create webhooks in code or using the [MailSlurp dashboard](https://app.mailslurp.com/).

```typescript
await mailslurp.webhookController.createWebhook({
    inboxId,
    webhookOptions: {
        url: "https://my-server.com/webhook",
        eventName: CreateWebhookOptionsEventNameEnum.NEW_EMAIL
    }
})
```

### Listen to webhooks
To consume webhooks first create a webhook for an inbox and a given [webhook event](https://docs.mailslurp.com/webhooks). Set the webhook URL to an endpoint on your server. Your server must be publicly accessible and return a 200 or 201 status code in 30 seconds. To test locally use a service like ngrok.io to tunnel your local machine to a public URL. [The payload](https://docs.mailslurp.com/webhooks) posted to your end point will depend on the event type. Here is a listen example using express

> **Note:** you can use any framework or language you like with webhooks.

```typescript
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
```

### Testing webhook server

```typescript
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
```

## Verify email address
You can verify the existence of an email address using the MailServer controller. MailSlurp derives a host for an email address by digging the MX records for the domain. It then connects via telnet to the server and sends the `rcpt to:<emailaddress>` command to check that the email exists on the server. 

```typescript
describe('can manage smtp inboxes', () => {
    it('can verify an external email address with a provider like gmail', async () => {
        const result = await mailslurp.mailServerController.verifyEmailAddress({
            emailAddress: "contact@mailslurp.dev"
        })
        expect(result.isValid).toEqual(true)
    });
});
```

## More Documentation

- [Method documentation](https://docs.mailslurp.com/js/docs/)
- [Guides](https://www.mailslurp/guides/)
- [API Key](https://app.mailslurp.com/sign-up/)
- [Example repositories](https://www.mailslurp.com/examples/)

## Resources

- [Dashboard App](https://app.mailslurp.com)
- [Documentation](https://docs.mailslurp.com/js/docs/)
- [Github](https://github.com/mailslurp/mailslurp-client)
- [NPM package](https://www.npmjs.com/package/mailslurp-client)

## Feedback, support, and feature requests
The MailSlurp team welcomes any [feedback and feature requests](https://www.mailslurp.com/feedback/). Please use the [support portal to report any bugs](https://www.mailslurp.com/support/) or speak with support.

# MailSlurp Javascript Client

Create real email addresses on demand. Send and receive emails and attachments from code and tests using Javascript or Typescript.

[MailSlurp](https://www.mailslurp.com) is an email [API](https://www.mailslurp.com/docs/js/) service that lets you create real email addresses in code. You can then send and receive emails and attachments in Javascript applications and tests. MailSlurp is free for personal use but requires an [API KEY](https://app.mailslurp.com). Please see the [getting started guide](https://www.mailslurp.com/guides/getting-started/) for an introduction on key MailSlurp concepts or continue reading. 

<br/>

![email testing](https://www.mailslurp.com/assets/slurpie-vibrant.png)

## Quick start
Install with npm `npm install --save mailslurp-client` or `yarn add mailslurp-client`

```javascript
{{quick_start}}
```

More usage examples are included below.

## Links
Here are some links to get started (or see below for code examples).

- [Main class methods](https://www.mailslurp.com/docs/js/docs/classes/MailSlurp/)
- [Method Documentation](https://www.mailslurp.com/docs/js/docs/)
- [NPM Package](https://www.npmjs.com/package/mailslurp-client)
- [Github Source](https://github.com/mailslurp/mailslurp-client)


## Get started

This section describes how to get up and running with the Javascript client.

See the [guides page](https://www.mailslurp.com/guides/) for more examples and use with common frameworks. For use with CypressJS see the official [Cypress MailSlurp plugin](https://www.npmjs.com/package/cypress-mailslurp).

See the method documentation for a [list of all functions](https://www.mailslurp.com/docs/js/docs/). 

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
{{fetch_setup}}
```

#### Fetch handling exceptions
Any method that returns non-2xx response throws an exception by default (unless you use methods with the `Raw` suffix). There are valid 404 responses that you should handle, these include the 408 returned from `waitFor` methods when the required matching emails could not be found.

- `4xx` (400, 404...) response codes indicate a client error. Access the error message on the response body
- `5xx` (500, 501...) response codes indicate a server error. If encountered please contact support.

```typescript
{{fetch_try_catch}}
```

#### Fetch without exceptions (using ApiResponse)
If you prefer not to use `try/catch` you can use methods with the `Raw` suffix. These methods return an `ApiResponse<T>` that includes a status and result instead of throwing exceptions.

```typescript
{{fetch_raw}}
```

### API Controllers
Note the `MailSlurp` object is a class with many common methods. It does not contain all MailSlurp API methods. **The full API is available as individually exported controllers**.

See the [MailSlurp class documentation](https://www.mailslurp.com/docs/js/docs/classes/MailSlurp/) for all methods or
see the `test/integration.spec.ts` file for usage examples. You can also instantiate controllers directly. See the [API controllers](https://www.mailslurp.com/docs/js/docs/classes/) for method details.

```javascript
{{controller_use}}
```

## Common usage examples

Here are some snippets of common usage.

### Create an email address
MailSlurp inboxes have real email addresses. There are several ways to create them. See the docs for full [inbox object reference](https://www.mailslurp.com/docs/js/docs/modules/Inbox/).
Inboxes can be either `SMTP` or `HTTP` type mailboxes. `HTTP` inboxes are powered by AWS SES and are great for most use cases. `SMTP` inboxes use a custom mail server running at `mx.mailslurp.com` to support older email clients. `SMTP` inboxes are more suitable for public facing usage.

#### Simple usage
You can create an inbox with a randomly assigned email address ending in `@mailslurp.com` like so:

```javascript
{{create_inbox}}
```

#### Create inbox options
Use the `createInboxWithOptions` or methods on the `inboxController` property to create email addresses using more options.
```javascript
{{create_inbox_controller}}
```

#### Test example
In a test using Jest:

```javascript
const MailSlurp = require('mailslurp-client').default;

describe('inbox method usage', () => {
  let config;

  beforeAll(() => {
    // provide a mailslurp API KEY
    const apiKey = process.env.API_KEY;
    expect(apiKey).toBeTruthy();
    // create config for clients and main class
    config = { apiKey };
  });

  /**
   * Create an inbox. An inbox is basically an email address. It also has an ID
   */
  it('can create inboxes', async () => {
    const mailslurp = new MailSlurp(config);
    const inbox = await mailslurp.createInbox();
    expect(inbox.id).toBeTruthy();
    expect(inbox.emailAddress).toContain('@mailslurp.com');
  });
});
```

> To use custom domains see the [domain verification guide](https://www.mailslurp.com/guides/custom-domains/)

### Get an inbox
Inboxes have real email addresses. See the [inbox reference](https://www.mailslurp.com/docs/js/docs/modules/Inbox/) for all properties.

```javascript
/**
 * Get an inbox
 */
it('can get a full inbox', async () => {
    const mailslurp = new MailSlurp(config);
    const { id: inboxId } = await mailslurp.createInbox();
    const inbox = await mailslurp.getInbox(inboxId);
    expect(inbox.id).toEqual(inboxId);
    expect(inbox.name).toBeDefined();
    expect(inbox.description).toBeDefined();
    expect(inbox.emailAddress).toBeDefined();
});
```

### List inboxes
Inbox lists are paginated and sortable. List methods return a projection of an inbox. See the [inbox projection reference](https://www.mailslurp.com/docs/js/docs/modules/InboxProjection/) for properties.

```javascript
describe("inbox pagination", () => {
  /**
   * List inboxes
   */
  it('can list inboxes in paginated form', async () => {
    const mailslurp = new MailSlurp(config);
    // get paginated inboxes
    const [index, size] = [0, 20];
    const pageInboxes = await mailslurp.getAllInboxes(index, size);

    expect(pageInboxes.size).toEqual(size);
    expect(pageInboxes.number).toEqual(index);
  });
});
```

### Access controllers
A [MailSlurp instance](https://www.mailslurp.com/docs/js/docs/classes/MailSlurp/) has properties for access all the API endpoints as controllers. See these for further inbox operations.
```javascript
describe("inbox pagination", () => {
  /**
   * Can use inbox controller directly for more advanced usage
   * `const { InboxControllerApi } = require('mailslurp-client');`
   */
  it('can use inbox controller methods', async () => {
    const mailslurp = new MailSlurp(config);
    const inboxController = mailslurp.inboxController;
    const { id: inboxId } = await inboxController.createInbox();
    const { status } = await inboxController.deleteInbox(inboxId)
    expect(status).toEqual(204)
  });
});
```

See method documentation for a [list of all functions](https://www.mailslurp.com/docs/js/docs/).

### Fetch emails from inbox
To read emails that already exist in an inbox use the [EmailController](https://www.mailslurp.com/docs/js/docs/classes/EmailControllerApi/) `getEmail` method. To wait for expected emails that may not have arrived yet use the [WaitForController](https://www.mailslurp.com/docs/js/docs/classes/WaitForControllerApi/).

There are many ways to receive and fetch emails in MailSlurp. Emails have many properties including body, subject, attachments and more. See the API docs for [full email reference](https://www.mailslurp.com/docs/js/docs/interfaces/Email/).

```javascript
const latestEmail = await mailslurp.waitForLatestEmail(undefined, undefined, inbox.id);

expect(latestEmail.subject).toContain("Hello");
expect(latestEmail.body).toContain("Welcome");

const secondEmail = await mailslurp.waitForNthEmail(inbox.id, 1);
const allEmails = await mailslurp.getInboxEmailsPaginated(inbox.id);
```

For more fetching methods see the [WaitForController](https://www.mailslurp.com/docs/js/docs/classes/WaitForControllerApi/) and the [EmailController](https://www.mailslurp.com/docs/js/docs/classes/EmailControllerApi/)

### Send emails
To send emails use the [SendEmailOptions](https://www.mailslurp.com/docs/js/docs/modules/SendEmailOptions/) arguments with the [InboxController](https://www.mailslurp.com/docs/js/docs/classes/InboxControllerApi/) or MailSlurp [instance methods](https://www.mailslurp.com/docs/js/docs/classes/MailSlurp/).

```javascript
const options = {
  to: ["test@myemail.com"],
  subject: "Hello",
  body: "Welcome",
};
await mailslurp.sendEmail(inbox.id, options);
```

### Upload attachment
Upload attachment using the [AttachmentController](https://www.mailslurp.com/docs/js/docs/classes/AttachmentControllerApi/).

Attachments can be uploaded as base64 strings. The ids returned can the be used with `SendEmailOptions` send functions. See the [upload attachment options](https://www.mailslurp.com/docs/js/docs/interfaces/UploadAttachmentOptions/) for more information.
```javascript
/**
 * Upload base 64 encoded file
 * Return array containing attachment ID as first element
 * @returns {Promise<string[]>}
 */
async function uploadAttachment() {
    const fileBase64Encoded = await readFile(pathToAttachment, { encoding: 'base64' });
    const attachmentController = new MailSlurp(config).attachmentController;

    return attachmentController.uploadAttachment({
        base64Contents: fileBase64Encoded,
        contentType: 'text/plain',
        filename: basename(pathToAttachment)
    })
}
```

### Send attachment
To send an attachment first upload the file using the [AttachmentController](https://www.mailslurp.com/docs/js/docs/classes/AttachmentControllerApi/) then send an email containing the attachment ID with the [InboxController](https://www.mailslurp.com/docs/js/docs/classes/AttachmentControllerApi/).

You can send attachments by including their IDs in the attachments options when sending.
```javascript
it("can send attachment", async () => {
    const attachmentIds = await uploadAttachment()
    expect(attachmentIds.length).toEqual(1);

    const inboxController = new MailSlurp(config).inboxController;
    const inbox1 = await inboxController.createInbox();
    const inbox2 = await inboxController.createInbox();

    // send email and get saved result
    const sentEmail = await inboxController.sendEmailAndConfirm(inbox1.id, {
        attachments: attachmentIds,
        subject: "Send attachments",
        body: "Here are your files",
        to: [inbox2.emailAddress]
    });

    expect(sentEmail.attachments.length).toEqual(1)
});
```
### Wait for multiple emails
The WaitForController contains many methods for waiting for emails to arrive in an inbox. See the [waitFor controller reference](https://www.mailslurp.com/docs/js/docs/classes/WaitForControllerApi/) for more information.

```javascript
it('can wait for multiple emails', async () => {
    const mailslurp = new MailSlurp(config);

    // example of creating inboxes simultaneously
    const inbox1 = await mailslurp.createInbox();
    const inbox2 = await mailslurp.createInbox();

    // send two emails
    await mailslurp.sendEmail(inbox1.id, { to: [inbox2.emailAddress], subject: "Hello Dogs" })
    await mailslurp.sendEmail(inbox1.id, { to: [inbox2.emailAddress], subject: "Hello Cats" })

    // wait for 2 emails
    const emails = await mailslurp.waitController.waitForEmailCount(2, undefined, inbox2.id, undefined, undefined, timeoutMillis, true)

    const subjects = emails.map(e => e.subject)
    expect(subjects).toContain("Hello Dogs")
    expect(subjects).toContain("Hello Cats")
})
```

### Receive attachments
To wait for expected emails to arrive and read their contents use the [WaitFor controller](https://www.mailslurp.com/docs/js/docs/classes/WaitForControllerApi/) endpoints.

```javascript
async function canReceiveAttachment(inboxId) {
    const waitForController = new MailSlurp(config).waitController;

    const email = await waitForController.waitForLatestEmail(undefined, undefined, inboxId, undefined, undefined, 30000, true)

    expect(email.attachments.length).toEqual(1);

    const emailController = new MailSlurp(config).emailController
    const attachmentDto = await emailController.downloadAttachmentBase64(email.attachments[0], email.id)

    expect(attachmentDto.base64FileContents).toBeTruthy()
    expect(attachmentDto.sizeBytes).toBeTruthy()
    expect(attachmentDto.contentType).toBeTruthy()
}
```

### Wait for matching emails
MailSlurp allows one to wait for emails that match certain parameters. Here is an example:

```javascript
it('can wait for matching emails', async () => {
    const mailslurp = new MailSlurp(config);

    const inbox1 = await mailslurp.createInbox();
    const inbox2 = await mailslurp.createInbox();

    // specify recipient (must be array)
    const to = [inbox2.emailAddress];

    // send two emails
    await mailslurp.sendEmail(inbox1.id, { to, subject: "Apples" });
    await mailslurp.sendEmail(inbox1.id, { to, subject: "Oranges" });

    // wait for matching email based on subject (see MatchOptions for all options)
    const matchOptions = {
       matches: [
           {
               field: "SUBJECT",
               should: "CONTAIN",
               value: "Apples"
           }
       ]
    };
    const expectCount = 1;
    const matchingEmails = await mailslurp.waitController.waitForMatchingEmail(matchOptions, expectCount, inbox2.id, timeoutMillis, true)
    expect(matchingEmails.length).toEqual(1);
    expect(matchingEmails[0].subject).toEqual("Apples");
})
```

See the [MatchOptions documentation](https://www.mailslurp.com/docs/js/docs/interfaces/MatchOptions/) for reference.

### Extract email content
You can extract useful information from emails using regular expressions. See the [EmailController](https://www.mailslurp.com/docs/js/docs/classes/EmailControllerApi/) for more information:

```javascript
const mailslurp = new MailSlurp(config);

const inbox1 = await mailslurp.createInbox();
const inbox2 = await mailslurp.createInbox();

const to = [inbox2.emailAddress]
const body = "Hi there. Your code is: 123456"
await mailslurp.sendEmail(inbox1.id, { to, body })

// wait for email
const email = await mailslurp.waitController.waitForLatestEmail(undefined, undefined, inbox2.id, undefined, undefined, timeoutMillis, true)
const pattern = "code is: ([0-9]{6})"
expect(email.body).toContain("Your code is")

const result = await mailslurp.emailController.getEmailContentMatch({ pattern }, email.id)
expect(result.matches).toHaveLength(2);
expect(result.matches[0]).toEqual("code is: 123456")
expect(result.matches[1]).toEqual("123456");
```

## Aliases
You can mask an email address using an alias and the [AliasController](https://www.mailslurp.com/docs/js/docs/classes/AliasControllerApi/). An alias is like a proxy. It can receive emails and forward them to any address. You can generate many to one aliases for any email address. You must verify the email address upon first use by clicking a link in the email that is sent to the address. Here is a code example:

```typescript
/**
 * Example of using an email alias to mask an address and forward emails to hidden address
 */
import 'jest';

import fetchApi from 'isomorphic-fetch';
import {
  AliasControllerApi,
  InboxControllerApi,
  AliasDto,
  Configuration,
  WaitForControllerApi,
  SendEmailOptions,
  EmailControllerApi,
  ReplyToEmailOptions,
} from 'mailslurp-admin-sdk';

// setup mailslurp config
const apiKey = process.env.apiKey;
const config = new Configuration({ apiKey, fetchApi });

// create controllers
const inboxControllerApi = new InboxControllerApi(config);
const aliasControllerApi = new AliasControllerApi(config);
const waitForController = new WaitForControllerApi(config);
const emailControllerApi = new EmailControllerApi(config);

// set test timeout to allow wait 
jest.setTimeout(60000);

test('aliases', async () => {
    // create two different email addresses for testing
    const inboxA = await inboxControllerApi.createInbox({});
    const inboxB = await inboxControllerApi.createInbox({});
    const emailAddressA = inboxA.emailAddress!!;
    const emailAddressB = inboxB.emailAddress!!;

    // create an alias
    const alias: AliasDto = await aliasControllerApi.createAlias({
        createAliasOptions: {
            emailAddress: emailAddressA,
            useThreads: true,
        },
    });
    
    expect(alias.maskedEmailAddress).toEqual(emailAddressA);
    expect(alias.emailAddress).not.toEqual(emailAddressA);
    expect(alias.isVerified).toEqual(true);

    // can send email from inboxB to alias that should be delivered to inboxA
    const sent = await inboxControllerApi.sendEmailAndConfirm({
        inboxId: inboxB.id!!,
        sendEmailOptions: {
            to: [alias.emailAddress!!],
            subject: 'Hello inbox A',
            body: 'From inbox B',
        },
    });
    
    expect(sent['from']).toContain(inboxB.emailAddress);
    expect(sent.to).toContain(alias.emailAddress);

    // now expect email is forwarded by alias to InboxA
    const forwardedEmail = await waitForController.waitForLatestEmail(
        undefined,
        inboxA.id,
        undefined,
        undefined,
        30000,
        true
    );
    
    // received message
    expect(forwardedEmail.subject).toContain('Hello inbox A');
    // reply to is a thread address meaning your replies can be routed through a thread
    expect(forwardedEmail.replyTo).not.toEqual(emailAddressA);
    expect(forwardedEmail.replyTo).not.toEqual(emailAddressB);
});
```

## Webhooks
To have received emails sent to your server using HTTP webhook push create a webhook using the [WebhookController](https://www.mailslurp.com/docs/js/docs/classes/WebhookControllerApi/) or see the [webhook email guide](https://www.mailslurp.com/guides/email-webhooks/).

### Create webhooks
```typescript
mailslurp.webhookController.createWebhook(inboxId, {
    url: "https://my-server.com/webhook",
    eventName: "NEW_EMAIL"
})
```

### Listen to webhooks
To consume webhooks first create a webhook for an inbox and a given [webhook event](https://www.mailslurp.com/docs/webhooks). Set the webhook URL to an endpoint on your server. Your server must be publicly accessible and return a 200 or 201 status code in 30 seconds. To test locally use a service like ngrok.io to tunnel your local machine to a public URL. [The payload](https://www.mailslurp.com/guides/email-webhooks) posted to your end point will depend on the event type. Here is a listen example using express

> **Note:** you can use any framework or language you like with webhooks.

```typescript
const express = require("express");
const app = express.createServer();
app.use(express.bodyParser());

/**
 * define your endpoint
 * here your webhook url should include the full protocol and domain.
 * i.e.: https://myserver.com/my-webhook-endpoint
 */
app.post("/my-webhook-endpoint", function (request, response) {
  // access the data on request body
  console.log(request.body.inboxId);
  
  // do something with with inboxId like `mailslurp.waitForLatestEmail(undefined,undefined, inboxId)`

  // return a 2xx status code so MailSlurp knows you received it
  response.sendStatus(200);
});

app.listen(80);
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

- [Method documentation](https://www.mailslurp.com/docs/js/docs/)
- [Guides](https://www.mailslurp/guides/)
- [API Key](https://app.mailslurp.com/sign-up/)
- [Example repositories](https://www.mailslurp.com/examples/)

## Resources

- [Dashboard App](https://app.mailslurp.com)
- [Documentation](https://www.mailslurp.com/docs/js/docs/)
- [Github](https://github.com/mailslurp/mailslurp-client)
- [NPM package](https://www.npmjs.com/package/mailslurp-client)

## Feedback, support, and feature requests
The MailSlurp team welcomes any [feedback and feature requests](https://www.mailslurp.com/feedback/). Please use the [support portal to report any bugs](https://www.mailslurp.com/support/) or speak with support.

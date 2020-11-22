---
label: Javascript SDK
subtitle: Official Javascript MailSlurp client. Supports Typescript and Webpack.
title: Javascript
icon: /assets/icons/javascript.svg
iconType: asset
featured: true
expose: true
weight: -1
meta:
  - name: description
    content: Send and receive emails in Javascript and Typescript. Node email libraries and SDK.
---

# MailSlurp Javascript Client

> Create real email addresses on demand. Send and receive emails and attachments from code and tests using Javascript or Typescript.

MailSlurp is an email API service that lets you create real email addresses in code. You can then send and receive emails and attachments in Javascript applications and tests.

## Quick links

- [Method Documentation](./docs/classes/mailslurp/)
- [NPM Package](https://www.npmjs.com/package/mailslurp-client)
- [Github Source](https://github.com/mailslurp/mailslurp-client)

## Examples
- [CypressJS Example](https://www.mailslurp.com/examples/cypress-js/)
- [WebDriver WDIO Example](https://www.mailslurp.com/examples/test-user-sign-up-wdio-webdriver/)
- [Jest Puppeteer Example](https://www.mailslurp.com/examples/test-email-in-jest-puppeteer/)

## Get started

::: tip

This section describes how to get up and running with the Javascript client.

See the [guides page](https://www.mailslurp.com/guides/) for more examples and use with common frameworks.

See the method documentation for a [list of all functions](./docs/classes/_index_.mailslurp/)

:::

### Create API Key

First you'll need an API Key. [Create a free account](https://app.mailslurp.com) and copy the key from your dashboard.

## Install NPM dependency

Install MailSlurp using NPM (NodeJS) or by including the [source code](https://github.com/mailslurp/mailslurp-client) in your project.

```bash
npm install --save mailslurp-client
```

## Import MailSlurp
```javascript
const MailSlurp = require("mailslurp-client").default;

// or

import { MailSlurp } from "mailslurp-client";
```

## Instantiate a client

Create a MailSlurp instance by instantiating a class with [your API Key](https://app.mailslurp.com).

```javascript
const mailslurp = new MailSlurp({ apiKey: "your_api_key" });
```

Note the `MailSlurp` object is a class with many common methods. It does not contain all MailSlurp API methods. **The full API is available as individually exported controllers**.

Use individual controllers like so:

```javascript
// controllers are available on the instance itself or using imports
const { MailSlurp, InboxControllerApi } = require('mailslurp-client');

it('can use inbox controller methods', async () => {
  // inbox actions using instance controllers
  const mailslurp = new MailSlurp(config);
  const inboxController = mailslurp.inboxController;
  expect(inboxController.getInboxes).toBeDefined();

  // get inboxes via import
  const inboxControllerImport = new InboxControllerApi(config);
  expect(inboxControllerImport.getInboxes).toBeDefined();
});
```

## Common usage

Here are some snippets of common usage. Read

### Create an email address

```javascript
const inbox = await mailslurp.createInbox();
// { id: '123', emailAddress: '123@mailslurp.com' }
```

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

### Get an inbox

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
Inbox lists are paginated and sortable.

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
A MailSlurp instance has properties for access all the API endpoints as controllers. See these for futher inbox operations.
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

See method documentation for a [list of all functions](./docs/classes/mailslurp/).

### Fetch emails from inbox

There are many ways to receive and fetch emails in MailSlurp.

```javascript
const latestEmail = await mailslurp.waitForLatestEmail(inbox.id);

expect(latestEmail.subject).toContain("Hello");
expect(latestEmail.body).toContain("Welcome");

const secondEmail = await mailslurp.waitForNthEmail(inbox.id, 1);
const allEmails = await mailslurp.getInboxEmailsPaginated(inbox.id);
```

### Send emails

```javascript
const options = {
  to: ["test@myemail.com"],
  subject: "Hello",
  body: "Welcome",
};
await mailslurp.sendEmail(inbox.id, options);
```

### Upload attachment
Attachments can be uploaded as base64 strings. The ids returned can the be used with `SendEmailOptions` send functions.

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
    const emails = await mailslurp.waitController.waitForEmailCount(2, inbox2.id, timeoutMillis, true)

    const subjects = emails.map(e => e.subject)
    expect(subjects).toContain("Hello Dogs")
    expect(subjects).toContain("Hello Cats")
})
```

### Receive attachments

```javascript
async function canReceiveAttachment(inboxId) {
    const waitForController = new MailSlurp(config).waitController;

    const email = await waitForController.waitForLatestEmail(inboxId, 30000, true)

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

### Extract email content
You can extract useful information from emails using regular expressions:

```javascript
it('can extract email content', async () => {
    const mailslurp = new MailSlurp(config);

    const inbox1 = await mailslurp.createInbox();
    const inbox2 = await mailslurp.createInbox();

    const to = [inbox2.emailAddress]
    const body = "Hi there. Your code is: 123456"
    await mailslurp.sendEmail(inbox1.id, { to, body })

    // wait for email
    const email = await mailslurp.waitController.waitForLatestEmail(inbox2.id, timeoutMillis, true)
    const pattern = "code is: (\\d{6})"

    // can be used to extract confirmation codes etc
    const matches = await mailslurp.emailController.getEmailContentMatch({ pattern }, email.id)
    expect(matches[0]).toEqual("code is: 123456")
    expect(matches[1]).toEqual("123456")
})
```

## Documentation

- [Method documentation](./docs/)
- [Guides](https://www.mailslurp/guides/)
- [API Key](https://app.mailslurp.com/sign-up/)
- [Example repositories](https://www.mailslurp.com/examples/)

## Resources

- [Dashboard App](https://app.mailslurp.com)
- [Documentation](./docs/)
- [Github](https://github.com/mailslurp/mailslurp-client)
- [PM](https://www.npmjs.com/package/mailslurp-client)

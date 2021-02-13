---
label: Javascript SDK
subtitle: Official Javascript MailSlurp client. Supports Typescript and Webpack.
title: Javascript
icon: /assets/icons/javascript.svg
iconType: asset
featured: true
expose: true
weight: -100
---

# MailSlurp Javascript Client

> Create real email addresses on demand. Send and receive emails and attachments from code and tests using Javascript or Typescript.

[MailSlurp](https://www.mailslurp.com) is an email [API](https://www.mailslurp.com/docs/js/) service that lets you create real email addresses in code. You can then send and receive emails and attachments in Javascript applications and tests. 

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
## Quick links
Here are some links to get started (or see below for code examples).

- [Method Documentation](https://www.mailslurp.com/docs/js/docs/)
- [NPM Package](https://www.npmjs.com/package/mailslurp-client)
- [Github Source](https://github.com/mailslurp/mailslurp-client)

## Examples
- [CypressJS Example](https://www.mailslurp.com/examples/cypress-js/)
- [WebDriver WDIO Example](https://www.mailslurp.com/examples/test-user-sign-up-wdio-webdriver/)
- [Jest Puppeteer Example](https://www.mailslurp.com/examples/test-email-in-jest-puppeteer/)

### Quick links
- [Creating inboxes](/guides/creating-inboxes)
- [Sending emails](/guides/sending-emails)
- [Receiving email](/guides/receiving-emails)
- [Attachments](/guides/fetching-email-content)
- [Webhooks](/guides/email-webhooks)
- [Aliases](/guides/alias-email-address-proxy)
- [Domains](/guides/custom-domains)
- [Organizations](/guides/organizations)
- [DNS and IP Lookup](/guides/dns-lookup-nameservers)
- [Documentation](/docs)

## Common usage

Here are some snippets of common usage. Read

### Create an email address
You can create an inbox with a randomly assigned email address ending in `@mailslurp.com` like so:

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

::: tip

To use custom domains see the [domain verification guide](https://www.mailslurp.com/guides/custom-domains/)

:::

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
const mailslurp = new MailSlurp(config);

const inbox1 = await mailslurp.createInbox();
const inbox2 = await mailslurp.createInbox();

const to = [inbox2.emailAddress]
const body = "Hi there. Your code is: 123456"
await mailslurp.sendEmail(inbox1.id, { to, body })

// wait for email
const email = await mailslurp.waitController.waitForLatestEmail(inbox2.id, timeoutMillis, true)
const pattern = "code is: ([0-9]{6})"
expect(email.body).toContain("Your code is")

const result = await mailslurp.emailController.getEmailContentMatch({ pattern }, email.id)
expect(result.matches).toHaveLength(2);
expect(result.matches[0]).toEqual("code is: 123456")
expect(result.matches[1]).toEqual("123456");
```

## Aliases
You can mask an email address using an alias. An alias is like a proxy. It can receive emails and forward them to any address. You can generate many to one aliases for any email address. You must verify the email address upon first use by cliking a link in the email that is sent to the address. Here is a code example:

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
    const forwardedEmail = await waitForController.waitForLatestEmail({
        inboxId: inboxA.id,
        unreadOnly: true,
        timeout: 30000,
    });
    
    // received message
    expect(forwardedEmail.subject).toContain('Hello inbox A');
    // reply to is a thread address meaning your replies can be routed through a thread
    expect(forwardedEmail.replyTo).not.toEqual(emailAddressA);
    expect(forwardedEmail.replyTo).not.toEqual(emailAddressB);
});
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

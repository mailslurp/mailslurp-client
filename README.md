---
label: Javascript SDK
subtitle: Official Javascript MailSlurp client. Supports Typescript and Webpack.
title: Javascript
icon: devicon-javascript-plain
featured: true
expose: true
weight: 1
meta:
  - name: description
    content: Send and receive emails in Javascript and Typescript. Node email libraries and SDK.
---

# MailSlurp Javascript Client

> Create real email addresses on demand. Send and receive emails and attachments from code and tests using Javascript or Typescript.

MailSlurp is an email API service that lets you create real email addresses in code. You can then send and receive emails and attachments in Javascript applications and tests.

## Quick links

- [Method Documentation](./docs/classes/_index_.mailslurp/)
- [NPM Package](https://www.npmjs.com/package/mailslurp-client)
- [Github Source](https://github.com/mailslurp/mailslurp-client)
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

### Install NPM dependency

Install MailSlurp using NPM (NodeJS) or by including the [source code](https://github.com/mailslurp/mailslurp-client) in your project.

```bash
npm install --save mailslurp-client
```

### Import MailSlurp

```javascript
const MailSlurp = require("mailslurp-client").default;

// or

import { MailSlurp } from "mailslurp-client";
```

### Instantiate a client

Create a MailSlurp instance by instantiating a class with [your API Key](https://app.mailslurp.com).

```javascript
const mailslurp = new MailSlurp({ apiKey: "your_api_key" });
```

## Common usage

Here are some snippets of common usage. Read

### Create an email address

```javascript
const inbox = await mailslurp.createInbox();
// { id: '123', emailAddress: '123@mailslurp.com' }
```

See method documentation for a [list of all functions](./docs/classes/_index_.mailslurp/).

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

## Documentation

- [Method documentation](./docs/classes/_index_.mailslurp/)
- [Guides](https://www.mailslurp/guides/)
- [API Key](https://app.mailslurp.com/sign-up/)
- [Example repositories](https://www.mailslurp.com/examples/)

## Resources

- [Dashboard App](https://app.mailslurp.com)
- [Documentation](./docs/classes/_index_.mailslurp/)
- [Github](https://github.com/mailslurp/mailslurp-client)
- [PM](https://www.npmjs.com/package/mailslurp-client)

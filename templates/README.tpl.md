# MailSlurp Javascript Client

Create real email addresses on demand. Send and receive emails and attachments from code and tests using Javascript or Typescript. Use real phone numbers to process inbound TXT messages.

[MailSlurp](https://www.mailslurp.com) is an email and SMS [API](https://docs.mailslurp.com/js/) service that lets you create real email addresses in code. You can then send and receive emails and attachments in Javascript applications and tests. You can also [create phone numbers](/) and fetch inbound SMS. 

MailSlurp is free for personal use but requires an [API KEY](https://app.mailslurp.com). Please see the [getting started guide](https://www.mailslurp.com/guides/getting-started/) for an introduction on key MailSlurp concepts or continue reading. 

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

See the [MailSlurp class documentation](https://docs.mailslurp.com/js/docs/classes/MailSlurp/) for all methods or
see the `test/integration.spec.ts` file for usage examples. You can also instantiate controllers directly. See the [API controllers](https://docs.mailslurp.com/js/docs/classes/) for method details.

```javascript
{{controller_use}}
```

## Email usage examples

Here are some snippets of common usage.

### Create an email address
MailSlurp inboxes have real email addresses. There are several ways to create them. See the docs for full [inbox object reference](https://docs.mailslurp.com/js/docs/modules/Inbox/).
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

> To use custom domains see the [domain verification guide](https://www.mailslurp.com/guides/custom-domains/)

### Get an inbox
Inboxes have real email addresses. See the [inbox reference](https://docs.mailslurp.com/js/docs/modules/Inbox/) for all properties.

```javascript
{{get_an_inbox}}
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
{{list_inboxes}}
```

### Fetch emails from inbox
To read emails that already exist in an inbox use the [EmailController](https://docs.mailslurp.com/js/docs/classes/EmailControllerApi/) `getEmail` method. To wait for expected emails that may not have arrived yet use the [WaitForController](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/).

There are many ways to receive and fetch emails in MailSlurp. Emails have many properties including body, subject, attachments and more. See the API docs for [full email reference](https://docs.mailslurp.com/js/docs/interfaces/Email/).

```javascript
{{wait_for_latest}}
```

For more fetching methods see the [WaitForController](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/) and the [EmailController](https://docs.mailslurp.com/js/docs/classes/EmailControllerApi/)

### Send emails
To send emails use the [SendEmailOptions](https://docs.mailslurp.com/js/docs/modules/SendEmailOptions/) arguments with the [InboxController](https://docs.mailslurp.com/js/docs/classes/InboxControllerApi/) or MailSlurp [instance methods](https://docs.mailslurp.com/js/docs/classes/MailSlurp/).

```typescript
{{send_email}}
```

#### Sending with queues
If your plan permits you can send emails using a queue. This allows you to safely recover emails that failed to send and retry them. Use queue to ensure that emails are always delivered regardless of your account status, bounce limit, or payment failures.
```typescript
{{send_with_queue}}
```

### Verify email addresses
Validate an email address to find out if it exists and can receive email. This can help reduce your bounce rate and improve your sending reputation.

```javascript
{{verify_email_address}}
```

### Upload attachment
Upload attachment using the [AttachmentController](https://docs.mailslurp.com/js/docs/classes/AttachmentControllerApi/).

Attachments can be uploaded as base64 strings. The ids returned can the be used with `SendEmailOptions` send functions. See the [upload attachment options](https://docs.mailslurp.com/js/docs/interfaces/UploadAttachmentOptions/) for more information.

```javascript
{{upload_attachment}}
```

### Send attachment
To send an attachment first upload the file using the [AttachmentController](https://docs.mailslurp.com/js/docs/classes/AttachmentControllerApi/) then send an email containing the attachment ID with the [InboxController](https://docs.mailslurp.com/js/docs/classes/AttachmentControllerApi/).

You can send attachments by including their IDs in the attachments options when sending.

```javascript
{{send_attachment}}
```

### Receive attachments
To wait for expected emails to arrive and read their contents use the [WaitFor controller](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/) endpoints.

```javascript
{{receive_attachment}}
```

### Wait for multiple emails
The WaitForController contains many methods for waiting for emails to arrive in an inbox. See the [waitFor controller reference](https://docs.mailslurp.com/js/docs/classes/WaitForControllerApi/) for more information.

```javascript
{{wait_for_multiple}}
```

### Wait for matching emails
MailSlurp allows one to wait for emails that match certain parameters. Here is an example:

```javascript
{{wait_for_matching}}
```

See the [MatchOptions documentation](https://docs.mailslurp.com/js/docs/interfaces/MatchOptions/) for reference.

### Extract email content
You can extract useful information from emails using regular expressions. See the [EmailController](https://docs.mailslurp.com/js/docs/classes/EmailControllerApi/) for more information:

```javascript
{{extract_email_content}}
```

## Phone SMS/TXT usage
MailSlurp supports inbound SMS using real phone numbers. See the [SMS guide](https://app.mailslurp.com/guides/txt-sms/) or the developer [documentation](https://docs.mailslurp.com/txt-sms/) to get started.

### Create phone numbers
Phone numbers must be created in the MailSlurp [dashboard](https://app.mailslurp.com). Once you create a number you can use it in code.

### List numbers
Fetch phone numbers with the phone controller.

```typescript
{{phone_get_numbers}}
```

### Receive SMS
Use the wait for controller to wait for inbound SMS messages:

```typescript
{{phone_wait_for_sms}}
```

You can also use webhooks with the `NEW_SMS` event to receive text messages.

## Webhooks
To have received emails sent to your server using HTTP webhook push create a webhook using the [WebhookController](https://docs.mailslurp.com/js/docs/classes/WebhookControllerApi/) or see the [webhook email guide](https://docs.mailslurp.com/webhooks/).

### Create webhooks
You can create webhooks in code or using the [MailSlurp dashboard](https://app.mailslurp.com/).

```typescript
{{create_webhook}}
```

### Listen to webhooks
To consume webhooks first create a webhook for an inbox and a given [webhook event](https://docs.mailslurp.com/webhooks). Set the webhook URL to an endpoint on your server. Your server must be publicly accessible and return a 200 or 201 status code in 30 seconds. To test locally use a service like ngrok.io to tunnel your local machine to a public URL. [The payload](https://docs.mailslurp.com/webhooks) posted to your end point will depend on the event type. Here is a listen example using express

> **Note:** you can use any framework or language you like with webhooks.

```typescript
{{webhook_server}}
```

### Testing webhook server

```typescript
{{webhook_server_test}}
```

## More Documentation

- [Webhook documentation](https://docs.mailslurp.com/webhooks/)
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

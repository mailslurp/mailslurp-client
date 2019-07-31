# Official MailSlurp Javascript/Typescript API Client
Create unlimited test email accounts via REST then send and receive real emails from them.

## Quick links
- [Get API KEY](https://app.mailslurp.com)
- [Pricing](https://www.mailslurp.com)
- [REST Documentation](https://docs.mailslurp.com)
- [Support](https://www.mailslurp.com/support)

## About package
Official SDK Client for the [MailSlurp API](https://www.mailslurp.com). See [https://www.mailslurp.com](https://www.mailslurp.com) for more information.

Completely rewritten for MailSlurp v2.0. For release notes see [CHANGELOG.md](./CHANGELOG.md).

This client is a handwritten wrapper around the [official generated swagger client](https://github.com/mailslurp/swagger-sdk-typescript-fetch). It's written in Typescript but can be used in Javascript. 

## Concept
MailSlurp is an API for sending and receiving emails from ephemeral email addresses. It is designed for use in test suites that test applications that in some way interact with emails.

Below is a diagram of how your application, tests and MailSlurp interact. 
![MailSlurp Concept](https://www.mailslurp.com/images/permalink/about.svg)

## Documentation
Start by reading the [the official MailSlurp documentation](https://docs.mailslurp.com).

The best way to understand this library is the [examples section](#examples).

The source for this client is very small so try reading [index.ts](./index.ts) Typescript definitions. Or additionally take a look at the [js-docs](./docs/).

## Install
`npm install mailslurp-client`
OR
`yarn add mailslurp-client`

## Usage

MailSlurp is an email testing API. It should be used in a test-suite to test the functionality of email dependent processes.

### Instantiation
```javascript
// import the package
import MailSlurp from "mailslurp-client"
// const MailSlurp = require("mailslurp-client").default

// create an instance with your apiKey
const api = new MailSlurp({ apiKey: "test" })
```

### Methods
```typescript
interface AbstractMailSlurpClient {
    getEmail(emailId: string): Promise<Email>;

    getRawEmail(emailId: string): Promise<string>;

    createInbox(): Promise<Inbox>;

    bulkCreateInboxes(count: number): Promise<Inbox[]>;

    deleteInbox(inboxId: string): Promise<Response>;

    bulkDeleteInboxes(inboxIds: string[]): Promise<Response>;

    getInbox(inboxId: string): Promise<Inbox>;

    getInboxes(): Promise<Inbox[]>;

    getEmails(inboxId: string, args: GetMessagesOptions): Promise<EmailPreview[]>;

    sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response>

    bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions): Promise<Response>
}

```
### Common parameter types
```typescript
interface SendEmailOptions {
    // array of recipient email addresses
    to: Array<string>;
	// everything else is optional
    bcc?: Array<string>;
    cc?: Array<string>;
    subject?: string;
    body?: string;
    html?: boolean;
    charset?: string;
    from?: string;
    replyTo?: string;
}

interface GetMessagesOptions {
    // max emails to return
    limit?: number;
    // minimum number of emails to expect.
    // when give, server will retry databases until this number is met or the retry timeout is exceeded
    minCount?: number;
    // maximum time to wait for conditions to be met
    retryTimeout?: number;
    // ignore emails received before this ISO-8601 date time
    since?: Date;
}
```

### Response types
- [Inbox](docs/interfaces/_api_.inbox.md)
- [Email](docs/interfaces/_api_.email.md)
- [SendEmailOptions](docs/interfaces/_api_.sendemailoptions.md)
- [GetMessageOptions](docs/modules/_index_.md)

See [documentation](https://docs.mailslurp.com) for more information.

## Examples 

### Test email sending
```typescript
// javascript jest example. other SDKs and REST APIs available
import { MailSlurp } from "mailslurp-client"
const api = new MailSlurp({ apiKey: "test" }) 

test('my app can receive and handle emails', async () => {
    // create a new email address for this test
    const inbox = await api.createInbox()

    // send an email from the address to your application
    await api.sendEmail(inbox.id, { to: [myAppAddress] })

    // assert that app has handled the email
    expect(myAppReceivedEmail()).resolves.toBe(true)
})
```

### Test email processing
```typescript
// can your app handle inbound emails
import { MailSlurp } from "mailslurp-client"
const api = new MailSlurp({ apiKey: "test" }) 

test('my app can send emails', async () => {
    // create a new email address for this test
    const inbox = await api.createInbox()

    // trigger an app action that sends an email
    await signUpForMyApp(inbox.emailAddress)

    // fetch emails from the inbox
    const emails = await api.getEmails(inbox.id, { minCount: 1 })

    // assert that there is an email in the inbox
    expect(emails.length).toBe(1)
    
    // fetch specific email content
    const email = await api.getEmail(emails[0].id)
    
    // assert that correct email was sent
    expect(email.body).toBe(expectedContent)
}
```

For all functions and operations [see the typescript definitions](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/index.ts#L32) or [developer documentation](https://docs.mailslurp.com).

### Debug
The library uses the debug package to log actions. Set DEBUG=mailslurp-client to enable logging output.

### Issues and feature requests
Please reach out to the developers on twitter [@MailSlurp](https://twitter.com/@mailslurp) or via the [support page](https://www.mailslurp.com/support)
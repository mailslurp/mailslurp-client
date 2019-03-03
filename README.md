# Official MailSlurp Javascript/Typescript API Client

> Offical SDK Client for the [MailSlurp API](https://www.mailslurp.com). See [about page](https://www.mailslurp.com) for more information.

Completely rewritten for MailSlurp v2.0.

## About
This client is a handwritten wrapper around the [official generated swagger client](https://github.com/mailslurp/swagger-sdk-typescript-fetch). It's written in Typescript but can be used in Javascript. 

![MailSlurp Logo](https://www.mailslurp.com/images/permalink/about.svg)

## Documentation
The best way to understand the library is the [examples section](#examples)
For more information see [official documentation](https://docs.mailslurp.com).

The source for this client is very small so try reading [index.ts](./index.ts) Typescript definitions. Or additionally take a look at the [js-docs](./docs/).

## Install
`npm install mailslurp-client`
OR
`yarn add mailslurp-client`

## Usage

### Instantiation
```javascript
// import the package
import { MailSlurp } from "mailslurp-client"
// OR const MailSlurp = require("mailslurp-client").MailSlurp

// create an instance with your apiKey
const api = new MailSlurp({ apiKey: "test" })
```

### Methods
```typescript
interface AbstractMailSlurpClient {
    getMessage(messageId: string): Promise<Email>;

    createInbox(): Promise<Inbox>;

    deleteInbox(inboxId: string): Promise<Response>;

    getInbox(inboxId: string): Promise<Inbox>;

    getInboxes(): Promise<Inbox[]>;

    getMessages(inboxId: string, args: GetMessagesOptions = {}): Promise<EmailPreview[]>;

    sendMessage(inboxId: string, sendEmailOptions: SendEmailOptions): Promise<Response>
}

```

### Response types
- [Inbox](docs/interfaces/_api_.inbox.md)
- [Email](docs/interfaces/_api_.email.md)
- [SendEmailOptions](docs/interfaces/_api_.sendemailoptions.md)
- [GetMessageOptions](docs/modules/_index_.md)

See [documentation](https://docs.mailslurp.com) for more information.

### Calling a method
```javascript
// call methods and get a Promise back
(async () => {
    try {
        const inbox = await api.createInbox()
    } catch (e) {
        // handle error
    }
})
```

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
    await api.sendEmail(inbox.id, { to: myAppAddress })

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

    // fetch welcome email from the inbox
    const emails = await api.getEmails(inbox.id, { minCount: 1 })

    // assert that the correct email was sent
    expect(emails[0].length).toBe(1)
    expect(emails[0].content).toBe(expectedContent)
}
```

For all functions and operations [see the typescript definitions](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/index.ts#L32) or [developer documentation](https://doc.mailslurp.com).

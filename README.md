![logo](https://www.mailslurp.com/permalink/logo.png)

> Send and receive emails from unlimited private inboxes. In applications or tests.

# About
For full documentation please see [Javascript Documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/classes/_index_.mailslurp.md)

## Links
- [Get API KEY](https://app.mailslurp.com)
- [Developer Guides](https://www.mailslurp.com/developers)
- [Classes and Methods](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/classes/_index_.mailslurp.md)
- [REST API documentation](https://docs.mailslurp.com)
- [Other languages](https://www.mailslurp.com/developers)
- [Support](https://www.mailslurp.com/support)
- [Contact](mailto:contact@mailslurp.dev)

## Install
`npm install -s mailslurp-client`

## Use
```javascript
const MailSlurpClient = require('mailslurp-client')
const mailslurp = new MailSlurpClient({ apiKey: 'your-api-key' })
```

## Methods
See [method documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/classes/_index_.mailslurp.md).

## Common operations

```typescript
createNewEmailAddress(): Promise<Inbox>;
sendEmailSimple(sendEmailOptions: SendEmailOptions);
waitForLatestEmail(inboxEmailAddress?: string, inboxId?: string): Promise<Email>;
waitForNthEmail(inboxId: string, index: number): Promise<Email>
```

## Advanced
See [method documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/classes/_index_.mailslurp.md).


## Examples
Here are some example use cases with an imaginary application that uses email addresses
for user sign up and sends welcome emails.

#### Create new email and sign up user
```typescript
const MailSlurpClient = require('mailslurp-client')
const mailslurp = new MailSlurpClient({ apiKey: 'your-api-key' })

let emailAddress;

test('can signup user', async () => {
    emailAddress = await mailslurp.createNewEmailAddress()
    const status = await myApplication.signUpUser(emailAddress)
    expect(status).to.equal(201)
})

test('user receives welcome email', async () => {
    const { subject, body } = await mailslurp.waitForLatestEmail(emailAddress)
    expect(subject).to.contain("Welcome to my app!")
    expect(body).to.contain("Thank you for joining")
    // can also use body to extract verification codes with regex capture
}) 
```

#### Send an email from unique address
```typescript
const MailSlurpClient = require('mailslurp-client')
const mailslurp = new MailSlurpClient({ apiKey: 'your-api-key' })

test('can send email to my app', async () => {
    await mailslurp.sendEmailSimple({ 
        to: ['my-app@app.com'],
        subject: 'Hello support',
        body: '' 
    })
})

test('my app reacted to sent email', async () => {
    const handledEmail = await testAppReceivedEmail()
    expect(handledEmail).to.equal(true)
})
```

## Help and support
Please find extensive guides and documentation at [developers portal](https://www.mailslurp.com/developers). 

For help please see the [support page](https://www.mailslurp.com/support).

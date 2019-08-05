# Official MailSlurp API Client
Create unlimited private test email accounts. Send and receive real emails with them.
This library requires a [MailSlurp account](https://app.mailslurp.com).

## Links
- [Get API KEY](https://app.mailslurp.com)
- [Developers guides and documentation](https://www.mailslurp.com/developers)
- [Pricing](https://www.mailslurp.com/pricing)
- [REST API documentation](https://docs.mailslurp.com)
- [Support](https://www.mailslurp.com/support)

## Install
`npm install -s mailslurp-client`

## Use
```javascript
const MailSlurpClient = require('mailslurp-client')
const mailslurp = new MailSlurpClient({ apiKey: 'your-api-key' })
```

## Common operations

```typescript
// create a new email address and return { id: string, emailAdress: string }
createNewEmailAddress(): Promise<Inbox>;

// send an email from a randomly generated email address
// to send from a know address see advanced operations
// sendEmailOptions must include recipients, subject and body
// for more options see SendEmailOptions definiton
// { to: string[], subject: string, body: string }
sendEmailSimple(sendEmailOptions: SendEmailOptions);

// get the latest email in an inbox or if empty wait for one to arrive
// must provide either inboxId or emailAddress of an inbox you have created
// for waiting on emails in non-empty inboxes see advanced operations
fetchLatestEmail(inboxEmailAddress?: string, inboxId?: string): Promise<Email>;
```

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
    const { subject, body } = await mailslurp.fetchLatestEmail(emailAddress)
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

## Extra operations
You can use MailSlurp in more advanced ways. Here are some method definitions. Read the source (it's small) for more information.

```typescript
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
```

## Help and support
Please find extensive guides and documentation at [developers portal](https://www.mailslurp.com/developers). For help please see the [support page](https://www.mailslurp.com/support).

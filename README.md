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
fetchLatestEmail(inboxId?: string, inboxEmailAddress?: string): Promise<Email>;
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
    const { subject, body } = await mailslurp.fetchLatestEmail(null, emailAddress)
    expect(subject).to.contain("Welcome to my app!")
    expect(body).to.contain("Thank you for joining")
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
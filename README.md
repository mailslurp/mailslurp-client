##  Introduction
[MailSlurp](https://www.mailslurp.com) is a **free API** for sending and receiving emails from applications or tests. It is designed as a simpler, more powerful interface for SMTP mail servers. 

This repository hosts the recommended MailSlurp client. MailSlurp can also be used as a [REST API](https://docs.mailslurp.com) or with officially supported clients in [Javascript](https://github.com/mailslurp/mailslurp-client-ts-js), [Ruby](https://github.com/mailslurp/mailslurp-client-ruby), [Python](https://github.com/mailslurp/mailslurp-client-python), [PHP](https://github.com/mailslurp/mailslurp-client-php), [Java](https://github.com/mailslurp/mailslurp-client-java), [C#](https://github.com/mailslurp/mailslurp-client-csharp), [Go](https://github.com/mailslurp/mailslurp-client-go) and [more](https://www.mailslurp.com/developers).

For more integrations see [mailslurp.com](https://www.mailslurp.com/)

## Documentation
- [Quickstart](https://www.mailslurp.com/developers/guides/getting-started/)
- [Guides and examples](https://www.mailslurp.com/developers/guides/)
- [Full method documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/classes/mailslurp.md) 

## Installing
```bash
npm install --save mailslurp-client
```

## Configuration
```javascript
const { MailSlurp } = require('mailslurp-client');
const mailslurp = new MailSlurp({ apiKey: 'xxxxxx' })
```

> :key: **Note**: All requests require an API Key. Get yours free via the [MailSlurp Dashboard](https://app.mailslurp.com)

## Questions
Please reach out any time using [live chat](https://drift.me/mailslurp) or [email](mailto:contact@mailslurp.dev).

## Issues
For anything related to this client please open an issue. For all other issues please [contact support](https://www.mailslurp.com/support).

## Examples

### Creating email addresses
MailSlurp uses the concept of an inbox. Inboxes have IDs and email addresses. If you want to receive emails you'll need to create an inbox first.

```javascript
const { id, emailAddress } = await mailslurp.createInbox()
// or if you prefer
const { id, emailAddress } = await mailslurp.createNewEmailAddress()
```
### Sending emails
You can send real emails with MailSlurp. If you don't care what address it is sent from use the `sendEmailSimple` method. This will send emails from a random MailSlurp address.

```javascript
mailslurp.sendEmailSimple({ to: ['recipient@domain.com'], body: '', subject: '' })
```
If you want to send email from a specific address, first create an inbox. Then use that inbox's ID to send emails.

```javascript
mailslurp.sendEmail(inbox.id, { to: ['recipient@domain.com'], ...otherOptions })
```

For a full list of email sending options [see the documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/interfaces/sendemailoptions.md). If you wish to send from custom domains see the [pricing page](https://www.mailslurp.com/pricing).

To send attachments first upload each attachment you wish to send.
```javascript
const [id] = await mailslurp.uploadAttachment({
    base64Contents: 'base64-encoded-file-contents',
    contentType: "optional/content-type",
    filename: "optional-filename"
})
```
Then use the returned attachment IDs in the `attachments` field of the [send email options](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/interfaces/sendemailoptions.md).

### Receiving emails
MailSlurp is an asynchronous service. That means certain API calls will wait until a condition is met. This saves you from having to poll the API. ([Webhooks](https://www.mailslurp.com/pricing) are also available).

To receive an email first make sure you have an inbox with an email address. Then send an email to that address with any service (including MailSlurp itself). Now you can wait for the email to arrive.

```javascript
let email = await mailslurp.waitForLatestEmail(inbox.id)
```

```javascript
// other methods
email = await mailslurp.waitForNthEmail(inbox.id, index)
const emails = await mailslurp.waitForEmailCount(count, inbox.id)
``` 

> :warning: **Note:** MailSlurp will return immediately if the inbox already contains an email. 

For more control over email fetching use the `getEmails` methods. MailSlurp will hang the connection until all conditions are met or the timeout is exceeded.

```javascript
// get a list of matching emails in preview form
const emailPreviews = await mailslurp.getEmails(inbox.id, {
    minCount: 2, // wait until 2 emails present
    retryTimeout: 60000 // max milliseconds to wait
})
// then get the email you want in full form
const email = await mailslurp.getEmail(emailPreviews[0].id)
```

### Searching emails
MailSlurp has simple email matching features that let you wait for an email that matches a particular subject, recipient or more.

```javascript
const matchOptions = {
  matches: [
    {
      field: 'SUBJECT',
      should: 'CONTAIN',
      value: 'Welcome to my company'
    }
  ]
};
await mailslurp.waitForMatchingEmails(matchOptions, 1, inbox.id, 5000);
```

For more information on email matching [see the documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/interfaces/matchoptions.md).

### Deleting entities
You can empty an inbox easily with:
```javascript
await mailslurp.emptyInbox(inbox.id)
```

You can also delete emails individually:
```javascript
await mailslurp.deleteEmail(email.id)
```

## More information
See [mailslurp.com](https://www.mailslurp.com) for all information.

## License
[MIT License](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/LICENSE)


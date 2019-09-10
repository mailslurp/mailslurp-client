<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="200" src="https://www.mailslurp.com/permalink/logo.png" alt="Vue logo"></a></p>

:incoming_envelope: Send and receive real emails in applications or tests.

##  Introduction
MailSlurp is a **free API** for sending and receiving emails from applications or tests. It is designed as a simpler, more powerful interface for SMTP mail servers. 

This repository hosts the recommended MailSlurp client. MailSlurp can also be used as a [REST API](https://docs.mailslurp.com) or with officially supported clients in [Javascript](https://github.com/mailslurp/mailslurp-client-ts-js), [Ruby](https://github.com/mailslurp/mailslurp-client-ruby), [Python](https://github.com/mailslurp/mailslurp-client-python), [PHP](https://github.com/mailslurp/mailslurp-client-php), [Java](https://github.com/mailslurp/mailslurp-client-java), [C#](https://github.com/mailslurp/mailslurp-client-csharp), [Go](https://github.com/mailslurp/mailslurp-client-go) and [more](https://www.mailslurp.com/developers).

## Installing
```bash
npm install --save mailslurp-client
```

## Configuration
```javascript
const { MailSlurp } = require('mailslurp-client');
const mailslurp = new MailSlurp({ apiKey: 'xxxxxx' })
```

> :information_source: all requests require an API Key. Get yours free via the [MailSlurp Dashboard](https://app.mailslurp.com)

## Documentation
Please see generated [method documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/classes/_index_.mailslurp.md) for this repository or view the [developers page](https://www.mailslurp.com/developers).

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

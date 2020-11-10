<p align="center" class="d-none">
  <img src="https://www.mailslurp.com/logo.svg" height="80px" alt="">
</p>

# MailSlurp Javascript Client
> Create real email addresses on demand. Send and receive emails and attachments from code and tests using Javascript or Typescript.

MailSlurp is an email API service that let's you create real email addresses in code. You can then send and receive emails and attachments in Javascript applications and tests.

## Get started
First you'll need an API Key. [Create a free account](https://app.mailslurp.com) and copy they key from your dashboard.

### Install NPM dependency
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
Create a MailSlurp instance by instantiating a class with your API Key.

```javascript
const mailslurp = new MailSlurp({ apiKey: "your_api_key" })
```

## Common use case examples
For all the MailSlurp features please see the [method documentation](./docs/classes/_index_.mailslurp.md) included with this project.

#### Create an email address
```javascript
const inbox = await mailslurp.createInbox()
// { id: '123', emailAddress: '123@mailslurp.com' }
``` 

#### Fetch emails from inbox
There are many ways to receive and fetch emails in MailSlurp. 

```javascript
const latestEmail = await mailslurp.waitForLatestEmail(inbox.id)

expect(latestEmail.subject).toContain("Hello")
expect(latestEmail.body).toContain("Welcome")


const secondEmail = await mailslurp.waitForNthEmail(inbox.id, 1)
const allEmails = await mailslurp.getInboxEmailsPaginated(inbox.id)
```

#### Send emails
```javascript
const options = {
    to: ['test@myemail.com'],
    subject: 'Hello',
    body: 'Welcome'
}
await mailslurp.sendEmail(inbox.id, options)
```

## Documentation 
- [Method documentation](./docs/classes/_index_.mailslurp.md)
- [Guides](https://www.mailslurp/guides/)
- [API Key](https://app.mailslurp.com/sign-up/)
- [Example repositories](https://www.mailslurp.com/examples/)

## Resources
- [Dashboard App](https://app.mailslurp.com) 
- [Documentation](./docs/classes/_index_.mailslurp.md)
- [Github](https://github.com/mailslurp/mailslurp-client)
- [PM](https://www.npmjs.com/package/mailslurp-client)


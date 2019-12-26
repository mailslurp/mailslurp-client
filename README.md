<p align="center">
  <img src="https://www.mailslurp.com/logo.svg" height="46px" alt="">
</p>

[MailSlurp](https://www.mailslurp.com) is an Email API for developers and QA testers. 
It let's users create emails addresses on demand, then send and receive emails and attachments in applications and tests. **MailSlurp is free for personal use**.

## Features ✉️  &rarr; 📭 &rarr; 📨
- Create dynamic email accounts 
- Receive emails with `waitFor(condition)` long-polling
- Receive emails using Push WebHooks
- Send templated, transactional emails

## About
This project contains the official and recommend MailSlurp SDK Client for Node, Javascript, and Typescript. All MailSlurp requests require API Authentication. Obtain a [free API Key for personal use](https://app.mailslurp.com/sign-up/).

## Getting Started

- [Documentation](https://docs.mailslurp.com/)
- [Create free account](https://docs.mailslurp.com/)

## Install
```
npm install --save mailslurp-client
```

## Import client
```typescript
// ES6 import
import { MailSlurp } from "mailslurp-client";

// ES5 require
const MailSlurp = require('mailslurp-client').default;
```

## Instantiate
```typescript
const mailslurp = new MailSlurp({ apiKey: 'your-api-key' });
```

## Examples
Here are some quick examples:
```javascript
// create a new email address
const { emailAddress, id } = await mailslurp.createInbox();

// receive email using created inbox
const { subject, body } = await mailslurp.waitForLatestEmail(id);

// send email from inbox
await mailslurp.sendEmail(id, { to: ['xxxx@gmail.com'] })
```
See the [documentation](https://docs.mailslurp.com) for more methods and examples.

## Documentation
See [docs.mailslurp.com](https://docs.mailslurp.com) for full documentation and examples.

This repository also contains [documentation for all methods](https://github.com/mailslurp/mailslurp-client/blob/master/docs/classes/mailslurp.md). The client closely resembles the REST API. The REST API has detailed documentation at [docs.mailslurp.com](https://docs.mailslurp.com).

## Other Clients
You can find [more MailSlurp SDKs](https://www.mailslurp.com/developers/integrations/) on our website. If you wish to call the REST API directly please see the [HTTP Documentation](https://docs.mailslurp.com).

## Change Log
See [CHANGELOG.md](https://github.com/mailslurp/mailslurp-client/blob/master/CHANGELOG.md).

## Issues
Please [email support](mailto:contact@mailslurp.dev) and include a sample of the code you are using. Alternatively you can start a [chat with our developers](https://drift.me/mailslurp) (note: responses may be asynchronous).

## License
[MIT](./LICENSE)

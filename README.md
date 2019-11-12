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

|    | **Resources** |
|----|---------------|
| 📦 | [NPM Module](https://www.npmjs.com/package/mailslurp-client) |
| 📖 | [Documentation](https://github.com/mailslurp/mailslurp-client/blob/master/docs/classes/mailslurp.md) |
| ✍️  | [Examples](https://github.com/mailslurp/examples) |
| 🎓 | [Developer Portal](https://www.mailslurp.com/developers/)                |
| 🔑 | [Get API Key](https://app.mailslurp.com/sign-up/)                   |
| ⚠️  | [Report an issue](https://github.com/mailslurp/mailslurp-client/issues) | 

## Examples

```
npm install --save mailslurp-client
```

```javascript
// instantiate client
const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({ apiKey: 'XXXXX' });

// create a new email address
const { emailAddress, id } = await mailslurp.createInbox();

// receive email using created inbox
const { subject, body } = await mailslurp.waitForLatestEmail(id);

// send email from inbox
await mailslurp.sendEmail(id, { to: ['xxxx@gmail.com'] })
```
> [See documentation for all methods](https://github.com/mailslurp/mailslurp-client/blob/master/docs/classes/mailslurp.md).

## Change Log
See [CHANGELOG.md](https://github.com/mailslurp/mailslurp-client/blob/master/CHANGELOG.md).

## Issues
Please [open an issue](https://github.com/mailslurp/mailslurp-client/issues).

## License
[MIT](./LICENSE)

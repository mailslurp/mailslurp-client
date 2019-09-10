<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="200" src="https://www.mailslurp.com/permalink/logo.png" alt="Vue logo"></a></p>


> :incoming_envelope: Send and receive real emails in applications or tests.

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

## Documentation
Please see generated [method documentation](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/docs/classes/_index_.mailslurp.md) for this repository or view the [developers page](https://www.mailslurp.com/developers).

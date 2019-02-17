# Official MailSlurp Javascript/Typescript Client
Offical SDK for [MailSlurp API](https://). Completely rewritten for MailSlurp v2.0.

Please see [official documentation](https://docs.mailslurp.com) for extensive usage and examples.
The source is very small so try reading [app.ts](./app.ts).

## Install
`npm install mailslurp-client`

## Usage
```javascript
import * as MailSlurp from "mailslurp-client"
const api = new MailSlurp({ apiKey: "test" })

// create an inbox
const inbox = await api.createInbox()
```

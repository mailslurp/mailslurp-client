# Official MailSlurp Javascript/Typescript Client
Offical SDK for [MailSlurp API](https://). Completely rewritten for MailSlurp v2.0.

Please see [official documentation](https://docs.mailslurp.com) for extensive usage and examples.
The source is very small so try reading [index.ts](./index.ts). This client is a handwritten wrapper around the [official generated swagger client](https://github.com/mailslurp/swagger-sdk-typescript-fetch). It's written in Typescript but can be used in Javascript.

## Install
`npm install mailslurp-client`

## Usage


```javascript
import * as MailSlurp from "mailslurp-client"
const api = new MailSlurp({ apiKey: "test" })

// create an inbox
const inbox = await api.createInbox()
```

For all functions and operations [see the typescript definitions](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/index.ts#L32).

# Official MailSlurp Javascript/Typescript API Client

> Offical SDK Client for the [MailSlurp API](https://www.mailslurp.com). See [about page](https://www.mailslurp.com) for more information.

Completely rewritten for MailSlurp v2.0.

## About
This client is a handwritten wrapper around the [official generated swagger client](https://github.com/mailslurp/swagger-sdk-typescript-fetch). It's written in Typescript but can be used in Javascript. 

![MailSlurp Logo](https://www.mailslurp.com/images/permalink/about.svg)

## Documentation
Please see [official documentation](https://docs.mailslurp.com) for extensive usage and examples.

The source for this client is very small so try reading [index.ts](./index.ts) Typescript definitions. Or take a look at the [js-docs](./docs/).

## Install
`npm install mailslurp-client`
OR
`yarn add mailslurp-client`

## Usage

```javascript
// import the package
import { MailSlurp } from "mailslurp-client"
// OR const MailSlurp = require("mailslurp-client").MailSlurp

// create an instance with your apiKey
const api = new MailSlurp({ apiKey: "test" })

// call methods and get a Promise back
(async () => {
    try {
        const inbox = await api.createInbox()
    } catch (e) {
        // handle error
    }
})
```

For all functions and operations [see the typescript definitions](https://github.com/mailslurp/mailslurp-client-ts-js/blob/master/index.ts#L32).

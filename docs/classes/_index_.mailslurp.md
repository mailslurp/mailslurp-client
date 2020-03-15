[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [MailSlurp](_index_.mailslurp.md)

# Class: MailSlurp

Official MailSlurp Client

This is the recommended client for [mailslurp.com](https://www.mailslurp.com).

## Features

 - Create email addresses on demand
 - Receive emails and attachments in code
 - Send emails and attachments
 - Create custom domains and webhooks

## Get started

MailSlurp is free for personal use but you must have an [account](https://app.mailslurp.com) and an [API Key](https://app.mailslurp.com).

## Installing
First you'll need to install the MailSlurp package from [npm](https://npmjs.com/package/mailslurp-client).

`npm install --save mailslurp-client`

## Importing
Next import the client into your application or test.

#### Typescript or ES6

```typescript
import { MailSlurp } from "mailslurp-client"
```

#### NodeJS require

```typescript
const MailSlurp = require('mailslurp-client').MailSlurp;

// or default import
const MailSlurp = require('mailslurp-client').default;
```

## Configure
Next configure an instance of MailSlurp using your API Key.

```typescript
const mailslurp = new MailSlurp({ apiKey: "your-api-key" })
```

## Example usage
Now that you have a configured client you can use it to interact with MailSlurp. Here are some common examples:

#### Create an inbox
```typescript
// create a new inbox
// will assign a random email address ending in `@mailslurp.com`
try {
  const randomizedInbox = await mailslurp.createInbox();
} catch (e) {
  // handle errors
}

// Or you can use a specific email address ending in `@<yourdomain>`
// note you must verify the domain with MailSlurp before 
// you can create email addresses using it
try {
  const customInbox = await mailslurp.createInbox('myaddress@mydomain.com');
} catch (e) {
  // handle errors
}
```

#### List your inboxes
```typescript
// get a list of your existing inboxes
try {
  const inboxes = await mailslurp.getInboxes()
} catch (e) {
  // handle errors
}
```

#### List emails in an inbox

#### Get an email
One way to receive an email is to fetch it by ID. You can find an emails ID by listing the emails in an inbox.
```typescript
try {
    const fullEmail = mailslurp.getEmail(emailId)
    console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
    // handle errors
}
```

#### WaitFor methods
Another way to receive an email is by using a `waitFor` method. WaitFor methods hold open a connection until a condition is met.
This is useful for situation in which an email has been sent and you expect it to arrive within a given time period.
```typescript
/**
 * Call an inbox and return the last received email 
 * OR wait until an email is received or timeout is reached
 */
waitForLatestEmail(inboxId?: string, timeout?: number): Promise<Email>

/**
 * Hold connection until inbox contains at least
 * expected number of emails and then return them
 */
waitForEmailCount(count?: number, inboxId?: string, timeout?: number): Promise<EmailPreview[]>

/**
 * Hold connection until inbox contains at least
 * expected number of emails that match a given match option input and return them
 */
waitForMatchingEmails(matchOptions: MatchOptions, count?: number, inboxId?: string, timeout?: number): Promise<EmailPreview[]>

/**
 *  Call an inbox and return email number `n` or wait for it to be received
 */ 
waitForNthEmail(inboxId: string, index: number, timeout?: number): Promise<Email>
```

#### WaitFor in action
Here is an example of a `waitFor` method in action.
 ```typescript
// inside some test
cons inbox = mailslurp.createInbox()
await myWelcomeEmailAction(inbox.emailAddress)

try {
  const email = await mailslurp.waitForLatestEmail(inbox.id)
  expect(email.body).toBe('Welcome')
} catch (e) {
  // handle timeout or email wasn't received
}
```

#### Send an email
```typescript
try {
  await mailslurp.sendEmail(inboxId, { 
    to: ['test@example.com'], 
    subject: 'Welcome',
    body: 'Hello!' 
  })
} catch (e) {
  // handle errors
}
```

## Next steps
See the methods below for more details.

## Hierarchy

* **MailSlurp**

## Index

### Constructors

* [constructor](_index_.mailslurp.md#constructor)

### Methods

* [bulkCreateInboxes](_index_.mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](_index_.mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](_index_.mailslurp.md#bulksendemails)
* [createDomain](_index_.mailslurp.md#createdomain)
* [createWebhook](_index_.mailslurp.md#createwebhook)
* [deleteDomain](_index_.mailslurp.md#deletedomain)
* [deleteInbox](_index_.mailslurp.md#deleteinbox)
* [deleteWebhook](_index_.mailslurp.md#deletewebhook)
* [downloadAttachment](_index_.mailslurp.md#downloadattachment)
* [getAllEmails](_index_.mailslurp.md#getallemails)
* [getAllInboxes](_index_.mailslurp.md#getallinboxes)
* [getAttachmentMetaData](_index_.mailslurp.md#getattachmentmetadata)
* [getDomain](_index_.mailslurp.md#getdomain)
* [getDomains](_index_.mailslurp.md#getdomains)
* [getEmail](_index_.mailslurp.md#getemail)
* [getEmails](_index_.mailslurp.md#getemails)
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [getRawEmail](_index_.mailslurp.md#getrawemail)
* [getWebhooks](_index_.mailslurp.md#getwebhooks)
* [sendEmail](_index_.mailslurp.md#sendemail)
* [uploadAttachment](_index_.mailslurp.md#uploadattachment)

## Constructors

###  constructor

\+ **new MailSlurp**(`opts`: [Config](../modules/_index_.md#config)): *[MailSlurp](_index_.mailslurp.md)*

*Defined in [index.ts:156](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L156)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../modules/_index_.md#config) |   |

**Returns:** *[MailSlurp](_index_.mailslurp.md)*

## Methods

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`: number): *Promise‹Inbox[]›*

*Defined in [index.ts:437](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L437)*

Bulk create inboxes

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *Promise‹Inbox[]›*

___

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`inboxIds`: string[]): *Promise‹Response›*

*Defined in [index.ts:446](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L446)*

Bulk delete inboxes

**Parameters:**

Name | Type |
------ | ------ |
`inboxIds` | string[] |

**Returns:** *Promise‹Response›*

___

###  bulkSendEmails

▸ **bulkSendEmails**(`bulkSendEmailOptions`: BulkSendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:426](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L426)*

Bulk send emails

**Parameters:**

Name | Type |
------ | ------ |
`bulkSendEmailOptions` | BulkSendEmailOptions |

**Returns:** *Promise‹Response›*

___

###  createDomain

▸ **createDomain**(`options`: CreateDomainOptions): *Promise‹DomainPlusVerificationRecordsAndStatus›*

*Defined in [index.ts:526](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L526)*

Create a custom domain for use with MailSlurp
You must own and have access to DNS setup for the domain in order to verify it

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | CreateDomainOptions |   |

**Returns:** *Promise‹DomainPlusVerificationRecordsAndStatus›*

___

###  createWebhook

▸ **createWebhook**(`inboxId`: string, `createWebhookOptions`: CreateWebhookOptions): *Promise‹Webhook›*

*Defined in [index.ts:455](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L455)*

Create a webhook for notifications

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`createWebhookOptions` | CreateWebhookOptions |

**Returns:** *Promise‹Webhook›*

___

###  deleteDomain

▸ **deleteDomain**(`domainId`: string): *Promise‹Response›*

*Defined in [index.ts:553](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L553)*

Delete domain

**Parameters:**

Name | Type |
------ | ------ |
`domainId` | string |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [index.ts:312](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L312)*

Delete an inbox by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Response›*

___

###  deleteWebhook

▸ **deleteWebhook**(`inboxId`: string, `webhookId`: string): *Promise‹Response›*

*Defined in [index.ts:479](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L479)*

Remove a webhook from an inbox

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`webhookId` | string |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹Response›*

*Defined in [index.ts:490](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L490)*

Get email attachment by id

Returns HTTP response containing byte stream

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |
`attachmentId` | string |

**Returns:** *Promise‹Response›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number): *Promise‹PageEmailProjection›*

*Defined in [index.ts:354](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L354)*

Get all emails
Returns paginated email previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |

**Returns:** *Promise‹PageEmailProjection›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number): *Promise‹PageInboxProjection›*

*Defined in [index.ts:344](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L344)*

Get all inboxes paginated
Returns paginated inbox previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |

**Returns:** *Promise‹PageInboxProjection›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹AttachmentMetaData›*

*Defined in [index.ts:515](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L515)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

Name | Type |
------ | ------ |
`attachmentId` | string |
`emailId` | string |

**Returns:** *Promise‹AttachmentMetaData›*

___

###  getDomain

▸ **getDomain**(`domainId`: string): *Promise‹DomainPlusVerificationRecordsAndStatus›*

*Defined in [index.ts:544](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L544)*

Get domain

**Parameters:**

Name | Type |
------ | ------ |
`domainId` | string |

**Returns:** *Promise‹DomainPlusVerificationRecordsAndStatus›*

___

###  getDomains

▸ **getDomains**(): *Promise‹Array‹DomainPreview››*

*Defined in [index.ts:535](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L535)*

Get domains

**Returns:** *Promise‹Array‹DomainPreview››*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹Email›*

*Defined in [index.ts:391](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L391)*

Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox

```typescript
try {
    const fullEmail = mailslurp.getEmail(emailId)
    console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
    // handle errors
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹Email›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../modules/_index_.md#getmessagesoptions)): *Promise‹EmailPreview[]›*

*Defined in [index.ts:368](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L368)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

```typescript
try {
    // first get email previews for an inbox
    const emails = mailslurp.getEmails(inboxId, { limit: 1 })

    // then get the full email by id
    const fullEmail = mailslurp.getEmail(emails[0].id)

    console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
    // handle errors
}
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`inboxId` | string | - | - |
`args` | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} |   |

**Returns:** *Promise‹EmailPreview[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹Inbox›*

*Defined in [index.ts:322](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L322)*

Get an inbox by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Inbox›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹Inbox[]›*

*Defined in [index.ts:333](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L333)*

Get all inboxes

```typescript
// get a list of your existing inboxes
try {
  const inboxes = await mailslurp.getInboxes()
} catch (e) {
  // handle errors
}
```

**Returns:** *Promise‹Inbox[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [index.ts:401](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L401)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  getWebhooks

▸ **getWebhooks**(`inboxId`: string): *Promise‹Webhook[]›*

*Defined in [index.ts:468](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L468)*

Get webhooks for an inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Webhook[]›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: SendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:414](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L414)*

Send and email from a given inbox

```typescript
try {
  await mailslurp.sendEmail(inboxId, { 
    to: ['test@example.com'], 
    subject: 'Welcome',
    body: 'Hello!' 
  })
} catch (e) {
  // handle errors
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | - |
`sendEmailOptions` | SendEmailOptions |   |

**Returns:** *Promise‹Response›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: UploadAttachmentOptions): *Promise‹Array‹String››*

*Defined in [index.ts:504](https://github.com/mailslurp/mailslurp-client-ts-js/blob/f7908db/index.ts#L504)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`options` | UploadAttachmentOptions |

**Returns:** *Promise‹Array‹String››*

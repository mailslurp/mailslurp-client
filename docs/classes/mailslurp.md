[MailSlurp JS](../README.md) › [Globals](../globals.md) › [MailSlurp](mailslurp.md)

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

* [constructor](mailslurp.md#constructor)

### Methods

* [bulkCreateInboxes](mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](mailslurp.md#bulksendemails)
* [createDomain](mailslurp.md#createdomain)
* [createInbox](mailslurp.md#createinbox)
* [createNewEmailAddress](mailslurp.md#createnewemailaddress)
* [createWebhook](mailslurp.md#createwebhook)
* [deleteDomain](mailslurp.md#deletedomain)
* [deleteEmail](mailslurp.md#deleteemail)
* [deleteEmailAddress](mailslurp.md#deleteemailaddress)
* [deleteInbox](mailslurp.md#deleteinbox)
* [deleteWebhook](mailslurp.md#deletewebhook)
* [downloadAttachment](mailslurp.md#downloadattachment)
* [emptyInbox](mailslurp.md#emptyinbox)
* [getAllEmails](mailslurp.md#getallemails)
* [getAllInboxes](mailslurp.md#getallinboxes)
* [getAttachmentMetaData](mailslurp.md#getattachmentmetadata)
* [getDomain](mailslurp.md#getdomain)
* [getDomains](mailslurp.md#getdomains)
* [getEmail](mailslurp.md#getemail)
* [getEmails](mailslurp.md#getemails)
* [getInbox](mailslurp.md#getinbox)
* [getInboxes](mailslurp.md#getinboxes)
* [getRawEmail](mailslurp.md#getrawemail)
* [getWebhooks](mailslurp.md#getwebhooks)
* [sendEmail](mailslurp.md#sendemail)
* [sendEmailSimple](mailslurp.md#sendemailsimple)
* [uploadAttachment](mailslurp.md#uploadattachment)
* [waitForEmailCount](mailslurp.md#waitforemailcount)
* [waitForLatestEmail](mailslurp.md#waitforlatestemail)
* [waitForMatchingEmails](mailslurp.md#waitformatchingemails)
* [waitForNthEmail](mailslurp.md#waitfornthemail)

## Constructors

###  constructor

\+ **new MailSlurp**(`opts`: [Config](../globals.md#config)): *[MailSlurp](mailslurp.md)*

*Defined in [index.ts:154](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L154)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../globals.md#config) |   |

**Returns:** *[MailSlurp](mailslurp.md)*

## Methods

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`: number): *Promise‹Inbox[]›*

*Defined in [index.ts:498](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L498)*

Bulk create inboxes

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *Promise‹Inbox[]›*

___

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`inboxIds`: string[]): *Promise‹Response›*

*Defined in [index.ts:507](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L507)*

Bulk delete inboxes

**Parameters:**

Name | Type |
------ | ------ |
`inboxIds` | string[] |

**Returns:** *Promise‹Response›*

___

###  bulkSendEmails

▸ **bulkSendEmails**(`bulkSendEmailOptions`: BulkSendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:487](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L487)*

Bulk send emails

**Parameters:**

Name | Type |
------ | ------ |
`bulkSendEmailOptions` | BulkSendEmailOptions |

**Returns:** *Promise‹Response›*

___

###  createDomain

▸ **createDomain**(`options`: CreateDomainOptions): *Promise‹DomainPlusVerificationRecordsAndStatus›*

*Defined in [index.ts:587](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L587)*

Create a custom domain for use with MailSlurp
You must own and have access to DNS setup for the domain in order to verify it

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | CreateDomainOptions |   |

**Returns:** *Promise‹DomainPlusVerificationRecordsAndStatus›*

___

###  createInbox

▸ **createInbox**(`emailAddress?`: string): *Promise‹Inbox›*

*Defined in [index.ts:363](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L363)*

Create an inbox. Pass an optional `emailAddress` to specify the email address. If not argument is passed
MailSlurp will assign the inbox a random email address ending in `@mailslurp.com`.

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

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |

**Returns:** *Promise‹Inbox›*

___

###  createNewEmailAddress

▸ **createNewEmailAddress**(): *Promise‹Inbox›*

*Defined in [index.ts:189](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L189)*

Create a new inbox

```typescript
const { id, emailAddress } = await mailslurp.createNewEmailAddress()
```

**Returns:** *Promise‹Inbox›*

___

###  createWebhook

▸ **createWebhook**(`inboxId`: string, `createWebhookOptions`: CreateWebhookOptions): *Promise‹Webhook›*

*Defined in [index.ts:516](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L516)*

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

*Defined in [index.ts:614](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L614)*

Delete domain

**Parameters:**

Name | Type |
------ | ------ |
`domainId` | string |

**Returns:** *Promise‹Response›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹Response›*

*Defined in [index.ts:341](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L341)*

Delete an email by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹Response›*

___

###  deleteEmailAddress

▸ **deleteEmailAddress**(`emailId`: string): *Promise‹Response›*

*Defined in [index.ts:351](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L351)*

Delete an email by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [index.ts:373](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L373)*

Delete an inbox by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Response›*

___

###  deleteWebhook

▸ **deleteWebhook**(`inboxId`: string, `webhookId`: string): *Promise‹Response›*

*Defined in [index.ts:540](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L540)*

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

*Defined in [index.ts:551](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L551)*

Get email attachment by id

Returns HTTP response containing byte stream

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |
`attachmentId` | string |

**Returns:** *Promise‹Response›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [index.ts:331](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L331)*

Delete all emails in a given inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Response›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number): *Promise‹PageEmailProjection›*

*Defined in [index.ts:415](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L415)*

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

*Defined in [index.ts:405](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L405)*

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

*Defined in [index.ts:576](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L576)*

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

*Defined in [index.ts:605](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L605)*

Get domain

**Parameters:**

Name | Type |
------ | ------ |
`domainId` | string |

**Returns:** *Promise‹DomainPlusVerificationRecordsAndStatus›*

___

###  getDomains

▸ **getDomains**(): *Promise‹Array‹DomainPreview››*

*Defined in [index.ts:596](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L596)*

Get domains

**Returns:** *Promise‹Array‹DomainPreview››*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹Email›*

*Defined in [index.ts:452](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L452)*

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

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../globals.md#getmessagesoptions)): *Promise‹EmailPreview[]›*

*Defined in [index.ts:429](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L429)*

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
`args` | [GetMessagesOptions](../globals.md#getmessagesoptions) |  {} |   |

**Returns:** *Promise‹EmailPreview[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹Inbox›*

*Defined in [index.ts:383](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L383)*

Get an inbox by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Inbox›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹Inbox[]›*

*Defined in [index.ts:394](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L394)*

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

*Defined in [index.ts:462](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L462)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  getWebhooks

▸ **getWebhooks**(`inboxId`: string): *Promise‹Webhook[]›*

*Defined in [index.ts:529](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L529)*

Get webhooks for an inbox

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string |   |

**Returns:** *Promise‹Webhook[]›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: SendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:475](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L475)*

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

###  sendEmailSimple

▸ **sendEmailSimple**(`sendEmailOptions`: SendEmailOptions): *Promise‹Response›*

*Defined in [index.ts:203](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L203)*

Send an email from a random address

To send from a known address first create an inbox and then use
the sendEmail endpoints.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sendEmailOptions` | SendEmailOptions |   |

**Returns:** *Promise‹Response›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: UploadAttachmentOptions): *Promise‹Array‹String››*

*Defined in [index.ts:565](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L565)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`options` | UploadAttachmentOptions |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number): *Promise‹EmailPreview[]›*

*Defined in [index.ts:317](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L317)*

Wait for and return list of emails with length of given count

```typescript
try {
  // wait for 4 emails in an inbox then return them
  const emails = waitForEmailCount(4, inboxId)
} catch (e) {
  // handle error or timeout
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number |   |

**Returns:** *Promise‹EmailPreview[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number): *Promise‹Email›*

*Defined in [index.ts:226](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L226)*

Wait for an email to arrive at an inbox or return first found result
Retries the call until at least one email is found or a maximum timeout is exceeded

```typescript
try {
  const email = await mailslurp.waitForLatestEmail(inboxId)
} catch (e) {
  // handle timeout or email wasn't received
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId?` | string | uuid |
`timeout?` | number | max milliseconds to wait  |

**Returns:** *Promise‹Email›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: MatchOptions, `count?`: number, `inboxId?`: string, `timeout?`: number): *Promise‹EmailPreview[]›*

*Defined in [index.ts:285](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L285)*

Wait until both count and match options are met and return list of emails. Match options are a bit verbose but allow
for type safety on the API end. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.

```typescript
try {
  const matchingWelcomeEmails = await mailslurp.waitForMatchingEmails({
    matches: [
      {
        field: 'SUBJECT',
        should: 'CONTAIN',
        value: 'Welcome'
      }
    ]
  }, 1, inboxId)
} catch (e) {
  // handle timeout or no results
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | MatchOptions | - |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | timeout max milliseconds to wait  |

**Returns:** *Promise‹EmailPreview[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number): *Promise‹Email›*

*Defined in [index.ts:250](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c26deb3/index.ts#L250)*

Return or wait for email number `n` in an inbox

```typescript
try {
  const email3 = await mailslurp.waitForNthEmail(inboxId, 3)
} catch (e) {
  // handle timeout or email wasn't received
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | - |
`index` | number | - |
`timeout?` | number |   |

**Returns:** *Promise‹Email›*

[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [MailSlurp](_index_.mailslurp.md)

# Class: MailSlurp

Official MailSlurp Client

## Install
`npm install --save mailslurp-client`

## Configure
Create a MailSlurp account to get an [API Key](https://app.mailslurp.com/sign-up/).

```typescript
const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({ apiKey: 'xxxx' })
```

## Make requests

```typescript
const inbox = await mailslurp.createInbox()
await mailslurp.sendEmail({ to: [inbox.emailAddress] })
const email = await mailslurp.waitForLatestEmail(inbox.id)
```

Read [quick start guide](https://www.mailslurp.com/guides/) for more examples or see the methods below.

## Hierarchy

* **MailSlurp**

## Index

### Constructors

* [constructor](_index_.mailslurp.md#constructor)

### Properties

* [attachments](_index_.mailslurp.md#attachments)
* [bulk](_index_.mailslurp.md#bulk)
* [common](_index_.mailslurp.md#common)
* [contacts](_index_.mailslurp.md#contacts)
* [domains](_index_.mailslurp.md#domains)
* [emails](_index_.mailslurp.md#emails)
* [groups](_index_.mailslurp.md#groups)
* [inboxes](_index_.mailslurp.md#inboxes)
* [templates](_index_.mailslurp.md#templates)
* [waitFor](_index_.mailslurp.md#waitfor)
* [webhooks](_index_.mailslurp.md#webhooks)

### Methods

* [createInbox](_index_.mailslurp.md#createinbox)
* [deleteEmail](_index_.mailslurp.md#deleteemail)
* [deleteInbox](_index_.mailslurp.md#deleteinbox)
* [downloadAttachment](_index_.mailslurp.md#downloadattachment)
* [emptyInbox](_index_.mailslurp.md#emptyinbox)
* [getAllEmails](_index_.mailslurp.md#getallemails)
* [getAllInboxes](_index_.mailslurp.md#getallinboxes)
* [getAttachmentMetaData](_index_.mailslurp.md#getattachmentmetadata)
* [getEmail](_index_.mailslurp.md#getemail)
* [getEmails](_index_.mailslurp.md#getemails)
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [getRawEmail](_index_.mailslurp.md#getrawemail)
* [sendEmail](_index_.mailslurp.md#sendemail)
* [uploadAttachment](_index_.mailslurp.md#uploadattachment)
* [waitForEmailCount](_index_.mailslurp.md#waitforemailcount)
* [waitForLatestEmail](_index_.mailslurp.md#waitforlatestemail)
* [waitForMatchingEmails](_index_.mailslurp.md#waitformatchingemails)
* [waitForNthEmail](_index_.mailslurp.md#waitfornthemail)

## Constructors

###  constructor

\+ **new MailSlurp**(`opts`: [Config](../modules/_index_.md#config)): *[MailSlurp](_index_.mailslurp.md)*

*Defined in [index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L84)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../modules/_index_.md#config) |   |

**Returns:** *[MailSlurp](_index_.mailslurp.md)*

## Properties

###  attachments

• **attachments**: *AttachmentControllerApi*

*Defined in [index.ts:74](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L74)*

___

###  bulk

• **bulk**: *BulkActionsControllerApi*

*Defined in [index.ts:77](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L77)*

___

###  common

• **common**: *CommonActionsControllerApi*

*Defined in [index.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L76)*

___

###  contacts

• **contacts**: *ContactControllerApi*

*Defined in [index.ts:81](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L81)*

___

###  domains

• **domains**: *DomainControllerApi*

*Defined in [index.ts:80](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L80)*

___

###  emails

• **emails**: *EmailControllerApi*

*Defined in [index.ts:72](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L72)*

___

###  groups

• **groups**: *GroupControllerApi*

*Defined in [index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L82)*

___

###  inboxes

• **inboxes**: *InboxControllerApi*

*Defined in [index.ts:73](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L73)*

___

###  templates

• **templates**: *TemplateControllerApi*

*Defined in [index.ts:83](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L83)*

___

###  waitFor

• **waitFor**: *WaitForControllerApi*

*Defined in [index.ts:78](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L78)*

___

###  webhooks

• **webhooks**: *WebhookControllerApi*

*Defined in [index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L84)*

## Methods

###  createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array‹string›): *Promise‹Inbox›*

*Defined in [index.ts:127](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |
`name?` | string |
`description?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`tags?` | Array‹string› |

**Returns:** *Promise‹Inbox›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹void›*

*Defined in [index.ts:263](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |

**Returns:** *Promise‹void›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹void›*

*Defined in [index.ts:147](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹void›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹String›*

*Defined in [index.ts:359](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L359)*

Get email attachment by id

Returns HTTP response containing byte stream

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |
`attachmentId` | string |

**Returns:** *Promise‹String›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string): *Promise‹void›*

*Defined in [index.ts:153](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹void›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array‹string›, `sort?`: GetEmailsPaginatedSortEnum, `unreadOnly?`: boolean): *Promise‹PageEmailProjection›*

*Defined in [index.ts:273](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L273)*

Get all emails
Returns paginated email previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`inboxId?` | Array‹string› |
`sort?` | GetEmailsPaginatedSortEnum |
`unreadOnly?` | boolean |

**Returns:** *Promise‹PageEmailProjection›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number, `favourite?`: boolean, `search?`: string, `sort?`: GetAllInboxesSortEnum): *Promise‹PageInboxProjection›*

*Defined in [index.ts:178](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L178)*

Get all inboxes paginated
Returns paginated inbox previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`favourite?` | boolean |
`search?` | string |
`sort?` | GetAllInboxesSortEnum |

**Returns:** *Promise‹PageInboxProjection›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹AttachmentMetaData›*

*Defined in [index.ts:388](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L388)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

Name | Type |
------ | ------ |
`attachmentId` | string |
`emailId` | string |

**Returns:** *Promise‹AttachmentMetaData›*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹Email›*

*Defined in [index.ts:322](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L322)*

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

*Defined in [index.ts:299](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L299)*

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

*Defined in [index.ts:159](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹Inbox›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹Inbox[]›*

*Defined in [index.ts:170](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L170)*

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

*Defined in [index.ts:332](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L332)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: SendEmailOptions): *Promise‹void›*

*Defined in [index.ts:345](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L345)*

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

**Returns:** *Promise‹void›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: UploadAttachmentOptions): *Promise‹Array‹String››*

*Defined in [index.ts:373](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L373)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`options` | UploadAttachmentOptions |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹EmailPreview[]›*

*Defined in [index.ts:246](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹EmailPreview[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹Email›*

*Defined in [index.ts:198](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L198)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹Email›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: MatchOptions, `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹EmailPreview[]›*

*Defined in [index.ts:228](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`matchOptions` | MatchOptions |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹EmailPreview[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹Email›*

*Defined in [index.ts:212](https://github.com/mailslurp/mailslurp-client-ts-js/blob/496b962/index.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹Email›*

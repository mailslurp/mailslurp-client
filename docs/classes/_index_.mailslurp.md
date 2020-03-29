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

* [attachmentController](_index_.mailslurp.md#attachmentcontroller)
* [bulkController](_index_.mailslurp.md#bulkcontroller)
* [commonController](_index_.mailslurp.md#commoncontroller)
* [contactController](_index_.mailslurp.md#contactcontroller)
* [domainController](_index_.mailslurp.md#domaincontroller)
* [emailController](_index_.mailslurp.md#emailcontroller)
* [groupController](_index_.mailslurp.md#groupcontroller)
* [inboxController](_index_.mailslurp.md#inboxcontroller)
* [templateController](_index_.mailslurp.md#templatecontroller)
* [waitController](_index_.mailslurp.md#waitcontroller)
* [webhookController](_index_.mailslurp.md#webhookcontroller)

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

*Defined in [src/index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L84)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../modules/_index_.md#config) |   |

**Returns:** *[MailSlurp](_index_.mailslurp.md)*

## Properties

###  attachmentController

• **attachmentController**: *[AttachmentControllerApi](_generated_api_.attachmentcontrollerapi.md)*

*Defined in [src/index.ts:74](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L74)*

___

###  bulkController

• **bulkController**: *[BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)*

*Defined in [src/index.ts:77](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L77)*

___

###  commonController

• **commonController**: *[CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)*

*Defined in [src/index.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L76)*

___

###  contactController

• **contactController**: *[ContactControllerApi](_generated_api_.contactcontrollerapi.md)*

*Defined in [src/index.ts:81](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L81)*

___

###  domainController

• **domainController**: *[DomainControllerApi](_generated_api_.domaincontrollerapi.md)*

*Defined in [src/index.ts:80](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L80)*

___

###  emailController

• **emailController**: *[EmailControllerApi](_generated_api_.emailcontrollerapi.md)*

*Defined in [src/index.ts:72](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L72)*

___

###  groupController

• **groupController**: *[GroupControllerApi](_generated_api_.groupcontrollerapi.md)*

*Defined in [src/index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L82)*

___

###  inboxController

• **inboxController**: *[InboxControllerApi](_generated_api_.inboxcontrollerapi.md)*

*Defined in [src/index.ts:73](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L73)*

___

###  templateController

• **templateController**: *[TemplateControllerApi](_generated_api_.templatecontrollerapi.md)*

*Defined in [src/index.ts:83](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L83)*

___

###  waitController

• **waitController**: *[WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)*

*Defined in [src/index.ts:78](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L78)*

___

###  webhookController

• **webhookController**: *[WebhookControllerApi](_generated_api_.webhookcontrollerapi.md)*

*Defined in [src/index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L84)*

## Methods

###  createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array‹string›): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/index.ts:162](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |
`name?` | string |
`description?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`tags?` | Array‹string› |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹Response›*

*Defined in [src/index.ts:296](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L296)*

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [src/index.ts:182](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹String›*

*Defined in [src/index.ts:392](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L392)*

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

▸ **emptyInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [src/index.ts:188](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹Response›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array‹string›, `sort?`: [SortEnum](../modules/_index_.md#sortenum), `unreadOnly?`: boolean): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

*Defined in [src/index.ts:306](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L306)*

Get all emails
Returns paginated email previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`inboxId?` | Array‹string› |
`sort?` | [SortEnum](../modules/_index_.md#sortenum) |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number, `favourite?`: boolean, `search?`: string, `sort?`: [SortEnum](../modules/_index_.md#sortenum), `tag?`: string): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

*Defined in [src/index.ts:213](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L213)*

Get all inboxes paginated
Returns paginated inbox previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`favourite?` | boolean |
`search?` | string |
`sort?` | [SortEnum](../modules/_index_.md#sortenum) |
`tag?` | string |

**Returns:** *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

*Defined in [src/index.ts:419](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L419)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

Name | Type |
------ | ------ |
`attachmentId` | string |
`emailId` | string |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/index.ts:355](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L355)*

Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox

[[include: get-email.md]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../modules/_index_.md#getmessagesoptions)): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/index.ts:332](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L332)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

[[include: get-emails.md]]

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`inboxId` | string | - | - |
`args` | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} |   |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/index.ts:194](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

*Defined in [src/index.ts:205](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L205)*

Get all inboxes

[[include: list-inboxes.md]]

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [src/index.ts:365](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L365)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md)): *Promise‹Response›*

*Defined in [src/index.ts:378](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L378)*

Send and email from a given inbox

[[include: send-email.md]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | - |
`sendEmailOptions` | [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md) |   |

**Returns:** *Promise‹Response›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md)): *Promise‹Array‹String››*

*Defined in [src/index.ts:406](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L406)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md) |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/index.ts:279](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/index.ts:235](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/index.ts:261](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L261)*

**Parameters:**

Name | Type |
------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/_generated_api_.matchoptions.md) |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/index.ts:245](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L245)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

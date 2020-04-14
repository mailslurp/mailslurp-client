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

* [aliasController](_index_.mailslurp.md#aliascontroller)
* [attachmentController](_index_.mailslurp.md#attachmentcontroller)
* [bulkController](_index_.mailslurp.md#bulkcontroller)
* [commonController](_index_.mailslurp.md#commoncontroller)
* [contactController](_index_.mailslurp.md#contactcontroller)
* [domainController](_index_.mailslurp.md#domaincontroller)
* [emailController](_index_.mailslurp.md#emailcontroller)
* [formController](_index_.mailslurp.md#formcontroller)
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

*Defined in [src/index.ts:88](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L88)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../modules/_index_.md#config) |   |

**Returns:** *[MailSlurp](_index_.mailslurp.md)*

## Properties

###  aliasController

• **aliasController**: *[AliasControllerApi](_generated_api_.aliascontrollerapi.md)*

*Defined in [src/index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L82)*

___

###  attachmentController

• **attachmentController**: *[AttachmentControllerApi](_generated_api_.attachmentcontrollerapi.md)*

*Defined in [src/index.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L76)*

___

###  bulkController

• **bulkController**: *[BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)*

*Defined in [src/index.ts:79](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L79)*

___

###  commonController

• **commonController**: *[CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)*

*Defined in [src/index.ts:78](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L78)*

___

###  contactController

• **contactController**: *[ContactControllerApi](_generated_api_.contactcontrollerapi.md)*

*Defined in [src/index.ts:85](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L85)*

___

###  domainController

• **domainController**: *[DomainControllerApi](_generated_api_.domaincontrollerapi.md)*

*Defined in [src/index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L84)*

___

###  emailController

• **emailController**: *[EmailControllerApi](_generated_api_.emailcontrollerapi.md)*

*Defined in [src/index.ts:74](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L74)*

___

###  formController

• **formController**: *[FormControllerApi](_generated_api_.formcontrollerapi.md)*

*Defined in [src/index.ts:83](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L83)*

___

###  groupController

• **groupController**: *[GroupControllerApi](_generated_api_.groupcontrollerapi.md)*

*Defined in [src/index.ts:86](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L86)*

___

###  inboxController

• **inboxController**: *[InboxControllerApi](_generated_api_.inboxcontrollerapi.md)*

*Defined in [src/index.ts:75](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L75)*

___

###  templateController

• **templateController**: *[TemplateControllerApi](_generated_api_.templatecontrollerapi.md)*

*Defined in [src/index.ts:87](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L87)*

___

###  waitController

• **waitController**: *[WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)*

*Defined in [src/index.ts:80](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L80)*

___

###  webhookController

• **webhookController**: *[WebhookControllerApi](_generated_api_.webhookcontrollerapi.md)*

*Defined in [src/index.ts:88](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L88)*

## Methods

###  createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array‹string›): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/index.ts:125](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L125)*

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

*Defined in [src/index.ts:259](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L259)*

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [src/index.ts:145](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹String›*

*Defined in [src/index.ts:355](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L355)*

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

*Defined in [src/index.ts:151](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹Response›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array‹string›, `sort?`: [SortEnum](../modules/_index_.md#sortenum), `unreadOnly?`: boolean): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

*Defined in [src/index.ts:269](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L269)*

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

*Defined in [src/index.ts:176](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L176)*

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

*Defined in [src/index.ts:382](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L382)*

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

*Defined in [src/index.ts:318](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L318)*

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

*Defined in [src/index.ts:295](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L295)*

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

*Defined in [src/index.ts:157](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

*Defined in [src/index.ts:168](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L168)*

Get all inboxes

[[include: list-inboxes.md]]

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [src/index.ts:328](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L328)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md)): *Promise‹Response›*

*Defined in [src/index.ts:341](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L341)*

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

*Defined in [src/index.ts:369](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L369)*

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

*Defined in [src/index.ts:242](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L242)*

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

*Defined in [src/index.ts:198](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L198)*

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

*Defined in [src/index.ts:224](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L224)*

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

*Defined in [src/index.ts:208](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/index.ts#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

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

*Defined in [src/index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L84)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../modules/_index_.md#config) |   |

**Returns:** *[MailSlurp](_index_.mailslurp.md)*

## Properties

###  attachmentController

• **attachmentController**: *[AttachmentControllerApi](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md)*

*Defined in [src/index.ts:74](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L74)*

___

###  bulkController

• **bulkController**: *[BulkActionsControllerApi](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md)*

*Defined in [src/index.ts:77](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L77)*

___

###  commonController

• **commonController**: *[CommonActionsControllerApi](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md)*

*Defined in [src/index.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L76)*

___

###  contactController

• **contactController**: *[ContactControllerApi](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md)*

*Defined in [src/index.ts:81](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L81)*

___

###  domainController

• **domainController**: *[DomainControllerApi](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md)*

*Defined in [src/index.ts:80](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L80)*

___

###  emailController

• **emailController**: *[EmailControllerApi](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md)*

*Defined in [src/index.ts:72](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L72)*

___

###  groupController

• **groupController**: *[GroupControllerApi](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md)*

*Defined in [src/index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L82)*

___

###  inboxController

• **inboxController**: *[InboxControllerApi](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md)*

*Defined in [src/index.ts:73](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L73)*

___

###  templateController

• **templateController**: *[TemplateControllerApi](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md)*

*Defined in [src/index.ts:83](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L83)*

___

###  waitController

• **waitController**: *[WaitForControllerApi](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md)*

*Defined in [src/index.ts:78](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L78)*

___

###  webhookController

• **webhookController**: *[WebhookControllerApi](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md)*

*Defined in [src/index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L84)*

## Methods

###  createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array‹string›): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

*Defined in [src/index.ts:127](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |
`name?` | string |
`description?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`tags?` | Array‹string› |

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹void›*

*Defined in [src/index.ts:263](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |

**Returns:** *Promise‹void›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹void›*

*Defined in [src/index.ts:147](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹void›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹String›*

*Defined in [src/index.ts:359](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L359)*

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

*Defined in [src/index.ts:153](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹void›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array‹string›, `sort?`: [GetEmailsPaginatedSortEnum](../enums/_lib_apis_emailcontrollerapi_.getemailspaginatedsortenum.md), `unreadOnly?`: boolean): *Promise‹[PageEmailProjection](../interfaces/_lib_models_pageemailprojection_.pageemailprojection.md)›*

*Defined in [src/index.ts:273](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L273)*

Get all emails
Returns paginated email previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`inboxId?` | Array‹string› |
`sort?` | [GetEmailsPaginatedSortEnum](../enums/_lib_apis_emailcontrollerapi_.getemailspaginatedsortenum.md) |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/_lib_models_pageemailprojection_.pageemailprojection.md)›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number, `favourite?`: boolean, `search?`: string, `sort?`: [GetAllInboxesSortEnum](../enums/_lib_apis_inboxcontrollerapi_.getallinboxessortenum.md)): *Promise‹[PageInboxProjection](../interfaces/_lib_models_pageinboxprojection_.pageinboxprojection.md)›*

*Defined in [src/index.ts:178](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L178)*

Get all inboxes paginated
Returns paginated inbox previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`favourite?` | boolean |
`search?` | string |
`sort?` | [GetAllInboxesSortEnum](../enums/_lib_apis_inboxcontrollerapi_.getallinboxessortenum.md) |

**Returns:** *Promise‹[PageInboxProjection](../interfaces/_lib_models_pageinboxprojection_.pageinboxprojection.md)›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)›*

*Defined in [src/index.ts:388](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L388)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

Name | Type |
------ | ------ |
`attachmentId` | string |
`emailId` | string |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)›*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

*Defined in [src/index.ts:322](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L322)*

Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox

[[include: get-email.md]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../modules/_index_.md#getmessagesoptions)): *Promise‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)[]›*

*Defined in [src/index.ts:299](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L299)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

[[include: get-emails.md]]

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`inboxId` | string | - | - |
`args` | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} |   |

**Returns:** *Promise‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

*Defined in [src/index.ts:159](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)[]›*

*Defined in [src/index.ts:170](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L170)*

Get all inboxes

[[include: list-inboxes.md]]

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [src/index.ts:332](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L332)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: [SendEmailOptions](../interfaces/_lib_models_sendemailoptions_.sendemailoptions.md)): *Promise‹void›*

*Defined in [src/index.ts:345](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L345)*

Send and email from a given inbox

[[include: send-email.md]]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | - |
`sendEmailOptions` | [SendEmailOptions](../interfaces/_lib_models_sendemailoptions_.sendemailoptions.md) |   |

**Returns:** *Promise‹void›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: [UploadAttachmentOptions](../interfaces/_lib_models_uploadattachmentoptions_.uploadattachmentoptions.md)): *Promise‹Array‹String››*

*Defined in [src/index.ts:373](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L373)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadAttachmentOptions](../interfaces/_lib_models_uploadattachmentoptions_.uploadattachmentoptions.md) |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)[]›*

*Defined in [src/index.ts:246](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

*Defined in [src/index.ts:198](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L198)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: [MatchOptions](../interfaces/_lib_models_matchoptions_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)[]›*

*Defined in [src/index.ts:228](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/_lib_models_matchoptions_.matchoptions.md) |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

*Defined in [src/index.ts:212](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/index.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

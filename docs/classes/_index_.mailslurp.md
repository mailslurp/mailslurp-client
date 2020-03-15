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

*Defined in [index.ts:87](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L87)*

Create a new MailSlurp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../modules/_index_.md#config) |   |

**Returns:** *[MailSlurp](_index_.mailslurp.md)*

## Properties

###  attachments

• **attachments**: *[AttachmentControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_attachmentcontrollerapi_d_.attachmentcontrollerapi.md)*

*Defined in [index.ts:77](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L77)*

___

###  bulk

• **bulk**: *[BulkActionsControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_bulkactionscontrollerapi_d_.bulkactionscontrollerapi.md)*

*Defined in [index.ts:80](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L80)*

___

###  common

• **common**: *[CommonActionsControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_commonactionscontrollerapi_d_.commonactionscontrollerapi.md)*

*Defined in [index.ts:79](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L79)*

___

###  contacts

• **contacts**: *[ContactControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_contactcontrollerapi_d_.contactcontrollerapi.md)*

*Defined in [index.ts:84](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L84)*

___

###  domains

• **domains**: *[DomainControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_domaincontrollerapi_d_.domaincontrollerapi.md)*

*Defined in [index.ts:83](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L83)*

___

###  emails

• **emails**: *[EmailControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_emailcontrollerapi_d_.emailcontrollerapi.md)*

*Defined in [index.ts:75](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L75)*

___

###  groups

• **groups**: *[GroupControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_groupcontrollerapi_d_.groupcontrollerapi.md)*

*Defined in [index.ts:85](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L85)*

___

###  inboxes

• **inboxes**: *[InboxControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_inboxcontrollerapi_d_.inboxcontrollerapi.md)*

*Defined in [index.ts:76](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L76)*

___

###  templates

• **templates**: *[TemplateControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_templatecontrollerapi_d_.templatecontrollerapi.md)*

*Defined in [index.ts:86](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L86)*

___

###  waitFor

• **waitFor**: *[WaitForControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_waitforcontrollerapi_d_.waitforcontrollerapi.md)*

*Defined in [index.ts:81](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L81)*

___

###  webhooks

• **webhooks**: *[WebhookControllerApi](_node_modules_mailslurp_swagger_sdk_ts_dist_apis_webhookcontrollerapi_d_.webhookcontrollerapi.md)*

*Defined in [index.ts:87](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L87)*

## Methods

###  createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array‹string›): *Promise‹[Inbox](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_inbox_d_.inbox.md)›*

*Defined in [index.ts:130](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |
`name?` | string |
`description?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`tags?` | Array‹string› |

**Returns:** *Promise‹[Inbox](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_inbox_d_.inbox.md)›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹void›*

*Defined in [index.ts:266](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`emailId` | string |

**Returns:** *Promise‹void›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹void›*

*Defined in [index.ts:150](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹void›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹String›*

*Defined in [index.ts:362](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L362)*

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

*Defined in [index.ts:156](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹void›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array‹string›, `sort?`: [GetEmailsPaginatedSortEnum](../enums/_node_modules_mailslurp_swagger_sdk_ts_dist_apis_emailcontrollerapi_d_.getemailspaginatedsortenum.md), `unreadOnly?`: boolean): *Promise‹[PageEmailProjection](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_pageemailprojection_d_.pageemailprojection.md)›*

*Defined in [index.ts:276](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L276)*

Get all emails
Returns paginated email previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`inboxId?` | Array‹string› |
`sort?` | [GetEmailsPaginatedSortEnum](../enums/_node_modules_mailslurp_swagger_sdk_ts_dist_apis_emailcontrollerapi_d_.getemailspaginatedsortenum.md) |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_pageemailprojection_d_.pageemailprojection.md)›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number, `favourite?`: boolean, `search?`: string, `sort?`: [GetAllInboxesSortEnum](../enums/_node_modules_mailslurp_swagger_sdk_ts_dist_apis_inboxcontrollerapi_d_.getallinboxessortenum.md)): *Promise‹[PageInboxProjection](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_pageinboxprojection_d_.pageinboxprojection.md)›*

*Defined in [index.ts:181](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L181)*

Get all inboxes paginated
Returns paginated inbox previews

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`favourite?` | boolean |
`search?` | string |
`sort?` | [GetAllInboxesSortEnum](../enums/_node_modules_mailslurp_swagger_sdk_ts_dist_apis_inboxcontrollerapi_d_.getallinboxessortenum.md) |

**Returns:** *Promise‹[PageInboxProjection](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_pageinboxprojection_d_.pageinboxprojection.md)›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹[AttachmentMetaData](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_attachmentmetadata_d_.attachmentmetadata.md)›*

*Defined in [index.ts:391](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L391)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

Name | Type |
------ | ------ |
`attachmentId` | string |
`emailId` | string |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_attachmentmetadata_d_.attachmentmetadata.md)›*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹[Email](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_email_d_.email.md)›*

*Defined in [index.ts:325](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L325)*

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

**Returns:** *Promise‹[Email](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_email_d_.email.md)›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../modules/_index_.md#getmessagesoptions)): *Promise‹[EmailPreview](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_emailpreview_d_.emailpreview.md)[]›*

*Defined in [index.ts:302](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L302)*

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

**Returns:** *Promise‹[EmailPreview](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_emailpreview_d_.emailpreview.md)[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹[Inbox](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_inbox_d_.inbox.md)›*

*Defined in [index.ts:162](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |

**Returns:** *Promise‹[Inbox](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_inbox_d_.inbox.md)›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹[Inbox](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_inbox_d_.inbox.md)[]›*

*Defined in [index.ts:173](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L173)*

Get all inboxes

```typescript
// get a list of your existing inboxes
try {
  const inboxes = await mailslurp.getInboxes()
} catch (e) {
  // handle errors
}
```

**Returns:** *Promise‹[Inbox](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_inbox_d_.inbox.md)[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [index.ts:335](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L335)*

Get an email's raw contents from by id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string |   |

**Returns:** *Promise‹string›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: [SendEmailOptions](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_sendemailoptions_d_.sendemailoptions.md)): *Promise‹void›*

*Defined in [index.ts:348](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L348)*

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
`sendEmailOptions` | [SendEmailOptions](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_sendemailoptions_d_.sendemailoptions.md) |   |

**Returns:** *Promise‹void›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: [UploadAttachmentOptions](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_uploadattachmentoptions_d_.uploadattachmentoptions.md)): *Promise‹Array‹String››*

*Defined in [index.ts:376](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L376)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadAttachmentOptions](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_uploadattachmentoptions_d_.uploadattachmentoptions.md) |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_emailpreview_d_.emailpreview.md)[]›*

*Defined in [index.ts:249](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L249)*

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_emailpreview_d_.emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_email_d_.email.md)›*

*Defined in [index.ts:201](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_email_d_.email.md)›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: [MatchOptions](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_matchoptions_d_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_emailpreview_d_.emailpreview.md)[]›*

*Defined in [index.ts:231](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_matchoptions_d_.matchoptions.md) |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_emailpreview_d_.emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_email_d_.email.md)›*

*Defined in [index.ts:215](https://github.com/mailslurp/mailslurp-client-ts-js/blob/61eff68/index.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/_node_modules_mailslurp_swagger_sdk_ts_dist_models_email_d_.email.md)›*

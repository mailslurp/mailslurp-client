[MailSlurp JS](../README.md) / MailSlurp

# Class: MailSlurp

The official MailSlurp Javascript library. A wrapper around the [MailSlurp REST API](https://www.mailslurp.com/docs/api/docs/Apis/).

Create an instance of this class to call MailSlurp API methods. Contains top level convenience functions. Access the full API controllers as properties on the instance.

## Create instance
You must provide a configuration object with [your API Key](https://app.mailslurp.com) as the `apiKey` property
when creating a new instance.

```javascript
const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({
 apiKey: 'xxxx'
})
```

## Call methods
Most methods are asynchronous and return Promises. You can `await` the results or use `.then(result => {})`
Common controllers include the [InboxController](https://www.mailslurp.com/docs/js/docs/classes/inboxcontrollerapi/), [EmailController](https://www.mailslurp.com/docs/js/docs/classes/emailcontrollerapi/) and the [WaitForController](https://www.mailslurp.com/docs/js/docs/classes/waitforcontrollerapi/) for receiving emails.

```javascript
// call convenience functions
const email = await mailslurp.waitForLatestEmail(...args)

// call controllers to access full API methods
const alias = await mailslurp.aliasController.createAlias(...args)

// or create a controller
const inboxController = mailslurp.inboxController
const inbox = await inboxController.createInbox()

// use Promises methods if you prefer
mailslurp.getEmails(inbox.id).then(emails => {
   // handle emails
   console.log(emails))
 }
```

## Table of contents

### Constructors

- [constructor](MailSlurp.md#constructor)

### Properties

- [aliasController](MailSlurp.md#aliascontroller)
- [attachmentController](MailSlurp.md#attachmentcontroller)
- [bounceController](MailSlurp.md#bouncecontroller)
- [bulkController](MailSlurp.md#bulkcontroller)
- [commonController](MailSlurp.md#commoncontroller)
- [contactController](MailSlurp.md#contactcontroller)
- [domainController](MailSlurp.md#domaincontroller)
- [emailController](MailSlurp.md#emailcontroller)
- [formController](MailSlurp.md#formcontroller)
- [groupController](MailSlurp.md#groupcontroller)
- [inboxController](MailSlurp.md#inboxcontroller)
- [inboxForwarderController](MailSlurp.md#inboxforwardercontroller)
- [inboxRulesetController](MailSlurp.md#inboxrulesetcontroller)
- [mailServerController](MailSlurp.md#mailservercontroller)
- [missedEmailController](MailSlurp.md#missedemailcontroller)
- [templateController](MailSlurp.md#templatecontroller)
- [trackingController](MailSlurp.md#trackingcontroller)
- [waitController](MailSlurp.md#waitcontroller)
- [webhookController](MailSlurp.md#webhookcontroller)

### Methods

- [createInbox](MailSlurp.md#createinbox)
- [createInboxWithOptions](MailSlurp.md#createinboxwithoptions)
- [deleteEmail](MailSlurp.md#deleteemail)
- [deleteInbox](MailSlurp.md#deleteinbox)
- [downloadAttachment](MailSlurp.md#downloadattachment)
- [emptyInbox](MailSlurp.md#emptyinbox)
- [getAllEmails](MailSlurp.md#getallemails)
- [getAllInboxes](MailSlurp.md#getallinboxes)
- [getAttachmentMetaData](MailSlurp.md#getattachmentmetadata)
- [getEmail](MailSlurp.md#getemail)
- [getEmails](MailSlurp.md#getemails)
- [getInbox](MailSlurp.md#getinbox)
- [getInboxes](MailSlurp.md#getinboxes)
- [getRawEmail](MailSlurp.md#getrawemail)
- [sendEmail](MailSlurp.md#sendemail)
- [uploadAttachment](MailSlurp.md#uploadattachment)
- [waitForEmailCount](MailSlurp.md#waitforemailcount)
- [waitForLatestEmail](MailSlurp.md#waitforlatestemail)
- [waitForMatchingEmails](MailSlurp.md#waitformatchingemails)
- [waitForNthEmail](MailSlurp.md#waitfornthemail)

## Constructors

### constructor

• **new MailSlurp**(`opts`)

Create a new MailSlurp instance.

Contains top level convenience functions. Access the full API controllers as properties on the instance.

```javascript
const MailSlurp = require('mailslurp-client').default
const mailslurp = new MailSlurp({ apiKey })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`Config`](../README.md#config) |

#### Defined in

[src/index.ts:131](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L131)

## Properties

### aliasController

• `Readonly` **aliasController**: [`AliasControllerApi`](AliasControllerApi.md)

#### Defined in

[src/index.ts:106](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L106)

___

### attachmentController

• `Readonly` **attachmentController**: [`AttachmentControllerApi`](AttachmentControllerApi.md)

#### Defined in

[src/index.ts:100](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L100)

___

### bounceController

• `Readonly` **bounceController**: [`BounceControllerApi`](BounceControllerApi.md)

#### Defined in

[src/index.ts:118](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L118)

___

### bulkController

• `Readonly` **bulkController**: [`BulkActionsControllerApi`](BulkActionsControllerApi.md)

#### Defined in

[src/index.ts:103](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L103)

___

### commonController

• `Readonly` **commonController**: [`CommonActionsControllerApi`](CommonActionsControllerApi.md)

#### Defined in

[src/index.ts:102](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L102)

___

### contactController

• `Readonly` **contactController**: [`ContactControllerApi`](ContactControllerApi.md)

#### Defined in

[src/index.ts:109](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L109)

___

### domainController

• `Readonly` **domainController**: [`DomainControllerApi`](DomainControllerApi.md)

#### Defined in

[src/index.ts:108](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L108)

___

### emailController

• `Readonly` **emailController**: [`EmailControllerApi`](EmailControllerApi.md)

#### Defined in

[src/index.ts:98](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L98)

___

### formController

• `Readonly` **formController**: [`FormControllerApi`](FormControllerApi.md)

#### Defined in

[src/index.ts:107](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L107)

___

### groupController

• `Readonly` **groupController**: [`GroupControllerApi`](GroupControllerApi.md)

#### Defined in

[src/index.ts:110](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L110)

___

### inboxController

• `Readonly` **inboxController**: [`InboxControllerApi`](InboxControllerApi.md)

#### Defined in

[src/index.ts:99](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L99)

___

### inboxForwarderController

• `Readonly` **inboxForwarderController**: [`InboxForwarderControllerApi`](InboxForwarderControllerApi.md)

#### Defined in

[src/index.ts:116](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L116)

___

### inboxRulesetController

• `Readonly` **inboxRulesetController**: [`InboxRulesetControllerApi`](InboxRulesetControllerApi.md)

#### Defined in

[src/index.ts:115](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L115)

___

### mailServerController

• `Readonly` **mailServerController**: [`MailServerControllerApi`](MailServerControllerApi.md)

#### Defined in

[src/index.ts:113](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L113)

___

### missedEmailController

• `Readonly` **missedEmailController**: [`MissedEmailControllerApi`](MissedEmailControllerApi.md)

#### Defined in

[src/index.ts:114](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L114)

___

### templateController

• `Readonly` **templateController**: [`TemplateControllerApi`](TemplateControllerApi.md)

#### Defined in

[src/index.ts:111](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L111)

___

### trackingController

• `Readonly` **trackingController**: [`TrackingControllerApi`](TrackingControllerApi.md)

#### Defined in

[src/index.ts:117](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L117)

___

### waitController

• `Readonly` **waitController**: [`WaitForControllerApi`](WaitForControllerApi.md)

#### Defined in

[src/index.ts:104](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L104)

___

### webhookController

• `Readonly` **webhookController**: [`WebhookControllerApi`](WebhookControllerApi.md)

#### Defined in

[src/index.ts:112](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L112)

## Methods

### createInbox

▸ **createInbox**(`emailAddress?`, `name?`, `description?`, `expiresAt?`, `favourite?`, `tags?`, `teamAccess?`, `expiresIn?`, `useDomainPool?`, `inboxType?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`summary`** Create an Inbox (email address)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailAddress?` | `string` | - |
| `name?` | `string` | - |
| `description?` | `string` | - |
| `expiresAt?` | `Date` | - |
| `favourite?` | `boolean` | - |
| `tags?` | `string`[] | - |
| `teamAccess?` | `boolean` | - |
| `expiresIn?` | `number` | - |
| `useDomainPool?` | `boolean` | - |
| `inboxType?` | ``"HTTP_INBOX"`` \| ``"SMTP_INBOX"`` | Optional inbox type HTTP or SMTP |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/index.ts:188](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L188)

___

### createInboxWithOptions

▸ **createInboxWithOptions**(`createInboxOptions`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Create an inbox using CreateInboxDto options. More convenient that `createInbox` in some cases.

#### Parameters

| Name | Type |
| :------ | :------ |
| `createInboxOptions` | [`CreateInboxDto`](../interfaces/CreateInboxDto.md) |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/index.ts:220](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L220)

___

### deleteEmail

▸ **deleteEmail**(`emailId`): `Promise`<`Response`\>

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

**`summary`** Delete an email

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/index.ts:410](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L410)

___

### deleteInbox

▸ **deleteInbox**(`inboxId`): `Promise`<`Response`\>

Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

**`summary`** Delete inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/index.ts:233](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L233)

___

### downloadAttachment

▸ **downloadAttachment**(`emailId`, `attachmentId`): `Promise`<`String`\>

Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Get email attachment bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |
| `attachmentId` | `string` | attachmentId |

#### Returns

`Promise`<`String`\>

#### Defined in

[src/index.ts:514](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L514)

___

### emptyInbox

▸ **emptyInbox**(`inboxId`): `Promise`<`Response`\>

Deletes all emails

**`summary`** Delete all emails in an inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/index.ts:244](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L244)

___

### getAllEmails

▸ **getAllEmails**(`page?`, `size?`, `inboxId?`, `sort?`, `unreadOnly?`, `searchFilter?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`summary`** Get all emails

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page?` | `number` | - |
| `size?` | `number` | - |
| `inboxId?` | `string`[] | - |
| `sort?` | `SortEnum` | - |
| `unreadOnly?` | `boolean` | - |
| `searchFilter?` | `string` | Optional search filter |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

#### Defined in

[src/index.ts:426](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L426)

___

### getAllInboxes

▸ **getAllInboxes**(`page?`, `size?`, `favourite?`, `search?`, `sort?`, `tag?`): `Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.

**`summary`** List Inboxes Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `size?` | `number` |
| `favourite?` | `boolean` |
| `search?` | `string` |
| `sort?` | `SortEnum` |
| `tag?` | `string` |

#### Returns

`Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

#### Defined in

[src/index.ts:279](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L279)

___

### getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`, `emailId`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**`summary`** Get email attachment metadata

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | attachmentId |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

#### Defined in

[src/index.ts:547](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L547)

___

### getEmail

▸ **getEmail**(`emailId`): `Promise`<[`Email`](../interfaces/Email.md)\>

Returns an EmailDto object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

**`summary`** Get email content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/index.ts:476](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L476)

___

### getEmails

▸ **getEmails**(`inboxId`, `args?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`summary`** Get emails in an Inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | Id of inbox that emails belongs to |
| `args` | [`GetMessagesOptions`](../README.md#getmessagesoptions) | - |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

#### Defined in

[src/index.ts:452](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L452)

___

### getInbox

▸ **getInbox**(`inboxId`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Returns an inbox's properties, including its email address and ID.

**`summary`** Get Inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/index.ts:255](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L255)

___

### getInboxes

▸ **getInboxes**(): `Promise`<[`Inbox`](../interfaces/Inbox.md)[]\>

List the inboxes you have created

**`summary`** List Inboxes / Email Addresses

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)[]\>

#### Defined in

[src/index.ts:265](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L265)

___

### getRawEmail

▸ **getRawEmail**(`emailId`): `Promise`<`string`\>

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

**`summary`** Get raw email string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/index.ts:487](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L487)

___

### sendEmail

▸ **sendEmail**(`inboxId`, `sendEmailOptions`): `Promise`<`Response`\>

Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.

**`summary`** Send Email

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | ID of the inbox you want to send the email from |
| `sendEmailOptions` | [`SendEmailOptions`](../interfaces/SendEmailOptions.md) | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/index.ts:499](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L499)

___

### uploadAttachment

▸ **uploadAttachment**(`options`): `Promise`<`String`[]\>

Upload an attachment for use in email sending. Attachment contents must be a base64 encoded string.
When sending emails with attachments first upload each attachment with this endpoint.
Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email.
This means that attachments can easily be reused.

**`summary`** Upload an attachment for sending

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadAttachmentOptions`](../interfaces/UploadAttachmentOptions.md) |

#### Returns

`Promise`<`String`[]\>

#### Defined in

[src/index.ts:531](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L531)

___

### waitForEmailCount

▸ **waitForEmailCount**(`count?`, `inboxId?`, `timeout?`, `unreadOnly?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`summary`** Wait for and return count number of emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `count?` | `number` |
| `inboxId?` | `string` |
| `timeout?` | `number` |
| `unreadOnly?` | `boolean` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

#### Defined in

[src/index.ts:386](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L386)

___

### waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`, `timeout?`, `unreadOnly?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.

**`summary`** Fetch inbox's latest email or if empty wait for an email to arrive

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |
| `timeout?` | `number` |
| `unreadOnly?` | `boolean` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/index.ts:307](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L307)

___

### waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`, `count?`, `inboxId?`, `timeout?`, `unreadOnly?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.

**`summary`** Wait or return list of emails that match simple matching patterns

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchOptions` | [`MatchOptions`](../interfaces/MatchOptions.md) | matchOptions |
| `count?` | `number` | - |
| `inboxId?` | `string` | - |
| `timeout?` | `number` | - |
| `unreadOnly?` | `boolean` | - |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

#### Defined in

[src/index.ts:358](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L358)

___

### waitForNthEmail

▸ **waitForNthEmail**(`inboxId`, `index`, `timeout?`, `unreadOnly?`): `Promise`<[`Email`](../interfaces/Email.md)\>

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`summary`** Wait for or fetch the email with a given index in the inbox specified

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId` | `string` |
| `index` | `number` |
| `timeout?` | `number` |
| `unreadOnly?` | `boolean` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/index.ts:331](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/index.ts#L331)

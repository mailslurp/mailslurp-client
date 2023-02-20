[MailSlurp JS](../README.md) / MailSlurp

# Class: MailSlurp

The official MailSlurp Javascript library. A wrapper around the [MailSlurp REST API](https://docs.mailslurp.com/api/docs/Apis/).

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
Common controllers include the [InboxController](https://mailslurp.github.io/mailslurp-client/classes/InboxControllerApi.html), [EmailController](https://mailslurp.github.io/mailslurp-client/classes/EmailControllerApi.html), [SMSController](https://mailslurp.github.io/mailslurp-client/classes/SmsControllerApi.html) and the [WaitForController](https://mailslurp.github.io/mailslurp-client/classes/WaitForControllerApi.html) for receiving emails.

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
- [emailVerificationController](MailSlurp.md#emailverificationcontroller)
- [formController](MailSlurp.md#formcontroller)
- [groupController](MailSlurp.md#groupcontroller)
- [inboxController](MailSlurp.md#inboxcontroller)
- [inboxForwarderController](MailSlurp.md#inboxforwardercontroller)
- [inboxRulesetController](MailSlurp.md#inboxrulesetcontroller)
- [mailServerController](MailSlurp.md#mailservercontroller)
- [missedEmailController](MailSlurp.md#missedemailcontroller)
- [phoneController](MailSlurp.md#phonecontroller)
- [sentController](MailSlurp.md#sentcontroller)
- [smsController](MailSlurp.md#smscontroller)
- [templateController](MailSlurp.md#templatecontroller)
- [trackingController](MailSlurp.md#trackingcontroller)
- [userController](MailSlurp.md#usercontroller)
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
- [getImapSmtpAccessDetails](MailSlurp.md#getimapsmtpaccessdetails)
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

## Properties

### aliasController

• `Readonly` **aliasController**: [`AliasControllerApi`](AliasControllerApi.md)

___

### attachmentController

• `Readonly` **attachmentController**: [`AttachmentControllerApi`](AttachmentControllerApi.md)

___

### bounceController

• `Readonly` **bounceController**: [`BounceControllerApi`](BounceControllerApi.md)

___

### bulkController

• `Readonly` **bulkController**: [`BulkActionsControllerApi`](BulkActionsControllerApi.md)

___

### commonController

• `Readonly` **commonController**: [`CommonActionsControllerApi`](CommonActionsControllerApi.md)

___

### contactController

• `Readonly` **contactController**: [`ContactControllerApi`](ContactControllerApi.md)

___

### domainController

• `Readonly` **domainController**: [`DomainControllerApi`](DomainControllerApi.md)

___

### emailController

• `Readonly` **emailController**: [`EmailControllerApi`](EmailControllerApi.md)

___

### emailVerificationController

• `Readonly` **emailVerificationController**: [`EmailVerificationControllerApi`](EmailVerificationControllerApi.md)

___

### formController

• `Readonly` **formController**: [`FormControllerApi`](FormControllerApi.md)

___

### groupController

• `Readonly` **groupController**: [`GroupControllerApi`](GroupControllerApi.md)

___

### inboxController

• `Readonly` **inboxController**: [`InboxControllerApi`](InboxControllerApi.md)

___

### inboxForwarderController

• `Readonly` **inboxForwarderController**: [`InboxForwarderControllerApi`](InboxForwarderControllerApi.md)

___

### inboxRulesetController

• `Readonly` **inboxRulesetController**: [`InboxRulesetControllerApi`](InboxRulesetControllerApi.md)

___

### mailServerController

• `Readonly` **mailServerController**: [`MailServerControllerApi`](MailServerControllerApi.md)

___

### missedEmailController

• `Readonly` **missedEmailController**: [`MissedEmailControllerApi`](MissedEmailControllerApi.md)

___

### phoneController

• `Readonly` **phoneController**: [`PhoneControllerApi`](PhoneControllerApi.md)

___

### sentController

• `Readonly` **sentController**: [`SentEmailsControllerApi`](SentEmailsControllerApi.md)

___

### smsController

• `Readonly` **smsController**: [`SmsControllerApi`](SmsControllerApi.md)

___

### templateController

• `Readonly` **templateController**: [`TemplateControllerApi`](TemplateControllerApi.md)

___

### trackingController

• `Readonly` **trackingController**: [`TrackingControllerApi`](TrackingControllerApi.md)

___

### userController

• `Readonly` **userController**: [`UserControllerApi`](UserControllerApi.md)

___

### waitController

• `Readonly` **waitController**: [`WaitForControllerApi`](WaitForControllerApi.md)

___

### webhookController

• `Readonly` **webhookController**: [`WebhookControllerApi`](WebhookControllerApi.md)

## Methods

### createInbox

▸ **createInbox**(`emailAddress?`, `name?`, `description?`, `expiresAt?`, `favourite?`, `tags?`, `teamAccess?`, `expiresIn?`, `useDomainPool?`, `inboxType?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`Summary`**

Create an Inbox (email address)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailAddress?` | `string` | Optional email address including domain you wish inbox to use (eg: test123@mydomain.com). Only supports domains that you have registered and verified with MailSlurp using dashboard or &#x60;createDomain&#x60; method. |
| `name?` | `string` | Optional name for an inbox. |
| `description?` | `string` | Optional description for an inbox. |
| `expiresAt?` | `Date` | Optional expires at timestamp. If your plan supports this feature you can specify when an inbox should expire. If left empty inbox will exist permanently or expire when your plan dictates |
| `favourite?` | `boolean` | Is inbox favourited. |
| `tags?` | `string`[] | Optional tags for an inbox. Can be used for searching and filtering inboxes. |
| `teamAccess?` | `boolean` | Optional flag to allow team access to inbox. |
| `expiresIn?` | `number` | Optional number of milliseconds to expire inbox after. |
| `useDomainPool?` | `boolean` | Optional flag to use the MailSlurp domain pool for domain endings. |
| `inboxType?` | ``"HTTP_INBOX"`` \| ``"SMTP_INBOX"`` | Optional inbox type HTTP or SMTP |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### createInboxWithOptions

▸ **createInboxWithOptions**(`createInboxOptions`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Create an inbox using CreateInboxDto options. More convenient that `createInbox` in some cases.

#### Parameters

| Name | Type |
| :------ | :------ |
| `createInboxOptions` | [`CreateInboxDto`](../interfaces/CreateInboxDto.md) |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### deleteEmail

▸ **deleteEmail**(`emailId`): `Promise`<`void`\>

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

**`Summary`**

Delete an email

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<`void`\>

___

### deleteInbox

▸ **deleteInbox**(`inboxId`): `Promise`<`void`\>

Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

**`Summary`**

Delete inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |

#### Returns

`Promise`<`void`\>

___

### downloadAttachment

▸ **downloadAttachment**(`emailId`, `attachmentId`): `Promise`<`String`\>

Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`Summary`**

Get email attachment bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |
| `attachmentId` | `string` | attachmentId |

#### Returns

`Promise`<`String`\>

___

### emptyInbox

▸ **emptyInbox**(`inboxId`): `Promise`<`void`\>

Deletes all emails

**`Summary`**

Delete all emails in an inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |

#### Returns

`Promise`<`void`\>

___

### getAllEmails

▸ **getAllEmails**(`page?`, `size?`, `inboxId?`, `sort?`, `unreadOnly?`, `searchFilter?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`Summary`**

Get all emails

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page?` | `number` | Optional page index in email list pagination |
| `size?` | `number` | Optional page size in email list pagination |
| `inboxId?` | `string`[] | Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account. |
| `sort?` | `SortEnum` | Optional createdAt sort direction ASC or DESC |
| `unreadOnly?` | `boolean` | Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly |
| `searchFilter?` | `string` | Optional search filter |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

___

### getAllInboxes

▸ **getAllInboxes**(`page?`, `size?`, `favourite?`, `search?`, `sort?`, `tag?`): `Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.

**`Summary`**

List Inboxes Paginated

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page?` | `number` | Optional page index in inbox list pagination |
| `size?` | `number` | Optional page size in inbox list pagination |
| `favourite?` | `boolean` | Optionally filter results for favourites only |
| `search?` | `string` | Optionally filter by search words partial matching ID, tags, name, and email address |
| `sort?` | `SortEnum` | Optional createdAt sort direction ASC or DESC |
| `tag?` | `string` | Optionally filter by tag |

#### Returns

`Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

___

### getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`, `emailId`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**`Summary`**

Get email attachment metadata

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | attachmentId |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

___

### getEmail

▸ **getEmail**(`emailId`): `Promise`<[`Email`](../interfaces/Email.md)\>

Returns an EmailDto object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

**`Summary`**

Get email content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### getEmails

▸ **getEmails**(`inboxId`, `args?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`Summary`**

Get emails in an Inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | Id of inbox that emails belongs to |
| `args` | [`GetMessagesOptions`](../README.md#getmessagesoptions) | - |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### getImapSmtpAccessDetails

▸ **getImapSmtpAccessDetails**(`inboxId?`): `Promise`<[`ImapSmtpAccessDetails`](../interfaces/ImapSmtpAccessDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |

#### Returns

`Promise`<[`ImapSmtpAccessDetails`](../interfaces/ImapSmtpAccessDetails.md)\>

___

### getInbox

▸ **getInbox**(`inboxId`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Returns an inbox's properties, including its email address and ID.

**`Summary`**

Get Inbox

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### getInboxes

▸ **getInboxes**(): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

List the inboxes you have created

**`Summary`**

List Inboxes / Email Addresses

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

___

### getRawEmail

▸ **getRawEmail**(`emailId`): `Promise`<`string`\>

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

**`Summary`**

Get raw email string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |

#### Returns

`Promise`<`string`\>

___

### sendEmail

▸ **sendEmail**(`inboxId`, `sendEmailOptions?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.

**`Summary`**

Send Email

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | ID of the inbox you want to send the email from |
| `sendEmailOptions?` | [`SendEmailOptions`](../interfaces/SendEmailOptions.md) | Options for the email |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### uploadAttachment

▸ **uploadAttachment**(`options`): `Promise`<`String`[]\>

Upload an attachment for use in email sending. Attachment contents must be a base64 encoded string.
When sending emails with attachments first upload each attachment with this endpoint.
Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email.
This means that attachments can easily be reused.

**`Summary`**

Upload an attachment for sending

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadAttachmentOptions`](../interfaces/UploadAttachmentOptions.md) |

#### Returns

`Promise`<`String`[]\>

___

### waitForEmailCount

▸ **waitForEmailCount**(`count?`, `inboxId?`, `timeout?`, `unreadOnly?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`Summary`**

Wait for and return count number of emails

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count?` | `number` | Number of emails to wait for. Must be greater that 1 |
| `inboxId?` | `string` | Id of the inbox we are fetching emails from |
| `timeout?` | `number` | Max milliseconds to wait |
| `unreadOnly?` | `boolean` | Optional filter for unread only |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`, `timeout?`, `unreadOnly?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.

**`Summary`**

Fetch inbox's latest email or if empty wait for an email to arrive

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId?` | `string` | Id of the inbox we are fetching emails from |
| `timeout?` | `number` | Max milliseconds to wait |
| `unreadOnly?` | `boolean` | Optional filter for unread only |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`, `count?`, `inboxId?`, `timeout?`, `unreadOnly?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.

**`Summary`**

Wait or return list of emails that match simple matching patterns

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchOptions` | [`MatchOptions`](../interfaces/MatchOptions.md) | matchOptions |
| `count?` | `number` | Number of emails to wait for. Must be greater that 1 |
| `inboxId?` | `string` | Id of the inbox we are fetching emails from |
| `timeout?` | `number` | Max milliseconds to wait |
| `unreadOnly?` | `boolean` | Optional filter for unread only |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### waitForNthEmail

▸ **waitForNthEmail**(`inboxId?`, `index?`, `timeout?`, `unreadOnly?`): `Promise`<[`Email`](../interfaces/Email.md)\>

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`Summary`**

Wait for or fetch the email with a given index in the inbox specified

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId?` | `string` | Id of the inbox you are fetching emails from |
| `index?` | `number` | Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1 |
| `timeout?` | `number` | Max milliseconds to wait for the nth email if not already present |
| `unreadOnly?` | `boolean` | Optional filter for unread only |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

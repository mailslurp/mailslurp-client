[MailSlurp Client](../README.md) > [MailSlurp](../classes/mailslurp.md)

# Class: MailSlurp

Official MailSlurp Client

Installing `npm install --save mailslurp-client`

Import ES6

```javascript
 import { MailSlurp } from 'mailslurp-client'
```

Require ES5

```javascript
 const MailSlurp = require('mailslurp-client').MailSlurp
```

Configure

```javascript
 const mailslurp = new MailSlurp({ apiKey: "your-api-key" })
 const inbox = await mailslurp.createInbox()
```

**Get an API key at [app.mailslurp.com](https://app.mailslurp.com)**

## Hierarchy

**MailSlurp**

## Index

### Constructors

* [constructor](mailslurp.md#constructor)

### Methods

* [bulkCreateInboxes](mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](mailslurp.md#bulksendemails)
* [createInbox](mailslurp.md#createinbox)
* [createNewEmailAddress](mailslurp.md#createnewemailaddress)
* [createWebhook](mailslurp.md#createwebhook)
* [deleteEmail](mailslurp.md#deleteemail)
* [deleteEmailAddress](mailslurp.md#deleteemailaddress)
* [deleteInbox](mailslurp.md#deleteinbox)
* [deleteWebhook](mailslurp.md#deletewebhook)
* [downloadAttachment](mailslurp.md#downloadattachment)
* [emptyInbox](mailslurp.md#emptyinbox)
* [getEmail](mailslurp.md#getemail)
* [getEmails](mailslurp.md#getemails)
* [getInbox](mailslurp.md#getinbox)
* [getInboxes](mailslurp.md#getinboxes)
* [getRawEmail](mailslurp.md#getrawemail)
* [sendEmail](mailslurp.md#sendemail)
* [sendEmailSimple](mailslurp.md#sendemailsimple)
* [uploadAttachment](mailslurp.md#uploadattachment)
* [waitForEmailCount](mailslurp.md#waitforemailcount)
* [waitForLatestEmail](mailslurp.md#waitforlatestemail)
* [waitForMatchingEmails](mailslurp.md#waitformatchingemails)
* [waitForNthEmail](mailslurp.md#waitfornthemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../#config)*): [MailSlurp](mailslurp.md)

*Defined in [index.ts:102](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [Config](../#config) |

**Returns:** [MailSlurp](mailslurp.md)

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in [index.ts:357](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L357)*

Bulk create inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(inboxIds: *`string`[]*): `Promise`<`Response`>

*Defined in [index.ts:366](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L366)*

Bulk delete inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxIds | `string`[] |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *[BulkSendEmailOptions](../interfaces/bulksendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:346](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L346)*

Bulk send emails

**Parameters:**

| Name | Type |
| ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) |

**Returns:** `Promise`<`Response`>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:253](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L253)*

Create an inbox / email address

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:125](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L125)*

Create a new email address / inbox

*__remarks__*: Returns `id` and `emailAddress` of created inbox.

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *[CreateWebhookOptions](../interfaces/createwebhookoptions.md)*): `Promise`<[Webhook](../interfaces/webhook.md)>

*Defined in [index.ts:375](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L375)*

Create a webhook for notifications

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| createWebhookOptions | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)>

___
<a id="deleteemail"></a>

###  deleteEmail

▸ **deleteEmail**(emailId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:234](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L234)*

Delete an email by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deleteemailaddress"></a>

###  deleteEmailAddress

▸ **deleteEmailAddress**(emailId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:244](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L244)*

Delete an email by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:263](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L263)*

Delete an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deletewebhook"></a>

###  deleteWebhook

▸ **deleteWebhook**(inboxId: *`string`*, webhookId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:389](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L389)*

Create a webhook for notifications for a given inbox

When the inbox receives an email your webhook url will be posted a json object containing the email id

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| webhookId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="downloadattachment"></a>

###  downloadAttachment

▸ **downloadAttachment**(emailId: *`string`*, attachmentId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:400](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L400)*

Get email attachment by id

Returns HTTP response containing byte stream

**Parameters:**

| Name | Type |
| ------ | ------ |
| emailId | `string` |
| attachmentId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="emptyinbox"></a>

###  emptyInbox

▸ **emptyInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:224](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L224)*

Delete all emails in a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:313](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L313)*

Get a full email from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args?: *[GetMessagesOptions](../#getmessagesoptions)*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:293](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L293)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inboxId | `string` | - |  \- |
| `Default value` args | [GetMessagesOptions](../#getmessagesoptions) |  {} |   |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:273](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L273)*

Get an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in [index.ts:282](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L282)*

Get all inboxes

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Defined in [index.ts:323](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L323)*

Get an email's raw contents from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:334](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L334)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |   |

**Returns:** `Promise`<`Response`>

___
<a id="sendemailsimple"></a>

###  sendEmailSimple

▸ **sendEmailSimple**(sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:140](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L140)*

Send an email from a random address

*__remarks__*: To send from a known address first create an inbox and then use the sendEmail endpoints.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |   |

**Returns:** `Promise`<`Response`>

___
<a id="uploadattachment"></a>

###  uploadAttachment

▸ **uploadAttachment**(options: *[UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)*): `Promise`<`Array`<`String`>>

*Defined in [index.ts:414](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L414)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |

**Returns:** `Promise`<`Array`<`String`>>

___
<a id="waitforemailcount"></a>

###  waitForEmailCount

▸ **waitForEmailCount**(count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:210](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L210)*

Wait for and return list of emails with length of given count

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` count | `number` |  \- |
| `Optional` inboxId | `string` |  \- |
| `Optional` timeout | `number` |   |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitforlatestemail"></a>

###  waitForLatestEmail

▸ **waitForLatestEmail**(inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:157](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L157)*

Wait for an email to arrive at an inbox or return first found result

*__remarks__*: Retries the call until at least one email is found or a maximum timeout is exceeded

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` inboxId | `string` |  \- |
| `Optional` timeout | `number` |  max milliseconds to wait |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="waitformatchingemails"></a>

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(matchOptions: *[MatchOptions](../interfaces/matchoptions.md)*, count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:187](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L187)*

Wait until both count and match options are met and return list of emails.

*__remarks__*: Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matchOptions | [MatchOptions](../interfaces/matchoptions.md) |  \- |
| `Optional` count | `number` |  \- |
| `Optional` inboxId | `string` |  \- |
| `Optional` timeout | `number` |  timeout max milliseconds to wait |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitfornthemail"></a>

###  waitForNthEmail

▸ **waitForNthEmail**(inboxId: *`string`*, index: *`number`*, timeout?: *`number`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:166](https://github.com/mailslurp/mailslurp-client-ts-js/blob/d98f0e4/index.ts#L166)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| index | `number` |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___


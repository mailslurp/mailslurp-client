[mailslurp-client](../README.md) > ["index"](../modules/_index_.md) > [MailSlurp](../classes/_index_.mailslurp.md)

# Class: MailSlurp

MailSlurp client Usage: `const api = new MailSlurp({ apiKey: "test" }) const inbox = await api.createInbox()`

## Hierarchy

**MailSlurp**

## Implements

* [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md)

## Index

### Constructors

* [constructor](_index_.mailslurp.md#constructor)

### Properties

* [commonOperationsApi](_index_.mailslurp.md#commonoperationsapi)
* [extraOperationsApi](_index_.mailslurp.md#extraoperationsapi)

### Methods

* [bulkCreateInboxes](_index_.mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](_index_.mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](_index_.mailslurp.md#bulksendemails)
* [createInbox](_index_.mailslurp.md#createinbox)
* [createNewEmailAddress](_index_.mailslurp.md#createnewemailaddress)
* [createWebhook](_index_.mailslurp.md#createwebhook)
* [deleteInbox](_index_.mailslurp.md#deleteinbox)
* [fetchLatestEmail](_index_.mailslurp.md#fetchlatestemail)
* [getEmail](_index_.mailslurp.md#getemail)
* [getEmailAttachment](_index_.mailslurp.md#getemailattachment)
* [getEmails](_index_.mailslurp.md#getemails)
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [getRawEmail](_index_.mailslurp.md#getrawemail)
* [sendEmail](_index_.mailslurp.md#sendemail)
* [sendEmailSimple](_index_.mailslurp.md#sendemailsimple)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../modules/_index_.md#config)*): [MailSlurp](_index_.mailslurp.md)

*Defined in [index.ts:104](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [Config](../modules/_index_.md#config) |

**Returns:** [MailSlurp](_index_.mailslurp.md)

___

## Properties

<a id="commonoperationsapi"></a>

### `<Private>` commonOperationsApi

**● commonOperationsApi**: *`CommonOperationsApi`*

*Defined in [index.ts:103](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L103)*

___
<a id="extraoperationsapi"></a>

### `<Private>` extraOperationsApi

**● extraOperationsApi**: *`ExtraOperationsApi`*

*Defined in [index.ts:104](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L104)*

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*): `Promise`<`Inbox`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[bulkCreateInboxes](../interfaces/_index_.abstractmailslurpclient.md#bulkcreateinboxes)*

*Defined in [index.ts:207](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L207)*

Bulk create inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `Promise`<`Inbox`[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(inboxIds: *`string`[]*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[bulkDeleteInboxes](../interfaces/_index_.abstractmailslurpclient.md#bulkdeleteinboxes)*

*Defined in [index.ts:214](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L214)*

Bulk delete inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxIds | `string`[] |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *`BulkSendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[bulkSendEmails](../interfaces/_index_.abstractmailslurpclient.md#bulksendemails)*

*Defined in [index.ts:200](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L200)*

Bulk send emails

**Parameters:**

| Name | Type |
| ------ | ------ |
| bulkSendEmailOptions | `BulkSendEmailOptions` |

**Returns:** `Promise`<`Response`>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[createInbox](../interfaces/_index_.abstractmailslurpclient.md#createinbox)*

*Defined in [index.ts:136](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L136)*

Create an inbox

**Returns:** `Promise`<`Inbox`>

___
<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[createNewEmailAddress](../interfaces/_index_.abstractmailslurpclient.md#createnewemailaddress)*

*Defined in [index.ts:124](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L124)*

**Returns:** `Promise`<`Inbox`>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *`CreateWebhookOptions`*): `Promise`<`Webhook`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[createWebhook](../interfaces/_index_.abstractmailslurpclient.md#createwebhook)*

*Defined in [index.ts:221](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L221)*

Create a webhook for notifications

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| createWebhookOptions | `CreateWebhookOptions` |

**Returns:** `Promise`<`Webhook`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[deleteInbox](../interfaces/_index_.abstractmailslurpclient.md#deleteinbox)*

*Defined in [index.ts:144](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L144)*

Delete an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="fetchlatestemail"></a>

###  fetchLatestEmail

▸ **fetchLatestEmail**(inboxEmailAddress?: *`string`*, inboxId?: *`string`*): `Promise`<`Email`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[fetchLatestEmail](../interfaces/_index_.abstractmailslurpclient.md#fetchlatestemail)*

*Defined in [index.ts:117](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L117)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` inboxEmailAddress | `string` |
| `Optional` inboxId | `string` |

**Returns:** `Promise`<`Email`>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<`Email`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getEmail](../interfaces/_index_.abstractmailslurpclient.md#getemail)*

*Defined in [index.ts:176](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L176)*

Get a full email from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Email`>

___
<a id="getemailattachment"></a>

###  getEmailAttachment

▸ **getEmailAttachment**(emailId: *`string`*, attachmentId: *`string`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getEmailAttachment](../interfaces/_index_.abstractmailslurpclient.md#getemailattachment)*

*Defined in [index.ts:228](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L228)*

Get email attachment by id

**Parameters:**

| Name | Type |
| ------ | ------ |
| emailId | `string` |
| attachmentId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args?: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getEmails](../interfaces/_index_.abstractmailslurpclient.md#getemails)*

*Defined in [index.ts:168](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L168)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inboxId | `string` | - |  \- |
| `Default value` args | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} |   |

**Returns:** `Promise`<`EmailPreview`[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getInbox](../interfaces/_index_.abstractmailslurpclient.md#getinbox)*

*Defined in [index.ts:152](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L152)*

Get an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Inbox`>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<`Inbox`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getInboxes](../interfaces/_index_.abstractmailslurpclient.md#getinboxes)*

*Defined in [index.ts:159](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L159)*

Get all inboxes

**Returns:** `Promise`<`Inbox`[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getRawEmail](../interfaces/_index_.abstractmailslurpclient.md#getrawemail)*

*Defined in [index.ts:184](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L184)*

Get an email's raw contents from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[sendEmail](../interfaces/_index_.abstractmailslurpclient.md#sendemail)*

*Defined in [index.ts:193](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L193)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | `SendEmailOptions` |   |

**Returns:** `Promise`<`Response`>

___
<a id="sendemailsimple"></a>

###  sendEmailSimple

▸ **sendEmailSimple**(sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[sendEmailSimple](../interfaces/_index_.abstractmailslurpclient.md#sendemailsimple)*

*Defined in [index.ts:128](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9324df4/index.ts#L128)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sendEmailOptions | `SendEmailOptions` |

**Returns:** `Promise`<`Response`>

___


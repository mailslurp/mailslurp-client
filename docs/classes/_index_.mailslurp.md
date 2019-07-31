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

* [bulkApi](_index_.mailslurp.md#bulkapi)
* [emailApi](_index_.mailslurp.md#emailapi)
* [inboxApi](_index_.mailslurp.md#inboxapi)

### Methods

* [bulkCreateInboxes](_index_.mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](_index_.mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](_index_.mailslurp.md#bulksendemails)
* [createInbox](_index_.mailslurp.md#createinbox)
* [deleteInbox](_index_.mailslurp.md#deleteinbox)
* [getEmail](_index_.mailslurp.md#getemail)
* [getEmails](_index_.mailslurp.md#getemails)
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [getRawEmail](_index_.mailslurp.md#getrawemail)
* [sendEmail](_index_.mailslurp.md#sendemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../modules/_index_.md#config)*): [MailSlurp](_index_.mailslurp.md)

*Defined in [index.ts:93](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L93)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [Config](../modules/_index_.md#config) |

**Returns:** [MailSlurp](_index_.mailslurp.md)

___

## Properties

<a id="bulkapi"></a>

### `<Private>` bulkApi

**● bulkApi**: *`BulkApi`*

*Defined in [index.ts:93](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L93)*

___
<a id="emailapi"></a>

### `<Private>` emailApi

**● emailApi**: *`EmailControllerApi`*

*Defined in [index.ts:92](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L92)*

___
<a id="inboxapi"></a>

### `<Private>` inboxApi

**● inboxApi**: *`InboxControllerApi`*

*Defined in [index.ts:91](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L91)*

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*): `Promise`<`Inbox`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[bulkCreateInboxes](../interfaces/_index_.abstractmailslurpclient.md#bulkcreateinboxes)*

*Defined in [index.ts:182](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L182)*

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

*Defined in [index.ts:189](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L189)*

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

*Defined in [index.ts:174](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L174)*

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

*Defined in [index.ts:110](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L110)*

Create an inbox

**Returns:** `Promise`<`Inbox`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[deleteInbox](../interfaces/_index_.abstractmailslurpclient.md#deleteinbox)*

*Defined in [index.ts:118](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L118)*

Delete an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<`Email`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getEmail](../interfaces/_index_.abstractmailslurpclient.md#getemail)*

*Defined in [index.ts:150](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L150)*

Get a full email from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Email`>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args?: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getEmails](../interfaces/_index_.abstractmailslurpclient.md#getemails)*

*Defined in [index.ts:142](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L142)*

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

*Defined in [index.ts:126](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L126)*

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

*Defined in [index.ts:133](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L133)*

Get all inboxes

**Returns:** `Promise`<`Inbox`[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getRawEmail](../interfaces/_index_.abstractmailslurpclient.md#getrawemail)*

*Defined in [index.ts:158](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L158)*

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

*Defined in [index.ts:167](https://github.com/mailslurp/mailslurp-client-ts-js/blob/80cba3d/index.ts#L167)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | `SendEmailOptions` |   |

**Returns:** `Promise`<`Response`>

___


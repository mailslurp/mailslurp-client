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

* [emailApi](_index_.mailslurp.md#emailapi)
* [inboxApi](_index_.mailslurp.md#inboxapi)

### Methods

* [createInbox](_index_.mailslurp.md#createinbox)
* [deleteInbox](_index_.mailslurp.md#deleteinbox)
* [getEmail](_index_.mailslurp.md#getemail)
* [getEmails](_index_.mailslurp.md#getemails)
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [sendEmail](_index_.mailslurp.md#sendemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../modules/_index_.md#config)*): [MailSlurp](_index_.mailslurp.md)

*Defined in [index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [Config](../modules/_index_.md#config) |

**Returns:** [MailSlurp](_index_.mailslurp.md)

___

## Properties

<a id="emailapi"></a>

### `<Private>` emailApi

**● emailApi**: *`EmailControllerApi`*

*Defined in [index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L82)*

___
<a id="inboxapi"></a>

### `<Private>` inboxApi

**● inboxApi**: *`InboxControllerApi`*

*Defined in [index.ts:81](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L81)*

___

## Methods

<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[createInbox](../interfaces/_index_.abstractmailslurpclient.md#createinbox)*

*Defined in [index.ts:98](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L98)*

Create an inbox

**Returns:** `Promise`<`Inbox`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[deleteInbox](../interfaces/_index_.abstractmailslurpclient.md#deleteinbox)*

*Defined in [index.ts:106](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L106)*

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

*Defined in [index.ts:138](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L138)*

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

*Defined in [index.ts:130](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L130)*

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

*Defined in [index.ts:114](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L114)*

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

*Defined in [index.ts:121](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L121)*

Get all inboxes

**Returns:** `Promise`<`Inbox`[]>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[sendEmail](../interfaces/_index_.abstractmailslurpclient.md#sendemail)*

*Defined in [index.ts:147](https://github.com/mailslurp/mailslurp-client-ts-js/blob/bdeb94b/index.ts#L147)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | `SendEmailOptions` |   |

**Returns:** `Promise`<`Response`>

___


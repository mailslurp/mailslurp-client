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
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [getMessage](_index_.mailslurp.md#getmessage)
* [getMessages](_index_.mailslurp.md#getmessages)
* [sendMessage](_index_.mailslurp.md#sendmessage)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../modules/_index_.md#config)*): [MailSlurp](_index_.mailslurp.md)

*Defined in [index.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L57)*

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

*Defined in [index.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L57)*

___
<a id="inboxapi"></a>

### `<Private>` inboxApi

**● inboxApi**: *`InboxControllerApi`*

*Defined in [index.ts:56](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L56)*

___

## Methods

<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[createInbox](../interfaces/_index_.abstractmailslurpclient.md#createinbox)*

*Defined in [index.ts:70](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L70)*

**Returns:** `Promise`<`Inbox`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[deleteInbox](../interfaces/_index_.abstractmailslurpclient.md#deleteinbox)*

*Defined in [index.ts:74](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<`Inbox`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getInbox](../interfaces/_index_.abstractmailslurpclient.md#getinbox)*

*Defined in [index.ts:78](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Inbox`>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<`Inbox`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getInboxes](../interfaces/_index_.abstractmailslurpclient.md#getinboxes)*

*Defined in [index.ts:82](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L82)*

**Returns:** `Promise`<`Inbox`[]>

___
<a id="getmessage"></a>

###  getMessage

▸ **getMessage**(messageId: *`string`*): `Promise`<`Email`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getMessage](../interfaces/_index_.abstractmailslurpclient.md#getmessage)*

*Defined in [index.ts:94](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| messageId | `string` |

**Returns:** `Promise`<`Email`>

___
<a id="getmessages"></a>

###  getMessages

▸ **getMessages**(inboxId: *`string`*, args?: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[getMessages](../interfaces/_index_.abstractmailslurpclient.md#getmessages)*

*Defined in [index.ts:86](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L86)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| inboxId | `string` | - |
| `Default value` args | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} |

**Returns:** `Promise`<`EmailPreview`[]>

___
<a id="sendmessage"></a>

###  sendMessage

▸ **sendMessage**(inboxId: *`string`*, sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Implementation of [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md).[sendMessage](../interfaces/_index_.abstractmailslurpclient.md#sendmessage)*

*Defined in [index.ts:90](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c076dcc/index.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| sendEmailOptions | `SendEmailOptions` |

**Returns:** `Promise`<`Response`>

___


[mailslurp-client](../README.md) > ["index"](../modules/_index_.md) > [MailSlurp](../classes/_index_.mailslurp.md)

# Class: MailSlurp

MailSlurp client Usage: `const api = new MailSlurp({ apiKey: "test" }) const inbox = await api.createInbox()`

## Hierarchy

**MailSlurp**

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

*Defined in [index.ts:41](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L41)*

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

*Defined in [index.ts:41](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L41)*

___
<a id="inboxapi"></a>

### `<Private>` inboxApi

**● inboxApi**: *`InboxControllerApi`*

*Defined in [index.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L40)*

___

## Methods

<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Defined in [index.ts:54](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L54)*

**Returns:** `Promise`<`Inbox`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<`Inbox`>

*Defined in [index.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Inbox`>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<`Inbox`[]>

*Defined in [index.ts:63](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L63)*

**Returns:** `Promise`<`Inbox`[]>

___
<a id="getmessage"></a>

###  getMessage

▸ **getMessage**(messageId: *`string`*): `Promise`<`Email`>

*Defined in [index.ts:72](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| messageId | `string` |

**Returns:** `Promise`<`Email`>

___
<a id="getmessages"></a>

###  getMessages

▸ **getMessages**(inboxId: *`string`*, args?: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Defined in [index.ts:66](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L66)*

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

*Defined in [index.ts:69](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2f4d62e/index.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| sendEmailOptions | `SendEmailOptions` |

**Returns:** `Promise`<`Response`>

___


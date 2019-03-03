[mailslurp-client](../README.md) > ["index"](../modules/_index_.md) > [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md)

# Interface: AbstractMailSlurpClient

## Hierarchy

**AbstractMailSlurpClient**

## Implemented by

* [MailSlurp](../classes/_index_.mailslurp.md)

## Index

### Methods

* [createInbox](_index_.abstractmailslurpclient.md#createinbox)
* [deleteInbox](_index_.abstractmailslurpclient.md#deleteinbox)
* [getInbox](_index_.abstractmailslurpclient.md#getinbox)
* [getInboxes](_index_.abstractmailslurpclient.md#getinboxes)
* [getMessage](_index_.abstractmailslurpclient.md#getmessage)
* [getMessages](_index_.abstractmailslurpclient.md#getmessages)
* [sendMessage](_index_.abstractmailslurpclient.md#sendmessage)

---

## Methods

<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Defined in [index.ts:34](https://github.com/mailslurp/mailslurp-client-ts-js/blob/28333ed/index.ts#L34)*

**Returns:** `Promise`<`Inbox`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/28333ed/index.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<`Inbox`>

*Defined in [index.ts:38](https://github.com/mailslurp/mailslurp-client-ts-js/blob/28333ed/index.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Inbox`>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<`Inbox`[]>

*Defined in [index.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/28333ed/index.ts#L40)*

**Returns:** `Promise`<`Inbox`[]>

___
<a id="getmessage"></a>

###  getMessage

▸ **getMessage**(messageId: *`string`*): `Promise`<`Email`>

*Defined in [index.ts:32](https://github.com/mailslurp/mailslurp-client-ts-js/blob/28333ed/index.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| messageId | `string` |

**Returns:** `Promise`<`Email`>

___
<a id="getmessages"></a>

###  getMessages

▸ **getMessages**(inboxId: *`string`*, args: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Defined in [index.ts:42](https://github.com/mailslurp/mailslurp-client-ts-js/blob/28333ed/index.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| args | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |

**Returns:** `Promise`<`EmailPreview`[]>

___
<a id="sendmessage"></a>

###  sendMessage

▸ **sendMessage**(inboxId: *`string`*, sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Defined in [index.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/28333ed/index.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| sendEmailOptions | `SendEmailOptions` |

**Returns:** `Promise`<`Response`>

___


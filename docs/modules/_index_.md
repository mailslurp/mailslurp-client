[mailslurp-client](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Classes

* [MailSlurp](../classes/_index_.mailslurp.md)

### Interfaces

* [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md)

### Type aliases

* [Config](_index_.md#config)
* [GetMessagesOptions](_index_.md#getmessagesoptions)

### Variables

* [log](_index_.md#log)

### Functions

* [logCall](_index_.md#logcall)

---

## Type aliases

<a id="config"></a>

###  Config

**Ƭ Config**: *`object`*

*Defined in [index.ts:19](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5a34c55/index.ts#L19)*

#### Type declaration

`Optional`  apiKey: `string`

___
<a id="getmessagesoptions"></a>

###  GetMessagesOptions

**Ƭ GetMessagesOptions**: *`object`*

*Defined in [index.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5a34c55/index.ts#L24)*

#### Type declaration

`Optional`  limit: `number`

`Optional`  minCount: `number`

`Optional`  retryTimeout: `number`

`Optional`  since: `Date`

___

## Variables

<a id="log"></a>

### `<Const>` log

**● log**: *`any`* =  debug("mailslurp-client")

*Defined in [index.ts:17](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5a34c55/index.ts#L17)*

___

## Functions

<a id="logcall"></a>

###  logCall

▸ **logCall**<`T`>(tag: *`String`*, fn: *`function`*): `Promise`<`T`>

*Defined in [index.ts:78](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5a34c55/index.ts#L78)*

Helper logging function

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| tag | `String` |  \- |
| fn | `function` |   |

**Returns:** `Promise`<`T`>

___


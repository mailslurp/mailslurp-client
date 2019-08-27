[mailslurp-client](../README.md) > ["index"](../modules/_index_.md)

# External module: "index"

## Index

### Classes

* [MailSlurp](../classes/_index_.mailslurp.md)

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

*Defined in [index.ts:28](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L28)*

MailSlurp config

*__remarks__*: [Obtain your API Key](https://app.mailslurp.com) in your dashboard.

#### Type declaration

`Optional`  apiKey: `string`

___
<a id="getmessagesoptions"></a>

###  GetMessagesOptions

**Ƭ GetMessagesOptions**: *`object`*

*Defined in [index.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L39)*

Options for advanced message fetching

*__remarks__*: For more control over fetching. See also Webhook endpoints

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

*Defined in [index.ts:19](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L19)*

___

## Functions

<a id="logcall"></a>

###  logCall

▸ **logCall**<`T`>(tag: *`String`*, fn: *`function`*): `Promise`<`T`>

*Defined in [index.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L52)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| tag | `String` |
| fn | `function` |

**Returns:** `Promise`<`T`>

___


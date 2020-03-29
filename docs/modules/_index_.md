[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Classes

* [MailSlurp](../classes/_index_.mailslurp.md)

### Type aliases

* [Config](_index_.md#config)
* [GetMessagesOptions](_index_.md#getmessagesoptions)
* [SortEnum](_index_.md#sortenum)

### Functions

* [wrapCall](_index_.md#wrapcall)

## Type aliases

###  Config

Ƭ **Config**: *object*

*Defined in [src/index.ts:34](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L34)*

MailSlurp config

**`remarks`** 
[Obtain your API Key](https://app.mailslurp.com) in your dashboard.

#### Type declaration:

* **apiKey**: *string*

* **attribution**? : *string*

* **basePath**? : *string*

* **fetchApi**? : *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

___

###  GetMessagesOptions

Ƭ **GetMessagesOptions**: *object*

*Defined in [src/index.ts:435](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L435)*

Options for advanced message fetching

**`remarks`** 
For more control over fetching. See also Webhook endpoints

#### Type declaration:

* **limit**? : *number*

* **minCount**? : *number*

* **retryTimeout**? : *number*

* **since**? : *Date*

* **sort**? : *[SortEnum](_index_.md#sortenum)*

___

###  SortEnum

Ƭ **SortEnum**: *"ASC" | "DESC"*

*Defined in [src/index.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L27)*

## Functions

###  wrapCall

▸ **wrapCall**<**T**>(`tag`: String, `fn`: function): *Promise‹T›*

*Defined in [src/index.ts:450](https://github.com/mailslurp/mailslurp-client-ts-js/blob/8d539c1/src/index.ts#L450)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **tag**: *String*

▪ **fn**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

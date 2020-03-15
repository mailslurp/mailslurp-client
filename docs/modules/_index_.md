[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Classes

* [MailSlurp](../classes/_index_.mailslurp.md)

### Type aliases

* [Config](_index_.md#config)
* [GetMessagesOptions](_index_.md#getmessagesoptions)

### Functions

* [wrapCall](_index_.md#wrapcall)

## Type aliases

###  Config

Ƭ **Config**: *object*

*Defined in [index.ts:37](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2946b55/index.ts#L37)*

MailSlurp config

**`remarks`** 
[Obtain your API Key](https://app.mailslurp.com) in your dashboard.

#### Type declaration:

* **apiKey**: *string*

* **attribution**? : *string*

* **basePath**? : *string*

___

###  GetMessagesOptions

Ƭ **GetMessagesOptions**: *object*

*Defined in [index.ts:383](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2946b55/index.ts#L383)*

Options for advanced message fetching

**`remarks`** 
For more control over fetching. See also Webhook endpoints

#### Type declaration:

* **limit**? : *number*

* **minCount**? : *number*

* **retryTimeout**? : *number*

* **since**? : *Date*

* **sort**? : *[GetEmailsSortEnum](../enums/_node_modules_mailslurp_swagger_sdk_ts_dist_apis_inboxcontrollerapi_d_.getemailssortenum.md)*

## Functions

###  wrapCall

▸ **wrapCall**<**T**>(`tag`: String, `fn`: function): *Promise‹T›*

*Defined in [index.ts:398](https://github.com/mailslurp/mailslurp-client-ts-js/blob/2946b55/index.ts#L398)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **tag**: *String*

▪ **fn**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

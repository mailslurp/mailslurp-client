# External module: "index"

## Type aliases

###  Config

Ƭ **Config**: *object*

*Defined in [src/index.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/index.ts#L36)*

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

*Defined in [src/index.ts:485](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/index.ts#L485)*

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

*Defined in [src/index.ts:29](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/index.ts#L29)*

## Functions

###  wrapCall

▸ **wrapCall**<**T**>(`tag`: String, `fn`: function): *Promise‹T›*

*Defined in [src/index.ts:500](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/index.ts#L500)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **tag**: *String*

▪ **fn**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

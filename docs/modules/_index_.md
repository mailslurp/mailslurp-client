# External module: "index"

## Type aliases

###  Config

Ƭ **Config**: *object*

*Defined in [src/index.ts:37](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/index.ts#L37)*

#### Type declaration:

* **apiKey**: *string*

* **attribution**? : *string*

* **basePath**? : *string*

* **fetchApi**? : *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

___

###  GetMessagesOptions

Ƭ **GetMessagesOptions**: *object*

*Defined in [src/index.ts:490](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/index.ts#L490)*

#### Type declaration:

* **limit**? : *number*

* **minCount**? : *number*

* **retryTimeout**? : *number*

* **since**? : *Date*

* **sort**? : *[SortEnum](_index_.md#sortenum)*

___

###  SortEnum

Ƭ **SortEnum**: *"ASC" | "DESC"*

*Defined in [src/index.ts:30](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/index.ts#L30)*

## Functions

###  wrapCall

▸ **wrapCall**<**T**>(`tag`: String, `fn`: function): *Promise‹T›*

*Defined in [src/index.ts:505](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/index.ts#L505)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **tag**: *String*

▪ **fn**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

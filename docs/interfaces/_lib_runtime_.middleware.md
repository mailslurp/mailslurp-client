[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/runtime"](../modules/_lib_runtime_.md) › [Middleware](_lib_runtime_.middleware.md)

# Interface: Middleware

## Hierarchy

* **Middleware**

## Index

### Methods

* [post](_lib_runtime_.middleware.md#optional-post)
* [pre](_lib_runtime_.middleware.md#optional-pre)

## Methods

### `Optional` post

▸ **post**(`context`: [ResponseContext](_lib_runtime_.responsecontext.md)): *Promise‹Response | void›*

*Defined in [src/lib/runtime.ts:319](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L319)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ResponseContext](_lib_runtime_.responsecontext.md) |

**Returns:** *Promise‹Response | void›*

___

### `Optional` pre

▸ **pre**(`context`: [RequestContext](_lib_runtime_.requestcontext.md)): *Promise‹[FetchParams](_lib_runtime_.fetchparams.md) | void›*

*Defined in [src/lib/runtime.ts:318](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestContext](_lib_runtime_.requestcontext.md) |

**Returns:** *Promise‹[FetchParams](_lib_runtime_.fetchparams.md) | void›*

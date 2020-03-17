[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/runtime"](../modules/_lib_runtime_.md) › [BaseAPI](_lib_runtime_.baseapi.md)

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

* **BaseAPI**

  ↳ [AttachmentControllerApi](_lib_apis_attachmentcontrollerapi_.attachmentcontrollerapi.md)

  ↳ [BulkActionsControllerApi](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md)

  ↳ [CommonActionsControllerApi](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md)

  ↳ [ContactControllerApi](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md)

  ↳ [DomainControllerApi](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md)

  ↳ [EmailControllerApi](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md)

  ↳ [GroupControllerApi](_lib_apis_groupcontrollerapi_.groupcontrollerapi.md)

  ↳ [InboxControllerApi](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md)

  ↳ [TemplateControllerApi](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md)

  ↳ [WaitForControllerApi](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md)

  ↳ [WebhookControllerApi](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md)

## Index

### Constructors

* [constructor](_lib_runtime_.baseapi.md#constructor)

### Properties

* [configuration](_lib_runtime_.baseapi.md#protected-configuration)
* [middleware](_lib_runtime_.baseapi.md#private-middleware)

### Methods

* [clone](_lib_runtime_.baseapi.md#private-clone)
* [createFetchParams](_lib_runtime_.baseapi.md#private-createfetchparams)
* [fetchApi](_lib_runtime_.baseapi.md#private-fetchapi)
* [request](_lib_runtime_.baseapi.md#protected-request)
* [withMiddleware](_lib_runtime_.baseapi.md#withmiddleware)
* [withPostMiddleware](_lib_runtime_.baseapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_runtime_.baseapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[BaseAPI](_lib_runtime_.baseapi.md)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[BaseAPI](_lib_runtime_.baseapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

___

### `Private` middleware

• **middleware**: *[Middleware](../interfaces/_lib_runtime_.middleware.md)[]*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

## Methods

### `Private` clone

▸ **clone**<**T**>(`this`: T): *T*

*Defined in [src/lib/runtime.ts:126](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L126)*

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

**Returns:** *T*

___

### `Private` createFetchParams

▸ **createFetchParams**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *object*

*Defined in [src/lib/runtime.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *object*

* **init**(): *object*

  * **body**: *any*

  * **credentials**: *"omit" | "same-origin" | "include"* =  this.configuration.credentials

  * **headers**(): *object*

  * **method**: *"GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS"* =  context.method

* **url**: *string*

___

### `Private` fetchApi

▸ **fetchApi**(`url`: string, `init`: RequestInit): *Promise‹any›*

*Defined in [src/lib/runtime.ts:93](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`init` | RequestInit |

**Returns:** *Promise‹any›*

___

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *Promise‹Response›*

*Defined in [src/lib/runtime.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  withMiddleware

▸ **withMiddleware**<**T**>(`this`: T, ...`middlewares`: [Middleware](../interfaces/_lib_runtime_.middleware.md)[]): *T*

*Defined in [src/lib/runtime.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L30)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...middlewares` | [Middleware](../interfaces/_lib_runtime_.middleware.md)[] |

**Returns:** *T*

___

###  withPostMiddleware

▸ **withPostMiddleware**<**T**>(`this`: T, ...`postMiddlewares`: Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)›): *T*

*Defined in [src/lib/runtime.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L44)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...postMiddlewares` | Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)› |

**Returns:** *T*

___

###  withPreMiddleware

▸ **withPreMiddleware**<**T**>(`this`: T, ...`preMiddlewares`: Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)›): *T*

*Defined in [src/lib/runtime.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L36)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)› |

**Returns:** *T*

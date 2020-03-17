[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/BulkActionsControllerApi"](../modules/_lib_apis_bulkactionscontrollerapi_.md) › [BulkActionsControllerApi](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md)

# Class: BulkActionsControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **BulkActionsControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#protected-configuration)

### Methods

* [bulkCreateInboxes](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#bulkcreateinboxes)
* [bulkCreateInboxesRaw](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#bulkcreateinboxesraw)
* [bulkDeleteInboxes](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#bulkdeleteinboxes)
* [bulkDeleteInboxesRaw](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#bulkdeleteinboxesraw)
* [bulkSendEmails](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#bulksendemails)
* [bulkSendEmailsRaw](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#bulksendemailsraw)
* [request](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#protected-request)
* [withMiddleware](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new BulkActionsControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[BulkActionsControllerApi](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[BulkActionsControllerApi](_lib_apis_bulkactionscontrollerapi_.bulkactionscontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(`requestParameters`: [BulkCreateInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkcreateinboxesrequest.md)): *Promise‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

*Defined in [src/lib/apis/BulkActionsControllerApi.ts:86](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/BulkActionsControllerApi.ts#L86)*

Bulk create Inboxes (email addresses)

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [BulkCreateInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkcreateinboxesrequest.md) |

**Returns:** *Promise‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

___

###  bulkCreateInboxesRaw

▸ **bulkCreateInboxesRaw**(`requestParameters`: [BulkCreateInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkcreateinboxesrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›››*

*Defined in [src/lib/apis/BulkActionsControllerApi.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/BulkActionsControllerApi.ts#L44)*

Bulk create Inboxes (email addresses)

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [BulkCreateInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkcreateinboxesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›››*

___

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`requestParameters`: [BulkDeleteInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkdeleteinboxesrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/BulkActionsControllerApi.ts:135](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/BulkActionsControllerApi.ts#L135)*

Bulk Delete Inboxes

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [BulkDeleteInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkdeleteinboxesrequest.md) |

**Returns:** *Promise‹void›*

___

###  bulkDeleteInboxesRaw

▸ **bulkDeleteInboxesRaw**(`requestParameters`: [BulkDeleteInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkdeleteinboxesrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/BulkActionsControllerApi.ts:96](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/BulkActionsControllerApi.ts#L96)*

Bulk Delete Inboxes

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [BulkDeleteInboxesRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulkdeleteinboxesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  bulkSendEmails

▸ **bulkSendEmails**(`requestParameters`: [BulkSendEmailsRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulksendemailsrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/BulkActionsControllerApi.ts:185](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/BulkActionsControllerApi.ts#L185)*

Bulk Send Emails

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [BulkSendEmailsRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulksendemailsrequest.md) |

**Returns:** *Promise‹void›*

___

###  bulkSendEmailsRaw

▸ **bulkSendEmailsRaw**(`requestParameters`: [BulkSendEmailsRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulksendemailsrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/BulkActionsControllerApi.ts:144](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/BulkActionsControllerApi.ts#L144)*

Bulk Send Emails

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [BulkSendEmailsRequest](../interfaces/_lib_apis_bulkactionscontrollerapi_.bulksendemailsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *Promise‹Response›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[request](_lib_runtime_.baseapi.md#protected-request)*

*Defined in [src/lib/runtime.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  withMiddleware

▸ **withMiddleware**<**T**>(`this`: T, ...`middlewares`: [Middleware](../interfaces/_lib_runtime_.middleware.md)[]): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withMiddleware](_lib_runtime_.baseapi.md#withmiddleware)*

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

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPostMiddleware](_lib_runtime_.baseapi.md#withpostmiddleware)*

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

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPreMiddleware](_lib_runtime_.baseapi.md#withpremiddleware)*

*Defined in [src/lib/runtime.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L36)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)› |

**Returns:** *T*

[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/CommonActionsControllerApi"](../modules/_lib_apis_commonactionscontrollerapi_.md) › [CommonActionsControllerApi](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md)

# Class: CommonActionsControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **CommonActionsControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#protected-configuration)

### Methods

* [createNewEmailAddress](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#createnewemailaddress)
* [createNewEmailAddressRaw](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#createnewemailaddressraw)
* [emptyInbox](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#emptyinbox)
* [emptyInboxRaw](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#emptyinboxraw)
* [request](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#protected-request)
* [sendEmailSimple](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#sendemailsimple)
* [sendEmailSimpleRaw](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#sendemailsimpleraw)
* [withMiddleware](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new CommonActionsControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[CommonActionsControllerApi](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[CommonActionsControllerApi](_lib_apis_commonactionscontrollerapi_.commonactionscontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  createNewEmailAddress

▸ **createNewEmailAddress**(): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

*Defined in [src/lib/apis/CommonActionsControllerApi.ts:68](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/CommonActionsControllerApi.ts#L68)*

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

___

###  createNewEmailAddressRaw

▸ **createNewEmailAddressRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

*Defined in [src/lib/apis/CommonActionsControllerApi.ts:41](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/CommonActionsControllerApi.ts#L41)*

Returns an Inbox with an `id` and an `emailAddress`
Create new random inbox

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

___

###  emptyInbox

▸ **emptyInbox**(`requestParameters`: [EmptyInboxRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.emptyinboxrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/CommonActionsControllerApi.ts:118](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/CommonActionsControllerApi.ts#L118)*

Deletes all emails
Delete all emails in an inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [EmptyInboxRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.emptyinboxrequest.md) |

**Returns:** *Promise‹void›*

___

###  emptyInboxRaw

▸ **emptyInboxRaw**(`requestParameters`: [EmptyInboxRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.emptyinboxrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/CommonActionsControllerApi.ts:77](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/CommonActionsControllerApi.ts#L77)*

Deletes all emails
Delete all emails in an inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [EmptyInboxRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.emptyinboxrequest.md) |

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

###  sendEmailSimple

▸ **sendEmailSimple**(`requestParameters`: [SendEmailSimpleRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.sendemailsimplerequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/CommonActionsControllerApi.ts:166](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/CommonActionsControllerApi.ts#L166)*

To specify an email address first create an inbox and use that with the other send email methods
Send an email from a random email address

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendEmailSimpleRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.sendemailsimplerequest.md) |

**Returns:** *Promise‹void›*

___

###  sendEmailSimpleRaw

▸ **sendEmailSimpleRaw**(`requestParameters`: [SendEmailSimpleRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.sendemailsimplerequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/CommonActionsControllerApi.ts:126](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/CommonActionsControllerApi.ts#L126)*

To specify an email address first create an inbox and use that with the other send email methods
Send an email from a random email address

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendEmailSimpleRequest](../interfaces/_lib_apis_commonactionscontrollerapi_.sendemailsimplerequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

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

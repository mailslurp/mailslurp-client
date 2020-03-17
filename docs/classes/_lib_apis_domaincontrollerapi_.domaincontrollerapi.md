[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/DomainControllerApi"](../modules/_lib_apis_domaincontrollerapi_.md) › [DomainControllerApi](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md)

# Class: DomainControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **DomainControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#protected-configuration)

### Methods

* [createDomain](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#createdomain)
* [createDomainRaw](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#createdomainraw)
* [deleteDomain](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#deletedomain)
* [deleteDomainRaw](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#deletedomainraw)
* [getDomain](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#getdomain)
* [getDomainRaw](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#getdomainraw)
* [getDomains](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#getdomains)
* [getDomainsRaw](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#getdomainsraw)
* [request](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#protected-request)
* [withMiddleware](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new DomainControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[DomainControllerApi](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[DomainControllerApi](_lib_apis_domaincontrollerapi_.domaincontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  createDomain

▸ **createDomain**(`requestParameters`: [CreateDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.createdomainrequest.md)): *Promise‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)›*

*Defined in [src/lib/apis/DomainControllerApi.ts:90](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L90)*

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
Create Domain

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.createdomainrequest.md) |

**Returns:** *Promise‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)›*

___

###  createDomainRaw

▸ **createDomainRaw**(`requestParameters`: [CreateDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.createdomainrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)››*

*Defined in [src/lib/apis/DomainControllerApi.ts:48](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L48)*

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
Create Domain

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.createdomainrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)››*

___

###  deleteDomain

▸ **deleteDomain**(`requestParameters`: [DeleteDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.deletedomainrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/DomainControllerApi.ts:141](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L141)*

Delete a domain. This will disable any existing inboxes that use this domain.
Delete a domain

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.deletedomainrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteDomainRaw

▸ **deleteDomainRaw**(`requestParameters`: [DeleteDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.deletedomainrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/DomainControllerApi.ts:101](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L101)*

Delete a domain. This will disable any existing inboxes that use this domain.
Delete a domain

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.deletedomainrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  getDomain

▸ **getDomain**(`requestParameters`: [GetDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.getdomainrequest.md)): *Promise‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)›*

*Defined in [src/lib/apis/DomainControllerApi.ts:191](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L191)*

Returns domain verification status and tokens for a given domain
Get a domain

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.getdomainrequest.md) |

**Returns:** *Promise‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)›*

___

###  getDomainRaw

▸ **getDomainRaw**(`requestParameters`: [GetDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.getdomainrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)››*

*Defined in [src/lib/apis/DomainControllerApi.ts:149](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L149)*

Returns domain verification status and tokens for a given domain
Get a domain

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetDomainRequest](../interfaces/_lib_apis_domaincontrollerapi_.getdomainrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[DomainDto](../interfaces/_lib_models_domaindto_.domaindto.md)››*

___

###  getDomains

▸ **getDomains**(): *Promise‹Array‹[DomainPreview](../interfaces/_lib_models_domainpreview_.domainpreview.md)››*

*Defined in [src/lib/apis/DomainControllerApi.ts:227](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L227)*

List all custom domains you have created
Get domains

**Returns:** *Promise‹Array‹[DomainPreview](../interfaces/_lib_models_domainpreview_.domainpreview.md)››*

___

###  getDomainsRaw

▸ **getDomainsRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[DomainPreview](../interfaces/_lib_models_domainpreview_.domainpreview.md)›››*

*Defined in [src/lib/apis/DomainControllerApi.ts:200](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/DomainControllerApi.ts#L200)*

List all custom domains you have created
Get domains

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[DomainPreview](../interfaces/_lib_models_domainpreview_.domainpreview.md)›››*

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

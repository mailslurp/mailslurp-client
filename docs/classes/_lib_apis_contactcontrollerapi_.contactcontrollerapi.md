[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/ContactControllerApi"](../modules/_lib_apis_contactcontrollerapi_.md) › [ContactControllerApi](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md)

# Class: ContactControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **ContactControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#protected-configuration)

### Methods

* [createContact](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#createcontact)
* [createContactRaw](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#createcontactraw)
* [deleteContact](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#deletecontact)
* [deleteContactRaw](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#deletecontactraw)
* [getAllContacts](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#getallcontacts)
* [getAllContactsRaw](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#getallcontactsraw)
* [getContact](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#getcontact)
* [getContactRaw](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#getcontactraw)
* [getContacts](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#getcontacts)
* [getContactsRaw](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#getcontactsraw)
* [request](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#protected-request)
* [withMiddleware](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new ContactControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[ContactControllerApi](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[ContactControllerApi](_lib_apis_contactcontrollerapi_.contactcontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  createContact

▸ **createContact**(`requestParameters`: [CreateContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.createcontactrequest.md)): *Promise‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)›*

*Defined in [src/lib/apis/ContactControllerApi.ts:99](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L99)*

Create a contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.createcontactrequest.md) |

**Returns:** *Promise‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)›*

___

###  createContactRaw

▸ **createContactRaw**(`requestParameters`: [CreateContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.createcontactrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)››*

*Defined in [src/lib/apis/ContactControllerApi.ts:56](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L56)*

Create a contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.createcontactrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)››*

___

###  deleteContact

▸ **deleteContact**(`requestParameters`: [DeleteContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.deletecontactrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/ContactControllerApi.ts:148](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L148)*

Delete contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.deletecontactrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteContactRaw

▸ **deleteContactRaw**(`requestParameters`: [DeleteContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.deletecontactrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/ContactControllerApi.ts:109](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L109)*

Delete contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.deletecontactrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  getAllContacts

▸ **getAllContacts**(`requestParameters`: [GetAllContactsRequest](../interfaces/_lib_apis_contactcontrollerapi_.getallcontactsrequest.md)): *Promise‹[PageContactProjection](../interfaces/_lib_models_pagecontactprojection_.pagecontactprojection.md)›*

*Defined in [src/lib/apis/ContactControllerApi.ts:197](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L197)*

Get all contacts

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllContactsRequest](../interfaces/_lib_apis_contactcontrollerapi_.getallcontactsrequest.md) |

**Returns:** *Promise‹[PageContactProjection](../interfaces/_lib_models_pagecontactprojection_.pagecontactprojection.md)›*

___

###  getAllContactsRaw

▸ **getAllContactsRaw**(`requestParameters`: [GetAllContactsRequest](../interfaces/_lib_apis_contactcontrollerapi_.getallcontactsrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageContactProjection](../interfaces/_lib_models_pagecontactprojection_.pagecontactprojection.md)››*

*Defined in [src/lib/apis/ContactControllerApi.ts:157](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L157)*

Get all contacts

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllContactsRequest](../interfaces/_lib_apis_contactcontrollerapi_.getallcontactsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageContactProjection](../interfaces/_lib_models_pagecontactprojection_.pagecontactprojection.md)››*

___

###  getContact

▸ **getContact**(`requestParameters`: [GetContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.getcontactrequest.md)): *Promise‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)›*

*Defined in [src/lib/apis/ContactControllerApi.ts:248](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L248)*

Get contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.getcontactrequest.md) |

**Returns:** *Promise‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)›*

___

###  getContactRaw

▸ **getContactRaw**(`requestParameters`: [GetContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.getcontactrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)››*

*Defined in [src/lib/apis/ContactControllerApi.ts:207](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L207)*

Get contact

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetContactRequest](../interfaces/_lib_apis_contactcontrollerapi_.getcontactrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[ContactDto](../interfaces/_lib_models_contactdto_.contactdto.md)››*

___

###  getContacts

▸ **getContacts**(): *Promise‹Array‹[ContactProjection](../interfaces/_lib_models_contactprojection_.contactprojection.md)››*

*Defined in [src/lib/apis/ContactControllerApi.ts:286](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L286)*

Get all contacts

**Returns:** *Promise‹Array‹[ContactProjection](../interfaces/_lib_models_contactprojection_.contactprojection.md)››*

___

###  getContactsRaw

▸ **getContactsRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[ContactProjection](../interfaces/_lib_models_contactprojection_.contactprojection.md)›››*

*Defined in [src/lib/apis/ContactControllerApi.ts:258](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/ContactControllerApi.ts#L258)*

Get all contacts

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[ContactProjection](../interfaces/_lib_models_contactprojection_.contactprojection.md)›››*

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

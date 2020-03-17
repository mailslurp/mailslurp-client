[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/TemplateControllerApi"](../modules/_lib_apis_templatecontrollerapi_.md) › [TemplateControllerApi](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md)

# Class: TemplateControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **TemplateControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#protected-configuration)

### Methods

* [createTemplate](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#createtemplate)
* [createTemplateRaw](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#createtemplateraw)
* [deleteTemplate](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#deletetemplate)
* [deleteTemplateRaw](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#deletetemplateraw)
* [getAllTemplates](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#getalltemplates)
* [getAllTemplatesRaw](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#getalltemplatesraw)
* [getTemplate](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#gettemplate)
* [getTemplateRaw](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#gettemplateraw)
* [getTemplates](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#gettemplates)
* [getTemplatesRaw](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#gettemplatesraw)
* [request](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#protected-request)
* [withMiddleware](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new TemplateControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[TemplateControllerApi](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[TemplateControllerApi](_lib_apis_templatecontrollerapi_.templatecontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  createTemplate

▸ **createTemplate**(`requestParameters`: [CreateTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.createtemplaterequest.md)): *Promise‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)›*

*Defined in [src/lib/apis/TemplateControllerApi.ts:99](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L99)*

Create a Template

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.createtemplaterequest.md) |

**Returns:** *Promise‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)›*

___

###  createTemplateRaw

▸ **createTemplateRaw**(`requestParameters`: [CreateTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.createtemplaterequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)››*

*Defined in [src/lib/apis/TemplateControllerApi.ts:56](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L56)*

Create a Template

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.createtemplaterequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)››*

___

###  deleteTemplate

▸ **deleteTemplate**(`requestParameters`: [DeleteTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.deletetemplaterequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/TemplateControllerApi.ts:148](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L148)*

Delete Template

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.deletetemplaterequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteTemplateRaw

▸ **deleteTemplateRaw**(`requestParameters`: [DeleteTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.deletetemplaterequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/TemplateControllerApi.ts:109](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L109)*

Delete Template

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.deletetemplaterequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  getAllTemplates

▸ **getAllTemplates**(`requestParameters`: [GetAllTemplatesRequest](../interfaces/_lib_apis_templatecontrollerapi_.getalltemplatesrequest.md)): *Promise‹[PageTemplateProjection](../interfaces/_lib_models_pagetemplateprojection_.pagetemplateprojection.md)›*

*Defined in [src/lib/apis/TemplateControllerApi.ts:197](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L197)*

Get all Templates in paginated format

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllTemplatesRequest](../interfaces/_lib_apis_templatecontrollerapi_.getalltemplatesrequest.md) |

**Returns:** *Promise‹[PageTemplateProjection](../interfaces/_lib_models_pagetemplateprojection_.pagetemplateprojection.md)›*

___

###  getAllTemplatesRaw

▸ **getAllTemplatesRaw**(`requestParameters`: [GetAllTemplatesRequest](../interfaces/_lib_apis_templatecontrollerapi_.getalltemplatesrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageTemplateProjection](../interfaces/_lib_models_pagetemplateprojection_.pagetemplateprojection.md)››*

*Defined in [src/lib/apis/TemplateControllerApi.ts:157](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L157)*

Get all Templates in paginated format

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllTemplatesRequest](../interfaces/_lib_apis_templatecontrollerapi_.getalltemplatesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageTemplateProjection](../interfaces/_lib_models_pagetemplateprojection_.pagetemplateprojection.md)››*

___

###  getTemplate

▸ **getTemplate**(`requestParameters`: [GetTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.gettemplaterequest.md)): *Promise‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)›*

*Defined in [src/lib/apis/TemplateControllerApi.ts:248](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L248)*

Get Template

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.gettemplaterequest.md) |

**Returns:** *Promise‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)›*

___

###  getTemplateRaw

▸ **getTemplateRaw**(`requestParameters`: [GetTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.gettemplaterequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)››*

*Defined in [src/lib/apis/TemplateControllerApi.ts:207](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L207)*

Get Template

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetTemplateRequest](../interfaces/_lib_apis_templatecontrollerapi_.gettemplaterequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[TemplateDto](../interfaces/_lib_models_templatedto_.templatedto.md)››*

___

###  getTemplates

▸ **getTemplates**(): *Promise‹Array‹[TemplateProjection](../interfaces/_lib_models_templateprojection_.templateprojection.md)››*

*Defined in [src/lib/apis/TemplateControllerApi.ts:286](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L286)*

Get all Templates

**Returns:** *Promise‹Array‹[TemplateProjection](../interfaces/_lib_models_templateprojection_.templateprojection.md)››*

___

###  getTemplatesRaw

▸ **getTemplatesRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[TemplateProjection](../interfaces/_lib_models_templateprojection_.templateprojection.md)›››*

*Defined in [src/lib/apis/TemplateControllerApi.ts:258](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/TemplateControllerApi.ts#L258)*

Get all Templates

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[TemplateProjection](../interfaces/_lib_models_templateprojection_.templateprojection.md)›››*

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

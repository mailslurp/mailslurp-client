[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/WebhookControllerApi"](../modules/_lib_apis_webhookcontrollerapi_.md) › [WebhookControllerApi](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md)

# Class: WebhookControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **WebhookControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#protected-configuration)

### Methods

* [createWebhook](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#createwebhook)
* [createWebhookRaw](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#createwebhookraw)
* [deleteWebhook](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#deletewebhook)
* [deleteWebhookRaw](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#deletewebhookraw)
* [getAllWebhooks](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#getallwebhooks)
* [getAllWebhooksRaw](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#getallwebhooksraw)
* [getWebhook](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#getwebhook)
* [getWebhookRaw](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#getwebhookraw)
* [getWebhooks](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#getwebhooks)
* [getWebhooksRaw](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#getwebhooksraw)
* [request](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#protected-request)
* [sendTestData](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#sendtestdata)
* [sendTestDataRaw](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#sendtestdataraw)
* [withMiddleware](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new WebhookControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[WebhookControllerApi](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[WebhookControllerApi](_lib_apis_webhookcontrollerapi_.webhookcontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  createWebhook

▸ **createWebhook**(`requestParameters`: [CreateWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.createwebhookrequest.md)): *Promise‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)›*

*Defined in [src/lib/apis/WebhookControllerApi.ts:122](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L122)*

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
Attach a WebHook URL to an inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.createwebhookrequest.md) |

**Returns:** *Promise‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)›*

___

###  createWebhookRaw

▸ **createWebhookRaw**(`requestParameters`: [CreateWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.createwebhookrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)››*

*Defined in [src/lib/apis/WebhookControllerApi.ts:67](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L67)*

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
Attach a WebHook URL to an inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.createwebhookrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)››*

___

###  deleteWebhook

▸ **deleteWebhook**(`requestParameters`: [DeleteWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.deletewebhookrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/WebhookControllerApi.ts:186](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L186)*

Delete and disable a Webhook for an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.deletewebhookrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteWebhookRaw

▸ **deleteWebhookRaw**(`requestParameters`: [DeleteWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.deletewebhookrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/WebhookControllerApi.ts:132](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L132)*

Delete and disable a Webhook for an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.deletewebhookrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  getAllWebhooks

▸ **getAllWebhooks**(`requestParameters`: [GetAllWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getallwebhooksrequest.md)): *Promise‹[PageWebhookProjection](../interfaces/_lib_models_pagewebhookprojection_.pagewebhookprojection.md)›*

*Defined in [src/lib/apis/WebhookControllerApi.ts:237](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L237)*

List webhooks in paginated form. Allows for page index, page size, and sort direction.
List Webhooks Paginated

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getallwebhooksrequest.md) |

**Returns:** *Promise‹[PageWebhookProjection](../interfaces/_lib_models_pagewebhookprojection_.pagewebhookprojection.md)›*

___

###  getAllWebhooksRaw

▸ **getAllWebhooksRaw**(`requestParameters`: [GetAllWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getallwebhooksrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageWebhookProjection](../interfaces/_lib_models_pagewebhookprojection_.pagewebhookprojection.md)››*

*Defined in [src/lib/apis/WebhookControllerApi.ts:196](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L196)*

List webhooks in paginated form. Allows for page index, page size, and sort direction.
List Webhooks Paginated

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getallwebhooksrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageWebhookProjection](../interfaces/_lib_models_pagewebhookprojection_.pagewebhookprojection.md)››*

___

###  getWebhook

▸ **getWebhook**(`requestParameters`: [GetWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhookrequest.md)): *Promise‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)›*

*Defined in [src/lib/apis/WebhookControllerApi.ts:288](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L288)*

Get a webhook for an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhookrequest.md) |

**Returns:** *Promise‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)›*

___

###  getWebhookRaw

▸ **getWebhookRaw**(`requestParameters`: [GetWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhookrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)››*

*Defined in [src/lib/apis/WebhookControllerApi.ts:247](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L247)*

Get a webhook for an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetWebhookRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhookrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)››*

___

###  getWebhooks

▸ **getWebhooks**(`requestParameters`: [GetWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhooksrequest.md)): *Promise‹Array‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)››*

*Defined in [src/lib/apis/WebhookControllerApi.ts:339](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L339)*

Get all Webhooks for an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhooksrequest.md) |

**Returns:** *Promise‹Array‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)››*

___

###  getWebhooksRaw

▸ **getWebhooksRaw**(`requestParameters`: [GetWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhooksrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)›››*

*Defined in [src/lib/apis/WebhookControllerApi.ts:298](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L298)*

Get all Webhooks for an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetWebhooksRequest](../interfaces/_lib_apis_webhookcontrollerapi_.getwebhooksrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[WebhookDto](../interfaces/_lib_models_webhookdto_.webhookdto.md)›››*

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

###  sendTestData

▸ **sendTestData**(`requestParameters`: [SendTestDataRequest](../interfaces/_lib_apis_webhookcontrollerapi_.sendtestdatarequest.md)): *Promise‹[WebhookTestResult](../interfaces/_lib_models_webhooktestresult_.webhooktestresult.md)›*

*Defined in [src/lib/apis/WebhookControllerApi.ts:390](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L390)*

Send webhook test data

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendTestDataRequest](../interfaces/_lib_apis_webhookcontrollerapi_.sendtestdatarequest.md) |

**Returns:** *Promise‹[WebhookTestResult](../interfaces/_lib_models_webhooktestresult_.webhooktestresult.md)›*

___

###  sendTestDataRaw

▸ **sendTestDataRaw**(`requestParameters`: [SendTestDataRequest](../interfaces/_lib_apis_webhookcontrollerapi_.sendtestdatarequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[WebhookTestResult](../interfaces/_lib_models_webhooktestresult_.webhooktestresult.md)››*

*Defined in [src/lib/apis/WebhookControllerApi.ts:349](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WebhookControllerApi.ts#L349)*

Send webhook test data

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendTestDataRequest](../interfaces/_lib_apis_webhookcontrollerapi_.sendtestdatarequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[WebhookTestResult](../interfaces/_lib_models_webhooktestresult_.webhooktestresult.md)››*

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

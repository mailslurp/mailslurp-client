[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [WebhookControllerApi](_generated_api_.webhookcontrollerapi.md)

# Class: WebhookControllerApi

WebhookControllerApi - object-oriented interface

**`export`** 

**`class`** WebhookControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **WebhookControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.webhookcontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.webhookcontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.webhookcontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.webhookcontrollerapi.md#protected-fetch)

### Methods

* [createWebhook](_generated_api_.webhookcontrollerapi.md#createwebhook)
* [deleteWebhook](_generated_api_.webhookcontrollerapi.md#deletewebhook)
* [getAllWebhooks](_generated_api_.webhookcontrollerapi.md#getallwebhooks)
* [getWebhook](_generated_api_.webhookcontrollerapi.md#getwebhook)
* [getWebhooks](_generated_api_.webhookcontrollerapi.md#getwebhooks)
* [sendTestData](_generated_api_.webhookcontrollerapi.md#sendtestdata)

## Constructors

###  constructor

\+ **new WebhookControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[WebhookControllerApi](_generated_api_.webhookcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[WebhookControllerApi](_generated_api_.webhookcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L62)*

## Methods

###  createWebhook

▸ **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md), `options?`: any): *Promise‹[WebhookDto](../modules/_generated_api_.webhookdto.md)›*

*Defined in [src/generated/api.ts:12709](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L12709)*

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.

**`summary`** Attach a WebHook URL to an inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookOptions` | [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md) | webhookOptions |
`options?` | any | - |

**Returns:** *Promise‹[WebhookDto](../modules/_generated_api_.webhookdto.md)›*

___

###  deleteWebhook

▸ **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:12730](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L12730)*

**`summary`** Delete and disable a Webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllWebhooks

▸ **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageWebhookProjection](../interfaces/_generated_api_.pagewebhookprojection.md)›*

*Defined in [src/generated/api.ts:12748](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L12748)*

List webhooks in paginated form. Allows for page index, page size, and sort direction.

**`summary`** List Webhooks Paginated

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageWebhookProjection](../interfaces/_generated_api_.pagewebhookprojection.md)›*

___

###  getWebhook

▸ **getWebhook**(`webhookId`: string, `options?`: any): *Promise‹[WebhookDto](../modules/_generated_api_.webhookdto.md)›*

*Defined in [src/generated/api.ts:12770](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L12770)*

**`summary`** Get a webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** *Promise‹[WebhookDto](../modules/_generated_api_.webhookdto.md)›*

___

###  getWebhooks

▸ **getWebhooks**(`inboxId`: string, `options?`: any): *Promise‹[WebhookDto](../modules/_generated_api_.webhookdto.md)[]›*

*Defined in [src/generated/api.ts:12785](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L12785)*

**`summary`** Get all Webhooks for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹[WebhookDto](../modules/_generated_api_.webhookdto.md)[]›*

___

###  sendTestData

▸ **sendTestData**(`webhookId`: string, `options?`: any): *Promise‹[WebhookTestResult](../interfaces/_generated_api_.webhooktestresult.md)›*

*Defined in [src/generated/api.ts:12800](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L12800)*

**`summary`** Send webhook test data

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** *Promise‹[WebhookTestResult](../interfaces/_generated_api_.webhooktestresult.md)›*

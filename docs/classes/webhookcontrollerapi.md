# Class: WebhookControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **WebhookControllerApi**

## Constructors

###  constructor

\+ **new WebhookControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[WebhookControllerApi](webhookcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[WebhookControllerApi](webhookcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

## Methods

###  createWebhook

▸ **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/createwebhookoptions.md), `options?`: any): *Promise‹[WebhookDto](../modules/webhookdto.md)›*

*Defined in [src/generated/api.ts:10264](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10264)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookOptions` | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) | webhookOptions |
`options?` | any | - |

**Returns:** *Promise‹[WebhookDto](../modules/webhookdto.md)›*

___

###  deleteWebhook

▸ **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:10277](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10277)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllWebhooks

▸ **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageWebhookProjection](../interfaces/pagewebhookprojection.md)›*

*Defined in [src/generated/api.ts:10291](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10291)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageWebhookProjection](../interfaces/pagewebhookprojection.md)›*

___

###  getWebhook

▸ **getWebhook**(`webhookId`: string, `options?`: any): *Promise‹[WebhookDto](../modules/webhookdto.md)›*

*Defined in [src/generated/api.ts:10303](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10303)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** *Promise‹[WebhookDto](../modules/webhookdto.md)›*

___

###  getWebhooks

▸ **getWebhooks**(`inboxId`: string, `options?`: any): *Promise‹[WebhookDto](../modules/webhookdto.md)[]›*

*Defined in [src/generated/api.ts:10315](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10315)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹[WebhookDto](../modules/webhookdto.md)[]›*

___

###  sendTestData

▸ **sendTestData**(`webhookId`: string, `options?`: any): *Promise‹[WebhookTestResult](../interfaces/webhooktestresult.md)›*

*Defined in [src/generated/api.ts:10327](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10327)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** *Promise‹[WebhookTestResult](../interfaces/webhooktestresult.md)›*

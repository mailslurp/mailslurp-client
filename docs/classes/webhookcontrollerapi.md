**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookControllerApi

# Class: WebhookControllerApi

WebhookControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **WebhookControllerApi**

## Index

### Constructors

* [constructor](webhookcontrollerapi.md#constructor)

### Properties

* [basePath](webhookcontrollerapi.md#basepath)
* [configuration](webhookcontrollerapi.md#configuration)
* [fetch](webhookcontrollerapi.md#fetch)

### Methods

* [createWebhook](webhookcontrollerapi.md#createwebhook)
* [deleteWebhook](webhookcontrollerapi.md#deletewebhook)
* [getAllWebhooks](webhookcontrollerapi.md#getallwebhooks)
* [getWebhook](webhookcontrollerapi.md#getwebhook)
* [getWebhooks](webhookcontrollerapi.md#getwebhooks)
* [sendTestData](webhookcontrollerapi.md#sendtestdata)

## Constructors

### constructor

\+ **new WebhookControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [WebhookControllerApi](webhookcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [WebhookControllerApi](webhookcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L62)*

## Methods

### createWebhook

▸ **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/createwebhookoptions.md), `options?`: any): Promise\<[WebhookDto](../modules/webhookdto.md)>

*Defined in [src/generated/api.ts:19259](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L19259)*

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.

**`summary`** Attach a WebHook URL to an inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookOptions` | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) | webhookOptions |
`options?` | any | - |

**Returns:** Promise\<[WebhookDto](../modules/webhookdto.md)>

___

### deleteWebhook

▸ **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:19280](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L19280)*

**`summary`** Delete and disable a Webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAllWebhooks

▸ **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageWebhookProjection](../interfaces/pagewebhookprojection.md)>

*Defined in [src/generated/api.ts:19298](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L19298)*

List webhooks in paginated form. Allows for page index, page size, and sort direction.

**`summary`** List Webhooks Paginated

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageWebhookProjection](../interfaces/pagewebhookprojection.md)>

___

### getWebhook

▸ **getWebhook**(`webhookId`: string, `options?`: any): Promise\<[WebhookDto](../modules/webhookdto.md)>

*Defined in [src/generated/api.ts:19320](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L19320)*

**`summary`** Get a webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** Promise\<[WebhookDto](../modules/webhookdto.md)>

___

### getWebhooks

▸ **getWebhooks**(`inboxId`: string, `options?`: any): Promise\<[WebhookDto](../modules/webhookdto.md)[]>

*Defined in [src/generated/api.ts:19335](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L19335)*

**`summary`** Get all Webhooks for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** Promise\<[WebhookDto](../modules/webhookdto.md)[]>

___

### sendTestData

▸ **sendTestData**(`webhookId`: string, `options?`: any): Promise\<[WebhookTestResult](../interfaces/webhooktestresult.md)>

*Defined in [src/generated/api.ts:19350](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L19350)*

**`summary`** Send webhook test data

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** Promise\<[WebhookTestResult](../interfaces/webhooktestresult.md)>

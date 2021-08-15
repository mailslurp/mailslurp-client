[MailSlurp JS](../README.md) / WebhookControllerApi

# Class: WebhookControllerApi

WebhookControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`WebhookControllerApi`**

## Table of contents

### Constructors

- [constructor](WebhookControllerApi.md#constructor)

### Properties

- [basePath](WebhookControllerApi.md#basepath)
- [configuration](WebhookControllerApi.md#configuration)
- [fetch](WebhookControllerApi.md#fetch)

### Methods

- [createWebhook](WebhookControllerApi.md#createwebhook)
- [deleteWebhook](WebhookControllerApi.md#deletewebhook)
- [getAllWebhookResults](WebhookControllerApi.md#getallwebhookresults)
- [getAllWebhooks](WebhookControllerApi.md#getallwebhooks)
- [getInboxWebhooksPaginated](WebhookControllerApi.md#getinboxwebhookspaginated)
- [getTestWebhookPayload](WebhookControllerApi.md#gettestwebhookpayload)
- [getTestWebhookPayloadEmailOpened](WebhookControllerApi.md#gettestwebhookpayloademailopened)
- [getTestWebhookPayloadNewAttachment](WebhookControllerApi.md#gettestwebhookpayloadnewattachment)
- [getTestWebhookPayloadNewContact](WebhookControllerApi.md#gettestwebhookpayloadnewcontact)
- [getTestWebhookPayloadNewEmail](WebhookControllerApi.md#gettestwebhookpayloadnewemail)
- [getWebhook](WebhookControllerApi.md#getwebhook)
- [getWebhookResult](WebhookControllerApi.md#getwebhookresult)
- [getWebhookResults](WebhookControllerApi.md#getwebhookresults)
- [getWebhooks](WebhookControllerApi.md#getwebhooks)
- [sendTestData](WebhookControllerApi.md#sendtestdata)

## Constructors

### constructor

• **new WebhookControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createWebhook

▸ **createWebhook**(`inboxId`, `webhookOptions`, `options?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.

**`summary`** Attach a WebHook URL to an inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `webhookOptions` | [`CreateWebhookOptions`](../interfaces/CreateWebhookOptions.md) | webhookOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

#### Defined in

[src/generated/api.ts:30644](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30644)

___

### deleteWebhook

▸ **deleteWebhook**(`inboxId`, `webhookId`, `options?`): `Promise`<`Response`\>

**`summary`** Delete and disable a Webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `webhookId` | `string` | webhookId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:30665](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30665)

___

### getAllWebhookResults

▸ **getAllWebhookResults**(`page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

**`summary`** Get results for all webhooks

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

#### Defined in

[src/generated/api.ts:30684](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30684)

___

### getAllWebhooks

▸ **getAllWebhooks**(`page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

List webhooks in paginated form. Allows for page index, page size, and sort direction.

**`summary`** List Webhooks Paginated

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

#### Defined in

[src/generated/api.ts:30711](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30711)

___

### getInboxWebhooksPaginated

▸ **getInboxWebhooksPaginated**(`inboxId`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

**`summary`** Get paginated webhooks for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

#### Defined in

[src/generated/api.ts:30739](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30739)

___

### getTestWebhookPayload

▸ **getTestWebhookPayload**(`eventName?`, `options?`): `Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

**`summary`** Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | ``"EMAIL_RECEIVED"`` \| ``"NEW_EMAIL"`` \| ``"NEW_CONTACT"`` \| ``"NEW_ATTACHMENT"`` \| ``"EMAIL_OPENED"`` \| ``"EMAIL_READ"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

#### Defined in

[src/generated/api.ts:30767](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30767)

___

### getTestWebhookPayloadEmailOpened

▸ **getTestWebhookPayloadEmailOpened**(`options?`): `Promise`<[`WebhookEmailOpenedPayload`](../interfaces/WebhookEmailOpenedPayload.md)\>

**`summary`** Get webhook test payload for email opened event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`WebhookEmailOpenedPayload`](../interfaces/WebhookEmailOpenedPayload.md)\>

#### Defined in

[src/generated/api.ts:30790](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30790)

___

### getTestWebhookPayloadNewAttachment

▸ **getTestWebhookPayloadNewAttachment**(`options?`): `Promise`<[`WebhookNewAttachmentPayload`](../interfaces/WebhookNewAttachmentPayload.md)\>

**`summary`** Get webhook test payload for new attachment event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`WebhookNewAttachmentPayload`](../interfaces/WebhookNewAttachmentPayload.md)\>

#### Defined in

[src/generated/api.ts:30803](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30803)

___

### getTestWebhookPayloadNewContact

▸ **getTestWebhookPayloadNewContact**(`options?`): `Promise`<[`WebhookNewContactPayload`](../interfaces/WebhookNewContactPayload.md)\>

**`summary`** Get webhook test payload for new contact event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`WebhookNewContactPayload`](../interfaces/WebhookNewContactPayload.md)\>

#### Defined in

[src/generated/api.ts:30819](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30819)

___

### getTestWebhookPayloadNewEmail

▸ **getTestWebhookPayloadNewEmail**(`options?`): `Promise`<[`WebhookNewEmailPayload`](../interfaces/WebhookNewEmailPayload.md)\>

**`summary`** Get webhook test payload for new email event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`WebhookNewEmailPayload`](../interfaces/WebhookNewEmailPayload.md)\>

#### Defined in

[src/generated/api.ts:30832](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30832)

___

### getWebhook

▸ **getWebhook**(`webhookId`, `options?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

**`summary`** Get a webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | webhookId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

#### Defined in

[src/generated/api.ts:30846](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30846)

___

### getWebhookResult

▸ **getWebhookResult**(`webhookResultId`, `options?`): `Promise`<[`WebhookResultEntity`](../interfaces/WebhookResultEntity.md)\>

**`summary`** Get a webhook result for a webhook

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookResultId` | `string` | Webhook Result ID |
| `options?` | `any` | - |

#### Returns

`Promise`<[`WebhookResultEntity`](../interfaces/WebhookResultEntity.md)\>

#### Defined in

[src/generated/api.ts:30861](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30861)

___

### getWebhookResults

▸ **getWebhookResults**(`webhookId`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

**`summary`** Get a webhook results for a webhook

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | ID of webhook to get results for |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

#### Defined in

[src/generated/api.ts:30880](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30880)

___

### getWebhooks

▸ **getWebhooks**(`inboxId`, `options?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)[]\>

**`summary`** Get all webhooks for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)[]\>

#### Defined in

[src/generated/api.ts:30906](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30906)

___

### sendTestData

▸ **sendTestData**(`webhookId`, `options?`): `Promise`<[`WebhookTestResult`](../interfaces/WebhookTestResult.md)\>

**`summary`** Send webhook test data

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | webhookId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`WebhookTestResult`](../interfaces/WebhookTestResult.md)\>

#### Defined in

[src/generated/api.ts:30921](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L30921)

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
- [getTestWebhookPayloadEmailRead](WebhookControllerApi.md#gettestwebhookpayloademailread)
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

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L57)

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

[src/generated/api.ts:30930](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L30930)

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

[src/generated/api.ts:30951](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L30951)

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

[src/generated/api.ts:30970](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L30970)

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

[src/generated/api.ts:30997](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L30997)

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

[src/generated/api.ts:31025](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31025)

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

[src/generated/api.ts:31053](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31053)

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

[src/generated/api.ts:31076](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31076)

___

### getTestWebhookPayloadEmailRead

▸ **getTestWebhookPayloadEmailRead**(`options?`): `Promise`<[`WebhookEmailReadPayload`](../interfaces/WebhookEmailReadPayload.md)\>

**`summary`** Get webhook test payload for email opened event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`WebhookEmailReadPayload`](../interfaces/WebhookEmailReadPayload.md)\>

#### Defined in

[src/generated/api.ts:31089](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31089)

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

[src/generated/api.ts:31102](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31102)

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

[src/generated/api.ts:31118](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31118)

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

[src/generated/api.ts:31131](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31131)

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

[src/generated/api.ts:31145](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31145)

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

[src/generated/api.ts:31160](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31160)

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

[src/generated/api.ts:31179](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31179)

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

[src/generated/api.ts:31205](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31205)

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

[src/generated/api.ts:31220](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L31220)

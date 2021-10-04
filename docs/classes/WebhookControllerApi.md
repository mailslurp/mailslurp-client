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
- [deleteAllWebhooks](WebhookControllerApi.md#deleteallwebhooks)
- [deleteWebhook](WebhookControllerApi.md#deletewebhook)
- [getAllWebhookResults](WebhookControllerApi.md#getallwebhookresults)
- [getAllWebhooks](WebhookControllerApi.md#getallwebhooks)
- [getInboxWebhooksPaginated](WebhookControllerApi.md#getinboxwebhookspaginated)
- [getJsonSchemaForWebhookPayload](WebhookControllerApi.md#getjsonschemaforwebhookpayload)
- [getTestWebhookPayload](WebhookControllerApi.md#gettestwebhookpayload)
- [getTestWebhookPayloadEmailOpened](WebhookControllerApi.md#gettestwebhookpayloademailopened)
- [getTestWebhookPayloadEmailRead](WebhookControllerApi.md#gettestwebhookpayloademailread)
- [getTestWebhookPayloadForWebhook](WebhookControllerApi.md#gettestwebhookpayloadforwebhook)
- [getTestWebhookPayloadNewAttachment](WebhookControllerApi.md#gettestwebhookpayloadnewattachment)
- [getTestWebhookPayloadNewContact](WebhookControllerApi.md#gettestwebhookpayloadnewcontact)
- [getTestWebhookPayloadNewEmail](WebhookControllerApi.md#gettestwebhookpayloadnewemail)
- [getWebhook](WebhookControllerApi.md#getwebhook)
- [getWebhookResult](WebhookControllerApi.md#getwebhookresult)
- [getWebhookResults](WebhookControllerApi.md#getwebhookresults)
- [getWebhookResultsUnseenErrorCount](WebhookControllerApi.md#getwebhookresultsunseenerrorcount)
- [getWebhooks](WebhookControllerApi.md#getwebhooks)
- [redriveWebhookResult](WebhookControllerApi.md#redrivewebhookresult)
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

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L57)

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

[src/generated/api.ts:33178](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33178)

___

### deleteAllWebhooks

▸ **deleteAllWebhooks**(`options?`): `Promise`<`Response`\>

**`summary`** Delete all webhooks

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:33197](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33197)

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

[src/generated/api.ts:33212](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33212)

___

### getAllWebhookResults

▸ **getAllWebhookResults**(`before?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `unseenOnly?`, `options?`): `Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

**`summary`** Get results for all webhooks

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `unseenOnly?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

#### Defined in

[src/generated/api.ts:33234](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33234)

___

### getAllWebhooks

▸ **getAllWebhooks**(`before?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

List webhooks in paginated form. Allows for page index, page size, and sort direction.

**`summary`** List Webhooks Paginated

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

#### Defined in

[src/generated/api.ts:33269](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33269)

___

### getInboxWebhooksPaginated

▸ **getInboxWebhooksPaginated**(`inboxId`, `before?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

**`summary`** Get paginated webhooks for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `since?` | `Date` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

#### Defined in

[src/generated/api.ts:33303](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33303)

___

### getJsonSchemaForWebhookPayload

▸ **getJsonSchemaForWebhookPayload**(`webhookId`, `options?`): `Promise`<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>

**`summary`** Get JSON Schema definition for webhook payload

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | webhookId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>

#### Defined in

[src/generated/api.ts:33335](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33335)

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

[src/generated/api.ts:33352](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33352)

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

[src/generated/api.ts:33375](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33375)

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

[src/generated/api.ts:33388](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33388)

___

### getTestWebhookPayloadForWebhook

▸ **getTestWebhookPayloadForWebhook**(`webhookId`, `options?`): `Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

**`summary`** Get example payload for webhook

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | webhookId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

#### Defined in

[src/generated/api.ts:33402](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33402)

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

[src/generated/api.ts:33418](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33418)

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

[src/generated/api.ts:33434](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33434)

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

[src/generated/api.ts:33447](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33447)

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

[src/generated/api.ts:33461](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33461)

___

### getWebhookResult

▸ **getWebhookResult**(`webhookResultId`, `options?`): `Promise`<[`WebhookResultDto`](../interfaces/WebhookResultDto.md)\>

**`summary`** Get a webhook result for a webhook

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookResultId` | `string` | Webhook Result ID |
| `options?` | `any` | - |

#### Returns

`Promise`<[`WebhookResultDto`](../interfaces/WebhookResultDto.md)\>

#### Defined in

[src/generated/api.ts:33476](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33476)

___

### getWebhookResults

▸ **getWebhookResults**(`webhookId`, `before?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `unseenOnly?`, `options?`): `Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

**`summary`** Get a webhook results for a webhook

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookId` | `string` | ID of webhook to get results for |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `since?` | `Date` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `unseenOnly?` | `boolean` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

#### Defined in

[src/generated/api.ts:33498](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33498)

___

### getWebhookResultsUnseenErrorCount

▸ **getWebhookResultsUnseenErrorCount**(`inboxId`, `options?`): `Promise`<[`UnseenErrorCountDto`](../interfaces/UnseenErrorCountDto.md)\>

**`summary`** Get count of unseen webhook results with error status

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`UnseenErrorCountDto`](../interfaces/UnseenErrorCountDto.md)\>

#### Defined in

[src/generated/api.ts:33530](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33530)

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

[src/generated/api.ts:33547](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33547)

___

### redriveWebhookResult

▸ **redriveWebhookResult**(`webhookResultId`, `options?`): `Promise`<[`WebhookRedriveResult`](../interfaces/WebhookRedriveResult.md)\>

Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.

**`summary`** Get a webhook result and try to resend the original webhook payload

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhookResultId` | `string` | Webhook Result ID |
| `options?` | `any` | - |

#### Returns

`Promise`<[`WebhookRedriveResult`](../interfaces/WebhookRedriveResult.md)\>

#### Defined in

[src/generated/api.ts:33562](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33562)

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

[src/generated/api.ts:33577](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L33577)

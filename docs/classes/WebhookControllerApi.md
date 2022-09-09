# Class: WebhookControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`WebhookControllerApi`**

## Table of contents

### Constructors

- [constructor](WebhookControllerApi.md#constructor)

### Properties

- [configuration](WebhookControllerApi.md#configuration)

### Methods

- [createAccountWebhook](WebhookControllerApi.md#createaccountwebhook)
- [createAccountWebhookRaw](WebhookControllerApi.md#createaccountwebhookraw)
- [createWebhook](WebhookControllerApi.md#createwebhook)
- [createWebhookForPhoneNumber](WebhookControllerApi.md#createwebhookforphonenumber)
- [createWebhookForPhoneNumberRaw](WebhookControllerApi.md#createwebhookforphonenumberraw)
- [createWebhookRaw](WebhookControllerApi.md#createwebhookraw)
- [deleteAllWebhooks](WebhookControllerApi.md#deleteallwebhooks)
- [deleteAllWebhooksRaw](WebhookControllerApi.md#deleteallwebhooksraw)
- [deleteWebhook](WebhookControllerApi.md#deletewebhook)
- [deleteWebhookById](WebhookControllerApi.md#deletewebhookbyid)
- [deleteWebhookByIdRaw](WebhookControllerApi.md#deletewebhookbyidraw)
- [deleteWebhookRaw](WebhookControllerApi.md#deletewebhookraw)
- [getAllAccountWebhooks](WebhookControllerApi.md#getallaccountwebhooks)
- [getAllAccountWebhooksRaw](WebhookControllerApi.md#getallaccountwebhooksraw)
- [getAllWebhookResults](WebhookControllerApi.md#getallwebhookresults)
- [getAllWebhookResultsRaw](WebhookControllerApi.md#getallwebhookresultsraw)
- [getAllWebhooks](WebhookControllerApi.md#getallwebhooks)
- [getAllWebhooksRaw](WebhookControllerApi.md#getallwebhooksraw)
- [getInboxWebhooksPaginated](WebhookControllerApi.md#getinboxwebhookspaginated)
- [getInboxWebhooksPaginatedRaw](WebhookControllerApi.md#getinboxwebhookspaginatedraw)
- [getJsonSchemaForWebhookEvent](WebhookControllerApi.md#getjsonschemaforwebhookevent)
- [getJsonSchemaForWebhookEventRaw](WebhookControllerApi.md#getjsonschemaforwebhookeventraw)
- [getJsonSchemaForWebhookPayload](WebhookControllerApi.md#getjsonschemaforwebhookpayload)
- [getJsonSchemaForWebhookPayloadRaw](WebhookControllerApi.md#getjsonschemaforwebhookpayloadraw)
- [getPhoneNumberWebhooksPaginated](WebhookControllerApi.md#getphonenumberwebhookspaginated)
- [getPhoneNumberWebhooksPaginatedRaw](WebhookControllerApi.md#getphonenumberwebhookspaginatedraw)
- [getTestWebhookPayload](WebhookControllerApi.md#gettestwebhookpayload)
- [getTestWebhookPayloadBounce](WebhookControllerApi.md#gettestwebhookpayloadbounce)
- [getTestWebhookPayloadBounceRaw](WebhookControllerApi.md#gettestwebhookpayloadbounceraw)
- [getTestWebhookPayloadBounceRecipient](WebhookControllerApi.md#gettestwebhookpayloadbouncerecipient)
- [getTestWebhookPayloadBounceRecipientRaw](WebhookControllerApi.md#gettestwebhookpayloadbouncerecipientraw)
- [getTestWebhookPayloadDeliveryStatus](WebhookControllerApi.md#gettestwebhookpayloaddeliverystatus)
- [getTestWebhookPayloadDeliveryStatusRaw](WebhookControllerApi.md#gettestwebhookpayloaddeliverystatusraw)
- [getTestWebhookPayloadEmailOpened](WebhookControllerApi.md#gettestwebhookpayloademailopened)
- [getTestWebhookPayloadEmailOpenedRaw](WebhookControllerApi.md#gettestwebhookpayloademailopenedraw)
- [getTestWebhookPayloadEmailRead](WebhookControllerApi.md#gettestwebhookpayloademailread)
- [getTestWebhookPayloadEmailReadRaw](WebhookControllerApi.md#gettestwebhookpayloademailreadraw)
- [getTestWebhookPayloadForWebhook](WebhookControllerApi.md#gettestwebhookpayloadforwebhook)
- [getTestWebhookPayloadForWebhookRaw](WebhookControllerApi.md#gettestwebhookpayloadforwebhookraw)
- [getTestWebhookPayloadNewAttachment](WebhookControllerApi.md#gettestwebhookpayloadnewattachment)
- [getTestWebhookPayloadNewAttachmentRaw](WebhookControllerApi.md#gettestwebhookpayloadnewattachmentraw)
- [getTestWebhookPayloadNewContact](WebhookControllerApi.md#gettestwebhookpayloadnewcontact)
- [getTestWebhookPayloadNewContactRaw](WebhookControllerApi.md#gettestwebhookpayloadnewcontactraw)
- [getTestWebhookPayloadNewEmail](WebhookControllerApi.md#gettestwebhookpayloadnewemail)
- [getTestWebhookPayloadNewEmailRaw](WebhookControllerApi.md#gettestwebhookpayloadnewemailraw)
- [getTestWebhookPayloadNewSms](WebhookControllerApi.md#gettestwebhookpayloadnewsms)
- [getTestWebhookPayloadNewSmsRaw](WebhookControllerApi.md#gettestwebhookpayloadnewsmsraw)
- [getTestWebhookPayloadRaw](WebhookControllerApi.md#gettestwebhookpayloadraw)
- [getWebhook](WebhookControllerApi.md#getwebhook)
- [getWebhookRaw](WebhookControllerApi.md#getwebhookraw)
- [getWebhookResult](WebhookControllerApi.md#getwebhookresult)
- [getWebhookResultRaw](WebhookControllerApi.md#getwebhookresultraw)
- [getWebhookResults](WebhookControllerApi.md#getwebhookresults)
- [getWebhookResultsRaw](WebhookControllerApi.md#getwebhookresultsraw)
- [getWebhookResultsUnseenErrorCount](WebhookControllerApi.md#getwebhookresultsunseenerrorcount)
- [getWebhookResultsUnseenErrorCountRaw](WebhookControllerApi.md#getwebhookresultsunseenerrorcountraw)
- [getWebhooks](WebhookControllerApi.md#getwebhooks)
- [getWebhooksRaw](WebhookControllerApi.md#getwebhooksraw)
- [redriveWebhookResult](WebhookControllerApi.md#redrivewebhookresult)
- [redriveWebhookResultRaw](WebhookControllerApi.md#redrivewebhookresultraw)
- [request](WebhookControllerApi.md#request)
- [sendTestData](WebhookControllerApi.md#sendtestdata)
- [sendTestDataRaw](WebhookControllerApi.md#sendtestdataraw)
- [updateWebhookHeaders](WebhookControllerApi.md#updatewebhookheaders)
- [updateWebhookHeadersRaw](WebhookControllerApi.md#updatewebhookheadersraw)
- [verifyWebhookSignature](WebhookControllerApi.md#verifywebhooksignature)
- [verifyWebhookSignatureRaw](WebhookControllerApi.md#verifywebhooksignatureraw)
- [withMiddleware](WebhookControllerApi.md#withmiddleware)
- [withPostMiddleware](WebhookControllerApi.md#withpostmiddleware)
- [withPreMiddleware](WebhookControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new WebhookControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### <a id="createaccountwebhook" name="createaccountwebhook"></a> createAccountWebhook

▸ **createAccountWebhook**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

Get notified of account level events such as bounce and bounce recipient.
Attach a WebHook URL to an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAccountWebhookRequest`](../interfaces/CreateAccountWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

___

### <a id="createaccountwebhookraw" name="createaccountwebhookraw"></a> createAccountWebhookRaw

▸ **createAccountWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

Get notified of account level events such as bounce and bounce recipient.
Attach a WebHook URL to an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateAccountWebhookRequest`](../interfaces/CreateAccountWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

___

### <a id="createwebhook" name="createwebhook"></a> createWebhook

▸ **createWebhook**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
Attach a WebHook URL to an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWebhookRequest`](../interfaces/CreateWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

___

### <a id="createwebhookforphonenumber" name="createwebhookforphonenumber"></a> createWebhookForPhoneNumber

▸ **createWebhookForPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

Get notified whenever a phone number receives an SMS via a WebHook URL.
Attach a WebHook URL to a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWebhookForPhoneNumberRequest`](../interfaces/CreateWebhookForPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

___

### <a id="createwebhookforphonenumberraw" name="createwebhookforphonenumberraw"></a> createWebhookForPhoneNumberRaw

▸ **createWebhookForPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

Get notified whenever a phone number receives an SMS via a WebHook URL.
Attach a WebHook URL to a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWebhookForPhoneNumberRequest`](../interfaces/CreateWebhookForPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

___

### <a id="createwebhookraw" name="createwebhookraw"></a> createWebhookRaw

▸ **createWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
Attach a WebHook URL to an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateWebhookRequest`](../interfaces/CreateWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

___

### <a id="deleteallwebhooks" name="deleteallwebhooks"></a> deleteAllWebhooks

▸ **deleteAllWebhooks**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete all webhooks

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllWebhooksRequest`](../interfaces/DeleteAllWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deleteallwebhooksraw" name="deleteallwebhooksraw"></a> deleteAllWebhooksRaw

▸ **deleteAllWebhooksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all webhooks

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllWebhooksRequest`](../interfaces/DeleteAllWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="deletewebhook" name="deletewebhook"></a> deleteWebhook

▸ **deleteWebhook**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete and disable a Webhook for an Inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteWebhookRequest`](../interfaces/DeleteWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deletewebhookbyid" name="deletewebhookbyid"></a> deleteWebhookById

▸ **deleteWebhookById**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteWebhookByIdRequest`](../interfaces/DeleteWebhookByIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deletewebhookbyidraw" name="deletewebhookbyidraw"></a> deleteWebhookByIdRaw

▸ **deleteWebhookByIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteWebhookByIdRequest`](../interfaces/DeleteWebhookByIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="deletewebhookraw" name="deletewebhookraw"></a> deleteWebhookRaw

▸ **deleteWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete and disable a Webhook for an Inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteWebhookRequest`](../interfaces/DeleteWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="getallaccountwebhooks" name="getallaccountwebhooks"></a> getAllAccountWebhooks

▸ **getAllAccountWebhooks**(`requestParameters`, `initOverrides?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

List account webhooks in paginated form. Allows for page index, page size, and sort direction.
List account webhooks Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllAccountWebhooksRequest`](../interfaces/GetAllAccountWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

___

### <a id="getallaccountwebhooksraw" name="getallaccountwebhooksraw"></a> getAllAccountWebhooksRaw

▸ **getAllAccountWebhooksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

List account webhooks in paginated form. Allows for page index, page size, and sort direction.
List account webhooks Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllAccountWebhooksRequest`](../interfaces/GetAllAccountWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

___

### <a id="getallwebhookresults" name="getallwebhookresults"></a> getAllWebhookResults

▸ **getAllWebhookResults**(`requestParameters`, `initOverrides?`): `Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

Get results for all webhooks

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllWebhookResultsRequest`](../interfaces/GetAllWebhookResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

___

### <a id="getallwebhookresultsraw" name="getallwebhookresultsraw"></a> getAllWebhookResultsRaw

▸ **getAllWebhookResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>\>

Get results for all webhooks

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllWebhookResultsRequest`](../interfaces/GetAllWebhookResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>\>

___

### <a id="getallwebhooks" name="getallwebhooks"></a> getAllWebhooks

▸ **getAllWebhooks**(`requestParameters`, `initOverrides?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

List webhooks in paginated form. Allows for page index, page size, and sort direction.
List Webhooks Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllWebhooksRequest`](../interfaces/GetAllWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

___

### <a id="getallwebhooksraw" name="getallwebhooksraw"></a> getAllWebhooksRaw

▸ **getAllWebhooksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

List webhooks in paginated form. Allows for page index, page size, and sort direction.
List Webhooks Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllWebhooksRequest`](../interfaces/GetAllWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

___

### <a id="getinboxwebhookspaginated" name="getinboxwebhookspaginated"></a> getInboxWebhooksPaginated

▸ **getInboxWebhooksPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

Get paginated webhooks for an Inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxWebhooksPaginatedRequest`](../interfaces/GetInboxWebhooksPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

___

### <a id="getinboxwebhookspaginatedraw" name="getinboxwebhookspaginatedraw"></a> getInboxWebhooksPaginatedRaw

▸ **getInboxWebhooksPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

Get paginated webhooks for an Inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxWebhooksPaginatedRequest`](../interfaces/GetInboxWebhooksPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

___

### <a id="getjsonschemaforwebhookevent" name="getjsonschemaforwebhookevent"></a> getJsonSchemaForWebhookEvent

▸ **getJsonSchemaForWebhookEvent**(`requestParameters`, `initOverrides?`): `Promise`<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>

Get JSON Schema definition for webhook payload by event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonSchemaForWebhookEventRequest`](../interfaces/GetJsonSchemaForWebhookEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>

___

### <a id="getjsonschemaforwebhookeventraw" name="getjsonschemaforwebhookeventraw"></a> getJsonSchemaForWebhookEventRaw

▸ **getJsonSchemaForWebhookEventRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>\>

Get JSON Schema definition for webhook payload by event

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonSchemaForWebhookEventRequest`](../interfaces/GetJsonSchemaForWebhookEventRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>\>

___

### <a id="getjsonschemaforwebhookpayload" name="getjsonschemaforwebhookpayload"></a> getJsonSchemaForWebhookPayload

▸ **getJsonSchemaForWebhookPayload**(`requestParameters`, `initOverrides?`): `Promise`<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>

Get JSON Schema definition for webhook payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonSchemaForWebhookPayloadRequest`](../interfaces/GetJsonSchemaForWebhookPayloadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>

___

### <a id="getjsonschemaforwebhookpayloadraw" name="getjsonschemaforwebhookpayloadraw"></a> getJsonSchemaForWebhookPayloadRaw

▸ **getJsonSchemaForWebhookPayloadRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>\>

Get JSON Schema definition for webhook payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetJsonSchemaForWebhookPayloadRequest`](../interfaces/GetJsonSchemaForWebhookPayloadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`JSONSchemaDto`](../interfaces/JSONSchemaDto.md)\>\>

___

### <a id="getphonenumberwebhookspaginated" name="getphonenumberwebhookspaginated"></a> getPhoneNumberWebhooksPaginated

▸ **getPhoneNumberWebhooksPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

Get paginated webhooks for a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberWebhooksPaginatedRequest`](../interfaces/GetPhoneNumberWebhooksPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>

___

### <a id="getphonenumberwebhookspaginatedraw" name="getphonenumberwebhookspaginatedraw"></a> getPhoneNumberWebhooksPaginatedRaw

▸ **getPhoneNumberWebhooksPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

Get paginated webhooks for a phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetPhoneNumberWebhooksPaginatedRequest`](../interfaces/GetPhoneNumberWebhooksPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookProjection`](../interfaces/PageWebhookProjection.md)\>\>

___

### <a id="gettestwebhookpayload" name="gettestwebhookpayload"></a> getTestWebhookPayload

▸ **getTestWebhookPayload**(`requestParameters`, `initOverrides?`): `Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTestWebhookPayloadRequest`](../interfaces/GetTestWebhookPayloadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

___

### <a id="gettestwebhookpayloadbounce" name="gettestwebhookpayloadbounce"></a> getTestWebhookPayloadBounce

▸ **getTestWebhookPayloadBounce**(`initOverrides?`): `Promise`<[`WebhookBouncePayload`](../interfaces/WebhookBouncePayload.md)\>

Get webhook test payload for bounce

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookBouncePayload`](../interfaces/WebhookBouncePayload.md)\>

___

### <a id="gettestwebhookpayloadbounceraw" name="gettestwebhookpayloadbounceraw"></a> getTestWebhookPayloadBounceRaw

▸ **getTestWebhookPayloadBounceRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookBouncePayload`](../interfaces/WebhookBouncePayload.md)\>\>

Get webhook test payload for bounce

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookBouncePayload`](../interfaces/WebhookBouncePayload.md)\>\>

___

### <a id="gettestwebhookpayloadbouncerecipient" name="gettestwebhookpayloadbouncerecipient"></a> getTestWebhookPayloadBounceRecipient

▸ **getTestWebhookPayloadBounceRecipient**(`initOverrides?`): `Promise`<[`WebhookBounceRecipientPayload`](../interfaces/WebhookBounceRecipientPayload.md)\>

Get webhook test payload for bounce recipient

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookBounceRecipientPayload`](../interfaces/WebhookBounceRecipientPayload.md)\>

___

### <a id="gettestwebhookpayloadbouncerecipientraw" name="gettestwebhookpayloadbouncerecipientraw"></a> getTestWebhookPayloadBounceRecipientRaw

▸ **getTestWebhookPayloadBounceRecipientRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookBounceRecipientPayload`](../interfaces/WebhookBounceRecipientPayload.md)\>\>

Get webhook test payload for bounce recipient

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookBounceRecipientPayload`](../interfaces/WebhookBounceRecipientPayload.md)\>\>

___

### <a id="gettestwebhookpayloaddeliverystatus" name="gettestwebhookpayloaddeliverystatus"></a> getTestWebhookPayloadDeliveryStatus

▸ **getTestWebhookPayloadDeliveryStatus**(`initOverrides?`): `Promise`<[`WebhookDeliveryStatusPayload`](../interfaces/WebhookDeliveryStatusPayload.md)\>

Get webhook test payload for delivery status event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookDeliveryStatusPayload`](../interfaces/WebhookDeliveryStatusPayload.md)\>

___

### <a id="gettestwebhookpayloaddeliverystatusraw" name="gettestwebhookpayloaddeliverystatusraw"></a> getTestWebhookPayloadDeliveryStatusRaw

▸ **getTestWebhookPayloadDeliveryStatusRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDeliveryStatusPayload`](../interfaces/WebhookDeliveryStatusPayload.md)\>\>

Get webhook test payload for delivery status event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDeliveryStatusPayload`](../interfaces/WebhookDeliveryStatusPayload.md)\>\>

___

### <a id="gettestwebhookpayloademailopened" name="gettestwebhookpayloademailopened"></a> getTestWebhookPayloadEmailOpened

▸ **getTestWebhookPayloadEmailOpened**(`initOverrides?`): `Promise`<[`WebhookEmailOpenedPayload`](../interfaces/WebhookEmailOpenedPayload.md)\>

Get webhook test payload for email opened event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookEmailOpenedPayload`](../interfaces/WebhookEmailOpenedPayload.md)\>

___

### <a id="gettestwebhookpayloademailopenedraw" name="gettestwebhookpayloademailopenedraw"></a> getTestWebhookPayloadEmailOpenedRaw

▸ **getTestWebhookPayloadEmailOpenedRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookEmailOpenedPayload`](../interfaces/WebhookEmailOpenedPayload.md)\>\>

Get webhook test payload for email opened event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookEmailOpenedPayload`](../interfaces/WebhookEmailOpenedPayload.md)\>\>

___

### <a id="gettestwebhookpayloademailread" name="gettestwebhookpayloademailread"></a> getTestWebhookPayloadEmailRead

▸ **getTestWebhookPayloadEmailRead**(`initOverrides?`): `Promise`<[`WebhookEmailReadPayload`](../interfaces/WebhookEmailReadPayload.md)\>

Get webhook test payload for email opened event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookEmailReadPayload`](../interfaces/WebhookEmailReadPayload.md)\>

___

### <a id="gettestwebhookpayloademailreadraw" name="gettestwebhookpayloademailreadraw"></a> getTestWebhookPayloadEmailReadRaw

▸ **getTestWebhookPayloadEmailReadRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookEmailReadPayload`](../interfaces/WebhookEmailReadPayload.md)\>\>

Get webhook test payload for email opened event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookEmailReadPayload`](../interfaces/WebhookEmailReadPayload.md)\>\>

___

### <a id="gettestwebhookpayloadforwebhook" name="gettestwebhookpayloadforwebhook"></a> getTestWebhookPayloadForWebhook

▸ **getTestWebhookPayloadForWebhook**(`requestParameters`, `initOverrides?`): `Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

Get example payload for webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTestWebhookPayloadForWebhookRequest`](../interfaces/GetTestWebhookPayloadForWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>

___

### <a id="gettestwebhookpayloadforwebhookraw" name="gettestwebhookpayloadforwebhookraw"></a> getTestWebhookPayloadForWebhookRaw

▸ **getTestWebhookPayloadForWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>\>

Get example payload for webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTestWebhookPayloadForWebhookRequest`](../interfaces/GetTestWebhookPayloadForWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>\>

___

### <a id="gettestwebhookpayloadnewattachment" name="gettestwebhookpayloadnewattachment"></a> getTestWebhookPayloadNewAttachment

▸ **getTestWebhookPayloadNewAttachment**(`initOverrides?`): `Promise`<[`WebhookNewAttachmentPayload`](../interfaces/WebhookNewAttachmentPayload.md)\>

Get webhook test payload for new attachment event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookNewAttachmentPayload`](../interfaces/WebhookNewAttachmentPayload.md)\>

___

### <a id="gettestwebhookpayloadnewattachmentraw" name="gettestwebhookpayloadnewattachmentraw"></a> getTestWebhookPayloadNewAttachmentRaw

▸ **getTestWebhookPayloadNewAttachmentRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewAttachmentPayload`](../interfaces/WebhookNewAttachmentPayload.md)\>\>

Get webhook test payload for new attachment event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewAttachmentPayload`](../interfaces/WebhookNewAttachmentPayload.md)\>\>

___

### <a id="gettestwebhookpayloadnewcontact" name="gettestwebhookpayloadnewcontact"></a> getTestWebhookPayloadNewContact

▸ **getTestWebhookPayloadNewContact**(`initOverrides?`): `Promise`<[`WebhookNewContactPayload`](../interfaces/WebhookNewContactPayload.md)\>

Get webhook test payload for new contact event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookNewContactPayload`](../interfaces/WebhookNewContactPayload.md)\>

___

### <a id="gettestwebhookpayloadnewcontactraw" name="gettestwebhookpayloadnewcontactraw"></a> getTestWebhookPayloadNewContactRaw

▸ **getTestWebhookPayloadNewContactRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewContactPayload`](../interfaces/WebhookNewContactPayload.md)\>\>

Get webhook test payload for new contact event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewContactPayload`](../interfaces/WebhookNewContactPayload.md)\>\>

___

### <a id="gettestwebhookpayloadnewemail" name="gettestwebhookpayloadnewemail"></a> getTestWebhookPayloadNewEmail

▸ **getTestWebhookPayloadNewEmail**(`initOverrides?`): `Promise`<[`WebhookNewEmailPayload`](../interfaces/WebhookNewEmailPayload.md)\>

Get webhook test payload for new email event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookNewEmailPayload`](../interfaces/WebhookNewEmailPayload.md)\>

___

### <a id="gettestwebhookpayloadnewemailraw" name="gettestwebhookpayloadnewemailraw"></a> getTestWebhookPayloadNewEmailRaw

▸ **getTestWebhookPayloadNewEmailRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewEmailPayload`](../interfaces/WebhookNewEmailPayload.md)\>\>

Get webhook test payload for new email event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewEmailPayload`](../interfaces/WebhookNewEmailPayload.md)\>\>

___

### <a id="gettestwebhookpayloadnewsms" name="gettestwebhookpayloadnewsms"></a> getTestWebhookPayloadNewSms

▸ **getTestWebhookPayloadNewSms**(`initOverrides?`): `Promise`<[`WebhookNewSmsPayload`](../interfaces/WebhookNewSmsPayload.md)\>

Get webhook test payload for new sms event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookNewSmsPayload`](../interfaces/WebhookNewSmsPayload.md)\>

___

### <a id="gettestwebhookpayloadnewsmsraw" name="gettestwebhookpayloadnewsmsraw"></a> getTestWebhookPayloadNewSmsRaw

▸ **getTestWebhookPayloadNewSmsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewSmsPayload`](../interfaces/WebhookNewSmsPayload.md)\>\>

Get webhook test payload for new sms event

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookNewSmsPayload`](../interfaces/WebhookNewSmsPayload.md)\>\>

___

### <a id="gettestwebhookpayloadraw" name="gettestwebhookpayloadraw"></a> getTestWebhookPayloadRaw

▸ **getTestWebhookPayloadRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>\>

Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTestWebhookPayloadRequest`](../interfaces/GetTestWebhookPayloadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AbstractWebhookPayload`](../interfaces/AbstractWebhookPayload.md)\>\>

___

### <a id="getwebhook" name="getwebhook"></a> getWebhook

▸ **getWebhook**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

Get a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookRequest`](../interfaces/GetWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

___

### <a id="getwebhookraw" name="getwebhookraw"></a> getWebhookRaw

▸ **getWebhookRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

Get a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookRequest`](../interfaces/GetWebhookRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

___

### <a id="getwebhookresult" name="getwebhookresult"></a> getWebhookResult

▸ **getWebhookResult**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookResultDto`](../interfaces/WebhookResultDto.md)\>

Get a webhook result for a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookResultRequest`](../interfaces/GetWebhookResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookResultDto`](../interfaces/WebhookResultDto.md)\>

___

### <a id="getwebhookresultraw" name="getwebhookresultraw"></a> getWebhookResultRaw

▸ **getWebhookResultRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookResultDto`](../interfaces/WebhookResultDto.md)\>\>

Get a webhook result for a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookResultRequest`](../interfaces/GetWebhookResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookResultDto`](../interfaces/WebhookResultDto.md)\>\>

___

### <a id="getwebhookresults" name="getwebhookresults"></a> getWebhookResults

▸ **getWebhookResults**(`requestParameters`, `initOverrides?`): `Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

Get a webhook results for a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookResultsRequest`](../interfaces/GetWebhookResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>

___

### <a id="getwebhookresultsraw" name="getwebhookresultsraw"></a> getWebhookResultsRaw

▸ **getWebhookResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>\>

Get a webhook results for a webhook

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhookResultsRequest`](../interfaces/GetWebhookResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageWebhookResult`](../interfaces/PageWebhookResult.md)\>\>

___

### <a id="getwebhookresultsunseenerrorcount" name="getwebhookresultsunseenerrorcount"></a> getWebhookResultsUnseenErrorCount

▸ **getWebhookResultsUnseenErrorCount**(`initOverrides?`): `Promise`<[`UnseenErrorCountDto`](../interfaces/UnseenErrorCountDto.md)\>

Get count of unseen webhook results with error status

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UnseenErrorCountDto`](../interfaces/UnseenErrorCountDto.md)\>

___

### <a id="getwebhookresultsunseenerrorcountraw" name="getwebhookresultsunseenerrorcountraw"></a> getWebhookResultsUnseenErrorCountRaw

▸ **getWebhookResultsUnseenErrorCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnseenErrorCountDto`](../interfaces/UnseenErrorCountDto.md)\>\>

Get count of unseen webhook results with error status

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnseenErrorCountDto`](../interfaces/UnseenErrorCountDto.md)\>\>

___

### <a id="getwebhooks" name="getwebhooks"></a> getWebhooks

▸ **getWebhooks**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)[]\>

Get all webhooks for an Inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhooksRequest`](../interfaces/GetWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)[]\>

___

### <a id="getwebhooksraw" name="getwebhooksraw"></a> getWebhooksRaw

▸ **getWebhooksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)[]\>\>

Get all webhooks for an Inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetWebhooksRequest`](../interfaces/GetWebhooksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)[]\>\>

___

### <a id="redrivewebhookresult" name="redrivewebhookresult"></a> redriveWebhookResult

▸ **redriveWebhookResult**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookRedriveResult`](../interfaces/WebhookRedriveResult.md)\>

Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
Get a webhook result and try to resend the original webhook payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RedriveWebhookResultRequest`](../interfaces/RedriveWebhookResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookRedriveResult`](../interfaces/WebhookRedriveResult.md)\>

___

### <a id="redrivewebhookresultraw" name="redrivewebhookresultraw"></a> redriveWebhookResultRaw

▸ **redriveWebhookResultRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookRedriveResult`](../interfaces/WebhookRedriveResult.md)\>\>

Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
Get a webhook result and try to resend the original webhook payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RedriveWebhookResultRequest`](../interfaces/RedriveWebhookResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookRedriveResult`](../interfaces/WebhookRedriveResult.md)\>\>

___

### <a id="request" name="request"></a> request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### <a id="sendtestdata" name="sendtestdata"></a> sendTestData

▸ **sendTestData**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookTestResult`](../interfaces/WebhookTestResult.md)\>

Send webhook test data

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendTestDataRequest`](../interfaces/SendTestDataRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookTestResult`](../interfaces/WebhookTestResult.md)\>

___

### <a id="sendtestdataraw" name="sendtestdataraw"></a> sendTestDataRaw

▸ **sendTestDataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookTestResult`](../interfaces/WebhookTestResult.md)\>\>

Send webhook test data

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendTestDataRequest`](../interfaces/SendTestDataRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookTestResult`](../interfaces/WebhookTestResult.md)\>\>

___

### <a id="updatewebhookheaders" name="updatewebhookheaders"></a> updateWebhookHeaders

▸ **updateWebhookHeaders**(`requestParameters`, `initOverrides?`): `Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

Update a webhook request headers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWebhookHeadersRequest`](../interfaces/UpdateWebhookHeadersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`WebhookDto`](../interfaces/WebhookDto.md)\>

___

### <a id="updatewebhookheadersraw" name="updatewebhookheadersraw"></a> updateWebhookHeadersRaw

▸ **updateWebhookHeadersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

Update a webhook request headers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateWebhookHeadersRequest`](../interfaces/UpdateWebhookHeadersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`WebhookDto`](../interfaces/WebhookDto.md)\>\>

___

### <a id="verifywebhooksignature" name="verifywebhooksignature"></a> verifyWebhookSignature

▸ **verifyWebhookSignature**(`requestParameters`, `initOverrides?`): `Promise`<[`VerifyWebhookSignatureResults`](../interfaces/VerifyWebhookSignatureResults.md)\>

Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
Verify a webhook payload signature

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifyWebhookSignatureRequest`](../interfaces/VerifyWebhookSignatureRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`VerifyWebhookSignatureResults`](../interfaces/VerifyWebhookSignatureResults.md)\>

___

### <a id="verifywebhooksignatureraw" name="verifywebhooksignatureraw"></a> verifyWebhookSignatureRaw

▸ **verifyWebhookSignatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`VerifyWebhookSignatureResults`](../interfaces/VerifyWebhookSignatureResults.md)\>\>

Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
Verify a webhook payload signature

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifyWebhookSignatureRequest`](../interfaces/VerifyWebhookSignatureRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`VerifyWebhookSignatureResults`](../interfaces/VerifyWebhookSignatureResults.md)\>\>

___

### <a id="withmiddleware" name="withmiddleware"></a> withMiddleware

▸ **withMiddleware**<`T`\>(`this`, ...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### <a id="withpostmiddleware" name="withpostmiddleware"></a> withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, ...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### <a id="withpremiddleware" name="withpremiddleware"></a> withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, ...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

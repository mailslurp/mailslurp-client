# Class: BounceControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BounceControllerApi`**

## Table of contents

### Constructors

- [constructor](BounceControllerApi.md#constructor)

### Properties

- [configuration](BounceControllerApi.md#configuration)

### Methods

- [filterBouncedRecipient](BounceControllerApi.md#filterbouncedrecipient)
- [filterBouncedRecipientRaw](BounceControllerApi.md#filterbouncedrecipientraw)
- [getBouncedEmail](BounceControllerApi.md#getbouncedemail)
- [getBouncedEmailRaw](BounceControllerApi.md#getbouncedemailraw)
- [getBouncedEmails](BounceControllerApi.md#getbouncedemails)
- [getBouncedEmailsRaw](BounceControllerApi.md#getbouncedemailsraw)
- [getBouncedRecipient](BounceControllerApi.md#getbouncedrecipient)
- [getBouncedRecipientRaw](BounceControllerApi.md#getbouncedrecipientraw)
- [getBouncedRecipients](BounceControllerApi.md#getbouncedrecipients)
- [getBouncedRecipientsRaw](BounceControllerApi.md#getbouncedrecipientsraw)
- [getComplaints](BounceControllerApi.md#getcomplaints)
- [getComplaintsRaw](BounceControllerApi.md#getcomplaintsraw)
- [getListUnsubscribeRecipients](BounceControllerApi.md#getlistunsubscriberecipients)
- [getListUnsubscribeRecipientsRaw](BounceControllerApi.md#getlistunsubscriberecipientsraw)
- [request](BounceControllerApi.md#request)
- [withMiddleware](BounceControllerApi.md#withmiddleware)
- [withPostMiddleware](BounceControllerApi.md#withpostmiddleware)
- [withPreMiddleware](BounceControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new BounceControllerApi**(`configuration?`)

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

### <a id="filterbouncedrecipient" name="filterbouncedrecipient"></a> filterBouncedRecipient

▸ **filterBouncedRecipient**(`requestParameters`, `initOverrides?`): `Promise`<[`FilterBouncedRecipientsResult`](../interfaces/FilterBouncedRecipientsResult.md)\>

Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
Filter a list of email recipients and remove those who have bounced

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FilterBouncedRecipientRequest`](../interfaces/FilterBouncedRecipientRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FilterBouncedRecipientsResult`](../interfaces/FilterBouncedRecipientsResult.md)\>

___

### <a id="filterbouncedrecipientraw" name="filterbouncedrecipientraw"></a> filterBouncedRecipientRaw

▸ **filterBouncedRecipientRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FilterBouncedRecipientsResult`](../interfaces/FilterBouncedRecipientsResult.md)\>\>

Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
Filter a list of email recipients and remove those who have bounced

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FilterBouncedRecipientRequest`](../interfaces/FilterBouncedRecipientRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FilterBouncedRecipientsResult`](../interfaces/FilterBouncedRecipientsResult.md)\>\>

___

### <a id="getbouncedemail" name="getbouncedemail"></a> getBouncedEmail

▸ **getBouncedEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`BouncedEmailDto`](../interfaces/BouncedEmailDto.md)\>

Bounced emails are email you have sent that were rejected by a recipient
Get a bounced email.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedEmailRequest`](../interfaces/GetBouncedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`BouncedEmailDto`](../interfaces/BouncedEmailDto.md)\>

___

### <a id="getbouncedemailraw" name="getbouncedemailraw"></a> getBouncedEmailRaw

▸ **getBouncedEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BouncedEmailDto`](../interfaces/BouncedEmailDto.md)\>\>

Bounced emails are email you have sent that were rejected by a recipient
Get a bounced email.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedEmailRequest`](../interfaces/GetBouncedEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BouncedEmailDto`](../interfaces/BouncedEmailDto.md)\>\>

___

### <a id="getbouncedemails" name="getbouncedemails"></a> getBouncedEmails

▸ **getBouncedEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageBouncedEmail`](../interfaces/PageBouncedEmail.md)\>

Bounced emails are email you have sent that were rejected by a recipient
Get paginated list of bounced emails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedEmailsRequest`](../interfaces/GetBouncedEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageBouncedEmail`](../interfaces/PageBouncedEmail.md)\>

___

### <a id="getbouncedemailsraw" name="getbouncedemailsraw"></a> getBouncedEmailsRaw

▸ **getBouncedEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageBouncedEmail`](../interfaces/PageBouncedEmail.md)\>\>

Bounced emails are email you have sent that were rejected by a recipient
Get paginated list of bounced emails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedEmailsRequest`](../interfaces/GetBouncedEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageBouncedEmail`](../interfaces/PageBouncedEmail.md)\>\>

___

### <a id="getbouncedrecipient" name="getbouncedrecipient"></a> getBouncedRecipient

▸ **getBouncedRecipient**(`requestParameters`, `initOverrides?`): `Promise`<[`BouncedRecipientDto`](../interfaces/BouncedRecipientDto.md)\>

Bounced emails are email you have sent that were rejected by a recipient
Get a bounced email.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedRecipientRequest`](../interfaces/GetBouncedRecipientRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`BouncedRecipientDto`](../interfaces/BouncedRecipientDto.md)\>

___

### <a id="getbouncedrecipientraw" name="getbouncedrecipientraw"></a> getBouncedRecipientRaw

▸ **getBouncedRecipientRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BouncedRecipientDto`](../interfaces/BouncedRecipientDto.md)\>\>

Bounced emails are email you have sent that were rejected by a recipient
Get a bounced email.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedRecipientRequest`](../interfaces/GetBouncedRecipientRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BouncedRecipientDto`](../interfaces/BouncedRecipientDto.md)\>\>

___

### <a id="getbouncedrecipients" name="getbouncedrecipients"></a> getBouncedRecipients

▸ **getBouncedRecipients**(`requestParameters`, `initOverrides?`): `Promise`<[`PageBouncedRecipients`](../interfaces/PageBouncedRecipients.md)\>

Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
Get paginated list of bounced recipients.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedRecipientsRequest`](../interfaces/GetBouncedRecipientsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageBouncedRecipients`](../interfaces/PageBouncedRecipients.md)\>

___

### <a id="getbouncedrecipientsraw" name="getbouncedrecipientsraw"></a> getBouncedRecipientsRaw

▸ **getBouncedRecipientsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageBouncedRecipients`](../interfaces/PageBouncedRecipients.md)\>\>

Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
Get paginated list of bounced recipients.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetBouncedRecipientsRequest`](../interfaces/GetBouncedRecipientsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageBouncedRecipients`](../interfaces/PageBouncedRecipients.md)\>\>

___

### <a id="getcomplaints" name="getcomplaints"></a> getComplaints

▸ **getComplaints**(`requestParameters`, `initOverrides?`): `Promise`<[`PageComplaint`](../interfaces/PageComplaint.md)\>

SMTP complaints made against your account
Get paginated list of complaints.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetComplaintsRequest`](../interfaces/GetComplaintsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageComplaint`](../interfaces/PageComplaint.md)\>

___

### <a id="getcomplaintsraw" name="getcomplaintsraw"></a> getComplaintsRaw

▸ **getComplaintsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageComplaint`](../interfaces/PageComplaint.md)\>\>

SMTP complaints made against your account
Get paginated list of complaints.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetComplaintsRequest`](../interfaces/GetComplaintsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageComplaint`](../interfaces/PageComplaint.md)\>\>

___

### <a id="getlistunsubscriberecipients" name="getlistunsubscriberecipients"></a> getListUnsubscribeRecipients

▸ **getListUnsubscribeRecipients**(`requestParameters`, `initOverrides?`): `Promise`<[`PageListUnsubscribeRecipients`](../interfaces/PageListUnsubscribeRecipients.md)\>

Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
Get paginated list of unsubscribed recipients.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetListUnsubscribeRecipientsRequest`](../interfaces/GetListUnsubscribeRecipientsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageListUnsubscribeRecipients`](../interfaces/PageListUnsubscribeRecipients.md)\>

___

### <a id="getlistunsubscriberecipientsraw" name="getlistunsubscriberecipientsraw"></a> getListUnsubscribeRecipientsRaw

▸ **getListUnsubscribeRecipientsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageListUnsubscribeRecipients`](../interfaces/PageListUnsubscribeRecipients.md)\>\>

Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
Get paginated list of unsubscribed recipients.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetListUnsubscribeRecipientsRequest`](../interfaces/GetListUnsubscribeRecipientsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageListUnsubscribeRecipients`](../interfaces/PageListUnsubscribeRecipients.md)\>\>

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

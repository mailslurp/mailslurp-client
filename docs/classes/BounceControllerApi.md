[MailSlurp JS](../README.md) / BounceControllerApi

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

- [getBouncedEmail](BounceControllerApi.md#getbouncedemail)
- [getBouncedEmailRaw](BounceControllerApi.md#getbouncedemailraw)
- [getBouncedEmails](BounceControllerApi.md#getbouncedemails)
- [getBouncedEmailsRaw](BounceControllerApi.md#getbouncedemailsraw)
- [getBouncedRecipient](BounceControllerApi.md#getbouncedrecipient)
- [getBouncedRecipientRaw](BounceControllerApi.md#getbouncedrecipientraw)
- [getBouncedRecipients](BounceControllerApi.md#getbouncedrecipients)
- [getBouncedRecipientsRaw](BounceControllerApi.md#getbouncedrecipientsraw)
- [request](BounceControllerApi.md#request)
- [withMiddleware](BounceControllerApi.md#withmiddleware)
- [withPostMiddleware](BounceControllerApi.md#withpostmiddleware)
- [withPreMiddleware](BounceControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new BounceControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### getBouncedEmail

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

### getBouncedEmailRaw

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

### getBouncedEmails

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

### getBouncedEmailsRaw

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

### getBouncedRecipient

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

### getBouncedRecipientRaw

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

### getBouncedRecipients

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

### getBouncedRecipientsRaw

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

### request

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

### withMiddleware

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

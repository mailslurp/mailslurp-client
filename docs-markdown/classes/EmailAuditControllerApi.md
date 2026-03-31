[MailSlurp JS](../README.md) / EmailAuditControllerApi

# Class: EmailAuditControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`EmailAuditControllerApi`**

## Table of contents

### Constructors

- [constructor](EmailAuditControllerApi.md#constructor)

### Properties

- [configuration](EmailAuditControllerApi.md#configuration)

### Methods

- [compareEmailAudits](EmailAuditControllerApi.md#compareemailaudits)
- [compareEmailAuditsRaw](EmailAuditControllerApi.md#compareemailauditsraw)
- [createEmailAudit](EmailAuditControllerApi.md#createemailaudit)
- [createEmailAuditRaw](EmailAuditControllerApi.md#createemailauditraw)
- [deleteEmailAudit](EmailAuditControllerApi.md#deleteemailaudit)
- [deleteEmailAuditRaw](EmailAuditControllerApi.md#deleteemailauditraw)
- [getEmailAudit](EmailAuditControllerApi.md#getemailaudit)
- [getEmailAuditRaw](EmailAuditControllerApi.md#getemailauditraw)
- [getEmailAudits](EmailAuditControllerApi.md#getemailaudits)
- [getEmailAuditsRaw](EmailAuditControllerApi.md#getemailauditsraw)
- [request](EmailAuditControllerApi.md#request)
- [withMiddleware](EmailAuditControllerApi.md#withmiddleware)
- [withPostMiddleware](EmailAuditControllerApi.md#withpostmiddleware)
- [withPreMiddleware](EmailAuditControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new EmailAuditControllerApi**(`configuration?`)

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

### compareEmailAudits

▸ **compareEmailAudits**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailAuditComparisonDto`](../interfaces/EmailAuditComparisonDto.md)\>

Compare two email audits

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CompareEmailAuditsRequest`](../interfaces/CompareEmailAuditsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailAuditComparisonDto`](../interfaces/EmailAuditComparisonDto.md)\>

___

### compareEmailAuditsRaw

▸ **compareEmailAuditsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditComparisonDto`](../interfaces/EmailAuditComparisonDto.md)\>\>

Compare two email audits

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CompareEmailAuditsRequest`](../interfaces/CompareEmailAuditsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditComparisonDto`](../interfaces/EmailAuditComparisonDto.md)\>\>

___

### createEmailAudit

▸ **createEmailAudit**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>

Create email audit

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmailAuditRequest`](../interfaces/CreateEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>

___

### createEmailAuditRaw

▸ **createEmailAuditRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>\>

Create email audit

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateEmailAuditRequest`](../interfaces/CreateEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>\>

___

### deleteEmailAudit

▸ **deleteEmailAudit**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete email audit

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailAuditRequest`](../interfaces/DeleteEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteEmailAuditRaw

▸ **deleteEmailAuditRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete email audit

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailAuditRequest`](../interfaces/DeleteEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getEmailAudit

▸ **getEmailAudit**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>

Get email audit

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailAuditRequest`](../interfaces/GetEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>

___

### getEmailAuditRaw

▸ **getEmailAuditRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>\>

Get email audit

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailAuditRequest`](../interfaces/GetEmailAuditRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)\>\>

___

### getEmailAudits

▸ **getEmailAudits**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)[]\>

List email audits

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailAuditsRequest`](../interfaces/GetEmailAuditsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)[]\>

___

### getEmailAuditsRaw

▸ **getEmailAuditsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)[]\>\>

List email audits

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailAuditsRequest`](../interfaces/GetEmailAuditsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAuditDto`](../interfaces/EmailAuditDto.md)[]\>\>

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

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

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

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

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

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

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

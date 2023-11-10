[MailSlurp JS](../README.md) / ContactControllerApi

# Class: ContactControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ContactControllerApi`**

## Table of contents

### Constructors

- [constructor](ContactControllerApi.md#constructor)

### Properties

- [configuration](ContactControllerApi.md#configuration)

### Methods

- [createContact](ContactControllerApi.md#createcontact)
- [createContactRaw](ContactControllerApi.md#createcontactraw)
- [deleteContact](ContactControllerApi.md#deletecontact)
- [deleteContactRaw](ContactControllerApi.md#deletecontactraw)
- [getAllContacts](ContactControllerApi.md#getallcontacts)
- [getAllContactsRaw](ContactControllerApi.md#getallcontactsraw)
- [getContact](ContactControllerApi.md#getcontact)
- [getContactRaw](ContactControllerApi.md#getcontactraw)
- [getContactVCard](ContactControllerApi.md#getcontactvcard)
- [getContactVCardRaw](ContactControllerApi.md#getcontactvcardraw)
- [getContacts](ContactControllerApi.md#getcontacts)
- [getContactsRaw](ContactControllerApi.md#getcontactsraw)
- [request](ContactControllerApi.md#request)
- [withMiddleware](ContactControllerApi.md#withmiddleware)
- [withPostMiddleware](ContactControllerApi.md#withpostmiddleware)
- [withPreMiddleware](ContactControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new ContactControllerApi**(`configuration?`)

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

### createContact

▸ **createContact**(`requestParameters`, `initOverrides?`): `Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

Create a contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateContactRequest`](../interfaces/CreateContactRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

___

### createContactRaw

▸ **createContactRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ContactDto`](../interfaces/ContactDto.md)\>\>

Create a contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateContactRequest`](../interfaces/CreateContactRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ContactDto`](../interfaces/ContactDto.md)\>\>

___

### deleteContact

▸ **deleteContact**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteContactRequest`](../interfaces/DeleteContactRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteContactRaw

▸ **deleteContactRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteContactRequest`](../interfaces/DeleteContactRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllContacts

▸ **getAllContacts**(`requestParameters`, `initOverrides?`): `Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

Get all contacts

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllContactsRequest`](../interfaces/GetAllContactsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

___

### getAllContactsRaw

▸ **getAllContactsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>\>

Get all contacts

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllContactsRequest`](../interfaces/GetAllContactsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>\>

___

### getContact

▸ **getContact**(`requestParameters`, `initOverrides?`): `Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

Get contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetContactRequest`](../interfaces/GetContactRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

___

### getContactRaw

▸ **getContactRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ContactDto`](../interfaces/ContactDto.md)\>\>

Get contact

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetContactRequest`](../interfaces/GetContactRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ContactDto`](../interfaces/ContactDto.md)\>\>

___

### getContactVCard

▸ **getContactVCard**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Get contact vCard vcf file

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetContactVCardRequest`](../interfaces/GetContactVCardRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### getContactVCardRaw

▸ **getContactVCardRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Get contact vCard vcf file

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetContactVCardRequest`](../interfaces/GetContactVCardRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getContacts

▸ **getContacts**(`initOverrides?`): `Promise`<[`ContactProjection`](../interfaces/ContactProjection.md)[]\>

Get all contacts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ContactProjection`](../interfaces/ContactProjection.md)[]\>

___

### getContactsRaw

▸ **getContactsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ContactProjection`](../interfaces/ContactProjection.md)[]\>\>

Get all contacts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ContactProjection`](../interfaces/ContactProjection.md)[]\>\>

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

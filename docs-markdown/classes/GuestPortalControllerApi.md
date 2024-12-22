[MailSlurp JS](../README.md) / GuestPortalControllerApi

# Class: GuestPortalControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`GuestPortalControllerApi`**

## Table of contents

### Constructors

- [constructor](GuestPortalControllerApi.md#constructor)

### Properties

- [configuration](GuestPortalControllerApi.md#configuration)

### Methods

- [createGuestPortal](GuestPortalControllerApi.md#createguestportal)
- [createGuestPortalRaw](GuestPortalControllerApi.md#createguestportalraw)
- [createGuestPortalUser](GuestPortalControllerApi.md#createguestportaluser)
- [createGuestPortalUserRaw](GuestPortalControllerApi.md#createguestportaluserraw)
- [getAllGuestPortalUsers](GuestPortalControllerApi.md#getallguestportalusers)
- [getAllGuestPortalUsersRaw](GuestPortalControllerApi.md#getallguestportalusersraw)
- [getGuestPortal](GuestPortalControllerApi.md#getguestportal)
- [getGuestPortalRaw](GuestPortalControllerApi.md#getguestportalraw)
- [getGuestPortalUser](GuestPortalControllerApi.md#getguestportaluser)
- [getGuestPortalUserById](GuestPortalControllerApi.md#getguestportaluserbyid)
- [getGuestPortalUserByIdRaw](GuestPortalControllerApi.md#getguestportaluserbyidraw)
- [getGuestPortalUserRaw](GuestPortalControllerApi.md#getguestportaluserraw)
- [getGuestPortalUsers](GuestPortalControllerApi.md#getguestportalusers)
- [getGuestPortalUsersRaw](GuestPortalControllerApi.md#getguestportalusersraw)
- [getGuestPortals](GuestPortalControllerApi.md#getguestportals)
- [getGuestPortalsRaw](GuestPortalControllerApi.md#getguestportalsraw)
- [request](GuestPortalControllerApi.md#request)
- [withMiddleware](GuestPortalControllerApi.md#withmiddleware)
- [withPostMiddleware](GuestPortalControllerApi.md#withpostmiddleware)
- [withPreMiddleware](GuestPortalControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new GuestPortalControllerApi**(`configuration?`)

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

### createGuestPortal

▸ **createGuestPortal**(`requestParameters`, `initOverrides?`): `Promise`<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>

Create a guest login page for customers or clients to access assigned email addresses
Create a portal page for your customers or clients to log into email accounts and view emails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGuestPortalRequest`](../interfaces/CreateGuestPortalRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>

___

### createGuestPortalRaw

▸ **createGuestPortalRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>\>

Create a guest login page for customers or clients to access assigned email addresses
Create a portal page for your customers or clients to log into email accounts and view emails.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGuestPortalRequest`](../interfaces/CreateGuestPortalRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>\>

___

### createGuestPortalUser

▸ **createGuestPortalUser**(`requestParameters`, `initOverrides?`): `Promise`<[`GuestPortalUserCreateDto`](../interfaces/GuestPortalUserCreateDto.md)\>

Add customer to portal
Create a portal guest user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGuestPortalUserRequest`](../interfaces/CreateGuestPortalUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GuestPortalUserCreateDto`](../interfaces/GuestPortalUserCreateDto.md)\>

___

### createGuestPortalUserRaw

▸ **createGuestPortalUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalUserCreateDto`](../interfaces/GuestPortalUserCreateDto.md)\>\>

Add customer to portal
Create a portal guest user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGuestPortalUserRequest`](../interfaces/CreateGuestPortalUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalUserCreateDto`](../interfaces/GuestPortalUserCreateDto.md)\>\>

___

### getAllGuestPortalUsers

▸ **getAllGuestPortalUsers**(`requestParameters`, `initOverrides?`): `Promise`<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>

Get all customers for a portal
Get all guest users for portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllGuestPortalUsersRequest`](../interfaces/GetAllGuestPortalUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>

___

### getAllGuestPortalUsersRaw

▸ **getAllGuestPortalUsersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>\>

Get all customers for a portal
Get all guest users for portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllGuestPortalUsersRequest`](../interfaces/GetAllGuestPortalUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>\>

___

### getGuestPortal

▸ **getGuestPortal**(`requestParameters`, `initOverrides?`): `Promise`<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>

Fetch a customer guest portal
Get a client email portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalRequest`](../interfaces/GetGuestPortalRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>

___

### getGuestPortalRaw

▸ **getGuestPortalRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>\>

Fetch a customer guest portal
Get a client email portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalRequest`](../interfaces/GetGuestPortalRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)\>\>

___

### getGuestPortalUser

▸ **getGuestPortalUser**(`requestParameters`, `initOverrides?`): `Promise`<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>

Get customer for portal
Get guest user for portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalUserRequest`](../interfaces/GetGuestPortalUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>

___

### getGuestPortalUserById

▸ **getGuestPortalUserById**(`requestParameters`, `initOverrides?`): `Promise`<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>

Get customer by ID
Get guest user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalUserByIdRequest`](../interfaces/GetGuestPortalUserByIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>

___

### getGuestPortalUserByIdRaw

▸ **getGuestPortalUserByIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>\>

Get customer by ID
Get guest user

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalUserByIdRequest`](../interfaces/GetGuestPortalUserByIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>\>

___

### getGuestPortalUserRaw

▸ **getGuestPortalUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>\>

Get customer for portal
Get guest user for portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalUserRequest`](../interfaces/GetGuestPortalUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalUserDto`](../interfaces/GuestPortalUserDto.md)\>\>

___

### getGuestPortalUsers

▸ **getGuestPortalUsers**(`requestParameters`, `initOverrides?`): `Promise`<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>

Get customers for a portal
Get all guest users for portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalUsersRequest`](../interfaces/GetGuestPortalUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>

___

### getGuestPortalUsersRaw

▸ **getGuestPortalUsersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>\>

Get customers for a portal
Get all guest users for portal

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGuestPortalUsersRequest`](../interfaces/GetGuestPortalUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageGuestPortalUsers`](../interfaces/PageGuestPortalUsers.md)\>\>

___

### getGuestPortals

▸ **getGuestPortals**(`initOverrides?`): `Promise`<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)[]\>

Get portals
Get guest portals

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)[]\>

___

### getGuestPortalsRaw

▸ **getGuestPortalsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)[]\>\>

Get portals
Get guest portals

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GuestPortalDto`](../interfaces/GuestPortalDto.md)[]\>\>

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

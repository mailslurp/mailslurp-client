[MailSlurp JS](../README.md) / GroupControllerApi

# Class: GroupControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`GroupControllerApi`**

## Table of contents

### Constructors

- [constructor](GroupControllerApi.md#constructor)

### Properties

- [configuration](GroupControllerApi.md#configuration)

### Methods

- [addContactsToGroup](GroupControllerApi.md#addcontactstogroup)
- [addContactsToGroupRaw](GroupControllerApi.md#addcontactstogroupraw)
- [createGroup](GroupControllerApi.md#creategroup)
- [createGroupRaw](GroupControllerApi.md#creategroupraw)
- [deleteGroup](GroupControllerApi.md#deletegroup)
- [deleteGroupRaw](GroupControllerApi.md#deletegroupraw)
- [getAllGroups](GroupControllerApi.md#getallgroups)
- [getAllGroupsRaw](GroupControllerApi.md#getallgroupsraw)
- [getGroup](GroupControllerApi.md#getgroup)
- [getGroupRaw](GroupControllerApi.md#getgroupraw)
- [getGroupWithContacts](GroupControllerApi.md#getgroupwithcontacts)
- [getGroupWithContactsPaginated](GroupControllerApi.md#getgroupwithcontactspaginated)
- [getGroupWithContactsPaginatedRaw](GroupControllerApi.md#getgroupwithcontactspaginatedraw)
- [getGroupWithContactsRaw](GroupControllerApi.md#getgroupwithcontactsraw)
- [getGroups](GroupControllerApi.md#getgroups)
- [getGroupsRaw](GroupControllerApi.md#getgroupsraw)
- [removeContactsFromGroup](GroupControllerApi.md#removecontactsfromgroup)
- [removeContactsFromGroupRaw](GroupControllerApi.md#removecontactsfromgroupraw)
- [request](GroupControllerApi.md#request)
- [withMiddleware](GroupControllerApi.md#withmiddleware)
- [withPostMiddleware](GroupControllerApi.md#withpostmiddleware)
- [withPreMiddleware](GroupControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new GroupControllerApi**(`configuration?`)

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

### addContactsToGroup

▸ **addContactsToGroup**(`requestParameters`, `initOverrides?`): `Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

Add contacts to a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddContactsToGroupRequest`](../interfaces/AddContactsToGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

___

### addContactsToGroupRaw

▸ **addContactsToGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>\>

Add contacts to a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AddContactsToGroupRequest`](../interfaces/AddContactsToGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>\>

___

### createGroup

▸ **createGroup**(`requestParameters`, `initOverrides?`): `Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

Create a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGroupRequest`](../interfaces/CreateGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

___

### createGroupRaw

▸ **createGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupDto`](../interfaces/GroupDto.md)\>\>

Create a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGroupRequest`](../interfaces/CreateGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupDto`](../interfaces/GroupDto.md)\>\>

___

### deleteGroup

▸ **deleteGroup**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteGroupRequest`](../interfaces/DeleteGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteGroupRaw

▸ **deleteGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteGroupRequest`](../interfaces/DeleteGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllGroups

▸ **getAllGroups**(`requestParameters`, `initOverrides?`): `Promise`<[`PageGroupProjection`](../interfaces/PageGroupProjection.md)\>

Get all Contact Groups in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllGroupsRequest`](../interfaces/GetAllGroupsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageGroupProjection`](../interfaces/PageGroupProjection.md)\>

___

### getAllGroupsRaw

▸ **getAllGroupsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageGroupProjection`](../interfaces/PageGroupProjection.md)\>\>

Get all Contact Groups in paginated format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllGroupsRequest`](../interfaces/GetAllGroupsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageGroupProjection`](../interfaces/PageGroupProjection.md)\>\>

___

### getGroup

▸ **getGroup**(`requestParameters`, `initOverrides?`): `Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

Get group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupRequest`](../interfaces/GetGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

___

### getGroupRaw

▸ **getGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupDto`](../interfaces/GroupDto.md)\>\>

Get group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupRequest`](../interfaces/GetGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupDto`](../interfaces/GroupDto.md)\>\>

___

### getGroupWithContacts

▸ **getGroupWithContacts**(`requestParameters`, `initOverrides?`): `Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

Get group and contacts belonging to it

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupWithContactsRequest`](../interfaces/GetGroupWithContactsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

___

### getGroupWithContactsPaginated

▸ **getGroupWithContactsPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

Get group and paginated contacts belonging to it

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupWithContactsPaginatedRequest`](../interfaces/GetGroupWithContactsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

___

### getGroupWithContactsPaginatedRaw

▸ **getGroupWithContactsPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>\>

Get group and paginated contacts belonging to it

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupWithContactsPaginatedRequest`](../interfaces/GetGroupWithContactsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>\>

___

### getGroupWithContactsRaw

▸ **getGroupWithContactsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>\>

Get group and contacts belonging to it

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupWithContactsRequest`](../interfaces/GetGroupWithContactsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>\>

___

### getGroups

▸ **getGroups**(`initOverrides?`): `Promise`<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>

Get all groups

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>

___

### getGroupsRaw

▸ **getGroupsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>\>

Get all groups

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>\>

___

### removeContactsFromGroup

▸ **removeContactsFromGroup**(`requestParameters`, `initOverrides?`): `Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

Remove contacts from a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RemoveContactsFromGroupRequest`](../interfaces/RemoveContactsFromGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

___

### removeContactsFromGroupRaw

▸ **removeContactsFromGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>\>

Remove contacts from a group

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`RemoveContactsFromGroupRequest`](../interfaces/RemoveContactsFromGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>\>

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

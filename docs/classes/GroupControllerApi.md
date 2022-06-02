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

### <a id="constructor" name="constructor"></a> constructor

• **new GroupControllerApi**(`configuration?`)

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

### <a id="addcontactstogroup" name="addcontactstogroup"></a> addContactsToGroup

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

### <a id="addcontactstogroupraw" name="addcontactstogroupraw"></a> addContactsToGroupRaw

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

### <a id="creategroup" name="creategroup"></a> createGroup

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

### <a id="creategroupraw" name="creategroupraw"></a> createGroupRaw

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

### <a id="deletegroup" name="deletegroup"></a> deleteGroup

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

### <a id="deletegroupraw" name="deletegroupraw"></a> deleteGroupRaw

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

### <a id="getallgroups" name="getallgroups"></a> getAllGroups

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

### <a id="getallgroupsraw" name="getallgroupsraw"></a> getAllGroupsRaw

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

### <a id="getgroup" name="getgroup"></a> getGroup

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

### <a id="getgroupraw" name="getgroupraw"></a> getGroupRaw

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

### <a id="getgroupwithcontacts" name="getgroupwithcontacts"></a> getGroupWithContacts

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

### <a id="getgroupwithcontactspaginated" name="getgroupwithcontactspaginated"></a> getGroupWithContactsPaginated

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

### <a id="getgroupwithcontactspaginatedraw" name="getgroupwithcontactspaginatedraw"></a> getGroupWithContactsPaginatedRaw

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

### <a id="getgroupwithcontactsraw" name="getgroupwithcontactsraw"></a> getGroupWithContactsRaw

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

### <a id="getgroups" name="getgroups"></a> getGroups

▸ **getGroups**(`initOverrides?`): `Promise`<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>

Get all groups

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>

___

### <a id="getgroupsraw" name="getgroupsraw"></a> getGroupsRaw

▸ **getGroupsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>\>

Get all groups

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>\>

___

### <a id="removecontactsfromgroup" name="removecontactsfromgroup"></a> removeContactsFromGroup

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

### <a id="removecontactsfromgroupraw" name="removecontactsfromgroupraw"></a> removeContactsFromGroupRaw

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

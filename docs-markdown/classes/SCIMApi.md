[MailSlurp JS](../README.md) / SCIMApi

# Class: SCIMApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SCIMApi`**

## Table of contents

### Constructors

- [constructor](SCIMApi.md#constructor)

### Properties

- [configuration](SCIMApi.md#configuration)

### Methods

- [createGroup](SCIMApi.md#creategroup)
- [createGroupRaw](SCIMApi.md#creategroupraw)
- [createUser](SCIMApi.md#createuser)
- [createUserRaw](SCIMApi.md#createuserraw)
- [deleteGroup](SCIMApi.md#deletegroup)
- [deleteGroupRaw](SCIMApi.md#deletegroupraw)
- [deleteUser](SCIMApi.md#deleteuser)
- [deleteUserRaw](SCIMApi.md#deleteuserraw)
- [getGroup](SCIMApi.md#getgroup)
- [getGroupRaw](SCIMApi.md#getgroupraw)
- [getResourceType](SCIMApi.md#getresourcetype)
- [getResourceTypeRaw](SCIMApi.md#getresourcetyperaw)
- [getResourceTypes](SCIMApi.md#getresourcetypes)
- [getResourceTypesRaw](SCIMApi.md#getresourcetypesraw)
- [getSchema](SCIMApi.md#getschema)
- [getSchemaRaw](SCIMApi.md#getschemaraw)
- [getSchemas](SCIMApi.md#getschemas)
- [getSchemasRaw](SCIMApi.md#getschemasraw)
- [getServiceProviderConfig](SCIMApi.md#getserviceproviderconfig)
- [getServiceProviderConfigRaw](SCIMApi.md#getserviceproviderconfigraw)
- [getUser](SCIMApi.md#getuser)
- [getUserRaw](SCIMApi.md#getuserraw)
- [listGroups](SCIMApi.md#listgroups)
- [listGroupsRaw](SCIMApi.md#listgroupsraw)
- [listUsers](SCIMApi.md#listusers)
- [listUsersRaw](SCIMApi.md#listusersraw)
- [patchGroup](SCIMApi.md#patchgroup)
- [patchGroupRaw](SCIMApi.md#patchgroupraw)
- [patchUser](SCIMApi.md#patchuser)
- [patchUserRaw](SCIMApi.md#patchuserraw)
- [replaceGroup](SCIMApi.md#replacegroup)
- [replaceGroupRaw](SCIMApi.md#replacegroupraw)
- [replaceUser](SCIMApi.md#replaceuser)
- [replaceUserRaw](SCIMApi.md#replaceuserraw)
- [request](SCIMApi.md#request)
- [withMiddleware](SCIMApi.md#withmiddleware)
- [withPostMiddleware](SCIMApi.md#withpostmiddleware)
- [withPreMiddleware](SCIMApi.md#withpremiddleware)

## Constructors

### constructor

• **new SCIMApi**(`configuration?`)

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

### createGroup

▸ **createGroup**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGroupRequest`](../interfaces/CreateGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### createGroupRaw

▸ **createGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateGroupRequest`](../interfaces/CreateGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### createUser

▸ **createUser**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateUserRequest`](../interfaces/CreateUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### createUserRaw

▸ **createUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateUserRequest`](../interfaces/CreateUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### deleteGroup

▸ **deleteGroup**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteGroupRequest`](../interfaces/DeleteGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### deleteGroupRaw

▸ **deleteGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteGroupRequest`](../interfaces/DeleteGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### deleteUser

▸ **deleteUser**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteUserRequest`](../interfaces/DeleteUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### deleteUserRaw

▸ **deleteUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteUserRequest`](../interfaces/DeleteUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### getGroup

▸ **getGroup**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupRequest`](../interfaces/GetGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### getGroupRaw

▸ **getGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGroupRequest`](../interfaces/GetGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### getResourceType

▸ **getResourceType**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetResourceTypeRequest`](../interfaces/GetResourceTypeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### getResourceTypeRaw

▸ **getResourceTypeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetResourceTypeRequest`](../interfaces/GetResourceTypeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### getResourceTypes

▸ **getResourceTypes**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetResourceTypesRequest`](../interfaces/GetResourceTypesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### getResourceTypesRaw

▸ **getResourceTypesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetResourceTypesRequest`](../interfaces/GetResourceTypesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### getSchema

▸ **getSchema**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSchemaRequest`](../interfaces/GetSchemaRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### getSchemaRaw

▸ **getSchemaRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSchemaRequest`](../interfaces/GetSchemaRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### getSchemas

▸ **getSchemas**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSchemasRequest`](../interfaces/GetSchemasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### getSchemasRaw

▸ **getSchemasRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSchemasRequest`](../interfaces/GetSchemasRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### getServiceProviderConfig

▸ **getServiceProviderConfig**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetServiceProviderConfigRequest`](../interfaces/GetServiceProviderConfigRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### getServiceProviderConfigRaw

▸ **getServiceProviderConfigRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetServiceProviderConfigRequest`](../interfaces/GetServiceProviderConfigRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### getUser

▸ **getUser**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserRequest`](../interfaces/GetUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### getUserRaw

▸ **getUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserRequest`](../interfaces/GetUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### listGroups

▸ **listGroups**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListGroupsRequest`](../interfaces/ListGroupsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### listGroupsRaw

▸ **listGroupsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListGroupsRequest`](../interfaces/ListGroupsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### listUsers

▸ **listUsers**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListUsersRequest`](../interfaces/ListUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### listUsersRaw

▸ **listUsersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListUsersRequest`](../interfaces/ListUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### patchGroup

▸ **patchGroup**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PatchGroupRequest`](../interfaces/PatchGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### patchGroupRaw

▸ **patchGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PatchGroupRequest`](../interfaces/PatchGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### patchUser

▸ **patchUser**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PatchUserRequest`](../interfaces/PatchUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### patchUserRaw

▸ **patchUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`PatchUserRequest`](../interfaces/PatchUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### replaceGroup

▸ **replaceGroup**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplaceGroupRequest`](../interfaces/ReplaceGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### replaceGroupRaw

▸ **replaceGroupRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplaceGroupRequest`](../interfaces/ReplaceGroupRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

___

### replaceUser

▸ **replaceUser**(`requestParameters`, `initOverrides?`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplaceUserRequest`](../interfaces/ReplaceUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`object`\>

___

### replaceUserRaw

▸ **replaceUserRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplaceUserRequest`](../interfaces/ReplaceUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`object`\>\>

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

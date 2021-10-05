[MailSlurp JS](../README.md) / GroupControllerApi

# Class: GroupControllerApi

GroupControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`GroupControllerApi`**

## Table of contents

### Constructors

- [constructor](GroupControllerApi.md#constructor)

### Properties

- [basePath](GroupControllerApi.md#basepath)
- [configuration](GroupControllerApi.md#configuration)
- [fetch](GroupControllerApi.md#fetch)

### Methods

- [addContactsToGroup](GroupControllerApi.md#addcontactstogroup)
- [createGroup](GroupControllerApi.md#creategroup)
- [deleteGroup](GroupControllerApi.md#deletegroup)
- [getAllGroups](GroupControllerApi.md#getallgroups)
- [getGroup](GroupControllerApi.md#getgroup)
- [getGroupWithContacts](GroupControllerApi.md#getgroupwithcontacts)
- [getGroupWithContactsPaginated](GroupControllerApi.md#getgroupwithcontactspaginated)
- [getGroups](GroupControllerApi.md#getgroups)
- [removeContactsFromGroup](GroupControllerApi.md#removecontactsfromgroup)

## Constructors

### constructor

• **new GroupControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### addContactsToGroup

▸ **addContactsToGroup**(`groupId`, `updateGroupContactsOption`, `options?`): `Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

**`summary`** Add contacts to a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | groupId |
| `updateGroupContactsOption` | [`UpdateGroupContacts`](../interfaces/UpdateGroupContacts.md) | updateGroupContactsOption |
| `options?` | `any` | - |

#### Returns

`Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

#### Defined in

[src/generated/api.ts:19446](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19446)

___

### createGroup

▸ **createGroup**(`createGroupOptions`, `options?`): `Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

**`summary`** Create a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createGroupOptions` | [`CreateGroupOptions`](../interfaces/CreateGroupOptions.md) | createGroupOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

#### Defined in

[src/generated/api.ts:19466](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19466)

___

### deleteGroup

▸ **deleteGroup**(`groupId`, `options?`): `Promise`<`Response`\>

**`summary`** Delete group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | groupId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:19481](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19481)

___

### getAllGroups

▸ **getAllGroups**(`before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageGroupProjection`](../interfaces/PageGroupProjection.md)\>

**`summary`** Get all Contact Groups in paginated format

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `page?` | `number` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageGroupProjection`](../interfaces/PageGroupProjection.md)\>

#### Defined in

[src/generated/api.ts:19500](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19500)

___

### getGroup

▸ **getGroup**(`groupId`, `options?`): `Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

**`summary`** Get group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | groupId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`GroupDto`](../interfaces/GroupDto.md)\>

#### Defined in

[src/generated/api.ts:19526](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19526)

___

### getGroupWithContacts

▸ **getGroupWithContacts**(`groupId`, `options?`): `Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

**`summary`** Get group and contacts belonging to it

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | groupId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

#### Defined in

[src/generated/api.ts:19541](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19541)

___

### getGroupWithContactsPaginated

▸ **getGroupWithContactsPaginated**(`groupId`, `before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

**`summary`** Get group and paginated contacts belonging to it

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | groupId |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `since?` | `Date` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

#### Defined in

[src/generated/api.ts:19561](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19561)

___

### getGroups

▸ **getGroups**(`options?`): `Promise`<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>

**`summary`** Get all groups

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`GroupProjection`](../interfaces/GroupProjection.md)[]\>

#### Defined in

[src/generated/api.ts:19590](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19590)

___

### removeContactsFromGroup

▸ **removeContactsFromGroup**(`groupId`, `updateGroupContactsOption`, `options?`): `Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

**`summary`** Remove contacts from a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupId` | `string` | groupId |
| `updateGroupContactsOption` | [`UpdateGroupContacts`](../interfaces/UpdateGroupContacts.md) | updateGroupContactsOption |
| `options?` | `any` | - |

#### Returns

`Promise`<[`GroupContactsDto`](../interfaces/GroupContactsDto.md)\>

#### Defined in

[src/generated/api.ts:19606](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L19606)

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / GroupControllerApi

# Class: GroupControllerApi

GroupControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GroupControllerApi**

## Index

### Constructors

* [constructor](groupcontrollerapi.md#constructor)

### Properties

* [basePath](groupcontrollerapi.md#basepath)
* [configuration](groupcontrollerapi.md#configuration)
* [fetch](groupcontrollerapi.md#fetch)

### Methods

* [addContactsToGroup](groupcontrollerapi.md#addcontactstogroup)
* [createGroup](groupcontrollerapi.md#creategroup)
* [deleteGroup](groupcontrollerapi.md#deletegroup)
* [getAllGroups](groupcontrollerapi.md#getallgroups)
* [getGroup](groupcontrollerapi.md#getgroup)
* [getGroupWithContacts](groupcontrollerapi.md#getgroupwithcontacts)
* [getGroupWithContactsPaginated](groupcontrollerapi.md#getgroupwithcontactspaginated)
* [getGroups](groupcontrollerapi.md#getgroups)
* [removeContactsFromGroup](groupcontrollerapi.md#removecontactsfromgroup)

## Constructors

### constructor

\+ **new GroupControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [GroupControllerApi](groupcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [GroupControllerApi](groupcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L62)*

## Methods

### addContactsToGroup

▸ **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/updategroupcontacts.md), `options?`: any): Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

*Defined in [src/generated/api.ts:16660](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16660)*

**`summary`** Add contacts to a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

___

### createGroup

▸ **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/creategroupoptions.md), `options?`: any): Promise\<[GroupDto](../interfaces/groupdto.md)>

*Defined in [src/generated/api.ts:16680](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16680)*

**`summary`** Create a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createGroupOptions` | [CreateGroupOptions](../interfaces/creategroupoptions.md) | createGroupOptions |
`options?` | any | - |

**Returns:** Promise\<[GroupDto](../interfaces/groupdto.md)>

___

### deleteGroup

▸ **deleteGroup**(`groupId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:16695](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16695)*

**`summary`** Delete group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAllGroups

▸ **getAllGroups**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageGroupProjection](../interfaces/pagegroupprojection.md)>

*Defined in [src/generated/api.ts:16712](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16712)*

**`summary`** Get all Contact Groups in paginated format

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageGroupProjection](../interfaces/pagegroupprojection.md)>

___

### getGroup

▸ **getGroup**(`groupId`: string, `options?`: any): Promise\<[GroupDto](../interfaces/groupdto.md)>

*Defined in [src/generated/api.ts:16734](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16734)*

**`summary`** Get group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** Promise\<[GroupDto](../interfaces/groupdto.md)>

___

### getGroupWithContacts

▸ **getGroupWithContacts**(`groupId`: string, `options?`: any): Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

*Defined in [src/generated/api.ts:16749](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16749)*

**`summary`** Get group and contacts belonging to it

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

___

### getGroupWithContactsPaginated

▸ **getGroupWithContactsPaginated**(`groupId`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageContactProjection](../interfaces/pagecontactprojection.md)>

*Defined in [src/generated/api.ts:16767](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16767)*

**`summary`** Get group and paginated contacts belonging to it

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`page?` | number | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageContactProjection](../interfaces/pagecontactprojection.md)>

___

### getGroups

▸ **getGroups**(`options?`: any): Promise\<[GroupProjection](../interfaces/groupprojection.md)[]>

*Defined in [src/generated/api.ts:16789](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16789)*

**`summary`** Get all groups

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[GroupProjection](../interfaces/groupprojection.md)[]>

___

### removeContactsFromGroup

▸ **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/updategroupcontacts.md), `options?`: any): Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

*Defined in [src/generated/api.ts:16805](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L16805)*

**`summary`** Remove contacts from a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

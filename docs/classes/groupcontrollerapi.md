# Class: GroupControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GroupControllerApi**

## Constructors

###  constructor

\+ **new GroupControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[GroupControllerApi](groupcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[GroupControllerApi](groupcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

## Methods

###  addContactsToGroup

▸ **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/groupcontactsdto.md)›*

*Defined in [src/generated/api.ts:7096](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7096)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/groupcontactsdto.md)›*

___

###  createGroup

▸ **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/creategroupoptions.md), `options?`: any): *Promise‹[GroupDto](../interfaces/groupdto.md)›*

*Defined in [src/generated/api.ts:7108](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7108)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createGroupOptions` | [CreateGroupOptions](../interfaces/creategroupoptions.md) | createGroupOptions |
`options?` | any | - |

**Returns:** *Promise‹[GroupDto](../interfaces/groupdto.md)›*

___

###  deleteGroup

▸ **deleteGroup**(`groupId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:7120](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7120)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllGroups

▸ **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageGroupProjection](../interfaces/pagegroupprojection.md)›*

*Defined in [src/generated/api.ts:7134](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7134)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageGroupProjection](../interfaces/pagegroupprojection.md)›*

___

###  getGroup

▸ **getGroup**(`groupId`: string, `options?`: any): *Promise‹[GroupDto](../interfaces/groupdto.md)›*

*Defined in [src/generated/api.ts:7146](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7146)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** *Promise‹[GroupDto](../interfaces/groupdto.md)›*

___

###  getGroupWithContacts

▸ **getGroupWithContacts**(`groupId`: string, `options?`: any): *Promise‹[GroupContactsDto](../interfaces/groupcontactsdto.md)›*

*Defined in [src/generated/api.ts:7158](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7158)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/groupcontactsdto.md)›*

___

###  getGroupWithContactsPaginated

▸ **getGroupWithContactsPaginated**(`groupId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](../interfaces/pagecontactprojection.md)›*

*Defined in [src/generated/api.ts:7173](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7173)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`page?` | number | - |
`size?` | number | - |
`sort?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *Promise‹[PageContactProjection](../interfaces/pagecontactprojection.md)›*

___

###  getGroups

▸ **getGroups**(`options?`: any): *Promise‹[GroupProjection](../interfaces/groupprojection.md)[]›*

*Defined in [src/generated/api.ts:7184](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7184)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[GroupProjection](../interfaces/groupprojection.md)[]›*

___

###  removeContactsFromGroup

▸ **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/groupcontactsdto.md)›*

*Defined in [src/generated/api.ts:7197](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7197)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/groupcontactsdto.md)›*

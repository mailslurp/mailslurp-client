# Class: GroupControllerApi

GroupControllerApi - object-oriented interface

**`export`** 

**`class`** GroupControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **GroupControllerApi**

## Constructors

###  constructor

\+ **new GroupControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[GroupControllerApi](_generated_api_.groupcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[GroupControllerApi](_generated_api_.groupcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L62)*

## Methods

###  addContactsToGroup

▸ **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

*Defined in [src/generated/api.ts:8921](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L8921)*

**`summary`** Add contacts to a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

___

###  createGroup

▸ **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md), `options?`: any): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

*Defined in [src/generated/api.ts:8941](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L8941)*

**`summary`** Create a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createGroupOptions` | [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md) | createGroupOptions |
`options?` | any | - |

**Returns:** *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

___

###  deleteGroup

▸ **deleteGroup**(`groupId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:8956](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L8956)*

**`summary`** Delete group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllGroups

▸ **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageGroupProjection](../interfaces/_generated_api_.pagegroupprojection.md)›*

*Defined in [src/generated/api.ts:8973](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L8973)*

**`summary`** Get all Contact Groups in paginated format

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageGroupProjection](../interfaces/_generated_api_.pagegroupprojection.md)›*

___

###  getGroup

▸ **getGroup**(`groupId`: string, `options?`: any): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

*Defined in [src/generated/api.ts:8995](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L8995)*

**`summary`** Get group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

___

###  getGroupWithContacts

▸ **getGroupWithContacts**(`groupId`: string, `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

*Defined in [src/generated/api.ts:9010](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L9010)*

**`summary`** Get group and contacts belonging to it

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

___

###  getGroups

▸ **getGroups**(`options?`: any): *Promise‹[GroupProjection](../interfaces/_generated_api_.groupprojection.md)[]›*

*Defined in [src/generated/api.ts:9024](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L9024)*

**`summary`** Get all groups

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[GroupProjection](../interfaces/_generated_api_.groupprojection.md)[]›*

___

###  removeContactsFromGroup

▸ **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

*Defined in [src/generated/api.ts:9040](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L9040)*

**`summary`** Remove contacts from a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

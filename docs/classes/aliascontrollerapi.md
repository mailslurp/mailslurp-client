# Class: AliasControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AliasControllerApi**

## Constructors

###  constructor

\+ **new AliasControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AliasControllerApi](aliascontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AliasControllerApi](aliascontrollerapi.md)*

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

###  createAlias

▸ **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3423](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3423)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createOwnedAliasOptions` | [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md) | createOwnedAliasOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  createAnonymousAlias

▸ **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/createanonymousaliasoptions.md), `options?`: any): *Promise‹[Alias](../interfaces/alias.md)›*

*Defined in [src/generated/api.ts:3435](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3435)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createAnonymousAliasOptions` | [CreateAnonymousAliasOptions](../interfaces/createanonymousaliasoptions.md) | createAnonymousAliasOptions |
`options?` | any | - |

**Returns:** *Promise‹[Alias](../interfaces/alias.md)›*

___

###  deleteAlias

▸ **deleteAlias**(`aliasId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3447](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3447)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAlias

▸ **getAlias**(`aliasId`: string, `options?`: any): *Promise‹[Alias](../interfaces/alias.md)›*

*Defined in [src/generated/api.ts:3459](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3459)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** *Promise‹[Alias](../interfaces/alias.md)›*

___

###  getAliases

▸ **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageAlias](../interfaces/pagealias.md)›*

*Defined in [src/generated/api.ts:3473](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3473)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageAlias](../interfaces/pagealias.md)›*

___

###  updateAlias

▸ **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3486](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3486)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`createOwnedAliasOptions` | [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md) | createOwnedAliasOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

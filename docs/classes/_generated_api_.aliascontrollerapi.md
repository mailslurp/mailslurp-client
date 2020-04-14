[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [AliasControllerApi](_generated_api_.aliascontrollerapi.md)

# Class: AliasControllerApi

AliasControllerApi - object-oriented interface

**`export`** 

**`class`** AliasControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **AliasControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.aliascontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.aliascontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.aliascontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.aliascontrollerapi.md#protected-fetch)

### Methods

* [createAlias](_generated_api_.aliascontrollerapi.md#createalias)
* [createAnonymousAlias](_generated_api_.aliascontrollerapi.md#createanonymousalias)
* [deleteAlias](_generated_api_.aliascontrollerapi.md#deletealias)
* [getAlias](_generated_api_.aliascontrollerapi.md#getalias)
* [getAliases](_generated_api_.aliascontrollerapi.md#getaliases)
* [updateAlias](_generated_api_.aliascontrollerapi.md#updatealias)

## Constructors

###  constructor

\+ **new AliasControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[AliasControllerApi](_generated_api_.aliascontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[AliasControllerApi](_generated_api_.aliascontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L62)*

## Methods

###  createAlias

▸ **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3369](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L3369)*

Create an email alias belonging to a user ID. To create anonymous aliases use the `createAnonymousAlias` method.

**`summary`** Create an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createOwnedAliasOptions` | [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md) | createOwnedAliasOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  createAnonymousAlias

▸ **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md), `options?`: any): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

*Defined in [src/generated/api.ts:3387](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L3387)*

**`summary`** Create an anonymous email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createAnonymousAliasOptions` | [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md) | createAnonymousAliasOptions |
`options?` | any | - |

**Returns:** *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

___

###  deleteAlias

▸ **deleteAlias**(`aliasId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3405](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L3405)*

**`summary`** Delete an owned alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAlias

▸ **getAlias**(`aliasId`: string, `options?`: any): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

*Defined in [src/generated/api.ts:3420](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L3420)*

Get an email alias by ID

**`summary`** Get an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

___

###  getAliases

▸ **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageAlias](../interfaces/_generated_api_.pagealias.md)›*

*Defined in [src/generated/api.ts:3437](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L3437)*

Get all email aliases in paginated form

**`summary`** Get all email aliases

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageAlias](../interfaces/_generated_api_.pagealias.md)›*

___

###  updateAlias

▸ **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:3460](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L3460)*

**`summary`** Update an owned alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`createOwnedAliasOptions` | [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md) | createOwnedAliasOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

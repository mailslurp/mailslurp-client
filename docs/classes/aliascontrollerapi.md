**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / AliasControllerApi

# Class: AliasControllerApi

AliasControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AliasControllerApi**

## Index

### Constructors

* [constructor](aliascontrollerapi.md#constructor)

### Properties

* [basePath](aliascontrollerapi.md#basepath)
* [configuration](aliascontrollerapi.md#configuration)
* [fetch](aliascontrollerapi.md#fetch)

### Methods

* [createAlias](aliascontrollerapi.md#createalias)
* [createAnonymousAlias](aliascontrollerapi.md#createanonymousalias)
* [deleteAlias](aliascontrollerapi.md#deletealias)
* [getAlias](aliascontrollerapi.md#getalias)
* [getAliases](aliascontrollerapi.md#getaliases)
* [updateAlias](aliascontrollerapi.md#updatealias)

## Constructors

### constructor

\+ **new AliasControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [AliasControllerApi](aliascontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [AliasControllerApi](aliascontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L62)*

## Methods

### createAlias

▸ **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:3834](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L3834)*

Create an email alias belonging to a user ID. To create anonymous aliases use the `createAnonymousAlias` method.

**`summary`** Create an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createOwnedAliasOptions` | [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md) | createOwnedAliasOptions |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### createAnonymousAlias

▸ **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/createanonymousaliasoptions.md), `options?`: any): Promise\<[Alias](../interfaces/alias.md)>

*Defined in [src/generated/api.ts:3852](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L3852)*

**`summary`** Create an anonymous email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createAnonymousAliasOptions` | [CreateAnonymousAliasOptions](../interfaces/createanonymousaliasoptions.md) | createAnonymousAliasOptions |
`options?` | any | - |

**Returns:** Promise\<[Alias](../interfaces/alias.md)>

___

### deleteAlias

▸ **deleteAlias**(`aliasId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:3870](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L3870)*

**`summary`** Delete an owned alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAlias

▸ **getAlias**(`aliasId`: string, `options?`: any): Promise\<[Alias](../interfaces/alias.md)>

*Defined in [src/generated/api.ts:3885](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L3885)*

Get an email alias by ID

**`summary`** Get an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** Promise\<[Alias](../interfaces/alias.md)>

___

### getAliases

▸ **getAliases**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageAlias](../interfaces/pagealias.md)>

*Defined in [src/generated/api.ts:3902](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L3902)*

Get all email aliases in paginated form

**`summary`** Get all email aliases

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageAlias](../interfaces/pagealias.md)>

___

### updateAlias

▸ **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:3925](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L3925)*

**`summary`** Update an owned alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`createOwnedAliasOptions` | [CreateOwnedAliasOptions](../interfaces/createownedaliasoptions.md) | createOwnedAliasOptions |
`options?` | any | - |

**Returns:** Promise\<Response>

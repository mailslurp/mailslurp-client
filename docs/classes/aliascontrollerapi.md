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
* [deleteAlias](aliascontrollerapi.md#deletealias)
* [getAlias](aliascontrollerapi.md#getalias)
* [getAliases](aliascontrollerapi.md#getaliases)
* [updateAlias](aliascontrollerapi.md#updatealias)

## Constructors

### constructor

\+ **new AliasControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [AliasControllerApi](aliascontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L62)*

## Methods

### createAlias

▸ **createAlias**(`createAliasOptions`: [CreateAliasOptions](../interfaces/createaliasoptions.md), `options?`: any): Promise\<[AliasDto](../interfaces/aliasdto.md)>

*Defined in [src/generated/api.ts:4172](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4172)*

Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached

**`summary`** Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createAliasOptions` | [CreateAliasOptions](../interfaces/createaliasoptions.md) | createAliasOptions |
`options?` | any | - |

**Returns:** Promise\<[AliasDto](../interfaces/aliasdto.md)>

___

### deleteAlias

▸ **deleteAlias**(`aliasId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:4187](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4187)*

**`summary`** Delete an email alias

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

▸ **getAlias**(`aliasId`: string, `options?`: any): Promise\<[AliasDto](../interfaces/aliasdto.md)>

*Defined in [src/generated/api.ts:4202](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4202)*

Get an email alias by ID

**`summary`** Get an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** Promise\<[AliasDto](../interfaces/aliasdto.md)>

___

### getAliases

▸ **getAliases**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageAlias](../interfaces/pagealias.md)>

*Defined in [src/generated/api.ts:4219](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4219)*

Get all email aliases in paginated form

**`summary`** Get all email aliases you have created

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

▸ **updateAlias**(`aliasId`: string, `updateAliasOptions`: [UpdateAliasOptions](../interfaces/updatealiasoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:4242](https://github.com/mailslurp/mailslurp-client/blob/36fa2ad/src/generated/api.ts#L4242)*

**`summary`** Update an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`updateAliasOptions` | [UpdateAliasOptions](../interfaces/updatealiasoptions.md) | updateAliasOptions |
`options?` | any | - |

**Returns:** Promise\<Response>

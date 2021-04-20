**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / MissedEmailControllerApi

# Class: MissedEmailControllerApi

MissedEmailControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **MissedEmailControllerApi**

## Index

### Constructors

* [constructor](missedemailcontrollerapi.md#constructor)

### Properties

* [basePath](missedemailcontrollerapi.md#basepath)
* [configuration](missedemailcontrollerapi.md#configuration)
* [fetch](missedemailcontrollerapi.md#fetch)

### Methods

* [getAllMissedEmails](missedemailcontrollerapi.md#getallmissedemails)
* [getMissedEmail](missedemailcontrollerapi.md#getmissedemail)

## Constructors

### constructor

\+ **new MissedEmailControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [MissedEmailControllerApi](missedemailcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/db779b0/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [MissedEmailControllerApi](missedemailcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/db779b0/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/db779b0/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/db779b0/src/generated/api.ts#L62)*

## Methods

### getAllMissedEmails

▸ **getAllMissedEmails**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageMissedEmailProjection](../interfaces/pagemissedemailprojection.md)>

*Defined in [src/generated/api.ts:16898](https://github.com/mailslurp/mailslurp-client/blob/db779b0/src/generated/api.ts#L16898)*

**`summary`** Get all MissedEmails in paginated format

**`throws`** {RequiredError}

**`memberof`** MissedEmailControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageMissedEmailProjection](../interfaces/pagemissedemailprojection.md)>

___

### getMissedEmail

▸ **getMissedEmail**(`missedEmailId`: string, `options?`: any): Promise\<[MissedEmail](../interfaces/missedemail.md)>

*Defined in [src/generated/api.ts:16920](https://github.com/mailslurp/mailslurp-client/blob/db779b0/src/generated/api.ts#L16920)*

**`summary`** Get MissedEmail

**`throws`** {RequiredError}

**`memberof`** MissedEmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`missedEmailId` | string | MissedEmailId |
`options?` | any | - |

**Returns:** Promise\<[MissedEmail](../interfaces/missedemail.md)>

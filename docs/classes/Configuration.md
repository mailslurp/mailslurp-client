[MailSlurp JS](../README.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [basePath](Configuration.md#basepath)
- [password](Configuration.md#password)
- [username](Configuration.md#username)

## Constructors

### constructor

• **new Configuration**(`param?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[src/generated/configuration.ts:58](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/configuration.ts#L58)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| (`name`: `string`, `scopes?`: `string`[]) => `string`

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

#### Defined in

[src/generated/configuration.ts:49](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/configuration.ts#L49)

___

### apiKey

• `Optional` **apiKey**: `string` \| (`name`: `string`) => `string`

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

#### Defined in

[src/generated/configuration.ts:28](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/configuration.ts#L28)

___

### basePath

• `Optional` **basePath**: `string`

override base path

**`memberof`** Configuration

#### Defined in

[src/generated/configuration.ts:56](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/configuration.ts#L56)

___

### password

• `Optional` **password**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[src/generated/configuration.ts:42](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/configuration.ts#L42)

___

### username

• `Optional` **username**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[src/generated/configuration.ts:35](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/configuration.ts#L35)

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / Configuration

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [accessToken](configuration.md#accesstoken)
* [apiKey](configuration.md#apikey)
* [basePath](configuration.md#basepath)
* [password](configuration.md#password)
* [username](configuration.md#username)

## Constructors

### constructor

\+ **new Configuration**(`param?`: [ConfigurationParameters](../interfaces/configurationparameters.md)): [Configuration](configuration.md)

*Defined in [src/generated/configuration.ts:56](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/configuration.ts#L56)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | [ConfigurationParameters](../interfaces/configurationparameters.md) | {} |

**Returns:** [Configuration](configuration.md)

## Properties

### accessToken

• `Optional` **accessToken**: string \| (name: string, scopes?: string[]) => string

*Defined in [src/generated/configuration.ts:49](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/configuration.ts#L49)*

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

___

### apiKey

• `Optional` **apiKey**: string \| (name: string) => string

*Defined in [src/generated/configuration.ts:28](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/configuration.ts#L28)*

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

___

### basePath

• `Optional` **basePath**: string

*Defined in [src/generated/configuration.ts:56](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/configuration.ts#L56)*

override base path

**`memberof`** Configuration

___

### password

• `Optional` **password**: string

*Defined in [src/generated/configuration.ts:42](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/configuration.ts#L42)*

parameter for basic security

**`memberof`** Configuration

___

### username

• `Optional` **username**: string

*Defined in [src/generated/configuration.ts:35](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/configuration.ts#L35)*

parameter for basic security

**`memberof`** Configuration

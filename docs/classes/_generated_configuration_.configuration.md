[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/configuration"](../modules/_generated_configuration_.md) › [Configuration](_generated_configuration_.configuration.md)

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](_generated_configuration_.configuration.md#constructor)

### Properties

* [accessToken](_generated_configuration_.configuration.md#optional-accesstoken)
* [apiKey](_generated_configuration_.configuration.md#optional-apikey)
* [basePath](_generated_configuration_.configuration.md#optional-basepath)
* [password](_generated_configuration_.configuration.md#optional-password)
* [username](_generated_configuration_.configuration.md#optional-username)

## Constructors

###  constructor

\+ **new Configuration**(`param`: [ConfigurationParameters](../interfaces/_generated_configuration_.configurationparameters.md)): *[Configuration](_generated_configuration_.configuration.md)*

*Defined in [src/generated/configuration.ts:56](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/configuration.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`param` | [ConfigurationParameters](../interfaces/_generated_configuration_.configurationparameters.md) |  {} |

**Returns:** *[Configuration](_generated_configuration_.configuration.md)*

## Properties

### `Optional` accessToken

• **accessToken**? : *string | function*

*Defined in [src/generated/configuration.ts:49](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/configuration.ts#L49)*

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

___

### `Optional` apiKey

• **apiKey**? : *string | function*

*Defined in [src/generated/configuration.ts:28](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/configuration.ts#L28)*

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

___

### `Optional` basePath

• **basePath**? : *string*

*Defined in [src/generated/configuration.ts:56](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/configuration.ts#L56)*

override base path

**`type`** {string}

**`memberof`** Configuration

___

### `Optional` password

• **password**? : *string*

*Defined in [src/generated/configuration.ts:42](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/configuration.ts#L42)*

parameter for basic security

**`type`** {string}

**`memberof`** Configuration

___

### `Optional` username

• **username**? : *string*

*Defined in [src/generated/configuration.ts:35](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/configuration.ts#L35)*

parameter for basic security

**`type`** {string}

**`memberof`** Configuration

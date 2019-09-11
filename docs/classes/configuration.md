[MailSlurp Client](../README.md) > [Configuration](../classes/configuration.md)

# Class: Configuration

## Hierarchy

**Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [accessToken](configuration.md#accesstoken)
* [apiKey](configuration.md#apikey)
* [baseOptions](configuration.md#baseoptions)
* [basePath](configuration.md#basepath)
* [password](configuration.md#password)
* [username](configuration.md#username)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Configuration**(param?: *[ConfigurationParameters](../interfaces/configurationparameters.md)*): [Configuration](configuration.md)

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/configuration.d.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | [ConfigurationParameters](../interfaces/configurationparameters.md) |

**Returns:** [Configuration](configuration.md)

___

## Properties

<a id="accesstoken"></a>

### `<Optional>` accessToken

**● accessToken**: *`string` \| `function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/configuration.d.ts:47*

parameter for oauth2 security

*__param__*: security name

*__param__*: oauth2 scope

*__memberof__*: Configuration

___
<a id="apikey"></a>

### `<Optional>` apiKey

**● apiKey**: *`string` \| `function`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/configuration.d.ts:26*

parameter for apiKey security

*__param__*: security name

*__memberof__*: Configuration

___
<a id="baseoptions"></a>

### `<Optional>` baseOptions

**● baseOptions**: *`any`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/configuration.d.ts:61*

base options for fetch calls

*__type__*: {any}

*__memberof__*: Configuration

___
<a id="basepath"></a>

### `<Optional>` basePath

**● basePath**: *`string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/configuration.d.ts:54*

override base path

*__type__*: {string}

*__memberof__*: Configuration

___
<a id="password"></a>

### `<Optional>` password

**● password**: *`string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/configuration.d.ts:40*

parameter for basic security

*__type__*: {string}

*__memberof__*: Configuration

___
<a id="username"></a>

### `<Optional>` username

**● username**: *`string`*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/configuration.d.ts:33*

parameter for basic security

*__type__*: {string}

*__memberof__*: Configuration

___


[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/runtime"](../modules/_lib_runtime_.md) › [Configuration](_lib_runtime_.configuration.md)

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](_lib_runtime_.configuration.md#constructor)

### Properties

* [configuration](_lib_runtime_.configuration.md#private-configuration)

### Accessors

* [accessToken](_lib_runtime_.configuration.md#accesstoken)
* [apiKey](_lib_runtime_.configuration.md#apikey)
* [basePath](_lib_runtime_.configuration.md#basepath)
* [credentials](_lib_runtime_.configuration.md#credentials)
* [fetchApi](_lib_runtime_.configuration.md#fetchapi)
* [headers](_lib_runtime_.configuration.md#headers)
* [middleware](_lib_runtime_.configuration.md#middleware)
* [password](_lib_runtime_.configuration.md#password)
* [queryParamsStringify](_lib_runtime_.configuration.md#queryparamsstringify)
* [username](_lib_runtime_.configuration.md#username)

## Constructors

###  constructor

\+ **new Configuration**(`configuration`: [ConfigurationParameters](../interfaces/_lib_runtime_.configurationparameters.md)): *[Configuration](_lib_runtime_.configuration.md)*

*Defined in [src/lib/runtime.ts:163](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L163)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [ConfigurationParameters](../interfaces/_lib_runtime_.configurationparameters.md) |  {} |

**Returns:** *[Configuration](_lib_runtime_.configuration.md)*

## Properties

### `Private` configuration

• **configuration**: *[ConfigurationParameters](../interfaces/_lib_runtime_.configurationparameters.md)*

*Defined in [src/lib/runtime.ts:164](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L164)*

## Accessors

###  accessToken

• **get accessToken**(): *function | undefined*

*Defined in [src/lib/runtime.ts:198](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L198)*

**Returns:** *function | undefined*

___

###  apiKey

• **get apiKey**(): *function | undefined*

*Defined in [src/lib/runtime.ts:190](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L190)*

**Returns:** *function | undefined*

___

###  basePath

• **get basePath**(): *string*

*Defined in [src/lib/runtime.ts:166](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L166)*

**Returns:** *string*

___

###  credentials

• **get credentials**(): *RequestCredentials | undefined*

*Defined in [src/lib/runtime.ts:214](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L214)*

**Returns:** *RequestCredentials | undefined*

___

###  fetchApi

• **get fetchApi**(): *[FetchAPI](../modules/_lib_runtime_.md#fetchapi)*

*Defined in [src/lib/runtime.ts:170](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L170)*

**Returns:** *[FetchAPI](../modules/_lib_runtime_.md#fetchapi)*

___

###  headers

• **get headers**(): *[HTTPHeaders](../modules/_lib_runtime_.md#httpheaders) | undefined*

*Defined in [src/lib/runtime.ts:210](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L210)*

**Returns:** *[HTTPHeaders](../modules/_lib_runtime_.md#httpheaders) | undefined*

___

###  middleware

• **get middleware**(): *[Middleware](../interfaces/_lib_runtime_.middleware.md)[]*

*Defined in [src/lib/runtime.ts:174](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L174)*

**Returns:** *[Middleware](../interfaces/_lib_runtime_.middleware.md)[]*

___

###  password

• **get password**(): *string | undefined*

*Defined in [src/lib/runtime.ts:186](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L186)*

**Returns:** *string | undefined*

___

###  queryParamsStringify

• **get queryParamsStringify**(): *function*

*Defined in [src/lib/runtime.ts:178](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L178)*

**Returns:** *function*

▸ (`params`: [HTTPQuery](../modules/_lib_runtime_.md#httpquery)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [HTTPQuery](../modules/_lib_runtime_.md#httpquery) |

___

###  username

• **get username**(): *string | undefined*

*Defined in [src/lib/runtime.ts:182](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L182)*

**Returns:** *string | undefined*

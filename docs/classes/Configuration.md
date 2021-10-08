[MailSlurp JS](../README.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Accessors

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [basePath](Configuration.md#basepath)
- [credentials](Configuration.md#credentials)
- [fetchApi](Configuration.md#fetchapi)
- [headers](Configuration.md#headers)
- [middleware](Configuration.md#middleware)
- [password](Configuration.md#password)
- [queryParamsStringify](Configuration.md#queryparamsstringify)
- [username](Configuration.md#username)

## Constructors

### constructor

• **new Configuration**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

## Accessors

### accessToken

• `get` **accessToken**(): (`name?`: `string`, `scopes?`: `string`[]) => `string` \| `Promise`<`string`\>

#### Returns

`fn`

▸ (`name?`, `scopes?`): `string` \| `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `scopes?` | `string`[] |

##### Returns

`string` \| `Promise`<`string`\>

___

### apiKey

• `get` **apiKey**(): (`name`: `string`) => `string`

#### Returns

`fn`

▸ (`name`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`string`

___

### basePath

• `get` **basePath**(): `string`

#### Returns

`string`

___

### credentials

• `get` **credentials**(): `RequestCredentials`

#### Returns

`RequestCredentials`

___

### fetchApi

• `get` **fetchApi**(): (`input`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Returns

`fn`

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

___

### headers

• `get` **headers**(): [`HTTPHeaders`](../README.md#httpheaders)

#### Returns

[`HTTPHeaders`](../README.md#httpheaders)

___

### middleware

• `get` **middleware**(): [`Middleware`](../interfaces/Middleware.md)[]

#### Returns

[`Middleware`](../interfaces/Middleware.md)[]

___

### password

• `get` **password**(): `string`

#### Returns

`string`

___

### queryParamsStringify

• `get` **queryParamsStringify**(): (`params`: [`HTTPQuery`](../README.md#httpquery)) => `string`

#### Returns

`fn`

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../README.md#httpquery) |

##### Returns

`string`

___

### username

• `get` **username**(): `string`

#### Returns

`string`

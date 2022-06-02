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

### <a id="constructor" name="constructor"></a> constructor

• **new Configuration**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

## Accessors

### <a id="accesstoken" name="accesstoken"></a> accessToken

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

### <a id="apikey" name="apikey"></a> apiKey

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

### <a id="basepath" name="basepath"></a> basePath

• `get` **basePath**(): `string`

#### Returns

`string`

___

### <a id="credentials" name="credentials"></a> credentials

• `get` **credentials**(): `RequestCredentials`

#### Returns

`RequestCredentials`

___

### <a id="fetchapi" name="fetchapi"></a> fetchApi

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

### <a id="headers" name="headers"></a> headers

• `get` **headers**(): [`HTTPHeaders`](../README.md#httpheaders)

#### Returns

[`HTTPHeaders`](../README.md#httpheaders)

___

### <a id="middleware" name="middleware"></a> middleware

• `get` **middleware**(): [`Middleware`](../interfaces/Middleware.md)[]

#### Returns

[`Middleware`](../interfaces/Middleware.md)[]

___

### <a id="password" name="password"></a> password

• `get` **password**(): `string`

#### Returns

`string`

___

### <a id="queryparamsstringify" name="queryparamsstringify"></a> queryParamsStringify

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

### <a id="username" name="username"></a> username

• `get` **username**(): `string`

#### Returns

`string`

# Interface: ConfigurationParameters

## Table of contents

### Properties

- [accessToken](ConfigurationParameters.md#accesstoken)
- [apiKey](ConfigurationParameters.md#apikey)
- [basePath](ConfigurationParameters.md#basepath)
- [credentials](ConfigurationParameters.md#credentials)
- [fetchApi](ConfigurationParameters.md#fetchapi)
- [headers](ConfigurationParameters.md#headers)
- [middleware](ConfigurationParameters.md#middleware)
- [password](ConfigurationParameters.md#password)
- [username](ConfigurationParameters.md#username)

### Methods

- [queryParamsStringify](ConfigurationParameters.md#queryparamsstringify)

## Properties

### <a id="accesstoken" name="accesstoken"></a> accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| `Promise`<`string`\>

___

### <a id="apikey" name="apikey"></a> apiKey

• `Optional` **apiKey**: `string` \| (`name`: `string`) => `string`

___

### <a id="basepath" name="basepath"></a> basePath

• `Optional` **basePath**: `string`

___

### <a id="credentials" name="credentials"></a> credentials

• `Optional` **credentials**: `RequestCredentials`

___

### <a id="fetchapi" name="fetchapi"></a> fetchApi

• `Optional` **fetchApi**: (`input`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Type declaration

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

• `Optional` **headers**: [`HTTPHeaders`](../README.md#httpheaders)

___

### <a id="middleware" name="middleware"></a> middleware

• `Optional` **middleware**: [`Middleware`](Middleware.md)[]

___

### <a id="password" name="password"></a> password

• `Optional` **password**: `string`

___

### <a id="username" name="username"></a> username

• `Optional` **username**: `string`

## Methods

### <a id="queryparamsstringify" name="queryparamsstringify"></a> queryParamsStringify

▸ `Optional` **queryParamsStringify**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../README.md#httpquery) |

#### Returns

`string`

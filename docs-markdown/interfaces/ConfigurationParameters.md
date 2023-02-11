[MailSlurp JS](../README.md) / ConfigurationParameters

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
- [queryParamsStringify](ConfigurationParameters.md#queryparamsstringify)
- [username](ConfigurationParameters.md#username)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| `Promise`<`string`\>

___

### apiKey

• `Optional` **apiKey**: `string` \| (`name`: `string`) => `string`

___

### basePath

• `Optional` **basePath**: `string`

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

___

### fetchApi

• `Optional` **fetchApi**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Type declaration

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

___

### headers

• `Optional` **headers**: [`HTTPHeaders`](../README.md#httpheaders)

___

### middleware

• `Optional` **middleware**: [`Middleware`](Middleware.md)[]

___

### password

• `Optional` **password**: `string`

___

### queryParamsStringify

• `Optional` **queryParamsStringify**: (`params`: [`HTTPQuery`](../README.md#httpquery)) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../README.md#httpquery) |

##### Returns

`string`

___

### username

• `Optional` **username**: `string`

[MailSlurp JS](../README.md) / AuthV2Api

# Class: AuthV2Api

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AuthV2Api`**

## Table of contents

### Constructors

- [constructor](AuthV2Api.md#constructor)

### Properties

- [configuration](AuthV2Api.md#configuration)

### Methods

- [authV2AccountSwitch](AuthV2Api.md#authv2accountswitch)
- [authV2AccountSwitchRaw](AuthV2Api.md#authv2accountswitchraw)
- [authV2Bootstrap](AuthV2Api.md#authv2bootstrap)
- [authV2BootstrapRaw](AuthV2Api.md#authv2bootstrapraw)
- [authV2EnvironmentSwitch](AuthV2Api.md#authv2environmentswitch)
- [authV2EnvironmentSwitchRaw](AuthV2Api.md#authv2environmentswitchraw)
- [authV2Logout](AuthV2Api.md#authv2logout)
- [authV2LogoutRaw](AuthV2Api.md#authv2logoutraw)
- [authV2PasswordLogin](AuthV2Api.md#authv2passwordlogin)
- [authV2PasswordLoginRaw](AuthV2Api.md#authv2passwordloginraw)
- [authV2ProviderCallback](AuthV2Api.md#authv2providercallback)
- [authV2ProviderCallbackRaw](AuthV2Api.md#authv2providercallbackraw)
- [emailCallback](AuthV2Api.md#emailcallback)
- [emailCallbackComplete](AuthV2Api.md#emailcallbackcomplete)
- [emailCallbackCompleteRaw](AuthV2Api.md#emailcallbackcompleteraw)
- [emailCallbackContinue](AuthV2Api.md#emailcallbackcontinue)
- [emailCallbackContinueRaw](AuthV2Api.md#emailcallbackcontinueraw)
- [emailCallbackContinueScript](AuthV2Api.md#emailcallbackcontinuescript)
- [emailCallbackContinueScriptRaw](AuthV2Api.md#emailcallbackcontinuescriptraw)
- [emailCallbackHead](AuthV2Api.md#emailcallbackhead)
- [emailCallbackHeadRaw](AuthV2Api.md#emailcallbackheadraw)
- [emailCallbackRaw](AuthV2Api.md#emailcallbackraw)
- [request](AuthV2Api.md#request)
- [withMiddleware](AuthV2Api.md#withmiddleware)
- [withPostMiddleware](AuthV2Api.md#withpostmiddleware)
- [withPreMiddleware](AuthV2Api.md#withpremiddleware)

## Constructors

### constructor

• **new AuthV2Api**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### authV2AccountSwitch

▸ **authV2AccountSwitch**(`requestParameters`, `initOverrides?`): `Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

Switch the account bound to an Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2AccountSwitchRequest`](../interfaces/AuthV2AccountSwitchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

___

### authV2AccountSwitchRaw

▸ **authV2AccountSwitchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

Switch the account bound to an Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2AccountSwitchRequest`](../interfaces/AuthV2AccountSwitchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

___

### authV2Bootstrap

▸ **authV2Bootstrap**(`requestParameters`, `initOverrides?`): `Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

Bootstrap an existing Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2BootstrapRequest`](../interfaces/AuthV2BootstrapRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

___

### authV2BootstrapRaw

▸ **authV2BootstrapRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

Bootstrap an existing Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2BootstrapRequest`](../interfaces/AuthV2BootstrapRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

___

### authV2EnvironmentSwitch

▸ **authV2EnvironmentSwitch**(`requestParameters`, `initOverrides?`): `Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

Switch the environment bound to an Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2EnvironmentSwitchRequest`](../interfaces/AuthV2EnvironmentSwitchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

___

### authV2EnvironmentSwitchRaw

▸ **authV2EnvironmentSwitchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

Switch the environment bound to an Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2EnvironmentSwitchRequest`](../interfaces/AuthV2EnvironmentSwitchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

___

### authV2Logout

▸ **authV2Logout**(`initOverrides?`): `Promise`<`void`\>

Revoke an Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### authV2LogoutRaw

▸ **authV2LogoutRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Revoke an Auth v2 session

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### authV2PasswordLogin

▸ **authV2PasswordLogin**(`requestParameters`, `initOverrides?`): `Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

Create an Auth v2 session using a password

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2PasswordLoginRequest`](../interfaces/AuthV2PasswordLoginRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>

___

### authV2PasswordLoginRaw

▸ **authV2PasswordLoginRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

Create an Auth v2 session using a password

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2PasswordLoginRequest`](../interfaces/AuthV2PasswordLoginRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AuthV2BootstrapDto`](../interfaces/AuthV2BootstrapDto.md)\>\>

___

### authV2ProviderCallback

▸ **authV2ProviderCallback**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Redeem a staging provider handoff and continue to the app

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2ProviderCallbackRequest`](../interfaces/AuthV2ProviderCallbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### authV2ProviderCallbackRaw

▸ **authV2ProviderCallbackRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Redeem a staging provider handoff and continue to the app

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AuthV2ProviderCallbackRequest`](../interfaces/AuthV2ProviderCallbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### emailCallback

▸ **emailCallback**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmailCallbackRequest`](../interfaces/EmailCallbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### emailCallbackComplete

▸ **emailCallbackComplete**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmailCallbackCompleteRequest`](../interfaces/EmailCallbackCompleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### emailCallbackCompleteRaw

▸ **emailCallbackCompleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmailCallbackCompleteRequest`](../interfaces/EmailCallbackCompleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### emailCallbackContinue

▸ **emailCallbackContinue**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmailCallbackContinueRequest`](../interfaces/EmailCallbackContinueRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### emailCallbackContinueRaw

▸ **emailCallbackContinueRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmailCallbackContinueRequest`](../interfaces/EmailCallbackContinueRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### emailCallbackContinueScript

▸ **emailCallbackContinueScript**(`initOverrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### emailCallbackContinueScriptRaw

▸ **emailCallbackContinueScriptRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### emailCallbackHead

▸ **emailCallbackHead**(`initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### emailCallbackHeadRaw

▸ **emailCallbackHeadRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### emailCallbackRaw

▸ **emailCallbackRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`EmailCallbackRequest`](../interfaces/EmailCallbackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

- **`BaseAPI`**

  ↳ [`AliasControllerApi`](AliasControllerApi.md)

  ↳ [`AttachmentControllerApi`](AttachmentControllerApi.md)

  ↳ [`BounceControllerApi`](BounceControllerApi.md)

  ↳ [`BulkActionsControllerApi`](BulkActionsControllerApi.md)

  ↳ [`CommonActionsControllerApi`](CommonActionsControllerApi.md)

  ↳ [`ContactControllerApi`](ContactControllerApi.md)

  ↳ [`DomainControllerApi`](DomainControllerApi.md)

  ↳ [`EmailControllerApi`](EmailControllerApi.md)

  ↳ [`EmailVerificationControllerApi`](EmailVerificationControllerApi.md)

  ↳ [`ExpiredControllerApi`](ExpiredControllerApi.md)

  ↳ [`ExportControllerApi`](ExportControllerApi.md)

  ↳ [`FormControllerApi`](FormControllerApi.md)

  ↳ [`GroupControllerApi`](GroupControllerApi.md)

  ↳ [`InboxControllerApi`](InboxControllerApi.md)

  ↳ [`InboxForwarderControllerApi`](InboxForwarderControllerApi.md)

  ↳ [`InboxRulesetControllerApi`](InboxRulesetControllerApi.md)

  ↳ [`MailServerControllerApi`](MailServerControllerApi.md)

  ↳ [`MissedEmailControllerApi`](MissedEmailControllerApi.md)

  ↳ [`PhoneControllerApi`](PhoneControllerApi.md)

  ↳ [`SentEmailsControllerApi`](SentEmailsControllerApi.md)

  ↳ [`SmsControllerApi`](SmsControllerApi.md)

  ↳ [`TemplateControllerApi`](TemplateControllerApi.md)

  ↳ [`TrackingControllerApi`](TrackingControllerApi.md)

  ↳ [`WaitForControllerApi`](WaitForControllerApi.md)

  ↳ [`WebhookControllerApi`](WebhookControllerApi.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [configuration](BaseAPI.md#configuration)
- [middleware](BaseAPI.md#middleware)

### Methods

- [clone](BaseAPI.md#clone)
- [createFetchParams](BaseAPI.md#createfetchparams)
- [fetchApi](BaseAPI.md#fetchapi)
- [request](BaseAPI.md#request)
- [withMiddleware](BaseAPI.md#withmiddleware)
- [withPostMiddleware](BaseAPI.md#withpostmiddleware)
- [withPreMiddleware](BaseAPI.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new BaseAPI**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

___

### <a id="middleware" name="middleware"></a> middleware

• `Private` **middleware**: [`Middleware`](../interfaces/Middleware.md)[]

## Methods

### <a id="clone" name="clone"></a> clone

▸ `Private` **clone**<`T`\>(`this`): `T`

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`T`

___

### <a id="createfetchparams" name="createfetchparams"></a> createFetchParams

▸ `Private` **createFetchParams**(`context`, `initOverrides?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `init` | { `body`: `any` ; `cache?`: `RequestCache` ; `credentials`: `RequestCredentials` ; `headers`: [`HTTPHeaders`](../README.md#httpheaders) \| `HeadersInit` = headers; `integrity?`: `string` ; `keepalive?`: `boolean` ; `method`: `string` = context.method; `mode?`: `RequestMode` ; `redirect?`: `RequestRedirect` ; `referrer?`: `string` ; `referrerPolicy?`: `ReferrerPolicy` ; `signal?`: `AbortSignal` ; `window?`: `any`  } |
| `init.body` | `any` |
| `init.cache?` | `RequestCache` |
| `init.credentials` | `RequestCredentials` |
| `init.headers` | [`HTTPHeaders`](../README.md#httpheaders) \| `HeadersInit` |
| `init.integrity?` | `string` |
| `init.keepalive?` | `boolean` |
| `init.method` | `string` |
| `init.mode?` | `RequestMode` |
| `init.redirect?` | `RequestRedirect` |
| `init.referrer?` | `string` |
| `init.referrerPolicy?` | `ReferrerPolicy` |
| `init.signal?` | `AbortSignal` |
| `init.window?` | `any` |
| `url` | `string` |

___

### <a id="fetchapi" name="fetchapi"></a> fetchApi

▸ `Private` **fetchApi**(`url`, `init`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `init` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

___

### <a id="request" name="request"></a> request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

___

### <a id="withmiddleware" name="withmiddleware"></a> withMiddleware

▸ **withMiddleware**<`T`\>(`this`, ...`middlewares`): `T`

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

___

### <a id="withpostmiddleware" name="withpostmiddleware"></a> withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, ...`postMiddlewares`): `T`

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

___

### <a id="withpremiddleware" name="withpremiddleware"></a> withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, ...`preMiddlewares`): `T`

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

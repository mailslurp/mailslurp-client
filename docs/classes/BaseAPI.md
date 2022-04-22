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

  ↳ [`SentEmailsControllerApi`](SentEmailsControllerApi.md)

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

### constructor

• **new BaseAPI**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

___

### middleware

• `Private` **middleware**: [`Middleware`](../interfaces/Middleware.md)[]

## Methods

### clone

▸ `Private` **clone**<`T`\>(): `T`

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Returns

`T`

___

### createFetchParams

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
| `init` | `Object` |
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

### fetchApi

▸ `Private` **fetchApi**(`url`, `init`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `init` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

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

___

### withMiddleware

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

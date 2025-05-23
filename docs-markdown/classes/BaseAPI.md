[MailSlurp JS](../README.md) / BaseAPI

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

- **`BaseAPI`**

  ↳ [`AIControllerApi`](AIControllerApi.md)

  ↳ [`AliasControllerApi`](AliasControllerApi.md)

  ↳ [`AttachmentControllerApi`](AttachmentControllerApi.md)

  ↳ [`BounceControllerApi`](BounceControllerApi.md)

  ↳ [`BulkActionsControllerApi`](BulkActionsControllerApi.md)

  ↳ [`CommonActionsControllerApi`](CommonActionsControllerApi.md)

  ↳ [`ConnectorControllerApi`](ConnectorControllerApi.md)

  ↳ [`ConsentControllerApi`](ConsentControllerApi.md)

  ↳ [`ContactControllerApi`](ContactControllerApi.md)

  ↳ [`DomainControllerApi`](DomainControllerApi.md)

  ↳ [`EmailControllerApi`](EmailControllerApi.md)

  ↳ [`EmailVerificationControllerApi`](EmailVerificationControllerApi.md)

  ↳ [`ExpiredControllerApi`](ExpiredControllerApi.md)

  ↳ [`ExportControllerApi`](ExportControllerApi.md)

  ↳ [`FormControllerApi`](FormControllerApi.md)

  ↳ [`GroupControllerApi`](GroupControllerApi.md)

  ↳ [`GuestPortalControllerApi`](GuestPortalControllerApi.md)

  ↳ [`ImapControllerApi`](ImapControllerApi.md)

  ↳ [`InboxControllerApi`](InboxControllerApi.md)

  ↳ [`InboxForwarderControllerApi`](InboxForwarderControllerApi.md)

  ↳ [`InboxReplierControllerApi`](InboxReplierControllerApi.md)

  ↳ [`InboxRulesetControllerApi`](InboxRulesetControllerApi.md)

  ↳ [`MailServerControllerApi`](MailServerControllerApi.md)

  ↳ [`MissedEmailControllerApi`](MissedEmailControllerApi.md)

  ↳ [`OAuthConnectionApi`](OAuthConnectionApi.md)

  ↳ [`PhoneControllerApi`](PhoneControllerApi.md)

  ↳ [`SentEmailsControllerApi`](SentEmailsControllerApi.md)

  ↳ [`SmsControllerApi`](SmsControllerApi.md)

  ↳ [`TemplateControllerApi`](TemplateControllerApi.md)

  ↳ [`ToolsControllerApi`](ToolsControllerApi.md)

  ↳ [`TrackingControllerApi`](TrackingControllerApi.md)

  ↳ [`UserControllerApi`](UserControllerApi.md)

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
| `init` | { `body`: `any` ; `cache?`: `RequestCache` ; `credentials`: `RequestCredentials` ; `headers`: [`HTTPHeaders`](../README.md#httpheaders) \| [`string`, `string`][] \| `Headers` = headers; `integrity?`: `string` ; `keepalive?`: `boolean` ; `method`: `string` = context.method; `mode?`: `RequestMode` ; `redirect?`: `RequestRedirect` ; `referrer?`: `string` ; `referrerPolicy?`: `ReferrerPolicy` ; `signal?`: `AbortSignal` ; `window?`: ``null``  } |
| `init.body` | `any` |
| `init.cache?` | `RequestCache` |
| `init.credentials` | `RequestCredentials` |
| `init.headers` | [`HTTPHeaders`](../README.md#httpheaders) \| [`string`, `string`][] \| `Headers` |
| `init.integrity?` | `string` |
| `init.keepalive?` | `boolean` |
| `init.method` | `string` |
| `init.mode?` | `RequestMode` |
| `init.redirect?` | `RequestRedirect` |
| `init.referrer?` | `string` |
| `init.referrerPolicy?` | `ReferrerPolicy` |
| `init.signal?` | `AbortSignal` |
| `init.window?` | ``null`` |
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

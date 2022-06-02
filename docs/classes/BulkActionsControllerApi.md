# Class: BulkActionsControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BulkActionsControllerApi`**

## Table of contents

### Constructors

- [constructor](BulkActionsControllerApi.md#constructor)

### Properties

- [configuration](BulkActionsControllerApi.md#configuration)

### Methods

- [bulkCreateInboxes](BulkActionsControllerApi.md#bulkcreateinboxes)
- [bulkCreateInboxesRaw](BulkActionsControllerApi.md#bulkcreateinboxesraw)
- [bulkDeleteInboxes](BulkActionsControllerApi.md#bulkdeleteinboxes)
- [bulkDeleteInboxesRaw](BulkActionsControllerApi.md#bulkdeleteinboxesraw)
- [bulkSendEmails](BulkActionsControllerApi.md#bulksendemails)
- [bulkSendEmailsRaw](BulkActionsControllerApi.md#bulksendemailsraw)
- [request](BulkActionsControllerApi.md#request)
- [withMiddleware](BulkActionsControllerApi.md#withmiddleware)
- [withPostMiddleware](BulkActionsControllerApi.md#withpostmiddleware)
- [withPreMiddleware](BulkActionsControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new BulkActionsControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### <a id="bulkcreateinboxes" name="bulkcreateinboxes"></a> bulkCreateInboxes

▸ **bulkCreateInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

Bulk create Inboxes (email addresses)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkCreateInboxesRequest`](../interfaces/BulkCreateInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

___

### <a id="bulkcreateinboxesraw" name="bulkcreateinboxesraw"></a> bulkCreateInboxesRaw

▸ **bulkCreateInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)[]\>\>

Bulk create Inboxes (email addresses)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkCreateInboxesRequest`](../interfaces/BulkCreateInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)[]\>\>

___

### <a id="bulkdeleteinboxes" name="bulkdeleteinboxes"></a> bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Bulk Delete Inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkDeleteInboxesRequest`](../interfaces/BulkDeleteInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="bulkdeleteinboxesraw" name="bulkdeleteinboxesraw"></a> bulkDeleteInboxesRaw

▸ **bulkDeleteInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Bulk Delete Inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkDeleteInboxesRequest`](../interfaces/BulkDeleteInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="bulksendemails" name="bulksendemails"></a> bulkSendEmails

▸ **bulkSendEmails**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Bulk Send Emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkSendEmailsRequest`](../interfaces/BulkSendEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="bulksendemailsraw" name="bulksendemailsraw"></a> bulkSendEmailsRaw

▸ **bulkSendEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Bulk Send Emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`BulkSendEmailsRequest`](../interfaces/BulkSendEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

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

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

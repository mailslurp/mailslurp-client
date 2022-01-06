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

### constructor

• **new BulkActionsControllerApi**(`configuration?`)

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

### bulkCreateInboxes

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

### bulkCreateInboxesRaw

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

### bulkDeleteInboxes

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

### bulkDeleteInboxesRaw

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

### bulkSendEmails

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

### bulkSendEmailsRaw

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

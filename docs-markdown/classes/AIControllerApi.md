[MailSlurp JS](../README.md) / AIControllerApi

# Class: AIControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AIControllerApi`**

## Table of contents

### Constructors

- [constructor](AIControllerApi.md#constructor)

### Properties

- [configuration](AIControllerApi.md#configuration)

### Methods

- [generateStructuredContentFromAttachment](AIControllerApi.md#generatestructuredcontentfromattachment)
- [generateStructuredContentFromAttachmentRaw](AIControllerApi.md#generatestructuredcontentfromattachmentraw)
- [generateStructuredContentFromEmail](AIControllerApi.md#generatestructuredcontentfromemail)
- [generateStructuredContentFromEmailRaw](AIControllerApi.md#generatestructuredcontentfromemailraw)
- [request](AIControllerApi.md#request)
- [validateStructuredOutputSchema](AIControllerApi.md#validatestructuredoutputschema)
- [validateStructuredOutputSchemaRaw](AIControllerApi.md#validatestructuredoutputschemaraw)
- [withMiddleware](AIControllerApi.md#withmiddleware)
- [withPostMiddleware](AIControllerApi.md#withpostmiddleware)
- [withPreMiddleware](AIControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new AIControllerApi**(`configuration?`)

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

### generateStructuredContentFromAttachment

▸ **generateStructuredContentFromAttachment**(`requestParameters`, `initOverrides?`): `Promise`<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>

Use output schemas to extract data from an attachment using AI
Generate structured content for an attachment

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromAttachmentRequest`](../interfaces/GenerateStructuredContentFromAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>

___

### generateStructuredContentFromAttachmentRaw

▸ **generateStructuredContentFromAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>\>

Use output schemas to extract data from an attachment using AI
Generate structured content for an attachment

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromAttachmentRequest`](../interfaces/GenerateStructuredContentFromAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>\>

___

### generateStructuredContentFromEmail

▸ **generateStructuredContentFromEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>

Use output schemas to extract data from an email using AI
Generate structured content for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromEmailRequest`](../interfaces/GenerateStructuredContentFromEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>

___

### generateStructuredContentFromEmailRaw

▸ **generateStructuredContentFromEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>\>

Use output schemas to extract data from an email using AI
Generate structured content for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromEmailRequest`](../interfaces/GenerateStructuredContentFromEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResult`](../interfaces/StructuredContentResult.md)\>\>

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

### validateStructuredOutputSchema

▸ **validateStructuredOutputSchema**(`requestParameters`, `initOverrides?`): `Promise`<[`StructuredOutputSchemaValidation`](../interfaces/StructuredOutputSchemaValidation.md)\>

Check if a schema is valid and can be used to extract data using AI
Validate structured content schema

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidateStructuredOutputSchemaRequest`](../interfaces/ValidateStructuredOutputSchemaRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`StructuredOutputSchemaValidation`](../interfaces/StructuredOutputSchemaValidation.md)\>

___

### validateStructuredOutputSchemaRaw

▸ **validateStructuredOutputSchemaRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredOutputSchemaValidation`](../interfaces/StructuredOutputSchemaValidation.md)\>\>

Check if a schema is valid and can be used to extract data using AI
Validate structured content schema

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidateStructuredOutputSchemaRequest`](../interfaces/ValidateStructuredOutputSchemaRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredOutputSchemaValidation`](../interfaces/StructuredOutputSchemaValidation.md)\>\>

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

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

- [createTransformer](AIControllerApi.md#createtransformer)
- [createTransformer1](AIControllerApi.md#createtransformer1)
- [createTransformer1Raw](AIControllerApi.md#createtransformer1raw)
- [createTransformerMappings](AIControllerApi.md#createtransformermappings)
- [createTransformerMappingsRaw](AIControllerApi.md#createtransformermappingsraw)
- [createTransformerRaw](AIControllerApi.md#createtransformerraw)
- [deleteTransformer](AIControllerApi.md#deletetransformer)
- [deleteTransformerMapping](AIControllerApi.md#deletetransformermapping)
- [deleteTransformerMappingRaw](AIControllerApi.md#deletetransformermappingraw)
- [deleteTransformerRaw](AIControllerApi.md#deletetransformerraw)
- [deleteTransformers](AIControllerApi.md#deletetransformers)
- [deleteTransformersRaw](AIControllerApi.md#deletetransformersraw)
- [generateStructuredContentFromAttachment](AIControllerApi.md#generatestructuredcontentfromattachment)
- [generateStructuredContentFromAttachmentRaw](AIControllerApi.md#generatestructuredcontentfromattachmentraw)
- [generateStructuredContentFromEmail](AIControllerApi.md#generatestructuredcontentfromemail)
- [generateStructuredContentFromEmailRaw](AIControllerApi.md#generatestructuredcontentfromemailraw)
- [generateStructuredContentFromSms](AIControllerApi.md#generatestructuredcontentfromsms)
- [generateStructuredContentFromSmsRaw](AIControllerApi.md#generatestructuredcontentfromsmsraw)
- [getTransformer](AIControllerApi.md#gettransformer)
- [getTransformerMapping](AIControllerApi.md#gettransformermapping)
- [getTransformerMappingRaw](AIControllerApi.md#gettransformermappingraw)
- [getTransformerMappings](AIControllerApi.md#gettransformermappings)
- [getTransformerMappingsRaw](AIControllerApi.md#gettransformermappingsraw)
- [getTransformerRaw](AIControllerApi.md#gettransformerraw)
- [getTransformerResult](AIControllerApi.md#gettransformerresult)
- [getTransformerResultRaw](AIControllerApi.md#gettransformerresultraw)
- [getTransformerResults](AIControllerApi.md#gettransformerresults)
- [getTransformerResultsRaw](AIControllerApi.md#gettransformerresultsraw)
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

### createTransformer

▸ **createTransformer**(`requestParameters`, `initOverrides?`): `Promise`<[`PageAITransformProjection`](../interfaces/PageAITransformProjection.md)\>

List all AI transforms
List transformers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTransformerRequest`](../interfaces/CreateTransformerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageAITransformProjection`](../interfaces/PageAITransformProjection.md)\>

___

### createTransformer1

▸ **createTransformer1**(`requestParameters`, `initOverrides?`): `Promise`<[`AITransformDto`](../interfaces/AITransformDto.md)\>

Save an AI transform instructions and schema for use with webhooks and automations
Create a transformer for reuse in automations

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTransformer1Request`](../interfaces/CreateTransformer1Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AITransformDto`](../interfaces/AITransformDto.md)\>

___

### createTransformer1Raw

▸ **createTransformer1Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformDto`](../interfaces/AITransformDto.md)\>\>

Save an AI transform instructions and schema for use with webhooks and automations
Create a transformer for reuse in automations

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTransformer1Request`](../interfaces/CreateTransformer1Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformDto`](../interfaces/AITransformDto.md)\>\>

___

### createTransformerMappings

▸ **createTransformerMappings**(`requestParameters`, `initOverrides?`): `Promise`<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>

Create AI transformer mappings to other entities
Create transformer mapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTransformerMappingsRequest`](../interfaces/CreateTransformerMappingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>

___

### createTransformerMappingsRaw

▸ **createTransformerMappingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>\>

Create AI transformer mappings to other entities
Create transformer mapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTransformerMappingsRequest`](../interfaces/CreateTransformerMappingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>\>

___

### createTransformerRaw

▸ **createTransformerRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAITransformProjection`](../interfaces/PageAITransformProjection.md)\>\>

List all AI transforms
List transformers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTransformerRequest`](../interfaces/CreateTransformerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAITransformProjection`](../interfaces/PageAITransformProjection.md)\>\>

___

### deleteTransformer

▸ **deleteTransformer**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an AI transformer and schemas by ID
Delete a transformer

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTransformerRequest`](../interfaces/DeleteTransformerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteTransformerMapping

▸ **deleteTransformerMapping**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an AI transformer mapping
Delete transformer mapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTransformerMappingRequest`](../interfaces/DeleteTransformerMappingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteTransformerMappingRaw

▸ **deleteTransformerMappingRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an AI transformer mapping
Delete transformer mapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTransformerMappingRequest`](../interfaces/DeleteTransformerMappingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteTransformerRaw

▸ **deleteTransformerRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an AI transformer and schemas by ID
Delete a transformer

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTransformerRequest`](../interfaces/DeleteTransformerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteTransformers

▸ **deleteTransformers**(`initOverrides?`): `Promise`<`void`\>

Delete all AI transformers and schemas
Delete all transformers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteTransformersRaw

▸ **deleteTransformersRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete all AI transformers and schemas
Delete all transformers

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### generateStructuredContentFromAttachment

▸ **generateStructuredContentFromAttachment**(`requestParameters`, `initOverrides?`): `Promise`<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>

Use output schemas to extract data from an attachment using AI
Generate structured content for an attachment

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromAttachmentRequest`](../interfaces/GenerateStructuredContentFromAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>

___

### generateStructuredContentFromAttachmentRaw

▸ **generateStructuredContentFromAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>\>

Use output schemas to extract data from an attachment using AI
Generate structured content for an attachment

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromAttachmentRequest`](../interfaces/GenerateStructuredContentFromAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>\>

___

### generateStructuredContentFromEmail

▸ **generateStructuredContentFromEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>

Use output schemas to extract data from an email using AI
Generate structured content for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromEmailRequest`](../interfaces/GenerateStructuredContentFromEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>

___

### generateStructuredContentFromEmailRaw

▸ **generateStructuredContentFromEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>\>

Use output schemas to extract data from an email using AI
Generate structured content for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromEmailRequest`](../interfaces/GenerateStructuredContentFromEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>\>

___

### generateStructuredContentFromSms

▸ **generateStructuredContentFromSms**(`requestParameters`, `initOverrides?`): `Promise`<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>

Use output schemas to extract data from an SMS using AI
Generate structured content for a TXT message

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromSmsRequest`](../interfaces/GenerateStructuredContentFromSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>

___

### generateStructuredContentFromSmsRaw

▸ **generateStructuredContentFromSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>\>

Use output schemas to extract data from an SMS using AI
Generate structured content for a TXT message

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GenerateStructuredContentFromSmsRequest`](../interfaces/GenerateStructuredContentFromSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`StructuredContentResultDto`](../interfaces/StructuredContentResultDto.md)\>\>

___

### getTransformer

▸ **getTransformer**(`requestParameters`, `initOverrides?`): `Promise`<[`AITransformDto`](../interfaces/AITransformDto.md)\>

Get AI transformer and schemas by ID
Get a transformer

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerRequest`](../interfaces/GetTransformerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AITransformDto`](../interfaces/AITransformDto.md)\>

___

### getTransformerMapping

▸ **getTransformerMapping**(`requestParameters`, `initOverrides?`): `Promise`<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>

Get an AI transformer mapping
Get transformer mapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerMappingRequest`](../interfaces/GetTransformerMappingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>

___

### getTransformerMappingRaw

▸ **getTransformerMappingRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>\>

Get an AI transformer mapping
Get transformer mapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerMappingRequest`](../interfaces/GetTransformerMappingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformMappingDto`](../interfaces/AITransformMappingDto.md)\>\>

___

### getTransformerMappings

▸ **getTransformerMappings**(`requestParameters`, `initOverrides?`): `Promise`<[`PageAITransformMappingProjection`](../interfaces/PageAITransformMappingProjection.md)\>

Get AI transformer mappings to other entities
Get transformer mappings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerMappingsRequest`](../interfaces/GetTransformerMappingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageAITransformMappingProjection`](../interfaces/PageAITransformMappingProjection.md)\>

___

### getTransformerMappingsRaw

▸ **getTransformerMappingsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAITransformMappingProjection`](../interfaces/PageAITransformMappingProjection.md)\>\>

Get AI transformer mappings to other entities
Get transformer mappings

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerMappingsRequest`](../interfaces/GetTransformerMappingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAITransformMappingProjection`](../interfaces/PageAITransformMappingProjection.md)\>\>

___

### getTransformerRaw

▸ **getTransformerRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformDto`](../interfaces/AITransformDto.md)\>\>

Get AI transformer and schemas by ID
Get a transformer

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerRequest`](../interfaces/GetTransformerRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformDto`](../interfaces/AITransformDto.md)\>\>

___

### getTransformerResult

▸ **getTransformerResult**(`requestParameters`, `initOverrides?`): `Promise`<[`AITransformResultDto`](../interfaces/AITransformResultDto.md)\>

Get AI transformer result
Get transformer result

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerResultRequest`](../interfaces/GetTransformerResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AITransformResultDto`](../interfaces/AITransformResultDto.md)\>

___

### getTransformerResultRaw

▸ **getTransformerResultRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformResultDto`](../interfaces/AITransformResultDto.md)\>\>

Get AI transformer result
Get transformer result

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerResultRequest`](../interfaces/GetTransformerResultRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AITransformResultDto`](../interfaces/AITransformResultDto.md)\>\>

___

### getTransformerResults

▸ **getTransformerResults**(`requestParameters`, `initOverrides?`): `Promise`<[`PageAITransformResultProjection`](../interfaces/PageAITransformResultProjection.md)\>

Get AI transformer results
Get transformer results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerResultsRequest`](../interfaces/GetTransformerResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageAITransformResultProjection`](../interfaces/PageAITransformResultProjection.md)\>

___

### getTransformerResultsRaw

▸ **getTransformerResultsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAITransformResultProjection`](../interfaces/PageAITransformResultProjection.md)\>\>

Get AI transformer results
Get transformer results

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTransformerResultsRequest`](../interfaces/GetTransformerResultsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAITransformResultProjection`](../interfaces/PageAITransformResultProjection.md)\>\>

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

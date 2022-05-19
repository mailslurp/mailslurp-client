# Class: TemplateControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`TemplateControllerApi`**

## Table of contents

### Constructors

- [constructor](TemplateControllerApi.md#constructor)

### Properties

- [configuration](TemplateControllerApi.md#configuration)

### Methods

- [createTemplate](TemplateControllerApi.md#createtemplate)
- [createTemplateRaw](TemplateControllerApi.md#createtemplateraw)
- [deleteTemplate](TemplateControllerApi.md#deletetemplate)
- [deleteTemplateRaw](TemplateControllerApi.md#deletetemplateraw)
- [getAllTemplates](TemplateControllerApi.md#getalltemplates)
- [getAllTemplatesRaw](TemplateControllerApi.md#getalltemplatesraw)
- [getTemplate](TemplateControllerApi.md#gettemplate)
- [getTemplateRaw](TemplateControllerApi.md#gettemplateraw)
- [getTemplates](TemplateControllerApi.md#gettemplates)
- [getTemplatesRaw](TemplateControllerApi.md#gettemplatesraw)
- [request](TemplateControllerApi.md#request)
- [updateTemplate](TemplateControllerApi.md#updatetemplate)
- [updateTemplateRaw](TemplateControllerApi.md#updatetemplateraw)
- [withMiddleware](TemplateControllerApi.md#withmiddleware)
- [withPostMiddleware](TemplateControllerApi.md#withpostmiddleware)
- [withPreMiddleware](TemplateControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new TemplateControllerApi**(`configuration?`)

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

### createTemplate

▸ **createTemplate**(`requestParameters`, `initOverrides?`): `Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

Create an email template with variables for use with templated transactional emails.
Create a Template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTemplateRequest`](../interfaces/CreateTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

___

### createTemplateRaw

▸ **createTemplateRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateDto`](../interfaces/TemplateDto.md)\>\>

Create an email template with variables for use with templated transactional emails.
Create a Template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateTemplateRequest`](../interfaces/CreateTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateDto`](../interfaces/TemplateDto.md)\>\>

___

### deleteTemplate

▸ **deleteTemplate**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete template
Delete email template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTemplateRequest`](../interfaces/DeleteTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteTemplateRaw

▸ **deleteTemplateRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete template
Delete email template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteTemplateRequest`](../interfaces/DeleteTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getAllTemplates

▸ **getAllTemplates**(`requestParameters`, `initOverrides?`): `Promise`<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>

Get all templates in paginated format
List templates

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllTemplatesRequest`](../interfaces/GetAllTemplatesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>

___

### getAllTemplatesRaw

▸ **getAllTemplatesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>\>

Get all templates in paginated format
List templates

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllTemplatesRequest`](../interfaces/GetAllTemplatesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>\>

___

### getTemplate

▸ **getTemplate**(`requestParameters`, `initOverrides?`): `Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

Get email template
Get template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTemplateRequest`](../interfaces/GetTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

___

### getTemplateRaw

▸ **getTemplateRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateDto`](../interfaces/TemplateDto.md)\>\>

Get email template
Get template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTemplateRequest`](../interfaces/GetTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateDto`](../interfaces/TemplateDto.md)\>\>

___

### getTemplates

▸ **getTemplates**(`initOverrides?`): `Promise`<[`TemplateProjection`](../interfaces/TemplateProjection.md)[]\>

Get all templates
List templates

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TemplateProjection`](../interfaces/TemplateProjection.md)[]\>

___

### getTemplatesRaw

▸ **getTemplatesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateProjection`](../interfaces/TemplateProjection.md)[]\>\>

Get all templates
List templates

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateProjection`](../interfaces/TemplateProjection.md)[]\>\>

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

### updateTemplate

▸ **updateTemplate**(`requestParameters`, `initOverrides?`): `Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

Update email template
Update template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateTemplateRequest`](../interfaces/UpdateTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

___

### updateTemplateRaw

▸ **updateTemplateRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateDto`](../interfaces/TemplateDto.md)\>\>

Update email template
Update template

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateTemplateRequest`](../interfaces/UpdateTemplateRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TemplateDto`](../interfaces/TemplateDto.md)\>\>

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

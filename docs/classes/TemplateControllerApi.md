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

### <a id="constructor" name="constructor"></a> constructor

• **new TemplateControllerApi**(`configuration?`)

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

### <a id="createtemplate" name="createtemplate"></a> createTemplate

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

### <a id="createtemplateraw" name="createtemplateraw"></a> createTemplateRaw

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

### <a id="deletetemplate" name="deletetemplate"></a> deleteTemplate

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

### <a id="deletetemplateraw" name="deletetemplateraw"></a> deleteTemplateRaw

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

### <a id="getalltemplates" name="getalltemplates"></a> getAllTemplates

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

### <a id="getalltemplatesraw" name="getalltemplatesraw"></a> getAllTemplatesRaw

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

### <a id="gettemplate" name="gettemplate"></a> getTemplate

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

### <a id="gettemplateraw" name="gettemplateraw"></a> getTemplateRaw

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

### <a id="gettemplates" name="gettemplates"></a> getTemplates

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

### <a id="gettemplatesraw" name="gettemplatesraw"></a> getTemplatesRaw

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

### <a id="updatetemplate" name="updatetemplate"></a> updateTemplate

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

### <a id="updatetemplateraw" name="updatetemplateraw"></a> updateTemplateRaw

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

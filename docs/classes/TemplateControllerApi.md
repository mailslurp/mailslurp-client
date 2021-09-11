[MailSlurp JS](../README.md) / TemplateControllerApi

# Class: TemplateControllerApi

TemplateControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`TemplateControllerApi`**

## Table of contents

### Constructors

- [constructor](TemplateControllerApi.md#constructor)

### Properties

- [basePath](TemplateControllerApi.md#basepath)
- [configuration](TemplateControllerApi.md#configuration)
- [fetch](TemplateControllerApi.md#fetch)

### Methods

- [createTemplate](TemplateControllerApi.md#createtemplate)
- [deleteTemplate](TemplateControllerApi.md#deletetemplate)
- [getAllTemplates](TemplateControllerApi.md#getalltemplates)
- [getTemplate](TemplateControllerApi.md#gettemplate)
- [getTemplates](TemplateControllerApi.md#gettemplates)
- [updateTemplate](TemplateControllerApi.md#updatetemplate)

## Constructors

### constructor

• **new TemplateControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createTemplate

▸ **createTemplate**(`createTemplateOptions`, `options?`): `Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

**`summary`** Create a Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createTemplateOptions` | [`CreateTemplateOptions`](../interfaces/CreateTemplateOptions.md) | createTemplateOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

#### Defined in

[src/generated/api.ts:28644](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L28644)

___

### deleteTemplate

▸ **deleteTemplate**(`templateId`, `options?`): `Promise`<`Response`\>

**`summary`** Delete Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | templateId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:28662](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L28662)

___

### getAllTemplates

▸ **getAllTemplates**(`before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>

**`summary`** Get all Templates in paginated format

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `page?` | `number` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>

#### Defined in

[src/generated/api.ts:28681](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L28681)

___

### getTemplate

▸ **getTemplate**(`templateId`, `options?`): `Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

**`summary`** Get Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | templateId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

#### Defined in

[src/generated/api.ts:28707](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L28707)

___

### getTemplates

▸ **getTemplates**(`options?`): `Promise`<[`TemplateProjection`](../interfaces/TemplateProjection.md)[]\>

**`summary`** Get all Templates

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`TemplateProjection`](../interfaces/TemplateProjection.md)[]\>

#### Defined in

[src/generated/api.ts:28721](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L28721)

___

### updateTemplate

▸ **updateTemplate**(`createTemplateOptions`, `templateId`, `options?`): `Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

**`summary`** Update a Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createTemplateOptions` | [`CreateTemplateOptions`](../interfaces/CreateTemplateOptions.md) | createTemplateOptions |
| `templateId` | `string` | templateId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

#### Defined in

[src/generated/api.ts:28736](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L28736)

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

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L57)

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

[src/generated/api.ts:27349](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L27349)

___

### deleteTemplate

▸ **deleteTemplate**(`templateId`, `options?`): `Promise`<`Response`\>

**`summary`** Delete Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | TemplateId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:27367](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L27367)

___

### getAllTemplates

▸ **getAllTemplates**(`page?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>

**`summary`** Get all Templates in paginated format

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageTemplateProjection`](../interfaces/PageTemplateProjection.md)\>

#### Defined in

[src/generated/api.ts:27384](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L27384)

___

### getTemplate

▸ **getTemplate**(`templateId`, `options?`): `Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

**`summary`** Get Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateId` | `string` | TemplateId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`TemplateDto`](../interfaces/TemplateDto.md)\>

#### Defined in

[src/generated/api.ts:27406](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L27406)

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

[src/generated/api.ts:27420](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L27420)

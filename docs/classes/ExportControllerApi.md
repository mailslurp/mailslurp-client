[MailSlurp JS](../README.md) / ExportControllerApi

# Class: ExportControllerApi

ExportControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ExportControllerApi`**

## Table of contents

### Constructors

- [constructor](ExportControllerApi.md#constructor)

### Properties

- [basePath](ExportControllerApi.md#basepath)
- [configuration](ExportControllerApi.md#configuration)
- [fetch](ExportControllerApi.md#fetch)

### Methods

- [exportEntities](ExportControllerApi.md#exportentities)
- [getExportLink](ExportControllerApi.md#getexportlink)

## Constructors

### constructor

• **new ExportControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### exportEntities

▸ **exportEntities**(`apiKey`, `exportType`, `outputFormat`, `createdEarliestTime?`, `createdOldestTime?`, `excludePreviouslyExported?`, `filter?`, `listSeparatorToken?`, `options?`): `Promise`<`string`\>

**`summary`** Export inboxes link callable via browser

**`throws`** {RequiredError}

**`memberof`** ExportControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey` | `string` | apiKey |
| `exportType` | ``"ATTACHMENTS"`` \| ``"INBOXES"`` \| ``"CONTACTS"`` \| ``"EMAILS"`` | exportType |
| `outputFormat` | ``"CSV_DEFAULT"`` \| ``"CSV_EXCEL"`` | outputFormat |
| `createdEarliestTime?` | `Date` | - |
| `createdOldestTime?` | `Date` | - |
| `excludePreviouslyExported?` | `boolean` | - |
| `filter?` | `string` | - |
| `listSeparatorToken?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:17959](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L17959)

___

### getExportLink

▸ **getExportLink**(`exportOptions`, `exportType`, `apiKey?`, `options?`): `Promise`<[`ExportLink`](../interfaces/ExportLink.md)\>

**`summary`** Get export link

**`throws`** {RequiredError}

**`memberof`** ExportControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exportOptions` | [`ExportOptions`](../interfaces/ExportOptions.md) | exportOptions |
| `exportType` | ``"ATTACHMENTS"`` \| ``"INBOXES"`` \| ``"CONTACTS"`` \| ``"EMAILS"`` | exportType |
| `apiKey?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`ExportLink`](../interfaces/ExportLink.md)\>

#### Defined in

[src/generated/api.ts:17993](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L17993)

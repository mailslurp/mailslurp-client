**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / ExportControllerApi

# Class: ExportControllerApi

ExportControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ExportControllerApi**

## Index

### Constructors

* [constructor](exportcontrollerapi.md#constructor)

### Properties

* [basePath](exportcontrollerapi.md#basepath)
* [configuration](exportcontrollerapi.md#configuration)
* [fetch](exportcontrollerapi.md#fetch)

### Methods

* [exportEntities](exportcontrollerapi.md#exportentities)
* [getExportLink](exportcontrollerapi.md#getexportlink)

## Constructors

### constructor

\+ **new ExportControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [ExportControllerApi](exportcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [ExportControllerApi](exportcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L62)*

## Methods

### exportEntities

▸ **exportEntities**(`apiKey`: string, `exportType`: \"INBOXES\" \| \"CONTACTS\" \| \"ATTACHMENTS\" \| \"EMAILS\", `outputFormat`: \"CSV\_DEFAULT\" \| \"CSV\_EXCEL\", `createdEarliestTime?`: Date, `createdOldestTime?`: Date, `excludePreviouslyExported?`: boolean, `filter?`: string, `listSeparatorToken?`: string, `options?`: any): Promise\<string>

*Defined in [src/generated/api.ts:15284](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L15284)*

**`summary`** Export inboxes link callable via browser

**`throws`** {RequiredError}

**`memberof`** ExportControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`apiKey` | string | apiKey |
`exportType` | \"INBOXES\" \| \"CONTACTS\" \| \"ATTACHMENTS\" \| \"EMAILS\" | exportType |
`outputFormat` | \"CSV\_DEFAULT\" \| \"CSV\_EXCEL\" | outputFormat |
`createdEarliestTime?` | Date | - |
`createdOldestTime?` | Date | - |
`excludePreviouslyExported?` | boolean | - |
`filter?` | string | - |
`listSeparatorToken?` | string | - |
`options?` | any | - |

**Returns:** Promise\<string>

___

### getExportLink

▸ **getExportLink**(`exportOptions`: [ExportOptions](../modules/exportoptions.md), `exportType`: \"INBOXES\" \| \"CONTACTS\" \| \"ATTACHMENTS\" \| \"EMAILS\", `apiKey?`: string, `options?`: any): Promise\<[ExportLink](../interfaces/exportlink.md)>

*Defined in [src/generated/api.ts:15318](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L15318)*

**`summary`** Get export link

**`throws`** {RequiredError}

**`memberof`** ExportControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`exportOptions` | [ExportOptions](../modules/exportoptions.md) | exportOptions |
`exportType` | \"INBOXES\" \| \"CONTACTS\" \| \"ATTACHMENTS\" \| \"EMAILS\" | exportType |
`apiKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<[ExportLink](../interfaces/exportlink.md)>

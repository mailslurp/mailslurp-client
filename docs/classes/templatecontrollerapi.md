# Class: TemplateControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TemplateControllerApi**

## Constructors

###  constructor

\+ **new TemplateControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[TemplateControllerApi](templatecontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[TemplateControllerApi](templatecontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

## Methods

###  createTemplate

▸ **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/createtemplateoptions.md), `options?`: any): *Promise‹[TemplateDto](../interfaces/templatedto.md)›*

*Defined in [src/generated/api.ts:9217](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9217)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createTemplateOptions` | [CreateTemplateOptions](../interfaces/createtemplateoptions.md) | createTemplateOptions |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/templatedto.md)›*

___

###  deleteTemplate

▸ **deleteTemplate**(`templateId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:9229](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9229)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllTemplates

▸ **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageTemplateProjection](../interfaces/pagetemplateprojection.md)›*

*Defined in [src/generated/api.ts:9243](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9243)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageTemplateProjection](../interfaces/pagetemplateprojection.md)›*

___

###  getTemplate

▸ **getTemplate**(`templateId`: string, `options?`: any): *Promise‹[TemplateDto](../interfaces/templatedto.md)›*

*Defined in [src/generated/api.ts:9255](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9255)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/templatedto.md)›*

___

###  getTemplates

▸ **getTemplates**(`options?`: any): *Promise‹[TemplateProjection](../interfaces/templateprojection.md)[]›*

*Defined in [src/generated/api.ts:9266](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9266)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[TemplateProjection](../interfaces/templateprojection.md)[]›*

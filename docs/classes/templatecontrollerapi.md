# Class: TemplateControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TemplateControllerApi**

## Constructors

###  constructor

\+ **new TemplateControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[TemplateControllerApi](templatecontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L62)*

## Methods

###  createTemplate

▸ **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/createtemplateoptions.md), `options?`: any): *Promise‹[TemplateDto](../interfaces/templatedto.md)›*

*Defined in [src/generated/api.ts:12470](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12470)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createTemplateOptions` | [CreateTemplateOptions](../interfaces/createtemplateoptions.md) | createTemplateOptions |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/templatedto.md)›*

___

###  deleteTemplate

▸ **deleteTemplate**(`templateId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:12488](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12488)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllTemplates

▸ **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageTemplateProjection](../interfaces/pagetemplateprojection.md)›*

*Defined in [src/generated/api.ts:12505](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12505)*

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

*Defined in [src/generated/api.ts:12527](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12527)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/templatedto.md)›*

___

###  getTemplates

▸ **getTemplates**(`options?`: any): *Promise‹[TemplateProjection](../interfaces/templateprojection.md)[]›*

*Defined in [src/generated/api.ts:12541](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12541)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[TemplateProjection](../interfaces/templateprojection.md)[]›*

# Class: TemplateControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **TemplateControllerApi**

## Constructors

###  constructor

\+ **new TemplateControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[TemplateControllerApi](_generated_api_.templatecontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[TemplateControllerApi](_generated_api_.templatecontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L62)*

## Methods

###  createTemplate

▸ **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options?`: any): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

*Defined in [src/generated/api.ts:12154](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12154)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createTemplateOptions` | [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md) | createTemplateOptions |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

___

###  deleteTemplate

▸ **deleteTemplate**(`templateId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:12172](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12172)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllTemplates

▸ **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageTemplateProjection](../interfaces/_generated_api_.pagetemplateprojection.md)›*

*Defined in [src/generated/api.ts:12189](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12189)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageTemplateProjection](../interfaces/_generated_api_.pagetemplateprojection.md)›*

___

###  getTemplate

▸ **getTemplate**(`templateId`: string, `options?`: any): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

*Defined in [src/generated/api.ts:12211](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12211)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

___

###  getTemplates

▸ **getTemplates**(`options?`: any): *Promise‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)[]›*

*Defined in [src/generated/api.ts:12225](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12225)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)[]›*

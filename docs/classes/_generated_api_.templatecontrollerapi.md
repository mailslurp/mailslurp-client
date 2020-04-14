[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [TemplateControllerApi](_generated_api_.templatecontrollerapi.md)

# Class: TemplateControllerApi

TemplateControllerApi - object-oriented interface

**`export`** 

**`class`** TemplateControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **TemplateControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.templatecontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.templatecontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.templatecontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.templatecontrollerapi.md#protected-fetch)

### Methods

* [createTemplate](_generated_api_.templatecontrollerapi.md#createtemplate)
* [deleteTemplate](_generated_api_.templatecontrollerapi.md#deletetemplate)
* [getAllTemplates](_generated_api_.templatecontrollerapi.md#getalltemplates)
* [getTemplate](_generated_api_.templatecontrollerapi.md#gettemplate)
* [getTemplates](_generated_api_.templatecontrollerapi.md#gettemplates)

## Constructors

###  constructor

\+ **new TemplateControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[TemplateControllerApi](_generated_api_.templatecontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L62)*

## Methods

###  createTemplate

▸ **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options?`: any): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

*Defined in [src/generated/api.ts:11106](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L11106)*

**`summary`** Create a Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createTemplateOptions` | [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md) | createTemplateOptions |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

___

###  deleteTemplate

▸ **deleteTemplate**(`templateId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:11124](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L11124)*

**`summary`** Delete Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllTemplates

▸ **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageTemplateProjection](../interfaces/_generated_api_.pagetemplateprojection.md)›*

*Defined in [src/generated/api.ts:11141](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L11141)*

**`summary`** Get all Templates in paginated format

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

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

*Defined in [src/generated/api.ts:11163](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L11163)*

**`summary`** Get Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

___

###  getTemplates

▸ **getTemplates**(`options?`: any): *Promise‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)[]›*

*Defined in [src/generated/api.ts:11177](https://github.com/mailslurp/mailslurp-client-ts-js/blob/e9348f1/src/generated/api.ts#L11177)*

**`summary`** Get all Templates

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)[]›*

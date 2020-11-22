**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / TemplateControllerApi

# Class: TemplateControllerApi

TemplateControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **TemplateControllerApi**

## Index

### Constructors

* [constructor](templatecontrollerapi.md#constructor)

### Properties

* [basePath](templatecontrollerapi.md#basepath)
* [configuration](templatecontrollerapi.md#configuration)
* [fetch](templatecontrollerapi.md#fetch)

### Methods

* [createTemplate](templatecontrollerapi.md#createtemplate)
* [deleteTemplate](templatecontrollerapi.md#deletetemplate)
* [getAllTemplates](templatecontrollerapi.md#getalltemplates)
* [getTemplate](templatecontrollerapi.md#gettemplate)
* [getTemplates](templatecontrollerapi.md#gettemplates)

## Constructors

### constructor

\+ **new TemplateControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [TemplateControllerApi](templatecontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [TemplateControllerApi](templatecontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L62)*

## Methods

### createTemplate

▸ **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/createtemplateoptions.md), `options?`: any): Promise\<[TemplateDto](../interfaces/templatedto.md)>

*Defined in [src/generated/api.ts:13030](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L13030)*

**`summary`** Create a Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createTemplateOptions` | [CreateTemplateOptions](../interfaces/createtemplateoptions.md) | createTemplateOptions |
`options?` | any | - |

**Returns:** Promise\<[TemplateDto](../interfaces/templatedto.md)>

___

### deleteTemplate

▸ **deleteTemplate**(`templateId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:13048](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L13048)*

**`summary`** Delete Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAllTemplates

▸ **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageTemplateProjection](../interfaces/pagetemplateprojection.md)>

*Defined in [src/generated/api.ts:13065](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L13065)*

**`summary`** Get all Templates in paginated format

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageTemplateProjection](../interfaces/pagetemplateprojection.md)>

___

### getTemplate

▸ **getTemplate**(`templateId`: string, `options?`: any): Promise\<[TemplateDto](../interfaces/templatedto.md)>

*Defined in [src/generated/api.ts:13087](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L13087)*

**`summary`** Get Template

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`templateId` | string | TemplateId |
`options?` | any | - |

**Returns:** Promise\<[TemplateDto](../interfaces/templatedto.md)>

___

### getTemplates

▸ **getTemplates**(`options?`: any): Promise\<[TemplateProjection](../interfaces/templateprojection.md)[]>

*Defined in [src/generated/api.ts:13101](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L13101)*

**`summary`** Get all Templates

**`throws`** {RequiredError}

**`memberof`** TemplateControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[TemplateProjection](../interfaces/templateprojection.md)[]>

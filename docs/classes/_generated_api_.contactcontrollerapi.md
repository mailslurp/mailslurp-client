# Class: ContactControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **ContactControllerApi**

## Constructors

###  constructor

\+ **new ContactControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[ContactControllerApi](_generated_api_.contactcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[ContactControllerApi](_generated_api_.contactcontrollerapi.md)*

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

###  createContact

▸ **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options?`: any): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

*Defined in [src/generated/api.ts:5459](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5459)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createContactOptions` | [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md) | createContactOptions |
`options?` | any | - |

**Returns:** *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

___

###  deleteContact

▸ **deleteContact**(`contactId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:5477](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5477)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllContacts

▸ **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](../interfaces/_generated_api_.pagecontactprojection.md)›*

*Defined in [src/generated/api.ts:5494](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5494)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageContactProjection](../interfaces/_generated_api_.pagecontactprojection.md)›*

___

###  getContact

▸ **getContact**(`contactId`: string, `options?`: any): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

*Defined in [src/generated/api.ts:5516](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5516)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

___

###  getContacts

▸ **getContacts**(`options?`: any): *Promise‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)[]›*

*Defined in [src/generated/api.ts:5530](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5530)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)[]›*

[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [ContactControllerApi](_generated_api_.contactcontrollerapi.md)

# Class: ContactControllerApi

ContactControllerApi - object-oriented interface

**`export`** 

**`class`** ContactControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **ContactControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.contactcontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.contactcontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.contactcontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.contactcontrollerapi.md#protected-fetch)

### Methods

* [createContact](_generated_api_.contactcontrollerapi.md#createcontact)
* [deleteContact](_generated_api_.contactcontrollerapi.md#deletecontact)
* [getAllContacts](_generated_api_.contactcontrollerapi.md#getallcontacts)
* [getContact](_generated_api_.contactcontrollerapi.md#getcontact)
* [getContacts](_generated_api_.contactcontrollerapi.md#getcontacts)

## Constructors

###  constructor

\+ **new ContactControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[ContactControllerApi](_generated_api_.contactcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

Defined in src/generated/api.ts:57

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

Defined in src/generated/api.ts:61

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

Defined in src/generated/api.ts:57

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

Defined in src/generated/api.ts:62

## Methods

###  createContact

▸ **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options?`: any): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

Defined in src/generated/api.ts:4488

**`summary`** Create a contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createContactOptions` | [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md) | createContactOptions |
`options?` | any | - |

**Returns:** *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

___

###  deleteContact

▸ **deleteContact**(`contactId`: string, `options?`: any): *Promise‹Response›*

Defined in src/generated/api.ts:4506

**`summary`** Delete contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllContacts

▸ **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](../interfaces/_generated_api_.pagecontactprojection.md)›*

Defined in src/generated/api.ts:4523

**`summary`** Get all contacts

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

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

Defined in src/generated/api.ts:4545

**`summary`** Get contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

___

###  getContacts

▸ **getContacts**(`options?`: any): *Promise‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)[]›*

Defined in src/generated/api.ts:4559

**`summary`** Get all contacts

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)[]›*

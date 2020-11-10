# Class: ContactControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ContactControllerApi**

## Constructors

###  constructor

\+ **new ContactControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ContactControllerApi](contactcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ContactControllerApi](contactcontrollerapi.md)*

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

###  createContact

▸ **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/createcontactoptions.md), `options?`: any): *Promise‹[ContactDto](../interfaces/contactdto.md)›*

*Defined in [src/generated/api.ts:4721](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4721)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createContactOptions` | [CreateContactOptions](../interfaces/createcontactoptions.md) | createContactOptions |
`options?` | any | - |

**Returns:** *Promise‹[ContactDto](../interfaces/contactdto.md)›*

___

###  deleteContact

▸ **deleteContact**(`contactId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:4733](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4733)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllContacts

▸ **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](../interfaces/pagecontactprojection.md)›*

*Defined in [src/generated/api.ts:4747](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4747)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageContactProjection](../interfaces/pagecontactprojection.md)›*

___

###  getContact

▸ **getContact**(`contactId`: string, `options?`: any): *Promise‹[ContactDto](../interfaces/contactdto.md)›*

*Defined in [src/generated/api.ts:4759](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4759)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** *Promise‹[ContactDto](../interfaces/contactdto.md)›*

___

###  getContacts

▸ **getContacts**(`options?`: any): *Promise‹[ContactProjection](../interfaces/contactprojection.md)[]›*

*Defined in [src/generated/api.ts:4770](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4770)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[ContactProjection](../interfaces/contactprojection.md)[]›*

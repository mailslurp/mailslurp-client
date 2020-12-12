**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / ContactControllerApi

# Class: ContactControllerApi

ContactControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ContactControllerApi**

## Index

### Constructors

* [constructor](contactcontrollerapi.md#constructor)

### Properties

* [basePath](contactcontrollerapi.md#basepath)
* [configuration](contactcontrollerapi.md#configuration)
* [fetch](contactcontrollerapi.md#fetch)

### Methods

* [createContact](contactcontrollerapi.md#createcontact)
* [deleteContact](contactcontrollerapi.md#deletecontact)
* [getAllContacts](contactcontrollerapi.md#getallcontacts)
* [getContact](contactcontrollerapi.md#getcontact)
* [getContacts](contactcontrollerapi.md#getcontacts)

## Constructors

### constructor

\+ **new ContactControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [ContactControllerApi](contactcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [ContactControllerApi](contactcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L62)*

## Methods

### createContact

▸ **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/createcontactoptions.md), `options?`: any): Promise\<[ContactDto](../interfaces/contactdto.md)>

*Defined in [src/generated/api.ts:6396](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L6396)*

**`summary`** Create a contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createContactOptions` | [CreateContactOptions](../interfaces/createcontactoptions.md) | createContactOptions |
`options?` | any | - |

**Returns:** Promise\<[ContactDto](../interfaces/contactdto.md)>

___

### deleteContact

▸ **deleteContact**(`contactId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:6414](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L6414)*

**`summary`** Delete contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAllContacts

▸ **getAllContacts**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageContactProjection](../interfaces/pagecontactprojection.md)>

*Defined in [src/generated/api.ts:6431](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L6431)*

**`summary`** Get all contacts

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageContactProjection](../interfaces/pagecontactprojection.md)>

___

### getContact

▸ **getContact**(`contactId`: string, `options?`: any): Promise\<[ContactDto](../interfaces/contactdto.md)>

*Defined in [src/generated/api.ts:6453](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L6453)*

**`summary`** Get contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`contactId` | string | contactId |
`options?` | any | - |

**Returns:** Promise\<[ContactDto](../interfaces/contactdto.md)>

___

### getContacts

▸ **getContacts**(`options?`: any): Promise\<[ContactProjection](../interfaces/contactprojection.md)[]>

*Defined in [src/generated/api.ts:6467](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L6467)*

**`summary`** Get all contacts

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[ContactProjection](../interfaces/contactprojection.md)[]>

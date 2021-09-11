[MailSlurp JS](../README.md) / ContactControllerApi

# Class: ContactControllerApi

ContactControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ContactControllerApi`**

## Table of contents

### Constructors

- [constructor](ContactControllerApi.md#constructor)

### Properties

- [basePath](ContactControllerApi.md#basepath)
- [configuration](ContactControllerApi.md#configuration)
- [fetch](ContactControllerApi.md#fetch)

### Methods

- [createContact](ContactControllerApi.md#createcontact)
- [deleteContact](ContactControllerApi.md#deletecontact)
- [getAllContacts](ContactControllerApi.md#getallcontacts)
- [getContact](ContactControllerApi.md#getcontact)
- [getContactVCard](ContactControllerApi.md#getcontactvcard)
- [getContacts](ContactControllerApi.md#getcontacts)

## Constructors

### constructor

• **new ContactControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createContact

▸ **createContact**(`createContactOptions`, `options?`): `Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

**`summary`** Create a contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createContactOptions` | [`CreateContactOptions`](../interfaces/CreateContactOptions.md) | createContactOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

#### Defined in

[src/generated/api.ts:12462](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L12462)

___

### deleteContact

▸ **deleteContact**(`contactId`, `options?`): `Promise`<`Response`\>

**`summary`** Delete contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contactId` | `string` | contactId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:12480](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L12480)

___

### getAllContacts

▸ **getAllContacts**(`before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

**`summary`** Get all contacts

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `page?` | `number` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageContactProjection`](../interfaces/PageContactProjection.md)\>

#### Defined in

[src/generated/api.ts:12499](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L12499)

___

### getContact

▸ **getContact**(`contactId`, `options?`): `Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

**`summary`** Get contact

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contactId` | `string` | contactId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`ContactDto`](../interfaces/ContactDto.md)\>

#### Defined in

[src/generated/api.ts:12525](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L12525)

___

### getContactVCard

▸ **getContactVCard**(`contactId`, `options?`): `Promise`<`string`\>

**`summary`** Get contact vCard vcf file

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contactId` | `string` | contactId |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:12540](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L12540)

___

### getContacts

▸ **getContacts**(`options?`): `Promise`<[`ContactProjection`](../interfaces/ContactProjection.md)[]\>

**`summary`** Get all contacts

**`throws`** {RequiredError}

**`memberof`** ContactControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`ContactProjection`](../interfaces/ContactProjection.md)[]\>

#### Defined in

[src/generated/api.ts:12554](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L12554)
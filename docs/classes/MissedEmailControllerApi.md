[MailSlurp JS](../README.md) / MissedEmailControllerApi

# Class: MissedEmailControllerApi

MissedEmailControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`MissedEmailControllerApi`**

## Table of contents

### Constructors

- [constructor](MissedEmailControllerApi.md#constructor)

### Properties

- [basePath](MissedEmailControllerApi.md#basepath)
- [configuration](MissedEmailControllerApi.md#configuration)
- [fetch](MissedEmailControllerApi.md#fetch)

### Methods

- [getAllMissedEmails](MissedEmailControllerApi.md#getallmissedemails)
- [getAllUnknownMissedEmails](MissedEmailControllerApi.md#getallunknownmissedemails)
- [getMissedEmail](MissedEmailControllerApi.md#getmissedemail)
- [waitForNthMissedEmail](MissedEmailControllerApi.md#waitfornthmissedemail)

## Constructors

### constructor

• **new MissedEmailControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### getAllMissedEmails

▸ **getAllMissedEmails**(`before?`, `inboxId?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageMissedEmailProjection`](../interfaces/PageMissedEmailProjection.md)\>

**`summary`** Get all MissedEmails in paginated format

**`throws`** {RequiredError}

**`memberof`** MissedEmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `inboxId?` | `string` |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageMissedEmailProjection`](../interfaces/PageMissedEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:26851](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L26851)

___

### getAllUnknownMissedEmails

▸ **getAllUnknownMissedEmails**(`before?`, `inboxId?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageUnknownMissedEmailProjection`](../interfaces/PageUnknownMissedEmailProjection.md)\>

Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.

**`summary`** Get all unknown missed emails in paginated format

**`throws`** {RequiredError}

**`memberof`** MissedEmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `inboxId?` | `string` |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageUnknownMissedEmailProjection`](../interfaces/PageUnknownMissedEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:26889](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L26889)

___

### getMissedEmail

▸ **getMissedEmail**(`missedEmailId`, `options?`): `Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

**`summary`** Get MissedEmail

**`throws`** {RequiredError}

**`memberof`** MissedEmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `missedEmailId` | `string` | missedEmailId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

#### Defined in

[src/generated/api.ts:26921](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L26921)

___

### waitForNthMissedEmail

▸ **waitForNthMissedEmail**(`before?`, `inboxId?`, `index?`, `since?`, `timeout?`, `options?`): `Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

Wait for 0 based index missed email

**`summary`** Wait for Nth missed email

**`throws`** {RequiredError}

**`memberof`** MissedEmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `inboxId?` | `string` |
| `index?` | `number` |
| `since?` | `Date` |
| `timeout?` | `number` |
| `options?` | `any` |

#### Returns

`Promise`<[`MissedEmail`](../interfaces/MissedEmail.md)\>

#### Defined in

[src/generated/api.ts:26940](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L26940)

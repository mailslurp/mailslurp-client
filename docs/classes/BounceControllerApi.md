[MailSlurp JS](../README.md) / BounceControllerApi

# Class: BounceControllerApi

BounceControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BounceControllerApi`**

## Table of contents

### Constructors

- [constructor](BounceControllerApi.md#constructor)

### Properties

- [basePath](BounceControllerApi.md#basepath)
- [configuration](BounceControllerApi.md#configuration)
- [fetch](BounceControllerApi.md#fetch)

### Methods

- [getBouncedEmail](BounceControllerApi.md#getbouncedemail)
- [getBouncedEmails](BounceControllerApi.md#getbouncedemails)
- [getBouncedRecipient](BounceControllerApi.md#getbouncedrecipient)
- [getBouncedRecipients](BounceControllerApi.md#getbouncedrecipients)

## Constructors

### constructor

• **new BounceControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### getBouncedEmail

▸ **getBouncedEmail**(`id`, `options?`): `Promise`<[`BouncedEmailDto`](../interfaces/BouncedEmailDto.md)\>

Bounced emails are email you have sent that were rejected by a recipient

**`summary`** Get a bounced email.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the bounced email to fetch |
| `options?` | `any` | - |

#### Returns

`Promise`<[`BouncedEmailDto`](../interfaces/BouncedEmailDto.md)\>

#### Defined in

[src/generated/api.ts:10199](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L10199)

___

### getBouncedEmails

▸ **getBouncedEmails**(`page?`, `size?`, `sort?`, `options?`): `Promise`<[`PageBouncedEmail`](../interfaces/PageBouncedEmail.md)\>

Bounced emails are email you have sent that were rejected by a recipient

**`summary`** Get paginated list of bounced emails.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageBouncedEmail`](../interfaces/PageBouncedEmail.md)\>

#### Defined in

[src/generated/api.ts:10216](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L10216)

___

### getBouncedRecipient

▸ **getBouncedRecipient**(`id`, `options?`): `Promise`<[`BouncedRecipientDto`](../interfaces/BouncedRecipientDto.md)\>

Bounced emails are email you have sent that were rejected by a recipient

**`summary`** Get a bounced email.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the bounced recipient |
| `options?` | `any` | - |

#### Returns

`Promise`<[`BouncedRecipientDto`](../interfaces/BouncedRecipientDto.md)\>

#### Defined in

[src/generated/api.ts:10238](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L10238)

___

### getBouncedRecipients

▸ **getBouncedRecipients**(`page?`, `size?`, `sort?`, `options?`): `Promise`<[`PageBouncedRecipients`](../interfaces/PageBouncedRecipients.md)\>

Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.

**`summary`** Get paginated list of bounced recipients.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageBouncedRecipients`](../interfaces/PageBouncedRecipients.md)\>

#### Defined in

[src/generated/api.ts:10255](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L10255)

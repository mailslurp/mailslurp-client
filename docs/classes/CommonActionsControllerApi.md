[MailSlurp JS](../README.md) / CommonActionsControllerApi

# Class: CommonActionsControllerApi

CommonActionsControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CommonActionsControllerApi`**

## Table of contents

### Constructors

- [constructor](CommonActionsControllerApi.md#constructor)

### Properties

- [basePath](CommonActionsControllerApi.md#basepath)
- [configuration](CommonActionsControllerApi.md#configuration)
- [fetch](CommonActionsControllerApi.md#fetch)

### Methods

- [createNewEmailAddress](CommonActionsControllerApi.md#createnewemailaddress)
- [createNewEmailAddress1](CommonActionsControllerApi.md#createnewemailaddress1)
- [emptyInbox](CommonActionsControllerApi.md#emptyinbox)
- [sendEmailSimple](CommonActionsControllerApi.md#sendemailsimple)

## Constructors

### constructor

• **new CommonActionsControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createNewEmailAddress

▸ **createNewEmailAddress**(`allowTeamAccess?`, `description?`, `emailAddress?`, `expiresAt?`, `expiresIn?`, `favourite?`, `inboxType?`, `name?`, `tags?`, `useDomainPool?`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowTeamAccess?` | `boolean` |
| `description?` | `string` |
| `emailAddress?` | `string` |
| `expiresAt?` | `Date` |
| `expiresIn?` | `number` |
| `favourite?` | `boolean` |
| `inboxType?` | ``"HTTP_INBOX"`` \| ``"SMTP_INBOX"`` |
| `name?` | `string` |
| `tags?` | `string`[] |
| `useDomainPool?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:11714](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L11714)

___

### createNewEmailAddress1

▸ **createNewEmailAddress1**(`allowTeamAccess?`, `description?`, `emailAddress?`, `expiresAt?`, `expiresIn?`, `favourite?`, `inboxType?`, `name?`, `tags?`, `useDomainPool?`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowTeamAccess?` | `boolean` |
| `description?` | `string` |
| `emailAddress?` | `string` |
| `expiresAt?` | `Date` |
| `expiresIn?` | `number` |
| `favourite?` | `boolean` |
| `inboxType?` | ``"HTTP_INBOX"`` \| ``"SMTP_INBOX"`` |
| `name?` | `string` |
| `tags?` | `string`[] |
| `useDomainPool?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:11761](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L11761)

___

### emptyInbox

▸ **emptyInbox**(`inboxId`, `options?`): `Promise`<`Response`\>

Deletes all emails

**`summary`** Delete all emails in an inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:11799](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L11799)

___

### sendEmailSimple

▸ **sendEmailSimple**(`emailOptions`, `options?`): `Promise`<`Response`\>

If no senderId or inboxId provided a random email address will be used to send from.

**`summary`** Send an email

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailOptions` | [`SimpleSendEmailOptions`](../interfaces/SimpleSendEmailOptions.md) | emailOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:11814](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L11814)

[MailSlurp JS](../README.md) / AliasControllerApi

# Class: AliasControllerApi

AliasControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AliasControllerApi`**

## Table of contents

### Constructors

- [constructor](AliasControllerApi.md#constructor)

### Properties

- [basePath](AliasControllerApi.md#basepath)
- [configuration](AliasControllerApi.md#configuration)
- [fetch](AliasControllerApi.md#fetch)

### Methods

- [createAlias](AliasControllerApi.md#createalias)
- [deleteAlias](AliasControllerApi.md#deletealias)
- [getAlias](AliasControllerApi.md#getalias)
- [getAliasEmails](AliasControllerApi.md#getaliasemails)
- [getAliasThreads](AliasControllerApi.md#getaliasthreads)
- [getAliases](AliasControllerApi.md#getaliases)
- [replyToAliasEmail](AliasControllerApi.md#replytoaliasemail)
- [sendAliasEmail](AliasControllerApi.md#sendaliasemail)
- [updateAlias](AliasControllerApi.md#updatealias)

## Constructors

### constructor

• **new AliasControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createAlias

▸ **createAlias**(`createAliasOptions`, `options?`): `Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached

**`summary`** Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createAliasOptions` | [`CreateAliasOptions`](../interfaces/CreateAliasOptions.md) | createAliasOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

#### Defined in

[src/generated/api.ts:8340](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8340)

___

### deleteAlias

▸ **deleteAlias**(`aliasId`, `options?`): `Promise`<`Response`\>

**`summary`** Delete an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | aliasId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:8355](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8355)

___

### getAlias

▸ **getAlias**(`aliasId`, `options?`): `Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

Get an email alias by ID

**`summary`** Get an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | aliasId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`AliasDto`](../interfaces/AliasDto.md)\>

#### Defined in

[src/generated/api.ts:8370](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8370)

___

### getAliasEmails

▸ **getAliasEmails**(`aliasId`, `before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

Get paginated emails for an alias by ID

**`summary`** Get emails for an alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | aliasId |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `since?` | `Date` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:8390](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8390)

___

### getAliasThreads

▸ **getAliasThreads**(`aliasId`, `before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>

Returns threads created for an email alias in paginated form

**`summary`** Get threads created for an alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | aliasId |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `since?` | `Date` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageThreadProjection`](../interfaces/PageThreadProjection.md)\>

#### Defined in

[src/generated/api.ts:8423](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8423)

___

### getAliases

▸ **getAliases**(`before?`, `page?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageAlias`](../interfaces/PageAlias.md)\>

Get all email aliases in paginated form

**`summary`** Get all email aliases you have created

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

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

`Promise`<[`PageAlias`](../interfaces/PageAlias.md)\>

#### Defined in

[src/generated/api.ts:8455](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8455)

___

### replyToAliasEmail

▸ **replyToAliasEmail**(`aliasId`, `emailId`, `replyToAliasEmailOptions`, `options?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.

**`summary`** Reply to an email

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | ID of the alias that email belongs to |
| `emailId` | `string` | ID of the email that should be replied to |
| `replyToAliasEmailOptions` | [`ReplyToAliasEmailOptions`](../interfaces/ReplyToAliasEmailOptions.md) | replyToAliasEmailOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

#### Defined in

[src/generated/api.ts:8483](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8483)

___

### sendAliasEmail

▸ **sendAliasEmail**(`aliasId`, `sendEmailOptions?`, `options?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send an email from an alias. Replies to the email will be forwarded to the alias masked email address

**`summary`** Send an email from an alias inbox

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | aliasId |
| `sendEmailOptions?` | [`SendEmailOptions`](../interfaces/SendEmailOptions.md) | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

#### Defined in

[src/generated/api.ts:8506](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8506)

___

### updateAlias

▸ **updateAlias**(`aliasId`, `updateAliasOptions`, `options?`): `Promise`<`Response`\>

**`summary`** Update an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aliasId` | `string` | aliasId |
| `updateAliasOptions` | [`UpdateAliasOptions`](../interfaces/UpdateAliasOptions.md) | updateAliasOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:8527](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L8527)

[MailSlurp JS](../README.md) / SentEmailsControllerApi

# Class: SentEmailsControllerApi

SentEmailsControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SentEmailsControllerApi`**

## Table of contents

### Constructors

- [constructor](SentEmailsControllerApi.md#constructor)

### Properties

- [basePath](SentEmailsControllerApi.md#basepath)
- [configuration](SentEmailsControllerApi.md#configuration)
- [fetch](SentEmailsControllerApi.md#fetch)

### Methods

- [getAllSentTrackingPixels](SentEmailsControllerApi.md#getallsenttrackingpixels)
- [getSentEmail](SentEmailsControllerApi.md#getsentemail)
- [getSentEmailHTMLContent](SentEmailsControllerApi.md#getsentemailhtmlcontent)
- [getSentEmailTrackingPixels](SentEmailsControllerApi.md#getsentemailtrackingpixels)
- [getSentEmails](SentEmailsControllerApi.md#getsentemails)
- [getSentOrganizationEmails](SentEmailsControllerApi.md#getsentorganizationemails)

## Constructors

### constructor

• **new SentEmailsControllerApi**(`configuration?`, `basePath?`, `fetch?`)

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

### getAllSentTrackingPixels

▸ **getAllSentTrackingPixels**(`before?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

**`summary`** Get all sent email tracking pixels in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

#### Defined in

[src/generated/api.ts:27759](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L27759)

___

### getSentEmail

▸ **getSentEmail**(`id`, `options?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

**`summary`** Get sent email receipt

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `options?` | `any` | - |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

#### Defined in

[src/generated/api.ts:27789](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L27789)

___

### getSentEmailHTMLContent

▸ **getSentEmailHTMLContent**(`id`, `options?`): `Promise`<`string`\>

**`summary`** Get sent email HTML content

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:27804](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L27804)

___

### getSentEmailTrackingPixels

▸ **getSentEmailTrackingPixels**(`id`, `before?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

**`summary`** Get all tracking pixels for a sent email in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `since?` | `Date` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

#### Defined in

[src/generated/api.ts:27824](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L27824)

___

### getSentEmails

▸ **getSentEmails**(`before?`, `inboxId?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

**`summary`** Get all sent emails in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

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

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:27862](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L27862)

___

### getSentOrganizationEmails

▸ **getSentOrganizationEmails**(`before?`, `inboxId?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

**`summary`** Get all sent organization emails in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

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

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:27898](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L27898)

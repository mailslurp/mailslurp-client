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

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### getAllSentTrackingPixels

▸ **getAllSentTrackingPixels**(`page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

**`summary`** Get all sent email tracking pixels in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

#### Defined in

[src/generated/api.ts:26640](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L26640)

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

[src/generated/api.ts:26666](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L26666)

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

[src/generated/api.ts:26681](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L26681)

___

### getSentEmailTrackingPixels

▸ **getSentEmailTrackingPixels**(`id`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

**`summary`** Get all tracking pixels for a sent email in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

#### Defined in

[src/generated/api.ts:26699](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L26699)

___

### getSentEmails

▸ **getSentEmails**(`inboxId?`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

**`summary`** Get all sent emails in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:26731](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L26731)

___

### getSentOrganizationEmails

▸ **getSentOrganizationEmails**(`inboxId?`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

**`summary`** Get all sent organization emails in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:26761](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L26761)

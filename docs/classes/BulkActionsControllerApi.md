[MailSlurp JS](../README.md) / BulkActionsControllerApi

# Class: BulkActionsControllerApi

BulkActionsControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BulkActionsControllerApi`**

## Table of contents

### Constructors

- [constructor](BulkActionsControllerApi.md#constructor)

### Properties

- [basePath](BulkActionsControllerApi.md#basepath)
- [configuration](BulkActionsControllerApi.md#configuration)
- [fetch](BulkActionsControllerApi.md#fetch)

### Methods

- [bulkCreateInboxes](BulkActionsControllerApi.md#bulkcreateinboxes)
- [bulkDeleteInboxes](BulkActionsControllerApi.md#bulkdeleteinboxes)
- [bulkSendEmails](BulkActionsControllerApi.md#bulksendemails)

## Constructors

### constructor

• **new BulkActionsControllerApi**(`configuration?`, `basePath?`, `fetch?`)

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

### bulkCreateInboxes

▸ **bulkCreateInboxes**(`count`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)[]\>

**`summary`** Bulk create Inboxes (email addresses)

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Number of inboxes to be created in bulk |
| `options?` | `any` | - |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)[]\>

#### Defined in

[src/generated/api.ts:10636](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L10636)

___

### bulkDeleteInboxes

▸ **bulkDeleteInboxes**(`ids`, `options?`): `Promise`<`Response`\>

**`summary`** Bulk Delete Inboxes

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | ids |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:10651](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L10651)

___

### bulkSendEmails

▸ **bulkSendEmails**(`bulkSendEmailOptions`, `options?`): `Promise`<`Response`\>

**`summary`** Bulk Send Emails

**`throws`** {RequiredError}

**`memberof`** BulkActionsControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bulkSendEmailOptions` | [`BulkSendEmailOptions`](../interfaces/BulkSendEmailOptions.md) | bulkSendEmailOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:10666](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L10666)

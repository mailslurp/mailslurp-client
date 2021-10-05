[MailSlurp JS](../README.md) / InboxForwarderControllerApi

# Class: InboxForwarderControllerApi

InboxForwarderControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InboxForwarderControllerApi`**

## Table of contents

### Constructors

- [constructor](InboxForwarderControllerApi.md#constructor)

### Properties

- [basePath](InboxForwarderControllerApi.md#basepath)
- [configuration](InboxForwarderControllerApi.md#configuration)
- [fetch](InboxForwarderControllerApi.md#fetch)

### Methods

- [createNewInboxForwarder](InboxForwarderControllerApi.md#createnewinboxforwarder)
- [deleteInboxForwarder](InboxForwarderControllerApi.md#deleteinboxforwarder)
- [deleteInboxForwarders](InboxForwarderControllerApi.md#deleteinboxforwarders)
- [getInboxForwarder](InboxForwarderControllerApi.md#getinboxforwarder)
- [getInboxForwarders](InboxForwarderControllerApi.md#getinboxforwarders)
- [testInboxForwarder](InboxForwarderControllerApi.md#testinboxforwarder)
- [testInboxForwardersForInbox](InboxForwarderControllerApi.md#testinboxforwardersforinbox)
- [testNewInboxForwarder](InboxForwarderControllerApi.md#testnewinboxforwarder)

## Constructors

### constructor

• **new InboxForwarderControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createNewInboxForwarder

▸ **createNewInboxForwarder**(`createInboxForwarderOptions`, `inboxId?`, `options?`): `Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving

**`summary`** Create an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createInboxForwarderOptions` | [`CreateInboxForwarderOptions`](../interfaces/CreateInboxForwarderOptions.md) | createInboxForwarderOptions |
| `inboxId?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

#### Defined in

[src/generated/api.ts:24286](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24286)

___

### deleteInboxForwarder

▸ **deleteInboxForwarder**(`id`, `options?`): `Promise`<`Response`\>

Delete inbox forwarder

**`summary`** Delete an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of inbox forwarder |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:24308](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24308)

___

### deleteInboxForwarders

▸ **deleteInboxForwarders**(`inboxId?`, `options?`): `Promise`<`Response`\>

Delete inbox forwarders. Accepts optional inboxId filter.

**`summary`** Delete inbox forwarders

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:24322](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24322)

___

### getInboxForwarder

▸ **getInboxForwarder**(`id`, `options?`): `Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

Get inbox ruleset

**`summary`** Get an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of inbox forwarder |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxForwarderDto`](../interfaces/InboxForwarderDto.md)\>

#### Defined in

[src/generated/api.ts:24336](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24336)

___

### getInboxForwarders

▸ **getInboxForwarders**(`before?`, `inboxId?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `options?`): `Promise`<[`PageInboxForwarderDto`](../interfaces/PageInboxForwarderDto.md)\>

List all forwarders attached to an inbox

**`summary`** List inbox forwarders

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

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

`Promise`<[`PageInboxForwarderDto`](../interfaces/PageInboxForwarderDto.md)\>

#### Defined in

[src/generated/api.ts:24356](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24356)

___

### testInboxForwarder

▸ **testInboxForwarder**(`id`, `inboxForwarderTestOptions`, `options?`): `Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

Test an inbox forwarder

**`summary`** Test an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of inbox forwarder |
| `inboxForwarderTestOptions` | [`InboxForwarderTestOptions`](../interfaces/InboxForwarderTestOptions.md) | inboxForwarderTestOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

#### Defined in

[src/generated/api.ts:24389](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24389)

___

### testInboxForwardersForInbox

▸ **testInboxForwardersForInbox**(`inboxForwarderTestOptions`, `inboxId`, `options?`): `Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

Test inbox forwarders for inbox

**`summary`** Test inbox forwarders for inbox

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxForwarderTestOptions` | [`InboxForwarderTestOptions`](../interfaces/InboxForwarderTestOptions.md) | inboxForwarderTestOptions |
| `inboxId` | `string` | ID of inbox |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

#### Defined in

[src/generated/api.ts:24412](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24412)

___

### testNewInboxForwarder

▸ **testNewInboxForwarder**(`testNewInboxForwarderOptions`, `options?`): `Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

Test new inbox forwarder

**`summary`** Test new inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `testNewInboxForwarderOptions` | [`TestNewInboxForwarderOptions`](../interfaces/TestNewInboxForwarderOptions.md) | testNewInboxForwarderOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxForwarderTestResult`](../interfaces/InboxForwarderTestResult.md)\>

#### Defined in

[src/generated/api.ts:24434](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L24434)

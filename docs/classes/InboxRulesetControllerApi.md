[MailSlurp JS](../README.md) / InboxRulesetControllerApi

# Class: InboxRulesetControllerApi

InboxRulesetControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InboxRulesetControllerApi`**

## Table of contents

### Constructors

- [constructor](InboxRulesetControllerApi.md#constructor)

### Properties

- [basePath](InboxRulesetControllerApi.md#basepath)
- [configuration](InboxRulesetControllerApi.md#configuration)
- [fetch](InboxRulesetControllerApi.md#fetch)

### Methods

- [createNewInboxRuleset](InboxRulesetControllerApi.md#createnewinboxruleset)
- [deleteInboxRuleset](InboxRulesetControllerApi.md#deleteinboxruleset)
- [deleteInboxRulesets](InboxRulesetControllerApi.md#deleteinboxrulesets)
- [getInboxRuleset](InboxRulesetControllerApi.md#getinboxruleset)
- [getInboxRulesets](InboxRulesetControllerApi.md#getinboxrulesets)
- [testInboxRuleset](InboxRulesetControllerApi.md#testinboxruleset)
- [testInboxRulesetsForInbox](InboxRulesetControllerApi.md#testinboxrulesetsforinbox)
- [testNewInboxRuleset](InboxRulesetControllerApi.md#testnewinboxruleset)

## Constructors

### constructor

• **new InboxRulesetControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createNewInboxRuleset

▸ **createNewInboxRuleset**(`createInboxRulesetOptions`, `inboxId?`, `options?`): `Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving

**`summary`** Create an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createInboxRulesetOptions` | [`CreateInboxRulesetOptions`](../interfaces/CreateInboxRulesetOptions.md) | createInboxRulesetOptions |
| `inboxId?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

#### Defined in

[src/generated/api.ts:24408](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24408)

___

### deleteInboxRuleset

▸ **deleteInboxRuleset**(`id`, `options?`): `Promise`<`Response`\>

Delete inbox ruleset

**`summary`** Delete an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of inbox ruleset |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:24430](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24430)

___

### deleteInboxRulesets

▸ **deleteInboxRulesets**(`inboxId?`, `options?`): `Promise`<`Response`\>

Delete inbox rulesets. Accepts optional inboxId filter.

**`summary`** Delete inbox rulesets

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:24444](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24444)

___

### getInboxRuleset

▸ **getInboxRuleset**(`id`, `options?`): `Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

Get inbox ruleset

**`summary`** Get an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of inbox ruleset |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

#### Defined in

[src/generated/api.ts:24458](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24458)

___

### getInboxRulesets

▸ **getInboxRulesets**(`inboxId?`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

List all rulesets attached to an inbox

**`summary`** List inbox rulesets

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

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

`Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

#### Defined in

[src/generated/api.ts:24477](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24477)

___

### testInboxRuleset

▸ **testInboxRuleset**(`id`, `inboxRulesetTestOptions`, `options?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test an inbox ruleset

**`summary`** Test an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of inbox ruleset |
| `inboxRulesetTestOptions` | [`InboxRulesetTestOptions`](../interfaces/InboxRulesetTestOptions.md) | inboxRulesetTestOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

#### Defined in

[src/generated/api.ts:24504](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24504)

___

### testInboxRulesetsForInbox

▸ **testInboxRulesetsForInbox**(`inboxId`, `inboxRulesetTestOptions`, `options?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test inbox rulesets for inbox

**`summary`** Test inbox rulesets for inbox

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | ID of inbox |
| `inboxRulesetTestOptions` | [`InboxRulesetTestOptions`](../interfaces/InboxRulesetTestOptions.md) | inboxRulesetTestOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

#### Defined in

[src/generated/api.ts:24525](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24525)

___

### testNewInboxRuleset

▸ **testNewInboxRuleset**(`testNewInboxRulesetOptions`, `options?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test new inbox ruleset

**`summary`** Test new inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `testNewInboxRulesetOptions` | [`TestNewInboxRulesetOptions`](../interfaces/TestNewInboxRulesetOptions.md) | testNewInboxRulesetOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

#### Defined in

[src/generated/api.ts:24547](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L24547)

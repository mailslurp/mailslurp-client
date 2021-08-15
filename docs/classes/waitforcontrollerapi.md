[MailSlurp JS](../README.md) / WaitForControllerApi

# Class: WaitForControllerApi

WaitForControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`WaitForControllerApi`**

## Table of contents

### Constructors

- [constructor](WaitForControllerApi.md#constructor)

### Properties

- [basePath](WaitForControllerApi.md#basepath)
- [configuration](WaitForControllerApi.md#configuration)
- [fetch](WaitForControllerApi.md#fetch)

### Methods

- [waitFor](WaitForControllerApi.md#waitfor)
- [waitForEmailCount](WaitForControllerApi.md#waitforemailcount)
- [waitForLatestEmail](WaitForControllerApi.md#waitforlatestemail)
- [waitForMatchingEmails](WaitForControllerApi.md#waitformatchingemails)
- [waitForMatchingFirstEmail](WaitForControllerApi.md#waitformatchingfirstemail)
- [waitForNthEmail](WaitForControllerApi.md#waitfornthemail)

## Constructors

### constructor

• **new WaitForControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L59)

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

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### waitFor

▸ **waitFor**(`waitForConditions?`, `options?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met

**`summary`** Wait for an email to match the provided filter conditions such as subject contains keyword.

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `waitForConditions?` | [`WaitForConditions`](../interfaces/WaitForConditions.md) |
| `options?` | `any` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

#### Defined in

[src/generated/api.ts:28721](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L28721)

___

### waitForEmailCount

▸ **waitForEmailCount**(`count?`, `delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`summary`** Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `count?` | `number` |
| `delay?` | `number` |
| `inboxId?` | `string` |
| `since?` | `Date` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `timeout?` | `number` |
| `unreadOnly?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

#### Defined in

[src/generated/api.ts:28742](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L28742)

___

### waitForLatestEmail

▸ **waitForLatestEmail**(`delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.

**`summary`** Fetch inbox's latest email or if empty wait for an email to arrive

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |
| `inboxId?` | `string` |
| `since?` | `Date` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `timeout?` | `number` |
| `unreadOnly?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/generated/api.ts:28777](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L28777)

___

### waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`, `count?`, `delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.

**`summary`** Wait or return list of emails that match simple matching patterns

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchOptions` | [`MatchOptions`](../interfaces/MatchOptions.md) | matchOptions |
| `count?` | `number` | - |
| `delay?` | `number` | - |
| `inboxId?` | `string` | - |
| `since?` | `Date` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `timeout?` | `number` | - |
| `unreadOnly?` | `boolean` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

#### Defined in

[src/generated/api.ts:28812](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L28812)

___

### waitForMatchingFirstEmail

▸ **waitForMatchingFirstEmail**(`matchOptions`, `delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.

**`summary`** Wait for or return the first email that matches provided MatchOptions array

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchOptions` | [`MatchOptions`](../interfaces/MatchOptions.md) | matchOptions |
| `delay?` | `number` | - |
| `inboxId?` | `string` | - |
| `since?` | `Date` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `timeout?` | `number` | - |
| `unreadOnly?` | `boolean` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/generated/api.ts:28850](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L28850)

___

### waitForNthEmail

▸ **waitForNthEmail**(`delay?`, `inboxId?`, `index?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`summary`** Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay?` | `number` |
| `inboxId?` | `string` |
| `index?` | `number` |
| `since?` | `Date` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `timeout?` | `number` |
| `unreadOnly?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/generated/api.ts:28888](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L28888)

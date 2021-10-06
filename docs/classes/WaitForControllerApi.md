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

[src/generated/api.ts:30515](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L30515)

___

### waitForEmailCount

▸ **waitForEmailCount**(`before?`, `count?`, `delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`summary`** Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
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

[src/generated/api.ts:30537](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L30537)

___

### waitForLatestEmail

▸ **waitForLatestEmail**(`before?`, `delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.

**`summary`** Fetch inbox's latest email or if empty wait for an email to arrive

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
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

[src/generated/api.ts:30575](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L30575)

___

### waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`, `before?`, `count?`, `delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.

**`summary`** Wait or return list of emails that match simple matching patterns

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchOptions` | [`MatchOptions`](../interfaces/MatchOptions.md) | matchOptions |
| `before?` | `Date` | - |
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

[src/generated/api.ts:30613](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L30613)

___

### waitForMatchingFirstEmail

▸ **waitForMatchingFirstEmail**(`matchOptions`, `before?`, `delay?`, `inboxId?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.

**`summary`** Wait for or return the first email that matches provided MatchOptions array

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matchOptions` | [`MatchOptions`](../interfaces/MatchOptions.md) | matchOptions |
| `before?` | `Date` | - |
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

[src/generated/api.ts:30654](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L30654)

___

### waitForNthEmail

▸ **waitForNthEmail**(`before?`, `delay?`, `inboxId?`, `index?`, `since?`, `sort?`, `timeout?`, `unreadOnly?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`summary`** Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
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

[src/generated/api.ts:30695](https://github.com/mailslurp/mailslurp-client/blob/5523864/src/generated/api.ts#L30695)

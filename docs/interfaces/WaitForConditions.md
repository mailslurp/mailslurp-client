[MailSlurp JS](../README.md) / WaitForConditions

# Interface: WaitForConditions

Conditions that a `waitForXEmails` endpoint operates on. The methods wait until given conditions are met or a timeout is reached. If the conditions are met without needing to wait the results will be returned immediately. Can include `unreadOnly` to ignore already read emails that were returned in an API call or viewing in the dashboard. Can also include matches for emails containing `from`, `subject`, `hasAttachments` etc.

**`export`**

**`interface`** WaitForConditions

## Table of contents

### Properties

- [count](WaitForConditions.md#count)
- [countType](WaitForConditions.md#counttype)
- [inboxId](WaitForConditions.md#inboxid)
- [matches](WaitForConditions.md#matches)
- [sortDirection](WaitForConditions.md#sortdirection)
- [timeout](WaitForConditions.md#timeout)
- [unreadOnly](WaitForConditions.md#unreadonly)

## Properties

### count

• `Optional` **count**: `number`

Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.

**`memberof`** WaitForConditions

#### Defined in

[src/generated/api.ts:6176](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L6176)

___

### countType

• `Optional` **countType**: [`CountTypeEnum`](../enums/WaitForConditions.CountTypeEnum.md)

How should the found count be compared to the expected count.

**`memberof`** WaitForConditions

#### Defined in

[src/generated/api.ts:6182](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L6182)

___

### inboxId

• `Optional` **inboxId**: `string`

ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.

**`memberof`** WaitForConditions

#### Defined in

[src/generated/api.ts:6188](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L6188)

___

### matches

• `Optional` **matches**: [`MatchOption`](MatchOption.md)[]

Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.

**`memberof`** WaitForConditions

#### Defined in

[src/generated/api.ts:6194](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L6194)

___

### sortDirection

• `Optional` **sortDirection**: [`SortDirectionEnum`](../enums/WaitForConditions.SortDirectionEnum.md)

Direction to sort matching emails by created time

**`memberof`** WaitForConditions

#### Defined in

[src/generated/api.ts:6200](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L6200)

___

### timeout

• `Optional` **timeout**: `number`

Max time in milliseconds to retry the `waitFor` operation until conditions are met.

**`memberof`** WaitForConditions

#### Defined in

[src/generated/api.ts:6206](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L6206)

___

### unreadOnly

• `Optional` **unreadOnly**: `boolean`

Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.

**`memberof`** WaitForConditions

#### Defined in

[src/generated/api.ts:6212](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L6212)

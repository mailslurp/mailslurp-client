**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WaitForConditions

# Namespace: WaitForConditions

**`export`** 

**`namespace`** WaitForConditions

## Index

### Enumerations

* [CountTypeEnum](../enums/waitforconditions.counttypeenum.md)
* [SortDirectionEnum](../enums/waitforconditions.sortdirectionenum.md)

### Properties

* [count](waitforconditions.md#count)
* [countType](waitforconditions.md#counttype)
* [inboxId](waitforconditions.md#inboxid)
* [matches](waitforconditions.md#matches)
* [sortDirection](waitforconditions.md#sortdirection)
* [timeout](waitforconditions.md#timeout)
* [unreadOnly](waitforconditions.md#unreadonly)

## Properties

### count

• `Optional` **count**: number

*Defined in [src/generated/api.ts:5850](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5850)*

Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.

**`memberof`** WaitForConditions

___

### countType

• `Optional` **countType**: [CountTypeEnum](../enums/waitforconditions.counttypeenum.md)

*Defined in [src/generated/api.ts:5856](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5856)*

How should the found count be compared to the expected count.

**`memberof`** WaitForConditions

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:5862](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5862)*

ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.

**`memberof`** WaitForConditions

___

### matches

• `Optional` **matches**: Array\<[MatchOption](matchoption.md)>

*Defined in [src/generated/api.ts:5868](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5868)*

Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.

**`memberof`** WaitForConditions

___

### sortDirection

• `Optional` **sortDirection**: [SortDirectionEnum](../enums/waitforconditions.sortdirectionenum.md)

*Defined in [src/generated/api.ts:5874](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5874)*

Direction to sort matching emails by created time

**`memberof`** WaitForConditions

___

### timeout

• `Optional` **timeout**: number

*Defined in [src/generated/api.ts:5880](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5880)*

Max time in milliseconds to retry the `waitFor` operation until conditions are met.

**`memberof`** WaitForConditions

___

### unreadOnly

• `Optional` **unreadOnly**: boolean

*Defined in [src/generated/api.ts:5886](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L5886)*

Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.

**`memberof`** WaitForConditions

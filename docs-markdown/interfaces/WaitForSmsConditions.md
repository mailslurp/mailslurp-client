[MailSlurp JS](../README.md) / WaitForSmsConditions

# Interface: WaitForSmsConditions

Conditions to apply to emails that you are waiting for

**`Export`**

**`Interface`**

WaitForSmsConditions

## Table of contents

### Properties

- [before](WaitForSmsConditions.md#before)
- [count](WaitForSmsConditions.md#count)
- [countType](WaitForSmsConditions.md#counttype)
- [delayTimeout](WaitForSmsConditions.md#delaytimeout)
- [limit](WaitForSmsConditions.md#limit)
- [matches](WaitForSmsConditions.md#matches)
- [phoneNumberId](WaitForSmsConditions.md#phonenumberid)
- [since](WaitForSmsConditions.md#since)
- [sortDirection](WaitForSmsConditions.md#sortdirection)
- [timeout](WaitForSmsConditions.md#timeout)
- [unreadOnly](WaitForSmsConditions.md#unreadonly)

## Properties

### before

• `Optional` **before**: `Date`

ISO Date Time latest time of SMS to consider. Filter for matching SMSs that were received before this date

**`Memberof`**

WaitForSmsConditions

___

### count

• **count**: `number`

Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.

**`Memberof`**

WaitForSmsConditions

___

### countType

• `Optional` **countType**: [`WaitForSmsConditionsCountTypeEnum`](../enums/WaitForSmsConditionsCountTypeEnum.md)

How result size should be compared with the expected size. Exactly or at-least matching result?

**`Memberof`**

WaitForSmsConditions

___

### delayTimeout

• `Optional` **delayTimeout**: `number`

Max time in milliseconds to wait between retries if a `timeout` is specified.

**`Memberof`**

WaitForSmsConditions

___

### limit

• `Optional` **limit**: `number`

Limit results

**`Memberof`**

WaitForSmsConditions

___

### matches

• `Optional` **matches**: [`SmsMatchOption`](SmsMatchOption.md)[]

Conditions that should be matched for an SMS to qualify for results. Each condition will be applied in order to each SMS within a phone number to filter a result list of matching SMSs you are waiting for.

**`Memberof`**

WaitForSmsConditions

___

### phoneNumberId

• **phoneNumberId**: `string`

ID of phone number to search within and apply conditions to. Essentially filtering the SMS found to give a count.

**`Memberof`**

WaitForSmsConditions

___

### since

• `Optional` **since**: `Date`

ISO Date Time earliest time of SMS to consider. Filter for matching SMSs that were received after this date

**`Memberof`**

WaitForSmsConditions

___

### sortDirection

• `Optional` **sortDirection**: [`WaitForSmsConditionsSortDirectionEnum`](../enums/WaitForSmsConditionsSortDirectionEnum.md)

Direction to sort matching SMSs by created time

**`Memberof`**

WaitForSmsConditions

___

### timeout

• **timeout**: `number`

Max time in milliseconds to retry the `waitFor` operation until conditions are met.

**`Memberof`**

WaitForSmsConditions

___

### unreadOnly

• `Optional` **unreadOnly**: `boolean`

Apply conditions only to **unread** SMS. All SMS messages begin with `read=false`. An SMS is marked `read=true` when an `SMS` has been returned to the user at least once. For example you have called `getSms`, or you have viewed the SMS in the dashboard.

**`Memberof`**

WaitForSmsConditions

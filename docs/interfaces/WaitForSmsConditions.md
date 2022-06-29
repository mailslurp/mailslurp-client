# Interface: WaitForSmsConditions

Conditions to apply to emails that you are waiting for

**`export`**

**`interface`** WaitForSmsConditions

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

### <a id="before" name="before"></a> before

• `Optional` **before**: `Date`

ISO Date Time latest time of SMS to consider. Filter for matching SMSs that were received before this date

**`memberof`** WaitForSmsConditions

___

### <a id="count" name="count"></a> count

• **count**: `number`

Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.

**`memberof`** WaitForSmsConditions

___

### <a id="counttype" name="counttype"></a> countType

• `Optional` **countType**: [`WaitForSmsConditionsCountTypeEnum`](../enums/WaitForSmsConditionsCountTypeEnum.md)

How result size should be compared with the expected size. Exactly or at-least matching result?

**`memberof`** WaitForSmsConditions

___

### <a id="delaytimeout" name="delaytimeout"></a> delayTimeout

• `Optional` **delayTimeout**: `number`

Max time in milliseconds to wait between retries if a `timeout` is specified.

**`memberof`** WaitForSmsConditions

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

Limit results

**`memberof`** WaitForSmsConditions

___

### <a id="matches" name="matches"></a> matches

• `Optional` **matches**: [`SmsMatchOption`](SmsMatchOption.md)[]

Conditions that should be matched for an SMS to qualify for results. Each condition will be applied in order to each SMS within a phone number to filter a result list of matching SMSs you are waiting for.

**`memberof`** WaitForSmsConditions

___

### <a id="phonenumberid" name="phonenumberid"></a> phoneNumberId

• **phoneNumberId**: `string`

ID of phone number to search within and apply conditions to. Essentially filtering the SMS found to give a count.

**`memberof`** WaitForSmsConditions

___

### <a id="since" name="since"></a> since

• `Optional` **since**: `Date`

ISO Date Time earliest time of SMS to consider. Filter for matching SMSs that were received after this date

**`memberof`** WaitForSmsConditions

___

### <a id="sortdirection" name="sortdirection"></a> sortDirection

• `Optional` **sortDirection**: [`WaitForSmsConditionsSortDirectionEnum`](../enums/WaitForSmsConditionsSortDirectionEnum.md)

Direction to sort matching SMSs by created time

**`memberof`** WaitForSmsConditions

___

### <a id="timeout" name="timeout"></a> timeout

• **timeout**: `number`

Max time in milliseconds to retry the `waitFor` operation until conditions are met.

**`memberof`** WaitForSmsConditions

___

### <a id="unreadonly" name="unreadonly"></a> unreadOnly

• `Optional` **unreadOnly**: `boolean`

Apply conditions only to **unread** SMS. All SMS messages begin with `read=false`. An SMS is marked `read=true` when an `SMS` has been returned to the user at least once. For example you have called `getSms` or `waitForSms` etc., or you have viewed the SMS in the dashboard.

**`memberof`** WaitForSmsConditions

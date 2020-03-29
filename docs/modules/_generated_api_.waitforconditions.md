[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](_generated_api_.md) › [WaitForConditions](_generated_api_.waitforconditions.md)

# Module: WaitForConditions

**`export`** 

**`namespace`** WaitForConditions

## Index

### Enumerations

* [CountTypeEnum](../enums/_generated_api_.waitforconditions.counttypeenum.md)
* [SortDirectionEnum](../enums/_generated_api_.waitforconditions.sortdirectionenum.md)

### Properties

* [count](_generated_api_.waitforconditions.md#optional-count)
* [countType](_generated_api_.waitforconditions.md#optional-counttype)
* [inboxId](_generated_api_.waitforconditions.md#optional-inboxid)
* [matches](_generated_api_.waitforconditions.md#optional-matches)
* [sortDirection](_generated_api_.waitforconditions.md#optional-sortdirection)
* [timeout](_generated_api_.waitforconditions.md#optional-timeout)
* [unreadOnly](_generated_api_.waitforconditions.md#optional-unreadonly)

## Properties

### `Optional` count

• **count**? : *number*

Defined in src/generated/api.ts:2197

Number of results that should match conditions

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` countType

• **countType**? : *[CountTypeEnum](../enums/_generated_api_.waitforconditions.counttypeenum.md)*

Defined in src/generated/api.ts:2203

Should exactly count number of results be returned or at least that many.

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` inboxId

• **inboxId**? : *string*

Defined in src/generated/api.ts:2209

Inbox to search within

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` matches

• **matches**? : *Array‹[MatchOption](_generated_api_.matchoption.md)›*

Defined in src/generated/api.ts:2215

Conditions that should be matched

**`type`** {Array<MatchOption>}

**`memberof`** WaitForConditions

___

### `Optional` sortDirection

• **sortDirection**? : *[SortDirectionEnum](../enums/_generated_api_.waitforconditions.sortdirectionenum.md)*

Defined in src/generated/api.ts:2221

Direction to sort matching emails by created time

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` timeout

• **timeout**? : *number*

Defined in src/generated/api.ts:2227

Max time in milliseconds to wait until conditions are met

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` unreadOnly

• **unreadOnly**? : *boolean*

Defined in src/generated/api.ts:2233

Apply only to unread emails

**`type`** {boolean}

**`memberof`** WaitForConditions

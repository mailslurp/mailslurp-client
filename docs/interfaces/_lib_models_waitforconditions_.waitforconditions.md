[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/WaitForConditions"](../modules/_lib_models_waitforconditions_.md) › [WaitForConditions](_lib_models_waitforconditions_.waitforconditions.md)

# Interface: WaitForConditions

**`export`** 

**`interface`** WaitForConditions

## Hierarchy

* **WaitForConditions**

## Index

### Properties

* [count](_lib_models_waitforconditions_.waitforconditions.md#optional-count)
* [countType](_lib_models_waitforconditions_.waitforconditions.md#optional-counttype)
* [inboxId](_lib_models_waitforconditions_.waitforconditions.md#optional-inboxid)
* [matches](_lib_models_waitforconditions_.waitforconditions.md#optional-matches)
* [sortDirection](_lib_models_waitforconditions_.waitforconditions.md#optional-sortdirection)
* [timeout](_lib_models_waitforconditions_.waitforconditions.md#optional-timeout)
* [unreadOnly](_lib_models_waitforconditions_.waitforconditions.md#optional-unreadonly)

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [src/lib/models/WaitForConditions.ts:34](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WaitForConditions.ts#L34)*

Number of results that should match conditions

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` countType

• **countType**? : *[WaitForConditionsCountTypeEnum](../enums/_lib_models_waitforconditions_.waitforconditionscounttypeenum.md)*

*Defined in [src/lib/models/WaitForConditions.ts:40](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WaitForConditions.ts#L40)*

Should exactly count number of results be returned or at least that many.

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/lib/models/WaitForConditions.ts:46](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WaitForConditions.ts#L46)*

Inbox to search within

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` matches

• **matches**? : *Array‹[MatchOption](_lib_models_matchoption_.matchoption.md)›*

*Defined in [src/lib/models/WaitForConditions.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WaitForConditions.ts#L52)*

Conditions that should be matched

**`type`** {Array<MatchOption>}

**`memberof`** WaitForConditions

___

### `Optional` sortDirection

• **sortDirection**? : *[WaitForConditionsSortDirectionEnum](../enums/_lib_models_waitforconditions_.waitforconditionssortdirectionenum.md)*

*Defined in [src/lib/models/WaitForConditions.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WaitForConditions.ts#L58)*

Direction to sort matching emails by created time

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` timeout

• **timeout**? : *number*

*Defined in [src/lib/models/WaitForConditions.ts:64](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WaitForConditions.ts#L64)*

Max time in milliseconds to wait until conditions are met

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` unreadOnly

• **unreadOnly**? : *boolean*

*Defined in [src/lib/models/WaitForConditions.ts:70](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/WaitForConditions.ts#L70)*

Apply only to unread emails

**`type`** {boolean}

**`memberof`** WaitForConditions

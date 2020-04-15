# Module: WaitForConditions

**`export`** 

**`namespace`** WaitForConditions

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [src/generated/api.ts:2358](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2358)*

Number of results that should match conditions

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` countType

• **countType**? : *[CountTypeEnum](../enums/_generated_api_.waitforconditions.counttypeenum.md)*

*Defined in [src/generated/api.ts:2364](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2364)*

Should exactly count number of results be returned or at least that many.

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:2370](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2370)*

Inbox to search within

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` matches

• **matches**? : *Array‹[MatchOption](_generated_api_.matchoption.md)›*

*Defined in [src/generated/api.ts:2376](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2376)*

Conditions that should be matched

**`type`** {Array<MatchOption>}

**`memberof`** WaitForConditions

___

### `Optional` sortDirection

• **sortDirection**? : *[SortDirectionEnum](../enums/_generated_api_.waitforconditions.sortdirectionenum.md)*

*Defined in [src/generated/api.ts:2382](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2382)*

Direction to sort matching emails by created time

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` timeout

• **timeout**? : *number*

*Defined in [src/generated/api.ts:2388](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2388)*

Max time in milliseconds to wait until conditions are met

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` unreadOnly

• **unreadOnly**? : *boolean*

*Defined in [src/generated/api.ts:2394](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2394)*

Apply only to unread emails

**`type`** {boolean}

**`memberof`** WaitForConditions

# Interface: FlushExpiredInboxesResult

Result from calling expire on any inboxes that have applicable expiration dates given current time.

**`export`**

**`interface`** FlushExpiredInboxesResult

## Table of contents

### Properties

- [expireBefore](FlushExpiredInboxesResult.md#expirebefore)
- [inboxIds](FlushExpiredInboxesResult.md#inboxids)

## Properties

### expireBefore

• **expireBefore**: `Date`

DateTime to filter inboxes so that those expiring before this time are expired

**`memberof`** FlushExpiredInboxesResult

___

### inboxIds

• **inboxIds**: `string`[]

Inbox IDs affected by expiration

**`memberof`** FlushExpiredInboxesResult

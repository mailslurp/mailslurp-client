[MailSlurp JS](../README.md) / FlushExpiredInboxesResult

# Interface: FlushExpiredInboxesResult

Result from calling expire on any inboxes that have applicable expiration dates given current time.

**`Export`**

**`Interface`**

FlushExpiredInboxesResult

## Table of contents

### Properties

- [expireBefore](FlushExpiredInboxesResult.md#expirebefore)
- [inboxIds](FlushExpiredInboxesResult.md#inboxids)

## Properties

### expireBefore

• **expireBefore**: `Date`

DateTime to filter inboxes so that those expiring before this time are expired

**`Memberof`**

FlushExpiredInboxesResult

___

### inboxIds

• **inboxIds**: `string`[]

Inbox IDs affected by expiration

**`Memberof`**

FlushExpiredInboxesResult

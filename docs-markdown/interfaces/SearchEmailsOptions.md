[MailSlurp JS](../README.md) / SearchEmailsOptions

# Interface: SearchEmailsOptions

**`Export`**

**`Interface`**

SearchEmailsOptions

## Table of contents

### Properties

- [before](SearchEmailsOptions.md#before)
- [inboxIds](SearchEmailsOptions.md#inboxids)
- [pageIndex](SearchEmailsOptions.md#pageindex)
- [pageSize](SearchEmailsOptions.md#pagesize)
- [searchFilter](SearchEmailsOptions.md#searchfilter)
- [since](SearchEmailsOptions.md#since)
- [sortDirection](SearchEmailsOptions.md#sortdirection)
- [unreadOnly](SearchEmailsOptions.md#unreadonly)

## Properties

### before

• `Optional` **before**: `Date`

Optional filter emails received before given date time

**`Memberof`**

SearchEmailsOptions

___

### inboxIds

• `Optional` **inboxIds**: `string`[]

Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.

**`Memberof`**

SearchEmailsOptions

___

### pageIndex

• `Optional` **pageIndex**: `number`

Optional page index in email list pagination

**`Memberof`**

SearchEmailsOptions

___

### pageSize

• `Optional` **pageSize**: `number`

Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results

**`Memberof`**

SearchEmailsOptions

___

### searchFilter

• `Optional` **searchFilter**: `string`

Optional search filter. Searches email recipients, sender, subject, email address and ID. Does not search email body

**`Memberof`**

SearchEmailsOptions

___

### since

• `Optional` **since**: `Date`

Optional filter emails received after given date time

**`Memberof`**

SearchEmailsOptions

___

### sortDirection

• `Optional` **sortDirection**: [`SearchEmailsOptionsSortDirectionEnum`](../enums/SearchEmailsOptionsSortDirectionEnum.md)

Optional createdAt sort direction ASC or DESC

**`Memberof`**

SearchEmailsOptions

___

### unreadOnly

• `Optional` **unreadOnly**: `boolean`

Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly

**`Memberof`**

SearchEmailsOptions

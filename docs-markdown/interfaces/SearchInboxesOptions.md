[MailSlurp JS](../README.md) / SearchInboxesOptions

# Interface: SearchInboxesOptions

**`Export`**

**`Interface`**

SearchInboxesOptions

## Table of contents

### Properties

- [before](SearchInboxesOptions.md#before)
- [domainId](SearchInboxesOptions.md#domainid)
- [favourite](SearchInboxesOptions.md#favourite)
- [inboxFunction](SearchInboxesOptions.md#inboxfunction)
- [inboxType](SearchInboxesOptions.md#inboxtype)
- [pageIndex](SearchInboxesOptions.md#pageindex)
- [pageSize](SearchInboxesOptions.md#pagesize)
- [search](SearchInboxesOptions.md#search)
- [since](SearchInboxesOptions.md#since)
- [sortDirection](SearchInboxesOptions.md#sortdirection)
- [tag](SearchInboxesOptions.md#tag)

## Properties

### before

• `Optional` **before**: `Date`

Optional filter by created before given date time

**`Memberof`**

SearchInboxesOptions

___

### domainId

• `Optional` **domainId**: `string`

Optional domain ID filter

**`Memberof`**

SearchInboxesOptions

___

### favourite

• `Optional` **favourite**: `boolean`

Optionally filter results for favourites only

**`Memberof`**

SearchInboxesOptions

___

### inboxFunction

• `Optional` **inboxFunction**: [`SearchInboxesOptionsInboxFunctionEnum`](../enums/SearchInboxesOptionsInboxFunctionEnum.md)

Optional filter by inbox function

**`Memberof`**

SearchInboxesOptions

___

### inboxType

• `Optional` **inboxType**: [`SearchInboxesOptionsInboxTypeEnum`](../enums/SearchInboxesOptionsInboxTypeEnum.md)

Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).

**`Memberof`**

SearchInboxesOptions

___

### pageIndex

• `Optional` **pageIndex**: `number`

Optional page index in list pagination

**`Memberof`**

SearchInboxesOptions

___

### pageSize

• `Optional` **pageSize**: `number`

Optional page size in list pagination

**`Memberof`**

SearchInboxesOptions

___

### search

• `Optional` **search**: `string`

Optionally filter by search words partial matching ID, tags, name, and email address

**`Memberof`**

SearchInboxesOptions

___

### since

• `Optional` **since**: `Date`

Optional filter by created after given date time

**`Memberof`**

SearchInboxesOptions

___

### sortDirection

• `Optional` **sortDirection**: [`SearchInboxesOptionsSortDirectionEnum`](../enums/SearchInboxesOptionsSortDirectionEnum.md)

Optional createdAt sort direction ASC or DESC

**`Memberof`**

SearchInboxesOptions

___

### tag

• `Optional` **tag**: `string`

Optionally filter by tags. Will return inboxes that include given tags

**`Memberof`**

SearchInboxesOptions

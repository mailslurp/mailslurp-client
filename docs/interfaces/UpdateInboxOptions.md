# Interface: UpdateInboxOptions

Options for updating inbox properties

**`export`**

**`interface`** UpdateInboxOptions

## Table of contents

### Properties

- [description](UpdateInboxOptions.md#description)
- [expiresAt](UpdateInboxOptions.md#expiresat)
- [favourite](UpdateInboxOptions.md#favourite)
- [name](UpdateInboxOptions.md#name)
- [tags](UpdateInboxOptions.md#tags)

## Properties

### <a id="description" name="description"></a> description

• `Optional` **description**: `string`

Description of an inbox for labelling and searching purposes

**`memberof`** UpdateInboxOptions

___

### <a id="expiresat" name="expiresat"></a> expiresAt

• `Optional` **expiresAt**: `Date`

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`memberof`** UpdateInboxOptions

___

### <a id="favourite" name="favourite"></a> favourite

• `Optional` **favourite**: `boolean`

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** UpdateInboxOptions

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** UpdateInboxOptions

___

### <a id="tags" name="tags"></a> tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** UpdateInboxOptions

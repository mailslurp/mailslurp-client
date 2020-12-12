**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / UpdateInboxOptions

# Interface: UpdateInboxOptions

Options for updating inbox properties

**`export`** 

**`interface`** UpdateInboxOptions

## Hierarchy

* **UpdateInboxOptions**

## Index

### Properties

* [description](updateinboxoptions.md#description)
* [expiresAt](updateinboxoptions.md#expiresat)
* [favourite](updateinboxoptions.md#favourite)
* [name](updateinboxoptions.md#name)
* [tags](updateinboxoptions.md#tags)

## Properties

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:3146](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L3146)*

Optional description of an inbox for labelling purposes

**`memberof`** UpdateInboxOptions

___

### expiresAt

• `Optional` **expiresAt**: Date

*Defined in [src/generated/api.ts:3152](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L3152)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`memberof`** UpdateInboxOptions

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:3158](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L3158)*

Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access

**`memberof`** UpdateInboxOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:3164](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L3164)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** UpdateInboxOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:3170](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L3170)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** UpdateInboxOptions

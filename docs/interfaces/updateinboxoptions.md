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

*Defined in [src/generated/api.ts:2656](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2656)*

Optional description of an inbox for labelling purposes

**`memberof`** UpdateInboxOptions

___

### expiresAt

• `Optional` **expiresAt**: Date

*Defined in [src/generated/api.ts:2662](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2662)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`memberof`** UpdateInboxOptions

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:2668](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2668)*

Is the inbox favourited

**`memberof`** UpdateInboxOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:2674](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2674)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** UpdateInboxOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:2680](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L2680)*

Tags that inbox has been tagged with

**`memberof`** UpdateInboxOptions

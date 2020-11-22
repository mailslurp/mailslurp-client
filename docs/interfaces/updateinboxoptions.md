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

*Defined in [src/generated/api.ts:2592](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2592)*

Optional description of an inbox for labelling purposes

**`memberof`** UpdateInboxOptions

___

### expiresAt

• `Optional` **expiresAt**: Date

*Defined in [src/generated/api.ts:2598](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2598)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`memberof`** UpdateInboxOptions

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:2604](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2604)*

Is the inbox favourited

**`memberof`** UpdateInboxOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:2610](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2610)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** UpdateInboxOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:2616](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2616)*

Tags that inbox has been tagged with

**`memberof`** UpdateInboxOptions

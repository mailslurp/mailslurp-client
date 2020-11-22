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

*Defined in [src/generated/api.ts:2690](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L2690)*

Optional description of an inbox for labelling purposes

**`memberof`** UpdateInboxOptions

___

### expiresAt

• `Optional` **expiresAt**: Date

*Defined in [src/generated/api.ts:2696](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L2696)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`memberof`** UpdateInboxOptions

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:2702](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L2702)*

Is the inbox favourited

**`memberof`** UpdateInboxOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:2708](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L2708)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** UpdateInboxOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:2714](https://github.com/mailslurp/mailslurp-client/blob/ff09436/src/generated/api.ts#L2714)*

Tags that inbox has been tagged with

**`memberof`** UpdateInboxOptions

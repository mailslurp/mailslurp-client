[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [UpdateInboxOptions](_generated_api_.updateinboxoptions.md)

# Interface: UpdateInboxOptions

Options for updating inbox properties

**`export`** 

**`interface`** UpdateInboxOptions

## Hierarchy

* **UpdateInboxOptions**

## Index

### Properties

* [description](_generated_api_.updateinboxoptions.md#optional-description)
* [expiresAt](_generated_api_.updateinboxoptions.md#optional-expiresat)
* [favourite](_generated_api_.updateinboxoptions.md#optional-favourite)
* [name](_generated_api_.updateinboxoptions.md#optional-name)
* [tags](_generated_api_.updateinboxoptions.md#optional-tags)

## Properties

### `Optional` description

• **description**? : *string*

Defined in src/generated/api.ts:2093

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` expiresAt

• **expiresAt**? : *Date*

Defined in src/generated/api.ts:2099

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted.

**`type`** {Date}

**`memberof`** UpdateInboxOptions

___

### `Optional` favourite

• **favourite**? : *boolean*

Defined in src/generated/api.ts:2105

Is the inbox favourited

**`type`** {boolean}

**`memberof`** UpdateInboxOptions

___

### `Optional` name

• **name**? : *string*

Defined in src/generated/api.ts:2111

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

Defined in src/generated/api.ts:2117

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** UpdateInboxOptions

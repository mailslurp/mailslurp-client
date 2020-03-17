[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/models/UpdateInboxOptions"](../modules/_lib_models_updateinboxoptions_.md) › [UpdateInboxOptions](_lib_models_updateinboxoptions_.updateinboxoptions.md)

# Interface: UpdateInboxOptions

Options for updating inbox properties

**`export`** 

**`interface`** UpdateInboxOptions

## Hierarchy

* **UpdateInboxOptions**

## Index

### Properties

* [description](_lib_models_updateinboxoptions_.updateinboxoptions.md#optional-description)
* [expiresAt](_lib_models_updateinboxoptions_.updateinboxoptions.md#optional-expiresat)
* [favourite](_lib_models_updateinboxoptions_.updateinboxoptions.md#optional-favourite)
* [name](_lib_models_updateinboxoptions_.updateinboxoptions.md#optional-name)
* [tags](_lib_models_updateinboxoptions_.updateinboxoptions.md#optional-tags)

## Properties

### `Optional` description

• **description**? : *string*

*Defined in [src/lib/models/UpdateInboxOptions.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UpdateInboxOptions.ts#L27)*

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` expiresAt

• **expiresAt**? : *Date*

*Defined in [src/lib/models/UpdateInboxOptions.ts:33](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UpdateInboxOptions.ts#L33)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won\'t be deleted.

**`type`** {Date}

**`memberof`** UpdateInboxOptions

___

### `Optional` favourite

• **favourite**? : *boolean*

*Defined in [src/lib/models/UpdateInboxOptions.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UpdateInboxOptions.ts#L39)*

Is the inbox favourited

**`type`** {boolean}

**`memberof`** UpdateInboxOptions

___

### `Optional` name

• **name**? : *string*

*Defined in [src/lib/models/UpdateInboxOptions.ts:45](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UpdateInboxOptions.ts#L45)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** UpdateInboxOptions

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/lib/models/UpdateInboxOptions.ts:51](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/models/UpdateInboxOptions.ts#L51)*

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** UpdateInboxOptions

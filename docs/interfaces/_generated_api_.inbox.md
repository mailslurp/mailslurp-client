[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [Inbox](_generated_api_.inbox.md)

# Interface: Inbox

Representation of an inbox with an email address. Emails can be sent to or from this email address.

**`export`** 

**`interface`** Inbox

## Hierarchy

* **Inbox**

## Index

### Properties

* [createdAt](_generated_api_.inbox.md#optional-createdat)
* [description](_generated_api_.inbox.md#optional-description)
* [emailAddress](_generated_api_.inbox.md#optional-emailaddress)
* [expiresAt](_generated_api_.inbox.md#optional-expiresat)
* [favourite](_generated_api_.inbox.md#optional-favourite)
* [id](_generated_api_.inbox.md#optional-id)
* [name](_generated_api_.inbox.md#optional-name)
* [tags](_generated_api_.inbox.md#optional-tags)
* [userId](_generated_api_.inbox.md#optional-userid)

## Properties

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:977](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L977)*

When was the inbox created

**`type`** {Date}

**`memberof`** Inbox

___

### `Optional` description

• **description**? : *string*

*Defined in [src/generated/api.ts:983](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L983)*

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` emailAddress

• **emailAddress**? : *string*

*Defined in [src/generated/api.ts:989](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L989)*

The inbox's email address. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints.

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` expiresAt

• **expiresAt**? : *Date*

*Defined in [src/generated/api.ts:995](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L995)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted.

**`type`** {Date}

**`memberof`** Inbox

___

### `Optional` favourite

• **favourite**? : *boolean*

*Defined in [src/generated/api.ts:1001](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L1001)*

Is the inbox favourited

**`type`** {boolean}

**`memberof`** Inbox

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:1007](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L1007)*

ID of the inbox

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:1013](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L1013)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/generated/api.ts:1019](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L1019)*

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** Inbox

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/generated/api.ts:1025](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7518dcd/src/generated/api.ts#L1025)*

ID of user that inbox belongs to

**`type`** {string}

**`memberof`** Inbox

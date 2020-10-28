# Interface: Inbox

Representation of an inbox with an email address. Emails can be sent to or from this email address.

**`export`** 

**`interface`** Inbox

## Hierarchy

* **Inbox**

## Properties

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:1015](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1015)*

When was the inbox created

**`type`** {Date}

**`memberof`** Inbox

___

### `Optional` description

• **description**? : *string*

*Defined in [src/generated/api.ts:1021](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1021)*

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` emailAddress

• **emailAddress**? : *string*

*Defined in [src/generated/api.ts:1027](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1027)*

The inbox's email address. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints.

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` expiresAt

• **expiresAt**? : *string*

*Defined in [src/generated/api.ts:1033](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1033)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` favourite

• **favourite**? : *boolean*

*Defined in [src/generated/api.ts:1039](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1039)*

Is the inbox favourited

**`type`** {boolean}

**`memberof`** Inbox

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:1045](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1045)*

ID of the inbox

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:1051](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1051)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/generated/api.ts:1057](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1057)*

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** Inbox

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/generated/api.ts:1063](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L1063)*

ID of user that inbox belongs to

**`type`** {string}

**`memberof`** Inbox

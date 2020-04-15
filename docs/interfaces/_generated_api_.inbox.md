# Interface: Inbox

Representation of an inbox with an email address. Emails can be sent to or from this email address.

**`export`** 

**`interface`** Inbox

## Hierarchy

* **Inbox**

## Properties

### `Optional` createdAt

• **createdAt**? : *Date*

*Defined in [src/generated/api.ts:974](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L974)*

When was the inbox created

**`type`** {Date}

**`memberof`** Inbox

___

### `Optional` description

• **description**? : *string*

*Defined in [src/generated/api.ts:980](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L980)*

Optional description of an inbox for labelling purposes

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` emailAddress

• **emailAddress**? : *string*

*Defined in [src/generated/api.ts:986](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L986)*

The inbox's email address. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints.

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` expiresAt

• **expiresAt**? : *Date*

*Defined in [src/generated/api.ts:992](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L992)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted.

**`type`** {Date}

**`memberof`** Inbox

___

### `Optional` favourite

• **favourite**? : *boolean*

*Defined in [src/generated/api.ts:998](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L998)*

Is the inbox favourited

**`type`** {boolean}

**`memberof`** Inbox

___

### `Optional` id

• **id**? : *string*

*Defined in [src/generated/api.ts:1004](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L1004)*

ID of the inbox

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:1010](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L1010)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`type`** {string}

**`memberof`** Inbox

___

### `Optional` tags

• **tags**? : *Array‹string›*

*Defined in [src/generated/api.ts:1016](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L1016)*

Tags that inbox has been tagged with

**`type`** {Array<string>}

**`memberof`** Inbox

___

### `Optional` userId

• **userId**? : *string*

*Defined in [src/generated/api.ts:1022](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L1022)*

ID of user that inbox belongs to

**`type`** {string}

**`memberof`** Inbox

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / Inbox

# Interface: Inbox

Representation of an inbox with an email address. Emails can be sent to or from this email address.

**`export`** 

**`interface`** Inbox

## Hierarchy

* **Inbox**

## Index

### Properties

* [createdAt](inbox.md#createdat)
* [description](inbox.md#description)
* [emailAddress](inbox.md#emailaddress)
* [expiresAt](inbox.md#expiresat)
* [favourite](inbox.md#favourite)
* [id](inbox.md#id)
* [name](inbox.md#name)
* [tags](inbox.md#tags)
* [userId](inbox.md#userid)

## Properties

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1639](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1639)*

When was the inbox created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** Inbox

___

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:1645](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1645)*

Optional description of an inbox for labelling purposes

**`memberof`** Inbox

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:1651](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1651)*

The inbox's email address. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** Inbox

___

### expiresAt

• `Optional` **expiresAt**: string

*Defined in [src/generated/api.ts:1657](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1657)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`memberof`** Inbox

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:1663](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1663)*

Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access

**`memberof`** Inbox

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1669](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1669)*

ID of the inbox. The ID is a UUID-V4 string. See the emailAddress property for the email address.

**`memberof`** Inbox

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:1675](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1675)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** Inbox

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:1681](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1681)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** Inbox

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:1687](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L1687)*

ID of user that inbox belongs to

**`memberof`** Inbox

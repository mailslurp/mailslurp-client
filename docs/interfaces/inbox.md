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

*Defined in [src/generated/api.ts:1135](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1135)*

When was the inbox created

**`memberof`** Inbox

___

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:1141](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1141)*

Optional description of an inbox for labelling purposes

**`memberof`** Inbox

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:1147](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1147)*

The inbox's email address. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints.

**`memberof`** Inbox

___

### expiresAt

• `Optional` **expiresAt**: string

*Defined in [src/generated/api.ts:1153](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1153)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`memberof`** Inbox

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:1159](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1159)*

Is the inbox favourited

**`memberof`** Inbox

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1165](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1165)*

ID of the inbox

**`memberof`** Inbox

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:1171](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1171)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** Inbox

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:1177](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1177)*

Tags that inbox has been tagged with

**`memberof`** Inbox

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:1183](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L1183)*

ID of user that inbox belongs to

**`memberof`** Inbox

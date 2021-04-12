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
* [readOnly](inbox.md#readonly)
* [tags](inbox.md#tags)
* [teamAccess](inbox.md#teamaccess)
* [userId](inbox.md#userid)

## Properties

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:1941](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1941)*

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** Inbox

___

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:1947](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1947)*

Description of an inbox for labelling and searching purposes

**`memberof`** Inbox

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:1953](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1953)*

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** Inbox

___

### expiresAt

• `Optional` **expiresAt**: string

*Defined in [src/generated/api.ts:1959](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1959)*

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`memberof`** Inbox

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:1965](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1965)*

Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access or filtering

**`memberof`** Inbox

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:1971](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1971)*

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** Inbox

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:1977](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1977)*

Name of the inbox. Displayed in the dashboard for easier search

**`memberof`** Inbox

___

### readOnly

• `Optional` **readOnly**: boolean

*Defined in [src/generated/api.ts:1983](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1983)*

Is the inbox readOnly for the caller. Read only means can not be deleted or modified.

**`memberof`** Inbox

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:1989](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1989)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** Inbox

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:1995](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1995)*

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it.

**`memberof`** Inbox

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:2001](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L2001)*

ID of user that inbox belongs to

**`memberof`** Inbox

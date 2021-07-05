**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / Inbox

# Namespace: Inbox

**`export`** 

**`namespace`** Inbox

## Index

### Enumerations

* [InboxTypeEnum](../enums/inbox.inboxtypeenum.md)

### Properties

* [createdAt](inbox.md#createdat)
* [description](inbox.md#description)
* [emailAddress](inbox.md#emailaddress)
* [expiresAt](inbox.md#expiresat)
* [favourite](inbox.md#favourite)
* [id](inbox.md#id)
* [inboxType](inbox.md#inboxtype)
* [name](inbox.md#name)
* [readOnly](inbox.md#readonly)
* [tags](inbox.md#tags)
* [teamAccess](inbox.md#teamaccess)
* [userId](inbox.md#userid)

## Properties

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:2350](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2350)*

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** Inbox

___

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:2356](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2356)*

Description of an inbox for labelling and searching purposes

**`memberof`** Inbox

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:2362](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2362)*

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** Inbox

___

### expiresAt

• `Optional` **expiresAt**: string

*Defined in [src/generated/api.ts:2368](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2368)*

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`memberof`** Inbox

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:2374](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2374)*

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** Inbox

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:2380](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2380)*

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** Inbox

___

### inboxType

• `Optional` **inboxType**: [InboxTypeEnum](../enums/inbox.inboxtypeenum.md)

*Defined in [src/generated/api.ts:2386](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2386)*

Type of inbox - either HTTP (default) or SMTP. HTTP inboxes are great for testing. SMTP inboxes are processed by a custom SMTP mail server and are better for public facing inboxes that receive emails from Gmail and other large providers. If using a custom domain the domain type must match the inbox type. Use an SMTP domain for SMTP inboxes that includes an MX record pointing to `10 mx.mailslurp.com` for inbound messages.

**`memberof`** Inbox

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:2392](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2392)*

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** Inbox

___

### readOnly

• `Optional` **readOnly**: boolean

*Defined in [src/generated/api.ts:2398](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2398)*

Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.

**`memberof`** Inbox

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:2404](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2404)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** Inbox

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2410](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2410)*

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/

**`memberof`** Inbox

___

### userId

• `Optional` **userId**: string

*Defined in [src/generated/api.ts:2416](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L2416)*

ID of user that inbox belongs to

**`memberof`** Inbox

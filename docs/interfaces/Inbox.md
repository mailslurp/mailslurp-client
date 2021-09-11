[MailSlurp JS](../README.md) / Inbox

# Interface: Inbox

Representation of a MailSlurp inbox. An inbox has an ID and a real email address. Emails can be sent to or from this email address. Inboxes are either `SMTP` or `HTTP` mailboxes. The default, `HTTP` inboxes, use AWS SES to process emails and are best suited as test email accounts. `SMTP` inboxes use a custom mail server at `mx.mailslurp.com` and are best used for public facing email addresses. Use the `EmailController` or the `InboxController` methods to send and receive emails and attachments. Inboxes may have a description, name, and tags for display purposes. You can also favourite an inbox for easier searching. Inboxes can be private or allow team access. Team access enabled inboxes can be seen by other members of an organization.

**`export`**

**`interface`** Inbox

## Table of contents

### Properties

- [createdAt](Inbox.md#createdat)
- [description](Inbox.md#description)
- [emailAddress](Inbox.md#emailaddress)
- [expiresAt](Inbox.md#expiresat)
- [favourite](Inbox.md#favourite)
- [id](Inbox.md#id)
- [inboxType](Inbox.md#inboxtype)
- [name](Inbox.md#name)
- [readOnly](Inbox.md#readonly)
- [tags](Inbox.md#tags)
- [teamAccess](Inbox.md#teamaccess)
- [userId](Inbox.md#userid)

## Properties

### createdAt

• `Optional` **createdAt**: `Date`

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2664](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2664)

___

### description

• `Optional` **description**: `string`

Description of an inbox for labelling and searching purposes

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2670](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2670)

___

### emailAddress

• `Optional` **emailAddress**: `string`

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2676](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2676)

___

### expiresAt

• `Optional` **expiresAt**: `string`

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2682](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2682)

___

### favourite

• `Optional` **favourite**: `boolean`

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2688](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2688)

___

### id

• `Optional` **id**: `string`

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2694](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2694)

___

### inboxType

• `Optional` **inboxType**: [`InboxTypeEnum`](../enums/Inbox.InboxTypeEnum.md)

Type of inbox - either HTTP (default) or SMTP. HTTP inboxes are great for testing. SMTP inboxes are processed by a custom SMTP mail server and are better for public facing inboxes that receive emails from Gmail and other large providers. If using a custom domain the domain type must match the inbox type. Use an SMTP domain for SMTP inboxes that includes an MX record pointing to `10 mx.mailslurp.com` for inbound messages.

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2700](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2700)

___

### name

• `Optional` **name**: `string`

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2706](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2706)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2712](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2712)

___

### tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2718](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2718)

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2724](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2724)

___

### userId

• `Optional` **userId**: `string`

ID of user that inbox belongs to

**`memberof`** Inbox

#### Defined in

[src/generated/api.ts:2730](https://github.com/mailslurp/mailslurp-client/blob/20b4039/src/generated/api.ts#L2730)

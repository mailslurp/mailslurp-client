# Interface: InboxDto

Representation of a MailSlurp inbox. An inbox has an ID and a real email address. Emails can be sent to or from this email address. Inboxes are either `SMTP` or `HTTP` mailboxes. The default, `HTTP` inboxes, use AWS SES to process emails and are best suited as test email accounts and do not support IMAP or POP3. `SMTP` inboxes use a custom mail server at `mx.mailslurp.com` and support SMTP login, IMAP and POP3. Use the `EmailController` or the `InboxController` methods to send and receive emails and attachments. Inboxes may have a description, name, and tags for display purposes. You can also favourite an inbox for easier searching.

**`export`**

**`interface`** InboxDto

## Table of contents

### Properties

- [createdAt](InboxDto.md#createdat)
- [description](InboxDto.md#description)
- [emailAddress](InboxDto.md#emailaddress)
- [expiresAt](InboxDto.md#expiresat)
- [favourite](InboxDto.md#favourite)
- [id](InboxDto.md#id)
- [inboxType](InboxDto.md#inboxtype)
- [name](InboxDto.md#name)
- [readOnly](InboxDto.md#readonly)
- [tags](InboxDto.md#tags)
- [userId](InboxDto.md#userid)

## Properties

### createdAt

• **createdAt**: `Date`

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** InboxDto

___

### description

• `Optional` **description**: `string`

Description of an inbox for labelling and searching purposes

**`memberof`** InboxDto

___

### emailAddress

• **emailAddress**: `string`

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** InboxDto

___

### expiresAt

• `Optional` **expiresAt**: `string`

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`memberof`** InboxDto

___

### favourite

• **favourite**: `boolean`

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** InboxDto

___

### id

• **id**: `string`

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** InboxDto

___

### inboxType

• `Optional` **inboxType**: [`InboxDtoInboxTypeEnum`](../enums/InboxDtoInboxTypeEnum.md)

Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).

**`memberof`** InboxDto

___

### name

• `Optional` **name**: `string`

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** InboxDto

___

### readOnly

• **readOnly**: `boolean`

Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.

**`memberof`** InboxDto

___

### tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** InboxDto

___

### userId

• `Optional` **userId**: `string`

ID of user that inbox belongs to

**`memberof`** InboxDto

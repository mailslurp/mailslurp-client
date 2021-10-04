[MailSlurp JS](../README.md) / InboxPreview

# Interface: InboxPreview

**`export`**

**`interface`** InboxPreview

## Table of contents

### Properties

- [createdAt](InboxPreview.md#createdat)
- [emailAddress](InboxPreview.md#emailaddress)
- [expiresAt](InboxPreview.md#expiresat)
- [favourite](InboxPreview.md#favourite)
- [id](InboxPreview.md#id)
- [inboxType](InboxPreview.md#inboxtype)
- [name](InboxPreview.md#name)
- [tags](InboxPreview.md#tags)
- [teamAccess](InboxPreview.md#teamaccess)

## Properties

### createdAt

• `Optional` **createdAt**: `Date`

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2880](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2880)

___

### emailAddress

• `Optional` **emailAddress**: `string`

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2886](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2886)

___

### expiresAt

• `Optional` **expiresAt**: `string`

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2892](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2892)

___

### favourite

• `Optional` **favourite**: `boolean`

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2898](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2898)

___

### id

• `Optional` **id**: `string`

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2904](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2904)

___

### inboxType

• `Optional` **inboxType**: [`InboxTypeEnum`](../enums/InboxPreview.InboxTypeEnum.md)

Type of inbox - either HTTP (default) or SMTP. HTTP inboxes are great for testing. SMTP inboxes are processed by a custom SMTP mail server and are better for public facing inboxes that receive emails from Gmail and other large providers. If using a custom domain the domain type must match the inbox type. Use an SMTP domain for SMTP inboxes that includes an MX record pointing to `10 mx.mailslurp.com` for inbound messages.

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2910](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2910)

___

### name

• `Optional` **name**: `string`

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2916](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2916)

___

### tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2922](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2922)

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/

**`memberof`** InboxPreview

#### Defined in

[src/generated/api.ts:2928](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L2928)

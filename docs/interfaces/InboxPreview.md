# Interface: InboxPreview

Inbox data

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
- [virtualInbox](InboxPreview.md#virtualinbox)

## Properties

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** InboxPreview

___

### <a id="emailaddress" name="emailaddress"></a> emailAddress

• `Optional` **emailAddress**: `string`

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** InboxPreview

___

### <a id="expiresat" name="expiresat"></a> expiresAt

• `Optional` **expiresAt**: `string`

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`memberof`** InboxPreview

___

### <a id="favourite" name="favourite"></a> favourite

• **favourite**: `boolean`

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** InboxPreview

___

### <a id="id" name="id"></a> id

• **id**: `string`

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** InboxPreview

___

### <a id="inboxtype" name="inboxtype"></a> inboxType

• `Optional` **inboxType**: [`InboxPreviewInboxTypeEnum`](../enums/InboxPreviewInboxTypeEnum.md)

Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).

**`memberof`** InboxPreview

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** InboxPreview

___

### <a id="tags" name="tags"></a> tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** InboxPreview

___

### <a id="teamaccess" name="teamaccess"></a> teamAccess

• **teamAccess**: `boolean`

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/

**`memberof`** InboxPreview

___

### <a id="virtualinbox" name="virtualinbox"></a> virtualInbox

• **virtualInbox**: `boolean`

Virtual inbox can receive email but will not send emails to real recipients. Will save sent email record but never send an actual email. Perfect for testing mail server actions.

**`memberof`** InboxPreview

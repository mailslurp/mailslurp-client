[MailSlurp JS](../README.md) / OrganizationInboxProjection

# Interface: OrganizationInboxProjection

Organization team inbox

**`Export`**

**`Interface`**

OrganizationInboxProjection

## Table of contents

### Properties

- [createdAt](OrganizationInboxProjection.md#createdat)
- [description](OrganizationInboxProjection.md#description)
- [domainId](OrganizationInboxProjection.md#domainid)
- [emailAddress](OrganizationInboxProjection.md#emailaddress)
- [expiresAt](OrganizationInboxProjection.md#expiresat)
- [favourite](OrganizationInboxProjection.md#favourite)
- [functionsAs](OrganizationInboxProjection.md#functionsas)
- [id](OrganizationInboxProjection.md#id)
- [inboxType](OrganizationInboxProjection.md#inboxtype)
- [name](OrganizationInboxProjection.md#name)
- [readOnly](OrganizationInboxProjection.md#readonly)
- [tags](OrganizationInboxProjection.md#tags)
- [teamAccess](OrganizationInboxProjection.md#teamaccess)
- [userId](OrganizationInboxProjection.md#userid)
- [virtualInbox](OrganizationInboxProjection.md#virtualinbox)

## Properties

### createdAt

• **createdAt**: `Date`

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`Memberof`**

OrganizationInboxProjection

___

### description

• `Optional` **description**: `string`

Description of an inbox for labelling and searching purposes

**`Memberof`**

OrganizationInboxProjection

___

### domainId

• `Optional` **domainId**: `string`

ID of custom domain used by the inbox if any

**`Memberof`**

OrganizationInboxProjection

___

### emailAddress

• **emailAddress**: `string`

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`Memberof`**

OrganizationInboxProjection

___

### expiresAt

• `Optional` **expiresAt**: `Date`

Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.

**`Memberof`**

OrganizationInboxProjection

___

### favourite

• **favourite**: `boolean`

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`Memberof`**

OrganizationInboxProjection

___

### functionsAs

• `Optional` **functionsAs**: [`OrganizationInboxProjectionFunctionsAsEnum`](../enums/OrganizationInboxProjectionFunctionsAsEnum.md)

Inbox function if used as a primitive for another system.

**`Memberof`**

OrganizationInboxProjection

___

### id

• **id**: `string`

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`Memberof`**

OrganizationInboxProjection

___

### inboxType

• `Optional` **inboxType**: [`OrganizationInboxProjectionInboxTypeEnum`](../enums/OrganizationInboxProjectionInboxTypeEnum.md)

Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).

**`Memberof`**

OrganizationInboxProjection

___

### name

• `Optional` **name**: `string`

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`Memberof`**

OrganizationInboxProjection

___

### readOnly

• **readOnly**: `boolean`

Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.

**`Memberof`**

OrganizationInboxProjection

___

### tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`Memberof`**

OrganizationInboxProjection

___

### teamAccess

• **teamAccess**: `boolean`

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/

**`Memberof`**

OrganizationInboxProjection

___

### userId

• **userId**: `string`

ID of user that inbox belongs to

**`Memberof`**

OrganizationInboxProjection

___

### virtualInbox

• **virtualInbox**: `boolean`

Virtual inbox can receive email but will not send emails to real recipients. Will save sent email record but never send an actual email. Perfect for testing mail server actions.

**`Memberof`**

OrganizationInboxProjection

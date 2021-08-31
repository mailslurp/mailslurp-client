[MailSlurp JS](../README.md) / OrganizationInboxProjection

# Interface: OrganizationInboxProjection

**`export`**

**`interface`** OrganizationInboxProjection

## Table of contents

### Properties

- [createdAt](OrganizationInboxProjection.md#createdat)
- [emailAddress](OrganizationInboxProjection.md#emailaddress)
- [favourite](OrganizationInboxProjection.md#favourite)
- [id](OrganizationInboxProjection.md#id)
- [inboxType](OrganizationInboxProjection.md#inboxtype)
- [name](OrganizationInboxProjection.md#name)
- [readOnly](OrganizationInboxProjection.md#readonly)
- [tags](OrganizationInboxProjection.md#tags)
- [teamAccess](OrganizationInboxProjection.md#teamaccess)

## Properties

### createdAt

• `Optional` **createdAt**: `Date`

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3269](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3269)

___

### emailAddress

• `Optional` **emailAddress**: `string`

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3275](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3275)

___

### favourite

• `Optional` **favourite**: `boolean`

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3281](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3281)

___

### id

• `Optional` **id**: `string`

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3287](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3287)

___

### inboxType

• `Optional` **inboxType**: [`InboxTypeEnum`](../enums/OrganizationInboxProjection.InboxTypeEnum.md)

Type of inbox - either HTTP (default) or SMTP. HTTP inboxes are great for testing. SMTP inboxes are processed by a custom SMTP mail server and are better for public facing inboxes that receive emails from Gmail and other large providers. If using a custom domain the domain type must match the inbox type. Use an SMTP domain for SMTP inboxes that includes an MX record pointing to `10 mx.mailslurp.com` for inbound messages.

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3293](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3293)

___

### name

• `Optional` **name**: `string`

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3299](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3299)

___

### readOnly

• `Optional` **readOnly**: `boolean`

Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3305](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3305)

___

### tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3311](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3311)

___

### teamAccess

• `Optional` **teamAccess**: `boolean`

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/

**`memberof`** OrganizationInboxProjection

#### Defined in

[src/generated/api.ts:3317](https://github.com/mailslurp/mailslurp-client/blob/6534d6f/src/generated/api.ts#L3317)

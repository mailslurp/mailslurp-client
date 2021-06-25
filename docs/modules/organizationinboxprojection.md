**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / OrganizationInboxProjection

# Namespace: OrganizationInboxProjection

**`export`** 

**`namespace`** OrganizationInboxProjection

## Index

### Enumerations

* [InboxTypeEnum](../enums/organizationinboxprojection.inboxtypeenum.md)

### Properties

* [createdAt](organizationinboxprojection.md#createdat)
* [emailAddress](organizationinboxprojection.md#emailaddress)
* [favourite](organizationinboxprojection.md#favourite)
* [id](organizationinboxprojection.md#id)
* [inboxType](organizationinboxprojection.md#inboxtype)
* [name](organizationinboxprojection.md#name)
* [readOnly](organizationinboxprojection.md#readonly)
* [tags](organizationinboxprojection.md#tags)
* [teamAccess](organizationinboxprojection.md#teamaccess)

## Properties

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:2864](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2864)*

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** OrganizationInboxProjection

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:2870](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2870)*

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** OrganizationInboxProjection

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:2876](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2876)*

Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** OrganizationInboxProjection

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:2882](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2882)*

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** OrganizationInboxProjection

___

### inboxType

• `Optional` **inboxType**: [InboxTypeEnum](../enums/organizationinboxprojection.inboxtypeenum.md)

*Defined in [src/generated/api.ts:2888](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2888)*

Type of inbox - either HTTP (default) or SMTP. HTTP inboxes are great for testing. SMTP inboxes are processed by a custom SMTP mail server and are better for public facing inboxes that receive emails from Gmail and other large providers. If using a custom domain the domain type must match the inbox type. Use an SMTP domain for SMTP inboxes that includes an MX record pointing to `10 mx.mailslurp.com` for inbound messages.

**`memberof`** OrganizationInboxProjection

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:2894](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2894)*

Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search

**`memberof`** OrganizationInboxProjection

___

### readOnly

• `Optional` **readOnly**: boolean

*Defined in [src/generated/api.ts:2900](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2900)*

Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.

**`memberof`** OrganizationInboxProjection

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:2906](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2906)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** OrganizationInboxProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2912](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L2912)*

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/

**`memberof`** OrganizationInboxProjection

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / OrganizationInboxProjection

# Interface: OrganizationInboxProjection

**`export`** 

**`interface`** OrganizationInboxProjection

## Hierarchy

* **OrganizationInboxProjection**

## Index

### Properties

* [createdAt](organizationinboxprojection.md#createdat)
* [emailAddress](organizationinboxprojection.md#emailaddress)
* [favourite](organizationinboxprojection.md#favourite)
* [id](organizationinboxprojection.md#id)
* [name](organizationinboxprojection.md#name)
* [readOnly](organizationinboxprojection.md#readonly)
* [tags](organizationinboxprojection.md#tags)
* [teamAccess](organizationinboxprojection.md#teamaccess)

## Properties

### createdAt

• `Optional` **createdAt**: Date

*Defined in [src/generated/api.ts:2330](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2330)*

When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.

**`memberof`** OrganizationInboxProjection

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:2336](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2336)*

The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** OrganizationInboxProjection

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:2342](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2342)*

Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access or filtering

**`memberof`** OrganizationInboxProjection

___

### id

• `Optional` **id**: string

*Defined in [src/generated/api.ts:2348](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2348)*

ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.

**`memberof`** OrganizationInboxProjection

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:2354](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2354)*

Name of the inbox. Displayed in the dashboard for easier search

**`memberof`** OrganizationInboxProjection

___

### readOnly

• `Optional` **readOnly**: boolean

*Defined in [src/generated/api.ts:2360](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2360)*

Is the inbox readOnly for the caller. Read only means can not be deleted or modified.

**`memberof`** OrganizationInboxProjection

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:2366](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2366)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** OrganizationInboxProjection

___

### teamAccess

• `Optional` **teamAccess**: boolean

*Defined in [src/generated/api.ts:2372](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L2372)*

Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it.

**`memberof`** OrganizationInboxProjection

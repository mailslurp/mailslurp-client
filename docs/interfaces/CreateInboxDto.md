[MailSlurp JS](../README.md) / CreateInboxDto

# Interface: CreateInboxDto

Options for creating an inbox. An inbox has a real email address that can send and receive emails. Inboxes can be permanent or expire at a given time. Inboxes are either `SMTP` or `HTTP` mailboxes. Use `SMTP` for public facing mailboxes and `HTTP` for test email accounts. `SMTP` inboxes are processed by a mail server running at `mx.mailslurp.com` while `HTTP` inboxes are processed by AWS SES. Inboxes can use a custom email address (by verifying your own domain) or a randomly assigned email ending in either `mailslurp.com` or (if `useDomainPool` is enabled) ending in a similar domain such as `mailslurp.xyz` (selected at random).

**`export`**

**`interface`** CreateInboxDto

## Table of contents

### Properties

- [allowTeamAccess](CreateInboxDto.md#allowteamaccess)
- [description](CreateInboxDto.md#description)
- [emailAddress](CreateInboxDto.md#emailaddress)
- [expiresAt](CreateInboxDto.md#expiresat)
- [expiresIn](CreateInboxDto.md#expiresin)
- [favourite](CreateInboxDto.md#favourite)
- [inboxType](CreateInboxDto.md#inboxtype)
- [name](CreateInboxDto.md#name)
- [tags](CreateInboxDto.md#tags)
- [useDomainPool](CreateInboxDto.md#usedomainpool)

## Properties

### allowTeamAccess

• `Optional` **allowTeamAccess**: `boolean`

DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:960](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L960)

___

### description

• `Optional` **description**: `string`

Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:966](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L966)

___

### emailAddress

• `Optional` **emailAddress**: `string`

A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as `123@mailslurp.com`. If you use the `useDomainPool` option when the email address is null it will generate an email address with a more varied domain ending such as `123@mailslurp.info` or `123@mailslurp.biz`. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so `SMTP` inboxes will only work with `SMTP` type domains. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:972](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L972)

___

### expiresAt

• `Optional` **expiresAt**: `Date`

Optional inbox expiration date. If null then this inbox is permanent and the emails in it won't be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX.

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:978](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L978)

___

### expiresIn

• `Optional` **expiresIn**: `number`

Number of milliseconds that inbox should exist for

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:984](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L984)

___

### favourite

• `Optional` **favourite**: `boolean`

Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:990](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L990)

___

### inboxType

• `Optional` **inboxType**: [`InboxTypeEnum`](../enums/CreateInboxDto.InboxTypeEnum.md)

HTTP (default) or SMTP inbox type. HTTP inboxes are best for testing while SMTP inboxes are more reliable for public inbound email consumption. When using custom domains the domain type must match the inbox type. HTTP inboxes are processed by AWS SES while SMTP inboxes use a custom mail server running at `mx.mailslurp.com`.

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:996](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L996)

___

### name

• `Optional` **name**: `string`

Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:1002](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L1002)

___

### tags

• `Optional` **tags**: `string`[]

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:1008](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L1008)

___

### useDomainPool

• `Optional` **useDomainPool**: `boolean`

Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default `@mailslurp.com` email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in `@mailslurp.{world,info,xyz,...}` . This means a TLD is randomly selecting from a list of `.biz`, `.info`, `.xyz` etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of `@mailslurp.com` or custom email address provided by the emailAddress field. Note this feature is only available for `HTTP` inbox types.

**`memberof`** CreateInboxDto

#### Defined in

[src/generated/api.ts:1014](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L1014)

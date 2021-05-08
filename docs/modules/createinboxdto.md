**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateInboxDto

# Namespace: CreateInboxDto

**`export`** 

**`namespace`** CreateInboxDto

## Index

### Enumerations

* [InboxTypeEnum](../enums/createinboxdto.inboxtypeenum.md)

### Properties

* [allowTeamAccess](createinboxdto.md#allowteamaccess)
* [description](createinboxdto.md#description)
* [emailAddress](createinboxdto.md#emailaddress)
* [expiresAt](createinboxdto.md#expiresat)
* [expiresIn](createinboxdto.md#expiresin)
* [favourite](createinboxdto.md#favourite)
* [inboxType](createinboxdto.md#inboxtype)
* [name](createinboxdto.md#name)
* [tags](createinboxdto.md#tags)
* [useDomainPool](createinboxdto.md#usedomainpool)

## Properties

### allowTeamAccess

• `Optional` **allowTeamAccess**: boolean

*Defined in [src/generated/api.ts:696](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L696)*

Grant team access to this inbox and the emails that belong to it for team members of your organization.

**`memberof`** CreateInboxDto

___

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:702](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L702)*

Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with

**`memberof`** CreateInboxDto

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:708](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L708)*

A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as `123@mailslurp.com`. If you use the `useDomainPool` option when the email address is null it will generate an email address with a more varied domain ending such as `123@mailslurp.info` or `123@mailslurp.biz`. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.

**`memberof`** CreateInboxDto

___

### expiresAt

• `Optional` **expiresAt**: Date

*Defined in [src/generated/api.ts:714](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L714)*

Optional inbox expiration date. If null then this inbox is permanent and the emails in it won't be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX.

**`memberof`** CreateInboxDto

___

### expiresIn

• `Optional` **expiresIn**: number

*Defined in [src/generated/api.ts:720](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L720)*

Number of milliseconds that inbox should exist for

**`memberof`** CreateInboxDto

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:726](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L726)*

Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access or filtering

**`memberof`** CreateInboxDto

___

### inboxType

• `Optional` **inboxType**: [InboxTypeEnum](../enums/createinboxdto.inboxtypeenum.md)

*Defined in [src/generated/api.ts:732](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L732)*

HTTP or SMTP inbox

**`memberof`** CreateInboxDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:738](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L738)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** CreateInboxDto

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:744](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L744)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** CreateInboxDto

___

### useDomainPool

• `Optional` **useDomainPool**: boolean

*Defined in [src/generated/api.ts:750](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L750)*

Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default `@mailslurp.com` email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in `@mailslurp.{world,info,xyz,...}` . This means a TLD is randomly selecting from a list of `.biz`, `.info`, `.xyz` etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of `@mailslurp.com` or custom email address provided by the emailAddress field.

**`memberof`** CreateInboxDto

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateInboxDto

# Interface: CreateInboxDto

**`export`** 

**`interface`** CreateInboxDto

## Hierarchy

* **CreateInboxDto**

## Index

### Properties

* [description](createinboxdto.md#description)
* [emailAddress](createinboxdto.md#emailaddress)
* [expiresAt](createinboxdto.md#expiresat)
* [favourite](createinboxdto.md#favourite)
* [name](createinboxdto.md#name)
* [tags](createinboxdto.md#tags)

## Properties

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:609](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L609)*

Optional description of an inbox for labelling purposes

**`memberof`** CreateInboxDto

___

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:615](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L615)*

Optionally specify an email address you want the inbox to have. When left blank an email address will be randomly assigned to the inbox usually ending in `@mailslurp.com`. Custom email addresses must include your own custom domain that you have configured in MailSlurp. So if your domain is `mysite.com` you can created any email address ending in `@mysite.com`. All email addresses are transformed to lowercase!

**`memberof`** CreateInboxDto

___

### expiresAt

• `Optional` **expiresAt**: Date

*Defined in [src/generated/api.ts:621](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L621)*

When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. Timestamp passed as string.

**`memberof`** CreateInboxDto

___

### favourite

• `Optional` **favourite**: boolean

*Defined in [src/generated/api.ts:627](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L627)*

Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access

**`memberof`** CreateInboxDto

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:633](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L633)*

Optional name of the inbox. Displayed in the dashboard for easier search

**`memberof`** CreateInboxDto

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:639](https://github.com/mailslurp/mailslurp-client/blob/cdc62f8/src/generated/api.ts#L639)*

Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.

**`memberof`** CreateInboxDto

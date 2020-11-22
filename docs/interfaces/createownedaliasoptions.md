**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateOwnedAliasOptions

# Interface: CreateOwnedAliasOptions

Create email alias options. Email aliases can be used to mask real email addresses behind an ID. You can also attach an inbox to an alias so that any email received by the inbox email address if forwarded to the alias email address.

**`export`** 

**`interface`** CreateOwnedAliasOptions

## Hierarchy

* **CreateOwnedAliasOptions**

## Index

### Properties

* [emailAddress](createownedaliasoptions.md#emailaddress)
* [inboxId](createownedaliasoptions.md#inboxid)
* [name](createownedaliasoptions.md#name)
* [proxied](createownedaliasoptions.md#proxied)

## Properties

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:459](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L459)*

Email address to be hidden behind alias

**`memberof`** CreateOwnedAliasOptions

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:465](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L465)*

Optional inbox ID to attach to alias. Emails received by this inbox will be forwarded to the alias email address

**`memberof`** CreateOwnedAliasOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:471](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L471)*

Optional name for alias

**`memberof`** CreateOwnedAliasOptions

___

### proxied

• `Optional` **proxied**: boolean

*Defined in [src/generated/api.ts:477](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L477)*

Optional proxied flag. When proxied is true alias will forward the incoming emails to the aliased email address via a proxy inbox. A new proxy is created for every new email thread. By replying to the proxy you can correspond with using your email alias without revealing your real email address.

**`memberof`** CreateOwnedAliasOptions

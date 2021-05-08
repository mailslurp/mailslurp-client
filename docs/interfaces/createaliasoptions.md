**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateAliasOptions

# Interface: CreateAliasOptions

Create email alias options. Email aliases can be used to mask real email addresses behind an ID. You can also attach an inbox to an alias so that any email received by the inbox email address if forwarded to the alias email address.

**`export`** 

**`interface`** CreateAliasOptions

## Hierarchy

* **CreateAliasOptions**

## Index

### Properties

* [emailAddress](createaliasoptions.md#emailaddress)
* [inboxId](createaliasoptions.md#inboxid)
* [name](createaliasoptions.md#name)
* [useThreads](createaliasoptions.md#usethreads)

## Properties

### emailAddress

• `Optional` **emailAddress**: string

*Defined in [src/generated/api.ts:541](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L541)*

Email address to be hidden behind alias. Emails sent to the alias email address will be forwarded to this address. If you want to enable replies set useThreads true and the reply-to for the email will allow outbound communication via a thread.

**`memberof`** CreateAliasOptions

___

### inboxId

• `Optional` **inboxId**: string

*Defined in [src/generated/api.ts:547](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L547)*

Optional inbox ID to attach to alias. Null by default means an a new inbox will be created for the alias. Use a custom inbox to control what email address the alias uses. To use custom email addresses create a domain and an inbox, the use the inbox ID with this call. Emails received by this inbox will be forwarded to the alias email address

**`memberof`** CreateAliasOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:553](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L553)*

Optional name for alias

**`memberof`** CreateAliasOptions

___

### useThreads

• `Optional` **useThreads**: boolean

*Defined in [src/generated/api.ts:559](https://github.com/mailslurp/mailslurp-client/blob/c83a162/src/generated/api.ts#L559)*

Enable threads options. If true emails will be sent with a unique reply-to thread address. This means you can reply to the forwarded email and it will be sent to the recipients via your alias address. That way a thread conversation is preserved.

**`memberof`** CreateAliasOptions

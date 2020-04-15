# Interface: CreateOwnedAliasOptions

Create email alias options. Email aliases can be used to mask real email addresses behind an ID. You can also attach an inbox to an alias so that any email received by the inbox email address if forwarded to the alias email address.

**`export`** 

**`interface`** CreateOwnedAliasOptions

## Hierarchy

* **CreateOwnedAliasOptions**

## Properties

### `Optional` emailAddress

• **emailAddress**? : *string*

*Defined in [src/generated/api.ts:424](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L424)*

Email address to be hidden behind alias

**`type`** {string}

**`memberof`** CreateOwnedAliasOptions

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:430](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L430)*

Optional inbox ID to attach to alias. Emails received by this inbox will be forwarded to the alias email address

**`type`** {string}

**`memberof`** CreateOwnedAliasOptions

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:436](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L436)*

Optional name for alias

**`type`** {string}

**`memberof`** CreateOwnedAliasOptions

___

### `Optional` proxied

• **proxied**? : *boolean*

*Defined in [src/generated/api.ts:442](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L442)*

Optional proxied flag. When proxied is true alias will forward the incoming emails to the aliased email address via a proxy inbox. A new proxy is created for every new email thread. By replying to the proxy you can correspond with using your email alias without revealing your real email address.

**`type`** {boolean}

**`memberof`** CreateOwnedAliasOptions

# Interface: CreateOwnedAliasOptions

Create email alias options. Email aliases can be used to mask real email addresses behind an ID. You can also attach an inbox to an alias so that any email received by the inbox email address if forwarded to the alias email address.

**`export`** 

**`interface`** CreateOwnedAliasOptions

## Hierarchy

* **CreateOwnedAliasOptions**

## Properties

### `Optional` emailAddress

• **emailAddress**? : *string*

*Defined in [src/generated/api.ts:427](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L427)*

Email address to be hidden behind alias

**`type`** {string}

**`memberof`** CreateOwnedAliasOptions

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:433](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L433)*

Optional inbox ID to attach to alias. Emails received by this inbox will be forwarded to the alias email address

**`type`** {string}

**`memberof`** CreateOwnedAliasOptions

___

### `Optional` name

• **name**? : *string*

*Defined in [src/generated/api.ts:439](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L439)*

Optional name for alias

**`type`** {string}

**`memberof`** CreateOwnedAliasOptions

___

### `Optional` proxied

• **proxied**? : *boolean*

*Defined in [src/generated/api.ts:445](https://github.com/mailslurp/mailslurp-client-ts-js/blob/507ad2d/src/generated/api.ts#L445)*

Optional proxied flag. When proxied is true alias will forward the incoming emails to the aliased email address via a proxy inbox. A new proxy is created for every new email thread. By replying to the proxy you can correspond with using your email alias without revealing your real email address.

**`type`** {boolean}

**`memberof`** CreateOwnedAliasOptions

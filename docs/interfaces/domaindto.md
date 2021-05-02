**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / DomainDto

# Interface: DomainDto

Domain plus verification records and status

**`export`** 

**`interface`** DomainDto

## Hierarchy

* **DomainDto**

## Index

### Properties

* [catchAllInboxId](domaindto.md#catchallinboxid)
* [createdAt](domaindto.md#createdat)
* [dkimTokens](domaindto.md#dkimtokens)
* [domain](domaindto.md#domain)
* [domainNameRecords](domaindto.md#domainnamerecords)
* [id](domaindto.md#id)
* [isVerified](domaindto.md#isverified)
* [updatedAt](domaindto.md#updatedat)
* [userId](domaindto.md#userid)
* [verificationToken](domaindto.md#verificationtoken)

## Properties

### catchAllInboxId

• `Optional` **catchAllInboxId**: string

*Defined in [src/generated/api.ts:1085](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1085)*

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`memberof`** DomainDto

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1091](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1091)*

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: Array\<string>

*Defined in [src/generated/api.ts:1097](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1097)*

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:1103](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1103)*

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• `Optional` **domainNameRecords**: Array\<[DomainNameRecord](../modules/domainnamerecord.md)>

*Defined in [src/generated/api.ts:1109](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1109)*

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1115](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1115)*

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:1121](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1121)*

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:1127](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1127)*

**`memberof`** DomainDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:1133](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1133)*

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: string

*Defined in [src/generated/api.ts:1139](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L1139)*

Verification tokens

**`memberof`** DomainDto

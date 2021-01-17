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

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1025](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1025)*

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: Array\<string>

*Defined in [src/generated/api.ts:1031](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1031)*

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:1037](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1037)*

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• `Optional` **domainNameRecords**: Array\<[DomainNameRecord](../modules/domainnamerecord.md)>

*Defined in [src/generated/api.ts:1043](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1043)*

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1049](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1049)*

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:1055](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1055)*

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:1061](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1061)*

**`memberof`** DomainDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:1067](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1067)*

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: string

*Defined in [src/generated/api.ts:1073](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L1073)*

Verification tokens

**`memberof`** DomainDto

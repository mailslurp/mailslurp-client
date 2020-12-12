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
* [id](domaindto.md#id)
* [isVerified](domaindto.md#isverified)
* [updatedAt](domaindto.md#updatedat)
* [userId](domaindto.md#userid)
* [verificationToken](domaindto.md#verificationtoken)

## Properties

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1015](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1015)*

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: Array\<string>

*Defined in [src/generated/api.ts:1021](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1021)*

DNS records for DKIM approval

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:1027](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1027)*

Custom domain name

**`memberof`** DomainDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1033](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1033)*

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:1039](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1039)*

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:1045](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1045)*

**`memberof`** DomainDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:1051](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1051)*

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: string

*Defined in [src/generated/api.ts:1057](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L1057)*

A TXT record that you must place in the DNS settings of the domain to complete domain verification

**`memberof`** DomainDto

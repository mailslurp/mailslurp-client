**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / DomainDto

# Namespace: DomainDto

**`export`** 

**`namespace`** DomainDto

## Index

### Enumerations

* [DomainTypeEnum](../enums/domaindto.domaintypeenum.md)

### Properties

* [catchAllInboxId](domaindto.md#catchallinboxid)
* [createdAt](domaindto.md#createdat)
* [dkimTokens](domaindto.md#dkimtokens)
* [domain](domaindto.md#domain)
* [domainNameRecords](domaindto.md#domainnamerecords)
* [domainType](domaindto.md#domaintype)
* [id](domaindto.md#id)
* [isVerified](domaindto.md#isverified)
* [updatedAt](domaindto.md#updatedat)
* [userId](domaindto.md#userid)
* [verificationToken](domaindto.md#verificationtoken)

## Properties

### catchAllInboxId

• `Optional` **catchAllInboxId**: string

*Defined in [src/generated/api.ts:1219](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1219)*

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`memberof`** DomainDto

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1225](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1225)*

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: Array\<string>

*Defined in [src/generated/api.ts:1231](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1231)*

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:1237](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1237)*

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• `Optional` **domainNameRecords**: Array\<[DomainNameRecord](domainnamerecord.md)>

*Defined in [src/generated/api.ts:1243](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1243)*

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### domainType

• `Optional` **domainType**: [DomainTypeEnum](../enums/domaindto.domaintypeenum.md)

*Defined in [src/generated/api.ts:1249](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1249)*

The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.

**`memberof`** DomainDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1255](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1255)*

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:1261](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1261)*

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:1267](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1267)*

**`memberof`** DomainDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:1273](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1273)*

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: string

*Defined in [src/generated/api.ts:1279](https://github.com/mailslurp/mailslurp-client/blob/751f7bb/src/generated/api.ts#L1279)*

Verification tokens

**`memberof`** DomainDto

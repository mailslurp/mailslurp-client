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

*Defined in [src/generated/api.ts:1515](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1515)*

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`memberof`** DomainDto

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1521](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1521)*

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: Array\<string>

*Defined in [src/generated/api.ts:1527](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1527)*

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:1533](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1533)*

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• `Optional` **domainNameRecords**: Array\<[DomainNameRecord](domainnamerecord.md)>

*Defined in [src/generated/api.ts:1539](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1539)*

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### domainType

• `Optional` **domainType**: [DomainTypeEnum](../enums/domaindto.domaintypeenum.md)

*Defined in [src/generated/api.ts:1545](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1545)*

The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.

**`memberof`** DomainDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1551](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1551)*

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:1557](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1557)*

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:1563](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1563)*

**`memberof`** DomainDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:1569](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1569)*

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: string

*Defined in [src/generated/api.ts:1575](https://github.com/mailslurp/mailslurp-client/blob/2c659a7/src/generated/api.ts#L1575)*

Verification tokens

**`memberof`** DomainDto

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

*Defined in [src/generated/api.ts:1312](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1312)*

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`memberof`** DomainDto

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1318](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1318)*

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: Array\<string>

*Defined in [src/generated/api.ts:1324](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1324)*

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:1330](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1330)*

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• `Optional` **domainNameRecords**: Array\<[DomainNameRecord](domainnamerecord.md)>

*Defined in [src/generated/api.ts:1336](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1336)*

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### domainType

• `Optional` **domainType**: [DomainTypeEnum](../enums/domaindto.domaintypeenum.md)

*Defined in [src/generated/api.ts:1342](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1342)*

The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.

**`memberof`** DomainDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1348](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1348)*

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:1354](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1354)*

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:1360](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1360)*

**`memberof`** DomainDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:1366](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1366)*

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: string

*Defined in [src/generated/api.ts:1372](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1372)*

Verification tokens

**`memberof`** DomainDto

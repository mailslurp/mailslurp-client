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

*Defined in [src/generated/api.ts:1313](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1313)*

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`memberof`** DomainDto

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:1319](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1319)*

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: Array\<string>

*Defined in [src/generated/api.ts:1325](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1325)*

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:1331](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1331)*

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• `Optional` **domainNameRecords**: Array\<[DomainNameRecord](domainnamerecord.md)>

*Defined in [src/generated/api.ts:1337](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1337)*

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### domainType

• `Optional` **domainType**: [DomainTypeEnum](../enums/domaindto.domaintypeenum.md)

*Defined in [src/generated/api.ts:1343](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1343)*

The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.

**`memberof`** DomainDto

___

### id

•  **id**: string

*Defined in [src/generated/api.ts:1349](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1349)*

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: boolean

*Defined in [src/generated/api.ts:1355](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1355)*

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

•  **updatedAt**: Date

*Defined in [src/generated/api.ts:1361](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1361)*

**`memberof`** DomainDto

___

### userId

•  **userId**: string

*Defined in [src/generated/api.ts:1367](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1367)*

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: string

*Defined in [src/generated/api.ts:1373](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L1373)*

Verification tokens

**`memberof`** DomainDto

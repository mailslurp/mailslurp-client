# Interface: DomainDto

Domain plus verification records and status

**`export`**

**`interface`** DomainDto

## Table of contents

### Properties

- [catchAllInboxId](DomainDto.md#catchallinboxid)
- [createdAt](DomainDto.md#createdat)
- [dkimTokens](DomainDto.md#dkimtokens)
- [domain](DomainDto.md#domain)
- [domainNameRecords](DomainDto.md#domainnamerecords)
- [domainType](DomainDto.md#domaintype)
- [id](DomainDto.md#id)
- [isVerified](DomainDto.md#isverified)
- [updatedAt](DomainDto.md#updatedat)
- [userId](DomainDto.md#userid)
- [verificationToken](DomainDto.md#verificationtoken)

## Properties

### catchAllInboxId

• `Optional` **catchAllInboxId**: `string`

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`memberof`** DomainDto

___

### createdAt

• **createdAt**: `Date`

**`memberof`** DomainDto

___

### dkimTokens

• `Optional` **dkimTokens**: `string`[]

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• `Optional` **domain**: `string`

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• `Optional` **domainNameRecords**: [`DomainNameRecord`](DomainNameRecord.md)[]

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### domainType

• `Optional` **domainType**: [`DomainDtoDomainTypeEnum`](../enums/DomainDtoDomainTypeEnum.md)

The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.

**`memberof`** DomainDto

___

### id

• **id**: `string`

**`memberof`** DomainDto

___

### isVerified

• `Optional` **isVerified**: `boolean`

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### updatedAt

• **updatedAt**: `Date`

**`memberof`** DomainDto

___

### userId

• **userId**: `string`

**`memberof`** DomainDto

___

### verificationToken

• `Optional` **verificationToken**: `string`

Verification tokens

**`memberof`** DomainDto

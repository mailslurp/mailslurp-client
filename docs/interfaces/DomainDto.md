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

• **dkimTokens**: `string`[]

Unique token DKIM tokens

**`memberof`** DomainDto

___

### domain

• **domain**: `string`

Custom domain name

**`memberof`** DomainDto

___

### domainNameRecords

• **domainNameRecords**: [`DomainNameRecord`](DomainNameRecord.md)[]

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### domainType

• **domainType**: [`DomainDtoDomainTypeEnum`](../enums/DomainDtoDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`memberof`** DomainDto

___

### id

• **id**: `string`

**`memberof`** DomainDto

___

### isVerified

• **isVerified**: `boolean`

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

• **verificationToken**: `string`

Verification tokens

**`memberof`** DomainDto

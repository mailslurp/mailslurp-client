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

### <a id="catchallinboxid" name="catchallinboxid"></a> catchAllInboxId

• `Optional` **catchAllInboxId**: `string`

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`memberof`** DomainDto

___

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

**`memberof`** DomainDto

___

### <a id="dkimtokens" name="dkimtokens"></a> dkimTokens

• **dkimTokens**: `string`[]

Unique token DKIM tokens

**`memberof`** DomainDto

___

### <a id="domain" name="domain"></a> domain

• **domain**: `string`

Custom domain name

**`memberof`** DomainDto

___

### <a id="domainnamerecords" name="domainnamerecords"></a> domainNameRecords

• **domainNameRecords**: [`DomainNameRecord`](DomainNameRecord.md)[]

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

___

### <a id="domaintype" name="domaintype"></a> domainType

• **domainType**: [`DomainDtoDomainTypeEnum`](../enums/DomainDtoDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`memberof`** DomainDto

___

### <a id="id" name="id"></a> id

• **id**: `string`

**`memberof`** DomainDto

___

### <a id="isverified" name="isverified"></a> isVerified

• **isVerified**: `boolean`

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• **updatedAt**: `Date`

**`memberof`** DomainDto

___

### <a id="userid" name="userid"></a> userId

• **userId**: `string`

**`memberof`** DomainDto

___

### <a id="verificationtoken" name="verificationtoken"></a> verificationToken

• **verificationToken**: `string`

Verification tokens

**`memberof`** DomainDto

[MailSlurp JS](../README.md) / DomainDto

# Interface: DomainDto

Domain plus verification records and status

**`Export`**

**`Interface`**

DomainDto

## Table of contents

### Properties

- [catchAllInboxId](DomainDto.md#catchallinboxid)
- [createdAt](DomainDto.md#createdat)
- [dkimTokens](DomainDto.md#dkimtokens)
- [domain](DomainDto.md#domain)
- [domainNameRecords](DomainDto.md#domainnamerecords)
- [domainType](DomainDto.md#domaintype)
- [duplicateRecordsMessage](DomainDto.md#duplicaterecordsmessage)
- [hasDuplicateRecords](DomainDto.md#hasduplicaterecords)
- [hasMissingRecords](DomainDto.md#hasmissingrecords)
- [id](DomainDto.md#id)
- [isVerified](DomainDto.md#isverified)
- [missingRecordsMessage](DomainDto.md#missingrecordsmessage)
- [updatedAt](DomainDto.md#updatedat)
- [userId](DomainDto.md#userid)
- [verificationToken](DomainDto.md#verificationtoken)

## Properties

### catchAllInboxId

• `Optional` **catchAllInboxId**: `string`

The optional catch all inbox that will receive emails sent to the domain that cannot be matched.

**`Memberof`**

DomainDto

___

### createdAt

• **createdAt**: `Date`

**`Memberof`**

DomainDto

___

### dkimTokens

• **dkimTokens**: `string`[]

Unique token DKIM tokens

**`Memberof`**

DomainDto

___

### domain

• **domain**: `string`

Custom domain name

**`Memberof`**

DomainDto

___

### domainNameRecords

• **domainNameRecords**: [`DomainNameRecord`](DomainNameRecord.md)[]

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`Memberof`**

DomainDto

___

### domainType

• **domainType**: [`DomainDtoDomainTypeEnum`](../enums/DomainDtoDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`Memberof`**

DomainDto

___

### duplicateRecordsMessage

• `Optional` **duplicateRecordsMessage**: `string`

If the domain is duplicate records.

**`Memberof`**

DomainDto

___

### hasDuplicateRecords

• **hasDuplicateRecords**: `boolean`

Whether the domain has duplicated required records. If true then see the domain in the dashboard app.

**`Memberof`**

DomainDto

___

### hasMissingRecords

• **hasMissingRecords**: `boolean`

Whether the domain has missing required records. If true then see the domain in the dashboard app.

**`Memberof`**

DomainDto

___

### id

• **id**: `string`

**`Memberof`**

DomainDto

___

### isVerified

• **isVerified**: `boolean`

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`Memberof`**

DomainDto

___

### missingRecordsMessage

• `Optional` **missingRecordsMessage**: `string`

If the domain is missing records then show which pairs are missing.

**`Memberof`**

DomainDto

___

### updatedAt

• **updatedAt**: `Date`

**`Memberof`**

DomainDto

___

### userId

• **userId**: `string`

**`Memberof`**

DomainDto

___

### verificationToken

• **verificationToken**: `string`

Verification tokens

**`Memberof`**

DomainDto

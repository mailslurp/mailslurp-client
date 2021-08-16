[MailSlurp JS](../README.md) / DomainDto

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

#### Defined in

[src/generated/api.ts:1599](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1599)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1605](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1605)

___

### dkimTokens

• `Optional` **dkimTokens**: `string`[]

Unique token DKIM tokens

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1611](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1611)

___

### domain

• `Optional` **domain**: `string`

Custom domain name

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1617](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1617)

___

### domainNameRecords

• `Optional` **domainNameRecords**: [`DomainNameRecord`](DomainNameRecord.md)[]

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1623](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1623)

___

### domainType

• `Optional` **domainType**: [`DomainTypeEnum`](../enums/DomainDto.DomainTypeEnum.md)

The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1629](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1629)

___

### id

• **id**: `string`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1635](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1635)

___

### isVerified

• `Optional` **isVerified**: `boolean`

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1641](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1641)

___

### updatedAt

• **updatedAt**: `Date`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1647](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1647)

___

### userId

• **userId**: `string`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1653](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1653)

___

### verificationToken

• `Optional` **verificationToken**: `string`

Verification tokens

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1659](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L1659)

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

[src/generated/api.ts:1543](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1543)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1549](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1549)

___

### dkimTokens

• `Optional` **dkimTokens**: `string`[]

Unique token DKIM tokens

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1555](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1555)

___

### domain

• `Optional` **domain**: `string`

Custom domain name

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1561](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1561)

___

### domainNameRecords

• `Optional` **domainNameRecords**: [`DomainNameRecord`](DomainNameRecord.md)[]

List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1567](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1567)

___

### domainType

• `Optional` **domainType**: [`DomainTypeEnum`](../enums/DomainDto.DomainTypeEnum.md)

The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1573](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1573)

___

### id

• **id**: `string`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1579](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1579)

___

### isVerified

• `Optional` **isVerified**: `boolean`

Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1585](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1585)

___

### updatedAt

• **updatedAt**: `Date`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1591](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1591)

___

### userId

• **userId**: `string`

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1597](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1597)

___

### verificationToken

• `Optional` **verificationToken**: `string`

Verification tokens

**`memberof`** DomainDto

#### Defined in

[src/generated/api.ts:1603](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L1603)

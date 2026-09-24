[MailSlurp JS](../README.md) / CheckEmailBlacklistResults

# Interface: CheckEmailBlacklistResults

Public blacklist lookup results for a domain or IP address

**`Export`**

**`Interface`**

CheckEmailBlacklistResults

## Table of contents

### Properties

- [checkStatus](CheckEmailBlacklistResults.md#checkstatus)
- [checkedAt](CheckEmailBlacklistResults.md#checkedat)
- [checkedDomains](CheckEmailBlacklistResults.md#checkeddomains)
- [checkedIpAddresses](CheckEmailBlacklistResults.md#checkedipaddresses)
- [checkedZoneCount](CheckEmailBlacklistResults.md#checkedzonecount)
- [domain](CheckEmailBlacklistResults.md#domain)
- [errors](CheckEmailBlacklistResults.md#errors)
- [evidenceVersion](CheckEmailBlacklistResults.md#evidenceversion)
- [listed](CheckEmailBlacklistResults.md#listed)
- [requestedIpAddress](CheckEmailBlacklistResults.md#requestedipaddress)
- [requestedMxHost](CheckEmailBlacklistResults.md#requestedmxhost)
- [status](CheckEmailBlacklistResults.md#status)
- [totalListings](CheckEmailBlacklistResults.md#totallistings)
- [warnings](CheckEmailBlacklistResults.md#warnings)

## Properties

### checkStatus

• **checkStatus**: [`CheckEmailBlacklistResultsCheckStatusEnum`](../enums/CheckEmailBlacklistResultsCheckStatusEnum.md)

**`Memberof`**

CheckEmailBlacklistResults

___

### checkedAt

• **checkedAt**: `Date`

**`Memberof`**

CheckEmailBlacklistResults

___

### checkedDomains

• **checkedDomains**: [`EmailBlacklistDomainResult`](EmailBlacklistDomainResult.md)[]

**`Memberof`**

CheckEmailBlacklistResults

___

### checkedIpAddresses

• **checkedIpAddresses**: [`EmailBlacklistIpResult`](EmailBlacklistIpResult.md)[]

**`Memberof`**

CheckEmailBlacklistResults

___

### checkedZoneCount

• **checkedZoneCount**: `number`

**`Memberof`**

CheckEmailBlacklistResults

___

### domain

• `Optional` **domain**: `string`

**`Memberof`**

CheckEmailBlacklistResults

___

### errors

• **errors**: `string`[]

**`Memberof`**

CheckEmailBlacklistResults

___

### evidenceVersion

• **evidenceVersion**: `string`

**`Memberof`**

CheckEmailBlacklistResults

___

### listed

• **listed**: `boolean`

**`Memberof`**

CheckEmailBlacklistResults

___

### requestedIpAddress

• `Optional` **requestedIpAddress**: `string`

**`Memberof`**

CheckEmailBlacklistResults

___

### requestedMxHost

• `Optional` **requestedMxHost**: `string`

**`Memberof`**

CheckEmailBlacklistResults

___

### status

• **status**: [`CheckEmailBlacklistResultsStatusEnum`](../enums/CheckEmailBlacklistResultsStatusEnum.md)

**`Memberof`**

CheckEmailBlacklistResults

___

### totalListings

• **totalListings**: `number`

**`Memberof`**

CheckEmailBlacklistResults

___

### warnings

• **warnings**: `string`[]

**`Memberof`**

CheckEmailBlacklistResults

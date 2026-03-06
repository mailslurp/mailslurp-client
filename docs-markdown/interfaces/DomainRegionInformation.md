[MailSlurp JS](../README.md) / DomainRegionInformation

# Interface: DomainRegionInformation

**`Export`**

**`Interface`**

DomainRegionInformation

## Table of contents

### Properties

- [accountRegion](DomainRegionInformation.md#accountregion)
- [active](DomainRegionInformation.md#active)
- [creationEnabled](DomainRegionInformation.md#creationenabled)
- [domainName](DomainRegionInformation.md#domainname)
- [domainType](DomainRegionInformation.md#domaintype)
- [sendingEnabled](DomainRegionInformation.md#sendingenabled)
- [verified](DomainRegionInformation.md#verified)

## Properties

### accountRegion

• `Optional` **accountRegion**: [`DomainRegionInformationAccountRegionEnum`](../enums/DomainRegionInformationAccountRegionEnum.md)

**`Memberof`**

DomainRegionInformation

___

### active

• **active**: `boolean`

**`Memberof`**

DomainRegionInformation

___

### creationEnabled

• **creationEnabled**: `boolean`

**`Memberof`**

DomainRegionInformation

___

### domainName

• **domainName**: `string`

**`Memberof`**

DomainRegionInformation

___

### domainType

• **domainType**: [`DomainRegionInformationDomainTypeEnum`](../enums/DomainRegionInformationDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`Memberof`**

DomainRegionInformation

___

### sendingEnabled

• **sendingEnabled**: `boolean`

**`Memberof`**

DomainRegionInformation

___

### verified

• **verified**: `boolean`

**`Memberof`**

DomainRegionInformation

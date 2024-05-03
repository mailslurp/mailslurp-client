[MailSlurp JS](../README.md) / DomainInformation

# Interface: DomainInformation

**`Export`**

**`Interface`**

DomainInformation

## Table of contents

### Properties

- [domainName](DomainInformation.md#domainname)
- [domainType](DomainInformation.md#domaintype)
- [verified](DomainInformation.md#verified)

## Properties

### domainName

• **domainName**: `string`

**`Memberof`**

DomainInformation

___

### domainType

• **domainType**: [`DomainInformationDomainTypeEnum`](../enums/DomainInformationDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`Memberof`**

DomainInformation

___

### verified

• **verified**: `boolean`

**`Memberof`**

DomainInformation

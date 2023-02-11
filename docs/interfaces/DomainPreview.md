[MailSlurp JS](../README.md) / DomainPreview

# Interface: DomainPreview

Preview object for domain entity

**`Export`**

**`Interface`**

DomainPreview

## Table of contents

### Properties

- [catchAllInboxId](DomainPreview.md#catchallinboxid)
- [createdAt](DomainPreview.md#createdat)
- [domain](DomainPreview.md#domain)
- [domainType](DomainPreview.md#domaintype)
- [id](DomainPreview.md#id)
- [isVerified](DomainPreview.md#isverified)

## Properties

### catchAllInboxId

• `Optional` **catchAllInboxId**: `string`

**`Memberof`**

DomainPreview

___

### createdAt

• **createdAt**: `Date`

**`Memberof`**

DomainPreview

___

### domain

• **domain**: `string`

**`Memberof`**

DomainPreview

___

### domainType

• **domainType**: [`DomainPreviewDomainTypeEnum`](../enums/DomainPreviewDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`Memberof`**

DomainPreview

___

### id

• **id**: `string`

**`Memberof`**

DomainPreview

___

### isVerified

• **isVerified**: `boolean`

**`Memberof`**

DomainPreview

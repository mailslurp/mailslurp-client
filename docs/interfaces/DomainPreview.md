# Interface: DomainPreview

Preview object for domain entity

**`export`**

**`interface`** DomainPreview

## Table of contents

### Properties

- [catchAllInboxId](DomainPreview.md#catchallinboxid)
- [createdAt](DomainPreview.md#createdat)
- [domain](DomainPreview.md#domain)
- [domainType](DomainPreview.md#domaintype)
- [id](DomainPreview.md#id)
- [isVerified](DomainPreview.md#isverified)

## Properties

### <a id="catchallinboxid" name="catchallinboxid"></a> catchAllInboxId

• `Optional` **catchAllInboxId**: `string`

**`memberof`** DomainPreview

___

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

**`memberof`** DomainPreview

___

### <a id="domain" name="domain"></a> domain

• **domain**: `string`

**`memberof`** DomainPreview

___

### <a id="domaintype" name="domaintype"></a> domainType

• **domainType**: [`DomainPreviewDomainTypeEnum`](../enums/DomainPreviewDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`memberof`** DomainPreview

___

### <a id="id" name="id"></a> id

• **id**: `string`

**`memberof`** DomainPreview

___

### <a id="isverified" name="isverified"></a> isVerified

• **isVerified**: `boolean`

**`memberof`** DomainPreview

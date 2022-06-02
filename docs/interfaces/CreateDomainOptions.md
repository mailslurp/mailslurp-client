# Interface: CreateDomainOptions

Options for creating a domain to use with MailSlurp. You must have ownership access to this domain in order to verify it. Domains will not function correctly until the domain has been verified. See https://www.mailslurp.com/guides/custom-domains for help. Domains can be either `HTTP` or `SMTP` type. The type of domain determines which inboxes can be used with it. `SMTP` inboxes use a mail server running `mx.mailslurp.com` while `HTTP` inboxes are handled by AWS SES.

**`export`**

**`interface`** CreateDomainOptions

## Table of contents

### Properties

- [createdCatchAllInbox](CreateDomainOptions.md#createdcatchallinbox)
- [description](CreateDomainOptions.md#description)
- [domain](CreateDomainOptions.md#domain)
- [domainType](CreateDomainOptions.md#domaintype)

## Properties

### <a id="createdcatchallinbox" name="createdcatchallinbox"></a> createdCatchAllInbox

• `Optional` **createdCatchAllInbox**: `boolean`

Whether to create a catch all inbox for the domain. Any email sent to an address using your domain that cannot be matched to an existing inbox you created with the domain will be routed to the created catch all inbox. You can access emails using the regular methods on this inbox ID.

**`memberof`** CreateDomainOptions

___

### <a id="description" name="description"></a> description

• `Optional` **description**: `string`

Optional description of the domain.

**`memberof`** CreateDomainOptions

___

### <a id="domain" name="domain"></a> domain

• **domain**: `string`

The top level domain you wish to use with MailSlurp. Do not specify subdomain just the top level. So `test.com` covers all subdomains such as `mail.test.com`. Don't include a protocol such as `http://`. Once added you must complete the verification steps by adding the returned records to your domain.

**`memberof`** CreateDomainOptions

___

### <a id="domaintype" name="domaintype"></a> domainType

• `Optional` **domainType**: [`CreateDomainOptionsDomainTypeEnum`](../enums/CreateDomainOptionsDomainTypeEnum.md)

Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.

**`memberof`** CreateDomainOptions

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateDomainOptions

# Namespace: CreateDomainOptions

**`export`** 

**`namespace`** CreateDomainOptions

## Index

### Enumerations

* [DomainTypeEnum](../enums/createdomainoptions.domaintypeenum.md)

### Properties

* [createdCatchAllInbox](createdomainoptions.md#createdcatchallinbox)
* [description](createdomainoptions.md#description)
* [domain](createdomainoptions.md#domain)
* [domainType](createdomainoptions.md#domaintype)

## Properties

### createdCatchAllInbox

• `Optional` **createdCatchAllInbox**: boolean

*Defined in [src/generated/api.ts:948](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L948)*

Whether to create a catch all inbox for the domain. Any email sent to an address using your domain that cannot be matched to an existing inbox you created with the domain will be routed to the created catch all inbox. You can access emails using the regular methods on this inbox ID.

**`memberof`** CreateDomainOptions

___

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:954](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L954)*

Optional description of the domain.

**`memberof`** CreateDomainOptions

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:960](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L960)*

The top level domain you wish to use with MailSlurp. Do not specify subdomain just the top level. So `test.com` covers all subdomains such as `mail.test.com`. Don't include a protocol such as `http://`. Once added you must complete the verification steps by adding the returned records to your domain.

**`memberof`** CreateDomainOptions

___

### domainType

• `Optional` **domainType**: [DomainTypeEnum](../enums/createdomainoptions.domaintypeenum.md)

*Defined in [src/generated/api.ts:966](https://github.com/mailslurp/mailslurp-client/blob/c5e5f20/src/generated/api.ts#L966)*

Domain type to create. HTTP or SMTP domain. HTTP domain uses MailSlurps SES MX records. SMTP uses a custom SMTP server MX record. SMTP domains can only be used with SMTP inboxes. SMTP inboxes are more reliable for public inbound emails while HTTP inboxes are more suitable for testing.

**`memberof`** CreateDomainOptions

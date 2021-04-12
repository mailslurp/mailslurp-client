**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateDomainOptions

# Interface: CreateDomainOptions

Options for creating a domain to use with MailSlurp. You must have ownership access to this domain in order to verify it. Domains will not functionally currently until the domain has been verified. See https://www.mailslurp.com/guides/custom-domains for help.

**`export`** 

**`interface`** CreateDomainOptions

## Hierarchy

* **CreateDomainOptions**

## Index

### Properties

* [createdCatchAllInbox](createdomainoptions.md#createdcatchallinbox)
* [description](createdomainoptions.md#description)
* [domain](createdomainoptions.md#domain)

## Properties

### createdCatchAllInbox

• `Optional` **createdCatchAllInbox**: boolean

*Defined in [src/generated/api.ts:573](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L573)*

Whether to create a catch all inbox for the domain. Any email sent to an address using your domain that cannot be matched to an existing inbox you created with the domain will be routed to the created catch all inbox. You can access emails using the regular methods on this inbox ID.

**`memberof`** CreateDomainOptions

___

### description

• `Optional` **description**: string

*Defined in [src/generated/api.ts:579](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L579)*

Optional description of the domain.

**`memberof`** CreateDomainOptions

___

### domain

• `Optional` **domain**: string

*Defined in [src/generated/api.ts:585](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L585)*

The top level domain you wish to use with MailSlurp. Do not specify subdomain just the top level. So `test.com` covers all subdomains such as `mail.test.com`. Don't include a protocol such as `http://`. Once added you must complete the verification steps by adding the returned records to your domain.

**`memberof`** CreateDomainOptions

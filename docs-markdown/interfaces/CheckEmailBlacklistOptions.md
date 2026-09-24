[MailSlurp JS](../README.md) / CheckEmailBlacklistOptions

# Interface: CheckEmailBlacklistOptions

Check a domain, outbound IP address, or specific MX host against configured DNS blacklists

**`Export`**

**`Interface`**

CheckEmailBlacklistOptions

## Table of contents

### Properties

- [captchaToken](CheckEmailBlacklistOptions.md#captchatoken)
- [domain](CheckEmailBlacklistOptions.md#domain)
- [includeDomainInfrastructure](CheckEmailBlacklistOptions.md#includedomaininfrastructure)
- [ipAddress](CheckEmailBlacklistOptions.md#ipaddress)
- [mxHost](CheckEmailBlacklistOptions.md#mxhost)

## Properties

### captchaToken

• `Optional` **captchaToken**: `string`

**`Memberof`**

CheckEmailBlacklistOptions

___

### domain

• `Optional` **domain**: `string`

Domain to check against configured domain blocklists. Domain A and MX addresses are not treated as outbound sending IPs unless includeDomainInfrastructure is explicitly enabled.

**`Memberof`**

CheckEmailBlacklistOptions

___

### includeDomainInfrastructure

• `Optional` **includeDomainInfrastructure**: `boolean`

Explicitly include the domain A address and discovered MX addresses as infrastructure diagnostics. Defaults to false because these addresses are normally not outbound sending IPs.

**`Memberof`**

CheckEmailBlacklistOptions

___

### ipAddress

• `Optional` **ipAddress**: `string`

Specific observed or configured outbound IPv4 address to check directly

**`Memberof`**

CheckEmailBlacklistOptions

___

### mxHost

• `Optional` **mxHost**: `string`

Specific MX host to resolve and check as inbound infrastructure. MX results do not prove outbound sender reputation.

**`Memberof`**

CheckEmailBlacklistOptions

[MailSlurp JS](../README.md) / CheckEmailBlacklistOptions

# Interface: CheckEmailBlacklistOptions

Check a domain, IP address, or specific MX host against configured DNS blacklists

**`Export`**

**`Interface`**

CheckEmailBlacklistOptions

## Table of contents

### Properties

- [captchaToken](CheckEmailBlacklistOptions.md#captchatoken)
- [domain](CheckEmailBlacklistOptions.md#domain)
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

Domain to expand into A and MX host IPv4 addresses

**`Memberof`**

CheckEmailBlacklistOptions

___

### ipAddress

• `Optional` **ipAddress**: `string`

Specific IPv4 address to check directly

**`Memberof`**

CheckEmailBlacklistOptions

___

### mxHost

• `Optional` **mxHost**: `string`

Specific MX host to resolve and check directly

**`Memberof`**

CheckEmailBlacklistOptions

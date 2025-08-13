[MailSlurp JS](../README.md) / CreateTotpDeviceCustomOptions

# Interface: CreateTotpDeviceCustomOptions

**`Export`**

**`Interface`**

CreateTotpDeviceCustomOptions

## Table of contents

### Properties

- [algorithm](CreateTotpDeviceCustomOptions.md#algorithm)
- [digits](CreateTotpDeviceCustomOptions.md#digits)
- [issuer](CreateTotpDeviceCustomOptions.md#issuer)
- [name](CreateTotpDeviceCustomOptions.md#name)
- [period](CreateTotpDeviceCustomOptions.md#period)
- [secret](CreateTotpDeviceCustomOptions.md#secret)
- [username](CreateTotpDeviceCustomOptions.md#username)

## Properties

### algorithm

• `Optional` **algorithm**: `string`

Optional algorithm override

**`Memberof`**

CreateTotpDeviceCustomOptions

___

### digits

• `Optional` **digits**: `number`

Optional number of digits in TOTP code

**`Memberof`**

CreateTotpDeviceCustomOptions

___

### issuer

• `Optional` **issuer**: `string`

Optional issuer override for the TOTP device

**`Memberof`**

CreateTotpDeviceCustomOptions

___

### name

• `Optional` **name**: `string`

Name for labeling the TOTP device

**`Memberof`**

CreateTotpDeviceCustomOptions

___

### period

• `Optional` **period**: `number`

Optional period in seconds for TOTP code expiration

**`Memberof`**

CreateTotpDeviceCustomOptions

___

### secret

• **secret**: `string`

The base32 encoded secret provided by the identity provider for the TOTP device.

**`Memberof`**

CreateTotpDeviceCustomOptions

___

### username

• `Optional` **username**: `string`

Optional username for the TOTP device

**`Memberof`**

CreateTotpDeviceCustomOptions

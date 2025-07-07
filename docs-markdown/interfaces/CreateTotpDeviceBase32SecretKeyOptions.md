[MailSlurp JS](../README.md) / CreateTotpDeviceBase32SecretKeyOptions

# Interface: CreateTotpDeviceBase32SecretKeyOptions

**`Export`**

**`Interface`**

CreateTotpDeviceBase32SecretKeyOptions

## Table of contents

### Properties

- [algorithm](CreateTotpDeviceBase32SecretKeyOptions.md#algorithm)
- [base32SecretKey](CreateTotpDeviceBase32SecretKeyOptions.md#base32secretkey)
- [digits](CreateTotpDeviceBase32SecretKeyOptions.md#digits)
- [issuer](CreateTotpDeviceBase32SecretKeyOptions.md#issuer)
- [name](CreateTotpDeviceBase32SecretKeyOptions.md#name)
- [period](CreateTotpDeviceBase32SecretKeyOptions.md#period)
- [username](CreateTotpDeviceBase32SecretKeyOptions.md#username)

## Properties

### algorithm

• `Optional` **algorithm**: `string`

Optional algorithm override

**`Memberof`**

CreateTotpDeviceBase32SecretKeyOptions

___

### base32SecretKey

• **base32SecretKey**: `string`

Base32 secret key for TOTP device as alternative to OTP Auth URI or QR code.

**`Memberof`**

CreateTotpDeviceBase32SecretKeyOptions

___

### digits

• `Optional` **digits**: `number`

Optional number of digits in TOTP code

**`Memberof`**

CreateTotpDeviceBase32SecretKeyOptions

___

### issuer

• `Optional` **issuer**: `string`

Optional issuer override for the TOTP device

**`Memberof`**

CreateTotpDeviceBase32SecretKeyOptions

___

### name

• `Optional` **name**: `string`

Name for labeling the TOTP device

**`Memberof`**

CreateTotpDeviceBase32SecretKeyOptions

___

### period

• `Optional` **period**: `number`

Optional period in seconds for TOTP code expiration

**`Memberof`**

CreateTotpDeviceBase32SecretKeyOptions

___

### username

• `Optional` **username**: `string`

Optional username for the TOTP device

**`Memberof`**

CreateTotpDeviceBase32SecretKeyOptions

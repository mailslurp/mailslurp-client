[MailSlurp JS](../README.md) / CreatePublicSpamTestOptions

# Interface: CreatePublicSpamTestOptions

Create a public spam test using MailSlurp-managed inbox placement seed addresses.

**`Export`**

**`Interface`**

CreatePublicSpamTestOptions

## Table of contents

### Properties

- [addressFormat](CreatePublicSpamTestOptions.md#addressformat)
- [captchaToken](CreatePublicSpamTestOptions.md#captchatoken)
- [fromEmail](CreatePublicSpamTestOptions.md#fromemail)
- [requestedSegment](CreatePublicSpamTestOptions.md#requestedsegment)
- [senderDomain](CreatePublicSpamTestOptions.md#senderdomain)

## Properties

### addressFormat

• **addressFormat**: [`CreatePublicSpamTestOptionsAddressFormatEnum`](../enums/CreatePublicSpamTestOptionsAddressFormatEnum.md)

Address export format for the returned seed addresses.

**`Memberof`**

CreatePublicSpamTestOptions

___

### captchaToken

• `Optional` **captchaToken**: `string`

Optional captcha token when captcha protection is enabled.

**`Memberof`**

CreatePublicSpamTestOptions

___

### fromEmail

• `Optional` **fromEmail**: `string`

Optional sender email address. If provided, MailSlurp will also derive senderDomain for compatibility with inbox placement service versions that still expect it.

**`Memberof`**

CreatePublicSpamTestOptions

___

### requestedSegment

• **requestedSegment**: [`CreatePublicSpamTestOptionsRequestedSegmentEnum`](../enums/CreatePublicSpamTestOptionsRequestedSegmentEnum.md)

Requested seed cohort for the placement test.

**`Memberof`**

CreatePublicSpamTestOptions

___

### senderDomain

• `Optional` **senderDomain**: `string`

Optional sender domain. If omitted and fromEmail is provided, MailSlurp derives it automatically.

**`Memberof`**

CreatePublicSpamTestOptions

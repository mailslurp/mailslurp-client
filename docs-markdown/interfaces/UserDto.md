[MailSlurp JS](../README.md) / UserDto

# Interface: UserDto

Representation a user's account

**`Export`**

**`Interface`**

UserDto

## Table of contents

### Properties

- [accessLinkSendResult](UserDto.md#accesslinksendresult)
- [accountRegion](UserDto.md#accountregion)
- [addNewContacts](UserDto.md#addnewcontacts)
- [apiAccessToken](UserDto.md#apiaccesstoken)
- [apiKey](UserDto.md#apikey)
- [chargePending](UserDto.md#chargepending)
- [created](UserDto.md#created)
- [customerId](UserDto.md#customerid)
- [emailAddress](UserDto.md#emailaddress)
- [emailAddressMd5](UserDto.md#emailaddressmd5)
- [enableSms](UserDto.md#enablesms)
- [frozenMessage](UserDto.md#frozenmessage)
- [hasOnboarded](UserDto.md#hasonboarded)
- [hasPassword](UserDto.md#haspassword)
- [id](UserDto.md#id)
- [imapPassword](UserDto.md#imappassword)
- [imapUsername](UserDto.md#imapusername)
- [isFrozen](UserDto.md#isfrozen)
- [name](UserDto.md#name)
- [organization](UserDto.md#organization)
- [phoneNumber](UserDto.md#phonenumber)
- [smtpPassword](UserDto.md#smtppassword)
- [smtpUsername](UserDto.md#smtpusername)
- [ssoProvider](UserDto.md#ssoprovider)
- [unsubscribed](UserDto.md#unsubscribed)
- [userType](UserDto.md#usertype)
- [vendorEmailAddress](UserDto.md#vendoremailaddress)
- [verified](UserDto.md#verified)
- [verifiedPhone](UserDto.md#verifiedphone)

## Properties

### accessLinkSendResult

• `Optional` **accessLinkSendResult**: [`AccessLinkSendResultDto`](AccessLinkSendResultDto.md)

**`Memberof`**

UserDto

___

### accountRegion

• `Optional` **accountRegion**: [`UserDtoAccountRegionEnum`](../enums/UserDtoAccountRegionEnum.md)

Default account region

**`Memberof`**

UserDto

___

### addNewContacts

• `Optional` **addNewContacts**: `boolean`

**`Memberof`**

UserDto

___

### apiAccessToken

• `Optional` **apiAccessToken**: [`TemporaryAccessKeyDto`](TemporaryAccessKeyDto.md)

**`Memberof`**

UserDto

___

### apiKey

• **apiKey**: `string`

Deprecate api key use entity instead

**`Memberof`**

UserDto

___

### chargePending

• `Optional` **chargePending**: `boolean`

**`Memberof`**

UserDto

___

### created

• `Optional` **created**: `Date`

**`Memberof`**

UserDto

___

### customerId

• `Optional` **customerId**: `string`

**`Memberof`**

UserDto

___

### emailAddress

• **emailAddress**: `string`

**`Memberof`**

UserDto

___

### emailAddressMd5

• **emailAddressMd5**: `string`

**`Memberof`**

UserDto

___

### enableSms

• `Optional` **enableSms**: `boolean`

**`Memberof`**

UserDto

___

### frozenMessage

• `Optional` **frozenMessage**: `string`

**`Memberof`**

UserDto

___

### hasOnboarded

• `Optional` **hasOnboarded**: `boolean`

**`Memberof`**

UserDto

___

### hasPassword

• **hasPassword**: `boolean`

**`Memberof`**

UserDto

___

### id

• **id**: `string`

**`Memberof`**

UserDto

___

### imapPassword

• `Optional` **imapPassword**: `string`

**`Memberof`**

UserDto

___

### imapUsername

• `Optional` **imapUsername**: `string`

**`Memberof`**

UserDto

___

### isFrozen

• **isFrozen**: `boolean`

**`Memberof`**

UserDto

___

### name

• `Optional` **name**: `string`

User display name

**`Memberof`**

UserDto

___

### organization

• `Optional` **organization**: `string`

Does user belong to an organization

**`Memberof`**

UserDto

___

### phoneNumber

• `Optional` **phoneNumber**: `string`

**`Memberof`**

UserDto

___

### smtpPassword

• `Optional` **smtpPassword**: `string`

**`Memberof`**

UserDto

___

### smtpUsername

• `Optional` **smtpUsername**: `string`

**`Memberof`**

UserDto

___

### ssoProvider

• `Optional` **ssoProvider**: `string`

**`Memberof`**

UserDto

___

### unsubscribed

• `Optional` **unsubscribed**: `boolean`

**`Memberof`**

UserDto

___

### userType

• `Optional` **userType**: [`UserDtoUserTypeEnum`](../enums/UserDtoUserTypeEnum.md)

**`Memberof`**

UserDto

___

### vendorEmailAddress

• `Optional` **vendorEmailAddress**: `string`

**`Memberof`**

UserDto

___

### verified

• `Optional` **verified**: [`UserDtoVerifiedEnum`](../enums/UserDtoVerifiedEnum.md)

Has user accepted an organization invite

**`Memberof`**

UserDto

___

### verifiedPhone

• `Optional` **verifiedPhone**: [`UserDtoVerifiedPhoneEnum`](../enums/UserDtoVerifiedPhoneEnum.md)

Has user accepted an organization invite

**`Memberof`**

UserDto

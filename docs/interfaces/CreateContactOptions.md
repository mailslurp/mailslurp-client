# Interface: CreateContactOptions

Options for creating an email contact in address book

**`export`**

**`interface`** CreateContactOptions

## Table of contents

### Properties

- [company](CreateContactOptions.md#company)
- [emailAddresses](CreateContactOptions.md#emailaddresses)
- [firstName](CreateContactOptions.md#firstname)
- [groupId](CreateContactOptions.md#groupid)
- [lastName](CreateContactOptions.md#lastname)
- [metaData](CreateContactOptions.md#metadata)
- [optOut](CreateContactOptions.md#optout)
- [tags](CreateContactOptions.md#tags)

## Properties

### <a id="company" name="company"></a> company

• `Optional` **company**: `string`

**`memberof`** CreateContactOptions

___

### <a id="emailaddresses" name="emailaddresses"></a> emailAddresses

• `Optional` **emailAddresses**: `string`[]

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### <a id="firstname" name="firstname"></a> firstName

• `Optional` **firstName**: `string`

**`memberof`** CreateContactOptions

___

### <a id="groupid" name="groupid"></a> groupId

• `Optional` **groupId**: `string`

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### <a id="lastname" name="lastname"></a> lastName

• `Optional` **lastName**: `string`

**`memberof`** CreateContactOptions

___

### <a id="metadata" name="metadata"></a> metaData

• `Optional` **metaData**: `object`

**`memberof`** CreateContactOptions

___

### <a id="optout" name="optout"></a> optOut

• `Optional` **optOut**: `boolean`

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### <a id="tags" name="tags"></a> tags

• `Optional` **tags**: `string`[]

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions

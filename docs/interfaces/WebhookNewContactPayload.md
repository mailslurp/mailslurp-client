# Interface: WebhookNewContactPayload

NEW_CONTACT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains a recipient that has not been saved as a contact.

**`export`**

**`interface`** WebhookNewContactPayload

## Table of contents

### Properties

- [company](WebhookNewContactPayload.md#company)
- [contactId](WebhookNewContactPayload.md#contactid)
- [createdAt](WebhookNewContactPayload.md#createdat)
- [emailAddresses](WebhookNewContactPayload.md#emailaddresses)
- [eventName](WebhookNewContactPayload.md#eventname)
- [firstName](WebhookNewContactPayload.md#firstname)
- [groupId](WebhookNewContactPayload.md#groupid)
- [lastName](WebhookNewContactPayload.md#lastname)
- [messageId](WebhookNewContactPayload.md#messageid)
- [metaData](WebhookNewContactPayload.md#metadata)
- [optOut](WebhookNewContactPayload.md#optout)
- [primaryEmailAddress](WebhookNewContactPayload.md#primaryemailaddress)
- [tags](WebhookNewContactPayload.md#tags)
- [webhookId](WebhookNewContactPayload.md#webhookid)
- [webhookName](WebhookNewContactPayload.md#webhookname)

## Properties

### <a id="company" name="company"></a> company

• `Optional` **company**: `string`

**`memberof`** WebhookNewContactPayload

___

### <a id="contactid" name="contactid"></a> contactId

• **contactId**: `string`

**`memberof`** WebhookNewContactPayload

___

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

**`memberof`** WebhookNewContactPayload

___

### <a id="emailaddresses" name="emailaddresses"></a> emailAddresses

• **emailAddresses**: `string`[]

**`memberof`** WebhookNewContactPayload

___

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`WebhookNewContactPayloadEventNameEnum`](../enums/WebhookNewContactPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

___

### <a id="firstname" name="firstname"></a> firstName

• `Optional` **firstName**: `string`

**`memberof`** WebhookNewContactPayload

___

### <a id="groupid" name="groupid"></a> groupId

• `Optional` **groupId**: `string`

**`memberof`** WebhookNewContactPayload

___

### <a id="lastname" name="lastname"></a> lastName

• `Optional` **lastName**: `string`

**`memberof`** WebhookNewContactPayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

___

### <a id="metadata" name="metadata"></a> metaData

• `Optional` **metaData**: `object`

**`memberof`** WebhookNewContactPayload

___

### <a id="optout" name="optout"></a> optOut

• **optOut**: `boolean`

**`memberof`** WebhookNewContactPayload

___

### <a id="primaryemailaddress" name="primaryemailaddress"></a> primaryEmailAddress

• `Optional` **primaryEmailAddress**: `string`

**`memberof`** WebhookNewContactPayload

___

### <a id="tags" name="tags"></a> tags

• **tags**: `string`[]

**`memberof`** WebhookNewContactPayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

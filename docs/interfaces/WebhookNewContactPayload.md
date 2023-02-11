[MailSlurp JS](../README.md) / WebhookNewContactPayload

# Interface: WebhookNewContactPayload

NEW_CONTACT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains a recipient that has not been saved as a contact.

**`Export`**

**`Interface`**

WebhookNewContactPayload

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

### company

• `Optional` **company**: `string`

Contact company name

**`Memberof`**

WebhookNewContactPayload

___

### contactId

• **contactId**: `string`

Contact ID

**`Memberof`**

WebhookNewContactPayload

___

### createdAt

• **createdAt**: `Date`

Date time of event creation

**`Memberof`**

WebhookNewContactPayload

___

### emailAddresses

• **emailAddresses**: `string`[]

Email addresses for contact

**`Memberof`**

WebhookNewContactPayload

___

### eventName

• **eventName**: [`WebhookNewContactPayloadEventNameEnum`](../enums/WebhookNewContactPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookNewContactPayload

___

### firstName

• `Optional` **firstName**: `string`

Contact first name

**`Memberof`**

WebhookNewContactPayload

___

### groupId

• `Optional` **groupId**: `string`

Contact group ID

**`Memberof`**

WebhookNewContactPayload

___

### lastName

• `Optional` **lastName**: `string`

Contact last name

**`Memberof`**

WebhookNewContactPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookNewContactPayload

___

### metaData

• `Optional` **metaData**: `object`

**`Memberof`**

WebhookNewContactPayload

___

### optOut

• **optOut**: `boolean`

Has contact opted out of emails

**`Memberof`**

WebhookNewContactPayload

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: `string`

Primary email address for contact

**`Memberof`**

WebhookNewContactPayload

___

### tags

• **tags**: `string`[]

Tags for contact

**`Memberof`**

WebhookNewContactPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookNewContactPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookNewContactPayload

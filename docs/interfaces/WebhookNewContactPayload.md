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

### company

• `Optional` **company**: `string`

**`memberof`** WebhookNewContactPayload

___

### contactId

• **contactId**: `string`

**`memberof`** WebhookNewContactPayload

___

### createdAt

• **createdAt**: `Date`

**`memberof`** WebhookNewContactPayload

___

### emailAddresses

• **emailAddresses**: `string`[]

**`memberof`** WebhookNewContactPayload

___

### eventName

• `Optional` **eventName**: [`WebhookNewContactPayloadEventNameEnum`](../enums/WebhookNewContactPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

___

### firstName

• `Optional` **firstName**: `string`

**`memberof`** WebhookNewContactPayload

___

### groupId

• `Optional` **groupId**: `string`

**`memberof`** WebhookNewContactPayload

___

### lastName

• `Optional` **lastName**: `string`

**`memberof`** WebhookNewContactPayload

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

___

### metaData

• `Optional` **metaData**: `object`

**`memberof`** WebhookNewContactPayload

___

### optOut

• `Optional` **optOut**: `boolean`

**`memberof`** WebhookNewContactPayload

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: `string`

**`memberof`** WebhookNewContactPayload

___

### tags

• **tags**: `string`[]

**`memberof`** WebhookNewContactPayload

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

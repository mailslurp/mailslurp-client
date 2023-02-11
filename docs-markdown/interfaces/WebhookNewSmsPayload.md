[MailSlurp JS](../README.md) / WebhookNewSmsPayload

# Interface: WebhookNewSmsPayload

NEW_SMS webhook payload. Sent to your webhook url endpoint via HTTP POST when an sms is received by the phone number that your webhook is attached to. Use the SMS ID to fetch the full SMS details.

**`Export`**

**`Interface`**

WebhookNewSmsPayload

## Table of contents

### Properties

- [body](WebhookNewSmsPayload.md#body)
- [eventName](WebhookNewSmsPayload.md#eventname)
- [fromNumber](WebhookNewSmsPayload.md#fromnumber)
- [messageId](WebhookNewSmsPayload.md#messageid)
- [phoneNumber](WebhookNewSmsPayload.md#phonenumber)
- [read](WebhookNewSmsPayload.md#read)
- [smsId](WebhookNewSmsPayload.md#smsid)
- [toNumber](WebhookNewSmsPayload.md#tonumber)
- [userId](WebhookNewSmsPayload.md#userid)
- [webhookId](WebhookNewSmsPayload.md#webhookid)
- [webhookName](WebhookNewSmsPayload.md#webhookname)

## Properties

### body

• **body**: `string`

SMS message body

**`Memberof`**

WebhookNewSmsPayload

___

### eventName

• **eventName**: [`WebhookNewSmsPayloadEventNameEnum`](../enums/WebhookNewSmsPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookNewSmsPayload

___

### fromNumber

• **fromNumber**: `string`

Sender phone number

**`Memberof`**

WebhookNewSmsPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookNewSmsPayload

___

### phoneNumber

• **phoneNumber**: `string`

ID of phone number receiving SMS

**`Memberof`**

WebhookNewSmsPayload

___

### read

• **read**: `boolean`

SMS has been read

**`Memberof`**

WebhookNewSmsPayload

___

### smsId

• **smsId**: `string`

ID of SMS message

**`Memberof`**

WebhookNewSmsPayload

___

### toNumber

• **toNumber**: `string`

Recipient phone number

**`Memberof`**

WebhookNewSmsPayload

___

### userId

• **userId**: `string`

User ID of event

**`Memberof`**

WebhookNewSmsPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookNewSmsPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookNewSmsPayload

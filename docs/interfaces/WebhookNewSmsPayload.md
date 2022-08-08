# Interface: WebhookNewSmsPayload

NEW_SMS webhook payload. Sent to your webhook url endpoint via HTTP POST when an sms is received by the phone number that your webhook is attached to. Use the SMS ID to fetch the full SMS details.

**`export`**

**`interface`** WebhookNewSmsPayload

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

### <a id="body" name="body"></a> body

• **body**: `string`

SMS message body

**`memberof`** WebhookNewSmsPayload

___

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`WebhookNewSmsPayloadEventNameEnum`](../enums/WebhookNewSmsPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewSmsPayload

___

### <a id="fromnumber" name="fromnumber"></a> fromNumber

• **fromNumber**: `string`

Sender phone number

**`memberof`** WebhookNewSmsPayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewSmsPayload

___

### <a id="phonenumber" name="phonenumber"></a> phoneNumber

• **phoneNumber**: `string`

ID of phone number receiving SMS

**`memberof`** WebhookNewSmsPayload

___

### <a id="read" name="read"></a> read

• **read**: `boolean`

SMS has been read

**`memberof`** WebhookNewSmsPayload

___

### <a id="smsid" name="smsid"></a> smsId

• **smsId**: `string`

ID of SMS message

**`memberof`** WebhookNewSmsPayload

___

### <a id="tonumber" name="tonumber"></a> toNumber

• **toNumber**: `string`

Recipient phone number

**`memberof`** WebhookNewSmsPayload

___

### <a id="userid" name="userid"></a> userId

• **userId**: `string`

User ID of event

**`memberof`** WebhookNewSmsPayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewSmsPayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewSmsPayload

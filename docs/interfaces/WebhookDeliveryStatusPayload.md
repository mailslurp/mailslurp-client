[MailSlurp JS](../README.md) / WebhookDeliveryStatusPayload

# Interface: WebhookDeliveryStatusPayload

DELIVERY_STATUS webhook payload. Sent to your webhook url endpoint via HTTP POST when an email delivery status is created. This could be a successful delivery or a delivery failure.

**`Export`**

**`Interface`**

WebhookDeliveryStatusPayload

## Table of contents

### Properties

- [eventName](WebhookDeliveryStatusPayload.md#eventname)
- [id](WebhookDeliveryStatusPayload.md#id)
- [inboxId](WebhookDeliveryStatusPayload.md#inboxid)
- [messageId](WebhookDeliveryStatusPayload.md#messageid)
- [processingTimeMillis](WebhookDeliveryStatusPayload.md#processingtimemillis)
- [received](WebhookDeliveryStatusPayload.md#received)
- [recipients](WebhookDeliveryStatusPayload.md#recipients)
- [remoteMtaIp](WebhookDeliveryStatusPayload.md#remotemtaip)
- [reportingMta](WebhookDeliveryStatusPayload.md#reportingmta)
- [sentId](WebhookDeliveryStatusPayload.md#sentid)
- [smtpResponse](WebhookDeliveryStatusPayload.md#smtpresponse)
- [smtpStatusCode](WebhookDeliveryStatusPayload.md#smtpstatuscode)
- [subject](WebhookDeliveryStatusPayload.md#subject)
- [userId](WebhookDeliveryStatusPayload.md#userid)
- [webhookId](WebhookDeliveryStatusPayload.md#webhookid)
- [webhookName](WebhookDeliveryStatusPayload.md#webhookname)

## Properties

### eventName

• **eventName**: [`WebhookDeliveryStatusPayloadEventNameEnum`](../enums/WebhookDeliveryStatusPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookDeliveryStatusPayload

___

### id

• **id**: `string`

ID of delivery status

**`Memberof`**

WebhookDeliveryStatusPayload

___

### inboxId

• `Optional` **inboxId**: `string`

Id of the inbox

**`Memberof`**

WebhookDeliveryStatusPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookDeliveryStatusPayload

___

### processingTimeMillis

• `Optional` **processingTimeMillis**: `number`

Time in milliseconds for delivery processing

**`Memberof`**

WebhookDeliveryStatusPayload

___

### received

• `Optional` **received**: `Date`

Time event was received

**`Memberof`**

WebhookDeliveryStatusPayload

___

### recipients

• `Optional` **recipients**: `string`[]

Recipients for delivery

**`Memberof`**

WebhookDeliveryStatusPayload

___

### remoteMtaIp

• `Optional` **remoteMtaIp**: `string`

IP address of the remote Mail Transfer Agent

**`Memberof`**

WebhookDeliveryStatusPayload

___

### reportingMta

• `Optional` **reportingMta**: `string`

Mail Transfer Agent reporting delivery status

**`Memberof`**

WebhookDeliveryStatusPayload

___

### sentId

• `Optional` **sentId**: `string`

ID of sent email

**`Memberof`**

WebhookDeliveryStatusPayload

___

### smtpResponse

• `Optional` **smtpResponse**: `string`

SMTP server response message

**`Memberof`**

WebhookDeliveryStatusPayload

___

### smtpStatusCode

• `Optional` **smtpStatusCode**: `number`

SMTP server status

**`Memberof`**

WebhookDeliveryStatusPayload

___

### subject

• `Optional` **subject**: `string`

Email subject

**`Memberof`**

WebhookDeliveryStatusPayload

___

### userId

• **userId**: `string`

User ID of event

**`Memberof`**

WebhookDeliveryStatusPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookDeliveryStatusPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookDeliveryStatusPayload

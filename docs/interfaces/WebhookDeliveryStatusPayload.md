# Interface: WebhookDeliveryStatusPayload

DELIVERY_STATUS webhook payload. Sent to your webhook url endpoint via HTTP POST when an email delivery status is created. This could be a successful delivery or a delivery failure.

**`export`**

**`interface`** WebhookDeliveryStatusPayload

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

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`WebhookDeliveryStatusPayloadEventNameEnum`](../enums/WebhookDeliveryStatusPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="id" name="id"></a> id

• **id**: `string`

ID of delivery status

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="inboxid" name="inboxid"></a> inboxId

• `Optional` **inboxId**: `string`

Id of the inbox

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="processingtimemillis" name="processingtimemillis"></a> processingTimeMillis

• `Optional` **processingTimeMillis**: `number`

Time in milliseconds for delivery processing

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="received" name="received"></a> received

• `Optional` **received**: `Date`

Time event was received

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="recipients" name="recipients"></a> recipients

• `Optional` **recipients**: `string`[]

Recipients for delivery

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="remotemtaip" name="remotemtaip"></a> remoteMtaIp

• `Optional` **remoteMtaIp**: `string`

IP address of the remote Mail Transfer Agent

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="reportingmta" name="reportingmta"></a> reportingMta

• `Optional` **reportingMta**: `string`

Mail Transfer Agent reporting delivery status

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="sentid" name="sentid"></a> sentId

• `Optional` **sentId**: `string`

ID of sent email

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="smtpresponse" name="smtpresponse"></a> smtpResponse

• `Optional` **smtpResponse**: `string`

SMTP server response message

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="smtpstatuscode" name="smtpstatuscode"></a> smtpStatusCode

• `Optional` **smtpStatusCode**: `number`

SMTP server status

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="subject" name="subject"></a> subject

• `Optional` **subject**: `string`

Email subject

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="userid" name="userid"></a> userId

• **userId**: `string`

User ID of event

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookDeliveryStatusPayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookDeliveryStatusPayload

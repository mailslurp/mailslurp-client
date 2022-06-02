# Interface: WebhookNewEmailPayload

NEW_EMAIL webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to. Use the email ID to fetch the full email body or attachments.

**`export`**

**`interface`** WebhookNewEmailPayload

## Table of contents

### Properties

- [attachmentMetaDatas](WebhookNewEmailPayload.md#attachmentmetadatas)
- [bcc](WebhookNewEmailPayload.md#bcc)
- [cc](WebhookNewEmailPayload.md#cc)
- [createdAt](WebhookNewEmailPayload.md#createdat)
- [emailId](WebhookNewEmailPayload.md#emailid)
- [eventName](WebhookNewEmailPayload.md#eventname)
- [from](WebhookNewEmailPayload.md#from)
- [inboxId](WebhookNewEmailPayload.md#inboxid)
- [messageId](WebhookNewEmailPayload.md#messageid)
- [subject](WebhookNewEmailPayload.md#subject)
- [to](WebhookNewEmailPayload.md#to)
- [webhookId](WebhookNewEmailPayload.md#webhookid)
- [webhookName](WebhookNewEmailPayload.md#webhookname)

## Properties

### <a id="attachmentmetadatas" name="attachmentmetadatas"></a> attachmentMetaDatas

• **attachmentMetaDatas**: [`AttachmentMetaData`](AttachmentMetaData.md)[]

List of attachment meta data objects if attachments present

**`memberof`** WebhookNewEmailPayload

___

### <a id="bcc" name="bcc"></a> bcc

• **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** WebhookNewEmailPayload

___

### <a id="cc" name="cc"></a> cc

• **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`memberof`** WebhookNewEmailPayload

___

### <a id="createdat" name="createdat"></a> createdAt

• **createdAt**: `Date`

Date time of event creation

**`memberof`** WebhookNewEmailPayload

___

### <a id="emailid" name="emailid"></a> emailId

• **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`memberof`** WebhookNewEmailPayload

___

### <a id="eventname" name="eventname"></a> eventName

• **eventName**: [`WebhookNewEmailPayloadEventNameEnum`](../enums/WebhookNewEmailPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewEmailPayload

___

### <a id="from" name="from"></a> from

• **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`memberof`** WebhookNewEmailPayload

___

### <a id="inboxid" name="inboxid"></a> inboxId

• **inboxId**: `string`

Id of the inbox that received an email

**`memberof`** WebhookNewEmailPayload

___

### <a id="messageid" name="messageid"></a> messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewEmailPayload

___

### <a id="subject" name="subject"></a> subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`memberof`** WebhookNewEmailPayload

___

### <a id="to" name="to"></a> to

• **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`memberof`** WebhookNewEmailPayload

___

### <a id="webhookid" name="webhookid"></a> webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewEmailPayload

___

### <a id="webhookname" name="webhookname"></a> webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewEmailPayload

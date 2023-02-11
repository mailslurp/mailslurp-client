[MailSlurp JS](../README.md) / WebhookNewEmailPayload

# Interface: WebhookNewEmailPayload

NEW_EMAIL webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to. Use the email ID to fetch the full email body or attachments.

**`Export`**

**`Interface`**

WebhookNewEmailPayload

## Table of contents

### Properties

- [attachmentMetaDatas](WebhookNewEmailPayload.md#attachmentmetadatas)
- [bcc](WebhookNewEmailPayload.md#bcc)
- [cc](WebhookNewEmailPayload.md#cc)
- [createdAt](WebhookNewEmailPayload.md#createdat)
- [domainId](WebhookNewEmailPayload.md#domainid)
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

### attachmentMetaDatas

• **attachmentMetaDatas**: [`AttachmentMetaData`](AttachmentMetaData.md)[]

List of attachment meta data objects if attachments present

**`Memberof`**

WebhookNewEmailPayload

___

### bcc

• **bcc**: `string`[]

List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

WebhookNewEmailPayload

___

### cc

• **cc**: `string`[]

List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

WebhookNewEmailPayload

___

### createdAt

• **createdAt**: `Date`

Date time of event creation

**`Memberof`**

WebhookNewEmailPayload

___

### domainId

• `Optional` **domainId**: `string`

Id of the domain that received an email

**`Memberof`**

WebhookNewEmailPayload

___

### emailId

• **emailId**: `string`

ID of the email that was received. Use this ID for fetching the email with the `EmailController`.

**`Memberof`**

WebhookNewEmailPayload

___

### eventName

• **eventName**: [`WebhookNewEmailPayloadEventNameEnum`](../enums/WebhookNewEmailPayloadEventNameEnum.md)

Name of the event type webhook is being triggered for.

**`Memberof`**

WebhookNewEmailPayload

___

### from

• **from**: `string`

Who the email was sent from. An email address - see fromName for the sender name.

**`Memberof`**

WebhookNewEmailPayload

___

### inboxId

• **inboxId**: `string`

Id of the inbox

**`Memberof`**

WebhookNewEmailPayload

___

### messageId

• **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`Memberof`**

WebhookNewEmailPayload

___

### subject

• `Optional` **subject**: `string`

The subject line of the email message as specified by SMTP subject header

**`Memberof`**

WebhookNewEmailPayload

___

### to

• **to**: `string`[]

List of `To` recipient email addresses that the email was addressed to. See recipients object for names.

**`Memberof`**

WebhookNewEmailPayload

___

### webhookId

• **webhookId**: `string`

ID of webhook entity being triggered

**`Memberof`**

WebhookNewEmailPayload

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`Memberof`**

WebhookNewEmailPayload

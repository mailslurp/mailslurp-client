[MailSlurp JS](../README.md) / AbstractWebhookPayload

# Interface: AbstractWebhookPayload

Abstract webhook payload. Use the correct payload type for your webhook event type in order to access all the specific properties for that event. See the `NEW_EMAIL`,`NEW_CONTACT`, `NEW_ATTACHMENT` and `EMAIL_OPENED` payloads for the properties available for those events.

**`export`**

**`interface`** AbstractWebhookPayload

## Table of contents

### Properties

- [eventName](AbstractWebhookPayload.md#eventname)
- [messageId](AbstractWebhookPayload.md#messageid)
- [webhookId](AbstractWebhookPayload.md#webhookid)
- [webhookName](AbstractWebhookPayload.md#webhookname)

## Properties

### eventName

• **eventName**: [`EventNameEnum`](../enums/AbstractWebhookPayload.EventNameEnum.md)

**`memberof`** AbstractWebhookPayload

#### Defined in

[src/generated/api.ts:95](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L95)

___

### messageId

• **messageId**: `string`

**`memberof`** AbstractWebhookPayload

#### Defined in

[src/generated/api.ts:101](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L101)

___

### webhookId

• **webhookId**: `string`

**`memberof`** AbstractWebhookPayload

#### Defined in

[src/generated/api.ts:107](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L107)

___

### webhookName

• `Optional` **webhookName**: `string`

**`memberof`** AbstractWebhookPayload

#### Defined in

[src/generated/api.ts:113](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L113)

[MailSlurp JS](../README.md) / WebhookNewContactPayload

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

#### Defined in

[src/generated/api.ts:6563](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6563)

___

### contactId

• **contactId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6569](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6569)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6575](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6575)

___

### emailAddresses

• **emailAddresses**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6581](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6581)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookNewContactPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6587](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6587)

___

### firstName

• `Optional` **firstName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6593](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6593)

___

### groupId

• `Optional` **groupId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6599](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6599)

___

### lastName

• `Optional` **lastName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6605](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6605)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6611](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6611)

___

### metaData

• `Optional` **metaData**: [`JsonNode`](JsonNode.md)

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6617](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6617)

___

### optOut

• `Optional` **optOut**: `boolean`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6623](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6623)

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6629](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6629)

___

### tags

• **tags**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6635](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6635)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6641](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6641)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6647](https://github.com/mailslurp/mailslurp-client/blob/113e801/src/generated/api.ts#L6647)

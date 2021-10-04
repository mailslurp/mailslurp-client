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

[src/generated/api.ts:6609](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6609)

___

### contactId

• **contactId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6615](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6615)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6621](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6621)

___

### emailAddresses

• **emailAddresses**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6627](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6627)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookNewContactPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6633](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6633)

___

### firstName

• `Optional` **firstName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6639](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6639)

___

### groupId

• `Optional` **groupId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6645](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6645)

___

### lastName

• `Optional` **lastName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6651](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6651)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6657](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6657)

___

### metaData

• `Optional` **metaData**: [`JsonNode`](JsonNode.md)

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6663](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6663)

___

### optOut

• `Optional` **optOut**: `boolean`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6669](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6669)

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6675](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6675)

___

### tags

• **tags**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6681](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6681)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6687](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6687)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6693](https://github.com/mailslurp/mailslurp-client/blob/5a5ba59/src/generated/api.ts#L6693)

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

[src/generated/api.ts:6497](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6497)

___

### contactId

• **contactId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6503](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6503)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6509](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6509)

___

### emailAddresses

• **emailAddresses**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6515](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6515)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookNewContactPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6521](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6521)

___

### firstName

• `Optional` **firstName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6527](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6527)

___

### groupId

• `Optional` **groupId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6533](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6533)

___

### lastName

• `Optional` **lastName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6539](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6539)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6545](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6545)

___

### metaData

• `Optional` **metaData**: [`JsonNode`](JsonNode.md)

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6551](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6551)

___

### optOut

• `Optional` **optOut**: `boolean`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6557](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6557)

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6563](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6563)

___

### tags

• **tags**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6569](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6569)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6575](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6575)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6581](https://github.com/mailslurp/mailslurp-client/blob/1460b4d/src/generated/api.ts#L6581)

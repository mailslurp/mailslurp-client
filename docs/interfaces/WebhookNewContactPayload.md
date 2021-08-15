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

[src/generated/api.ts:6422](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6422)

___

### contactId

• **contactId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6428](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6428)

___

### createdAt

• **createdAt**: `Date`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6434](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6434)

___

### emailAddresses

• **emailAddresses**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6440](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6440)

___

### eventName

• `Optional` **eventName**: [`EventNameEnum`](../enums/WebhookNewContactPayload.EventNameEnum.md)

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6446](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6446)

___

### firstName

• `Optional` **firstName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6452](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6452)

___

### groupId

• `Optional` **groupId**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6458](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6458)

___

### lastName

• `Optional` **lastName**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6464](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6464)

___

### messageId

• `Optional` **messageId**: `string`

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6470](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6470)

___

### metaData

• `Optional` **metaData**: [`JsonNode`](JsonNode.md)

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6476](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6476)

___

### optOut

• `Optional` **optOut**: `boolean`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6482](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6482)

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: `string`

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6488](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6488)

___

### tags

• **tags**: `string`[]

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6494](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6494)

___

### webhookId

• `Optional` **webhookId**: `string`

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6500](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6500)

___

### webhookName

• `Optional` **webhookName**: `string`

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

#### Defined in

[src/generated/api.ts:6506](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L6506)

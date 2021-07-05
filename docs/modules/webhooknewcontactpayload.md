**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookNewContactPayload

# Namespace: WebhookNewContactPayload

**`export`** 

**`namespace`** WebhookNewContactPayload

## Index

### Enumerations

* [EventNameEnum](../enums/webhooknewcontactpayload.eventnameenum.md)

### Properties

* [company](webhooknewcontactpayload.md#company)
* [contactId](webhooknewcontactpayload.md#contactid)
* [createdAt](webhooknewcontactpayload.md#createdat)
* [emailAddresses](webhooknewcontactpayload.md#emailaddresses)
* [eventName](webhooknewcontactpayload.md#eventname)
* [firstName](webhooknewcontactpayload.md#firstname)
* [groupId](webhooknewcontactpayload.md#groupid)
* [lastName](webhooknewcontactpayload.md#lastname)
* [messageId](webhooknewcontactpayload.md#messageid)
* [metaData](webhooknewcontactpayload.md#metadata)
* [optOut](webhooknewcontactpayload.md#optout)
* [primaryEmailAddress](webhooknewcontactpayload.md#primaryemailaddress)
* [tags](webhooknewcontactpayload.md#tags)
* [webhookId](webhooknewcontactpayload.md#webhookid)
* [webhookName](webhooknewcontactpayload.md#webhookname)

## Properties

### company

• `Optional` **company**: string

*Defined in [src/generated/api.ts:5632](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5632)*

**`memberof`** WebhookNewContactPayload

___

### contactId

•  **contactId**: string

*Defined in [src/generated/api.ts:5638](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5638)*

**`memberof`** WebhookNewContactPayload

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:5644](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5644)*

**`memberof`** WebhookNewContactPayload

___

### emailAddresses

•  **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:5650](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5650)*

**`memberof`** WebhookNewContactPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewcontactpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:5656](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5656)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:5662](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5662)*

**`memberof`** WebhookNewContactPayload

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:5668](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5668)*

**`memberof`** WebhookNewContactPayload

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:5674](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5674)*

**`memberof`** WebhookNewContactPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:5680](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5680)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

___

### metaData

• `Optional` **metaData**: [JsonNode](../interfaces/jsonnode.md)

*Defined in [src/generated/api.ts:5686](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5686)*

**`memberof`** WebhookNewContactPayload

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:5692](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5692)*

**`memberof`** WebhookNewContactPayload

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: string

*Defined in [src/generated/api.ts:5698](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5698)*

**`memberof`** WebhookNewContactPayload

___

### tags

•  **tags**: Array\<string>

*Defined in [src/generated/api.ts:5704](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5704)*

**`memberof`** WebhookNewContactPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:5710](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5710)*

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:5716](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L5716)*

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

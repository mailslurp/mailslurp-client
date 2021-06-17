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

*Defined in [src/generated/api.ts:5053](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5053)*

**`memberof`** WebhookNewContactPayload

___

### contactId

•  **contactId**: string

*Defined in [src/generated/api.ts:5059](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5059)*

**`memberof`** WebhookNewContactPayload

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:5065](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5065)*

**`memberof`** WebhookNewContactPayload

___

### emailAddresses

•  **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:5071](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5071)*

**`memberof`** WebhookNewContactPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewcontactpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:5077](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5077)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:5083](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5083)*

**`memberof`** WebhookNewContactPayload

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:5089](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5089)*

**`memberof`** WebhookNewContactPayload

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:5095](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5095)*

**`memberof`** WebhookNewContactPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:5101](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5101)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

___

### metaData

• `Optional` **metaData**: [JsonNode](../interfaces/jsonnode.md)

*Defined in [src/generated/api.ts:5107](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5107)*

**`memberof`** WebhookNewContactPayload

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:5113](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5113)*

**`memberof`** WebhookNewContactPayload

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: string

*Defined in [src/generated/api.ts:5119](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5119)*

**`memberof`** WebhookNewContactPayload

___

### tags

•  **tags**: Array\<string>

*Defined in [src/generated/api.ts:5125](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5125)*

**`memberof`** WebhookNewContactPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:5131](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5131)*

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:5137](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L5137)*

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

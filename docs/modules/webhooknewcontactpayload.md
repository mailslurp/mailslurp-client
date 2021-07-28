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

*Defined in [src/generated/api.ts:6305](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6305)*

**`memberof`** WebhookNewContactPayload

___

### contactId

•  **contactId**: string

*Defined in [src/generated/api.ts:6311](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6311)*

**`memberof`** WebhookNewContactPayload

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:6317](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6317)*

**`memberof`** WebhookNewContactPayload

___

### emailAddresses

•  **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:6323](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6323)*

**`memberof`** WebhookNewContactPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewcontactpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6329](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6329)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:6335](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6335)*

**`memberof`** WebhookNewContactPayload

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:6341](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6341)*

**`memberof`** WebhookNewContactPayload

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:6347](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6347)*

**`memberof`** WebhookNewContactPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6353](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6353)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

___

### metaData

• `Optional` **metaData**: [JsonNode](../interfaces/jsonnode.md)

*Defined in [src/generated/api.ts:6359](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6359)*

**`memberof`** WebhookNewContactPayload

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:6365](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6365)*

**`memberof`** WebhookNewContactPayload

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: string

*Defined in [src/generated/api.ts:6371](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6371)*

**`memberof`** WebhookNewContactPayload

___

### tags

•  **tags**: Array\<string>

*Defined in [src/generated/api.ts:6377](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6377)*

**`memberof`** WebhookNewContactPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6383](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6383)*

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6389](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L6389)*

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

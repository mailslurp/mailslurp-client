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

*Defined in [src/generated/api.ts:6183](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6183)*

**`memberof`** WebhookNewContactPayload

___

### contactId

•  **contactId**: string

*Defined in [src/generated/api.ts:6189](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6189)*

**`memberof`** WebhookNewContactPayload

___

### createdAt

•  **createdAt**: Date

*Defined in [src/generated/api.ts:6195](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6195)*

**`memberof`** WebhookNewContactPayload

___

### emailAddresses

•  **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:6201](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6201)*

**`memberof`** WebhookNewContactPayload

___

### eventName

• `Optional` **eventName**: [EventNameEnum](../enums/webhooknewcontactpayload.eventnameenum.md)

*Defined in [src/generated/api.ts:6207](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6207)*

Name of the event type webhook is being triggered for.

**`memberof`** WebhookNewContactPayload

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:6213](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6213)*

**`memberof`** WebhookNewContactPayload

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:6219](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6219)*

**`memberof`** WebhookNewContactPayload

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:6225](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6225)*

**`memberof`** WebhookNewContactPayload

___

### messageId

• `Optional` **messageId**: string

*Defined in [src/generated/api.ts:6231](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6231)*

Idempotent message ID. Store this ID locally or in a database to prevent message duplication.

**`memberof`** WebhookNewContactPayload

___

### metaData

• `Optional` **metaData**: [JsonNode](../interfaces/jsonnode.md)

*Defined in [src/generated/api.ts:6237](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6237)*

**`memberof`** WebhookNewContactPayload

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:6243](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6243)*

**`memberof`** WebhookNewContactPayload

___

### primaryEmailAddress

• `Optional` **primaryEmailAddress**: string

*Defined in [src/generated/api.ts:6249](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6249)*

**`memberof`** WebhookNewContactPayload

___

### tags

•  **tags**: Array\<string>

*Defined in [src/generated/api.ts:6255](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6255)*

**`memberof`** WebhookNewContactPayload

___

### webhookId

• `Optional` **webhookId**: string

*Defined in [src/generated/api.ts:6261](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6261)*

ID of webhook entity being triggered

**`memberof`** WebhookNewContactPayload

___

### webhookName

• `Optional` **webhookName**: string

*Defined in [src/generated/api.ts:6267](https://github.com/mailslurp/mailslurp-client/blob/3871a9e/src/generated/api.ts#L6267)*

Name of the webhook being triggered

**`memberof`** WebhookNewContactPayload

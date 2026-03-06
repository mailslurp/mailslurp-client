[MailSlurp JS](../README.md) / CreateDeliverabilitySimulationJobOptions

# Interface: CreateDeliverabilitySimulationJobOptions

Create a simulation job for a deliverability test

**`Export`**

**`Interface`**

CreateDeliverabilitySimulationJobOptions

## Table of contents

### Properties

- [batchSize](CreateDeliverabilitySimulationJobOptions.md#batchsize)
- [delayMs](CreateDeliverabilitySimulationJobOptions.md#delayms)
- [email](CreateDeliverabilitySimulationJobOptions.md#email)
- [senderInboxId](CreateDeliverabilitySimulationJobOptions.md#senderinboxid)
- [senderPhoneId](CreateDeliverabilitySimulationJobOptions.md#senderphoneid)
- [sendsPerTarget](CreateDeliverabilitySimulationJobOptions.md#sendspertarget)
- [sms](CreateDeliverabilitySimulationJobOptions.md#sms)

## Properties

### batchSize

• `Optional` **batchSize**: `number`

Maximum sends processed per scheduler batch

**`Memberof`**

CreateDeliverabilitySimulationJobOptions

___

### delayMs

• `Optional` **delayMs**: `number`

Delay between individual sends in milliseconds

**`Memberof`**

CreateDeliverabilitySimulationJobOptions

___

### email

• `Optional` **email**: [`DeliverabilitySimulationEmailOptions`](DeliverabilitySimulationEmailOptions.md)

**`Memberof`**

CreateDeliverabilitySimulationJobOptions

___

### senderInboxId

• `Optional` **senderInboxId**: `string`

Sender inbox ID for INBOX scope tests

**`Memberof`**

CreateDeliverabilitySimulationJobOptions

___

### senderPhoneId

• `Optional` **senderPhoneId**: `string`

Sender phone ID for PHONE scope tests

**`Memberof`**

CreateDeliverabilitySimulationJobOptions

___

### sendsPerTarget

• `Optional` **sendsPerTarget**: `number`

Optional fixed sends per target. If omitted this is derived from test expectations.

**`Memberof`**

CreateDeliverabilitySimulationJobOptions

___

### sms

• `Optional` **sms**: [`DeliverabilitySimulationSmsOptions`](DeliverabilitySimulationSmsOptions.md)

**`Memberof`**

CreateDeliverabilitySimulationJobOptions

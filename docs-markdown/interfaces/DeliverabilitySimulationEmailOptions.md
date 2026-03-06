[MailSlurp JS](../README.md) / DeliverabilitySimulationEmailOptions

# Interface: DeliverabilitySimulationEmailOptions

Simulation options for email deliverability tests

**`Export`**

**`Interface`**

DeliverabilitySimulationEmailOptions

## Table of contents

### Properties

- [bodyTemplate](DeliverabilitySimulationEmailOptions.md#bodytemplate)
- [fromOverride](DeliverabilitySimulationEmailOptions.md#fromoverride)
- [subject](DeliverabilitySimulationEmailOptions.md#subject)

## Properties

### bodyTemplate

• `Optional` **bodyTemplate**: `string`

Optional email body template. Supports {{targetLabel}}, {{sendIndex}}, {{attempt}}.

**`Memberof`**

DeliverabilitySimulationEmailOptions

___

### fromOverride

• `Optional` **fromOverride**: `string`

Optional from override for each sent email

**`Memberof`**

DeliverabilitySimulationEmailOptions

___

### subject

• `Optional` **subject**: `string`

Optional email subject fallback used when template subject is omitted

**`Memberof`**

DeliverabilitySimulationEmailOptions

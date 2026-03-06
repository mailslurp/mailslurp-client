[MailSlurp JS](../README.md) / CreateDeliverabilityTestOptions

# Interface: CreateDeliverabilityTestOptions

Create a new deliverability/load test

**`Export`**

**`Interface`**

CreateDeliverabilityTestOptions

## Table of contents

### Properties

- [description](CreateDeliverabilityTestOptions.md#description)
- [expectations](CreateDeliverabilityTestOptions.md#expectations)
- [maxDurationSeconds](CreateDeliverabilityTestOptions.md#maxdurationseconds)
- [name](CreateDeliverabilityTestOptions.md#name)
- [scope](CreateDeliverabilityTestOptions.md#scope)
- [selector](CreateDeliverabilityTestOptions.md#selector)
- [startAt](CreateDeliverabilityTestOptions.md#startat)
- [successThresholdPercent](CreateDeliverabilityTestOptions.md#successthresholdpercent)

## Properties

### description

• `Optional` **description**: `string`

Optional description

**`Memberof`**

CreateDeliverabilityTestOptions

___

### expectations

• **expectations**: [`DeliverabilityExpectation`](DeliverabilityExpectation.md)[]

One or more expectations to evaluate for each entity

**`Memberof`**

CreateDeliverabilityTestOptions

___

### maxDurationSeconds

• `Optional` **maxDurationSeconds**: `number`

Optional timeout in seconds after startAt. If not all entities match before timeout the test transitions to FAILED.

**`Memberof`**

CreateDeliverabilityTestOptions

___

### name

• `Optional` **name**: `string`

Optional name for the test

**`Memberof`**

CreateDeliverabilityTestOptions

___

### scope

• **scope**: [`CreateDeliverabilityTestOptionsScopeEnum`](../enums/CreateDeliverabilityTestOptionsScopeEnum.md)

Entity scope to evaluate

**`Memberof`**

CreateDeliverabilityTestOptions

___

### selector

• **selector**: [`DeliverabilitySelectorOptions`](DeliverabilitySelectorOptions.md)

**`Memberof`**

CreateDeliverabilityTestOptions

___

### startAt

• `Optional` **startAt**: `Date`

UTC instant when the receive window starts. Defaults to now if omitted.

**`Memberof`**

CreateDeliverabilityTestOptions

___

### successThresholdPercent

• `Optional` **successThresholdPercent**: `number`

Optional acceptable success threshold percentage (0,100]. If set, a timed-out test can complete successfully when matchedEntities/totalEntities reaches this percentage.

**`Memberof`**

CreateDeliverabilityTestOptions

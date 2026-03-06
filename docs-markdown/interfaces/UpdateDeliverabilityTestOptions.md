[MailSlurp JS](../README.md) / UpdateDeliverabilityTestOptions

# Interface: UpdateDeliverabilityTestOptions

Update a deliverability/load test

**`Export`**

**`Interface`**

UpdateDeliverabilityTestOptions

## Table of contents

### Properties

- [clearMaxDuration](UpdateDeliverabilityTestOptions.md#clearmaxduration)
- [clearSuccessThreshold](UpdateDeliverabilityTestOptions.md#clearsuccessthreshold)
- [description](UpdateDeliverabilityTestOptions.md#description)
- [expectations](UpdateDeliverabilityTestOptions.md#expectations)
- [maxDurationSeconds](UpdateDeliverabilityTestOptions.md#maxdurationseconds)
- [name](UpdateDeliverabilityTestOptions.md#name)
- [startAt](UpdateDeliverabilityTestOptions.md#startat)
- [successThresholdPercent](UpdateDeliverabilityTestOptions.md#successthresholdpercent)

## Properties

### clearMaxDuration

• `Optional` **clearMaxDuration**: `boolean`

Set true to clear timeout. If true, maxDurationSeconds is ignored for this request.

**`Memberof`**

UpdateDeliverabilityTestOptions

___

### clearSuccessThreshold

• `Optional` **clearSuccessThreshold**: `boolean`

Set true to clear success threshold. If true, successThresholdPercent is ignored for this request.

**`Memberof`**

UpdateDeliverabilityTestOptions

___

### description

• `Optional` **description**: `string`

Optional updated description

**`Memberof`**

UpdateDeliverabilityTestOptions

___

### expectations

• `Optional` **expectations**: [`DeliverabilityExpectation`](DeliverabilityExpectation.md)[]

Optional replacement expectations

**`Memberof`**

UpdateDeliverabilityTestOptions

___

### maxDurationSeconds

• `Optional` **maxDurationSeconds**: `number`

Optional updated timeout in seconds

**`Memberof`**

UpdateDeliverabilityTestOptions

___

### name

• `Optional` **name**: `string`

Optional updated name

**`Memberof`**

UpdateDeliverabilityTestOptions

___

### startAt

• `Optional` **startAt**: `Date`

Optional updated receive-window start time. Only applied while test is not terminal.

**`Memberof`**

UpdateDeliverabilityTestOptions

___

### successThresholdPercent

• `Optional` **successThresholdPercent**: `number`

Optional updated acceptable success threshold percentage (0,100].

**`Memberof`**

UpdateDeliverabilityTestOptions

[MailSlurp JS](../README.md) / DeliverabilityExpectation

# Interface: DeliverabilityExpectation

Single expectation to evaluate against each selected entity

**`Export`**

**`Interface`**

DeliverabilityExpectation

## Table of contents

### Properties

- [from](DeliverabilityExpectation.md#from)
- [minCount](DeliverabilityExpectation.md#mincount)
- [name](DeliverabilityExpectation.md#name)
- [subject](DeliverabilityExpectation.md#subject)
- [to](DeliverabilityExpectation.md#to)

## Properties

### from

• `Optional` **from**: `string`

Optional sender filter. Matching is case-insensitive contains against inbound sender/from values.

**`Memberof`**

DeliverabilityExpectation

___

### minCount

• **minCount**: `number`

Minimum number of matching messages required for this expectation to pass

**`Memberof`**

DeliverabilityExpectation

___

### name

• `Optional` **name**: `string`

Optional label for this expectation

**`Memberof`**

DeliverabilityExpectation

___

### subject

• `Optional` **subject**: `string`

Optional subject filter for INBOX scope tests. Ignored for PHONE scope tests.

**`Memberof`**

DeliverabilityExpectation

___

### to

• `Optional` **to**: `string`

Optional recipient filter. Matching is case-insensitive contains against recipient/to values.

**`Memberof`**

DeliverabilityExpectation

[MailSlurp JS](../README.md) / EmailIntelligenceOptions

# Interface: EmailIntelligenceOptions

Request options for running email intelligence checks on one or more inputs.

**`Export`**

**`Interface`**

EmailIntelligenceOptions

## Table of contents

### Properties

- [ignoreCache](EmailIntelligenceOptions.md#ignorecache)
- [includeEmailValidation](EmailIntelligenceOptions.md#includeemailvalidation)
- [page](EmailIntelligenceOptions.md#page)
- [size](EmailIntelligenceOptions.md#size)
- [targets](EmailIntelligenceOptions.md#targets)
- [tests](EmailIntelligenceOptions.md#tests)

## Properties

### ignoreCache

• `Optional` **ignoreCache**: `boolean`

Ignore cached intelligence values and force recomputation.

**`Memberof`**

EmailIntelligenceOptions

___

### includeEmailValidation

• `Optional` **includeEmailValidation**: `boolean`

Also run mailbox safety verification using the existing verification client for email inputs.

**`Memberof`**

EmailIntelligenceOptions

___

### page

• `Optional` **page**: `number`

Zero-based page index for processing a subset of the target list.

**`Memberof`**

EmailIntelligenceOptions

___

### size

• `Optional` **size**: `number`

Page size for processing a subset of the target list.

**`Memberof`**

EmailIntelligenceOptions

___

### targets

• **targets**: `string`[]

Email addresses or domains to score.

**`Memberof`**

EmailIntelligenceOptions

___

### tests

• `Optional` **tests**: [`EmailIntelligenceTestsOptions`](EmailIntelligenceTestsOptions.md)

**`Memberof`**

EmailIntelligenceOptions

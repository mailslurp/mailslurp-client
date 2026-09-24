[MailSlurp JS](../README.md) / CreateDevicePreviewOptions

# Interface: CreateDevicePreviewOptions

**`Export`**

**`Interface`**

CreateDevicePreviewOptions

## Table of contents

### Properties

- [allTargets](CreateDevicePreviewOptions.md#alltargets)
- [qa](CreateDevicePreviewOptions.md#qa)
- [targets](CreateDevicePreviewOptions.md#targets)

## Properties

### allTargets

• `Optional` **allTargets**: `boolean`

When true, ask the renderer to include every currently configured target. Cannot be combined with targets.

**`Memberof`**

CreateDevicePreviewOptions

___

### qa

• `Optional` **qa**: [`CreateDevicePreviewQaOptions`](CreateDevicePreviewQaOptions.md)

**`Memberof`**

CreateDevicePreviewOptions

___

### targets

• `Optional` **targets**: `string`[]

Optional device preview target keys to request for rendering. Null leaves target selection to service configuration. Values are forwarded to ESP so newly deployed targets can be used before this API's enum list is updated.

**`Memberof`**

CreateDevicePreviewOptions

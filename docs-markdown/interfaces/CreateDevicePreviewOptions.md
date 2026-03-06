[MailSlurp JS](../README.md) / CreateDevicePreviewOptions

# Interface: CreateDevicePreviewOptions

**`Export`**

**`Interface`**

CreateDevicePreviewOptions

## Table of contents

### Properties

- [includeAllConfiguredProviders](CreateDevicePreviewOptions.md#includeallconfiguredproviders)
- [providers](CreateDevicePreviewOptions.md#providers)

## Properties

### includeAllConfiguredProviders

• `Optional` **includeAllConfiguredProviders**: `boolean`

Optional flag to request all configured providers in ESP. Defaults to false when omitted

**`Memberof`**

CreateDevicePreviewOptions

___

### providers

• `Optional` **providers**: [`CreateDevicePreviewOptionsProvidersEnum`](../enums/CreateDevicePreviewOptionsProvidersEnum.md)[]

Optional providers to request for rendering. Defaults to ESP_DEFAULT_PROVIDERS when set, otherwise GMAIL and OUTLOOK.

**`Memberof`**

CreateDevicePreviewOptions

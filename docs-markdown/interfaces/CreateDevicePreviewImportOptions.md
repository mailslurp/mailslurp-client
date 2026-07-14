[MailSlurp JS](../README.md) / CreateDevicePreviewImportOptions

# Interface: CreateDevicePreviewImportOptions

**`Export`**

**`Interface`**

CreateDevicePreviewImportOptions

## Table of contents

### Properties

- [externalId](CreateDevicePreviewImportOptions.md#externalid)
- [options](CreateDevicePreviewImportOptions.md#options)
- [rawEmailBase64](CreateDevicePreviewImportOptions.md#rawemailbase64)
- [sourceAlias](CreateDevicePreviewImportOptions.md#sourcealias)

## Properties

### externalId

• `Optional` **externalId**: `string`

Optional external source ID for correlating this import with another system.

**`Memberof`**

CreateDevicePreviewImportOptions

___

### options

• `Optional` **options**: [`CreateDevicePreviewOptions`](CreateDevicePreviewOptions.md)

**`Memberof`**

CreateDevicePreviewImportOptions

___

### rawEmailBase64

• **rawEmailBase64**: `string`

Base64 encoded RFC822/MIME email contents. This should be the full raw email including headers and body, such as the bytes from an `.eml` file.

**`Memberof`**

CreateDevicePreviewImportOptions

___

### sourceAlias

• `Optional` **sourceAlias**: `string`

Optional source label to attach to the preview run.

**`Memberof`**

CreateDevicePreviewImportOptions

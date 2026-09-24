[MailSlurp JS](../README.md) / CreateDevicePreviewQaOptions

# Interface: CreateDevicePreviewQaOptions

Optional QA checks to run after render creation.

**`Export`**

**`Interface`**

CreateDevicePreviewQaOptions

## Table of contents

### Properties

- [domainMonitor](CreateDevicePreviewQaOptions.md#domainmonitor)
- [emailAudit](CreateDevicePreviewQaOptions.md#emailaudit)
- [senderDomain](CreateDevicePreviewQaOptions.md#senderdomain)

## Properties

### domainMonitor

• `Optional` **domainMonitor**: `boolean`

Create or reuse a manual domain monitor for the sender domain and run it alongside the device preview run.

**`Memberof`**

CreateDevicePreviewQaOptions

___

### emailAudit

• `Optional` **emailAudit**: `boolean`

Run and persist an email content audit alongside the device preview run.

**`Memberof`**

CreateDevicePreviewQaOptions

___

### senderDomain

• `Optional` **senderDomain**: `string`

Sender domain to use for domain monitor QA when the source email does not include a real From domain, such as HTML imports.

**`Memberof`**

CreateDevicePreviewQaOptions

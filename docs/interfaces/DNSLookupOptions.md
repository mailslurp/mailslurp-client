# Interface: DNSLookupOptions

Options for DNS query.

**`export`**

**`interface`** DNSLookupOptions

## Table of contents

### Properties

- [hostname](DNSLookupOptions.md#hostname)
- [omitFinalDNSDot](DNSLookupOptions.md#omitfinaldnsdot)
- [recordTypes](DNSLookupOptions.md#recordtypes)

## Properties

### hostname

• **hostname**: `string`

List of record types you wish to query such as MX, DNS, TXT, NS, A etc.

**`memberof`** DNSLookupOptions

___

### omitFinalDNSDot

• **omitFinalDNSDot**: `boolean`

Optionally control whether to omit the final dot in full DNS name values.

**`memberof`** DNSLookupOptions

___

### recordTypes

• **recordTypes**: [`DNSLookupOptionsRecordTypesEnum`](../enums/DNSLookupOptionsRecordTypesEnum.md)[]

List of record types you wish to query such as MX, DNS, TXT, NS, A etc.

**`memberof`** DNSLookupOptions

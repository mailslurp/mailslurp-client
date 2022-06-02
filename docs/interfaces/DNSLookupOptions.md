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

### <a id="hostname" name="hostname"></a> hostname

• **hostname**: `string`

List of record types you wish to query such as MX, DNS, TXT, NS, A etc.

**`memberof`** DNSLookupOptions

___

### <a id="omitfinaldnsdot" name="omitfinaldnsdot"></a> omitFinalDNSDot

• **omitFinalDNSDot**: `boolean`

Optionally control whether to omit the final dot in full DNS name values.

**`memberof`** DNSLookupOptions

___

### <a id="recordtypes" name="recordtypes"></a> recordTypes

• **recordTypes**: [`DNSLookupOptionsRecordTypesEnum`](../enums/DNSLookupOptionsRecordTypesEnum.md)[]

List of record types you wish to query such as MX, DNS, TXT, NS, A etc.

**`memberof`** DNSLookupOptions

[MailSlurp JS](../README.md) / DNSLookupOptions

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

• `Optional` **hostname**: `string`

List of record types you wish to query such as MX, DNS, TXT, NS, A etc.

**`memberof`** DNSLookupOptions

#### Defined in

[src/generated/api.ts:1227](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L1227)

___

### omitFinalDNSDot

• `Optional` **omitFinalDNSDot**: `boolean`

Optionally control whether to omit the final dot in full DNS name values.

**`memberof`** DNSLookupOptions

#### Defined in

[src/generated/api.ts:1233](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L1233)

___

### recordTypes

• `Optional` **recordTypes**: [`RecordTypesEnum`](../enums/DNSLookupOptions.RecordTypesEnum.md)[]

List of record types you wish to query such as MX, DNS, TXT, NS, A etc.

**`memberof`** DNSLookupOptions

#### Defined in

[src/generated/api.ts:1239](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L1239)

[MailSlurp JS](../README.md) / EmailIntelligenceTestsOptions

# Interface: EmailIntelligenceTestsOptions

Optional test toggles for email intelligence scoring.

**`Export`**

**`Interface`**

EmailIntelligenceTestsOptions

## Table of contents

### Properties

- [checkDns](EmailIntelligenceTestsOptions.md#checkdns)
- [checkDomainAgeHint](EmailIntelligenceTestsOptions.md#checkdomainagehint)
- [checkFreeProvider](EmailIntelligenceTestsOptions.md#checkfreeprovider)
- [checkHttpsWebsite](EmailIntelligenceTestsOptions.md#checkhttpswebsite)
- [checkRandomLocalPart](EmailIntelligenceTestsOptions.md#checkrandomlocalpart)

## Properties

### checkDns

• `Optional` **checkDns**: `boolean`

Check DNS records (A, MX, SOA) for the domain.

**`Memberof`**

EmailIntelligenceTestsOptions

___

### checkDomainAgeHint

• `Optional` **checkDomainAgeHint**: `boolean`

Derive a domain age hint from DNS SOA serial when possible.

**`Memberof`**

EmailIntelligenceTestsOptions

___

### checkFreeProvider

• `Optional` **checkFreeProvider**: `boolean`

Check if domain is a known free email provider.

**`Memberof`**

EmailIntelligenceTestsOptions

___

### checkHttpsWebsite

• `Optional` **checkHttpsWebsite**: `boolean`

Check if the domain has a reachable HTTPS website.

**`Memberof`**

EmailIntelligenceTestsOptions

___

### checkRandomLocalPart

• `Optional` **checkRandomLocalPart**: `boolean`

Check local-part randomness for email inputs.

**`Memberof`**

EmailIntelligenceTestsOptions

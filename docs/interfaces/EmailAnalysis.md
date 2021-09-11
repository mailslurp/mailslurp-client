[MailSlurp JS](../README.md) / EmailAnalysis

# Interface: EmailAnalysis

Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message

**`export`**

**`interface`** EmailAnalysis

## Table of contents

### Properties

- [dkimVerdict](EmailAnalysis.md#dkimverdict)
- [dmarcVerdict](EmailAnalysis.md#dmarcverdict)
- [spamVerdict](EmailAnalysis.md#spamverdict)
- [spfVerdict](EmailAnalysis.md#spfverdict)
- [virusVerdict](EmailAnalysis.md#virusverdict)

## Properties

### dkimVerdict

• `Optional` **dkimVerdict**: `string`

Verdict of DomainKeys Identified Mail analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:1997](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L1997)

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: `string`

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2003](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L2003)

___

### spamVerdict

• `Optional` **spamVerdict**: `string`

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2009](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L2009)

___

### spfVerdict

• `Optional` **spfVerdict**: `string`

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2015](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L2015)

___

### virusVerdict

• `Optional` **virusVerdict**: `string`

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2021](https://github.com/mailslurp/mailslurp-client/blob/8c02983/src/generated/api.ts#L2021)

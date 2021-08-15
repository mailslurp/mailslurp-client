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

[src/generated/api.ts:2041](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L2041)

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: `string`

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2047](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L2047)

___

### spamVerdict

• `Optional` **spamVerdict**: `string`

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2053](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L2053)

___

### spfVerdict

• `Optional` **spfVerdict**: `string`

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2059](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L2059)

___

### virusVerdict

• `Optional` **virusVerdict**: `string`

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

#### Defined in

[src/generated/api.ts:2065](https://github.com/mailslurp/mailslurp-client/blob/75eefbf/src/generated/api.ts#L2065)

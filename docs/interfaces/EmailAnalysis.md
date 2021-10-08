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

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: `string`

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

___

### spamVerdict

• `Optional` **spamVerdict**: `string`

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

___

### spfVerdict

• `Optional` **spfVerdict**: `string`

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

___

### virusVerdict

• `Optional` **virusVerdict**: `string`

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

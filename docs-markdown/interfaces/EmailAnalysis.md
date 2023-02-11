[MailSlurp JS](../README.md) / EmailAnalysis

# Interface: EmailAnalysis

Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message

**`Export`**

**`Interface`**

EmailAnalysis

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

**`Memberof`**

EmailAnalysis

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: `string`

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`Memberof`**

EmailAnalysis

___

### spamVerdict

• `Optional` **spamVerdict**: `string`

Verdict of spam ranking analysis

**`Memberof`**

EmailAnalysis

___

### spfVerdict

• `Optional` **spfVerdict**: `string`

Verdict of Send Policy Framework record spoofing analysis

**`Memberof`**

EmailAnalysis

___

### virusVerdict

• `Optional` **virusVerdict**: `string`

Verdict of virus scan analysis

**`Memberof`**

EmailAnalysis

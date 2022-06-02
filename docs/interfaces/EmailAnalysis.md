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

### <a id="dkimverdict" name="dkimverdict"></a> dkimVerdict

• `Optional` **dkimVerdict**: `string`

Verdict of DomainKeys Identified Mail analysis

**`memberof`** EmailAnalysis

___

### <a id="dmarcverdict" name="dmarcverdict"></a> dmarcVerdict

• `Optional` **dmarcVerdict**: `string`

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

___

### <a id="spamverdict" name="spamverdict"></a> spamVerdict

• `Optional` **spamVerdict**: `string`

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

___

### <a id="spfverdict" name="spfverdict"></a> spfVerdict

• `Optional` **spfVerdict**: `string`

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

___

### <a id="virusverdict" name="virusverdict"></a> virusVerdict

• `Optional` **virusVerdict**: `string`

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

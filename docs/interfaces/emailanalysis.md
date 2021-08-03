**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / EmailAnalysis

# Interface: EmailAnalysis

Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message

**`export`** 

**`interface`** EmailAnalysis

## Hierarchy

* **EmailAnalysis**

## Index

### Properties

* [dkimVerdict](emailanalysis.md#dkimverdict)
* [dmarcVerdict](emailanalysis.md#dmarcverdict)
* [spamVerdict](emailanalysis.md#spamverdict)
* [spfVerdict](emailanalysis.md#spfverdict)
* [virusVerdict](emailanalysis.md#virusverdict)

## Properties

### dkimVerdict

• `Optional` **dkimVerdict**: string

*Defined in [src/generated/api.ts:2039](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2039)*

Verdict of DomainKeys Identified Mail analysis

**`memberof`** EmailAnalysis

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: string

*Defined in [src/generated/api.ts:2045](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2045)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

___

### spamVerdict

• `Optional` **spamVerdict**: string

*Defined in [src/generated/api.ts:2051](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2051)*

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

___

### spfVerdict

• `Optional` **spfVerdict**: string

*Defined in [src/generated/api.ts:2057](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2057)*

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

___

### virusVerdict

• `Optional` **virusVerdict**: string

*Defined in [src/generated/api.ts:2063](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L2063)*

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

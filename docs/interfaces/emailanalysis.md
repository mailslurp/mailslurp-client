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

*Defined in [src/generated/api.ts:1431](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1431)*

Verdict of DomainKeys Identified Mail analysis

**`memberof`** EmailAnalysis

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: string

*Defined in [src/generated/api.ts:1437](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1437)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

___

### spamVerdict

• `Optional` **spamVerdict**: string

*Defined in [src/generated/api.ts:1443](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1443)*

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

___

### spfVerdict

• `Optional` **spfVerdict**: string

*Defined in [src/generated/api.ts:1449](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1449)*

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

___

### virusVerdict

• `Optional` **virusVerdict**: string

*Defined in [src/generated/api.ts:1455](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L1455)*

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

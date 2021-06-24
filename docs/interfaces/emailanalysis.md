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

*Defined in [src/generated/api.ts:1721](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1721)*

Verdict of DomainKeys Identified Mail analysis

**`memberof`** EmailAnalysis

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: string

*Defined in [src/generated/api.ts:1727](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1727)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

___

### spamVerdict

• `Optional` **spamVerdict**: string

*Defined in [src/generated/api.ts:1733](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1733)*

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

___

### spfVerdict

• `Optional` **spfVerdict**: string

*Defined in [src/generated/api.ts:1739](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1739)*

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

___

### virusVerdict

• `Optional` **virusVerdict**: string

*Defined in [src/generated/api.ts:1745](https://github.com/mailslurp/mailslurp-client/blob/05090ce/src/generated/api.ts#L1745)*

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

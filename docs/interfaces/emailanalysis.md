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

*Defined in [src/generated/api.ts:1983](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L1983)*

Verdict of DomainKeys Identified Mail analysis

**`memberof`** EmailAnalysis

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: string

*Defined in [src/generated/api.ts:1989](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L1989)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

___

### spamVerdict

• `Optional` **spamVerdict**: string

*Defined in [src/generated/api.ts:1995](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L1995)*

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

___

### spfVerdict

• `Optional` **spfVerdict**: string

*Defined in [src/generated/api.ts:2001](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2001)*

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

___

### virusVerdict

• `Optional` **virusVerdict**: string

*Defined in [src/generated/api.ts:2007](https://github.com/mailslurp/mailslurp-client/blob/37bf78e/src/generated/api.ts#L2007)*

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

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

*Defined in [src/generated/api.ts:795](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L795)*

Verdict of DomainKeys Identified Mail analysis

**`memberof`** EmailAnalysis

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: string

*Defined in [src/generated/api.ts:801](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L801)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`memberof`** EmailAnalysis

___

### spamVerdict

• `Optional` **spamVerdict**: string

*Defined in [src/generated/api.ts:807](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L807)*

Verdict of spam ranking analysis

**`memberof`** EmailAnalysis

___

### spfVerdict

• `Optional` **spfVerdict**: string

*Defined in [src/generated/api.ts:813](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L813)*

Verdict of Send Policy Framework record spoofing analysis

**`memberof`** EmailAnalysis

___

### virusVerdict

• `Optional` **virusVerdict**: string

*Defined in [src/generated/api.ts:819](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L819)*

Verdict of virus scan analysis

**`memberof`** EmailAnalysis

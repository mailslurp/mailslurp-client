# Interface: EmailAnalysis

Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message

**`export`** 

**`interface`** EmailAnalysis

## Hierarchy

* **EmailAnalysis**

## Properties

### `Optional` dkimVerdict

• **dkimVerdict**? : *string*

*Defined in [src/generated/api.ts:705](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L705)*

Verdict of DomainKeys Identified Mail analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` dmarcVerdict

• **dmarcVerdict**? : *string*

*Defined in [src/generated/api.ts:711](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L711)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` spamVerdict

• **spamVerdict**? : *string*

*Defined in [src/generated/api.ts:717](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L717)*

Verdict of spam ranking analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` spfVerdict

• **spfVerdict**? : *string*

*Defined in [src/generated/api.ts:723](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L723)*

Verdict of Send Policy Framework record spoofing analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` virusVerdict

• **virusVerdict**? : *string*

*Defined in [src/generated/api.ts:729](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L729)*

Verdict of virus scan analysis

**`type`** {string}

**`memberof`** EmailAnalysis

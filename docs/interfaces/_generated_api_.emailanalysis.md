# Interface: EmailAnalysis

Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message

**`export`** 

**`interface`** EmailAnalysis

## Hierarchy

* **EmailAnalysis**

## Properties

### `Optional` dkimVerdict

• **dkimVerdict**? : *string*

*Defined in [src/generated/api.ts:691](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L691)*

Verdict of DomainKeys Identified Mail analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` dmarcVerdict

• **dmarcVerdict**? : *string*

*Defined in [src/generated/api.ts:697](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L697)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` spamVerdict

• **spamVerdict**? : *string*

*Defined in [src/generated/api.ts:703](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L703)*

Verdict of spam ranking analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` spfVerdict

• **spfVerdict**? : *string*

*Defined in [src/generated/api.ts:709](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L709)*

Verdict of Send Policy Framework record spoofing analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` virusVerdict

• **virusVerdict**? : *string*

*Defined in [src/generated/api.ts:715](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5d485ad/src/generated/api.ts#L715)*

Verdict of virus scan analysis

**`type`** {string}

**`memberof`** EmailAnalysis

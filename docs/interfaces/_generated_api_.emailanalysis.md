# Interface: EmailAnalysis

Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message

**`export`** 

**`interface`** EmailAnalysis

## Hierarchy

* **EmailAnalysis**

## Properties

### `Optional` dkimVerdict

• **dkimVerdict**? : *string*

*Defined in [src/generated/api.ts:688](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L688)*

Verdict of DomainKeys Identified Mail analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` dmarcVerdict

• **dmarcVerdict**? : *string*

*Defined in [src/generated/api.ts:694](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L694)*

Verdict of Domain-based Message Authentication Reporting and Conformance analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` spamVerdict

• **spamVerdict**? : *string*

*Defined in [src/generated/api.ts:700](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L700)*

Verdict of spam ranking analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` spfVerdict

• **spfVerdict**? : *string*

*Defined in [src/generated/api.ts:706](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L706)*

Verdict of Send Policy Framework record spoofing analysis

**`type`** {string}

**`memberof`** EmailAnalysis

___

### `Optional` virusVerdict

• **virusVerdict**? : *string*

*Defined in [src/generated/api.ts:712](https://github.com/mailslurp/mailslurp-client-ts-js/blob/45dbdd8/src/generated/api.ts#L712)*

Verdict of virus scan analysis

**`type`** {string}

**`memberof`** EmailAnalysis

[MailSlurp JS](../README.md) / EmailAuditAnalysisResult

# Interface: EmailAuditAnalysisResult

Combined email audit analysis across validation, client support, links, and images

**`Export`**

**`Interface`**

EmailAuditAnalysisResult

## Table of contents

### Properties

- [attachmentMentionIssueCount](EmailAuditAnalysisResult.md#attachmentmentionissuecount)
- [brokenImages](EmailAuditAnalysisResult.md#brokenimages)
- [brokenLinks](EmailAuditAnalysisResult.md#brokenlinks)
- [checkedImages](EmailAuditAnalysisResult.md#checkedimages)
- [checkedLinks](EmailAuditAnalysisResult.md#checkedlinks)
- [compatibilityNotSupportedCount](EmailAuditAnalysisResult.md#compatibilitynotsupportedcount)
- [compatibilityUnknownCount](EmailAuditAnalysisResult.md#compatibilityunknowncount)
- [compatibilityWarningCount](EmailAuditAnalysisResult.md#compatibilitywarningcount)
- [contentReview](EmailAuditAnalysisResult.md#contentreview)
- [detectedImages](EmailAuditAnalysisResult.md#detectedimages)
- [detectedLinks](EmailAuditAnalysisResult.md#detectedlinks)
- [dkimVerdict](EmailAuditAnalysisResult.md#dkimverdict)
- [dmarcVerdict](EmailAuditAnalysisResult.md#dmarcverdict)
- [errorMessage](EmailAuditAnalysisResult.md#errormessage)
- [externalCheckSkippedCount](EmailAuditAnalysisResult.md#externalcheckskippedcount)
- [failingChecks](EmailAuditAnalysisResult.md#failingchecks)
- [featureSupport](EmailAuditAnalysisResult.md#featuresupport)
- [healthScore](EmailAuditAnalysisResult.md#healthscore)
- [htmlErrorCount](EmailAuditAnalysisResult.md#htmlerrorcount)
- [htmlInfoCount](EmailAuditAnalysisResult.md#htmlinfocount)
- [htmlValidation](EmailAuditAnalysisResult.md#htmlvalidation)
- [htmlWarningCount](EmailAuditAnalysisResult.md#htmlwarningcount)
- [imageIssueCount](EmailAuditAnalysisResult.md#imageissuecount)
- [insights](EmailAuditAnalysisResult.md#insights)
- [linkIssueCount](EmailAuditAnalysisResult.md#linkissuecount)
- [passingChecks](EmailAuditAnalysisResult.md#passingchecks)
- [reputationFailureCount](EmailAuditAnalysisResult.md#reputationfailurecount)
- [spamVerdict](EmailAuditAnalysisResult.md#spamverdict)
- [spellingIssueCount](EmailAuditAnalysisResult.md#spellingissuecount)
- [spellingIssues](EmailAuditAnalysisResult.md#spellingissues)
- [spfVerdict](EmailAuditAnalysisResult.md#spfverdict)
- [status](EmailAuditAnalysisResult.md#status)
- [totalChecks](EmailAuditAnalysisResult.md#totalchecks)
- [virusVerdict](EmailAuditAnalysisResult.md#virusverdict)

## Properties

### attachmentMentionIssueCount

• **attachmentMentionIssueCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### brokenImages

• **brokenImages**: [`EmailAuditUrlIssue`](EmailAuditUrlIssue.md)[]

**`Memberof`**

EmailAuditAnalysisResult

___

### brokenLinks

• **brokenLinks**: [`EmailAuditUrlIssue`](EmailAuditUrlIssue.md)[]

**`Memberof`**

EmailAuditAnalysisResult

___

### checkedImages

• **checkedImages**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### checkedLinks

• **checkedLinks**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### compatibilityNotSupportedCount

• **compatibilityNotSupportedCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### compatibilityUnknownCount

• **compatibilityUnknownCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### compatibilityWarningCount

• **compatibilityWarningCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### contentReview

• `Optional` **contentReview**: [`EmailAuditCheck`](EmailAuditCheck.md)[]

Versioned static accessibility, unresolved template, and compliance review checks. Null on historical audits that did not run these checks.

**`Memberof`**

EmailAuditAnalysisResult

___

### detectedImages

• **detectedImages**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### detectedLinks

• **detectedLinks**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### dkimVerdict

• `Optional` **dkimVerdict**: `string`

DKIM verdict supplied by the source mail receiver

**`Memberof`**

EmailAuditAnalysisResult

___

### dmarcVerdict

• `Optional` **dmarcVerdict**: `string`

DMARC verdict supplied by the source mail receiver

**`Memberof`**

EmailAuditAnalysisResult

___

### errorMessage

• `Optional` **errorMessage**: `string`

**`Memberof`**

EmailAuditAnalysisResult

___

### externalCheckSkippedCount

• **externalCheckSkippedCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### failingChecks

• **failingChecks**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### featureSupport

• `Optional` **featureSupport**: [`EmailFeatureSupportResult`](EmailFeatureSupportResult.md)

**`Memberof`**

EmailAuditAnalysisResult

___

### healthScore

• **healthScore**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### htmlErrorCount

• **htmlErrorCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### htmlInfoCount

• **htmlInfoCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### htmlValidation

• `Optional` **htmlValidation**: [`HTMLValidationResult`](HTMLValidationResult.md)

**`Memberof`**

EmailAuditAnalysisResult

___

### htmlWarningCount

• **htmlWarningCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### imageIssueCount

• **imageIssueCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### insights

• **insights**: `string`[]

**`Memberof`**

EmailAuditAnalysisResult

___

### linkIssueCount

• **linkIssueCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### passingChecks

• **passingChecks**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### reputationFailureCount

• **reputationFailureCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### spamVerdict

• `Optional` **spamVerdict**: `string`

Spam verdict supplied by the source mail receiver

**`Memberof`**

EmailAuditAnalysisResult

___

### spellingIssueCount

• **spellingIssueCount**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### spellingIssues

• **spellingIssues**: [`EmailAuditSpellingIssue`](EmailAuditSpellingIssue.md)[]

**`Memberof`**

EmailAuditAnalysisResult

___

### spfVerdict

• `Optional` **spfVerdict**: `string`

SPF verdict supplied by the source mail receiver

**`Memberof`**

EmailAuditAnalysisResult

___

### status

• **status**: [`EmailAuditAnalysisResultStatusEnum`](../enums/EmailAuditAnalysisResultStatusEnum.md)

Health status for a one-shot email audit

**`Memberof`**

EmailAuditAnalysisResult

___

### totalChecks

• **totalChecks**: `number`

**`Memberof`**

EmailAuditAnalysisResult

___

### virusVerdict

• `Optional` **virusVerdict**: `string`

Virus verdict supplied by the source mail receiver

**`Memberof`**

EmailAuditAnalysisResult

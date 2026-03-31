[MailSlurp JS](../README.md) / CheckEmailAuthStackResults

# Interface: CheckEmailAuthStackResults

Combined authentication and deliverability DNS results for a domain

**`Export`**

**`Interface`**

CheckEmailAuthStackResults

## Table of contents

### Properties

- [bimi](CheckEmailAuthStackResults.md#bimi)
- [dkim](CheckEmailAuthStackResults.md#dkim)
- [dmarc](CheckEmailAuthStackResults.md#dmarc)
- [domain](CheckEmailAuthStackResults.md#domain)
- [errors](CheckEmailAuthStackResults.md#errors)
- [failingChecks](CheckEmailAuthStackResults.md#failingchecks)
- [healthScore](CheckEmailAuthStackResults.md#healthscore)
- [insights](CheckEmailAuthStackResults.md#insights)
- [mtaSts](CheckEmailAuthStackResults.md#mtasts)
- [mx](CheckEmailAuthStackResults.md#mx)
- [passingChecks](CheckEmailAuthStackResults.md#passingchecks)
- [spf](CheckEmailAuthStackResults.md#spf)
- [status](CheckEmailAuthStackResults.md#status)
- [tlsReporting](CheckEmailAuthStackResults.md#tlsreporting)
- [totalChecks](CheckEmailAuthStackResults.md#totalchecks)
- [warnings](CheckEmailAuthStackResults.md#warnings)

## Properties

### bimi

• **bimi**: [`LookupBimiDomainResults`](LookupBimiDomainResults.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### dkim

• **dkim**: [`LookupDkimDomainResults`](LookupDkimDomainResults.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### dmarc

• **dmarc**: [`LookupDmarcDomainResults`](LookupDmarcDomainResults.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### domain

• **domain**: `string`

**`Memberof`**

CheckEmailAuthStackResults

___

### errors

• **errors**: `string`[]

**`Memberof`**

CheckEmailAuthStackResults

___

### failingChecks

• **failingChecks**: `number`

**`Memberof`**

CheckEmailAuthStackResults

___

### healthScore

• **healthScore**: `number`

**`Memberof`**

CheckEmailAuthStackResults

___

### insights

• **insights**: `string`[]

**`Memberof`**

CheckEmailAuthStackResults

___

### mtaSts

• **mtaSts**: [`LookupMtaStsDomainResults`](LookupMtaStsDomainResults.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### mx

• **mx**: [`LookupMxRecordsResults`](LookupMxRecordsResults.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### passingChecks

• **passingChecks**: `number`

**`Memberof`**

CheckEmailAuthStackResults

___

### spf

• **spf**: [`LookupSpfDomainResults`](LookupSpfDomainResults.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### status

• **status**: [`CheckEmailAuthStackResultsStatusEnum`](../enums/CheckEmailAuthStackResultsStatusEnum.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### tlsReporting

• **tlsReporting**: [`LookupTlsReportingDomainResults`](LookupTlsReportingDomainResults.md)

**`Memberof`**

CheckEmailAuthStackResults

___

### totalChecks

• **totalChecks**: `number`

**`Memberof`**

CheckEmailAuthStackResults

___

### warnings

• **warnings**: `string`[]

**`Memberof`**

CheckEmailAuthStackResults

[MailSlurp JS](../README.md) / CheckDnsPropagationResults

# Interface: CheckDnsPropagationResults

DNS propagation status across configured resolvers

**`Export`**

**`Interface`**

CheckDnsPropagationResults

## Table of contents

### Properties

- [errors](CheckDnsPropagationResults.md#errors)
- [expectedValue](CheckDnsPropagationResults.md#expectedvalue)
- [host](CheckDnsPropagationResults.md#host)
- [matchingResolverCount](CheckDnsPropagationResults.md#matchingresolvercount)
- [propagatedToAllResolvers](CheckDnsPropagationResults.md#propagatedtoallresolvers)
- [recordType](CheckDnsPropagationResults.md#recordtype)
- [resolverResults](CheckDnsPropagationResults.md#resolverresults)
- [respondingResolverCount](CheckDnsPropagationResults.md#respondingresolvercount)
- [warnings](CheckDnsPropagationResults.md#warnings)

## Properties

### errors

• **errors**: `string`[]

**`Memberof`**

CheckDnsPropagationResults

___

### expectedValue

• `Optional` **expectedValue**: `string`

**`Memberof`**

CheckDnsPropagationResults

___

### host

• **host**: `string`

**`Memberof`**

CheckDnsPropagationResults

___

### matchingResolverCount

• **matchingResolverCount**: `number`

**`Memberof`**

CheckDnsPropagationResults

___

### propagatedToAllResolvers

• **propagatedToAllResolvers**: `boolean`

**`Memberof`**

CheckDnsPropagationResults

___

### recordType

• **recordType**: [`CheckDnsPropagationResultsRecordTypeEnum`](../enums/CheckDnsPropagationResultsRecordTypeEnum.md)

Domain Name Server Record Types

**`Memberof`**

CheckDnsPropagationResults

___

### resolverResults

• **resolverResults**: [`DnsPropagationResolverResult`](DnsPropagationResolverResult.md)[]

**`Memberof`**

CheckDnsPropagationResults

___

### respondingResolverCount

• **respondingResolverCount**: `number`

**`Memberof`**

CheckDnsPropagationResults

___

### warnings

• **warnings**: `string`[]

**`Memberof`**

CheckDnsPropagationResults

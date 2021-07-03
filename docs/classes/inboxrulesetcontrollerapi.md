**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / InboxRulesetControllerApi

# Class: InboxRulesetControllerApi

InboxRulesetControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **InboxRulesetControllerApi**

## Index

### Constructors

* [constructor](inboxrulesetcontrollerapi.md#constructor)

### Properties

* [basePath](inboxrulesetcontrollerapi.md#basepath)
* [configuration](inboxrulesetcontrollerapi.md#configuration)
* [fetch](inboxrulesetcontrollerapi.md#fetch)

### Methods

* [createNewInboxRuleset](inboxrulesetcontrollerapi.md#createnewinboxruleset)
* [deleteInboxRuleset](inboxrulesetcontrollerapi.md#deleteinboxruleset)
* [deleteInboxRulesets](inboxrulesetcontrollerapi.md#deleteinboxrulesets)
* [getInboxRuleset](inboxrulesetcontrollerapi.md#getinboxruleset)
* [getInboxRulesets](inboxrulesetcontrollerapi.md#getinboxrulesets)
* [testInboxRuleset](inboxrulesetcontrollerapi.md#testinboxruleset)
* [testInboxRulesetsForInbox](inboxrulesetcontrollerapi.md#testinboxrulesetsforinbox)
* [testNewInboxRuleset](inboxrulesetcontrollerapi.md#testnewinboxruleset)

## Constructors

### constructor

\+ **new InboxRulesetControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [InboxRulesetControllerApi](inboxrulesetcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [InboxRulesetControllerApi](inboxrulesetcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L62)*

## Methods

### createNewInboxRuleset

▸ **createNewInboxRuleset**(`createInboxRulesetOptions`: [CreateInboxRulesetOptions](../modules/createinboxrulesetoptions.md), `inboxId?`: string, `options?`: any): Promise\<[InboxRulesetDto](../modules/inboxrulesetdto.md)>

*Defined in [src/generated/api.ts:21055](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21055)*

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving

**`summary`** Create an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createInboxRulesetOptions` | [CreateInboxRulesetOptions](../modules/createinboxrulesetoptions.md) | createInboxRulesetOptions |
`inboxId?` | string | - |
`options?` | any | - |

**Returns:** Promise\<[InboxRulesetDto](../modules/inboxrulesetdto.md)>

___

### deleteInboxRuleset

▸ **deleteInboxRuleset**(`id`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:21076](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21076)*

Delete inbox ruleset

**`summary`** Delete an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of inbox ruleset |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### deleteInboxRulesets

▸ **deleteInboxRulesets**(`inboxId?`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:21090](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21090)*

Delete inbox rulesets. Accepts optional inboxId filter.

**`summary`** Delete inbox rulesets

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`options?` | any |

**Returns:** Promise\<Response>

___

### getInboxRuleset

▸ **getInboxRuleset**(`id`: string, `options?`: any): Promise\<[InboxRulesetDto](../modules/inboxrulesetdto.md)>

*Defined in [src/generated/api.ts:21104](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21104)*

Get inbox ruleset

**`summary`** Get an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of inbox ruleset |
`options?` | any | - |

**Returns:** Promise\<[InboxRulesetDto](../modules/inboxrulesetdto.md)>

___

### getInboxRulesets

▸ **getInboxRulesets**(`inboxId?`: string, `page?`: number, `searchFilter?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageInboxRulesetDto](../interfaces/pageinboxrulesetdto.md)>

*Defined in [src/generated/api.ts:21123](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21123)*

List all rulesets attached to an inbox

**`summary`** List inbox rulesets

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`page?` | number |
`searchFilter?` | string |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageInboxRulesetDto](../interfaces/pageinboxrulesetdto.md)>

___

### testInboxRuleset

▸ **testInboxRuleset**(`id`: string, `inboxRulesetTestOptions`: [InboxRulesetTestOptions](../interfaces/inboxrulesettestoptions.md), `options?`: any): Promise\<[InboxRulesetTestResult](../interfaces/inboxrulesettestresult.md)>

*Defined in [src/generated/api.ts:21150](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21150)*

Test an inbox ruleset

**`summary`** Test an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of inbox ruleset |
`inboxRulesetTestOptions` | [InboxRulesetTestOptions](../interfaces/inboxrulesettestoptions.md) | inboxRulesetTestOptions |
`options?` | any | - |

**Returns:** Promise\<[InboxRulesetTestResult](../interfaces/inboxrulesettestresult.md)>

___

### testInboxRulesetsForInbox

▸ **testInboxRulesetsForInbox**(`inboxId`: string, `inboxRulesetTestOptions`: [InboxRulesetTestOptions](../interfaces/inboxrulesettestoptions.md), `options?`: any): Promise\<[InboxRulesetTestResult](../interfaces/inboxrulesettestresult.md)>

*Defined in [src/generated/api.ts:21171](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21171)*

Test inbox rulesets for inbox

**`summary`** Test inbox rulesets for inbox

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of inbox |
`inboxRulesetTestOptions` | [InboxRulesetTestOptions](../interfaces/inboxrulesettestoptions.md) | inboxRulesetTestOptions |
`options?` | any | - |

**Returns:** Promise\<[InboxRulesetTestResult](../interfaces/inboxrulesettestresult.md)>

___

### testNewInboxRuleset

▸ **testNewInboxRuleset**(`testNewInboxRulesetOptions`: [TestNewInboxRulesetOptions](../interfaces/testnewinboxrulesetoptions.md), `options?`: any): Promise\<[InboxRulesetTestResult](../interfaces/inboxrulesettestresult.md)>

*Defined in [src/generated/api.ts:21192](https://github.com/mailslurp/mailslurp-client/blob/d7397d3/src/generated/api.ts#L21192)*

Test new inbox ruleset

**`summary`** Test new inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxRulesetControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`testNewInboxRulesetOptions` | [TestNewInboxRulesetOptions](../interfaces/testnewinboxrulesetoptions.md) | testNewInboxRulesetOptions |
`options?` | any | - |

**Returns:** Promise\<[InboxRulesetTestResult](../interfaces/inboxrulesettestresult.md)>

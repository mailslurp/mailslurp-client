[MailSlurp JS](../README.md) / RulesetControllerApi

# Class: RulesetControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`RulesetControllerApi`**

## Table of contents

### Constructors

- [constructor](RulesetControllerApi.md#constructor)

### Properties

- [configuration](RulesetControllerApi.md#configuration)

### Methods

- [createNewRuleset](RulesetControllerApi.md#createnewruleset)
- [createNewRulesetRaw](RulesetControllerApi.md#createnewrulesetraw)
- [deleteRuleset](RulesetControllerApi.md#deleteruleset)
- [deleteRulesetRaw](RulesetControllerApi.md#deleterulesetraw)
- [deleteRulesets](RulesetControllerApi.md#deleterulesets)
- [deleteRulesetsRaw](RulesetControllerApi.md#deleterulesetsraw)
- [getRuleset](RulesetControllerApi.md#getruleset)
- [getRulesetRaw](RulesetControllerApi.md#getrulesetraw)
- [getRulesets](RulesetControllerApi.md#getrulesets)
- [getRulesetsRaw](RulesetControllerApi.md#getrulesetsraw)
- [request](RulesetControllerApi.md#request)
- [testInboxRulesetsForInbox](RulesetControllerApi.md#testinboxrulesetsforinbox)
- [testInboxRulesetsForInboxRaw](RulesetControllerApi.md#testinboxrulesetsforinboxraw)
- [testNewRuleset](RulesetControllerApi.md#testnewruleset)
- [testNewRulesetRaw](RulesetControllerApi.md#testnewrulesetraw)
- [testRuleset](RulesetControllerApi.md#testruleset)
- [testRulesetRaw](RulesetControllerApi.md#testrulesetraw)
- [testRulesetReceiving](RulesetControllerApi.md#testrulesetreceiving)
- [testRulesetReceivingRaw](RulesetControllerApi.md#testrulesetreceivingraw)
- [testRulesetSending](RulesetControllerApi.md#testrulesetsending)
- [testRulesetSendingRaw](RulesetControllerApi.md#testrulesetsendingraw)
- [withMiddleware](RulesetControllerApi.md#withmiddleware)
- [withPostMiddleware](RulesetControllerApi.md#withpostmiddleware)
- [withPreMiddleware](RulesetControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new RulesetControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### createNewRuleset

▸ **createNewRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`RulesetDto`](../interfaces/RulesetDto.md)\>

Create a new inbox or phone number rule for forwarding, blocking, and allowing emails or SMS when sending and receiving
Create a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewRulesetRequest`](../interfaces/CreateNewRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`RulesetDto`](../interfaces/RulesetDto.md)\>

___

### createNewRulesetRaw

▸ **createNewRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RulesetDto`](../interfaces/RulesetDto.md)\>\>

Create a new inbox or phone number rule for forwarding, blocking, and allowing emails or SMS when sending and receiving
Create a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewRulesetRequest`](../interfaces/CreateNewRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RulesetDto`](../interfaces/RulesetDto.md)\>\>

___

### deleteRuleset

▸ **deleteRuleset**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete ruleset
Delete a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRulesetRequest`](../interfaces/DeleteRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteRulesetRaw

▸ **deleteRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete ruleset
Delete a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRulesetRequest`](../interfaces/DeleteRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteRulesets

▸ **deleteRulesets**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete rulesets. Accepts optional inboxId or phoneId filters.
Delete rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRulesetsRequest`](../interfaces/DeleteRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteRulesetsRaw

▸ **deleteRulesetsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete rulesets. Accepts optional inboxId or phoneId filters.
Delete rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteRulesetsRequest`](../interfaces/DeleteRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getRuleset

▸ **getRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`RulesetDto`](../interfaces/RulesetDto.md)\>

Get ruleset
Get a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRulesetRequest`](../interfaces/GetRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`RulesetDto`](../interfaces/RulesetDto.md)\>

___

### getRulesetRaw

▸ **getRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RulesetDto`](../interfaces/RulesetDto.md)\>\>

Get ruleset
Get a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRulesetRequest`](../interfaces/GetRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RulesetDto`](../interfaces/RulesetDto.md)\>\>

___

### getRulesets

▸ **getRulesets**(`requestParameters`, `initOverrides?`): `Promise`<[`PageRulesetDto`](../interfaces/PageRulesetDto.md)\>

List all rulesets attached to an inbox or phone or account
List rulesets block and allow lists

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRulesetsRequest`](../interfaces/GetRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageRulesetDto`](../interfaces/PageRulesetDto.md)\>

___

### getRulesetsRaw

▸ **getRulesetsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageRulesetDto`](../interfaces/PageRulesetDto.md)\>\>

List all rulesets attached to an inbox or phone or account
List rulesets block and allow lists

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRulesetsRequest`](../interfaces/GetRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageRulesetDto`](../interfaces/PageRulesetDto.md)\>\>

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### testInboxRulesetsForInbox

▸ **testInboxRulesetsForInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test inbox rulesets for inbox
Test inbox rulesets for inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxRulesetsForInboxRequest`](../interfaces/TestInboxRulesetsForInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

___

### testInboxRulesetsForInboxRaw

▸ **testInboxRulesetsForInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

Test inbox rulesets for inbox
Test inbox rulesets for inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxRulesetsForInboxRequest`](../interfaces/TestInboxRulesetsForInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

___

### testNewRuleset

▸ **testNewRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test new ruleset
Test new ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestNewRulesetRequest`](../interfaces/TestNewRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

___

### testNewRulesetRaw

▸ **testNewRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

Test new ruleset
Test new ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestNewRulesetRequest`](../interfaces/TestNewRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

___

### testRuleset

▸ **testRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test an inbox or phone ruleset
Test a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestRulesetRequest`](../interfaces/TestRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

___

### testRulesetRaw

▸ **testRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

Test an inbox or phone ruleset
Test a ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestRulesetRequest`](../interfaces/TestRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

___

### testRulesetReceiving

▸ **testRulesetReceiving**(`requestParameters`, `initOverrides?`): `Promise`<[`TestRulesetReceivingResult`](../interfaces/TestRulesetReceivingResult.md)\>

Test whether inbound emails from an email address would be blocked or allowed by inbox rulesets or test if phone number can receive SMS
Test receiving with rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestRulesetReceivingRequest`](../interfaces/TestRulesetReceivingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TestRulesetReceivingResult`](../interfaces/TestRulesetReceivingResult.md)\>

___

### testRulesetReceivingRaw

▸ **testRulesetReceivingRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TestRulesetReceivingResult`](../interfaces/TestRulesetReceivingResult.md)\>\>

Test whether inbound emails from an email address would be blocked or allowed by inbox rulesets or test if phone number can receive SMS
Test receiving with rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestRulesetReceivingRequest`](../interfaces/TestRulesetReceivingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TestRulesetReceivingResult`](../interfaces/TestRulesetReceivingResult.md)\>\>

___

### testRulesetSending

▸ **testRulesetSending**(`requestParameters`, `initOverrides?`): `Promise`<[`TestRulesetSendingResult`](../interfaces/TestRulesetSendingResult.md)\>

Test whether outbound emails to an email address would be blocked or allowed by inbox rulesets or whether a phone number can send SMS
Test sending with rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestRulesetSendingRequest`](../interfaces/TestRulesetSendingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TestRulesetSendingResult`](../interfaces/TestRulesetSendingResult.md)\>

___

### testRulesetSendingRaw

▸ **testRulesetSendingRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TestRulesetSendingResult`](../interfaces/TestRulesetSendingResult.md)\>\>

Test whether outbound emails to an email address would be blocked or allowed by inbox rulesets or whether a phone number can send SMS
Test sending with rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestRulesetSendingRequest`](../interfaces/TestRulesetSendingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TestRulesetSendingResult`](../interfaces/TestRulesetSendingResult.md)\>\>

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

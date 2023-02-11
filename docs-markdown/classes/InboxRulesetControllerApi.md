[MailSlurp JS](../README.md) / InboxRulesetControllerApi

# Class: InboxRulesetControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InboxRulesetControllerApi`**

## Table of contents

### Constructors

- [constructor](InboxRulesetControllerApi.md#constructor)

### Properties

- [configuration](InboxRulesetControllerApi.md#configuration)

### Methods

- [createNewInboxRuleset](InboxRulesetControllerApi.md#createnewinboxruleset)
- [createNewInboxRulesetRaw](InboxRulesetControllerApi.md#createnewinboxrulesetraw)
- [deleteInboxRuleset](InboxRulesetControllerApi.md#deleteinboxruleset)
- [deleteInboxRulesetRaw](InboxRulesetControllerApi.md#deleteinboxrulesetraw)
- [deleteInboxRulesets](InboxRulesetControllerApi.md#deleteinboxrulesets)
- [deleteInboxRulesetsRaw](InboxRulesetControllerApi.md#deleteinboxrulesetsraw)
- [getInboxRuleset](InboxRulesetControllerApi.md#getinboxruleset)
- [getInboxRulesetRaw](InboxRulesetControllerApi.md#getinboxrulesetraw)
- [getInboxRulesets](InboxRulesetControllerApi.md#getinboxrulesets)
- [getInboxRulesetsRaw](InboxRulesetControllerApi.md#getinboxrulesetsraw)
- [request](InboxRulesetControllerApi.md#request)
- [testInboxRuleset](InboxRulesetControllerApi.md#testinboxruleset)
- [testInboxRulesetRaw](InboxRulesetControllerApi.md#testinboxrulesetraw)
- [testInboxRulesetsForInbox](InboxRulesetControllerApi.md#testinboxrulesetsforinbox)
- [testInboxRulesetsForInboxRaw](InboxRulesetControllerApi.md#testinboxrulesetsforinboxraw)
- [testNewInboxRuleset](InboxRulesetControllerApi.md#testnewinboxruleset)
- [testNewInboxRulesetRaw](InboxRulesetControllerApi.md#testnewinboxrulesetraw)
- [withMiddleware](InboxRulesetControllerApi.md#withmiddleware)
- [withPostMiddleware](InboxRulesetControllerApi.md#withpostmiddleware)
- [withPreMiddleware](InboxRulesetControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new InboxRulesetControllerApi**(`configuration?`)

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

### createNewInboxRuleset

▸ **createNewInboxRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
Create an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewInboxRulesetRequest`](../interfaces/CreateNewInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

___

### createNewInboxRulesetRaw

▸ **createNewInboxRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
Create an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateNewInboxRulesetRequest`](../interfaces/CreateNewInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>\>

___

### deleteInboxRuleset

▸ **deleteInboxRuleset**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete inbox ruleset
Delete an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRulesetRequest`](../interfaces/DeleteInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteInboxRulesetRaw

▸ **deleteInboxRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete inbox ruleset
Delete an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRulesetRequest`](../interfaces/DeleteInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteInboxRulesets

▸ **deleteInboxRulesets**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete inbox rulesets. Accepts optional inboxId filter.
Delete inbox rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRulesetsRequest`](../interfaces/DeleteInboxRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteInboxRulesetsRaw

▸ **deleteInboxRulesetsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete inbox rulesets. Accepts optional inboxId filter.
Delete inbox rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRulesetsRequest`](../interfaces/DeleteInboxRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getInboxRuleset

▸ **getInboxRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

Get inbox ruleset
Get an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRulesetRequest`](../interfaces/GetInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

___

### getInboxRulesetRaw

▸ **getInboxRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>\>

Get inbox ruleset
Get an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRulesetRequest`](../interfaces/GetInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>\>

___

### getInboxRulesets

▸ **getInboxRulesets**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

List all rulesets attached to an inbox
List inbox rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRulesetsRequest`](../interfaces/GetInboxRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

___

### getInboxRulesetsRaw

▸ **getInboxRulesetsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>\>

List all rulesets attached to an inbox
List inbox rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRulesetsRequest`](../interfaces/GetInboxRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>\>

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

### testInboxRuleset

▸ **testInboxRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test an inbox ruleset
Test an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxRulesetRequest`](../interfaces/TestInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

___

### testInboxRulesetRaw

▸ **testInboxRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

Test an inbox ruleset
Test an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestInboxRulesetRequest`](../interfaces/TestInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

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

### testNewInboxRuleset

▸ **testNewInboxRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

Test new inbox ruleset
Test new inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestNewInboxRulesetRequest`](../interfaces/TestNewInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>

___

### testNewInboxRulesetRaw

▸ **testNewInboxRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

Test new inbox ruleset
Test new inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`TestNewInboxRulesetRequest`](../interfaces/TestNewInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetTestResult`](../interfaces/InboxRulesetTestResult.md)\>\>

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

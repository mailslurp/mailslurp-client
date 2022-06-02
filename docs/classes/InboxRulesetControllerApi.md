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

### <a id="constructor" name="constructor"></a> constructor

• **new InboxRulesetControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### <a id="createnewinboxruleset" name="createnewinboxruleset"></a> createNewInboxRuleset

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

### <a id="createnewinboxrulesetraw" name="createnewinboxrulesetraw"></a> createNewInboxRulesetRaw

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

### <a id="deleteinboxruleset" name="deleteinboxruleset"></a> deleteInboxRuleset

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

### <a id="deleteinboxrulesetraw" name="deleteinboxrulesetraw"></a> deleteInboxRulesetRaw

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

### <a id="deleteinboxrulesets" name="deleteinboxrulesets"></a> deleteInboxRulesets

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

### <a id="deleteinboxrulesetsraw" name="deleteinboxrulesetsraw"></a> deleteInboxRulesetsRaw

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

### <a id="getinboxruleset" name="getinboxruleset"></a> getInboxRuleset

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

### <a id="getinboxrulesetraw" name="getinboxrulesetraw"></a> getInboxRulesetRaw

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

### <a id="getinboxrulesets" name="getinboxrulesets"></a> getInboxRulesets

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

### <a id="getinboxrulesetsraw" name="getinboxrulesetsraw"></a> getInboxRulesetsRaw

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

### <a id="request" name="request"></a> request

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

### <a id="testinboxruleset" name="testinboxruleset"></a> testInboxRuleset

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

### <a id="testinboxrulesetraw" name="testinboxrulesetraw"></a> testInboxRulesetRaw

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

### <a id="testinboxrulesetsforinbox" name="testinboxrulesetsforinbox"></a> testInboxRulesetsForInbox

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

### <a id="testinboxrulesetsforinboxraw" name="testinboxrulesetsforinboxraw"></a> testInboxRulesetsForInboxRaw

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

### <a id="testnewinboxruleset" name="testnewinboxruleset"></a> testNewInboxRuleset

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

### <a id="testnewinboxrulesetraw" name="testnewinboxrulesetraw"></a> testNewInboxRulesetRaw

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

### <a id="withmiddleware" name="withmiddleware"></a> withMiddleware

▸ **withMiddleware**<`T`\>(`this`, ...`middlewares`): `T`

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

### <a id="withpostmiddleware" name="withpostmiddleware"></a> withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, ...`postMiddlewares`): `T`

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

### <a id="withpremiddleware" name="withpremiddleware"></a> withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, ...`preMiddlewares`): `T`

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

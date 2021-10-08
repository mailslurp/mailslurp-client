[MailSlurp JS](../README.md) / WaitForControllerApi

# Class: WaitForControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`WaitForControllerApi`**

## Table of contents

### Constructors

- [constructor](WaitForControllerApi.md#constructor)

### Properties

- [configuration](WaitForControllerApi.md#configuration)

### Methods

- [request](WaitForControllerApi.md#request)
- [waitFor](WaitForControllerApi.md#waitfor)
- [waitForEmailCount](WaitForControllerApi.md#waitforemailcount)
- [waitForEmailCountRaw](WaitForControllerApi.md#waitforemailcountraw)
- [waitForLatestEmail](WaitForControllerApi.md#waitforlatestemail)
- [waitForLatestEmailRaw](WaitForControllerApi.md#waitforlatestemailraw)
- [waitForMatchingEmails](WaitForControllerApi.md#waitformatchingemails)
- [waitForMatchingEmailsRaw](WaitForControllerApi.md#waitformatchingemailsraw)
- [waitForMatchingFirstEmail](WaitForControllerApi.md#waitformatchingfirstemail)
- [waitForMatchingFirstEmailRaw](WaitForControllerApi.md#waitformatchingfirstemailraw)
- [waitForNthEmail](WaitForControllerApi.md#waitfornthemail)
- [waitForNthEmailRaw](WaitForControllerApi.md#waitfornthemailraw)
- [waitForRaw](WaitForControllerApi.md#waitforraw)
- [withMiddleware](WaitForControllerApi.md#withmiddleware)
- [withPostMiddleware](WaitForControllerApi.md#withpostmiddleware)
- [withPreMiddleware](WaitForControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new WaitForControllerApi**(`configuration?`)

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

### waitFor

▸ **waitFor**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
Wait for an email to match the provided filter conditions such as subject contains keyword.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForRequest`](../interfaces/WaitForRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### waitForEmailCount

▸ **waitForEmailCount**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForEmailCountRequest`](../interfaces/WaitForEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### waitForEmailCountRaw

▸ **waitForEmailCountRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForEmailCountRequest`](../interfaces/WaitForEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

___

### waitForLatestEmail

▸ **waitForLatestEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
Fetch inbox\'s latest email or if empty wait for an email to arrive

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForLatestEmailRequest`](../interfaces/WaitForLatestEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### waitForLatestEmailRaw

▸ **waitForLatestEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
Fetch inbox\'s latest email or if empty wait for an email to arrive

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForLatestEmailRequest`](../interfaces/WaitForLatestEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### waitForMatchingEmails

▸ **waitForMatchingEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
Wait or return list of emails that match simple matching patterns

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForMatchingEmailsRequest`](../interfaces/WaitForMatchingEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### waitForMatchingEmailsRaw

▸ **waitForMatchingEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
Wait or return list of emails that match simple matching patterns

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForMatchingEmailsRequest`](../interfaces/WaitForMatchingEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

___

### waitForMatchingFirstEmail

▸ **waitForMatchingFirstEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
Wait for or return the first email that matches provided MatchOptions array

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForMatchingFirstEmailRequest`](../interfaces/WaitForMatchingFirstEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### waitForMatchingFirstEmailRaw

▸ **waitForMatchingFirstEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
Wait for or return the first email that matches provided MatchOptions array

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForMatchingFirstEmailRequest`](../interfaces/WaitForMatchingFirstEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### waitForNthEmail

▸ **waitForNthEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForNthEmailRequest`](../interfaces/WaitForNthEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### waitForNthEmailRaw

▸ **waitForNthEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForNthEmailRequest`](../interfaces/WaitForNthEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### waitForRaw

▸ **waitForRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
Wait for an email to match the provided filter conditions such as subject contains keyword.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForRequest`](../interfaces/WaitForRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

___

### withMiddleware

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

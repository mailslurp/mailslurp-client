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
- [waitForLatestSms](WaitForControllerApi.md#waitforlatestsms)
- [waitForLatestSmsRaw](WaitForControllerApi.md#waitforlatestsmsraw)
- [waitForMatchingEmails](WaitForControllerApi.md#waitformatchingemails)
- [waitForMatchingEmailsRaw](WaitForControllerApi.md#waitformatchingemailsraw)
- [waitForMatchingFirstEmail](WaitForControllerApi.md#waitformatchingfirstemail)
- [waitForMatchingFirstEmailRaw](WaitForControllerApi.md#waitformatchingfirstemailraw)
- [waitForNthEmail](WaitForControllerApi.md#waitfornthemail)
- [waitForNthEmailRaw](WaitForControllerApi.md#waitfornthemailraw)
- [waitForRaw](WaitForControllerApi.md#waitforraw)
- [waitForSms](WaitForControllerApi.md#waitforsms)
- [waitForSmsRaw](WaitForControllerApi.md#waitforsmsraw)
- [withMiddleware](WaitForControllerApi.md#withmiddleware)
- [withPostMiddleware](WaitForControllerApi.md#withpostmiddleware)
- [withPreMiddleware](WaitForControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new WaitForControllerApi**(`configuration?`)

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

### <a id="waitfor" name="waitfor"></a> waitFor

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

### <a id="waitforemailcount" name="waitforemailcount"></a> waitForEmailCount

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

### <a id="waitforemailcountraw" name="waitforemailcountraw"></a> waitForEmailCountRaw

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

### <a id="waitforlatestemail" name="waitforlatestemail"></a> waitForLatestEmail

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

### <a id="waitforlatestemailraw" name="waitforlatestemailraw"></a> waitForLatestEmailRaw

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

### <a id="waitforlatestsms" name="waitforlatestsms"></a> waitForLatestSms

▸ **waitForLatestSms**(`requestParameters`, `initOverrides?`): `Promise`<[`SmsDto`](../interfaces/SmsDto.md)\>

Wait until a phone number meets given conditions or return immediately if already met
Wait for the latest SMS message to match the provided filter conditions such as body contains keyword.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForLatestSmsRequest`](../interfaces/WaitForLatestSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SmsDto`](../interfaces/SmsDto.md)\>

___

### <a id="waitforlatestsmsraw" name="waitforlatestsmsraw"></a> waitForLatestSmsRaw

▸ **waitForLatestSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsDto`](../interfaces/SmsDto.md)\>\>

Wait until a phone number meets given conditions or return immediately if already met
Wait for the latest SMS message to match the provided filter conditions such as body contains keyword.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForLatestSmsRequest`](../interfaces/WaitForLatestSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsDto`](../interfaces/SmsDto.md)\>\>

___

### <a id="waitformatchingemails" name="waitformatchingemails"></a> waitForMatchingEmails

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

### <a id="waitformatchingemailsraw" name="waitformatchingemailsraw"></a> waitForMatchingEmailsRaw

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

### <a id="waitformatchingfirstemail" name="waitformatchingfirstemail"></a> waitForMatchingFirstEmail

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

### <a id="waitformatchingfirstemailraw" name="waitformatchingfirstemailraw"></a> waitForMatchingFirstEmailRaw

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

### <a id="waitfornthemail" name="waitfornthemail"></a> waitForNthEmail

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

### <a id="waitfornthemailraw" name="waitfornthemailraw"></a> waitForNthEmailRaw

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

### <a id="waitforraw" name="waitforraw"></a> waitForRaw

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

### <a id="waitforsms" name="waitforsms"></a> waitForSms

▸ **waitForSms**(`requestParameters`, `initOverrides?`): `Promise`<[`SmsPreview`](../interfaces/SmsPreview.md)[]\>

Generic waitFor method that will wait until a phone number meets given conditions or return immediately if already met
Wait for an SMS message to match the provided filter conditions such as body contains keyword.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForSmsRequest`](../interfaces/WaitForSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SmsPreview`](../interfaces/SmsPreview.md)[]\>

___

### <a id="waitforsmsraw" name="waitforsmsraw"></a> waitForSmsRaw

▸ **waitForSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsPreview`](../interfaces/SmsPreview.md)[]\>\>

Generic waitFor method that will wait until a phone number meets given conditions or return immediately if already met
Wait for an SMS message to match the provided filter conditions such as body contains keyword.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`WaitForSmsRequest`](../interfaces/WaitForSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsPreview`](../interfaces/SmsPreview.md)[]\>\>

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

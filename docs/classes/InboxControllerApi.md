# Class: InboxControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InboxControllerApi`**

## Table of contents

### Constructors

- [constructor](InboxControllerApi.md#constructor)

### Properties

- [configuration](InboxControllerApi.md#configuration)

### Methods

- [createInbox](InboxControllerApi.md#createinbox)
- [createInboxRaw](InboxControllerApi.md#createinboxraw)
- [createInboxRuleset](InboxControllerApi.md#createinboxruleset)
- [createInboxRulesetRaw](InboxControllerApi.md#createinboxrulesetraw)
- [createInboxWithDefaults](InboxControllerApi.md#createinboxwithdefaults)
- [createInboxWithDefaultsRaw](InboxControllerApi.md#createinboxwithdefaultsraw)
- [createInboxWithOptions](InboxControllerApi.md#createinboxwithoptions)
- [createInboxWithOptionsRaw](InboxControllerApi.md#createinboxwithoptionsraw)
- [deleteAllInboxEmails](InboxControllerApi.md#deleteallinboxemails)
- [deleteAllInboxEmailsRaw](InboxControllerApi.md#deleteallinboxemailsraw)
- [deleteAllInboxes](InboxControllerApi.md#deleteallinboxes)
- [deleteAllInboxesRaw](InboxControllerApi.md#deleteallinboxesraw)
- [deleteInbox](InboxControllerApi.md#deleteinbox)
- [deleteInboxRaw](InboxControllerApi.md#deleteinboxraw)
- [doesInboxExist](InboxControllerApi.md#doesinboxexist)
- [doesInboxExistRaw](InboxControllerApi.md#doesinboxexistraw)
- [flushExpired](InboxControllerApi.md#flushexpired)
- [flushExpiredRaw](InboxControllerApi.md#flushexpiredraw)
- [getAllInboxes](InboxControllerApi.md#getallinboxes)
- [getAllInboxesRaw](InboxControllerApi.md#getallinboxesraw)
- [getEmails](InboxControllerApi.md#getemails)
- [getEmailsRaw](InboxControllerApi.md#getemailsraw)
- [getImapSmtpAccess](InboxControllerApi.md#getimapsmtpaccess)
- [getImapSmtpAccessRaw](InboxControllerApi.md#getimapsmtpaccessraw)
- [getInbox](InboxControllerApi.md#getinbox)
- [getInboxByEmailAddress](InboxControllerApi.md#getinboxbyemailaddress)
- [getInboxByEmailAddressRaw](InboxControllerApi.md#getinboxbyemailaddressraw)
- [getInboxCount](InboxControllerApi.md#getinboxcount)
- [getInboxCountRaw](InboxControllerApi.md#getinboxcountraw)
- [getInboxEmailCount](InboxControllerApi.md#getinboxemailcount)
- [getInboxEmailCountRaw](InboxControllerApi.md#getinboxemailcountraw)
- [getInboxEmailsPaginated](InboxControllerApi.md#getinboxemailspaginated)
- [getInboxEmailsPaginatedRaw](InboxControllerApi.md#getinboxemailspaginatedraw)
- [getInboxIds](InboxControllerApi.md#getinboxids)
- [getInboxIdsRaw](InboxControllerApi.md#getinboxidsraw)
- [getInboxRaw](InboxControllerApi.md#getinboxraw)
- [getInboxSentEmails](InboxControllerApi.md#getinboxsentemails)
- [getInboxSentEmailsRaw](InboxControllerApi.md#getinboxsentemailsraw)
- [getInboxTags](InboxControllerApi.md#getinboxtags)
- [getInboxTagsRaw](InboxControllerApi.md#getinboxtagsraw)
- [getInboxes](InboxControllerApi.md#getinboxes)
- [getInboxesRaw](InboxControllerApi.md#getinboxesraw)
- [getLatestEmailInInbox](InboxControllerApi.md#getlatestemailininbox)
- [getLatestEmailInInboxRaw](InboxControllerApi.md#getlatestemailininboxraw)
- [getOrganizationInboxes](InboxControllerApi.md#getorganizationinboxes)
- [getOrganizationInboxesRaw](InboxControllerApi.md#getorganizationinboxesraw)
- [listInboxRulesets](InboxControllerApi.md#listinboxrulesets)
- [listInboxRulesetsRaw](InboxControllerApi.md#listinboxrulesetsraw)
- [listInboxTrackingPixels](InboxControllerApi.md#listinboxtrackingpixels)
- [listInboxTrackingPixelsRaw](InboxControllerApi.md#listinboxtrackingpixelsraw)
- [request](InboxControllerApi.md#request)
- [sendEmail](InboxControllerApi.md#sendemail)
- [sendEmailAndConfirm](InboxControllerApi.md#sendemailandconfirm)
- [sendEmailAndConfirmRaw](InboxControllerApi.md#sendemailandconfirmraw)
- [sendEmailRaw](InboxControllerApi.md#sendemailraw)
- [sendSmtpEnvelope](InboxControllerApi.md#sendsmtpenvelope)
- [sendSmtpEnvelopeRaw](InboxControllerApi.md#sendsmtpenveloperaw)
- [sendTestEmail](InboxControllerApi.md#sendtestemail)
- [sendTestEmailRaw](InboxControllerApi.md#sendtestemailraw)
- [setInboxFavourited](InboxControllerApi.md#setinboxfavourited)
- [setInboxFavouritedRaw](InboxControllerApi.md#setinboxfavouritedraw)
- [updateInbox](InboxControllerApi.md#updateinbox)
- [updateInboxRaw](InboxControllerApi.md#updateinboxraw)
- [withMiddleware](InboxControllerApi.md#withmiddleware)
- [withPostMiddleware](InboxControllerApi.md#withpostmiddleware)
- [withPreMiddleware](InboxControllerApi.md#withpremiddleware)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new InboxControllerApi**(`configuration?`)

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

### <a id="createinbox" name="createinbox"></a> createInbox

▸ **createInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxRequest`](../interfaces/CreateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### <a id="createinboxraw" name="createinboxraw"></a> createInboxRaw

▸ **createInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxRequest`](../interfaces/CreateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### <a id="createinboxruleset" name="createinboxruleset"></a> createInboxRuleset

▸ **createInboxRuleset**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
Create an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxRulesetRequest`](../interfaces/CreateInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

___

### <a id="createinboxrulesetraw" name="createinboxrulesetraw"></a> createInboxRulesetRaw

▸ **createInboxRulesetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
Create an inbox ruleset

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxRulesetRequest`](../interfaces/CreateInboxRulesetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>\>

___

### <a id="createinboxwithdefaults" name="createinboxwithdefaults"></a> createInboxWithDefaults

▸ **createInboxWithDefaults**(`initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Create an inbox with default options. Uses MailSlurp domain pool address and is private.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### <a id="createinboxwithdefaultsraw" name="createinboxwithdefaultsraw"></a> createInboxWithDefaultsRaw

▸ **createInboxWithDefaultsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Create an inbox with default options. Uses MailSlurp domain pool address and is private.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### <a id="createinboxwithoptions" name="createinboxwithoptions"></a> createInboxWithOptions

▸ **createInboxWithOptions**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
Create an inbox with options. Extended options for inbox creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxWithOptionsRequest`](../interfaces/CreateInboxWithOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### <a id="createinboxwithoptionsraw" name="createinboxwithoptionsraw"></a> createInboxWithOptionsRaw

▸ **createInboxWithOptionsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
Create an inbox with options. Extended options for inbox creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CreateInboxWithOptionsRequest`](../interfaces/CreateInboxWithOptionsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### <a id="deleteallinboxemails" name="deleteallinboxemails"></a> deleteAllInboxEmails

▸ **deleteAllInboxEmails**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Deletes all emails in an inbox. Be careful as emails cannot be recovered
Delete all emails in a given inboxes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxEmailsRequest`](../interfaces/DeleteAllInboxEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deleteallinboxemailsraw" name="deleteallinboxemailsraw"></a> deleteAllInboxEmailsRaw

▸ **deleteAllInboxEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Deletes all emails in an inbox. Be careful as emails cannot be recovered
Delete all emails in a given inboxes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxEmailsRequest`](../interfaces/DeleteAllInboxEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="deleteallinboxes" name="deleteallinboxes"></a> deleteAllInboxes

▸ **deleteAllInboxes**(`initOverrides?`): `Promise`<`void`\>

Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
Delete all inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deleteallinboxesraw" name="deleteallinboxesraw"></a> deleteAllInboxesRaw

▸ **deleteAllInboxesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
Delete all inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="deleteinbox" name="deleteinbox"></a> deleteInbox

▸ **deleteInbox**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
Delete inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRequest`](../interfaces/DeleteInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="deleteinboxraw" name="deleteinboxraw"></a> deleteInboxRaw

▸ **deleteInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
Delete inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteInboxRequest`](../interfaces/DeleteInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="doesinboxexist" name="doesinboxexist"></a> doesInboxExist

▸ **doesInboxExist**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxExistsDto`](../interfaces/InboxExistsDto.md)\>

Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
Does inbox exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DoesInboxExistRequest`](../interfaces/DoesInboxExistRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxExistsDto`](../interfaces/InboxExistsDto.md)\>

___

### <a id="doesinboxexistraw" name="doesinboxexistraw"></a> doesInboxExistRaw

▸ **doesInboxExistRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxExistsDto`](../interfaces/InboxExistsDto.md)\>\>

Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
Does inbox exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DoesInboxExistRequest`](../interfaces/DoesInboxExistRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxExistsDto`](../interfaces/InboxExistsDto.md)\>\>

___

### <a id="flushexpired" name="flushexpired"></a> flushExpired

▸ **flushExpired**(`requestParameters`, `initOverrides?`): `Promise`<[`FlushExpiredInboxesResult`](../interfaces/FlushExpiredInboxesResult.md)\>

Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
Remove expired inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FlushExpiredRequest`](../interfaces/FlushExpiredRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FlushExpiredInboxesResult`](../interfaces/FlushExpiredInboxesResult.md)\>

___

### <a id="flushexpiredraw" name="flushexpiredraw"></a> flushExpiredRaw

▸ **flushExpiredRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FlushExpiredInboxesResult`](../interfaces/FlushExpiredInboxesResult.md)\>\>

Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
Remove expired inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`FlushExpiredRequest`](../interfaces/FlushExpiredRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`FlushExpiredInboxesResult`](../interfaces/FlushExpiredInboxesResult.md)\>\>

___

### <a id="getallinboxes" name="getallinboxes"></a> getAllInboxes

▸ **getAllInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
List All Inboxes Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxesRequest`](../interfaces/GetAllInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

___

### <a id="getallinboxesraw" name="getallinboxesraw"></a> getAllInboxesRaw

▸ **getAllInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>\>

List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
List All Inboxes Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxesRequest`](../interfaces/GetAllInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>\>

___

### <a id="getemails" name="getemails"></a> getEmails

▸ **getEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailsRequest`](../interfaces/GetEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### <a id="getemailsraw" name="getemailsraw"></a> getEmailsRaw

▸ **getEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailsRequest`](../interfaces/GetEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

___

### <a id="getimapsmtpaccess" name="getimapsmtpaccess"></a> getImapSmtpAccess

▸ **getImapSmtpAccess**(`requestParameters`, `initOverrides?`): `Promise`<[`ImapSmtpAccessDetails`](../interfaces/ImapSmtpAccessDetails.md)\>

Get IMAP and SMTP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetImapSmtpAccessRequest`](../interfaces/GetImapSmtpAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapSmtpAccessDetails`](../interfaces/ImapSmtpAccessDetails.md)\>

___

### <a id="getimapsmtpaccessraw" name="getimapsmtpaccessraw"></a> getImapSmtpAccessRaw

▸ **getImapSmtpAccessRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapSmtpAccessDetails`](../interfaces/ImapSmtpAccessDetails.md)\>\>

Get IMAP and SMTP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetImapSmtpAccessRequest`](../interfaces/GetImapSmtpAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapSmtpAccessDetails`](../interfaces/ImapSmtpAccessDetails.md)\>\>

___

### <a id="getinbox" name="getinbox"></a> getInbox

▸ **getInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Returns an inbox\'s properties, including its email address and ID.
Get Inbox. Returns properties of an inbox.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRequest`](../interfaces/GetInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### <a id="getinboxbyemailaddress" name="getinboxbyemailaddress"></a> getInboxByEmailAddress

▸ **getInboxByEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxByEmailAddressResult`](../interfaces/InboxByEmailAddressResult.md)\>

Get a inbox result by email address
Search for an inbox with the provided email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxByEmailAddressRequest`](../interfaces/GetInboxByEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxByEmailAddressResult`](../interfaces/InboxByEmailAddressResult.md)\>

___

### <a id="getinboxbyemailaddressraw" name="getinboxbyemailaddressraw"></a> getInboxByEmailAddressRaw

▸ **getInboxByEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxByEmailAddressResult`](../interfaces/InboxByEmailAddressResult.md)\>\>

Get a inbox result by email address
Search for an inbox with the provided email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxByEmailAddressRequest`](../interfaces/GetInboxByEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxByEmailAddressResult`](../interfaces/InboxByEmailAddressResult.md)\>\>

___

### <a id="getinboxcount" name="getinboxcount"></a> getInboxCount

▸ **getInboxCount**(`initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Get total inbox count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### <a id="getinboxcountraw" name="getinboxcountraw"></a> getInboxCountRaw

▸ **getInboxCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Get total inbox count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

___

### <a id="getinboxemailcount" name="getinboxemailcount"></a> getInboxEmailCount

▸ **getInboxEmailCount**(`requestParameters`, `initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Get email count in inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxEmailCountRequest`](../interfaces/GetInboxEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### <a id="getinboxemailcountraw" name="getinboxemailcountraw"></a> getInboxEmailCountRaw

▸ **getInboxEmailCountRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Get email count in inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxEmailCountRequest`](../interfaces/GetInboxEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

___

### <a id="getinboxemailspaginated" name="getinboxemailspaginated"></a> getInboxEmailsPaginated

▸ **getInboxEmailsPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>

Get a paginated list of emails in an inbox. Does not hold connections open.
Get inbox emails paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxEmailsPaginatedRequest`](../interfaces/GetInboxEmailsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>

___

### <a id="getinboxemailspaginatedraw" name="getinboxemailspaginatedraw"></a> getInboxEmailsPaginatedRaw

▸ **getInboxEmailsPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>\>

Get a paginated list of emails in an inbox. Does not hold connections open.
Get inbox emails paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxEmailsPaginatedRequest`](../interfaces/GetInboxEmailsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>\>

___

### <a id="getinboxids" name="getinboxids"></a> getInboxIds

▸ **getInboxIds**(`initOverrides?`): `Promise`<[`InboxIdsResult`](../interfaces/InboxIdsResult.md)\>

Get list of inbox IDs
Get all inbox IDs

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxIdsResult`](../interfaces/InboxIdsResult.md)\>

___

### <a id="getinboxidsraw" name="getinboxidsraw"></a> getInboxIdsRaw

▸ **getInboxIdsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxIdsResult`](../interfaces/InboxIdsResult.md)\>\>

Get list of inbox IDs
Get all inbox IDs

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxIdsResult`](../interfaces/InboxIdsResult.md)\>\>

___

### <a id="getinboxraw" name="getinboxraw"></a> getInboxRaw

▸ **getInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Returns an inbox\'s properties, including its email address and ID.
Get Inbox. Returns properties of an inbox.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxRequest`](../interfaces/GetInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### <a id="getinboxsentemails" name="getinboxsentemails"></a> getInboxSentEmails

▸ **getInboxSentEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

Returns an inbox\'s sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
Get Inbox Sent Emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxSentEmailsRequest`](../interfaces/GetInboxSentEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

___

### <a id="getinboxsentemailsraw" name="getinboxsentemailsraw"></a> getInboxSentEmailsRaw

▸ **getInboxSentEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>\>

Returns an inbox\'s sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
Get Inbox Sent Emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxSentEmailsRequest`](../interfaces/GetInboxSentEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>\>

___

### <a id="getinboxtags" name="getinboxtags"></a> getInboxTags

▸ **getInboxTags**(`initOverrides?`): `Promise`<`string`[]\>

Get all inbox tags
Get inbox tags

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`[]\>

___

### <a id="getinboxtagsraw" name="getinboxtagsraw"></a> getInboxTagsRaw

▸ **getInboxTagsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

Get all inbox tags
Get inbox tags

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`[]\>\>

___

### <a id="getinboxes" name="getinboxes"></a> getInboxes

▸ **getInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended and allows paginated access using a limit and sort parameter.
List Inboxes and email addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxesRequest`](../interfaces/GetInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

___

### <a id="getinboxesraw" name="getinboxesraw"></a> getInboxesRaw

▸ **getInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)[]\>\>

List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended and allows paginated access using a limit and sort parameter.
List Inboxes and email addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxesRequest`](../interfaces/GetInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)[]\>\>

___

### <a id="getlatestemailininbox" name="getlatestemailininbox"></a> getLatestEmailInInbox

▸ **getLatestEmailInInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Get the newest email in an inbox or wait for one to arrive
Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestEmailInInboxRequest`](../interfaces/GetLatestEmailInInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### <a id="getlatestemailininboxraw" name="getlatestemailininboxraw"></a> getLatestEmailInInboxRaw

▸ **getLatestEmailInInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Get the newest email in an inbox or wait for one to arrive
Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestEmailInInboxRequest`](../interfaces/GetLatestEmailInInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### <a id="getorganizationinboxes" name="getorganizationinboxes"></a> getOrganizationInboxes

▸ **getOrganizationInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`PageOrganizationInboxProjection`](../interfaces/PageOrganizationInboxProjection.md)\>

List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time).
List Organization Inboxes Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOrganizationInboxesRequest`](../interfaces/GetOrganizationInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageOrganizationInboxProjection`](../interfaces/PageOrganizationInboxProjection.md)\>

___

### <a id="getorganizationinboxesraw" name="getorganizationinboxesraw"></a> getOrganizationInboxesRaw

▸ **getOrganizationInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageOrganizationInboxProjection`](../interfaces/PageOrganizationInboxProjection.md)\>\>

List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time).
List Organization Inboxes Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOrganizationInboxesRequest`](../interfaces/GetOrganizationInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageOrganizationInboxProjection`](../interfaces/PageOrganizationInboxProjection.md)\>\>

___

### <a id="listinboxrulesets" name="listinboxrulesets"></a> listInboxRulesets

▸ **listInboxRulesets**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

List all rulesets attached to an inbox
List inbox rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListInboxRulesetsRequest`](../interfaces/ListInboxRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

___

### <a id="listinboxrulesetsraw" name="listinboxrulesetsraw"></a> listInboxRulesetsRaw

▸ **listInboxRulesetsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>\>

List all rulesets attached to an inbox
List inbox rulesets

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListInboxRulesetsRequest`](../interfaces/ListInboxRulesetsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>\>

___

### <a id="listinboxtrackingpixels" name="listinboxtrackingpixels"></a> listInboxTrackingPixels

▸ **listInboxTrackingPixels**(`requestParameters`, `initOverrides?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

List all tracking pixels sent from an inbox
List inbox tracking pixels

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListInboxTrackingPixelsRequest`](../interfaces/ListInboxTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

___

### <a id="listinboxtrackingpixelsraw" name="listinboxtrackingpixelsraw"></a> listInboxTrackingPixelsRaw

▸ **listInboxTrackingPixelsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

List all tracking pixels sent from an inbox
List inbox tracking pixels

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ListInboxTrackingPixelsRequest`](../interfaces/ListInboxTrackingPixelsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>\>

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

### <a id="sendemail" name="sendemail"></a> sendEmail

▸ **sendEmail**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
Send Email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailRequest`](../interfaces/SendEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="sendemailandconfirm" name="sendemailandconfirm"></a> sendEmailAndConfirm

▸ **sendEmailAndConfirm**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
Send email and return sent confirmation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailAndConfirmRequest`](../interfaces/SendEmailAndConfirmRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### <a id="sendemailandconfirmraw" name="sendemailandconfirmraw"></a> sendEmailAndConfirmRaw

▸ **sendEmailAndConfirmRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
Send email and return sent confirmation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailAndConfirmRequest`](../interfaces/SendEmailAndConfirmRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

___

### <a id="sendemailraw" name="sendemailraw"></a> sendEmailRaw

▸ **sendEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
Send Email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailRequest`](../interfaces/SendEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="sendsmtpenvelope" name="sendsmtpenvelope"></a> sendSmtpEnvelope

▸ **sendSmtpEnvelope**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
Send email using an SMTP mail envelope and message body and return sent confirmation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendSmtpEnvelopeRequest`](../interfaces/SendSmtpEnvelopeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### <a id="sendsmtpenveloperaw" name="sendsmtpenveloperaw"></a> sendSmtpEnvelopeRaw

▸ **sendSmtpEnvelopeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
Send email using an SMTP mail envelope and message body and return sent confirmation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendSmtpEnvelopeRequest`](../interfaces/SendSmtpEnvelopeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

___

### <a id="sendtestemail" name="sendtestemail"></a> sendTestEmail

▸ **sendTestEmail**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Send an inbox a test email to test email receiving is working
Send a test email to inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendTestEmailRequest`](../interfaces/SendTestEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### <a id="sendtestemailraw" name="sendtestemailraw"></a> sendTestEmailRaw

▸ **sendTestEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Send an inbox a test email to test email receiving is working
Send a test email to inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendTestEmailRequest`](../interfaces/SendTestEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### <a id="setinboxfavourited" name="setinboxfavourited"></a> setInboxFavourited

▸ **setInboxFavourited**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Set and return new favourite state for an inbox
Set inbox favourited state

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetInboxFavouritedRequest`](../interfaces/SetInboxFavouritedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### <a id="setinboxfavouritedraw" name="setinboxfavouritedraw"></a> setInboxFavouritedRaw

▸ **setInboxFavouritedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Set and return new favourite state for an inbox
Set inbox favourited state

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetInboxFavouritedRequest`](../interfaces/SetInboxFavouritedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### <a id="updateinbox" name="updateinbox"></a> updateInbox

▸ **updateInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Update editable fields on an inbox
Update Inbox. Change name and description. Email address is not editable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateInboxRequest`](../interfaces/UpdateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### <a id="updateinboxraw" name="updateinboxraw"></a> updateInboxRaw

▸ **updateInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Update editable fields on an inbox
Update Inbox. Change name and description. Email address is not editable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateInboxRequest`](../interfaces/UpdateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

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

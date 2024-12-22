[MailSlurp JS](../README.md) / InboxControllerApi

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

- [cancelScheduledJob](InboxControllerApi.md#cancelscheduledjob)
- [cancelScheduledJobRaw](InboxControllerApi.md#cancelscheduledjobraw)
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
- [deleteAllInboxesByDescription](InboxControllerApi.md#deleteallinboxesbydescription)
- [deleteAllInboxesByDescriptionRaw](InboxControllerApi.md#deleteallinboxesbydescriptionraw)
- [deleteAllInboxesByName](InboxControllerApi.md#deleteallinboxesbyname)
- [deleteAllInboxesByNameRaw](InboxControllerApi.md#deleteallinboxesbynameraw)
- [deleteAllInboxesByTag](InboxControllerApi.md#deleteallinboxesbytag)
- [deleteAllInboxesByTagRaw](InboxControllerApi.md#deleteallinboxesbytagraw)
- [deleteAllInboxesRaw](InboxControllerApi.md#deleteallinboxesraw)
- [deleteInbox](InboxControllerApi.md#deleteinbox)
- [deleteInboxRaw](InboxControllerApi.md#deleteinboxraw)
- [doesInboxExist](InboxControllerApi.md#doesinboxexist)
- [doesInboxExistRaw](InboxControllerApi.md#doesinboxexistraw)
- [flushExpired](InboxControllerApi.md#flushexpired)
- [flushExpiredRaw](InboxControllerApi.md#flushexpiredraw)
- [getAllInboxes](InboxControllerApi.md#getallinboxes)
- [getAllInboxesOffsetPaginated](InboxControllerApi.md#getallinboxesoffsetpaginated)
- [getAllInboxesOffsetPaginatedRaw](InboxControllerApi.md#getallinboxesoffsetpaginatedraw)
- [getAllInboxesRaw](InboxControllerApi.md#getallinboxesraw)
- [getAllScheduledJobs](InboxControllerApi.md#getallscheduledjobs)
- [getAllScheduledJobsRaw](InboxControllerApi.md#getallscheduledjobsraw)
- [getDeliveryStatusesByInboxId](InboxControllerApi.md#getdeliverystatusesbyinboxid)
- [getDeliveryStatusesByInboxIdRaw](InboxControllerApi.md#getdeliverystatusesbyinboxidraw)
- [getEmails](InboxControllerApi.md#getemails)
- [getEmailsRaw](InboxControllerApi.md#getemailsraw)
- [getImapAccess](InboxControllerApi.md#getimapaccess)
- [getImapAccessRaw](InboxControllerApi.md#getimapaccessraw)
- [getImapSmtpAccess](InboxControllerApi.md#getimapsmtpaccess)
- [getImapSmtpAccessEnv](InboxControllerApi.md#getimapsmtpaccessenv)
- [getImapSmtpAccessEnvRaw](InboxControllerApi.md#getimapsmtpaccessenvraw)
- [getImapSmtpAccessRaw](InboxControllerApi.md#getimapsmtpaccessraw)
- [getImapSmtpAccessServers](InboxControllerApi.md#getimapsmtpaccessservers)
- [getImapSmtpAccessServersRaw](InboxControllerApi.md#getimapsmtpaccessserversraw)
- [getInbox](InboxControllerApi.md#getinbox)
- [getInboxByEmailAddress](InboxControllerApi.md#getinboxbyemailaddress)
- [getInboxByEmailAddressRaw](InboxControllerApi.md#getinboxbyemailaddressraw)
- [getInboxByName](InboxControllerApi.md#getinboxbyname)
- [getInboxByNameRaw](InboxControllerApi.md#getinboxbynameraw)
- [getInboxCount](InboxControllerApi.md#getinboxcount)
- [getInboxCountRaw](InboxControllerApi.md#getinboxcountraw)
- [getInboxEmailCount](InboxControllerApi.md#getinboxemailcount)
- [getInboxEmailCountRaw](InboxControllerApi.md#getinboxemailcountraw)
- [getInboxEmailsPaginated](InboxControllerApi.md#getinboxemailspaginated)
- [getInboxEmailsPaginatedRaw](InboxControllerApi.md#getinboxemailspaginatedraw)
- [getInboxIds](InboxControllerApi.md#getinboxids)
- [getInboxIdsRaw](InboxControllerApi.md#getinboxidsraw)
- [getInboxRaw](InboxControllerApi.md#getinboxraw)
- [getInboxSentCount](InboxControllerApi.md#getinboxsentcount)
- [getInboxSentCountRaw](InboxControllerApi.md#getinboxsentcountraw)
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
- [getScheduledJob](InboxControllerApi.md#getscheduledjob)
- [getScheduledJobRaw](InboxControllerApi.md#getscheduledjobraw)
- [getScheduledJobsByInboxId](InboxControllerApi.md#getscheduledjobsbyinboxid)
- [getScheduledJobsByInboxIdRaw](InboxControllerApi.md#getscheduledjobsbyinboxidraw)
- [getSmtpAccess](InboxControllerApi.md#getsmtpaccess)
- [getSmtpAccessRaw](InboxControllerApi.md#getsmtpaccessraw)
- [isEmailAddressAvailable](InboxControllerApi.md#isemailaddressavailable)
- [isEmailAddressAvailableRaw](InboxControllerApi.md#isemailaddressavailableraw)
- [listInboxRulesets](InboxControllerApi.md#listinboxrulesets)
- [listInboxRulesetsRaw](InboxControllerApi.md#listinboxrulesetsraw)
- [listInboxTrackingPixels](InboxControllerApi.md#listinboxtrackingpixels)
- [listInboxTrackingPixelsRaw](InboxControllerApi.md#listinboxtrackingpixelsraw)
- [request](InboxControllerApi.md#request)
- [searchInboxes](InboxControllerApi.md#searchinboxes)
- [searchInboxesRaw](InboxControllerApi.md#searchinboxesraw)
- [sendEmail](InboxControllerApi.md#sendemail)
- [sendEmailAndConfirm](InboxControllerApi.md#sendemailandconfirm)
- [sendEmailAndConfirmRaw](InboxControllerApi.md#sendemailandconfirmraw)
- [sendEmailRaw](InboxControllerApi.md#sendemailraw)
- [sendEmailWithQueue](InboxControllerApi.md#sendemailwithqueue)
- [sendEmailWithQueueRaw](InboxControllerApi.md#sendemailwithqueueraw)
- [sendSmtpEnvelope](InboxControllerApi.md#sendsmtpenvelope)
- [sendSmtpEnvelopeRaw](InboxControllerApi.md#sendsmtpenveloperaw)
- [sendTestEmail](InboxControllerApi.md#sendtestemail)
- [sendTestEmailRaw](InboxControllerApi.md#sendtestemailraw)
- [sendWithSchedule](InboxControllerApi.md#sendwithschedule)
- [sendWithScheduleRaw](InboxControllerApi.md#sendwithscheduleraw)
- [setInboxFavourited](InboxControllerApi.md#setinboxfavourited)
- [setInboxFavouritedRaw](InboxControllerApi.md#setinboxfavouritedraw)
- [updateImapAccess](InboxControllerApi.md#updateimapaccess)
- [updateImapAccessRaw](InboxControllerApi.md#updateimapaccessraw)
- [updateInbox](InboxControllerApi.md#updateinbox)
- [updateInboxRaw](InboxControllerApi.md#updateinboxraw)
- [updateSmtpAccess](InboxControllerApi.md#updatesmtpaccess)
- [updateSmtpAccessRaw](InboxControllerApi.md#updatesmtpaccessraw)
- [withMiddleware](InboxControllerApi.md#withmiddleware)
- [withPostMiddleware](InboxControllerApi.md#withpostmiddleware)
- [withPreMiddleware](InboxControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new InboxControllerApi**(`configuration?`)

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

### cancelScheduledJob

▸ **cancelScheduledJob**(`requestParameters`, `initOverrides?`): `Promise`<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>

Get a scheduled email job and cancel it. Will fail if status of job is already cancelled, failed, or complete.
Cancel a scheduled email job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelScheduledJobRequest`](../interfaces/CancelScheduledJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>

___

### cancelScheduledJobRaw

▸ **cancelScheduledJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>\>

Get a scheduled email job and cancel it. Will fail if status of job is already cancelled, failed, or complete.
Cancel a scheduled email job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CancelScheduledJobRequest`](../interfaces/CancelScheduledJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>\>

___

### createInbox

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

### createInboxRaw

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

### createInboxRuleset

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

### createInboxRulesetRaw

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

### createInboxWithDefaults

▸ **createInboxWithDefaults**(`initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Create an inbox with default options. Uses MailSlurp domain pool address and is private.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### createInboxWithDefaultsRaw

▸ **createInboxWithDefaultsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Create an inbox with default options. Uses MailSlurp domain pool address and is private.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### createInboxWithOptions

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

### createInboxWithOptionsRaw

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

### deleteAllInboxEmails

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

### deleteAllInboxEmailsRaw

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

### deleteAllInboxes

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

### deleteAllInboxesByDescription

▸ **deleteAllInboxesByDescription**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Permanently delete all inboxes by description
Delete inboxes by description

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxesByDescriptionRequest`](../interfaces/DeleteAllInboxesByDescriptionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllInboxesByDescriptionRaw

▸ **deleteAllInboxesByDescriptionRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Permanently delete all inboxes by description
Delete inboxes by description

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxesByDescriptionRequest`](../interfaces/DeleteAllInboxesByDescriptionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteAllInboxesByName

▸ **deleteAllInboxesByName**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Permanently delete all inboxes by name
Delete inboxes by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxesByNameRequest`](../interfaces/DeleteAllInboxesByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllInboxesByNameRaw

▸ **deleteAllInboxesByNameRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Permanently delete all inboxes by name
Delete inboxes by name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxesByNameRequest`](../interfaces/DeleteAllInboxesByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteAllInboxesByTag

▸ **deleteAllInboxesByTag**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Permanently delete all inboxes by tag
Delete inboxes by tag

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxesByTagRequest`](../interfaces/DeleteAllInboxesByTagRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllInboxesByTagRaw

▸ **deleteAllInboxesByTagRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Permanently delete all inboxes by tag
Delete inboxes by tag

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteAllInboxesByTagRequest`](../interfaces/DeleteAllInboxesByTagRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteAllInboxesRaw

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

### deleteInbox

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

### deleteInboxRaw

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

### doesInboxExist

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

### doesInboxExistRaw

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

### flushExpired

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

### flushExpiredRaw

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

### getAllInboxes

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

### getAllInboxesOffsetPaginated

▸ **getAllInboxesOffsetPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
List All Inboxes Offset Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxesOffsetPaginatedRequest`](../interfaces/GetAllInboxesOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

___

### getAllInboxesOffsetPaginatedRaw

▸ **getAllInboxesOffsetPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>\>

List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
List All Inboxes Offset Paginated

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllInboxesOffsetPaginatedRequest`](../interfaces/GetAllInboxesOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>\>

___

### getAllInboxesRaw

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

### getAllScheduledJobs

▸ **getAllScheduledJobs**(`requestParameters`, `initOverrides?`): `Promise`<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>

Schedule sending of emails using scheduled jobs. These can be inbox or account level.
Get all scheduled email sending jobs for account

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllScheduledJobsRequest`](../interfaces/GetAllScheduledJobsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>

___

### getAllScheduledJobsRaw

▸ **getAllScheduledJobsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>\>

Schedule sending of emails using scheduled jobs. These can be inbox or account level.
Get all scheduled email sending jobs for account

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAllScheduledJobsRequest`](../interfaces/GetAllScheduledJobsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>\>

___

### getDeliveryStatusesByInboxId

▸ **getDeliveryStatusesByInboxId**(`requestParameters`, `initOverrides?`): `Promise`<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>

Get all email delivery statuses for an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliveryStatusesByInboxIdRequest`](../interfaces/GetDeliveryStatusesByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>

___

### getDeliveryStatusesByInboxIdRaw

▸ **getDeliveryStatusesByInboxIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>\>

Get all email delivery statuses for an inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetDeliveryStatusesByInboxIdRequest`](../interfaces/GetDeliveryStatusesByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageDeliveryStatus`](../interfaces/PageDeliveryStatus.md)\>\>

___

### getEmails

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

### getEmailsRaw

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

### getImapAccess

▸ **getImapAccess**(`requestParameters`, `initOverrides?`): `Promise`<[`ImapAccessDetails`](../interfaces/ImapAccessDetails.md)\>

Get IMAP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetImapAccessRequest`](../interfaces/GetImapAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapAccessDetails`](../interfaces/ImapAccessDetails.md)\>

___

### getImapAccessRaw

▸ **getImapAccessRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapAccessDetails`](../interfaces/ImapAccessDetails.md)\>\>

Get IMAP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetImapAccessRequest`](../interfaces/GetImapAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapAccessDetails`](../interfaces/ImapAccessDetails.md)\>\>

___

### getImapSmtpAccess

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

### getImapSmtpAccessEnv

▸ **getImapSmtpAccessEnv**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Get IMAP and SMTP access details in .env format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetImapSmtpAccessEnvRequest`](../interfaces/GetImapSmtpAccessEnvRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### getImapSmtpAccessEnvRaw

▸ **getImapSmtpAccessEnvRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Get IMAP and SMTP access details in .env format

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetImapSmtpAccessEnvRequest`](../interfaces/GetImapSmtpAccessEnvRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### getImapSmtpAccessRaw

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

### getImapSmtpAccessServers

▸ **getImapSmtpAccessServers**(`initOverrides?`): `Promise`<[`ImapSmtpAccessServers`](../interfaces/ImapSmtpAccessServers.md)\>

Get IMAP and SMTP server hosts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ImapSmtpAccessServers`](../interfaces/ImapSmtpAccessServers.md)\>

___

### getImapSmtpAccessServersRaw

▸ **getImapSmtpAccessServersRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapSmtpAccessServers`](../interfaces/ImapSmtpAccessServers.md)\>\>

Get IMAP and SMTP server hosts

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ImapSmtpAccessServers`](../interfaces/ImapSmtpAccessServers.md)\>\>

___

### getInbox

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

### getInboxByEmailAddress

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

### getInboxByEmailAddressRaw

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

### getInboxByName

▸ **getInboxByName**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxByNameResult`](../interfaces/InboxByNameResult.md)\>

Get a inbox result by name
Search for an inbox with the given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxByNameRequest`](../interfaces/GetInboxByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxByNameResult`](../interfaces/InboxByNameResult.md)\>

___

### getInboxByNameRaw

▸ **getInboxByNameRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxByNameResult`](../interfaces/InboxByNameResult.md)\>\>

Get a inbox result by name
Search for an inbox with the given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxByNameRequest`](../interfaces/GetInboxByNameRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxByNameResult`](../interfaces/InboxByNameResult.md)\>\>

___

### getInboxCount

▸ **getInboxCount**(`initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Get total inbox count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### getInboxCountRaw

▸ **getInboxCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Get total inbox count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

___

### getInboxEmailCount

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

### getInboxEmailCountRaw

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

### getInboxEmailsPaginated

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

### getInboxEmailsPaginatedRaw

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

### getInboxIds

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

### getInboxIdsRaw

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

### getInboxRaw

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

### getInboxSentCount

▸ **getInboxSentCount**(`requestParameters`, `initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Get sent email count in inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxSentCountRequest`](../interfaces/GetInboxSentCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### getInboxSentCountRaw

▸ **getInboxSentCountRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Get sent email count in inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxSentCountRequest`](../interfaces/GetInboxSentCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

___

### getInboxSentEmails

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

### getInboxSentEmailsRaw

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

### getInboxTags

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

### getInboxTagsRaw

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

### getInboxes

▸ **getInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

List the inboxes you have created. Note use of the more advanced `getAllInboxes` is recommended and allows paginated access using a limit and sort parameter.
List Inboxes and email addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxesRequest`](../interfaces/GetInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)[]\>

___

### getInboxesRaw

▸ **getInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)[]\>\>

List the inboxes you have created. Note use of the more advanced `getAllInboxes` is recommended and allows paginated access using a limit and sort parameter.
List Inboxes and email addresses

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetInboxesRequest`](../interfaces/GetInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)[]\>\>

___

### getLatestEmailInInbox

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

### getLatestEmailInInboxRaw

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

### getOrganizationInboxes

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

### getOrganizationInboxesRaw

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

### getScheduledJob

▸ **getScheduledJob**(`requestParameters`, `initOverrides?`): `Promise`<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>

Get a scheduled email job details.
Get a scheduled email job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetScheduledJobRequest`](../interfaces/GetScheduledJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>

___

### getScheduledJobRaw

▸ **getScheduledJobRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>\>

Get a scheduled email job details.
Get a scheduled email job

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetScheduledJobRequest`](../interfaces/GetScheduledJobRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>\>

___

### getScheduledJobsByInboxId

▸ **getScheduledJobsByInboxId**(`requestParameters`, `initOverrides?`): `Promise`<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>

Schedule sending of emails using scheduled jobs.
Get all scheduled email sending jobs for the inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetScheduledJobsByInboxIdRequest`](../interfaces/GetScheduledJobsByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>

___

### getScheduledJobsByInboxIdRaw

▸ **getScheduledJobsByInboxIdRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>\>

Schedule sending of emails using scheduled jobs.
Get all scheduled email sending jobs for the inbox

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetScheduledJobsByInboxIdRequest`](../interfaces/GetScheduledJobsByInboxIdRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageScheduledJobs`](../interfaces/PageScheduledJobs.md)\>\>

___

### getSmtpAccess

▸ **getSmtpAccess**(`requestParameters`, `initOverrides?`): `Promise`<[`SmtpAccessDetails`](../interfaces/SmtpAccessDetails.md)\>

Get SMTP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmtpAccessRequest`](../interfaces/GetSmtpAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SmtpAccessDetails`](../interfaces/SmtpAccessDetails.md)\>

___

### getSmtpAccessRaw

▸ **getSmtpAccessRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmtpAccessDetails`](../interfaces/SmtpAccessDetails.md)\>\>

Get SMTP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSmtpAccessRequest`](../interfaces/GetSmtpAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmtpAccessDetails`](../interfaces/SmtpAccessDetails.md)\>\>

___

### isEmailAddressAvailable

▸ **isEmailAddressAvailable**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailAvailableResult`](../interfaces/EmailAvailableResult.md)\>

Returns whether an email address is available
Is email address available

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`IsEmailAddressAvailableRequest`](../interfaces/IsEmailAddressAvailableRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailAvailableResult`](../interfaces/EmailAvailableResult.md)\>

___

### isEmailAddressAvailableRaw

▸ **isEmailAddressAvailableRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAvailableResult`](../interfaces/EmailAvailableResult.md)\>\>

Returns whether an email address is available
Is email address available

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`IsEmailAddressAvailableRequest`](../interfaces/IsEmailAddressAvailableRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailAvailableResult`](../interfaces/EmailAvailableResult.md)\>\>

___

### listInboxRulesets

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

### listInboxRulesetsRaw

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

### listInboxTrackingPixels

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

### listInboxTrackingPixelsRaw

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

### searchInboxes

▸ **searchInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

Search inboxes and return in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
Search all inboxes and return matching inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchInboxesRequest`](../interfaces/SearchInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

___

### searchInboxesRaw

▸ **searchInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>\>

Search inboxes and return in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
Search all inboxes and return matching inboxes

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchInboxesRequest`](../interfaces/SearchInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>\>

___

### sendEmail

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

### sendEmailAndConfirm

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

### sendEmailAndConfirmRaw

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

### sendEmailRaw

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

### sendEmailWithQueue

▸ **sendEmailWithQueue**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
Send email with queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailWithQueueRequest`](../interfaces/SendEmailWithQueueRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### sendEmailWithQueueRaw

▸ **sendEmailWithQueueRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
Send email with queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailWithQueueRequest`](../interfaces/SendEmailWithQueueRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### sendSmtpEnvelope

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

### sendSmtpEnvelopeRaw

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

### sendTestEmail

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

### sendTestEmailRaw

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

### sendWithSchedule

▸ **sendWithSchedule**(`requestParameters`, `initOverrides?`): `Promise`<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>

Send an email using a delay. Will place the email onto a scheduler that will then be processed and sent. Use delays to schedule email sending.
Send email with with delay or schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendWithScheduleRequest`](../interfaces/SendWithScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>

___

### sendWithScheduleRaw

▸ **sendWithScheduleRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>\>

Send an email using a delay. Will place the email onto a scheduler that will then be processed and sent. Use delays to schedule email sending.
Send email with with delay or schedule

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendWithScheduleRequest`](../interfaces/SendWithScheduleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScheduledJobDto`](../interfaces/ScheduledJobDto.md)\>\>

___

### setInboxFavourited

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

### setInboxFavouritedRaw

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

### updateImapAccess

▸ **updateImapAccess**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Update IMAP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateImapAccessRequest`](../interfaces/UpdateImapAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### updateImapAccessRaw

▸ **updateImapAccessRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Update IMAP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateImapAccessRequest`](../interfaces/UpdateImapAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### updateInbox

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

### updateInboxRaw

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

### updateSmtpAccess

▸ **updateSmtpAccess**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Update SMTP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateSmtpAccessRequest`](../interfaces/UpdateSmtpAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### updateSmtpAccessRaw

▸ **updateSmtpAccessRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Update SMTP access usernames and passwords

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`UpdateSmtpAccessRequest`](../interfaces/UpdateSmtpAccessRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

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

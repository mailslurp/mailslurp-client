[MailSlurp JS](../README.md) / EmailControllerApi

# Class: EmailControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`EmailControllerApi`**

## Table of contents

### Constructors

- [constructor](EmailControllerApi.md#constructor)

### Properties

- [configuration](EmailControllerApi.md#configuration)

### Methods

- [applyImapFlagOperation](EmailControllerApi.md#applyimapflagoperation)
- [applyImapFlagOperationRaw](EmailControllerApi.md#applyimapflagoperationraw)
- [canSend](EmailControllerApi.md#cansend)
- [canSendRaw](EmailControllerApi.md#cansendraw)
- [checkEmailBody](EmailControllerApi.md#checkemailbody)
- [checkEmailBodyFeatureSupport](EmailControllerApi.md#checkemailbodyfeaturesupport)
- [checkEmailBodyFeatureSupportRaw](EmailControllerApi.md#checkemailbodyfeaturesupportraw)
- [checkEmailBodyRaw](EmailControllerApi.md#checkemailbodyraw)
- [checkEmailClientSupport](EmailControllerApi.md#checkemailclientsupport)
- [checkEmailClientSupportRaw](EmailControllerApi.md#checkemailclientsupportraw)
- [deleteAllEmails](EmailControllerApi.md#deleteallemails)
- [deleteAllEmailsRaw](EmailControllerApi.md#deleteallemailsraw)
- [deleteEmail](EmailControllerApi.md#deleteemail)
- [deleteEmailRaw](EmailControllerApi.md#deleteemailraw)
- [downloadAttachment](EmailControllerApi.md#downloadattachment)
- [downloadAttachmentBase64](EmailControllerApi.md#downloadattachmentbase64)
- [downloadAttachmentBase64Raw](EmailControllerApi.md#downloadattachmentbase64raw)
- [downloadAttachmentRaw](EmailControllerApi.md#downloadattachmentraw)
- [downloadBody](EmailControllerApi.md#downloadbody)
- [downloadBodyBytes](EmailControllerApi.md#downloadbodybytes)
- [downloadBodyBytesRaw](EmailControllerApi.md#downloadbodybytesraw)
- [downloadBodyRaw](EmailControllerApi.md#downloadbodyraw)
- [forwardEmail](EmailControllerApi.md#forwardemail)
- [forwardEmailRaw](EmailControllerApi.md#forwardemailraw)
- [getAttachmentMetaData](EmailControllerApi.md#getattachmentmetadata)
- [getAttachmentMetaDataRaw](EmailControllerApi.md#getattachmentmetadataraw)
- [getEmail](EmailControllerApi.md#getemail)
- [getEmailAttachments](EmailControllerApi.md#getemailattachments)
- [getEmailAttachmentsRaw](EmailControllerApi.md#getemailattachmentsraw)
- [getEmailCodes](EmailControllerApi.md#getemailcodes)
- [getEmailCodesRaw](EmailControllerApi.md#getemailcodesraw)
- [getEmailContentMatch](EmailControllerApi.md#getemailcontentmatch)
- [getEmailContentMatchRaw](EmailControllerApi.md#getemailcontentmatchraw)
- [getEmailContentPart](EmailControllerApi.md#getemailcontentpart)
- [getEmailContentPartContent](EmailControllerApi.md#getemailcontentpartcontent)
- [getEmailContentPartContentRaw](EmailControllerApi.md#getemailcontentpartcontentraw)
- [getEmailContentPartRaw](EmailControllerApi.md#getemailcontentpartraw)
- [getEmailCount](EmailControllerApi.md#getemailcount)
- [getEmailCountRaw](EmailControllerApi.md#getemailcountraw)
- [getEmailHTML](EmailControllerApi.md#getemailhtml)
- [getEmailHTMLJson](EmailControllerApi.md#getemailhtmljson)
- [getEmailHTMLJsonRaw](EmailControllerApi.md#getemailhtmljsonraw)
- [getEmailHTMLQuery](EmailControllerApi.md#getemailhtmlquery)
- [getEmailHTMLQueryRaw](EmailControllerApi.md#getemailhtmlqueryraw)
- [getEmailHTMLRaw](EmailControllerApi.md#getemailhtmlraw)
- [getEmailLinks](EmailControllerApi.md#getemaillinks)
- [getEmailLinksRaw](EmailControllerApi.md#getemaillinksraw)
- [getEmailPreviewURLs](EmailControllerApi.md#getemailpreviewurls)
- [getEmailPreviewURLsRaw](EmailControllerApi.md#getemailpreviewurlsraw)
- [getEmailRaw](EmailControllerApi.md#getemailraw)
- [getEmailScreenshotAsBase64](EmailControllerApi.md#getemailscreenshotasbase64)
- [getEmailScreenshotAsBase64Raw](EmailControllerApi.md#getemailscreenshotasbase64raw)
- [getEmailScreenshotAsBinary](EmailControllerApi.md#getemailscreenshotasbinary)
- [getEmailScreenshotAsBinaryRaw](EmailControllerApi.md#getemailscreenshotasbinaryraw)
- [getEmailSignature](EmailControllerApi.md#getemailsignature)
- [getEmailSignatureRaw](EmailControllerApi.md#getemailsignatureraw)
- [getEmailSummary](EmailControllerApi.md#getemailsummary)
- [getEmailSummaryRaw](EmailControllerApi.md#getemailsummaryraw)
- [getEmailTextLines](EmailControllerApi.md#getemailtextlines)
- [getEmailTextLinesRaw](EmailControllerApi.md#getemailtextlinesraw)
- [getEmailThread](EmailControllerApi.md#getemailthread)
- [getEmailThreadItems](EmailControllerApi.md#getemailthreaditems)
- [getEmailThreadItemsRaw](EmailControllerApi.md#getemailthreaditemsraw)
- [getEmailThreadRaw](EmailControllerApi.md#getemailthreadraw)
- [getEmailThreads](EmailControllerApi.md#getemailthreads)
- [getEmailThreadsRaw](EmailControllerApi.md#getemailthreadsraw)
- [getEmailsOffsetPaginated](EmailControllerApi.md#getemailsoffsetpaginated)
- [getEmailsOffsetPaginatedRaw](EmailControllerApi.md#getemailsoffsetpaginatedraw)
- [getEmailsPaginated](EmailControllerApi.md#getemailspaginated)
- [getEmailsPaginatedRaw](EmailControllerApi.md#getemailspaginatedraw)
- [getGravatarUrlForEmailAddress](EmailControllerApi.md#getgravatarurlforemailaddress)
- [getGravatarUrlForEmailAddressRaw](EmailControllerApi.md#getgravatarurlforemailaddressraw)
- [getLatestEmail](EmailControllerApi.md#getlatestemail)
- [getLatestEmailInInbox1](EmailControllerApi.md#getlatestemailininbox1)
- [getLatestEmailInInbox1Raw](EmailControllerApi.md#getlatestemailininbox1raw)
- [getLatestEmailRaw](EmailControllerApi.md#getlatestemailraw)
- [getOrganizationEmailsPaginated](EmailControllerApi.md#getorganizationemailspaginated)
- [getOrganizationEmailsPaginatedRaw](EmailControllerApi.md#getorganizationemailspaginatedraw)
- [getRawEmailContents](EmailControllerApi.md#getrawemailcontents)
- [getRawEmailContentsRaw](EmailControllerApi.md#getrawemailcontentsraw)
- [getRawEmailJson](EmailControllerApi.md#getrawemailjson)
- [getRawEmailJsonRaw](EmailControllerApi.md#getrawemailjsonraw)
- [getUnreadEmailCount](EmailControllerApi.md#getunreademailcount)
- [getUnreadEmailCountRaw](EmailControllerApi.md#getunreademailcountraw)
- [markAllAsRead](EmailControllerApi.md#markallasread)
- [markAllAsReadRaw](EmailControllerApi.md#markallasreadraw)
- [markAsRead](EmailControllerApi.md#markasread)
- [markAsReadRaw](EmailControllerApi.md#markasreadraw)
- [replyToEmail](EmailControllerApi.md#replytoemail)
- [replyToEmailRaw](EmailControllerApi.md#replytoemailraw)
- [request](EmailControllerApi.md#request)
- [searchEmails](EmailControllerApi.md#searchemails)
- [searchEmailsRaw](EmailControllerApi.md#searchemailsraw)
- [sendEmailSourceOptional](EmailControllerApi.md#sendemailsourceoptional)
- [sendEmailSourceOptionalRaw](EmailControllerApi.md#sendemailsourceoptionalraw)
- [setEmailFavourited](EmailControllerApi.md#setemailfavourited)
- [setEmailFavouritedRaw](EmailControllerApi.md#setemailfavouritedraw)
- [validateEmail](EmailControllerApi.md#validateemail)
- [validateEmailRaw](EmailControllerApi.md#validateemailraw)
- [withMiddleware](EmailControllerApi.md#withmiddleware)
- [withPostMiddleware](EmailControllerApi.md#withpostmiddleware)
- [withPreMiddleware](EmailControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new EmailControllerApi**(`configuration?`)

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

### applyImapFlagOperation

▸ **applyImapFlagOperation**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

Applies RFC3501 IMAP flag operations on a message. Current implementation supports read/unread semantics via the `\\\\Seen` flag only.
Set IMAP flags associated with a message. Only supports \'\\Seen\' flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApplyImapFlagOperationRequest`](../interfaces/ApplyImapFlagOperationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

___

### applyImapFlagOperationRaw

▸ **applyImapFlagOperationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

Applies RFC3501 IMAP flag operations on a message. Current implementation supports read/unread semantics via the `\\\\Seen` flag only.
Set IMAP flags associated with a message. Only supports \'\\Seen\' flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApplyImapFlagOperationRequest`](../interfaces/ApplyImapFlagOperationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

___

### canSend

▸ **canSend**(`requestParameters`, `initOverrides?`): `Promise`<[`CanSendEmailResults`](../interfaces/CanSendEmailResults.md)\>

Validates sender/inbox context and recipient eligibility before attempting a send. Useful for preflight checks in UI or test workflows.
Check whether an email send would be accepted

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CanSendRequest`](../interfaces/CanSendRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CanSendEmailResults`](../interfaces/CanSendEmailResults.md)\>

___

### canSendRaw

▸ **canSendRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CanSendEmailResults`](../interfaces/CanSendEmailResults.md)\>\>

Validates sender/inbox context and recipient eligibility before attempting a send. Useful for preflight checks in UI or test workflows.
Check whether an email send would be accepted

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CanSendRequest`](../interfaces/CanSendRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CanSendEmailResults`](../interfaces/CanSendEmailResults.md)\>\>

___

### checkEmailBody

▸ **checkEmailBody**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckEmailBodyResults`](../interfaces/CheckEmailBodyResults.md)\>

Runs content quality checks against hydrated email body content. This endpoint performs outbound HTTP checks for linked resources, so avoid use with sensitive or stateful URLs.
Check email body for broken links, images, and spelling issues

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailBodyRequest`](../interfaces/CheckEmailBodyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckEmailBodyResults`](../interfaces/CheckEmailBodyResults.md)\>

___

### checkEmailBodyFeatureSupport

▸ **checkEmailBodyFeatureSupport**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckEmailBodyFeatureSupportResults`](../interfaces/CheckEmailBodyFeatureSupportResults.md)\>

Detects HTML/CSS features in the target email body and reports compatibility across major email clients and devices.
Check client support for features used in a stored email body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailBodyFeatureSupportRequest`](../interfaces/CheckEmailBodyFeatureSupportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckEmailBodyFeatureSupportResults`](../interfaces/CheckEmailBodyFeatureSupportResults.md)\>

___

### checkEmailBodyFeatureSupportRaw

▸ **checkEmailBodyFeatureSupportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailBodyFeatureSupportResults`](../interfaces/CheckEmailBodyFeatureSupportResults.md)\>\>

Detects HTML/CSS features in the target email body and reports compatibility across major email clients and devices.
Check client support for features used in a stored email body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailBodyFeatureSupportRequest`](../interfaces/CheckEmailBodyFeatureSupportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailBodyFeatureSupportResults`](../interfaces/CheckEmailBodyFeatureSupportResults.md)\>\>

___

### checkEmailBodyRaw

▸ **checkEmailBodyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailBodyResults`](../interfaces/CheckEmailBodyResults.md)\>\>

Runs content quality checks against hydrated email body content. This endpoint performs outbound HTTP checks for linked resources, so avoid use with sensitive or stateful URLs.
Check email body for broken links, images, and spelling issues

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailBodyRequest`](../interfaces/CheckEmailBodyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailBodyResults`](../interfaces/CheckEmailBodyResults.md)\>\>

___

### checkEmailClientSupport

▸ **checkEmailClientSupport**(`requestParameters`, `initOverrides?`): `Promise`<[`CheckEmailClientSupportResults`](../interfaces/CheckEmailClientSupportResults.md)\>

Evaluates HTML/CSS features in the supplied body and reports support coverage across major email clients and platforms.
Check email-client support for a provided HTML body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailClientSupportRequest`](../interfaces/CheckEmailClientSupportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CheckEmailClientSupportResults`](../interfaces/CheckEmailClientSupportResults.md)\>

___

### checkEmailClientSupportRaw

▸ **checkEmailClientSupportRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailClientSupportResults`](../interfaces/CheckEmailClientSupportResults.md)\>\>

Evaluates HTML/CSS features in the supplied body and reports support coverage across major email clients and platforms.
Check email-client support for a provided HTML body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`CheckEmailClientSupportRequest`](../interfaces/CheckEmailClientSupportRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CheckEmailClientSupportResults`](../interfaces/CheckEmailClientSupportResults.md)\>\>

___

### deleteAllEmails

▸ **deleteAllEmails**(`initOverrides?`): `Promise`<`void`\>

Deletes all emails for the authenticated account context. This operation is destructive and cannot be undone.
Delete all emails in all inboxes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteAllEmailsRaw

▸ **deleteAllEmailsRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Deletes all emails for the authenticated account context. This operation is destructive and cannot be undone.
Delete all emails in all inboxes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### deleteEmail

▸ **deleteEmail**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Deletes a single email from account scope. Operation is destructive and not reversible.
Delete an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailRequest`](../interfaces/DeleteEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### deleteEmailRaw

▸ **deleteEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Deletes a single email from account scope. Operation is destructive and not reversible.
Delete an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DeleteEmailRequest`](../interfaces/DeleteEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### downloadAttachment

▸ **downloadAttachment**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Returns attachment bytes by attachment ID. Use attachment IDs from email payloads or attachment listing endpoints.
Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentRequest`](../interfaces/DownloadAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### downloadAttachmentBase64

▸ **downloadAttachmentBase64**(`requestParameters`, `initOverrides?`): `Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

Returns attachment payload as base64 in JSON. Useful for clients that cannot reliably consume binary streaming responses.
Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentBase64Request`](../interfaces/DownloadAttachmentBase64Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

___

### downloadAttachmentBase64Raw

▸ **downloadAttachmentBase64Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>\>

Returns attachment payload as base64 in JSON. Useful for clients that cannot reliably consume binary streaming responses.
Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentBase64Request`](../interfaces/DownloadAttachmentBase64Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>\>

___

### downloadAttachmentRaw

▸ **downloadAttachmentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Returns attachment bytes by attachment ID. Use attachment IDs from email payloads or attachment listing endpoints.
Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadAttachmentRequest`](../interfaces/DownloadAttachmentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### downloadBody

▸ **downloadBody**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Returns hydrated email body text as a string with content type aligned to the underlying body format.
Get email body as string. Returned as `plain/text` with content type header.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBodyRequest`](../interfaces/DownloadBodyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### downloadBodyBytes

▸ **downloadBodyBytes**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Streams hydrated email body bytes with content type derived from the message body format.
Get email body in bytes. Returned as `octet-stream` with content type header.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBodyBytesRequest`](../interfaces/DownloadBodyBytesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### downloadBodyBytesRaw

▸ **downloadBodyBytesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Streams hydrated email body bytes with content type derived from the message body format.
Get email body in bytes. Returned as `octet-stream` with content type header.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBodyBytesRequest`](../interfaces/DownloadBodyBytesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### downloadBodyRaw

▸ **downloadBodyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Returns hydrated email body text as a string with content type aligned to the underlying body format.
Get email body as string. Returned as `plain/text` with content type header.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`DownloadBodyRequest`](../interfaces/DownloadBodyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### forwardEmail

▸ **forwardEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Forwards an existing email to new recipients. Uses the owning inbox context unless overridden by allowed sender options.
Forward email to recipients

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ForwardEmailRequest`](../interfaces/ForwardEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### forwardEmailRaw

▸ **forwardEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Forwards an existing email to new recipients. Uses the owning inbox context unless overridden by allowed sender options.
Forward email to recipients

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ForwardEmailRequest`](../interfaces/ForwardEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

___

### getAttachmentMetaData

▸ **getAttachmentMetaData**(`requestParameters`, `initOverrides?`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

Returns metadata for a specific attachment ID (name, content type, and size fields).
Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentMetaDataRequest`](../interfaces/GetAttachmentMetaDataRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

___

### getAttachmentMetaDataRaw

▸ **getAttachmentMetaDataRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>\>

Returns metadata for a specific attachment ID (name, content type, and size fields).
Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetAttachmentMetaDataRequest`](../interfaces/GetAttachmentMetaDataRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>\>

___

### getEmail

▸ **getEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Returns parsed email content including headers and body fields. Accessing hydrated content may mark the email as read depending on read-state rules.
Get hydrated email (headers and body)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailRequest`](../interfaces/GetEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### getEmailAttachments

▸ **getEmailAttachments**(`requestParameters`, `initOverrides?`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>

Returns metadata for all attachment IDs associated with the email (name, content type, size, and IDs).
List attachment metadata for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailAttachmentsRequest`](../interfaces/GetEmailAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>

___

### getEmailAttachmentsRaw

▸ **getEmailAttachmentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>\>

Returns metadata for all attachment IDs associated with the email (name, content type, size, and IDs).
List attachment metadata for an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailAttachmentsRequest`](../interfaces/GetEmailAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>\>

___

### getEmailCodes

▸ **getEmailCodes**(`requestParameters`, `initOverrides?`): `Promise`<[`ExtractCodesResult`](../interfaces/ExtractCodesResult.md)\>

Extracts one-time passcodes and similar tokens from email content. Supports deterministic extraction now with method/fallback flags (`AUTO`, `PATTERN`, `LLM`, `OCR`, `OCR_THEN_LLM`) for QA and future advanced pipelines.
Extract verification codes from an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailCodesRequest`](../interfaces/GetEmailCodesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ExtractCodesResult`](../interfaces/ExtractCodesResult.md)\>

___

### getEmailCodesRaw

▸ **getEmailCodesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExtractCodesResult`](../interfaces/ExtractCodesResult.md)\>\>

Extracts one-time passcodes and similar tokens from email content. Supports deterministic extraction now with method/fallback flags (`AUTO`, `PATTERN`, `LLM`, `OCR`, `OCR_THEN_LLM`) for QA and future advanced pipelines.
Extract verification codes from an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailCodesRequest`](../interfaces/GetEmailCodesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExtractCodesResult`](../interfaces/ExtractCodesResult.md)\>\>

___

### getEmailContentMatch

▸ **getEmailContentMatch**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailContentMatchResult`](../interfaces/EmailContentMatchResult.md)\>

Executes a Java regex pattern over hydrated email body text and returns the full match plus capture groups. Pattern syntax follows Java `Pattern` rules.
Run regex against hydrated email body and return matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailContentMatchRequest`](../interfaces/GetEmailContentMatchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailContentMatchResult`](../interfaces/EmailContentMatchResult.md)\>

___

### getEmailContentMatchRaw

▸ **getEmailContentMatchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailContentMatchResult`](../interfaces/EmailContentMatchResult.md)\>\>

Executes a Java regex pattern over hydrated email body text and returns the full match plus capture groups. Pattern syntax follows Java `Pattern` rules.
Run regex against hydrated email body and return matches

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailContentMatchRequest`](../interfaces/GetEmailContentMatchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailContentMatchResult`](../interfaces/EmailContentMatchResult.md)\>\>

___

### getEmailContentPart

▸ **getEmailContentPart**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailContentPartResult`](../interfaces/EmailContentPartResult.md)\>

Extracts one MIME body part by `contentType` and optional `index`, returned in a structured DTO with metadata.
Get email content part by content type

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailContentPartRequest`](../interfaces/GetEmailContentPartRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailContentPartResult`](../interfaces/EmailContentPartResult.md)\>

___

### getEmailContentPartContent

▸ **getEmailContentPartContent**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Extracts one MIME body part by `contentType` and optional `index`, and returns raw content with matching response content type when valid.
Get multipart content part as raw response

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailContentPartContentRequest`](../interfaces/GetEmailContentPartContentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### getEmailContentPartContentRaw

▸ **getEmailContentPartContentRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Extracts one MIME body part by `contentType` and optional `index`, and returns raw content with matching response content type when valid.
Get multipart content part as raw response

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailContentPartContentRequest`](../interfaces/GetEmailContentPartContentRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### getEmailContentPartRaw

▸ **getEmailContentPartRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailContentPartResult`](../interfaces/EmailContentPartResult.md)\>\>

Extracts one MIME body part by `contentType` and optional `index`, returned in a structured DTO with metadata.
Get email content part by content type

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailContentPartRequest`](../interfaces/GetEmailContentPartRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailContentPartResult`](../interfaces/EmailContentPartResult.md)\>\>

___

### getEmailCount

▸ **getEmailCount**(`requestParameters`, `initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Returns total email count for the authenticated user, or count scoped to a specific inbox when `inboxId` is provided.
Get email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailCountRequest`](../interfaces/GetEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### getEmailCountRaw

▸ **getEmailCountRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Returns total email count for the authenticated user, or count scoped to a specific inbox when `inboxId` is provided.
Get email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailCountRequest`](../interfaces/GetEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

___

### getEmailHTML

▸ **getEmailHTML**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Returns hydrated HTML body directly with `text/html` content type. Supports temporary access/browser usage and optional CID replacement for inline asset rendering.
Get hydrated email HTML for browser rendering

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailHTMLRequest`](../interfaces/GetEmailHTMLRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`\>

___

### getEmailHTMLJson

▸ **getEmailHTMLJson**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailHtmlDto`](../interfaces/EmailHtmlDto.md)\>

Returns hydrated HTML body and subject in a JSON DTO. Useful for API clients that need structured response payloads instead of raw HTML responses.
Get hydrated email HTML wrapped in JSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailHTMLJsonRequest`](../interfaces/GetEmailHTMLJsonRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailHtmlDto`](../interfaces/EmailHtmlDto.md)\>

___

### getEmailHTMLJsonRaw

▸ **getEmailHTMLJsonRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailHtmlDto`](../interfaces/EmailHtmlDto.md)\>\>

Returns hydrated HTML body and subject in a JSON DTO. Useful for API clients that need structured response payloads instead of raw HTML responses.
Get hydrated email HTML wrapped in JSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailHTMLJsonRequest`](../interfaces/GetEmailHTMLJsonRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailHtmlDto`](../interfaces/EmailHtmlDto.md)\>\>

___

### getEmailHTMLQuery

▸ **getEmailHTMLQuery**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

Applies a JSoup/CSS selector to hydrated HTML email body and returns matching text lines.
Query hydrated HTML body and return matching text lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailHTMLQueryRequest`](../interfaces/GetEmailHTMLQueryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

___

### getEmailHTMLQueryRaw

▸ **getEmailHTMLQueryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>\>

Applies a JSoup/CSS selector to hydrated HTML email body and returns matching text lines.
Query hydrated HTML body and return matching text lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailHTMLQueryRequest`](../interfaces/GetEmailHTMLQueryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>\>

___

### getEmailHTMLRaw

▸ **getEmailHTMLRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

Returns hydrated HTML body directly with `text/html` content type. Supports temporary access/browser usage and optional CID replacement for inline asset rendering.
Get hydrated email HTML for browser rendering

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailHTMLRequest`](../interfaces/GetEmailHTMLRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`string`\>\>

___

### getEmailLinks

▸ **getEmailLinks**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailLinksResult`](../interfaces/EmailLinksResult.md)\>

Parses HTML content and extracts link URLs (`href`). For non-HTML emails this endpoint returns a validation error.
Extract links from an email HTML body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailLinksRequest`](../interfaces/GetEmailLinksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailLinksResult`](../interfaces/EmailLinksResult.md)\>

___

### getEmailLinksRaw

▸ **getEmailLinksRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailLinksResult`](../interfaces/EmailLinksResult.md)\>\>

Parses HTML content and extracts link URLs (`href`). For non-HTML emails this endpoint returns a validation error.
Extract links from an email HTML body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailLinksRequest`](../interfaces/GetEmailLinksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailLinksResult`](../interfaces/EmailLinksResult.md)\>\>

___

### getEmailPreviewURLs

▸ **getEmailPreviewURLs**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>

Returns precomputed URLs for preview and raw message access for the specified email.
Get email URLs for viewing in browser or downloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailPreviewURLsRequest`](../interfaces/GetEmailPreviewURLsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>

___

### getEmailPreviewURLsRaw

▸ **getEmailPreviewURLsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>\>

Returns precomputed URLs for preview and raw message access for the specified email.
Get email URLs for viewing in browser or downloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailPreviewURLsRequest`](../interfaces/GetEmailPreviewURLsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreviewUrls`](../interfaces/EmailPreviewUrls.md)\>\>

___

### getEmailRaw

▸ **getEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Returns parsed email content including headers and body fields. Accessing hydrated content may mark the email as read depending on read-state rules.
Get hydrated email (headers and body)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailRequest`](../interfaces/GetEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### getEmailScreenshotAsBase64

▸ **getEmailScreenshotAsBase64**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailScreenshotResult`](../interfaces/EmailScreenshotResult.md)\>

Renders the email in a browser engine and returns PNG data as base64. Useful for APIs and dashboards that cannot easily stream binary responses.
Take a screenshot of an email in a browser and return base64 encoded string

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailScreenshotAsBase64Request`](../interfaces/GetEmailScreenshotAsBase64Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailScreenshotResult`](../interfaces/EmailScreenshotResult.md)\>

___

### getEmailScreenshotAsBase64Raw

▸ **getEmailScreenshotAsBase64Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailScreenshotResult`](../interfaces/EmailScreenshotResult.md)\>\>

Renders the email in a browser engine and returns PNG data as base64. Useful for APIs and dashboards that cannot easily stream binary responses.
Take a screenshot of an email in a browser and return base64 encoded string

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailScreenshotAsBase64Request`](../interfaces/GetEmailScreenshotAsBase64Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailScreenshotResult`](../interfaces/EmailScreenshotResult.md)\>\>

___

### getEmailScreenshotAsBinary

▸ **getEmailScreenshotAsBinary**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Renders the email in a browser engine and returns PNG bytes. Intended for visual QA and rendering regression checks.
Take a screenshot of an email in a browser

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailScreenshotAsBinaryRequest`](../interfaces/GetEmailScreenshotAsBinaryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### getEmailScreenshotAsBinaryRaw

▸ **getEmailScreenshotAsBinaryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Renders the email in a browser engine and returns PNG bytes. Intended for visual QA and rendering regression checks.
Take a screenshot of an email in a browser

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailScreenshotAsBinaryRequest`](../interfaces/GetEmailScreenshotAsBinaryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getEmailSignature

▸ **getEmailSignature**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailSignatureParseResult`](../interfaces/EmailSignatureParseResult.md)\>

Attempts to parse a sender signature block from an email body. Uses raw MIME content parts when possible and falls back to hydrated body parsing. This is heuristic and may not be accurate for all email clients or formats.
Extract signature from an inbound email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailSignatureRequest`](../interfaces/GetEmailSignatureRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailSignatureParseResult`](../interfaces/EmailSignatureParseResult.md)\>

___

### getEmailSignatureRaw

▸ **getEmailSignatureRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailSignatureParseResult`](../interfaces/EmailSignatureParseResult.md)\>\>

Attempts to parse a sender signature block from an email body. Uses raw MIME content parts when possible and falls back to hydrated body parsing. This is heuristic and may not be accurate for all email clients or formats.
Extract signature from an inbound email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailSignatureRequest`](../interfaces/GetEmailSignatureRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailSignatureParseResult`](../interfaces/EmailSignatureParseResult.md)\>\>

___

### getEmailSummary

▸ **getEmailSummary**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

Returns lightweight metadata and headers for an email. Use `getEmail` for hydrated body content or `getRawEmail` for original SMTP content.
Get email summary (headers/metadata only)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailSummaryRequest`](../interfaces/GetEmailSummaryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

___

### getEmailSummaryRaw

▸ **getEmailSummaryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

Returns lightweight metadata and headers for an email. Use `getEmail` for hydrated body content or `getRawEmail` for original SMTP content.
Get email summary (headers/metadata only)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailSummaryRequest`](../interfaces/GetEmailSummaryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

___

### getEmailTextLines

▸ **getEmailTextLines**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

Converts email body content to line-based plain text with optional HTML entity decoding and custom line separator.
Extract normalized text lines from email body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailTextLinesRequest`](../interfaces/GetEmailTextLinesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

___

### getEmailTextLinesRaw

▸ **getEmailTextLinesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>\>

Converts email body content to line-based plain text with optional HTML entity decoding and custom line separator.
Extract normalized text lines from email body

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailTextLinesRequest`](../interfaces/GetEmailTextLinesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>\>

___

### getEmailThread

▸ **getEmailThread**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailThreadDto`](../interfaces/EmailThreadDto.md)\>

Returns thread metadata built from RFC 5322 `Message-ID`, `In-Reply-To`, and `References` headers. Use `getEmailThreadItems` to fetch the thread messages.
Get email thread metadata by thread ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailThreadRequest`](../interfaces/GetEmailThreadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailThreadDto`](../interfaces/EmailThreadDto.md)\>

___

### getEmailThreadItems

▸ **getEmailThreadItems**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailThreadItemsDto`](../interfaces/EmailThreadItemsDto.md)\>

Returns all messages in a thread ordered by `createdAt` using the requested sort direction.
Get messages in a specific email thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailThreadItemsRequest`](../interfaces/GetEmailThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailThreadItemsDto`](../interfaces/EmailThreadItemsDto.md)\>

___

### getEmailThreadItemsRaw

▸ **getEmailThreadItemsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailThreadItemsDto`](../interfaces/EmailThreadItemsDto.md)\>\>

Returns all messages in a thread ordered by `createdAt` using the requested sort direction.
Get messages in a specific email thread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailThreadItemsRequest`](../interfaces/GetEmailThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailThreadItemsDto`](../interfaces/EmailThreadItemsDto.md)\>\>

___

### getEmailThreadRaw

▸ **getEmailThreadRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailThreadDto`](../interfaces/EmailThreadDto.md)\>\>

Returns thread metadata built from RFC 5322 `Message-ID`, `In-Reply-To`, and `References` headers. Use `getEmailThreadItems` to fetch the thread messages.
Get email thread metadata by thread ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailThreadRequest`](../interfaces/GetEmailThreadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailThreadDto`](../interfaces/EmailThreadDto.md)\>\>

___

### getEmailThreads

▸ **getEmailThreads**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>

Lists conversation threads inferred from `Message-ID`, `In-Reply-To`, and `References`. Supports filtering by inbox, search text, and time range.
List email threads in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailThreadsRequest`](../interfaces/GetEmailThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>

___

### getEmailThreadsRaw

▸ **getEmailThreadsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>\>

Lists conversation threads inferred from `Message-ID`, `In-Reply-To`, and `References`. Supports filtering by inbox, search text, and time range.
List email threads in paginated form

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailThreadsRequest`](../interfaces/GetEmailThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>\>

___

### getEmailsOffsetPaginated

▸ **getEmailsOffsetPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

Offset-style pagination endpoint for listing emails across inboxes. Supports inbox filters, unread-only, search, date boundaries, favourites, connector sync, plus-address filtering, and explicit include IDs.
Get all emails in all inboxes in paginated form. Email API list all.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailsOffsetPaginatedRequest`](../interfaces/GetEmailsOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

___

### getEmailsOffsetPaginatedRaw

▸ **getEmailsOffsetPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

Offset-style pagination endpoint for listing emails across inboxes. Supports inbox filters, unread-only, search, date boundaries, favourites, connector sync, plus-address filtering, and explicit include IDs.
Get all emails in all inboxes in paginated form. Email API list all.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailsOffsetPaginatedRequest`](../interfaces/GetEmailsOffsetPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

___

### getEmailsPaginated

▸ **getEmailsPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

Primary paginated email listing endpoint. Returns emails across inboxes with support for inbox filters, unread-only, search, date boundaries, favourites, connector sync, and plus-address filtering.
Get all emails in all inboxes in paginated form. Email API list all.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailsPaginatedRequest`](../interfaces/GetEmailsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

___

### getEmailsPaginatedRaw

▸ **getEmailsPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

Primary paginated email listing endpoint. Returns emails across inboxes with support for inbox filters, unread-only, search, date boundaries, favourites, connector sync, and plus-address filtering.
Get all emails in all inboxes in paginated form. Email API list all.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailsPaginatedRequest`](../interfaces/GetEmailsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

___

### getGravatarUrlForEmailAddress

▸ **getGravatarUrlForEmailAddress**(`requestParameters`, `initOverrides?`): `Promise`<[`GravatarUrl`](../interfaces/GravatarUrl.md)\>

Builds a Gravatar image URL from the provided email address and optional size. This endpoint does not fetch image bytes; it only returns the computed URL.
Get Gravatar URL for an email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGravatarUrlForEmailAddressRequest`](../interfaces/GetGravatarUrlForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GravatarUrl`](../interfaces/GravatarUrl.md)\>

___

### getGravatarUrlForEmailAddressRaw

▸ **getGravatarUrlForEmailAddressRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GravatarUrl`](../interfaces/GravatarUrl.md)\>\>

Builds a Gravatar image URL from the provided email address and optional size. This endpoint does not fetch image bytes; it only returns the computed URL.
Get Gravatar URL for an email address

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetGravatarUrlForEmailAddressRequest`](../interfaces/GetGravatarUrlForEmailAddressRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GravatarUrl`](../interfaces/GravatarUrl.md)\>\>

___

### getLatestEmail

▸ **getLatestEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Returns the most recently received email across all inboxes or an optional subset of inbox IDs.
Get latest email in all inboxes. Most recently received.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestEmailRequest`](../interfaces/GetLatestEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### getLatestEmailInInbox1

▸ **getLatestEmailInInbox1**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Returns the newest email for the specified inbox ID. For polling/wait semantics use wait endpoints.
Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestEmailInInbox1Request`](../interfaces/GetLatestEmailInInbox1Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### getLatestEmailInInbox1Raw

▸ **getLatestEmailInInbox1Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Returns the newest email for the specified inbox ID. For polling/wait semantics use wait endpoints.
Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestEmailInInbox1Request`](../interfaces/GetLatestEmailInInbox1Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### getLatestEmailRaw

▸ **getLatestEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Returns the most recently received email across all inboxes or an optional subset of inbox IDs.
Get latest email in all inboxes. Most recently received.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetLatestEmailRequest`](../interfaces/GetLatestEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### getOrganizationEmailsPaginated

▸ **getOrganizationEmailsPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

Returns paginated emails visible through organization/team access. Supports inbox filtering, unread-only filtering, search, favourites, plus-address filtering, and optional connector sync.
List organization-visible emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOrganizationEmailsPaginatedRequest`](../interfaces/GetOrganizationEmailsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

___

### getOrganizationEmailsPaginatedRaw

▸ **getOrganizationEmailsPaginatedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

Returns paginated emails visible through organization/team access. Supports inbox filtering, unread-only filtering, search, favourites, plus-address filtering, and optional connector sync.
List organization-visible emails

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetOrganizationEmailsPaginatedRequest`](../interfaces/GetOrganizationEmailsPaginatedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

___

### getRawEmailContents

▸ **getRawEmailContents**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Returns the original unparsed SMTP/MIME message as `text/plain`. Use JSON variant if your client expects JSON transport.
Get raw email string. Returns unparsed raw SMTP message with headers and body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawEmailContentsRequest`](../interfaces/GetRawEmailContentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### getRawEmailContentsRaw

▸ **getRawEmailContentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Returns the original unparsed SMTP/MIME message as `text/plain`. Use JSON variant if your client expects JSON transport.
Get raw email string. Returns unparsed raw SMTP message with headers and body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawEmailContentsRequest`](../interfaces/GetRawEmailContentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getRawEmailJson

▸ **getRawEmailJson**(`requestParameters`, `initOverrides?`): `Promise`<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>

Returns the original unparsed SMTP/MIME message wrapped in a JSON DTO for API clients that avoid plain-text stream responses.
Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawEmailJsonRequest`](../interfaces/GetRawEmailJsonRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>

___

### getRawEmailJsonRaw

▸ **getRawEmailJsonRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>\>

Returns the original unparsed SMTP/MIME message wrapped in a JSON DTO for API clients that avoid plain-text stream responses.
Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRawEmailJsonRequest`](../interfaces/GetRawEmailJsonRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>\>

___

### getUnreadEmailCount

▸ **getUnreadEmailCount**(`requestParameters`, `initOverrides?`): `Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

Returns unread email count. An email is considered read after dashboard/API retrieval depending on your read workflow.
Get unread email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUnreadEmailCountRequest`](../interfaces/GetUnreadEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

___

### getUnreadEmailCountRaw

▸ **getUnreadEmailCountRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnreadCount`](../interfaces/UnreadCount.md)\>\>

Returns unread email count. An email is considered read after dashboard/API retrieval depending on your read workflow.
Get unread email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUnreadEmailCountRequest`](../interfaces/GetUnreadEmailCountRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnreadCount`](../interfaces/UnreadCount.md)\>\>

___

### markAllAsRead

▸ **markAllAsRead**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Sets read state for all emails, optionally scoped to one inbox. Use `read=false` to reset unread state in bulk.
Mark all emails as read or unread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MarkAllAsReadRequest`](../interfaces/MarkAllAsReadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### markAllAsReadRaw

▸ **markAllAsReadRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Sets read state for all emails, optionally scoped to one inbox. Use `read=false` to reset unread state in bulk.
Mark all emails as read or unread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MarkAllAsReadRequest`](../interfaces/MarkAllAsReadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### markAsRead

▸ **markAsRead**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

Sets read state for one email. Useful when implementing custom mailbox workflows that treat viewed messages as unread.
Mark an email as read or unread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MarkAsReadRequest`](../interfaces/MarkAsReadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

___

### markAsReadRaw

▸ **markAsReadRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

Sets read state for one email. Useful when implementing custom mailbox workflows that treat viewed messages as unread.
Mark an email as read or unread

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`MarkAsReadRequest`](../interfaces/MarkAsReadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

___

### replyToEmail

▸ **replyToEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Sends a reply using the original conversation context (subject/thread headers). Reply target resolution honors sender/reply-to semantics.
Reply to an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplyToEmailRequest`](../interfaces/ReplyToEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### replyToEmailRaw

▸ **replyToEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Sends a reply using the original conversation context (subject/thread headers). Reply target resolution honors sender/reply-to semantics.
Reply to an email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ReplyToEmailRequest`](../interfaces/ReplyToEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

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

### searchEmails

▸ **searchEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

Searches emails by sender/recipient/address/subject/id fields and returns paginated matches. Does not perform full-text body search.
Get all emails by search criteria. Return in paginated form.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchEmailsRequest`](../interfaces/SearchEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

___

### searchEmailsRaw

▸ **searchEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

Searches emails by sender/recipient/address/subject/id fields and returns paginated matches. Does not perform full-text body search.
Get all emails by search criteria. Return in paginated form.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchEmailsRequest`](../interfaces/SearchEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>\>

___

### sendEmailSourceOptional

▸ **sendEmailSourceOptional**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Sends an email from an existing inbox, or creates a temporary inbox when `inboxId` is not provided. Supports `useDomainPool` and `virtualSend` inbox creation behavior for convenience sends.
Send email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailSourceOptionalRequest`](../interfaces/SendEmailSourceOptionalRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### sendEmailSourceOptionalRaw

▸ **sendEmailSourceOptionalRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Sends an email from an existing inbox, or creates a temporary inbox when `inboxId` is not provided. Supports `useDomainPool` and `virtualSend` inbox creation behavior for convenience sends.
Send email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailSourceOptionalRequest`](../interfaces/SendEmailSourceOptionalRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### setEmailFavourited

▸ **setEmailFavourited**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Sets favourite state for an email for dashboard/search workflows.
Set email favourited state

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetEmailFavouritedRequest`](../interfaces/SetEmailFavouritedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### setEmailFavouritedRaw

▸ **setEmailFavouritedRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Sets favourite state for an email for dashboard/search workflows.
Set email favourited state

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SetEmailFavouritedRequest`](../interfaces/SetEmailFavouritedRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### validateEmail

▸ **validateEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`ValidationDto`](../interfaces/ValidationDto.md)\>

Runs HTML validation on the email body when HTML is present. Non-HTML emails are treated as valid for this check.
Validate email HTML contents

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidateEmailRequest`](../interfaces/ValidateEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ValidationDto`](../interfaces/ValidationDto.md)\>

___

### validateEmailRaw

▸ **validateEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ValidationDto`](../interfaces/ValidationDto.md)\>\>

Runs HTML validation on the email body when HTML is present. Non-HTML emails are treated as valid for this check.
Validate email HTML contents

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ValidateEmailRequest`](../interfaces/ValidateEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ValidationDto`](../interfaces/ValidationDto.md)\>\>

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

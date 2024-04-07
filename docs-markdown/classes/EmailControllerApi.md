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
- [getEmailContentMatch](EmailControllerApi.md#getemailcontentmatch)
- [getEmailContentMatchRaw](EmailControllerApi.md#getemailcontentmatchraw)
- [getEmailContentPart](EmailControllerApi.md#getemailcontentpart)
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
- [getEmailTextLines](EmailControllerApi.md#getemailtextlines)
- [getEmailTextLinesRaw](EmailControllerApi.md#getemailtextlinesraw)
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
- [markAsRead](EmailControllerApi.md#markasread)
- [markAsReadRaw](EmailControllerApi.md#markasreadraw)
- [replyToEmail](EmailControllerApi.md#replytoemail)
- [replyToEmailRaw](EmailControllerApi.md#replytoemailraw)
- [request](EmailControllerApi.md#request)
- [searchEmails](EmailControllerApi.md#searchemails)
- [searchEmailsRaw](EmailControllerApi.md#searchemailsraw)
- [sendEmailSourceOptional](EmailControllerApi.md#sendemailsourceoptional)
- [sendEmailSourceOptionalRaw](EmailControllerApi.md#sendemailsourceoptionalraw)
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

Apply RFC3501 section-2.3.2 IMAP flag operations on an email
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

Apply RFC3501 section-2.3.2 IMAP flag operations on an email
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

Can user send email to given recipient or is the recipient blocked
Check if email can be sent and options are valid.

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

Can user send email to given recipient or is the recipient blocked
Check if email can be sent and options are valid.

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

Find dead links, broken images, and spelling mistakes in email body. Will call included links via HTTP so do not invoke if your links are sensitive or stateful. Any resource that returns a 4xx or 5xx response or is not reachable via HEAD or GET HTTP operations will be considered unhealthy.
Detect broken links, spelling, and images in email content

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

Detect HTML and CSS features inside an email body and return a report of email client support across different platforms and versions.
Show which mail clients support the HTML and CSS features used in an email body.

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

Detect HTML and CSS features inside an email body and return a report of email client support across different platforms and versions.
Show which mail clients support the HTML and CSS features used in an email body.

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

Find dead links, broken images, and spelling mistakes in email body. Will call included links via HTTP so do not invoke if your links are sensitive or stateful. Any resource that returns a 4xx or 5xx response or is not reachable via HEAD or GET HTTP operations will be considered unhealthy.
Detect broken links, spelling, and images in email content

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

Evaluate the features used in an email body and return a report of email client support across different platforms and versions.
Show which email programs and devices support the features used in an email body.

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

Evaluate the features used in an email body and return a report of email client support across different platforms and versions.
Show which email programs and devices support the features used in an email body.

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

Deletes all emails in your account. Be careful as emails cannot be recovered
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

Deletes all emails in your account. Be careful as emails cannot be recovered
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

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
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

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
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

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
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

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
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

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
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

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
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

Returns the specified email body for a given email as a string
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

Returns the specified email body for a given email as a stream / array of bytes.
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

Returns the specified email body for a given email as a stream / array of bytes.
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

Returns the specified email body for a given email as a string
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

Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
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

Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
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

Returns the metadata such as name and content-type for a given attachment and email.
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

Returns the metadata such as name and content-type for a given attachment and email.
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

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.

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

Returns an array of attachment metadata such as name and content-type for a given email if present.
Get all email attachment metadata. Metadata includes name and size of attachments.

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

Returns an array of attachment metadata such as name and content-type for a given email if present.
Get all email attachment metadata. Metadata includes name and size of attachments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailAttachmentsRequest`](../interfaces/GetEmailAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>\>

___

### getEmailContentMatch

▸ **getEmailContentMatch**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailContentMatchResult`](../interfaces/EmailContentMatchResult.md)\>

Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `[\'code is: 123456\', \'123456\']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns.
Get email content regex pattern match results. Runs regex against email body and returns match groups.

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

Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `[\'code is: 123456\', \'123456\']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns.
Get email content regex pattern match results. Runs regex against email body and returns match groups.

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

Get email body content parts from a multipart email message for a given content type
Get email content part by content type

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailContentPartRequest`](../interfaces/GetEmailContentPartRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailContentPartResult`](../interfaces/EmailContentPartResult.md)\>

___

### getEmailContentPartRaw

▸ **getEmailContentPartRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailContentPartResult`](../interfaces/EmailContentPartResult.md)\>\>

Get email body content parts from a multipart email message for a given content type
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

▸ **getEmailCount**(`initOverrides?`): `Promise`<[`CountDto`](../interfaces/CountDto.md)\>

Get email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CountDto`](../interfaces/CountDto.md)\>

___

### getEmailCountRaw

▸ **getEmailCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

Get email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CountDto`](../interfaces/CountDto.md)\>\>

___

### getEmailHTML

▸ **getEmailHTML**(`requestParameters`, `initOverrides?`): `Promise`<`string`\>

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`. Returns content-type `text/html;charset=utf-8` so you must call expecting that content response not JSON. For JSON response see the `getEmailHTMLJson` method.
Get email content as HTML. For displaying emails in browser context.

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

Retrieve email content as HTML response. Decodes quoted-printable entities and converts charset to UTF-8. Returns content-type `application/json;charset=utf-8` so you must call expecting that content response not JSON.
Get email content as HTML in JSON wrapper. For fetching entity decoded HTML content

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

Retrieve email content as HTML response. Decodes quoted-printable entities and converts charset to UTF-8. Returns content-type `application/json;charset=utf-8` so you must call expecting that content response not JSON.
Get email content as HTML in JSON wrapper. For fetching entity decoded HTML content

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

Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
Parse and return text from an email, stripping HTML and decoding encoded characters

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

Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
Parse and return text from an email, stripping HTML and decoding encoded characters

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

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`. Returns content-type `text/html;charset=utf-8` so you must call expecting that content response not JSON. For JSON response see the `getEmailHTMLJson` method.
Get email content as HTML. For displaying emails in browser context.

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

HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes
Parse and return list of links found in an email (only works for HTML content)

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

HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes
Parse and return list of links found in an email (only works for HTML content)

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

Get a list of URLs for email content as text/html or raw SMTP message for viewing the message in a browser.
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

Get a list of URLs for email content as text/html or raw SMTP message for viewing the message in a browser.
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

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.

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

Capture image of email screenshot and return as base64 encoded string. Useful for embedding in HTML. Be careful as this may contain sensitive information.
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

Capture image of email screenshot and return as base64 encoded string. Useful for embedding in HTML. Be careful as this may contain sensitive information.
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

Returns binary octet-stream of screenshot of the given email
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

Returns binary octet-stream of screenshot of the given email
Take a screenshot of an email in a browser

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailScreenshotAsBinaryRequest`](../interfaces/GetEmailScreenshotAsBinaryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### getEmailTextLines

▸ **getEmailTextLines**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.
Parse and return text from an email, stripping HTML and decoding encoded characters

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

Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.
Parse and return text from an email, stripping HTML and decoding encoded characters

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetEmailTextLinesRequest`](../interfaces/GetEmailTextLinesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>\>

___

### getEmailsOffsetPaginated

▸ **getEmailsOffsetPaginated**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
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

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
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

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
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

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
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

Get gravatar url for email address

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

Get gravatar url for email address

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

Get the newest email in all inboxes or in a passed set of inbox IDs
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

Get the newest email in all inboxes or in a passed set of inbox IDs
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

Get the newest email in all inboxes or in a passed set of inbox IDs
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

Get the newest email in all inboxes or in a passed set of inbox IDs
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

By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
Get all organization emails. List team or shared test email accounts

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

By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
Get all organization emails. List team or shared test email accounts

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

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
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

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
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

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
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

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
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

▸ **getUnreadEmailCount**(`initOverrides?`): `Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response
Get unread email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

___

### getUnreadEmailCountRaw

▸ **getUnreadEmailCountRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnreadCount`](../interfaces/UnreadCount.md)\>\>

Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response
Get unread email count

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`UnreadCount`](../interfaces/UnreadCount.md)\>\>

___

### markAsRead

▸ **markAsRead**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread
Mark an email as read on unread

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

Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread
Mark an email as read on unread

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

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
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

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
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

Search emails by given criteria return matches in paginated format. Searches against email recipients, sender, subject, email address and ID. Does not search email body
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

Search emails by given criteria return matches in paginated format. Searches against email recipients, sender, subject, email address and ID. Does not search email body
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

Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
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

Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
Send email

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SendEmailSourceOptionalRequest`](../interfaces/SendEmailSourceOptionalRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### validateEmail

▸ **validateEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`ValidationDto`](../interfaces/ValidationDto.md)\>

Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.
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

Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.
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

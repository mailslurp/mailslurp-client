[MailSlurp JS](../README.md) / EmailControllerApi

# Class: EmailControllerApi

EmailControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`EmailControllerApi`**

## Table of contents

### Constructors

- [constructor](EmailControllerApi.md#constructor)

### Properties

- [basePath](EmailControllerApi.md#basepath)
- [configuration](EmailControllerApi.md#configuration)
- [fetch](EmailControllerApi.md#fetch)

### Methods

- [deleteAllEmails](EmailControllerApi.md#deleteallemails)
- [deleteEmail](EmailControllerApi.md#deleteemail)
- [downloadAttachment](EmailControllerApi.md#downloadattachment)
- [downloadAttachmentBase64](EmailControllerApi.md#downloadattachmentbase64)
- [downloadBody](EmailControllerApi.md#downloadbody)
- [downloadBodyBytes](EmailControllerApi.md#downloadbodybytes)
- [forwardEmail](EmailControllerApi.md#forwardemail)
- [getAttachmentMetaData](EmailControllerApi.md#getattachmentmetadata)
- [getAttachments1](EmailControllerApi.md#getattachments1)
- [getEmail](EmailControllerApi.md#getemail)
- [getEmailContentMatch](EmailControllerApi.md#getemailcontentmatch)
- [getEmailHTML](EmailControllerApi.md#getemailhtml)
- [getEmailHTMLQuery](EmailControllerApi.md#getemailhtmlquery)
- [getEmailLinks](EmailControllerApi.md#getemaillinks)
- [getEmailTextLines](EmailControllerApi.md#getemailtextlines)
- [getEmailsPaginated](EmailControllerApi.md#getemailspaginated)
- [getGravatarUrlForEmailAddress](EmailControllerApi.md#getgravatarurlforemailaddress)
- [getLatestEmail](EmailControllerApi.md#getlatestemail)
- [getLatestEmailInInbox](EmailControllerApi.md#getlatestemailininbox)
- [getOrganizationEmailsPaginated](EmailControllerApi.md#getorganizationemailspaginated)
- [getRawEmailContents](EmailControllerApi.md#getrawemailcontents)
- [getRawEmailJson](EmailControllerApi.md#getrawemailjson)
- [getUnreadEmailCount](EmailControllerApi.md#getunreademailcount)
- [markAsRead](EmailControllerApi.md#markasread)
- [replyToEmail](EmailControllerApi.md#replytoemail)
- [sendEmailSourceOptional](EmailControllerApi.md#sendemailsourceoptional)
- [validateEmail](EmailControllerApi.md#validateemail)

## Constructors

### constructor

• **new EmailControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### deleteAllEmails

▸ **deleteAllEmails**(`options?`): `Promise`<`Response`\>

Deletes all emails in your account. Be careful as emails cannot be recovered

**`summary`** Delete all emails in all inboxes.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:16535](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16535)

___

### deleteEmail

▸ **deleteEmail**(`emailId`, `options?`): `Promise`<`Response`\>

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

**`summary`** Delete an email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email to delete |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:16549](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16549)

___

### downloadAttachment

▸ **downloadAttachment**(`attachmentId`, `emailId`, `apiKey?`, `options?`): `Promise`<`string`\>

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `emailId` | `string` | ID of email |
| `apiKey?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:16566](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16566)

___

### downloadAttachmentBase64

▸ **downloadAttachmentBase64**(`attachmentId`, `emailId`, `options?`): `Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.

**`summary`** Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<[`DownloadAttachmentDto`](../interfaces/DownloadAttachmentDto.md)\>

#### Defined in

[src/generated/api.ts:16589](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16589)

___

### downloadBody

▸ **downloadBody**(`emailId`, `options?`): `Promise`<`string`\>

Returns the specified email body for a given email as a string

**`summary`** Get email body as string. Returned as `plain/text` with content type header.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:16611](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16611)

___

### downloadBodyBytes

▸ **downloadBodyBytes**(`emailId`, `options?`): `Promise`<`string`\>

Returns the specified email body for a given email as a stream / array of bytes.

**`summary`** Get email body in bytes. Returned as `octet-stream` with content type header.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:16626](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16626)

___

### forwardEmail

▸ **forwardEmail**(`emailId`, `forwardEmailOptions`, `options?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.

**`summary`** Forward email to recipients

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email |
| `forwardEmailOptions` | [`ForwardEmailOptions`](../interfaces/ForwardEmailOptions.md) | forwardEmailOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

#### Defined in

[src/generated/api.ts:16642](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16642)

___

### getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`, `emailId`, `options?`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

Returns the metadata such as name and content-type for a given attachment and email.

**`summary`** Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentId` | `string` | ID of attachment |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)\>

#### Defined in

[src/generated/api.ts:16663](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16663)

___

### getAttachments1

▸ **getAttachments1**(`emailId`, `options?`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>

Returns an array of attachment metadata such as name and content-type for a given email if present.

**`summary`** Get all email attachment metadata. Metadata includes name and size of attachments.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>

#### Defined in

[src/generated/api.ts:16683](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16683)

___

### getEmail

▸ **getEmail**(`emailId`, `decode?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

**`summary`** Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |
| `decode?` | `boolean` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/generated/api.ts:16699](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16699)

___

### getEmailContentMatch

▸ **getEmailContentMatch**(`contentMatchOptions`, `emailId`, `options?`): `Promise`<[`EmailContentMatchResult`](../interfaces/EmailContentMatchResult.md)\>

Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns.

**`summary`** Get email content regex pattern match results. Runs regex against email body and returns match groups.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentMatchOptions` | [`ContentMatchOptions`](../interfaces/ContentMatchOptions.md) | contentMatchOptions |
| `emailId` | `string` | ID of email to match against |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailContentMatchResult`](../interfaces/EmailContentMatchResult.md)\>

#### Defined in

[src/generated/api.ts:16716](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16716)

___

### getEmailHTML

▸ **getEmailHTML**(`emailId`, `decode?`, `options?`): `Promise`<`string`\>

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`

**`summary`** Get email content as HTML. For displaying emails in browser context.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |
| `decode?` | `boolean` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:16737](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16737)

___

### getEmailHTMLQuery

▸ **getEmailHTMLQuery**(`emailId`, `htmlSelector?`, `options?`): `Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors

**`summary`** Parse and return text from an email, stripping HTML and decoding encoded characters

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email to perform HTML query on |
| `htmlSelector?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

#### Defined in

[src/generated/api.ts:16754](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16754)

___

### getEmailLinks

▸ **getEmailLinks**(`emailId`, `options?`): `Promise`<[`EmailLinksResult`](../interfaces/EmailLinksResult.md)\>

HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes

**`summary`** Parse and return list of links found in an email (only works for HTML content)

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email to fetch text for |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailLinksResult`](../interfaces/EmailLinksResult.md)\>

#### Defined in

[src/generated/api.ts:16774](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16774)

___

### getEmailTextLines

▸ **getEmailTextLines**(`emailId`, `decodeHtmlEntities?`, `lineSeparator?`, `options?`): `Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.

**`summary`** Parse and return text from an email, stripping HTML and decoding encoded characters

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email to fetch text for |
| `decodeHtmlEntities?` | `boolean` | - |
| `lineSeparator?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailTextLinesResult`](../interfaces/EmailTextLinesResult.md)\>

#### Defined in

[src/generated/api.ts:16791](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16791)

___

### getEmailsPaginated

▸ **getEmailsPaginated**(`before?`, `inboxId?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `unreadOnly?`, `options?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`summary`** Get all emails in all inboxes in paginated form. Email API list all.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `inboxId?` | `string`[] |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `unreadOnly?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:16820](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16820)

___

### getGravatarUrlForEmailAddress

▸ **getGravatarUrlForEmailAddress**(`emailAddress`, `size?`, `options?`): `Promise`<[`GravatarUrl`](../interfaces/GravatarUrl.md)\>

**`summary`** Get gravatar url for email address

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailAddress` | `string` | emailAddress |
| `size?` | `string` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`GravatarUrl`](../interfaces/GravatarUrl.md)\>

#### Defined in

[src/generated/api.ts:16853](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16853)

___

### getLatestEmail

▸ **getLatestEmail**(`inboxIds?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Get the newest email in all inboxes or in a passed set of inbox IDs

**`summary`** Get latest email in all inboxes. Most recently received.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxIds?` | `string`[] |
| `options?` | `any` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/generated/api.ts:16875](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16875)

___

### getLatestEmailInInbox

▸ **getLatestEmailInInbox**(`inboxId?`, `options?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Get the newest email in all inboxes or in a passed set of inbox IDs

**`summary`** Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |
| `options?` | `any` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

#### Defined in

[src/generated/api.ts:16890](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16890)

___

### getOrganizationEmailsPaginated

▸ **getOrganizationEmailsPaginated**(`before?`, `inboxId?`, `page?`, `searchFilter?`, `since?`, `size?`, `sort?`, `unreadOnly?`, `options?`): `Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`summary`** Get all organization emails. List team or shared test email accounts

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `before?` | `Date` |
| `inboxId?` | `string`[] |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `since?` | `Date` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `unreadOnly?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageEmailProjection`](../interfaces/PageEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:16912](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16912)

___

### getRawEmailContents

▸ **getRawEmailContents**(`emailId`, `options?`): `Promise`<`string`\>

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

**`summary`** Get raw email string. Returns unparsed raw SMTP message with headers and body.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/generated/api.ts:16946](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16946)

___

### getRawEmailJson

▸ **getRawEmailJson**(`emailId`, `options?`): `Promise`<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response

**`summary`** Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<[`RawEmailJson`](../interfaces/RawEmailJson.md)\>

#### Defined in

[src/generated/api.ts:16961](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16961)

___

### getUnreadEmailCount

▸ **getUnreadEmailCount**(`options?`): `Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response

**`summary`** Get unread email count

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`UnreadCount`](../interfaces/UnreadCount.md)\>

#### Defined in

[src/generated/api.ts:16975](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16975)

___

### markAsRead

▸ **markAsRead**(`emailId`, `read?`, `options?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread

**`summary`** Mark an email as read on unread

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | emailId |
| `read?` | `boolean` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

#### Defined in

[src/generated/api.ts:16990](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L16990)

___

### replyToEmail

▸ **replyToEmail**(`emailId`, `replyToEmailOptions`, `options?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.

**`summary`** Reply to an email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of the email that should be replied to |
| `replyToEmailOptions` | [`ReplyToEmailOptions`](../interfaces/ReplyToEmailOptions.md) | replyToEmailOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

#### Defined in

[src/generated/api.ts:17007](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L17007)

___

### sendEmailSourceOptional

▸ **sendEmailSourceOptional**(`inboxId?`, `sendEmailOptions?`, `useDomainPool?`, `options?`): `Promise`<`Response`\>

Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.

**`summary`** Send email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `inboxId?` | `string` |
| `sendEmailOptions?` | [`SendEmailOptions`](../interfaces/SendEmailOptions.md) |
| `useDomainPool?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:17029](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L17029)

___

### validateEmail

▸ **validateEmail**(`emailId`, `options?`): `Promise`<[`ValidationDto`](../interfaces/ValidationDto.md)\>

Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.

**`summary`** Validate email HTML contents

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emailId` | `string` | ID of email |
| `options?` | `any` | - |

#### Returns

`Promise`<[`ValidationDto`](../interfaces/ValidationDto.md)\>

#### Defined in

[src/generated/api.ts:17051](https://github.com/mailslurp/mailslurp-client/blob/004c609/src/generated/api.ts#L17051)

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / EmailControllerApi

# Class: EmailControllerApi

EmailControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **EmailControllerApi**

## Index

### Constructors

* [constructor](emailcontrollerapi.md#constructor)

### Properties

* [basePath](emailcontrollerapi.md#basepath)
* [configuration](emailcontrollerapi.md#configuration)
* [fetch](emailcontrollerapi.md#fetch)

### Methods

* [deleteAllEmails](emailcontrollerapi.md#deleteallemails)
* [deleteEmail](emailcontrollerapi.md#deleteemail)
* [downloadAttachment](emailcontrollerapi.md#downloadattachment)
* [downloadAttachmentBase64](emailcontrollerapi.md#downloadattachmentbase64)
* [forwardEmail](emailcontrollerapi.md#forwardemail)
* [getAttachmentMetaData](emailcontrollerapi.md#getattachmentmetadata)
* [getAttachments](emailcontrollerapi.md#getattachments)
* [getEmail](emailcontrollerapi.md#getemail)
* [getEmailContentMatch](emailcontrollerapi.md#getemailcontentmatch)
* [getEmailHTML](emailcontrollerapi.md#getemailhtml)
* [getEmailHTMLQuery](emailcontrollerapi.md#getemailhtmlquery)
* [getEmailTextLines](emailcontrollerapi.md#getemailtextlines)
* [getEmailsPaginated](emailcontrollerapi.md#getemailspaginated)
* [getRawEmailContents](emailcontrollerapi.md#getrawemailcontents)
* [getRawEmailJson](emailcontrollerapi.md#getrawemailjson)
* [getUnreadEmailCount](emailcontrollerapi.md#getunreademailcount)
* [replyToEmail](emailcontrollerapi.md#replytoemail)
* [validateEmail](emailcontrollerapi.md#validateemail)

## Constructors

### constructor

\+ **new EmailControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [EmailControllerApi](emailcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [EmailControllerApi](emailcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L62)*

## Methods

### deleteAllEmails

▸ **deleteAllEmails**(`options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:10185](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10185)*

Deletes all emails in your account. Be careful as emails cannot be recovered

**`summary`** Delete all emails

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<Response>

___

### deleteEmail

▸ **deleteEmail**(`emailId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:10199](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10199)*

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

**`summary`** Delete an email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email to delete |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### downloadAttachment

▸ **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): Promise\<string>

*Defined in [src/generated/api.ts:10216](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10216)*

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | ID of attachment |
`emailId` | string | ID of email |
`apiKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<string>

___

### downloadAttachmentBase64

▸ **downloadAttachmentBase64**(`attachmentId`: string, `emailId`: string, `options?`: any): Promise\<[DownloadAttachmentDto](../interfaces/downloadattachmentdto.md)>

*Defined in [src/generated/api.ts:10239](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10239)*

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.

**`summary`** Get email attachment as base64 encoded string (alternative to binary responses)

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | ID of attachment |
`emailId` | string | ID of email |
`options?` | any | - |

**Returns:** Promise\<[DownloadAttachmentDto](../interfaces/downloadattachmentdto.md)>

___

### forwardEmail

▸ **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/forwardemailoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:10261](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10261)*

Forward an existing email to new recipients.

**`summary`** Forward email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email |
`forwardEmailOptions` | [ForwardEmailOptions](../interfaces/forwardemailoptions.md) | forwardEmailOptions |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in [src/generated/api.ts:10282](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10282)*

Returns the metadata such as name and content-type for a given attachment and email.

**`summary`** Get email attachment metadata

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | ID of attachment |
`emailId` | string | ID of email |
`options?` | any | - |

**Returns:** Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

___

### getAttachments

▸ **getAttachments**(`emailId`: string, `options?`: any): Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)[]>

*Defined in [src/generated/api.ts:10302](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10302)*

Returns an array of attachment metadata such as name and content-type for a given email if present.

**`summary`** Get all email attachment metadata

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email |
`options?` | any | - |

**Returns:** Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)[]>

___

### getEmail

▸ **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): Promise\<[Email](../interfaces/email.md)>

*Defined in [src/generated/api.ts:10318](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10318)*

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

**`summary`** Get email content

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** Promise\<[Email](../interfaces/email.md)>

___

### getEmailContentMatch

▸ **getEmailContentMatch**(`contentMatchOptions`: [ContentMatchOptions](../interfaces/contentmatchoptions.md), `emailId`: string, `options?`: any): Promise\<[EmailContentMatchResult](../interfaces/emailcontentmatchresult.md)>

*Defined in [src/generated/api.ts:10335](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10335)*

Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns.

**`summary`** Get email content regex pattern match results. Runs regex against email body and returns match groups.

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`contentMatchOptions` | [ContentMatchOptions](../interfaces/contentmatchoptions.md) | contentMatchOptions |
`emailId` | string | ID of email to match against |
`options?` | any | - |

**Returns:** Promise\<[EmailContentMatchResult](../interfaces/emailcontentmatchresult.md)>

___

### getEmailHTML

▸ **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): Promise\<string>

*Defined in [src/generated/api.ts:10356](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10356)*

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`

**`summary`** Get email content as HTML

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** Promise\<string>

___

### getEmailHTMLQuery

▸ **getEmailHTMLQuery**(`emailId`: string, `htmlSelector?`: string, `options?`: any): Promise\<[EmailTextLinesResult](../interfaces/emailtextlinesresult.md)>

*Defined in [src/generated/api.ts:10373](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10373)*

Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors

**`summary`** Parse and return text from an email, stripping HTML and decoding encoded characters

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email to perform HTML query on |
`htmlSelector?` | string | - |
`options?` | any | - |

**Returns:** Promise\<[EmailTextLinesResult](../interfaces/emailtextlinesresult.md)>

___

### getEmailTextLines

▸ **getEmailTextLines**(`emailId`: string, `decodeHtmlEntities?`: boolean, `lineSeparator?`: string, `options?`: any): Promise\<[EmailTextLinesResult](../interfaces/emailtextlinesresult.md)>

*Defined in [src/generated/api.ts:10395](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10395)*

Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.

**`summary`** Parse and return text from an email, stripping HTML and decoding encoded characters

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email to fetch text for |
`decodeHtmlEntities?` | boolean | - |
`lineSeparator?` | string | - |
`options?` | any | - |

**Returns:** Promise\<[EmailTextLinesResult](../interfaces/emailtextlinesresult.md)>

___

### getEmailsPaginated

▸ **getEmailsPaginated**(`inboxId?`: Array\<string>, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `unreadOnly?`: boolean, `options?`: any): Promise\<[PageEmailProjection](../interfaces/pageemailprojection.md)>

*Defined in [src/generated/api.ts:10421](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10421)*

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`summary`** Get all emails

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | Array\<string> |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** Promise\<[PageEmailProjection](../interfaces/pageemailprojection.md)>

___

### getRawEmailContents

▸ **getRawEmailContents**(`emailId`: string, `options?`: any): Promise\<string>

*Defined in [src/generated/api.ts:10447](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10447)*

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

**`summary`** Get raw email string

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email |
`options?` | any | - |

**Returns:** Promise\<string>

___

### getRawEmailJson

▸ **getRawEmailJson**(`emailId`: string, `options?`: any): Promise\<[RawEmailJson](../interfaces/rawemailjson.md)>

*Defined in [src/generated/api.ts:10462](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10462)*

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response

**`summary`** Get raw email in JSON

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email |
`options?` | any | - |

**Returns:** Promise\<[RawEmailJson](../interfaces/rawemailjson.md)>

___

### getUnreadEmailCount

▸ **getUnreadEmailCount**(`options?`: any): Promise\<[UnreadCount](../interfaces/unreadcount.md)>

*Defined in [src/generated/api.ts:10476](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10476)*

Get number of emails unread

**`summary`** Get unread email count

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[UnreadCount](../interfaces/unreadcount.md)>

___

### replyToEmail

▸ **replyToEmail**(`emailId`: string, `replyToEmailOptions`: [ReplyToEmailOptions](../modules/replytoemailoptions.md), `options?`: any): Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

*Defined in [src/generated/api.ts:10491](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10491)*

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.

**`summary`** Reply to an email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of the email that should be replied to |
`replyToEmailOptions` | [ReplyToEmailOptions](../modules/replytoemailoptions.md) | replyToEmailOptions |
`options?` | any | - |

**Returns:** Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

___

### validateEmail

▸ **validateEmail**(`emailId`: string, `options?`: any): Promise\<[ValidationDto](../interfaces/validationdto.md)>

*Defined in [src/generated/api.ts:10511](https://github.com/mailslurp/mailslurp-client/blob/65d1444/src/generated/api.ts#L10511)*

Validate the HTML content of email if HTML is found. Considered valid if no HTML.

**`summary`** Validate email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | ID of email |
`options?` | any | - |

**Returns:** Promise\<[ValidationDto](../interfaces/validationdto.md)>

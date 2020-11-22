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
* [getEmailHTML](emailcontrollerapi.md#getemailhtml)
* [getEmailsPaginated](emailcontrollerapi.md#getemailspaginated)
* [getRawEmailContents](emailcontrollerapi.md#getrawemailcontents)
* [getRawEmailJson](emailcontrollerapi.md#getrawemailjson)
* [getUnreadEmailCount](emailcontrollerapi.md#getunreademailcount)
* [validateEmail](emailcontrollerapi.md#validateemail)

## Constructors

### constructor

\+ **new EmailControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [EmailControllerApi](emailcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L62)*

## Methods

### deleteAllEmails

▸ **deleteAllEmails**(`options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:8028](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8028)*

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

*Defined in [src/generated/api.ts:8042](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8042)*

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

*Defined in [src/generated/api.ts:8059](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8059)*

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

*Defined in [src/generated/api.ts:8082](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8082)*

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

*Defined in [src/generated/api.ts:8104](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8104)*

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

*Defined in [src/generated/api.ts:8125](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8125)*

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

*Defined in [src/generated/api.ts:8145](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8145)*

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

*Defined in [src/generated/api.ts:8161](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8161)*

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

### getEmailHTML

▸ **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): Promise\<string>

*Defined in [src/generated/api.ts:8178](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8178)*

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

### getEmailsPaginated

▸ **getEmailsPaginated**(`inboxId?`: Array\<string>, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `unreadOnly?`: boolean, `options?`: any): Promise\<[PageEmailProjection](../interfaces/pageemailprojection.md)>

*Defined in [src/generated/api.ts:8198](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8198)*

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

*Defined in [src/generated/api.ts:8224](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8224)*

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

*Defined in [src/generated/api.ts:8239](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8239)*

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

*Defined in [src/generated/api.ts:8253](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8253)*

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

### validateEmail

▸ **validateEmail**(`emailId`: string, `options?`: any): Promise\<[ValidationDto](../interfaces/validationdto.md)>

*Defined in [src/generated/api.ts:8267](https://github.com/mailslurp/mailslurp-client/blob/f5ab9d3/src/generated/api.ts#L8267)*

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

[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [EmailControllerApi](_generated_api_.emailcontrollerapi.md)

# Class: EmailControllerApi

EmailControllerApi - object-oriented interface

**`export`** 

**`class`** EmailControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **EmailControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.emailcontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.emailcontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.emailcontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.emailcontrollerapi.md#protected-fetch)

### Methods

* [deleteAllEmails](_generated_api_.emailcontrollerapi.md#deleteallemails)
* [deleteEmail](_generated_api_.emailcontrollerapi.md#deleteemail)
* [downloadAttachment](_generated_api_.emailcontrollerapi.md#downloadattachment)
* [forwardEmail](_generated_api_.emailcontrollerapi.md#forwardemail)
* [getAttachmentMetaData](_generated_api_.emailcontrollerapi.md#getattachmentmetadata)
* [getAttachments](_generated_api_.emailcontrollerapi.md#getattachments)
* [getEmail](_generated_api_.emailcontrollerapi.md#getemail)
* [getEmailHTML](_generated_api_.emailcontrollerapi.md#getemailhtml)
* [getEmailsPaginated](_generated_api_.emailcontrollerapi.md#getemailspaginated)
* [getRawEmailContents](_generated_api_.emailcontrollerapi.md#getrawemailcontents)
* [getRawEmailJson](_generated_api_.emailcontrollerapi.md#getrawemailjson)
* [getUnreadEmailCount](_generated_api_.emailcontrollerapi.md#getunreademailcount)
* [validateEmail](_generated_api_.emailcontrollerapi.md#validateemail)

## Constructors

###  constructor

\+ **new EmailControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[EmailControllerApi](_generated_api_.emailcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

Defined in src/generated/api.ts:57

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[EmailControllerApi](_generated_api_.emailcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

Defined in src/generated/api.ts:61

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

Defined in src/generated/api.ts:57

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

Defined in src/generated/api.ts:62

## Methods

###  deleteAllEmails

▸ **deleteAllEmails**(`options?`: any): *Promise‹Response›*

Defined in src/generated/api.ts:6522

Deletes all emails in your account. Be careful as emails cannot be recovered

**`summary`** Delete all emails

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string, `options?`: any): *Promise‹Response›*

Defined in src/generated/api.ts:6536

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

**`summary`** Delete an email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *Promise‹string›*

Defined in src/generated/api.ts:6553

Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Get email attachment bytes

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId |
`apiKey?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  forwardEmail

▸ **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options?`: any): *Promise‹Response›*

Defined in src/generated/api.ts:6576

Forward an existing email to new recipients.

**`summary`** Forward email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`forwardEmailOptions` | [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md) | forwardEmailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

Defined in src/generated/api.ts:6597

Returns the metadata such as name and content-type for a given attachment and email.

**`summary`** Get email attachment metadata

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

___

###  getAttachments

▸ **getAttachments**(`emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)[]›*

Defined in src/generated/api.ts:6617

Returns an array of attachment metadata such as name and content-type for a given email if present.

**`summary`** Get all email attachment metadata

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)[]›*

___

###  getEmail

▸ **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

Defined in src/generated/api.ts:6633

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

**`summary`** Get email content

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  getEmailHTML

▸ **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹string›*

Defined in src/generated/api.ts:6650

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`

**`summary`** Get email content as HTML

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  getEmailsPaginated

▸ **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

Defined in src/generated/api.ts:6670

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`summary`** Get all emails

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | Array‹string› |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

___

###  getRawEmailContents

▸ **getRawEmailContents**(`emailId`: string, `options?`: any): *Promise‹string›*

Defined in src/generated/api.ts:6696

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

**`summary`** Get raw email string

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  getRawEmailJson

▸ **getRawEmailJson**(`emailId`: string, `options?`: any): *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

Defined in src/generated/api.ts:6711

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response

**`summary`** Get raw email in JSON

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

___

###  getUnreadEmailCount

▸ **getUnreadEmailCount**(`options?`: any): *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

Defined in src/generated/api.ts:6725

Get number of emails unread

**`summary`** Get unread email count

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

___

###  validateEmail

▸ **validateEmail**(`emailId`: string, `options?`: any): *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

Defined in src/generated/api.ts:6739

Validate the HTML content of email if HTML is found. Considered valid if no HTML.

**`summary`** Validate email

**`throws`** {RequiredError}

**`memberof`** EmailControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

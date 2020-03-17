[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/EmailControllerApi"](../modules/_lib_apis_emailcontrollerapi_.md) › [EmailControllerApi](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md)

# Class: EmailControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **EmailControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#protected-configuration)

### Methods

* [deleteAllEmails](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#deleteallemails)
* [deleteAllEmailsRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#deleteallemailsraw)
* [deleteEmail](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#deleteemail)
* [deleteEmailRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#deleteemailraw)
* [downloadAttachment](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#downloadattachment)
* [downloadAttachmentRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#downloadattachmentraw)
* [forwardEmail](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#forwardemail)
* [forwardEmailRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#forwardemailraw)
* [getAttachmentMetaData](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getattachmentmetadata)
* [getAttachmentMetaDataRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getattachmentmetadataraw)
* [getAttachments](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getattachments)
* [getAttachmentsRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getattachmentsraw)
* [getEmail](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getemail)
* [getEmailHTML](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getemailhtml)
* [getEmailHTMLRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getemailhtmlraw)
* [getEmailRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getemailraw)
* [getEmailsPaginated](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getemailspaginated)
* [getEmailsPaginatedRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getemailspaginatedraw)
* [getRawEmailContents](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getrawemailcontents)
* [getRawEmailContentsRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getrawemailcontentsraw)
* [getRawEmailJson](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getrawemailjson)
* [getRawEmailJsonRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getrawemailjsonraw)
* [getUnreadEmailCount](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getunreademailcount)
* [getUnreadEmailCountRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#getunreademailcountraw)
* [request](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#protected-request)
* [validateEmail](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#validateemail)
* [validateEmailRaw](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#validateemailraw)
* [withMiddleware](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new EmailControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[EmailControllerApi](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[EmailControllerApi](_lib_apis_emailcontrollerapi_.emailcontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  deleteAllEmails

▸ **deleteAllEmails**(): *Promise‹void›*

*Defined in [src/lib/apis/EmailControllerApi.ts:127](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L127)*

Deletes all emails in your account. Be careful as emails cannot be recovered
Delete all emails

**Returns:** *Promise‹void›*

___

###  deleteAllEmailsRaw

▸ **deleteAllEmailsRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/EmailControllerApi.ts:102](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L102)*

Deletes all emails in your account. Be careful as emails cannot be recovered
Delete all emails

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  deleteEmail

▸ **deleteEmail**(`requestParameters`: [DeleteEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.deleteemailrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/EmailControllerApi.ts:175](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L175)*

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
Delete an email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.deleteemailrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteEmailRaw

▸ **deleteEmailRaw**(`requestParameters`: [DeleteEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.deleteemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/EmailControllerApi.ts:135](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L135)*

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
Delete an email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.deleteemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  downloadAttachment

▸ **downloadAttachment**(`requestParameters`: [DownloadAttachmentRequest](../interfaces/_lib_apis_emailcontrollerapi_.downloadattachmentrequest.md)): *Promise‹string›*

*Defined in [src/lib/apis/EmailControllerApi.ts:242](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L242)*

Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
Get email attachment bytes

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DownloadAttachmentRequest](../interfaces/_lib_apis_emailcontrollerapi_.downloadattachmentrequest.md) |

**Returns:** *Promise‹string›*

___

###  downloadAttachmentRaw

▸ **downloadAttachmentRaw**(`requestParameters`: [DownloadAttachmentRequest](../interfaces/_lib_apis_emailcontrollerapi_.downloadattachmentrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹string››*

*Defined in [src/lib/apis/EmailControllerApi.ts:183](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L183)*

Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
Get email attachment bytes

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DownloadAttachmentRequest](../interfaces/_lib_apis_emailcontrollerapi_.downloadattachmentrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹string››*

___

###  forwardEmail

▸ **forwardEmail**(`requestParameters`: [ForwardEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.forwardemailrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/EmailControllerApi.ts:308](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L308)*

Forward an existing email to new recipients.
Forward email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [ForwardEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.forwardemailrequest.md) |

**Returns:** *Promise‹void›*

___

###  forwardEmailRaw

▸ **forwardEmailRaw**(`requestParameters`: [ForwardEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.forwardemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/EmailControllerApi.ts:253](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L253)*

Forward an existing email to new recipients.
Forward email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [ForwardEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.forwardemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`requestParameters`: [GetAttachmentMetaDataRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentmetadatarequest.md)): *Promise‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)›*

*Defined in [src/lib/apis/EmailControllerApi.ts:373](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L373)*

Returns the metadata such as name and content-type for a given attachment and email.
Get email attachment metadata

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAttachmentMetaDataRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentmetadatarequest.md) |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)›*

___

###  getAttachmentMetaDataRaw

▸ **getAttachmentMetaDataRaw**(`requestParameters`: [GetAttachmentMetaDataRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentmetadatarequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)››*

*Defined in [src/lib/apis/EmailControllerApi.ts:316](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L316)*

Returns the metadata such as name and content-type for a given attachment and email.
Get email attachment metadata

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAttachmentMetaDataRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentmetadatarequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)››*

___

###  getAttachments

▸ **getAttachments**(`requestParameters`: [GetAttachmentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentsrequest.md)): *Promise‹Array‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)››*

*Defined in [src/lib/apis/EmailControllerApi.ts:426](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L426)*

Returns an array of attachment metadata such as name and content-type for a given email if present.
Get all email attachment metadata

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAttachmentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentsrequest.md) |

**Returns:** *Promise‹Array‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)››*

___

###  getAttachmentsRaw

▸ **getAttachmentsRaw**(`requestParameters`: [GetAttachmentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentsrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)›››*

*Defined in [src/lib/apis/EmailControllerApi.ts:384](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L384)*

Returns an array of attachment metadata such as name and content-type for a given email if present.
Get all email attachment metadata

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAttachmentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getattachmentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[AttachmentMetaData](../interfaces/_lib_models_attachmentmetadata_.attachmentmetadata.md)›››*

___

###  getEmail

▸ **getEmail**(`requestParameters`: [GetEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailrequest.md)): *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

*Defined in [src/lib/apis/EmailControllerApi.ts:483](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L483)*

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
Get email content

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailrequest.md) |

**Returns:** *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

___

###  getEmailHTML

▸ **getEmailHTML**(`requestParameters`: [GetEmailHTMLRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailhtmlrequest.md)): *Promise‹string›*

*Defined in [src/lib/apis/EmailControllerApi.ts:536](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L536)*

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
Get email content as HTML

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailHTMLRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailhtmlrequest.md) |

**Returns:** *Promise‹string›*

___

###  getEmailHTMLRaw

▸ **getEmailHTMLRaw**(`requestParameters`: [GetEmailHTMLRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailhtmlrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹string››*

*Defined in [src/lib/apis/EmailControllerApi.ts:492](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L492)*

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
Get email content as HTML

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailHTMLRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailhtmlrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹string››*

___

###  getEmailRaw

▸ **getEmailRaw**(`requestParameters`: [GetEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Email](../interfaces/_lib_models_email_.email.md)››*

*Defined in [src/lib/apis/EmailControllerApi.ts:437](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L437)*

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
Get email content

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Email](../interfaces/_lib_models_email_.email.md)››*

___

###  getEmailsPaginated

▸ **getEmailsPaginated**(`requestParameters`: [GetEmailsPaginatedRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailspaginatedrequest.md)): *Promise‹[PageEmailProjection](../interfaces/_lib_models_pageemailprojection_.pageemailprojection.md)›*

*Defined in [src/lib/apis/EmailControllerApi.ts:596](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L596)*

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
Get all emails

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailsPaginatedRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailspaginatedrequest.md) |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/_lib_models_pageemailprojection_.pageemailprojection.md)›*

___

###  getEmailsPaginatedRaw

▸ **getEmailsPaginatedRaw**(`requestParameters`: [GetEmailsPaginatedRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailspaginatedrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageEmailProjection](../interfaces/_lib_models_pageemailprojection_.pageemailprojection.md)››*

*Defined in [src/lib/apis/EmailControllerApi.ts:547](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L547)*

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
Get all emails

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailsPaginatedRequest](../interfaces/_lib_apis_emailcontrollerapi_.getemailspaginatedrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageEmailProjection](../interfaces/_lib_models_pageemailprojection_.pageemailprojection.md)››*

___

###  getRawEmailContents

▸ **getRawEmailContents**(`requestParameters`: [GetRawEmailContentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailcontentsrequest.md)): *Promise‹string›*

*Defined in [src/lib/apis/EmailControllerApi.ts:647](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L647)*

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
Get raw email string

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetRawEmailContentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailcontentsrequest.md) |

**Returns:** *Promise‹string›*

___

###  getRawEmailContentsRaw

▸ **getRawEmailContentsRaw**(`requestParameters`: [GetRawEmailContentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailcontentsrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹string››*

*Defined in [src/lib/apis/EmailControllerApi.ts:607](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L607)*

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
Get raw email string

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetRawEmailContentsRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailcontentsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹string››*

___

###  getRawEmailJson

▸ **getRawEmailJson**(`requestParameters`: [GetRawEmailJsonRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailjsonrequest.md)): *Promise‹[RawEmailJson](../interfaces/_lib_models_rawemailjson_.rawemailjson.md)›*

*Defined in [src/lib/apis/EmailControllerApi.ts:700](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L700)*

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
Get raw email in JSON

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetRawEmailJsonRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailjsonrequest.md) |

**Returns:** *Promise‹[RawEmailJson](../interfaces/_lib_models_rawemailjson_.rawemailjson.md)›*

___

###  getRawEmailJsonRaw

▸ **getRawEmailJsonRaw**(`requestParameters`: [GetRawEmailJsonRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailjsonrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[RawEmailJson](../interfaces/_lib_models_rawemailjson_.rawemailjson.md)››*

*Defined in [src/lib/apis/EmailControllerApi.ts:658](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L658)*

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
Get raw email in JSON

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetRawEmailJsonRequest](../interfaces/_lib_apis_emailcontrollerapi_.getrawemailjsonrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[RawEmailJson](../interfaces/_lib_models_rawemailjson_.rawemailjson.md)››*

___

###  getUnreadEmailCount

▸ **getUnreadEmailCount**(): *Promise‹[UnreadCount](../interfaces/_lib_models_unreadcount_.unreadcount.md)›*

*Defined in [src/lib/apis/EmailControllerApi.ts:738](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L738)*

Get number of emails unread
Get unread email count

**Returns:** *Promise‹[UnreadCount](../interfaces/_lib_models_unreadcount_.unreadcount.md)›*

___

###  getUnreadEmailCountRaw

▸ **getUnreadEmailCountRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[UnreadCount](../interfaces/_lib_models_unreadcount_.unreadcount.md)››*

*Defined in [src/lib/apis/EmailControllerApi.ts:711](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L711)*

Get number of emails unread
Get unread email count

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[UnreadCount](../interfaces/_lib_models_unreadcount_.unreadcount.md)››*

___

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *Promise‹Response›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[request](_lib_runtime_.baseapi.md#protected-request)*

*Defined in [src/lib/runtime.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  validateEmail

▸ **validateEmail**(`requestParameters`: [ValidateEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.validateemailrequest.md)): *Promise‹[ValidationDto](../interfaces/_lib_models_validationdto_.validationdto.md)›*

*Defined in [src/lib/apis/EmailControllerApi.ts:789](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L789)*

Validate the HTML content of email if HTML is found. Considered valid if no HTML.
Validate email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [ValidateEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.validateemailrequest.md) |

**Returns:** *Promise‹[ValidationDto](../interfaces/_lib_models_validationdto_.validationdto.md)›*

___

###  validateEmailRaw

▸ **validateEmailRaw**(`requestParameters`: [ValidateEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.validateemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[ValidationDto](../interfaces/_lib_models_validationdto_.validationdto.md)››*

*Defined in [src/lib/apis/EmailControllerApi.ts:747](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/EmailControllerApi.ts#L747)*

Validate the HTML content of email if HTML is found. Considered valid if no HTML.
Validate email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [ValidateEmailRequest](../interfaces/_lib_apis_emailcontrollerapi_.validateemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[ValidationDto](../interfaces/_lib_models_validationdto_.validationdto.md)››*

___

###  withMiddleware

▸ **withMiddleware**<**T**>(`this`: T, ...`middlewares`: [Middleware](../interfaces/_lib_runtime_.middleware.md)[]): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withMiddleware](_lib_runtime_.baseapi.md#withmiddleware)*

*Defined in [src/lib/runtime.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L30)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...middlewares` | [Middleware](../interfaces/_lib_runtime_.middleware.md)[] |

**Returns:** *T*

___

###  withPostMiddleware

▸ **withPostMiddleware**<**T**>(`this`: T, ...`postMiddlewares`: Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPostMiddleware](_lib_runtime_.baseapi.md#withpostmiddleware)*

*Defined in [src/lib/runtime.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L44)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...postMiddlewares` | Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)› |

**Returns:** *T*

___

###  withPreMiddleware

▸ **withPreMiddleware**<**T**>(`this`: T, ...`preMiddlewares`: Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPreMiddleware](_lib_runtime_.baseapi.md#withpremiddleware)*

*Defined in [src/lib/runtime.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L36)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)› |

**Returns:** *T*

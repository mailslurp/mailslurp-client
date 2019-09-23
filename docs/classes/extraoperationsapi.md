[MailSlurp Client](../README.md) > [ExtraOperationsApi](../classes/extraoperationsapi.md)

# Class: ExtraOperationsApi

ExtraOperationsApi - object-oriented interface

*__export__*: 

*__class__*: ExtraOperationsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ ExtraOperationsApi**

## Index

### Constructors

* [constructor](extraoperationsapi.md#constructor)

### Properties

* [basePath](extraoperationsapi.md#basepath)
* [configuration](extraoperationsapi.md#configuration)
* [fetch](extraoperationsapi.md#fetch)

### Methods

* [bulkCreateInboxes](extraoperationsapi.md#bulkcreateinboxes)
* [bulkDeleteInboxes](extraoperationsapi.md#bulkdeleteinboxes)
* [bulkSendEmails](extraoperationsapi.md#bulksendemails)
* [createDomain](extraoperationsapi.md#createdomain)
* [createInbox](extraoperationsapi.md#createinbox)
* [createWebhook](extraoperationsapi.md#createwebhook)
* [deleteDomain](extraoperationsapi.md#deletedomain)
* [deleteEmail1](extraoperationsapi.md#deleteemail1)
* [deleteInbox](extraoperationsapi.md#deleteinbox)
* [deleteWebhook](extraoperationsapi.md#deletewebhook)
* [downloadAttachment](extraoperationsapi.md#downloadattachment)
* [forwardEmail](extraoperationsapi.md#forwardemail)
* [getDomain](extraoperationsapi.md#getdomain)
* [getDomains](extraoperationsapi.md#getdomains)
* [getEmail](extraoperationsapi.md#getemail)
* [getEmails](extraoperationsapi.md#getemails)
* [getInbox](extraoperationsapi.md#getinbox)
* [getInboxes](extraoperationsapi.md#getinboxes)
* [getRawEmailContents](extraoperationsapi.md#getrawemailcontents)
* [getWebhooks](extraoperationsapi.md#getwebhooks)
* [sendEmail](extraoperationsapi.md#sendemail)
* [uploadAttachment](extraoperationsapi.md#uploadattachment)
* [uploadMultipartForm](extraoperationsapi.md#uploadmultipartform)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtraOperationsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/fetchapi.md)*): [ExtraOperationsApi](extraoperationsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) |
| `Optional` basePath | `string` |
| `Optional` fetch | [FetchAPI](../interfaces/fetchapi.md) |

**Returns:** [ExtraOperationsApi](extraoperationsapi.md)

___

## Properties

<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:47*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

___
<a id="fetch"></a>

### `<Protected>` fetch

**● fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:48*

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1627*

Enterprise Plan Required

*__summary__*: Bulk create Inboxes (email addresses)

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  Number of inboxes to be created in bulk |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(requestBody: *`Array`<`string`>*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1636*

Enterprise Plan Required

*__summary__*: Bulk Delete Inboxes

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| requestBody | `Array`<`string`> |  ids |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *[BulkSendEmailOptions](../interfaces/bulksendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1645*

Enterprise Plan Required

*__summary__*: Bulk Send Emails

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) |  bulkSendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="createdomain"></a>

###  createDomain

▸ **createDomain**(createDomainOptions: *[CreateDomainOptions](../interfaces/createdomainoptions.md)*, options?: *`any`*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1654*

Link a domain that you own with MailSlurp so you can create inboxes with it. Returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.

*__summary__*: Create Domain

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| createDomainOptions | [CreateDomainOptions](../interfaces/createdomainoptions.md) |  domainOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(emailAddress?: *`string`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1663*

Create a new inbox and with a ranmdomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

*__summary__*: Create an Inbox (email address)

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` emailAddress | `string` |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *[CreateWebhookOptions](../interfaces/createwebhookoptions.md)*, options?: *`any`*): `Promise`<[Webhook](../interfaces/webhook.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1673*

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.

*__summary__*: Attach a WebHook URL to an inbox

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| createWebhookOptions | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) |  webhookOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)>

___
<a id="deletedomain"></a>

###  deleteDomain

▸ **deleteDomain**(id: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1682*

*__summary__*: Delete a domain

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="deleteemail1"></a>

###  deleteEmail1

▸ **deleteEmail1**(emailId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1691*

Deletes an email and removes it from the inbox

*__summary__*: Delete Email

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1700*

Permanently delete an inbox and associated email address

*__summary__*: Delete Inbox / Email Address

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="deletewebhook"></a>

###  deleteWebhook

▸ **deleteWebhook**(inboxId: *`string`*, webhookId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1710*

*__summary__*: Delete and disable a WebHook for an Inbox

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| webhookId | `string` |  webhookId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="downloadattachment"></a>

###  downloadAttachment

▸ **downloadAttachment**(attachmentId: *`string`*, emailId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1720*

Returns the specified attachment for a given email as a byte stream (file download). Get the attachmentId from the email response. Requires enterprise account.

*__summary__*: Get email attachment

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| attachmentId | `string` |  attachmentId |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="forwardemail"></a>

###  forwardEmail

▸ **forwardEmail**(emailId: *`string`*, forwardEmailOptions: *[ForwardEmailOptions](../interfaces/forwardemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1730*

Forward email content to given recipients

*__summary__*: Forward Email

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| forwardEmailOptions | [ForwardEmailOptions](../interfaces/forwardemailoptions.md) |  forwardEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getdomain"></a>

###  getDomain

▸ **getDomain**(id: *`string`*, options?: *`any`*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1739*

Returns domain verification status and tokens

*__summary__*: Get a domain

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  id |
| `Optional` options | `any` |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="getdomains"></a>

###  getDomains

▸ **getDomains**(options?: *`any`*): `Promise`<[DomainPreview](../interfaces/domainpreview.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1747*

*__summary__*: Get domains

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[DomainPreview](../interfaces/domainpreview.md)[]>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*, options?: *`any`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1756*

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawMessage endpoint

*__summary__*: Get Email Content

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, limit?: *`number`*, minCount?: *`number`*, retryTimeout?: *`number`*, since?: *`Date`*, options?: *`any`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1769*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

*__summary__*: List Emails in an Inbox / EmailAddress

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  Id of inbox that emails belongs to |
| `Optional` limit | `number` |
| `Optional` minCount | `number` |
| `Optional` retryTimeout | `number` |
| `Optional` since | `Date` |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1778*

Returns an inbox's properties, including its email address and ID.

*__summary__*: Get Inbox / EmailAddress

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1786*

List the inboxes you have created

*__summary__*: List Inboxes / Email Addresses

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="getrawemailcontents"></a>

###  getRawEmailContents

▸ **getRawEmailContents**(emailId: *`string`*, options?: *`any`*): `Promise`<`string`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1795*

Returns a raw, unparsed and unprocessed email

*__summary__*: Get Raw Email Content

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`>

___
<a id="getwebhooks"></a>

###  getWebhooks

▸ **getWebhooks**(inboxId: *`string`*, options?: *`any`*): `Promise`<[Webhook](../interfaces/webhook.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1804*

*__summary__*: Get all WebHooks for an Inbox

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| `Optional` options | `any` |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)[]>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1814*

Send an email from the inbox's email address. Specify the email recipients and contents in the request body. See the `SendEmailOptions` for more information. Note the `inboxId` refers to the inbox's id NOT its email address

*__summary__*: Send Email

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="uploadattachment"></a>

###  uploadAttachment

▸ **uploadAttachment**(uploadAttachmentOptions: *[UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)*, options?: *`any`*): `Promise`<`string`[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1823*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.

*__summary__*: Upload an attachment for sending

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uploadAttachmentOptions | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |  uploadOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`[]>

___
<a id="uploadmultipartform"></a>

###  uploadMultipartForm

▸ **uploadMultipartForm**(file: *`any`*, contentType?: *`string`*, filename?: *`string`*, options?: *`any`*): `Promise`<`string`[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1834*

When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.

*__summary__*: Upload an attachment for sending using Multipart Form

*__throws__*: {RequiredError}

*__memberof__*: ExtraOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| file | `any` |  file |
| `Optional` contentType | `string` |
| `Optional` filename | `string` |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`[]>

___


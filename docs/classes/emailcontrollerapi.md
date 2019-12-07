[MailSlurp Client](../README.md) > [EmailControllerApi](../classes/emailcontrollerapi.md)

# Class: EmailControllerApi

EmailControllerApi - object-oriented interface

*__export__*: 

*__class__*: EmailControllerApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ EmailControllerApi**

## Index

### Constructors

* [constructor](emailcontrollerapi.md#constructor)

### Properties

* [basePath](emailcontrollerapi.md#basepath)
* [configuration](emailcontrollerapi.md#configuration)
* [fetch](emailcontrollerapi.md#fetch)

### Methods

* [deleteEmail1](emailcontrollerapi.md#deleteemail1)
* [downloadAttachment](emailcontrollerapi.md#downloadattachment)
* [forwardEmail](emailcontrollerapi.md#forwardemail)
* [getAttachmentMetaData](emailcontrollerapi.md#getattachmentmetadata)
* [getEmail](emailcontrollerapi.md#getemail)
* [getEmailsPaginated](emailcontrollerapi.md#getemailspaginated)
* [getRawEmailContents](emailcontrollerapi.md#getrawemailcontents)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EmailControllerApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`undefined` \| `string`*, fetch?: *[FetchAPI](../interfaces/fetchapi.md)*): [EmailControllerApi](emailcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) |
| `Optional` basePath | `undefined` \| `string` |
| `Optional` fetch | [FetchAPI](../interfaces/fetchapi.md) |

**Returns:** [EmailControllerApi](emailcontrollerapi.md)

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

<a id="deleteemail1"></a>

###  deleteEmail1

▸ **deleteEmail1**(emailId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1917*

Deletes an email and removes it from the inbox

*__summary__*: Delete Email

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="downloadattachment"></a>

###  downloadAttachment

▸ **downloadAttachment**(attachmentId: *`string`*, emailId: *`string`*, apiKey?: *`undefined` \| `string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1928*

Returns the specified attachment for a given email as a byte stream (file download). Get the attachmentId from the email response.

*__summary__*: Get email attachment

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| attachmentId | `string` |  attachmentId |
| emailId | `string` |  emailId |
| `Optional` apiKey | `undefined` \| `string` |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="forwardemail"></a>

###  forwardEmail

▸ **forwardEmail**(emailId: *`string`*, forwardEmailOptions: *[ForwardEmailOptions](../interfaces/forwardemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1938*

Forward email content to given recipients

*__summary__*: Forward Email

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| forwardEmailOptions | [ForwardEmailOptions](../interfaces/forwardemailoptions.md) |  forwardEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getattachmentmetadata"></a>

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(attachmentId: *`string`*, emailId: *`string`*, options?: *`any`*): `Promise`<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1948*

Returns the metadata such as name and content-type for a given attachment and email.

*__summary__*: Get email attachment metadata

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| attachmentId | `string` |  attachmentId |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*, options?: *`any`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1957*

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawMessage endpoint

*__summary__*: Get Email Content

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="getemailspaginated"></a>

###  getEmailsPaginated

▸ **getEmailsPaginated**(page?: *`undefined` \| `number`*, size?: *`undefined` \| `number`*, options?: *`any`*): `Promise`<[PageEmailProjection](../interfaces/pageemailprojection.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1967*

Responses are paginated

*__summary__*: Get all emails

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` page | `undefined` \| `number` |
| `Optional` size | `undefined` \| `number` |
| `Optional` options | `any` |

**Returns:** `Promise`<[PageEmailProjection](../interfaces/pageemailprojection.md)>

___
<a id="getrawemailcontents"></a>

###  getRawEmailContents

▸ **getRawEmailContents**(emailId: *`string`*, options?: *`any`*): `Promise`<`string`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:1976*

Returns a raw, unparsed and unprocessed email

*__summary__*: Get Raw Email Content

*__throws__*: {RequiredError}

*__memberof__*: EmailControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`string`>

___


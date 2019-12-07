[MailSlurp Client](../README.md) > [InboxControllerApi](../classes/inboxcontrollerapi.md)

# Class: InboxControllerApi

InboxControllerApi - object-oriented interface

*__export__*: 

*__class__*: InboxControllerApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ InboxControllerApi**

## Index

### Constructors

* [constructor](inboxcontrollerapi.md#constructor)

### Properties

* [basePath](inboxcontrollerapi.md#basepath)
* [configuration](inboxcontrollerapi.md#configuration)
* [fetch](inboxcontrollerapi.md#fetch)

### Methods

* [createInbox](inboxcontrollerapi.md#createinbox)
* [createWebhook](inboxcontrollerapi.md#createwebhook)
* [deleteInbox](inboxcontrollerapi.md#deleteinbox)
* [deleteWebhook](inboxcontrollerapi.md#deletewebhook)
* [getAllInboxes](inboxcontrollerapi.md#getallinboxes)
* [getEmails](inboxcontrollerapi.md#getemails)
* [getInbox](inboxcontrollerapi.md#getinbox)
* [getInboxes](inboxcontrollerapi.md#getinboxes)
* [getWebhooks](inboxcontrollerapi.md#getwebhooks)
* [sendEmail](inboxcontrollerapi.md#sendemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new InboxControllerApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`undefined` \| `string`*, fetch?: *[FetchAPI](../interfaces/fetchapi.md)*): [InboxControllerApi](inboxcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) |
| `Optional` basePath | `undefined` \| `string` |
| `Optional` fetch | [FetchAPI](../interfaces/fetchapi.md) |

**Returns:** [InboxControllerApi](inboxcontrollerapi.md)

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

<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(emailAddress?: *`undefined` \| `string`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2272*

Create a new inbox and with a ranmdomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

*__summary__*: Create an Inbox (email address)

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` emailAddress | `undefined` \| `string` |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *[CreateWebhookOptions](../interfaces/createwebhookoptions.md)*, options?: *`any`*): `Promise`<[Webhook](../interfaces/webhook.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2282*

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.

*__summary__*: Attach a WebHook URL to an inbox

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| createWebhookOptions | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) |  webhookOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2291*

Permanently delete an inbox and associated email address

*__summary__*: Delete Inbox / Email Address

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

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

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2301*

*__summary__*: Delete and disable a WebHook for an Inbox

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| webhookId | `string` |  webhookId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="getallinboxes"></a>

###  getAllInboxes

▸ **getAllInboxes**(page?: *`undefined` \| `number`*, size?: *`undefined` \| `number`*, options?: *`any`*): `Promise`<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2311*

List inboxes in paginated form

*__summary__*: List Inboxes Paginated

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` page | `undefined` \| `number` |
| `Optional` size | `undefined` \| `number` |
| `Optional` options | `any` |

**Returns:** `Promise`<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, limit?: *`undefined` \| `number`*, minCount?: *`undefined` \| `number`*, retryTimeout?: *`undefined` \| `number`*, since?: *`Date`*, options?: *`any`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2324*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

*__summary__*: List Emails in an Inbox / EmailAddress

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  Id of inbox that emails belongs to |
| `Optional` limit | `undefined` \| `number` |
| `Optional` minCount | `undefined` \| `number` |
| `Optional` retryTimeout | `undefined` \| `number` |
| `Optional` since | `Date` |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*, options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2333*

Returns an inbox's properties, including its email address and ID.

*__summary__*: Get Inbox / EmailAddress

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

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

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2341*

List the inboxes you have created

*__summary__*: List Inboxes / Email Addresses

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="getwebhooks"></a>

###  getWebhooks

▸ **getWebhooks**(inboxId: *`string`*, options?: *`any`*): `Promise`<[Webhook](../interfaces/webhook.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2350*

*__summary__*: Get all WebHooks for an Inbox

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

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

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:2360*

Send an email from the inbox's email address. Specify the email recipients and contents in the request body. See the `SendEmailOptions` for more information. Note the `inboxId` refers to the inbox's id NOT its email address

*__summary__*: Send Email

*__throws__*: {RequiredError}

*__memberof__*: InboxControllerApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___


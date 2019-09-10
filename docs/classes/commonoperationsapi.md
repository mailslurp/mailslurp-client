[MailSlurp Client](../README.md) > [CommonOperationsApi](../classes/commonoperationsapi.md)

# Class: CommonOperationsApi

CommonOperationsApi - object-oriented interface CommonOperationsApi - object-oriented interface

*__export__*: 

*__class__*: CommonOperationsApi

*__extends__*: {BaseAPI}

*__export__*: 

*__class__*: CommonOperationsApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

 `BaseAPI`

**↳ CommonOperationsApi**

## Index

### Constructors

* [constructor](commonoperationsapi.md#constructor)

### Properties

* [basePath](commonoperationsapi.md#basepath)
* [configuration](commonoperationsapi.md#configuration)
* [fetch](commonoperationsapi.md#fetch)

### Methods

* [createNewEmailAddress](commonoperationsapi.md#createnewemailaddress)
* [deleteEmail](commonoperationsapi.md#deleteemail)
* [deleteEmailAddress](commonoperationsapi.md#deleteemailaddress)
* [emptyInbox](commonoperationsapi.md#emptyinbox)
* [sendEmailSimple](commonoperationsapi.md#sendemailsimple)
* [waitForEmailCount](commonoperationsapi.md#waitforemailcount)
* [waitForLatestEmail](commonoperationsapi.md#waitforlatestemail)
* [waitForMatchingEmail](commonoperationsapi.md#waitformatchingemail)
* [waitForNthEmail](commonoperationsapi.md#waitfornthemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CommonOperationsApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, fetch?: *[FetchAPI](../interfaces/fetchapi.md)*): [CommonOperationsApi](commonoperationsapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Overrides BaseAPI.__constructor*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) |
| `Optional` basePath | `string` |
| `Optional` fetch | [FetchAPI](../interfaces/fetchapi.md) |

**Returns:** [CommonOperationsApi](commonoperationsapi.md)

___

## Properties

<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:47*
*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:60*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Overrides BaseAPI.configuration*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:49*

___
<a id="fetch"></a>

### `<Protected>` fetch

**● fetch**: *`FetchAPI`*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:48*
*Defined in node_modules/mailslurp-swagger-sdk-ts/api.ts:60*

___

## Methods

<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(options?: *`any`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:772*

Returns an Inbox with an `id` and an `emailAddress`

*__summary__*: Create new email address

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="deleteemail"></a>

###  deleteEmail

▸ **deleteEmail**(emailId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:781*

Deletes an email

*__summary__*: Delete an email

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |  emailId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="deleteemailaddress"></a>

###  deleteEmailAddress

▸ **deleteEmailAddress**(inboxId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:790*

Deletes an inbox

*__summary__*: Delete email address and its emails

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="emptyinbox"></a>

###  emptyInbox

▸ **emptyInbox**(inboxId: *`string`*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:799*

Deletes all emails

*__summary__*: Delete all emails in an inbox

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  inboxId |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="sendemailsimple"></a>

###  sendEmailSimple

▸ **sendEmailSimple**(sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*, options?: *`any`*): `Promise`<`Response`>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:808*

To specify an email address first create an inbox and use that with the other send email methods

*__summary__*: Send an email from a random email address

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |  sendEmailOptions |
| `Optional` options | `any` |

**Returns:** `Promise`<`Response`>

___
<a id="waitforemailcount"></a>

###  waitForEmailCount

▸ **waitForEmailCount**(count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*, options?: *`any`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:819*

Will only wait if count is greater that the found emails in given inbox.If you need to wait for an email for a non-empty inbox see the other receive methods.

*__summary__*: Wait for and return count number of emails

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` count | `number` |
| `Optional` inboxId | `string` |
| `Optional` timeout | `number` |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitforlatestemail"></a>

###  waitForLatestEmail

▸ **waitForLatestEmail**(inboxId?: *`string`*, timeout?: *`number`*, options?: *`any`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:829*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods.

*__summary__*: Fetch inbox's latest email or if empty wait for email to arrive

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` inboxId | `string` |
| `Optional` timeout | `number` |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="waitformatchingemail"></a>

###  waitForMatchingEmail

▸ **waitForMatchingEmail**(matchOptions: *[MatchOptions](../interfaces/matchoptions.md)*, count?: *`number`*, inboxId?: *`string`*, timeout?: *`number`*, options?: *`any`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:841*

Results must also meet provided count. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.

*__summary__*: Wait or return list of emails that match simple matching patterns

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matchOptions | [MatchOptions](../interfaces/matchoptions.md) |  matchOptions |
| `Optional` count | `number` |
| `Optional` inboxId | `string` |
| `Optional` timeout | `number` |
| `Optional` options | `any` |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitfornthemail"></a>

###  waitForNthEmail

▸ **waitForNthEmail**(inboxId?: *`string`*, index?: *`number`*, timeout?: *`number`*, options?: *`any`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in node_modules/mailslurp-swagger-sdk-ts/dist/api.d.ts:852*

*__summary__*: Wait for or fetch the email with a given index in the inbox specified

*__throws__*: {RequiredError}

*__memberof__*: CommonOperationsApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` inboxId | `string` |
| `Optional` index | `number` |
| `Optional` timeout | `number` |
| `Optional` options | `any` |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___


[mailslurp-client](../README.md) > ["index"](../modules/_index_.md) > [MailSlurp](../classes/_index_.mailslurp.md)

# Class: MailSlurp

MailSlurp client Usage: `const api = new MailSlurp({ apiKey: "test" }) const inbox = await api.createInbox()`

## Hierarchy

**MailSlurp**

## Index

### Constructors

* [constructor](_index_.mailslurp.md#constructor)

### Methods

* [bulkCreateInboxes](_index_.mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](_index_.mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](_index_.mailslurp.md#bulksendemails)
* [createInbox](_index_.mailslurp.md#createinbox)
* [createNewEmailAddress](_index_.mailslurp.md#createnewemailaddress)
* [createWebhook](_index_.mailslurp.md#createwebhook)
* [deleteInbox](_index_.mailslurp.md#deleteinbox)
* [downloadAttachment](_index_.mailslurp.md#downloadattachment)
* [fetchLatestEmail](_index_.mailslurp.md#fetchlatestemail)
* [getEmail](_index_.mailslurp.md#getemail)
* [getEmailAttachment](_index_.mailslurp.md#getemailattachment)
* [getEmails](_index_.mailslurp.md#getemails)
* [getInbox](_index_.mailslurp.md#getinbox)
* [getInboxes](_index_.mailslurp.md#getinboxes)
* [getRawEmail](_index_.mailslurp.md#getrawemail)
* [sendEmail](_index_.mailslurp.md#sendemail)
* [sendEmailSimple](_index_.mailslurp.md#sendemailsimple)
* [waitForLatestEmail](_index_.mailslurp.md#waitforlatestemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../modules/_index_.md#config)*): [MailSlurp](_index_.mailslurp.md)

*Defined in [index.ts:81](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L81)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [Config](../modules/_index_.md#config) |

**Returns:** [MailSlurp](_index_.mailslurp.md)

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*): `Promise`<`Inbox`[]>

*Defined in [index.ts:211](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L211)*

Bulk create inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `Promise`<`Inbox`[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(inboxIds: *`string`[]*): `Promise`<`Response`>

*Defined in [index.ts:218](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L218)*

Bulk delete inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxIds | `string`[] |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *`BulkSendEmailOptions`*): `Promise`<`Response`>

*Defined in [index.ts:204](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L204)*

Bulk send emails

**Parameters:**

| Name | Type |
| ------ | ------ |
| bulkSendEmailOptions | `BulkSendEmailOptions` |

**Returns:** `Promise`<`Response`>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Defined in [index.ts:140](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L140)*

Create an inbox

**Returns:** `Promise`<`Inbox`>

___
<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(): `Promise`<`Inbox`>

*Defined in [index.ts:103](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L103)*

Create a new email address and associated inbox

*__remarks__*: All none-paid accounts use the `@mailslurp.com` domain. Custom domains available with plans.

**Returns:** `Promise`<`Inbox`>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *`CreateWebhookOptions`*): `Promise`<`Webhook`>

*Defined in [index.ts:225](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L225)*

Create a webhook for notifications

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| createWebhookOptions | `CreateWebhookOptions` |

**Returns:** `Promise`<`Webhook`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:148](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L148)*

Delete an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="downloadattachment"></a>

###  downloadAttachment

▸ **downloadAttachment**(emailId: *`string`*, attachmentId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:232](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L232)*

Get email attachment by id

**Parameters:**

| Name | Type |
| ------ | ------ |
| emailId | `string` |
| attachmentId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="fetchlatestemail"></a>

###  fetchLatestEmail

▸ **fetchLatestEmail**(inboxEmailAddress?: *`string`*, inboxId?: *`string`*): `Promise`<`Email`>

*Defined in [index.ts:246](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L246)*

*__deprecated__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` inboxEmailAddress | `string` |
| `Optional` inboxId | `string` |

**Returns:** `Promise`<`Email`>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<`Email`>

*Defined in [index.ts:180](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L180)*

Get a full email from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Email`>

___
<a id="getemailattachment"></a>

###  getEmailAttachment

▸ **getEmailAttachment**(emailId: *`string`*, attachmentId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:239](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L239)*

*__deprecated__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| emailId | `string` |
| attachmentId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args?: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Defined in [index.ts:172](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L172)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inboxId | `string` | - |  \- |
| `Default value` args | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |  {} |   |

**Returns:** `Promise`<`EmailPreview`[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<`Inbox`>

*Defined in [index.ts:156](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L156)*

Get an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Inbox`>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<`Inbox`[]>

*Defined in [index.ts:163](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L163)*

Get all inboxes

**Returns:** `Promise`<`Inbox`[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Defined in [index.ts:188](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L188)*

Get an email's raw contents from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Defined in [index.ts:197](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L197)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | `SendEmailOptions` |   |

**Returns:** `Promise`<`Response`>

___
<a id="sendemailsimple"></a>

###  sendEmailSimple

▸ **sendEmailSimple**(sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Defined in [index.ts:116](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L116)*

Send an email from a random address

*__remarks__*: To send from a known address first create an inbox and then use the sendEmail endpoints.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sendEmailOptions | `SendEmailOptions` |   |

**Returns:** `Promise`<`Response`>

___
<a id="waitforlatestemail"></a>

###  waitForLatestEmail

▸ **waitForLatestEmail**(inboxEmailAddress?: *`string`*, inboxId?: *`string`*): `Promise`<`Email`>

*Defined in [index.ts:130](https://github.com/mailslurp/mailslurp-client-ts-js/blob/eb98a1b/index.ts#L130)*

Wait for an email to arrive at an inbox or return first found result

*__remarks__*: Retries the call until at least one email is found or a maximum timeout is exceeded

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` inboxEmailAddress | `string` |  \- |
| `Optional` inboxId | `string` |   |

**Returns:** `Promise`<`Email`>

___


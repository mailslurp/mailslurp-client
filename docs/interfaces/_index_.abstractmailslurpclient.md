[mailslurp-client](../README.md) > ["index"](../modules/_index_.md) > [AbstractMailSlurpClient](../interfaces/_index_.abstractmailslurpclient.md)

# Interface: AbstractMailSlurpClient

Define the MailSlurp client interface

## Hierarchy

**AbstractMailSlurpClient**

## Implemented by

* [MailSlurp](../classes/_index_.mailslurp.md)

## Index

### Methods

* [createInbox](_index_.abstractmailslurpclient.md#createinbox)
* [deleteInbox](_index_.abstractmailslurpclient.md#deleteinbox)
* [getEmail](_index_.abstractmailslurpclient.md#getemail)
* [getEmails](_index_.abstractmailslurpclient.md#getemails)
* [getInbox](_index_.abstractmailslurpclient.md#getinbox)
* [getInboxes](_index_.abstractmailslurpclient.md#getinboxes)
* [sendEmail](_index_.abstractmailslurpclient.md#sendemail)

---

## Methods

<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(): `Promise`<`Inbox`>

*Defined in [index.ts:41](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L41)*

**Returns:** `Promise`<`Inbox`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:43](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<`Email`>

*Defined in [index.ts:39](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| emailId | `string` |

**Returns:** `Promise`<`Email`>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args: *[GetMessagesOptions](../modules/_index_.md#getmessagesoptions)*): `Promise`<`EmailPreview`[]>

*Defined in [index.ts:49](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| args | [GetMessagesOptions](../modules/_index_.md#getmessagesoptions) |

**Returns:** `Promise`<`EmailPreview`[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<`Inbox`>

*Defined in [index.ts:45](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |

**Returns:** `Promise`<`Inbox`>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<`Inbox`[]>

*Defined in [index.ts:47](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L47)*

**Returns:** `Promise`<`Inbox`[]>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *`SendEmailOptions`*): `Promise`<`Response`>

*Defined in [index.ts:51](https://github.com/mailslurp/mailslurp-client-ts-js/blob/5b2ec3b/index.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| sendEmailOptions | `SendEmailOptions` |

**Returns:** `Promise`<`Response`>

___


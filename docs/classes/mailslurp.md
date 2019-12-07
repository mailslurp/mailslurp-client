[MailSlurp Client](../README.md) > [MailSlurp](../classes/mailslurp.md)

# Class: MailSlurp

Official MailSlurp Client

This is the recommended client for [mailslurp.com](https://www.mailslurp.com).

[

Features
--------

](#features)

*   Create email addresses on demand
    
*   Receive emails and attachments in code
    
*   Send emails and attachments
    
*   Create custom domains and webhooks
    
    [
    
    Prerequisites
    -------------
    
    ](#prerequisites)
    
    MailSlurp is free for personal use but you must have an [account](https://app.mailslurp.com) and an [API Key](https://app.mailslurp.com).
    
    [
    
    Installing
    ----------
    
    ](#installing)
    
    `npm install --save mailslurp-client`
    
    [
    
    Importing
    ---------
    
    ](#importing)[
    
    ### Import ES6
    
    ](#import-es6)
    
    ```javascript
    import { MailSlurp } from 'mailslurp-client'
    ```
    
    [
    
    ### Require ES5
    
    ](#require-es5)
    
    ```javascript
    const MailSlurp = require('mailslurp-client').MailSlurp;
    // or default import
    const MailSlurp = require('mailslurp-client').default;
    ```
    
    [
    
    Configure
    ---------
    
    ](#configure)
    
    ```javascript
    const mailslurp = new MailSlurp({ apiKey: "your-api-key" })
    const inbox = await mailslurp.createInbox()
    ```
    
    [
    
    Next steps
    ----------
    
    ](#next-steps)
    
    Now you can use your mailslurp instance to perform actions like sending and receiving emails. See those methods for more information.

## Hierarchy

**MailSlurp**

## Index

### Constructors

* [constructor](mailslurp.md#constructor)

### Methods

* [bulkCreateInboxes](mailslurp.md#bulkcreateinboxes)
* [bulkDeleteInboxes](mailslurp.md#bulkdeleteinboxes)
* [bulkSendEmails](mailslurp.md#bulksendemails)
* [createDomain](mailslurp.md#createdomain)
* [createInbox](mailslurp.md#createinbox)
* [createNewEmailAddress](mailslurp.md#createnewemailaddress)
* [createWebhook](mailslurp.md#createwebhook)
* [deleteDomain](mailslurp.md#deletedomain)
* [deleteEmail](mailslurp.md#deleteemail)
* [deleteEmailAddress](mailslurp.md#deleteemailaddress)
* [deleteInbox](mailslurp.md#deleteinbox)
* [deleteWebhook](mailslurp.md#deletewebhook)
* [downloadAttachment](mailslurp.md#downloadattachment)
* [emptyInbox](mailslurp.md#emptyinbox)
* [getAllEmails](mailslurp.md#getallemails)
* [getAllInboxes](mailslurp.md#getallinboxes)
* [getAttachmentMetaData](mailslurp.md#getattachmentmetadata)
* [getDomain](mailslurp.md#getdomain)
* [getDomains](mailslurp.md#getdomains)
* [getEmail](mailslurp.md#getemail)
* [getEmails](mailslurp.md#getemails)
* [getInbox](mailslurp.md#getinbox)
* [getInboxes](mailslurp.md#getinboxes)
* [getRawEmail](mailslurp.md#getrawemail)
* [getWebhooks](mailslurp.md#getwebhooks)
* [sendEmail](mailslurp.md#sendemail)
* [sendEmailSimple](mailslurp.md#sendemailsimple)
* [uploadAttachment](mailslurp.md#uploadattachment)
* [waitForEmailCount](mailslurp.md#waitforemailcount)
* [waitForLatestEmail](mailslurp.md#waitforlatestemail)
* [waitForMatchingEmails](mailslurp.md#waitformatchingemails)
* [waitForNthEmail](mailslurp.md#waitfornthemail)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MailSlurp**(opts: *[Config](../#config)*): [MailSlurp](mailslurp.md)

*Defined in [index.ts:123](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L123)*

Create a new MailSlurp instance

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| opts | [Config](../#config) |   |

**Returns:** [MailSlurp](mailslurp.md)

___

## Methods

<a id="bulkcreateinboxes"></a>

###  bulkCreateInboxes

▸ **bulkCreateInboxes**(count: *`number`*): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in [index.ts:494](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L494)*

Bulk create inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="bulkdeleteinboxes"></a>

###  bulkDeleteInboxes

▸ **bulkDeleteInboxes**(inboxIds: *`string`[]*): `Promise`<`Response`>

*Defined in [index.ts:503](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L503)*

Bulk delete inboxes

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxIds | `string`[] |

**Returns:** `Promise`<`Response`>

___
<a id="bulksendemails"></a>

###  bulkSendEmails

▸ **bulkSendEmails**(bulkSendEmailOptions: *[BulkSendEmailOptions](../interfaces/bulksendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:483](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L483)*

Bulk send emails

**Parameters:**

| Name | Type |
| ------ | ------ |
| bulkSendEmailOptions | [BulkSendEmailOptions](../interfaces/bulksendemailoptions.md) |

**Returns:** `Promise`<`Response`>

___
<a id="createdomain"></a>

###  createDomain

▸ **createDomain**(options: *[CreateDomainOptions](../interfaces/createdomainoptions.md)*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in [index.ts:583](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L583)*

Create a custom domain for use with MailSlurp You must own and have access to DNS setup for the domain in order to verify it

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [CreateDomainOptions](../interfaces/createdomainoptions.md) |   |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="createinbox"></a>

###  createInbox

▸ **createInbox**(emailAddress?: *`undefined` \| `string`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:347](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L347)*

Create an inbox. Pass an optional `emailAddress` to specify the email address. If not argument is passed MailSlurp will assign the inbox a random email address ending in `@mailslurp.com`.

```typescript
// generate a random email address
try {
  const randomizedInbox = await mailslurp.createInbox();
} catch (e) {
  // handle errors
}

// generate specifc email address
try {
  // note you must verify the domain with MailSlurp before you can create email addresses using it
  const customInbox = await mailslurp.createInbox('myaddress@mydomain.com`)
} catch (e) {
  // handle errors
}
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` emailAddress | `undefined` \| `string` |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createnewemailaddress"></a>

###  createNewEmailAddress

▸ **createNewEmailAddress**(): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:158](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L158)*

Create a new inbox

```typescript
const { id, emailAddress } = await mailslurp.createNewEmailAddress()
```

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="createwebhook"></a>

###  createWebhook

▸ **createWebhook**(inboxId: *`string`*, createWebhookOptions: *[CreateWebhookOptions](../interfaces/createwebhookoptions.md)*): `Promise`<[Webhook](../interfaces/webhook.md)>

*Defined in [index.ts:512](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L512)*

Create a webhook for notifications

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| createWebhookOptions | [CreateWebhookOptions](../interfaces/createwebhookoptions.md) |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)>

___
<a id="deletedomain"></a>

###  deleteDomain

▸ **deleteDomain**(domainId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:610](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L610)*

Delete domain

**Parameters:**

| Name | Type |
| ------ | ------ |
| domainId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="deleteemail"></a>

###  deleteEmail

▸ **deleteEmail**(emailId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:310](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L310)*

Delete an email by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deleteemailaddress"></a>

###  deleteEmailAddress

▸ **deleteEmailAddress**(emailId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:320](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L320)*

Delete an email by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deleteinbox"></a>

###  deleteInbox

▸ **deleteInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:357](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L357)*

Delete an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="deletewebhook"></a>

###  deleteWebhook

▸ **deleteWebhook**(inboxId: *`string`*, webhookId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:536](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L536)*

Remove a webhook from an inbox

**Parameters:**

| Name | Type |
| ------ | ------ |
| inboxId | `string` |
| webhookId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="downloadattachment"></a>

###  downloadAttachment

▸ **downloadAttachment**(emailId: *`string`*, attachmentId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:547](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L547)*

Get email attachment by id

Returns HTTP response containing byte stream

**Parameters:**

| Name | Type |
| ------ | ------ |
| emailId | `string` |
| attachmentId | `string` |

**Returns:** `Promise`<`Response`>

___
<a id="emptyinbox"></a>

###  emptyInbox

▸ **emptyInbox**(inboxId: *`string`*): `Promise`<`Response`>

*Defined in [index.ts:300](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L300)*

Delete all emails in a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<`Response`>

___
<a id="getallemails"></a>

###  getAllEmails

▸ **getAllEmails**(page?: *`undefined` \| `number`*, size?: *`undefined` \| `number`*): `Promise`<[PageEmailProjection](../interfaces/pageemailprojection.md)>

*Defined in [index.ts:397](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L397)*

Get all emails Returns paginated email previews

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` page | `undefined` \| `number` |
| `Optional` size | `undefined` \| `number` |

**Returns:** `Promise`<[PageEmailProjection](../interfaces/pageemailprojection.md)>

___
<a id="getallinboxes"></a>

###  getAllInboxes

▸ **getAllInboxes**(page?: *`undefined` \| `number`*, size?: *`undefined` \| `number`*): `Promise`<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

*Defined in [index.ts:387](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L387)*

Get all inboxes paginated Returns paginated inbox previews

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` page | `undefined` \| `number` |
| `Optional` size | `undefined` \| `number` |

**Returns:** `Promise`<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

___
<a id="getattachmentmetadata"></a>

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(attachmentId: *`string`*, emailId: *`string`*): `Promise`<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in [index.ts:572](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L572)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**Parameters:**

| Name | Type |
| ------ | ------ |
| attachmentId | `string` |
| emailId | `string` |

**Returns:** `Promise`<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

___
<a id="getdomain"></a>

###  getDomain

▸ **getDomain**(domainId: *`string`*): `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

*Defined in [index.ts:601](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L601)*

Get domain

**Parameters:**

| Name | Type |
| ------ | ------ |
| domainId | `string` |

**Returns:** `Promise`<[DomainPlusVerificationRecordsAndStatus](../interfaces/domainplusverificationrecordsandstatus.md)>

___
<a id="getdomains"></a>

###  getDomains

▸ **getDomains**(): `Promise`<`Array`<[DomainPreview](../interfaces/domainpreview.md)>>

*Defined in [index.ts:592](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L592)*

Get domains

**Returns:** `Promise`<`Array`<[DomainPreview](../interfaces/domainpreview.md)>>

___
<a id="getemail"></a>

###  getEmail

▸ **getEmail**(emailId: *`string`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:450](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L450)*

Get a full email from by id. To get an emails ID use the getEmails or waitFor methods with an inbox

```typescript
try {
  const fullEmail = mailslurp.getEmail(emailId)
  console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
  // handle errors
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="getemails"></a>

###  getEmails

▸ **getEmails**(inboxId: *`string`*, args?: *[GetMessagesOptions](../#getmessagesoptions)*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:420](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L420)*

Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint

```typescript
try {
  // first get emails for an inbox
  const emails = mailslurp.getEmails(inboxId, { limit: 1 })
  const fullEmail = mailslurp.getEmail(emails[0].id)
  console.log(fullEmail.body, fullEmail.subject) // etc
} catch (e) {
  // handle errors
}
```

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inboxId | `string` | - |  \- |
| `Default value` args | [GetMessagesOptions](../#getmessagesoptions) |  {} |   |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="getinbox"></a>

###  getInbox

▸ **getInbox**(inboxId: *`string`*): `Promise`<[Inbox](../interfaces/inbox.md)>

*Defined in [index.ts:367](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L367)*

Get an inbox by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)>

___
<a id="getinboxes"></a>

###  getInboxes

▸ **getInboxes**(): `Promise`<[Inbox](../interfaces/inbox.md)[]>

*Defined in [index.ts:376](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L376)*

Get all inboxes

**Returns:** `Promise`<[Inbox](../interfaces/inbox.md)[]>

___
<a id="getrawemail"></a>

###  getRawEmail

▸ **getRawEmail**(emailId: *`string`*): `Promise`<`string`>

*Defined in [index.ts:460](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L460)*

Get an email's raw contents from by id

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emailId | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="getwebhooks"></a>

###  getWebhooks

▸ **getWebhooks**(inboxId: *`string`*): `Promise`<[Webhook](../interfaces/webhook.md)[]>

*Defined in [index.ts:525](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L525)*

Get webhooks for an inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |   |

**Returns:** `Promise`<[Webhook](../interfaces/webhook.md)[]>

___
<a id="sendemail"></a>

###  sendEmail

▸ **sendEmail**(inboxId: *`string`*, sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:471](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L471)*

Send and email from a given inbox

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |   |

**Returns:** `Promise`<`Response`>

___
<a id="sendemailsimple"></a>

###  sendEmailSimple

▸ **sendEmailSimple**(sendEmailOptions: *[SendEmailOptions](../interfaces/sendemailoptions.md)*): `Promise`<`Response`>

*Defined in [index.ts:172](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L172)*

Send an email from a random address

To send from a known address first create an inbox and then use the sendEmail endpoints.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| sendEmailOptions | [SendEmailOptions](../interfaces/sendemailoptions.md) |   |

**Returns:** `Promise`<`Response`>

___
<a id="uploadattachment"></a>

###  uploadAttachment

▸ **uploadAttachment**(options: *[UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)*): `Promise`<`Array`<`String`>>

*Defined in [index.ts:561](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L561)*

Upload an attachment for use in email sending

Attachment contents must be a base64 encoded string

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |

**Returns:** `Promise`<`Array`<`String`>>

___
<a id="waitforemailcount"></a>

###  waitForEmailCount

▸ **waitForEmailCount**(count?: *`undefined` \| `number`*, inboxId?: *`undefined` \| `string`*, timeout?: *`undefined` \| `number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:286](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L286)*

Wait for and return list of emails with length of given count

```typescript
try {
  // wait for 4 emails in an inbox then return them
  const emails = waitForEmailCount(4, inboxId)
} catch (e) {
  // handle error or timeout
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` count | `undefined` \| `number` |  \- |
| `Optional` inboxId | `undefined` \| `string` |  \- |
| `Optional` timeout | `undefined` \| `number` |   |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitforlatestemail"></a>

###  waitForLatestEmail

▸ **waitForLatestEmail**(inboxId?: *`undefined` \| `string`*, timeout?: *`undefined` \| `number`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:195](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L195)*

Wait for an email to arrive at an inbox or return first found result Retries the call until at least one email is found or a maximum timeout is exceeded

```typescript
try {
  const email = await mailslurp.waitForLatestEmail(inboxId)
} catch (e) {
  // handle timeout or email wasn't received
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` inboxId | `undefined` \| `string` |  uuid |
| `Optional` timeout | `undefined` \| `number` |  max milliseconds to wait |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___
<a id="waitformatchingemails"></a>

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(matchOptions: *[MatchOptions](../interfaces/matchoptions.md)*, count?: *`undefined` \| `number`*, inboxId?: *`undefined` \| `string`*, timeout?: *`undefined` \| `number`*): `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [index.ts:254](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L254)*

Wait until both count and match options are met and return list of emails. Match options are a bit verbose but allow for type safety on the API end. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM.

```typescript
try {
  const matchingWelcomeEmails = await mailslurp.waitForMatchingEmails({
    matches: [
      {
        field: 'SUBJECT',
        should: 'CONTAIN',
        value: 'Welcome'
      }
    ]
  }, 1, inboxId)
} catch (e) {
  // handle timeout or no results
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matchOptions | [MatchOptions](../interfaces/matchoptions.md) |  \- |
| `Optional` count | `undefined` \| `number` |  \- |
| `Optional` inboxId | `undefined` \| `string` |  \- |
| `Optional` timeout | `undefined` \| `number` |  timeout max milliseconds to wait |

**Returns:** `Promise`<[EmailPreview](../interfaces/emailpreview.md)[]>

___
<a id="waitfornthemail"></a>

###  waitForNthEmail

▸ **waitForNthEmail**(inboxId: *`string`*, index: *`number`*, timeout?: *`undefined` \| `number`*): `Promise`<[Email](../interfaces/email.md)>

*Defined in [index.ts:219](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9b82fd2/index.ts#L219)*

Return or wait for email number `n` in an inbox

```typescript
try {
  const email3 = await mailslurp.waitForNthEmail(inboxId, 3)
} catch (e) {
  // handle timeout or email wasn't received
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inboxId | `string` |  \- |
| index | `number` |  \- |
| `Optional` timeout | `undefined` \| `number` |   |

**Returns:** `Promise`<[Email](../interfaces/email.md)>

___


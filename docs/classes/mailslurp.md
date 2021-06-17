**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / MailSlurp

# Class: MailSlurp

The official MailSlurp Javascript library. A wrapper around the [MailSlurp REST API](https://www.mailslurp.com/docs/api/docs/Apis/).

Create an instance of this class to call MailSlurp API methods. Contains top level convenience functions. Access the full API controllers as properties on the instance.

## Create instance
You must provide a configuration object with [your API Key](https://app.mailslurp.com) as the `apiKey` property
when creating a new instance.

```javascript
const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({
 apiKey: 'xxxx'
})
```

## Call methods
Most methods are asynchronous and return Promises. You can `await` the results or use `.then(result => {})`
Common controllers include the [InboxController](https://www.mailslurp.com/docs/js/docs/classes/inboxcontrollerapi/), [EmailController](https://www.mailslurp.com/docs/js/docs/classes/emailcontrollerapi/) and the [WaitForController](https://www.mailslurp.com/docs/js/docs/classes/waitforcontrollerapi/) for receiving emails.

```javascript
// call convenience functions
const email = await mailslurp.waitForLatestEmail(...args)

// call controllers to access full API methods
const alias = await mailslurp.aliasController.createAlias(...args)

// or create a controller
const inboxController = mailslurp.inboxController
const inbox = await inboxController.createInbox()

// use Promises methods if you prefer
mailslurp.getEmails(inbox.id).then(emails => {
   // handle emails
   console.log(emails))
 }
```

## Hierarchy

* **MailSlurp**

## Index

### Constructors

* [constructor](mailslurp.md#constructor)

### Properties

* [aliasController](mailslurp.md#aliascontroller)
* [attachmentController](mailslurp.md#attachmentcontroller)
* [bulkController](mailslurp.md#bulkcontroller)
* [commonController](mailslurp.md#commoncontroller)
* [contactController](mailslurp.md#contactcontroller)
* [domainController](mailslurp.md#domaincontroller)
* [emailController](mailslurp.md#emailcontroller)
* [formController](mailslurp.md#formcontroller)
* [groupController](mailslurp.md#groupcontroller)
* [inboxController](mailslurp.md#inboxcontroller)
* [mailServerController](mailslurp.md#mailservercontroller)
* [templateController](mailslurp.md#templatecontroller)
* [waitController](mailslurp.md#waitcontroller)
* [webhookController](mailslurp.md#webhookcontroller)

### Methods

* [createInbox](mailslurp.md#createinbox)
* [createInboxWithOptions](mailslurp.md#createinboxwithoptions)
* [deleteEmail](mailslurp.md#deleteemail)
* [deleteInbox](mailslurp.md#deleteinbox)
* [downloadAttachment](mailslurp.md#downloadattachment)
* [emptyInbox](mailslurp.md#emptyinbox)
* [getAllEmails](mailslurp.md#getallemails)
* [getAllInboxes](mailslurp.md#getallinboxes)
* [getAttachmentMetaData](mailslurp.md#getattachmentmetadata)
* [getEmail](mailslurp.md#getemail)
* [getEmails](mailslurp.md#getemails)
* [getInbox](mailslurp.md#getinbox)
* [getInboxes](mailslurp.md#getinboxes)
* [getRawEmail](mailslurp.md#getrawemail)
* [sendEmail](mailslurp.md#sendemail)
* [uploadAttachment](mailslurp.md#uploadattachment)
* [waitForEmailCount](mailslurp.md#waitforemailcount)
* [waitForLatestEmail](mailslurp.md#waitforlatestemail)
* [waitForMatchingEmails](mailslurp.md#waitformatchingemails)
* [waitForNthEmail](mailslurp.md#waitfornthemail)

## Constructors

### constructor

\+ **new MailSlurp**(`opts`: [Config](../README.md#config)): [MailSlurp](mailslurp.md)

*Defined in [src/index.ts:108](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L108)*

Create a new MailSlurp instance.

Contains top level convenience functions. Access the full API controllers as properties on the instance.

```javascript
const MailSlurp = require('mailslurp-client').default
const mailslurp = new MailSlurp({ apiKey })
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../README.md#config) |   |

**Returns:** [MailSlurp](mailslurp.md)

## Properties

### aliasController

• `Readonly` **aliasController**: [AliasControllerApi](aliascontrollerapi.md)

*Defined in [src/index.ts:101](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L101)*

___

### attachmentController

• `Readonly` **attachmentController**: [AttachmentControllerApi](attachmentcontrollerapi.md)

*Defined in [src/index.ts:95](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L95)*

___

### bulkController

• `Readonly` **bulkController**: [BulkActionsControllerApi](bulkactionscontrollerapi.md)

*Defined in [src/index.ts:98](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L98)*

___

### commonController

• `Readonly` **commonController**: [CommonActionsControllerApi](commonactionscontrollerapi.md)

*Defined in [src/index.ts:97](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L97)*

___

### contactController

• `Readonly` **contactController**: [ContactControllerApi](contactcontrollerapi.md)

*Defined in [src/index.ts:104](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L104)*

___

### domainController

• `Readonly` **domainController**: [DomainControllerApi](domaincontrollerapi.md)

*Defined in [src/index.ts:103](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L103)*

___

### emailController

• `Readonly` **emailController**: [EmailControllerApi](emailcontrollerapi.md)

*Defined in [src/index.ts:93](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L93)*

___

### formController

• `Readonly` **formController**: [FormControllerApi](formcontrollerapi.md)

*Defined in [src/index.ts:102](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L102)*

___

### groupController

• `Readonly` **groupController**: [GroupControllerApi](groupcontrollerapi.md)

*Defined in [src/index.ts:105](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L105)*

___

### inboxController

• `Readonly` **inboxController**: [InboxControllerApi](inboxcontrollerapi.md)

*Defined in [src/index.ts:94](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L94)*

___

### mailServerController

• `Readonly` **mailServerController**: [MailServerControllerApi](mailservercontrollerapi.md)

*Defined in [src/index.ts:108](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L108)*

___

### templateController

• `Readonly` **templateController**: [TemplateControllerApi](templatecontrollerapi.md)

*Defined in [src/index.ts:106](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L106)*

___

### waitController

• `Readonly` **waitController**: [WaitForControllerApi](waitforcontrollerapi.md)

*Defined in [src/index.ts:99](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L99)*

___

### webhookController

• `Readonly` **webhookController**: [WebhookControllerApi](webhookcontrollerapi.md)

*Defined in [src/index.ts:107](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L107)*

## Methods

### createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array\<string>, `teamAccess?`: boolean, `expiresIn?`: number, `useDomainPool?`: boolean, `inboxType?`: \"HTTP\_INBOX\" \| \"SMTP\_INBOX\"): Promise\<[Inbox](../modules/inbox.md)>

*Defined in [src/index.ts:171](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L171)*

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`summary`** Create an Inbox (email address)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailAddress?` | string | - |
`name?` | string | - |
`description?` | string | - |
`expiresAt?` | Date | - |
`favourite?` | boolean | - |
`tags?` | Array\<string> | - |
`teamAccess?` | boolean | - |
`expiresIn?` | number | - |
`useDomainPool?` | boolean | - |
`inboxType?` | \"HTTP\_INBOX\" \| \"SMTP\_INBOX\" | Optional inbox type HTTP or SMTP  |

**Returns:** Promise\<[Inbox](../modules/inbox.md)>

___

### createInboxWithOptions

▸ **createInboxWithOptions**(`createInboxOptions`: [CreateInboxDto](../modules/createinboxdto.md)): Promise\<[Inbox](../modules/inbox.md)>

*Defined in [src/index.ts:203](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L203)*

Create an inbox using CreateInboxDto options. More convenient that `createInbox` in some cases.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createInboxOptions` | [CreateInboxDto](../modules/createinboxdto.md) |   |

**Returns:** Promise\<[Inbox](../modules/inbox.md)>

___

### deleteEmail

▸ **deleteEmail**(`emailId`: string): Promise\<Response>

*Defined in [src/index.ts:377](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L377)*

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

**`summary`** Delete an email

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** Promise\<Response>

___

### deleteInbox

▸ **deleteInbox**(`inboxId`: string): Promise\<Response>

*Defined in [src/index.ts:216](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L216)*

Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

**`summary`** Delete inbox

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** Promise\<Response>

___

### downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): Promise\<String>

*Defined in [src/index.ts:476](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L476)*

Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

**`summary`** Get email attachment bytes

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`attachmentId` | string | attachmentId  |

**Returns:** Promise\<String>

___

### emptyInbox

▸ **emptyInbox**(`inboxId`: string): Promise\<Response>

*Defined in [src/index.ts:227](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L227)*

Deletes all emails

**`summary`** Delete all emails in an inbox

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** Promise\<Response>

___

### getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array\<string>, `sort?`: [SortEnum](../README.md#sortenum), `unreadOnly?`: boolean): Promise\<[PageEmailProjection](../interfaces/pageemailprojection.md)>

*Defined in [src/index.ts:392](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L392)*

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

**`summary`** Get all emails

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`inboxId?` | Array\<string> |
`sort?` | [SortEnum](../README.md#sortenum) |
`unreadOnly?` | boolean |

**Returns:** Promise\<[PageEmailProjection](../interfaces/pageemailprojection.md)>

___

### getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number, `favourite?`: boolean, `search?`: string, `sort?`: [SortEnum](../README.md#sortenum), `tag?`: string): Promise\<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

*Defined in [src/index.ts:262](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L262)*

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.

**`summary`** List Inboxes Paginated

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`favourite?` | boolean |
`search?` | string |
`sort?` | [SortEnum](../README.md#sortenum) |
`tag?` | string |

**Returns:** Promise\<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

___

### getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

*Defined in [src/index.ts:509](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L509)*

Get attachment MetaData

MetaData includes name, size (bytes) and content-type.

**`summary`** Get email attachment metadata

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId  |

**Returns:** Promise\<[AttachmentMetaData](../interfaces/attachmentmetadata.md)>

___

### getEmail

▸ **getEmail**(`emailId`: string): Promise\<[Email](../interfaces/email.md)>

*Defined in [src/index.ts:438](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L438)*

Returns an EmailDto object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

**`summary`** Get email content

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** Promise\<[Email](../interfaces/email.md)>

___

### getEmails

▸ **getEmails**(`inboxId`: string, `args?`: [GetMessagesOptions](../README.md#getmessagesoptions)): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/index.ts:416](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L416)*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`summary`** Get emails in an Inbox

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`inboxId` | string | - | Id of inbox that emails belongs to |
`args` | [GetMessagesOptions](../README.md#getmessagesoptions) | {} | - |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### getInbox

▸ **getInbox**(`inboxId`: string): Promise\<[Inbox](../modules/inbox.md)>

*Defined in [src/index.ts:238](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L238)*

Returns an inbox's properties, including its email address and ID.

**`summary`** Get Inbox

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** Promise\<[Inbox](../modules/inbox.md)>

___

### getInboxes

▸ **getInboxes**(): Promise\<[Inbox](../modules/inbox.md)[]>

*Defined in [src/index.ts:248](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L248)*

List the inboxes you have created

**`summary`** List Inboxes / Email Addresses

**Returns:** Promise\<[Inbox](../modules/inbox.md)[]>

___

### getRawEmail

▸ **getRawEmail**(`emailId`: string): Promise\<string>

*Defined in [src/index.ts:449](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L449)*

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

**`summary`** Get raw email string

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** Promise\<string>

___

### sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: [SendEmailOptions](../modules/sendemailoptions.md)): Promise\<Response>

*Defined in [src/index.ts:461](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L461)*

Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.

**`summary`** Send Email

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions` | [SendEmailOptions](../modules/sendemailoptions.md) | - |

**Returns:** Promise\<Response>

___

### uploadAttachment

▸ **uploadAttachment**(`options`: [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)): Promise\<Array\<String>>

*Defined in [src/index.ts:493](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L493)*

Upload an attachment for use in email sending. Attachment contents must be a base64 encoded string.
When sending emails with attachments first upload each attachment with this endpoint.
Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email.
This means that attachments can easily be reused.

**`summary`** Upload an attachment for sending

#### Parameters:

Name | Type |
------ | ------ |
`options` | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |

**Returns:** Promise\<Array\<String>>

___

### waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/index.ts:356](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L356)*

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`summary`** Wait for and return count number of emails

#### Parameters:

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): Promise\<[Email](../interfaces/email.md)>

*Defined in [src/index.ts:290](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L290)*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.

**`summary`** Fetch inbox's latest email or if empty wait for an email to arrive

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** Promise\<[Email](../interfaces/email.md)>

___

### waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: [MatchOptions](../interfaces/matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/index.ts:331](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L331)*

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.

**`summary`** Wait or return list of emails that match simple matching patterns

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/matchoptions.md) | matchOptions |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number, `unreadOnly?`: boolean): Promise\<[Email](../interfaces/email.md)>

*Defined in [src/index.ts:307](https://github.com/mailslurp/mailslurp-client/blob/aa918cc/src/index.ts#L307)*

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`summary`** Wait for or fetch the email with a given index in the inbox specified

#### Parameters:

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** Promise\<[Email](../interfaces/email.md)>

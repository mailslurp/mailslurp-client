**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / InboxControllerApi

# Class: InboxControllerApi

InboxControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **InboxControllerApi**

## Index

### Constructors

* [constructor](inboxcontrollerapi.md#constructor)

### Properties

* [basePath](inboxcontrollerapi.md#basepath)
* [configuration](inboxcontrollerapi.md#configuration)
* [fetch](inboxcontrollerapi.md#fetch)

### Methods

* [createInbox](inboxcontrollerapi.md#createinbox)
* [deleteAllInboxes](inboxcontrollerapi.md#deleteallinboxes)
* [deleteInbox](inboxcontrollerapi.md#deleteinbox)
* [getAllInboxes](inboxcontrollerapi.md#getallinboxes)
* [getEmails](inboxcontrollerapi.md#getemails)
* [getInbox](inboxcontrollerapi.md#getinbox)
* [getInboxEmailsPaginated](inboxcontrollerapi.md#getinboxemailspaginated)
* [getInboxSentEmails](inboxcontrollerapi.md#getinboxsentemails)
* [getInboxTags](inboxcontrollerapi.md#getinboxtags)
* [getInboxes](inboxcontrollerapi.md#getinboxes)
* [sendEmail](inboxcontrollerapi.md#sendemail)
* [sendEmailAndConfirm](inboxcontrollerapi.md#sendemailandconfirm)
* [setInboxFavourited](inboxcontrollerapi.md#setinboxfavourited)
* [updateInbox](inboxcontrollerapi.md#updateinbox)

## Constructors

### constructor

\+ **new InboxControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [InboxControllerApi](inboxcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [InboxControllerApi](inboxcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L62)*

## Methods

### createInbox

▸ **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array\<string>, `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:11729](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11729)*

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`summary`** Create an Inbox (email address)

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`description?` | string |
`emailAddress?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`name?` | string |
`tags?` | Array\<string> |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### deleteAllInboxes

▸ **deleteAllInboxes**(`options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:11756](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11756)*

Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.

**`summary`** Delete all inboxes

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<Response>

___

### deleteInbox

▸ **deleteInbox**(`inboxId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:11770](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11770)*

Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

**`summary`** Delete inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAllInboxes

▸ **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `tag?`: string, `options?`: any): Promise\<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

*Defined in [src/generated/api.ts:11790](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11790)*

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.

**`summary`** List Inboxes Paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`favourite?` | boolean |
`page?` | number |
`search?` | string |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`tag?` | string |
`options?` | any |

**Returns:** Promise\<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

___

### getEmails

▸ **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/generated/api.ts:11823](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11823)*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`summary`** Get emails in an Inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | Id of inbox that emails belongs to |
`limit?` | number | - |
`minCount?` | number | - |
`retryTimeout?` | number | - |
`since?` | Date | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### getInbox

▸ **getInbox**(`inboxId`: string, `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:11851](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11851)*

Returns an inbox's properties, including its email address and ID.

**`summary`** Get Inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### getInboxEmailsPaginated

▸ **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageEmailPreview](../interfaces/pageemailpreview.md)>

*Defined in [src/generated/api.ts:11869](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11869)*

Get a paginated list of emails in an inbox. Does not hold connections open.

**`summary`** Get inbox emails paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | Id of inbox that emails belongs to |
`page?` | number | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageEmailPreview](../interfaces/pageemailpreview.md)>

___

### getInboxSentEmails

▸ **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)>

*Defined in [src/generated/api.ts:11896](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11896)*

Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.

**`summary`** Get Inbox Sent Emails

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`page?` | number | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)>

___

### getInboxTags

▸ **getInboxTags**(`options?`: any): Promise\<string[]>

*Defined in [src/generated/api.ts:11919](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11919)*

Get all inbox tags

**`summary`** Get inbox tags

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<string[]>

___

### getInboxes

▸ **getInboxes**(`options?`: any): Promise\<[Inbox](../interfaces/inbox.md)[]>

*Defined in [src/generated/api.ts:11933](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11933)*

List the inboxes you have created

**`summary`** List Inboxes / Email Addresses

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)[]>

___

### sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/sendemailoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:11949](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11949)*

Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.

**`summary`** Send Email

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions?` | [SendEmailOptions](../modules/sendemailoptions.md) | - |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### sendEmailAndConfirm

▸ **sendEmailAndConfirm**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/sendemailoptions.md), `options?`: any): Promise\<[SentEmail](../interfaces/sentemail.md)>

*Defined in [src/generated/api.ts:11970](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11970)*

Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with link the the sent object created for it.

**`summary`** Send email and return sent confirmation

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions?` | [SendEmailOptions](../modules/sendemailoptions.md) | - |
`options?` | any | - |

**Returns:** Promise\<[SentEmail](../interfaces/sentemail.md)>

___

### setInboxFavourited

▸ **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/setinboxfavouritedoptions.md), `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:11991](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L11991)*

Set and return new favourite state for an inbox

**`summary`** Set inbox favourited state

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`setInboxFavouritedOptions` | [SetInboxFavouritedOptions](../interfaces/setinboxfavouritedoptions.md) | setInboxFavouritedOptions |
`options?` | any | - |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### updateInbox

▸ **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/updateinboxoptions.md), `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:12012](https://github.com/mailslurp/mailslurp-client/blob/717d89d/src/generated/api.ts#L12012)*

Update editable fields on an inbox

**`summary`** Update Inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`updateInboxOptions` | [UpdateInboxOptions](../interfaces/updateinboxoptions.md) | updateInboxOptions |
`options?` | any | - |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

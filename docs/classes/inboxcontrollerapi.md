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
* [createInboxWithDefaults](inboxcontrollerapi.md#createinboxwithdefaults)
* [createInboxWithOptions](inboxcontrollerapi.md#createinboxwithoptions)
* [deleteAllInboxes](inboxcontrollerapi.md#deleteallinboxes)
* [deleteInbox](inboxcontrollerapi.md#deleteinbox)
* [getAllInboxes](inboxcontrollerapi.md#getallinboxes)
* [getEmails](inboxcontrollerapi.md#getemails)
* [getInbox](inboxcontrollerapi.md#getinbox)
* [getInboxEmailsPaginated](inboxcontrollerapi.md#getinboxemailspaginated)
* [getInboxSentEmails](inboxcontrollerapi.md#getinboxsentemails)
* [getInboxTags](inboxcontrollerapi.md#getinboxtags)
* [getInboxes](inboxcontrollerapi.md#getinboxes)
* [getOrganizationInboxes](inboxcontrollerapi.md#getorganizationinboxes)
* [sendEmail](inboxcontrollerapi.md#sendemail)
* [sendEmailAndConfirm](inboxcontrollerapi.md#sendemailandconfirm)
* [setInboxFavourited](inboxcontrollerapi.md#setinboxfavourited)
* [updateInbox](inboxcontrollerapi.md#updateinbox)

## Constructors

### constructor

\+ **new InboxControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [InboxControllerApi](inboxcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L62)*

## Methods

### createInbox

▸ **createInbox**(`allowTeamAccess?`: boolean, `description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `expiresIn?`: number, `favourite?`: boolean, `name?`: string, `tags?`: Array\<string>, `useDomainPool?`: boolean, `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:16311](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16311)*

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`summary`** Create an inbox email address. An inbox has a real email address and can send and receive emails.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`allowTeamAccess?` | boolean |
`description?` | string |
`emailAddress?` | string |
`expiresAt?` | Date |
`expiresIn?` | number |
`favourite?` | boolean |
`name?` | string |
`tags?` | Array\<string> |
`useDomainPool?` | boolean |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### createInboxWithDefaults

▸ **createInboxWithDefaults**(`options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:16344](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16344)*

**`summary`** Create an inbox with default options. Uses MailSlurp domain pool address and is private.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### createInboxWithOptions

▸ **createInboxWithOptions**(`createInboxDto`: [CreateInboxDto](../modules/createinboxdto.md), `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:16358](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16358)*

Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.

**`summary`** Create an inbox with options. Extended options for inbox creation.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createInboxDto` | [CreateInboxDto](../modules/createinboxdto.md) | createInboxDto |
`options?` | any | - |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### deleteAllInboxes

▸ **deleteAllInboxes**(`options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:16375](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16375)*

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

*Defined in [src/generated/api.ts:16389](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16389)*

Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

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

▸ **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `tag?`: string, `teamAccess?`: boolean, `options?`: any): Promise\<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

*Defined in [src/generated/api.ts:16410](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16410)*

List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results. Results do not include team access inboxes by default. Use organization method to list team inboxes or set `teamAccess` to true.

**`summary`** List All Inboxes Paginated

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
`teamAccess?` | boolean |
`options?` | any |

**Returns:** Promise\<[PageInboxProjection](../interfaces/pageinboxprojection.md)>

___

### getEmails

▸ **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/generated/api.ts:16446](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16446)*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`summary`** Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.

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
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### getInbox

▸ **getInbox**(`inboxId`: string, `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:16476](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16476)*

Returns an inbox's properties, including its email address and ID.

**`summary`** Get Inbox. Returns properties of an inbox.

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

*Defined in [src/generated/api.ts:16494](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16494)*

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

*Defined in [src/generated/api.ts:16521](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16521)*

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

*Defined in [src/generated/api.ts:16544](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16544)*

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

▸ **getInboxes**(`size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)[]>

*Defined in [src/generated/api.ts:16560](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16560)*

List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended. You can provide a limit and sort parameter.

**`summary`** List Inboxes and email eddresses

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)[]>

___

### getOrganizationInboxes

▸ **getOrganizationInboxes**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageOrganizationInboxProjection](../interfaces/pageorganizationinboxprojection.md)>

*Defined in [src/generated/api.ts:16578](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16578)*

List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time).

**`summary`** List Organization Inboxes Paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageOrganizationInboxProjection](../interfaces/pageorganizationinboxprojection.md)>

___

### sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/sendemailoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:16601](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16601)*

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

▸ **sendEmailAndConfirm**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/sendemailoptions.md), `options?`: any): Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

*Defined in [src/generated/api.ts:16622](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16622)*

Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.

**`summary`** Send email and return sent confirmation

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions?` | [SendEmailOptions](../modules/sendemailoptions.md) | - |
`options?` | any | - |

**Returns:** Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

___

### setInboxFavourited

▸ **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/setinboxfavouritedoptions.md), `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:16643](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16643)*

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

*Defined in [src/generated/api.ts:16664](https://github.com/mailslurp/mailslurp-client/blob/fb74c9f/src/generated/api.ts#L16664)*

Update editable fields on an inbox

**`summary`** Update Inbox. Change name and description. Email address is not editable.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`updateInboxOptions` | [UpdateInboxOptions](../interfaces/updateinboxoptions.md) | updateInboxOptions |
`options?` | any | - |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

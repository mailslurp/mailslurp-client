[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["generated/api"](../modules/_generated_api_.md) › [InboxControllerApi](_generated_api_.inboxcontrollerapi.md)

# Class: InboxControllerApi

InboxControllerApi - object-oriented interface

**`export`** 

**`class`** InboxControllerApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **InboxControllerApi**

## Index

### Constructors

* [constructor](_generated_api_.inboxcontrollerapi.md#constructor)

### Properties

* [basePath](_generated_api_.inboxcontrollerapi.md#protected-basepath)
* [configuration](_generated_api_.inboxcontrollerapi.md#protected-configuration)
* [fetch](_generated_api_.inboxcontrollerapi.md#protected-fetch)

### Methods

* [createInbox](_generated_api_.inboxcontrollerapi.md#createinbox)
* [deleteAllInboxes](_generated_api_.inboxcontrollerapi.md#deleteallinboxes)
* [deleteInbox](_generated_api_.inboxcontrollerapi.md#deleteinbox)
* [getAllInboxes](_generated_api_.inboxcontrollerapi.md#getallinboxes)
* [getEmails](_generated_api_.inboxcontrollerapi.md#getemails)
* [getInbox](_generated_api_.inboxcontrollerapi.md#getinbox)
* [getInboxEmailsPaginated](_generated_api_.inboxcontrollerapi.md#getinboxemailspaginated)
* [getInboxTags](_generated_api_.inboxcontrollerapi.md#getinboxtags)
* [getInboxes](_generated_api_.inboxcontrollerapi.md#getinboxes)
* [sendEmail](_generated_api_.inboxcontrollerapi.md#sendemail)
* [setInboxFavourited](_generated_api_.inboxcontrollerapi.md#setinboxfavourited)
* [updateInbox](_generated_api_.inboxcontrollerapi.md#updateinbox)

## Constructors

###  constructor

\+ **new InboxControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[InboxControllerApi](_generated_api_.inboxcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[InboxControllerApi](_generated_api_.inboxcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L62)*

## Methods

###  createInbox

▸ **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/generated/api.ts:10291](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10291)*

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`summary`** Create an Inbox (email address)

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`description?` | string |
`emailAddress?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`name?` | string |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  deleteAllInboxes

▸ **deleteAllInboxes**(`options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:10318](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10318)*

Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.

**`summary`** Delete all inboxes

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:10332](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10332)*

Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

**`summary`** Delete inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllInboxes

▸ **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

*Defined in [src/generated/api.ts:10352](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10352)*

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.

**`summary`** List Inboxes Paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`favourite?` | boolean |
`page?` | number |
`search?` | string |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`tag?` | string |
`options?` | any |

**Returns:** *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

*Defined in [src/generated/api.ts:10385](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10385)*

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`summary`** Get emails in an Inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | Id of inbox that emails belongs to |
`limit?` | number | - |
`minCount?` | number | - |
`retryTimeout?` | number | - |
`since?` | Date | - |
`sort?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/generated/api.ts:10413](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10413)*

Returns an inbox's properties, including its email address and ID.

**`summary`** Get Inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  getInboxEmailsPaginated

▸ **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageEmailPreview](../interfaces/_generated_api_.pageemailpreview.md)›*

*Defined in [src/generated/api.ts:10431](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10431)*

Get a paginated list of emails in an inbox. Does not hold connections open.

**`summary`** Get inbox emails paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | Id of inbox that emails belongs to |
`page?` | number | - |
`size?` | number | - |
`sort?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *Promise‹[PageEmailPreview](../interfaces/_generated_api_.pageemailpreview.md)›*

___

###  getInboxTags

▸ **getInboxTags**(`options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:10454](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10454)*

Get all inbox tags

**`summary`** Get inbox tags

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹string[]›*

___

###  getInboxes

▸ **getInboxes**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

*Defined in [src/generated/api.ts:10468](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10468)*

List the inboxes you have created

**`summary`** List Inboxes / Email Addresses

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:10484](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10484)*

Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.

**`summary`** Send Email

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions?` | [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md) | - |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  setInboxFavourited

▸ **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/generated/api.ts:10505](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10505)*

Set and return new favourite state for an inbox

**`summary`** Set inbox favourited state

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`setInboxFavouritedOptions` | [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md) | setInboxFavouritedOptions |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  updateInbox

▸ **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/generated/api.ts:10526](https://github.com/mailslurp/mailslurp-client-ts-js/blob/7141c32/src/generated/api.ts#L10526)*

Update editable fields on an inbox

**`summary`** Update Inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`updateInboxOptions` | [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md) | updateInboxOptions |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

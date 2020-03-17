[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/InboxControllerApi"](../modules/_lib_apis_inboxcontrollerapi_.md) › [InboxControllerApi](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md)

# Class: InboxControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **InboxControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#protected-configuration)

### Methods

* [createInbox](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#createinbox)
* [createInboxRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#createinboxraw)
* [deleteAllInboxes](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#deleteallinboxes)
* [deleteAllInboxesRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#deleteallinboxesraw)
* [deleteInbox](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#deleteinbox)
* [deleteInboxRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#deleteinboxraw)
* [getAllInboxes](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getallinboxes)
* [getAllInboxesRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getallinboxesraw)
* [getEmails](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getemails)
* [getEmailsRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getemailsraw)
* [getInbox](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getinbox)
* [getInboxEmailsPaginated](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getinboxemailspaginated)
* [getInboxEmailsPaginatedRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getinboxemailspaginatedraw)
* [getInboxRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getinboxraw)
* [getInboxes](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getinboxes)
* [getInboxesRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#getinboxesraw)
* [request](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#protected-request)
* [sendEmail](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#sendemail)
* [sendEmailRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#sendemailraw)
* [setInboxFavourited](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#setinboxfavourited)
* [setInboxFavouritedRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#setinboxfavouritedraw)
* [updateInbox](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#updateinbox)
* [updateInboxRaw](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#updateinboxraw)
* [withMiddleware](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new InboxControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[InboxControllerApi](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[InboxControllerApi](_lib_apis_inboxcontrollerapi_.inboxcontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

###  createInbox

▸ **createInbox**(`requestParameters`: [CreateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.createinboxrequest.md)): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

*Defined in [src/lib/apis/InboxControllerApi.ts:159](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L159)*

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
Create an Inbox (email address)

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.createinboxrequest.md) |

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

___

###  createInboxRaw

▸ **createInboxRaw**(`requestParameters`: [CreateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.createinboxrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:104](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L104)*

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
Create an Inbox (email address)

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [CreateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.createinboxrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

___

###  deleteAllInboxes

▸ **deleteAllInboxes**(): *Promise‹void›*

*Defined in [src/lib/apis/InboxControllerApi.ts:193](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L193)*

Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
Delete all inboxes

**Returns:** *Promise‹void›*

___

###  deleteAllInboxesRaw

▸ **deleteAllInboxesRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/InboxControllerApi.ts:168](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L168)*

Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
Delete all inboxes

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  deleteInbox

▸ **deleteInbox**(`requestParameters`: [DeleteInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.deleteinboxrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/InboxControllerApi.ts:241](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L241)*

Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
Delete inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.deleteinboxrequest.md) |

**Returns:** *Promise‹void›*

___

###  deleteInboxRaw

▸ **deleteInboxRaw**(`requestParameters`: [DeleteInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.deleteinboxrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/InboxControllerApi.ts:201](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L201)*

Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
Delete inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [DeleteInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.deleteinboxrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  getAllInboxes

▸ **getAllInboxes**(`requestParameters`: [GetAllInboxesRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getallinboxesrequest.md)): *Promise‹[PageInboxProjection](../interfaces/_lib_models_pageinboxprojection_.pageinboxprojection.md)›*

*Defined in [src/lib/apis/InboxControllerApi.ts:298](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L298)*

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.
List Inboxes Paginated

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllInboxesRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getallinboxesrequest.md) |

**Returns:** *Promise‹[PageInboxProjection](../interfaces/_lib_models_pageinboxprojection_.pageinboxprojection.md)›*

___

###  getAllInboxesRaw

▸ **getAllInboxesRaw**(`requestParameters`: [GetAllInboxesRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getallinboxesrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageInboxProjection](../interfaces/_lib_models_pageinboxprojection_.pageinboxprojection.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:249](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L249)*

List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.
List Inboxes Paginated

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetAllInboxesRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getallinboxesrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageInboxProjection](../interfaces/_lib_models_pageinboxprojection_.pageinboxprojection.md)››*

___

###  getEmails

▸ **getEmails**(`requestParameters`: [GetEmailsRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getemailsrequest.md)): *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:373](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L373)*

List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
Get emails in an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailsRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getemailsrequest.md) |

**Returns:** *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

___

###  getEmailsRaw

▸ **getEmailsRaw**(`requestParameters`: [GetEmailsRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getemailsrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

*Defined in [src/lib/apis/InboxControllerApi.ts:309](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L309)*

List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
Get emails in an Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetEmailsRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getemailsrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

___

###  getInbox

▸ **getInbox**(`requestParameters`: [GetInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxrequest.md)): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

*Defined in [src/lib/apis/InboxControllerApi.ts:426](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L426)*

Returns an inbox\'s properties, including its email address and ID.
Get Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxrequest.md) |

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

___

###  getInboxEmailsPaginated

▸ **getInboxEmailsPaginated**(`requestParameters`: [GetInboxEmailsPaginatedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxemailspaginatedrequest.md)): *Promise‹[PageEmailPreview](../interfaces/_lib_models_pageemailpreview_.pageemailpreview.md)›*

*Defined in [src/lib/apis/InboxControllerApi.ts:489](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L489)*

Get a paginated list of emails in an inbox. Does not hold connections open.
Get inbox emails paginated

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxEmailsPaginatedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxemailspaginatedrequest.md) |

**Returns:** *Promise‹[PageEmailPreview](../interfaces/_lib_models_pageemailpreview_.pageemailpreview.md)›*

___

###  getInboxEmailsPaginatedRaw

▸ **getInboxEmailsPaginatedRaw**(`requestParameters`: [GetInboxEmailsPaginatedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxemailspaginatedrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageEmailPreview](../interfaces/_lib_models_pageemailpreview_.pageemailpreview.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:435](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L435)*

Get a paginated list of emails in an inbox. Does not hold connections open.
Get inbox emails paginated

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxEmailsPaginatedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxemailspaginatedrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[PageEmailPreview](../interfaces/_lib_models_pageemailpreview_.pageemailpreview.md)››*

___

###  getInboxRaw

▸ **getInboxRaw**(`requestParameters`: [GetInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:384](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L384)*

Returns an inbox\'s properties, including its email address and ID.
Get Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [GetInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.getinboxrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:529](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L529)*

List the inboxes you have created
List Inboxes / Email Addresses

**Returns:** *Promise‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

___

###  getInboxesRaw

▸ **getInboxesRaw**(): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›››*

*Defined in [src/lib/apis/InboxControllerApi.ts:502](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L502)*

List the inboxes you have created
List Inboxes / Email Addresses

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›››*

___

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *Promise‹Response›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[request](_lib_runtime_.baseapi.md#protected-request)*

*Defined in [src/lib/runtime.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  sendEmail

▸ **sendEmail**(`requestParameters`: [SendEmailRequest](../interfaces/_lib_apis_inboxcontrollerapi_.sendemailrequest.md)): *Promise‹void›*

*Defined in [src/lib/apis/InboxControllerApi.ts:581](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L581)*

Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
Send Email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendEmailRequest](../interfaces/_lib_apis_inboxcontrollerapi_.sendemailrequest.md) |

**Returns:** *Promise‹void›*

___

###  sendEmailRaw

▸ **sendEmailRaw**(`requestParameters`: [SendEmailRequest](../interfaces/_lib_apis_inboxcontrollerapi_.sendemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

*Defined in [src/lib/apis/InboxControllerApi.ts:538](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L538)*

Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
Send Email

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SendEmailRequest](../interfaces/_lib_apis_inboxcontrollerapi_.sendemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹void››*

___

###  setInboxFavourited

▸ **setInboxFavourited**(`requestParameters`: [SetInboxFavouritedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.setinboxfavouritedrequest.md)): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

*Defined in [src/lib/apis/InboxControllerApi.ts:646](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L646)*

Set and return new favourite state for an inbox
Set inbox favourited state

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SetInboxFavouritedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.setinboxfavouritedrequest.md) |

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

___

###  setInboxFavouritedRaw

▸ **setInboxFavouritedRaw**(`requestParameters`: [SetInboxFavouritedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.setinboxfavouritedrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:589](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L589)*

Set and return new favourite state for an inbox
Set inbox favourited state

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [SetInboxFavouritedRequest](../interfaces/_lib_apis_inboxcontrollerapi_.setinboxfavouritedrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

___

###  updateInbox

▸ **updateInbox**(`requestParameters`: [UpdateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.updateinboxrequest.md)): *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

*Defined in [src/lib/apis/InboxControllerApi.ts:714](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L714)*

Update editable fields on an inbox
Update Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.updateinboxrequest.md) |

**Returns:** *Promise‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)›*

___

###  updateInboxRaw

▸ **updateInboxRaw**(`requestParameters`: [UpdateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.updateinboxrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

*Defined in [src/lib/apis/InboxControllerApi.ts:657](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/InboxControllerApi.ts#L657)*

Update editable fields on an inbox
Update Inbox

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [UpdateInboxRequest](../interfaces/_lib_apis_inboxcontrollerapi_.updateinboxrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Inbox](../interfaces/_lib_models_inbox_.inbox.md)››*

___

###  withMiddleware

▸ **withMiddleware**<**T**>(`this`: T, ...`middlewares`: [Middleware](../interfaces/_lib_runtime_.middleware.md)[]): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withMiddleware](_lib_runtime_.baseapi.md#withmiddleware)*

*Defined in [src/lib/runtime.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L30)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...middlewares` | [Middleware](../interfaces/_lib_runtime_.middleware.md)[] |

**Returns:** *T*

___

###  withPostMiddleware

▸ **withPostMiddleware**<**T**>(`this`: T, ...`postMiddlewares`: Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPostMiddleware](_lib_runtime_.baseapi.md#withpostmiddleware)*

*Defined in [src/lib/runtime.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L44)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...postMiddlewares` | Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)› |

**Returns:** *T*

___

###  withPreMiddleware

▸ **withPreMiddleware**<**T**>(`this`: T, ...`preMiddlewares`: Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPreMiddleware](_lib_runtime_.baseapi.md#withpremiddleware)*

*Defined in [src/lib/runtime.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L36)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)› |

**Returns:** *T*

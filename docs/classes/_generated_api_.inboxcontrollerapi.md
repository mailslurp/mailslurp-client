# Class: InboxControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **InboxControllerApi**

## Constructors

###  constructor

\+ **new InboxControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[InboxControllerApi](_generated_api_.inboxcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L62)*

## Methods

###  createInbox

▸ **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

*Defined in [src/generated/api.ts:10699](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10699)*

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

*Defined in [src/generated/api.ts:10726](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10726)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:10740](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10740)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllInboxes

▸ **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

*Defined in [src/generated/api.ts:10760](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10760)*

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

*Defined in [src/generated/api.ts:10793](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10793)*

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

*Defined in [src/generated/api.ts:10821](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10821)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

###  getInboxEmailsPaginated

▸ **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageEmailPreview](../interfaces/_generated_api_.pageemailpreview.md)›*

*Defined in [src/generated/api.ts:10839](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10839)*

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

###  getInboxSentEmails

▸ **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

*Defined in [src/generated/api.ts:10866](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10866)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`page?` | number | - |
`size?` | number | - |
`sort?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

___

###  getInboxTags

▸ **getInboxTags**(`options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:10889](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10889)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹string[]›*

___

###  getInboxes

▸ **getInboxes**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

*Defined in [src/generated/api.ts:10903](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10903)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/_generated_api_.sendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:10919](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10919)*

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

*Defined in [src/generated/api.ts:10940](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10940)*

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

*Defined in [src/generated/api.ts:10961](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10961)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`updateInboxOptions` | [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md) | updateInboxOptions |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

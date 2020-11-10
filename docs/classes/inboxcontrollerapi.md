# Class: InboxControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **InboxControllerApi**

## Constructors

###  constructor

\+ **new InboxControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[InboxControllerApi](inboxcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[InboxControllerApi](inboxcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L62)*

## Methods

###  createInbox

▸ **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:11002](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11002)*

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

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  deleteAllInboxes

▸ **deleteAllInboxes**(`options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:11029](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11029)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:11043](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11043)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAllInboxes

▸ **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *Promise‹[PageInboxProjection](../interfaces/pageinboxprojection.md)›*

*Defined in [src/generated/api.ts:11063](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11063)*

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

**Returns:** *Promise‹[PageInboxProjection](../interfaces/pageinboxprojection.md)›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

*Defined in [src/generated/api.ts:11096](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11096)*

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

**Returns:** *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string, `options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:11124](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11124)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  getInboxEmailsPaginated

▸ **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageEmailPreview](../interfaces/pageemailpreview.md)›*

*Defined in [src/generated/api.ts:11142](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11142)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | Id of inbox that emails belongs to |
`page?` | number | - |
`size?` | number | - |
`sort?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *Promise‹[PageEmailPreview](../interfaces/pageemailpreview.md)›*

___

###  getInboxSentEmails

▸ **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)›*

*Defined in [src/generated/api.ts:11169](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11169)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`page?` | number | - |
`size?` | number | - |
`sort?` | "ASC" &#124; "DESC" | - |
`options?` | any | - |

**Returns:** *Promise‹[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)›*

___

###  getInboxTags

▸ **getInboxTags**(`options?`: any): *Promise‹string[]›*

*Defined in [src/generated/api.ts:11192](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11192)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹string[]›*

___

###  getInboxes

▸ **getInboxes**(`options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)[]›*

*Defined in [src/generated/api.ts:11206](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11206)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)[]›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/sendemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:11222](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11222)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions?` | [SendEmailOptions](../modules/sendemailoptions.md) | - |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  setInboxFavourited

▸ **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/setinboxfavouritedoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:11243](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11243)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`setInboxFavouritedOptions` | [SetInboxFavouritedOptions](../interfaces/setinboxfavouritedoptions.md) | setInboxFavouritedOptions |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  updateInbox

▸ **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/updateinboxoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/generated/api.ts:11264](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11264)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`updateInboxOptions` | [UpdateInboxOptions](../interfaces/updateinboxoptions.md) | updateInboxOptions |
`options?` | any | - |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

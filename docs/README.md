# MailSlurp JS

## Type aliases

###  Config

Ƭ **Config**: *object*

*Defined in [src/index.ts:37](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L37)*

#### Type declaration:

* **apiKey**: *string*

* **attribution**? : *string*

* **basePath**? : *string*

* **fetchApi**? : *[FetchAPI](interfaces/fetchapi.md)*

___

###  GetMessagesOptions

Ƭ **GetMessagesOptions**: *object*

*Defined in [src/index.ts:490](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L490)*

#### Type declaration:

* **limit**? : *number*

* **minCount**? : *number*

* **retryTimeout**? : *number*

* **since**? : *Date*

* **sort**? : *[SortEnum](README.md#sortenum)*

___

###  SortEnum

Ƭ **SortEnum**: *"ASC" | "DESC"*

*Defined in [src/index.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L30)*

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  "https://api.mailslurp.com".replace(/\/+$/, "")

*Defined in [src/generated/api.ts:20](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L20)*

## Functions

### `Const` AliasControllerApiFactory

▸ **AliasControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3340](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3340)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](interfaces/createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](interfaces/createanonymousaliasoptions.md), `options?`: any): *Promise‹[Alias](interfaces/alias.md)›*

* **deleteAlias**(`aliasId`: string, `options?`: any): *Promise‹Response›*

* **getAlias**(`aliasId`: string, `options?`: any): *Promise‹[Alias](interfaces/alias.md)›*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageAlias](interfaces/pagealias.md)›*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](interfaces/createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` AliasControllerApiFetchParamCreator

▸ **AliasControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:2959](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L2959)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](interfaces/createownedaliasoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](interfaces/createanonymousaliasoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteAlias**(`aliasId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAlias**(`aliasId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](interfaces/createownedaliasoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` AliasControllerApiFp

▸ **AliasControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:3214](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3214)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](interfaces/createownedaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](interfaces/createanonymousaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Alias](interfaces/alias.md)›*

* **deleteAlias**(`aliasId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAlias**(`aliasId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Alias](interfaces/alias.md)›*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageAlias](interfaces/pagealias.md)›*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](interfaces/createownedaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` AttachmentControllerApiFactory

▸ **AttachmentControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3660](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3660)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](interfaces/uploadattachmentoptions.md), `options?`: any): *Promise‹string[]›*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *Promise‹string[]›*

___

### `Const` AttachmentControllerApiFetchParamCreator

▸ **AttachmentControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:3496](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3496)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](interfaces/uploadattachmentoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` AttachmentControllerApiFp

▸ **AttachmentControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:3609](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3609)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](interfaces/uploadattachmentoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

___

### `Const` BulkActionsControllerApiFactory

▸ **BulkActionsControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3925](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3925)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options?`: any): *Promise‹[Inbox](interfaces/inbox.md)[]›*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *Promise‹Response›*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](interfaces/bulksendemailoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` BulkActionsControllerApiFetchParamCreator

▸ **BulkActionsControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:3730](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3730)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](interfaces/bulksendemailoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` BulkActionsControllerApiFp

▸ **BulkActionsControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:3859](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L3859)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[Inbox](interfaces/inbox.md)››*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](interfaces/bulksendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` CommonActionsControllerApiFactory

▸ **CommonActionsControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:4243](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4243)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createNewEmailAddress**(`options?`: any): *Promise‹[Inbox](interfaces/inbox.md)›*

* **createNewEmailAddress1**(`options?`: any): *Promise‹[Inbox](interfaces/inbox.md)›*

* **emptyInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

* **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](interfaces/simplesendemailoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` CommonActionsControllerApiFetchParamCreator

▸ **CommonActionsControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:4009](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4009)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createNewEmailAddress**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **createNewEmailAddress1**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **emptyInbox**(`inboxId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](interfaces/simplesendemailoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` CommonActionsControllerApiFp

▸ **CommonActionsControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:4160](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4160)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createNewEmailAddress**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Inbox](interfaces/inbox.md)›*

* **createNewEmailAddress1**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Inbox](interfaces/inbox.md)›*

* **emptyInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](interfaces/simplesendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` ContactControllerApiFactory

▸ **ContactControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:4650](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4650)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](interfaces/createcontactoptions.md), `options?`: any): *Promise‹[ContactDto](interfaces/contactdto.md)›*

* **deleteContact**(`contactId`: string, `options?`: any): *Promise‹Response›*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](interfaces/pagecontactprojection.md)›*

* **getContact**(`contactId`: string, `options?`: any): *Promise‹[ContactDto](interfaces/contactdto.md)›*

* **getContacts**(`options?`: any): *Promise‹[ContactProjection](interfaces/contactprojection.md)[]›*

___

### `Const` ContactControllerApiFetchParamCreator

▸ **ContactControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:4345](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4345)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](interfaces/createcontactoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteContact**(`contactId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getContact**(`contactId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getContacts**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` ContactControllerApiFp

▸ **ContactControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:4545](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4545)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](interfaces/createcontactoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[ContactDto](interfaces/contactdto.md)›*

* **deleteContact**(`contactId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageContactProjection](interfaces/pagecontactprojection.md)›*

* **getContact**(`contactId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[ContactDto](interfaces/contactdto.md)›*

* **getContacts**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[ContactProjection](interfaces/contactprojection.md)››*

___

### `Const` DomainControllerApiFactory

▸ **DomainControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:5018](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5018)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](interfaces/createdomainoptions.md), `options?`: any): *Promise‹[DomainDto](interfaces/domaindto.md)›*

* **deleteDomain**(`id`: string, `options?`: any): *Promise‹Response›*

* **getDomain**(`id`: string, `options?`: any): *Promise‹[DomainDto](interfaces/domaindto.md)›*

* **getDomains**(`options?`: any): *Promise‹[DomainPreview](interfaces/domainpreview.md)[]›*

___

### `Const` DomainControllerApiFetchParamCreator

▸ **DomainControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:4780](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4780)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](interfaces/createdomainoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteDomain**(`id`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getDomain**(`id`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getDomains**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` DomainControllerApiFp

▸ **DomainControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:4934](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L4934)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](interfaces/createdomainoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[DomainDto](interfaces/domaindto.md)›*

* **deleteDomain**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getDomain**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[DomainDto](interfaces/domaindto.md)›*

* **getDomains**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[DomainPreview](interfaces/domainpreview.md)››*

___

### `Const` EmailControllerApiFactory

▸ **EmailControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:5919](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5919)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **deleteAllEmails**(`options?`: any): *Promise‹Response›*

* **deleteEmail**(`emailId`: string, `options?`: any): *Promise‹Response›*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *Promise‹string›*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](interfaces/forwardemailoptions.md), `options?`: any): *Promise‹Response›*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](interfaces/attachmentmetadata.md)›*

* **getAttachments**(`emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](interfaces/attachmentmetadata.md)[]›*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹[Email](interfaces/email.md)›*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹string›*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *Promise‹[PageEmailProjection](interfaces/pageemailprojection.md)›*

* **getRawEmailContents**(`emailId`: string, `options?`: any): *Promise‹string›*

* **getRawEmailJson**(`emailId`: string, `options?`: any): *Promise‹[RawEmailJson](interfaces/rawemailjson.md)›*

* **getUnreadEmailCount**(`options?`: any): *Promise‹[UnreadCount](interfaces/unreadcount.md)›*

* **validateEmail**(`emailId`: string, `options?`: any): *Promise‹[ValidationDto](interfaces/validationdto.md)›*

___

### `Const` EmailControllerApiFetchParamCreator

▸ **EmailControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:5122](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5122)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deleteAllEmails**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteEmail**(`emailId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](interfaces/forwardemailoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAttachments**(`emailId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getRawEmailContents**(`emailId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getRawEmailJson**(`emailId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getUnreadEmailCount**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **validateEmail**(`emailId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` EmailControllerApiFp

▸ **EmailControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:5655](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L5655)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **deleteAllEmails**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **deleteEmail**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹string›*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](interfaces/forwardemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[AttachmentMetaData](interfaces/attachmentmetadata.md)›*

* **getAttachments**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[AttachmentMetaData](interfaces/attachmentmetadata.md)››*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Email](interfaces/email.md)›*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹string›*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageEmailProjection](interfaces/pageemailprojection.md)›*

* **getRawEmailContents**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹string›*

* **getRawEmailJson**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[RawEmailJson](interfaces/rawemailjson.md)›*

* **getUnreadEmailCount**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[UnreadCount](interfaces/unreadcount.md)›*

* **validateEmail**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[ValidationDto](interfaces/validationdto.md)›*

___

### `Const` FormControllerApiFactory

▸ **FormControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:6358](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6358)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *Promise‹string›*

___

### `Const` FormControllerApiFetchParamCreator

▸ **FormControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:6239](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6239)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` FormControllerApiFp

▸ **FormControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:6323](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6323)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹string›*

___

### `Const` GroupControllerApiFactory

▸ **GroupControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:6979](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6979)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](interfaces/updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](interfaces/groupcontactsdto.md)›*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](interfaces/creategroupoptions.md), `options?`: any): *Promise‹[GroupDto](interfaces/groupdto.md)›*

* **deleteGroup**(`groupId`: string, `options?`: any): *Promise‹Response›*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageGroupProjection](interfaces/pagegroupprojection.md)›*

* **getGroup**(`groupId`: string, `options?`: any): *Promise‹[GroupDto](interfaces/groupdto.md)›*

* **getGroupWithContacts**(`groupId`: string, `options?`: any): *Promise‹[GroupContactsDto](interfaces/groupcontactsdto.md)›*

* **getGroupWithContactsPaginated**(`groupId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](interfaces/pagecontactprojection.md)›*

* **getGroups**(`options?`: any): *Promise‹[GroupProjection](interfaces/groupprojection.md)[]›*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](interfaces/updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](interfaces/groupcontactsdto.md)›*

___

### `Const` GroupControllerApiFetchParamCreator

▸ **GroupControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:6412](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6412)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](interfaces/updategroupcontacts.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](interfaces/creategroupoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteGroup**(`groupId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getGroup**(`groupId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getGroupWithContacts**(`groupId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getGroupWithContactsPaginated**(`groupId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getGroups**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](interfaces/updategroupcontacts.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` GroupControllerApiFp

▸ **GroupControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:6793](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6793)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](interfaces/updategroupcontacts.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](interfaces/groupcontactsdto.md)›*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](interfaces/creategroupoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[GroupDto](interfaces/groupdto.md)›*

* **deleteGroup**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageGroupProjection](interfaces/pagegroupprojection.md)›*

* **getGroup**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[GroupDto](interfaces/groupdto.md)›*

* **getGroupWithContacts**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](interfaces/groupcontactsdto.md)›*

* **getGroupWithContactsPaginated**(`groupId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageContactProjection](interfaces/pagecontactprojection.md)›*

* **getGroups**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[GroupProjection](interfaces/groupprojection.md)››*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](interfaces/updategroupcontacts.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](interfaces/groupcontactsdto.md)›*

___

### `Const` InboxControllerApiFactory

▸ **InboxControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:8082](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8082)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹[Inbox](interfaces/inbox.md)›*

* **deleteAllInboxes**(`options?`: any): *Promise‹Response›*

* **deleteInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *Promise‹[PageInboxProjection](interfaces/pageinboxprojection.md)›*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[EmailPreview](interfaces/emailpreview.md)[]›*

* **getInbox**(`inboxId`: string, `options?`: any): *Promise‹[Inbox](interfaces/inbox.md)›*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageEmailPreview](interfaces/pageemailpreview.md)›*

* **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](interfaces/pagesentemailprojection.md)›*

* **getInboxTags**(`options?`: any): *Promise‹string[]›*

* **getInboxes**(`options?`: any): *Promise‹[Inbox](interfaces/inbox.md)[]›*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](modules/sendemailoptions.md), `options?`: any): *Promise‹Response›*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](interfaces/setinboxfavouritedoptions.md), `options?`: any): *Promise‹[Inbox](interfaces/inbox.md)›*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](interfaces/updateinboxoptions.md), `options?`: any): *Promise‹[Inbox](interfaces/inbox.md)›*

___

### `Const` InboxControllerApiFetchParamCreator

▸ **InboxControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:7207](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7207)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteAllInboxes**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteInbox**(`inboxId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getInbox**(`inboxId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getInboxTags**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getInboxes**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](modules/sendemailoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](interfaces/setinboxfavouritedoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](interfaces/updateinboxoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` InboxControllerApiFp

▸ **InboxControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:7805](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L7805)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Inbox](interfaces/inbox.md)›*

* **deleteAllInboxes**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **deleteInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageInboxProjection](interfaces/pageinboxprojection.md)›*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](interfaces/emailpreview.md)››*

* **getInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Inbox](interfaces/inbox.md)›*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageEmailPreview](interfaces/pageemailpreview.md)›*

* **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageSentEmailProjection](interfaces/pagesentemailprojection.md)›*

* **getInboxTags**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

* **getInboxes**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[Inbox](interfaces/inbox.md)››*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](modules/sendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](interfaces/setinboxfavouritedoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Inbox](interfaces/inbox.md)›*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](interfaces/updateinboxoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Inbox](interfaces/inbox.md)›*

___

### `Const` MailServerControllerApiFactory

▸ **MailServerControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:8564](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8564)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **describeMailServerDomain**(`describeOptions`: [DescribeDomainOptions](interfaces/describedomainoptions.md), `options?`: any): *Promise‹[DescribeMailServerDomainResult](interfaces/describemailserverdomainresult.md)›*

* **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](interfaces/verifyemailaddressoptions.md), `options?`: any): *Promise‹[EmailVerificationResult](interfaces/emailverificationresult.md)›*

___

### `Const` MailServerControllerApiFetchParamCreator

▸ **MailServerControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:8428](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8428)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **describeMailServerDomain**(`describeOptions`: [DescribeDomainOptions](interfaces/describedomainoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](interfaces/verifyemailaddressoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` MailServerControllerApiFp

▸ **MailServerControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:8517](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8517)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **describeMailServerDomain**(`describeOptions`: [DescribeDomainOptions](interfaces/describedomainoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[DescribeMailServerDomainResult](interfaces/describemailserverdomainresult.md)›*

* **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](interfaces/verifyemailaddressoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[EmailVerificationResult](interfaces/emailverificationresult.md)›*

___

### `Const` SentEmailsControllerApiFactory

▸ **SentEmailsControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:8773](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8773)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **getSentEmail**(`id`: string, `options?`: any): *Promise‹[SentEmailDto](interfaces/sentemaildto.md)›*

* **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](interfaces/pagesentemailprojection.md)›*

___

### `Const` SentEmailsControllerApiFetchParamCreator

▸ **SentEmailsControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:8626](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8626)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getSentEmail**(`id`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` SentEmailsControllerApiFp

▸ **SentEmailsControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:8723](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8723)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getSentEmail**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[SentEmailDto](interfaces/sentemaildto.md)›*

* **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageSentEmailProjection](interfaces/pagesentemailprojection.md)›*

___

### `Const` TemplateControllerApiFactory

▸ **TemplateControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:9146](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9146)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](interfaces/createtemplateoptions.md), `options?`: any): *Promise‹[TemplateDto](interfaces/templatedto.md)›*

* **deleteTemplate**(`templateId`: string, `options?`: any): *Promise‹Response›*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageTemplateProjection](interfaces/pagetemplateprojection.md)›*

* **getTemplate**(`templateId`: string, `options?`: any): *Promise‹[TemplateDto](interfaces/templatedto.md)›*

* **getTemplates**(`options?`: any): *Promise‹[TemplateProjection](interfaces/templateprojection.md)[]›*

___

### `Const` TemplateControllerApiFetchParamCreator

▸ **TemplateControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:8841](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8841)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](interfaces/createtemplateoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteTemplate**(`templateId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getTemplate**(`templateId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getTemplates**(`options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` TemplateControllerApiFp

▸ **TemplateControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:9041](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9041)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](interfaces/createtemplateoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[TemplateDto](interfaces/templatedto.md)›*

* **deleteTemplate**(`templateId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageTemplateProjection](interfaces/pagetemplateprojection.md)›*

* **getTemplate**(`templateId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[TemplateDto](interfaces/templatedto.md)›*

* **getTemplates**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[TemplateProjection](interfaces/templateprojection.md)››*

___

### `Const` WaitForControllerApiFactory

▸ **WaitForControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:9645](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9645)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](modules/waitforconditions.md), `options?`: any): *Promise‹[EmailPreview](interfaces/emailpreview.md)[]›*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](interfaces/emailpreview.md)[]›*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](interfaces/email.md)›*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](interfaces/matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](interfaces/emailpreview.md)[]›*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](interfaces/email.md)›*

___

### `Const` WaitForControllerApiFetchParamCreator

▸ **WaitForControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:9276](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9276)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](modules/waitforconditions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](interfaces/matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` WaitForControllerApiFp

▸ **WaitForControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:9529](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9529)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](modules/waitforconditions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](interfaces/emailpreview.md)››*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](interfaces/emailpreview.md)››*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Email](interfaces/email.md)›*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](interfaces/matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](interfaces/emailpreview.md)››*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[Email](interfaces/email.md)›*

___

### `Const` WebhookControllerApiFactory

▸ **WebhookControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:10179](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10179)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`fetch?` | [FetchAPI](interfaces/fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](interfaces/createwebhookoptions.md), `options?`: any): *Promise‹[WebhookDto](modules/webhookdto.md)›*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *Promise‹Response›*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageWebhookProjection](interfaces/pagewebhookprojection.md)›*

* **getWebhook**(`webhookId`: string, `options?`: any): *Promise‹[WebhookDto](modules/webhookdto.md)›*

* **getWebhooks**(`inboxId`: string, `options?`: any): *Promise‹[WebhookDto](modules/webhookdto.md)[]›*

* **sendTestData**(`webhookId`: string, `options?`: any): *Promise‹[WebhookTestResult](interfaces/webhooktestresult.md)›*

___

### `Const` WebhookControllerApiFetchParamCreator

▸ **WebhookControllerApiFetchParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:9797](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L9797)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](interfaces/createwebhookoptions.md), `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getWebhook**(`webhookId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **getWebhooks**(`inboxId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

* **sendTestData**(`webhookId`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` WebhookControllerApiFp

▸ **WebhookControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:10052](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L10052)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](interfaces/createwebhookoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[WebhookDto](modules/webhookdto.md)›*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[PageWebhookProjection](interfaces/pagewebhookprojection.md)›*

* **getWebhook**(`webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[WebhookDto](modules/webhookdto.md)›*

* **getWebhooks**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹Array‹[WebhookDto](modules/webhookdto.md)››*

* **sendTestData**(`webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *Promise‹[WebhookTestResult](interfaces/webhooktestresult.md)›*

___

###  wrapCall

▸ **wrapCall**<**T**>(`tag`: String, `fn`: function): *Promise‹T›*

*Defined in [src/index.ts:505](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L505)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **tag**: *String*

▪ **fn**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [src/generated/api.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L26)*

###  csv

• **csv**: *string* = ","

*Defined in [src/generated/api.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [src/generated/api.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [src/generated/api.ts:28](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [src/generated/api.ts:29](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L29)*

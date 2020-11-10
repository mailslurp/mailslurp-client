# MailSlurp JS

## Type aliases

###  Config

Ƭ **Config**: *object*

*Defined in [src/index.ts:37](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/index.ts#L37)*

#### Type declaration:

* **apiKey**: *string*

* **attribution**? : *string*

* **basePath**? : *string*

* **fetchApi**? : *[FetchAPI](interfaces/fetchapi.md)*

___

###  GetMessagesOptions

Ƭ **GetMessagesOptions**: *object*

*Defined in [src/index.ts:490](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/index.ts#L490)*

#### Type declaration:

* **limit**? : *number*

* **minCount**? : *number*

* **retryTimeout**? : *number*

* **since**? : *Date*

* **sort**? : *[SortEnum](README.md#sortenum)*

___

###  SortEnum

Ƭ **SortEnum**: *"ASC" | "DESC"*

*Defined in [src/index.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/index.ts#L30)*

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  'https://api.mailslurp.com'.replace(/\/+$/, '')

*Defined in [src/generated/api.ts:19](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L19)*

## Functions

### `Const` AliasControllerApiFactory

▸ **AliasControllerApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `fetch?`: [FetchAPI](interfaces/fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3553](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L3553)*

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

*Defined in [src/generated/api.ts:2960](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L2960)*

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

*Defined in [src/generated/api.ts:3358](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L3358)*

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

*Defined in [src/generated/api.ts:4038](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4038)*

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

*Defined in [src/generated/api.ts:3784](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L3784)*

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

*Defined in [src/generated/api.ts:3952](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L3952)*

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

*Defined in [src/generated/api.ts:4449](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4449)*

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

*Defined in [src/generated/api.ts:4153](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4153)*

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

*Defined in [src/generated/api.ts:4348](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4348)*

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

*Defined in [src/generated/api.ts:4906](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4906)*

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

*Defined in [src/generated/api.ts:4560](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4560)*

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

*Defined in [src/generated/api.ts:4779](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L4779)*

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

*Defined in [src/generated/api.ts:5497](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L5497)*

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

*Defined in [src/generated/api.ts:5034](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L5034)*

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

*Defined in [src/generated/api.ts:5330](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L5330)*

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

*Defined in [src/generated/api.ts:6039](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L6039)*

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

*Defined in [src/generated/api.ts:5680](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L5680)*

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

*Defined in [src/generated/api.ts:5909](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L5909)*

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

*Defined in [src/generated/api.ts:7402](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L7402)*

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

*Defined in [src/generated/api.ts:6170](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L6170)*

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

*Defined in [src/generated/api.ts:6971](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L6971)*

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

*Defined in [src/generated/api.ts:8039](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L8039)*

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

*Defined in [src/generated/api.ts:7860](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L7860)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options`: any): *[FetchArgs](interfaces/fetchargs.md)*

___

### `Const` FormControllerApiFp

▸ **FormControllerApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [src/generated/api.ts:7976](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L7976)*

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

*Defined in [src/generated/api.ts:9025](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L9025)*

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

*Defined in [src/generated/api.ts:8136](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L8136)*

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

*Defined in [src/generated/api.ts:8721](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L8721)*

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

*Defined in [src/generated/api.ts:10712](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L10712)*

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

*Defined in [src/generated/api.ts:9360](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L9360)*

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

*Defined in [src/generated/api.ts:10246](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L10246)*

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

*Defined in [src/generated/api.ts:11497](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11497)*

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

*Defined in [src/generated/api.ts:11281](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11281)*

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

*Defined in [src/generated/api.ts:11420](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11420)*

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

*Defined in [src/generated/api.ts:11806](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11806)*

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

*Defined in [src/generated/api.ts:11590](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11590)*

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

*Defined in [src/generated/api.ts:11726](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11726)*

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

*Defined in [src/generated/api.ts:12370](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12370)*

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

*Defined in [src/generated/api.ts:11907](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L11907)*

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

*Defined in [src/generated/api.ts:12203](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12203)*

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

*Defined in [src/generated/api.ts:13111](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L13111)*

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

*Defined in [src/generated/api.ts:12552](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12552)*

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

*Defined in [src/generated/api.ts:12912](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L12912)*

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

*Defined in [src/generated/api.ts:13953](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L13953)*

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

*Defined in [src/generated/api.ts:13368](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L13368)*

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

*Defined in [src/generated/api.ts:13753](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L13753)*

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

*Defined in [src/index.ts:505](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/index.ts#L505)*

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

*Defined in [src/generated/api.ts:25](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L25)*

###  csv

• **csv**: *string* = ","

*Defined in [src/generated/api.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L26)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [src/generated/api.ts:29](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L29)*

###  ssv

• **ssv**: *string* = " "

*Defined in [src/generated/api.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L27)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [src/generated/api.ts:28](https://github.com/mailslurp/mailslurp-client-ts-js/blob/9736ebe/src/generated/api.ts#L28)*

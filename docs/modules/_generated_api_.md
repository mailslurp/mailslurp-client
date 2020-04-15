# External module: "generated/api"

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  "https://api.mailslurp.com".replace(/\/+$/, "")

*Defined in [src/generated/api.ts:20](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L20)*

## Functions

### `Const` AliasControllerApiFactory

▸ **AliasControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3032](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3032)*

AliasControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md), `options?`: any): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **deleteAlias**(`aliasId`: string, `options?`: any): *Promise‹Response›*

* **getAlias**(`aliasId`: string, `options?`: any): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageAlias](../interfaces/_generated_api_.pagealias.md)›*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` AliasControllerApiFetchParamCreator

▸ **AliasControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:2651](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2651)*

AliasControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteAlias**(`aliasId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAlias**(`aliasId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` AliasControllerApiFp

▸ **AliasControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:2906](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L2906)*

AliasControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **deleteAlias**(`aliasId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAlias**(`aliasId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageAlias](../interfaces/_generated_api_.pagealias.md)›*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` AttachmentControllerApiFactory

▸ **AttachmentControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3352](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3352)*

AttachmentControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options?`: any): *Promise‹string[]›*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *Promise‹string[]›*

___

### `Const` AttachmentControllerApiFetchParamCreator

▸ **AttachmentControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3188](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3188)*

AttachmentControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` AttachmentControllerApiFp

▸ **AttachmentControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3301](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3301)*

AttachmentControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

___

### `Const` BulkActionsControllerApiFactory

▸ **BulkActionsControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3617](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3617)*

BulkActionsControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *Promise‹Response›*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` BulkActionsControllerApiFetchParamCreator

▸ **BulkActionsControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3422](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3422)*

BulkActionsControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` BulkActionsControllerApiFp

▸ **BulkActionsControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3551](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3551)*

BulkActionsControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[Inbox](../interfaces/_generated_api_.inbox.md)››*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` CommonActionsControllerApiFactory

▸ **CommonActionsControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3886](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3886)*

CommonActionsControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createNewEmailAddress**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **emptyInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

* **sendEmailSimple**(`sendEmailOptions`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` CommonActionsControllerApiFetchParamCreator

▸ **CommonActionsControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3701](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3701)*

CommonActionsControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createNewEmailAddress**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **emptyInbox**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **sendEmailSimple**(`sendEmailOptions`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` CommonActionsControllerApiFp

▸ **CommonActionsControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3821](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3821)*

CommonActionsControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createNewEmailAddress**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **emptyInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **sendEmailSimple**(`sendEmailOptions`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` ContactControllerApiFactory

▸ **ContactControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:4273](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L4273)*

ContactControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options?`: any): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **deleteContact**(`contactId`: string, `options?`: any): *Promise‹Response›*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](../interfaces/_generated_api_.pagecontactprojection.md)›*

* **getContact**(`contactId`: string, `options?`: any): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **getContacts**(`options?`: any): *Promise‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)[]›*

___

### `Const` ContactControllerApiFetchParamCreator

▸ **ContactControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3968](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L3968)*

ContactControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteContact**(`contactId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getContact**(`contactId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getContacts**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` ContactControllerApiFp

▸ **ContactControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4168](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L4168)*

ContactControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **deleteContact**(`contactId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageContactProjection](../interfaces/_generated_api_.pagecontactprojection.md)›*

* **getContact**(`contactId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **getContacts**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)››*

___

### `Const` DomainControllerApiFactory

▸ **DomainControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:4641](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L4641)*

DomainControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md), `options?`: any): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **deleteDomain**(`id`: string, `options?`: any): *Promise‹Response›*

* **getDomain**(`id`: string, `options?`: any): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **getDomains**(`options?`: any): *Promise‹[DomainPreview](../interfaces/_generated_api_.domainpreview.md)[]›*

___

### `Const` DomainControllerApiFetchParamCreator

▸ **DomainControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4403](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L4403)*

DomainControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteDomain**(`id`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getDomain**(`id`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getDomains**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` DomainControllerApiFp

▸ **DomainControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4557](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L4557)*

DomainControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **deleteDomain**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getDomain**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **getDomains**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[DomainPreview](../interfaces/_generated_api_.domainpreview.md)››*

___

### `Const` EmailControllerApiFactory

▸ **EmailControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:5542](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L5542)*

EmailControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **deleteAllEmails**(`options?`: any): *Promise‹Response›*

* **deleteEmail**(`emailId`: string, `options?`: any): *Promise‹Response›*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *Promise‹string›*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options?`: any): *Promise‹Response›*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

* **getAttachments**(`emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)[]›*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹string›*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

* **getRawEmailContents**(`emailId`: string, `options?`: any): *Promise‹string›*

* **getRawEmailJson**(`emailId`: string, `options?`: any): *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

* **getUnreadEmailCount**(`options?`: any): *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

* **validateEmail**(`emailId`: string, `options?`: any): *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

___

### `Const` EmailControllerApiFetchParamCreator

▸ **EmailControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4745](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L4745)*

EmailControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **deleteAllEmails**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteEmail**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAttachments**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getRawEmailContents**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getRawEmailJson**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getUnreadEmailCount**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **validateEmail**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` EmailControllerApiFp

▸ **EmailControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:5278](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L5278)*

EmailControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **deleteAllEmails**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **deleteEmail**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

* **getAttachments**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)››*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

* **getRawEmailContents**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

* **getRawEmailJson**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

* **getUnreadEmailCount**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

* **validateEmail**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

___

### `Const` FormControllerApiFactory

▸ **FormControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:5981](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L5981)*

FormControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *Promise‹string›*

___

### `Const` FormControllerApiFetchParamCreator

▸ **FormControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:5862](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L5862)*

FormControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` FormControllerApiFp

▸ **FormControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:5946](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L5946)*

FormControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

___

### `Const` GroupControllerApiFactory

▸ **GroupControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:6528](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L6528)*

GroupControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md), `options?`: any): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **deleteGroup**(`groupId`: string, `options?`: any): *Promise‹Response›*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageGroupProjection](../interfaces/_generated_api_.pagegroupprojection.md)›*

* **getGroup**(`groupId`: string, `options?`: any): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **getGroupWithContacts**(`groupId`: string, `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **getGroups**(`options?`: any): *Promise‹[GroupProjection](../interfaces/_generated_api_.groupprojection.md)[]›*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

___

### `Const` GroupControllerApiFetchParamCreator

▸ **GroupControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:6035](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L6035)*

GroupControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteGroup**(`groupId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getGroup**(`groupId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getGroupWithContacts**(`groupId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getGroups**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` GroupControllerApiFp

▸ **GroupControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:6364](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L6364)*

GroupControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **deleteGroup**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageGroupProjection](../interfaces/_generated_api_.pagegroupprojection.md)›*

* **getGroup**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **getGroupWithContacts**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **getGroups**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[GroupProjection](../interfaces/_generated_api_.groupprojection.md)››*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

___

### `Const` InboxControllerApiFactory

▸ **InboxControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:7529](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L7529)*

InboxControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **deleteAllInboxes**(`options?`: any): *Promise‹Response›*

* **deleteInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **getInbox**(`inboxId`: string, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageEmailPreview](../interfaces/_generated_api_.pageemailpreview.md)›*

* **getInboxTags**(`options?`: any): *Promise‹string[]›*

* **getInboxes**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options?`: any): *Promise‹Response›*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

### `Const` InboxControllerApiFetchParamCreator

▸ **InboxControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:6728](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L6728)*

InboxControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteAllInboxes**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteInbox**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInbox**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInboxTags**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInboxes**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` InboxControllerApiFp

▸ **InboxControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:7274](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L7274)*

InboxControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **deleteAllInboxes**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **deleteInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **getInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageEmailPreview](../interfaces/_generated_api_.pageemailpreview.md)›*

* **getInboxTags**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

* **getInboxes**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[Inbox](../interfaces/_generated_api_.inbox.md)››*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

### `Const` TemplateControllerApiFactory

▸ **TemplateControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:8152](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L8152)*

TemplateControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options?`: any): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **deleteTemplate**(`templateId`: string, `options?`: any): *Promise‹Response›*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageTemplateProjection](../interfaces/_generated_api_.pagetemplateprojection.md)›*

* **getTemplate**(`templateId`: string, `options?`: any): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **getTemplates**(`options?`: any): *Promise‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)[]›*

___

### `Const` TemplateControllerApiFetchParamCreator

▸ **TemplateControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:7847](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L7847)*

TemplateControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteTemplate**(`templateId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getTemplate**(`templateId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getTemplates**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` TemplateControllerApiFp

▸ **TemplateControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:8047](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L8047)*

TemplateControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **deleteTemplate**(`templateId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageTemplateProjection](../interfaces/_generated_api_.pagetemplateprojection.md)›*

* **getTemplate**(`templateId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **getTemplates**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)››*

___

### `Const` WaitForControllerApiFactory

▸ **WaitForControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:8651](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L8651)*

WaitForControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](_generated_api_.waitforconditions.md), `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

### `Const` WaitForControllerApiFetchParamCreator

▸ **WaitForControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:8282](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L8282)*

WaitForControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](_generated_api_.waitforconditions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` WaitForControllerApiFp

▸ **WaitForControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:8535](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L8535)*

WaitForControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](_generated_api_.waitforconditions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

### `Const` WebhookControllerApiFactory

▸ **WebhookControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:9185](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L9185)*

WebhookControllerApi - factory interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md), `options?`: any): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *Promise‹Response›*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageWebhookProjection](../interfaces/_generated_api_.pagewebhookprojection.md)›*

* **getWebhook**(`webhookId`: string, `options?`: any): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **getWebhooks**(`inboxId`: string, `options?`: any): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)[]›*

* **sendTestData**(`webhookId`: string, `options?`: any): *Promise‹[WebhookTestResult](../interfaces/_generated_api_.webhooktestresult.md)›*

___

### `Const` WebhookControllerApiFetchParamCreator

▸ **WebhookControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:8803](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L8803)*

WebhookControllerApi - fetch parameter creator

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getWebhook**(`webhookId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getWebhooks**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **sendTestData**(`webhookId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` WebhookControllerApiFp

▸ **WebhookControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:9058](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L9058)*

WebhookControllerApi - functional programming interface

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageWebhookProjection](../interfaces/_generated_api_.pagewebhookprojection.md)›*

* **getWebhook**(`webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **getWebhooks**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[WebhookDto](_generated_api_.webhookdto.md)››*

* **sendTestData**(`webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[WebhookTestResult](../interfaces/_generated_api_.webhooktestresult.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [src/generated/api.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [src/generated/api.ts:27](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [src/generated/api.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [src/generated/api.ts:28](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [src/generated/api.ts:29](https://github.com/mailslurp/mailslurp-client-ts-js/blob/c5d4ad1/src/generated/api.ts#L29)*

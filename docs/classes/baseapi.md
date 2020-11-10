# Class: BaseAPI

## Hierarchy

* **BaseAPI**

  ↳ [AliasControllerApi](aliascontrollerapi.md)

  ↳ [AttachmentControllerApi](attachmentcontrollerapi.md)

  ↳ [BulkActionsControllerApi](bulkactionscontrollerapi.md)

  ↳ [CommonActionsControllerApi](commonactionscontrollerapi.md)

  ↳ [ContactControllerApi](contactcontrollerapi.md)

  ↳ [DomainControllerApi](domaincontrollerapi.md)

  ↳ [EmailControllerApi](emailcontrollerapi.md)

  ↳ [FormControllerApi](formcontrollerapi.md)

  ↳ [GroupControllerApi](groupcontrollerapi.md)

  ↳ [InboxControllerApi](inboxcontrollerapi.md)

  ↳ [MailServerControllerApi](mailservercontrollerapi.md)

  ↳ [SentEmailsControllerApi](sentemailscontrollerapi.md)

  ↳ [TemplateControllerApi](templatecontrollerapi.md)

  ↳ [WaitForControllerApi](waitforcontrollerapi.md)

  ↳ [WebhookControllerApi](webhookcontrollerapi.md)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[BaseAPI](baseapi.md)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[BaseAPI](baseapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

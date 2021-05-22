**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / BaseAPI

# Class: BaseAPI

**`export`** 

## Hierarchy

* **BaseAPI**

  ↳ [AliasControllerApi](aliascontrollerapi.md)

  ↳ [AttachmentControllerApi](attachmentcontrollerapi.md)

  ↳ [BulkActionsControllerApi](bulkactionscontrollerapi.md)

  ↳ [CommonActionsControllerApi](commonactionscontrollerapi.md)

  ↳ [ContactControllerApi](contactcontrollerapi.md)

  ↳ [DomainControllerApi](domaincontrollerapi.md)

  ↳ [EmailControllerApi](emailcontrollerapi.md)

  ↳ [ExpiredControllerApi](expiredcontrollerapi.md)

  ↳ [FormControllerApi](formcontrollerapi.md)

  ↳ [GroupControllerApi](groupcontrollerapi.md)

  ↳ [InboxControllerApi](inboxcontrollerapi.md)

  ↳ [MailServerControllerApi](mailservercontrollerapi.md)

  ↳ [MissedEmailControllerApi](missedemailcontrollerapi.md)

  ↳ [SentEmailsControllerApi](sentemailscontrollerapi.md)

  ↳ [TemplateControllerApi](templatecontrollerapi.md)

  ↳ [WaitForControllerApi](waitforcontrollerapi.md)

  ↳ [WebhookControllerApi](webhookcontrollerapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [basePath](baseapi.md#basepath)
* [configuration](baseapi.md#configuration)
* [fetch](baseapi.md#fetch)

## Constructors

### constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [BaseAPI](baseapi.md)

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [BaseAPI](baseapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a36d929/src/generated/api.ts#L62)*

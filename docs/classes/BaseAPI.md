[MailSlurp JS](../README.md) / BaseAPI

# Class: BaseAPI

**`export`**

## Hierarchy

- **`BaseAPI`**

  ↳ [`AliasControllerApi`](AliasControllerApi.md)

  ↳ [`AttachmentControllerApi`](AttachmentControllerApi.md)

  ↳ [`BounceControllerApi`](BounceControllerApi.md)

  ↳ [`BulkActionsControllerApi`](BulkActionsControllerApi.md)

  ↳ [`CommonActionsControllerApi`](CommonActionsControllerApi.md)

  ↳ [`ContactControllerApi`](ContactControllerApi.md)

  ↳ [`DomainControllerApi`](DomainControllerApi.md)

  ↳ [`EmailControllerApi`](EmailControllerApi.md)

  ↳ [`ExpiredControllerApi`](ExpiredControllerApi.md)

  ↳ [`ExportControllerApi`](ExportControllerApi.md)

  ↳ [`FormControllerApi`](FormControllerApi.md)

  ↳ [`GroupControllerApi`](GroupControllerApi.md)

  ↳ [`InboxControllerApi`](InboxControllerApi.md)

  ↳ [`InboxForwarderControllerApi`](InboxForwarderControllerApi.md)

  ↳ [`InboxRulesetControllerApi`](InboxRulesetControllerApi.md)

  ↳ [`MailServerControllerApi`](MailServerControllerApi.md)

  ↳ [`MissedEmailControllerApi`](MissedEmailControllerApi.md)

  ↳ [`SentEmailsControllerApi`](SentEmailsControllerApi.md)

  ↳ [`TemplateControllerApi`](TemplateControllerApi.md)

  ↳ [`TrackingControllerApi`](TrackingControllerApi.md)

  ↳ [`WaitForControllerApi`](WaitForControllerApi.md)

  ↳ [`WebhookControllerApi`](WebhookControllerApi.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [basePath](BaseAPI.md#basepath)
- [configuration](BaseAPI.md#configuration)
- [fetch](BaseAPI.md#fetch)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/f0f645f/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

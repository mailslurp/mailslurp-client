# Class: SentEmailsControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SentEmailsControllerApi**

## Constructors

###  constructor

\+ **new SentEmailsControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[SentEmailsControllerApi](sentemailscontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[SentEmailsControllerApi](sentemailscontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

## Methods

###  getSentEmail

▸ **getSentEmail**(`id`: string, `options?`: any): *Promise‹[SentEmailDto](../interfaces/sentemaildto.md)›*

*Defined in [src/generated/api.ts:8816](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8816)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹[SentEmailDto](../interfaces/sentemaildto.md)›*

___

###  getSentEmails

▸ **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)›*

*Defined in [src/generated/api.ts:8831](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L8831)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)›*

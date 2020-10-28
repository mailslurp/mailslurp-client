# Class: SentEmailsControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **SentEmailsControllerApi**

## Constructors

###  constructor

\+ **new SentEmailsControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[SentEmailsControllerApi](_generated_api_.sentemailscontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[SentEmailsControllerApi](_generated_api_.sentemailscontrollerapi.md)*

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

###  getSentEmail

▸ **getSentEmail**(`id`: string, `options?`: any): *Promise‹[SentEmail](../interfaces/_generated_api_.sentemail.md)›*

*Defined in [src/generated/api.ts:11552](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11552)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** *Promise‹[SentEmail](../interfaces/_generated_api_.sentemail.md)›*

___

###  getSentEmails

▸ **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

*Defined in [src/generated/api.ts:11570](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11570)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`options?` | any |

**Returns:** *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

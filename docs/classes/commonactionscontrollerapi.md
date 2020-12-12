**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CommonActionsControllerApi

# Class: CommonActionsControllerApi

CommonActionsControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CommonActionsControllerApi**

## Index

### Constructors

* [constructor](commonactionscontrollerapi.md#constructor)

### Properties

* [basePath](commonactionscontrollerapi.md#basepath)
* [configuration](commonactionscontrollerapi.md#configuration)
* [fetch](commonactionscontrollerapi.md#fetch)

### Methods

* [createNewEmailAddress](commonactionscontrollerapi.md#createnewemailaddress)
* [createNewEmailAddress1](commonactionscontrollerapi.md#createnewemailaddress1)
* [emptyInbox](commonactionscontrollerapi.md#emptyinbox)
* [sendEmailSimple](commonactionscontrollerapi.md#sendemailsimple)

## Constructors

### constructor

\+ **new CommonActionsControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [CommonActionsControllerApi](commonactionscontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [CommonActionsControllerApi](commonactionscontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L62)*

## Methods

### createNewEmailAddress

▸ **createNewEmailAddress**(`options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:5776](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L5776)*

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### createNewEmailAddress1

▸ **createNewEmailAddress1**(`options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:5789](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L5789)*

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### emptyInbox

▸ **emptyInbox**(`inboxId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:5803](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L5803)*

Deletes all emails

**`summary`** Delete all emails in an inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### sendEmailSimple

▸ **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](../interfaces/simplesendemailoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:5818](https://github.com/mailslurp/mailslurp-client/blob/8726614/src/generated/api.ts#L5818)*

If no senderId or inboxId provided a random email address will be used to send from.

**`summary`** Send an email

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emailOptions` | [SimpleSendEmailOptions](../interfaces/simplesendemailoptions.md) | emailOptions |
`options?` | any | - |

**Returns:** Promise\<Response>

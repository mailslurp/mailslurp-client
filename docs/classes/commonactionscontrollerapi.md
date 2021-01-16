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

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L57)*

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

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L62)*

## Methods

### createNewEmailAddress

▸ **createNewEmailAddress**(`expiresAt?`: Date, `expiresIn?`: number, `useDomainPool?`: boolean, `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:6872](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L6872)*

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`expiresAt?` | Date |
`expiresIn?` | number |
`useDomainPool?` | boolean |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### createNewEmailAddress1

▸ **createNewEmailAddress1**(`expiresAt?`: Date, `expiresIn?`: number, `useDomainPool?`: boolean, `options?`: any): Promise\<[Inbox](../interfaces/inbox.md)>

*Defined in [src/generated/api.ts:6896](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L6896)*

Returns an Inbox with an `id` and an `emailAddress`

**`summary`** Create new random inbox

**`throws`** {RequiredError}

**`memberof`** CommonActionsControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`expiresAt?` | Date |
`expiresIn?` | number |
`useDomainPool?` | boolean |
`options?` | any |

**Returns:** Promise\<[Inbox](../interfaces/inbox.md)>

___

### emptyInbox

▸ **emptyInbox**(`inboxId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:6918](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L6918)*

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

*Defined in [src/generated/api.ts:6933](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L6933)*

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

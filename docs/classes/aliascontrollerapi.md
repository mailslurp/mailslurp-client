**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / AliasControllerApi

# Class: AliasControllerApi

AliasControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AliasControllerApi**

## Index

### Constructors

* [constructor](aliascontrollerapi.md#constructor)

### Properties

* [basePath](aliascontrollerapi.md#basepath)
* [configuration](aliascontrollerapi.md#configuration)
* [fetch](aliascontrollerapi.md#fetch)

### Methods

* [createAlias](aliascontrollerapi.md#createalias)
* [deleteAlias](aliascontrollerapi.md#deletealias)
* [getAlias](aliascontrollerapi.md#getalias)
* [getAliasEmails](aliascontrollerapi.md#getaliasemails)
* [getAliasThreads](aliascontrollerapi.md#getaliasthreads)
* [getAliases](aliascontrollerapi.md#getaliases)
* [replyToAliasEmail](aliascontrollerapi.md#replytoaliasemail)
* [sendAliasEmail](aliascontrollerapi.md#sendaliasemail)
* [updateAlias](aliascontrollerapi.md#updatealias)

## Constructors

### constructor

\+ **new AliasControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [AliasControllerApi](aliascontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [AliasControllerApi](aliascontrollerapi.md)

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

### createAlias

▸ **createAlias**(`createAliasOptions`: [CreateAliasOptions](../interfaces/createaliasoptions.md), `options?`: any): Promise\<[AliasDto](../interfaces/aliasdto.md)>

*Defined in [src/generated/api.ts:5484](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5484)*

Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached

**`summary`** Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createAliasOptions` | [CreateAliasOptions](../interfaces/createaliasoptions.md) | createAliasOptions |
`options?` | any | - |

**Returns:** Promise\<[AliasDto](../interfaces/aliasdto.md)>

___

### deleteAlias

▸ **deleteAlias**(`aliasId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:5499](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5499)*

**`summary`** Delete an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAlias

▸ **getAlias**(`aliasId`: string, `options?`: any): Promise\<[AliasDto](../interfaces/aliasdto.md)>

*Defined in [src/generated/api.ts:5514](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5514)*

Get an email alias by ID

**`summary`** Get an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`options?` | any | - |

**Returns:** Promise\<[AliasDto](../interfaces/aliasdto.md)>

___

### getAliasEmails

▸ **getAliasEmails**(`aliasId`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageEmailProjection](../interfaces/pageemailprojection.md)>

*Defined in [src/generated/api.ts:5532](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5532)*

Get paginated emails for an alias by ID

**`summary`** Get emails for an alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`page?` | number | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageEmailProjection](../interfaces/pageemailprojection.md)>

___

### getAliasThreads

▸ **getAliasThreads**(`aliasId`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageThreadProjection](../interfaces/pagethreadprojection.md)>

*Defined in [src/generated/api.ts:5559](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5559)*

Returns threads created for an email alias in paginated form

**`summary`** Get threads created for an alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`page?` | number | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageThreadProjection](../interfaces/pagethreadprojection.md)>

___

### getAliases

▸ **getAliases**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageAlias](../interfaces/pagealias.md)>

*Defined in [src/generated/api.ts:5585](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5585)*

Get all email aliases in paginated form

**`summary`** Get all email aliases you have created

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageAlias](../interfaces/pagealias.md)>

___

### replyToAliasEmail

▸ **replyToAliasEmail**(`aliasId`: string, `emailId`: string, `replyToAliasEmailOptions`: [ReplyToAliasEmailOptions](../modules/replytoaliasemailoptions.md), `options?`: any): Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

*Defined in [src/generated/api.ts:5609](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5609)*

Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.

**`summary`** Reply to an email

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | ID of the alias that email belongs to |
`emailId` | string | ID of the email that should be replied to |
`replyToAliasEmailOptions` | [ReplyToAliasEmailOptions](../modules/replytoaliasemailoptions.md) | replyToAliasEmailOptions |
`options?` | any | - |

**Returns:** Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

___

### sendAliasEmail

▸ **sendAliasEmail**(`aliasId`: string, `sendEmailOptions?`: [SendEmailOptions](../modules/sendemailoptions.md), `options?`: any): Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

*Defined in [src/generated/api.ts:5632](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5632)*

Send an email from an alias. Replies to the email will be forwarded to the alias masked email address

**`summary`** Send an email from an alias inbox

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`sendEmailOptions?` | [SendEmailOptions](../modules/sendemailoptions.md) | - |
`options?` | any | - |

**Returns:** Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

___

### updateAlias

▸ **updateAlias**(`aliasId`: string, `updateAliasOptions`: [UpdateAliasOptions](../interfaces/updatealiasoptions.md), `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:5653](https://github.com/mailslurp/mailslurp-client/blob/359c034/src/generated/api.ts#L5653)*

**`summary`** Update an email alias

**`throws`** {RequiredError}

**`memberof`** AliasControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aliasId` | string | aliasId |
`updateAliasOptions` | [UpdateAliasOptions](../interfaces/updatealiasoptions.md) | updateAliasOptions |
`options?` | any | - |

**Returns:** Promise\<Response>

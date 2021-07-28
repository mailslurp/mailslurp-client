**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / BounceControllerApi

# Class: BounceControllerApi

BounceControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BounceControllerApi**

## Index

### Constructors

* [constructor](bouncecontrollerapi.md#constructor)

### Properties

* [basePath](bouncecontrollerapi.md#basepath)
* [configuration](bouncecontrollerapi.md#configuration)
* [fetch](bouncecontrollerapi.md#fetch)

### Methods

* [getBouncedEmail](bouncecontrollerapi.md#getbouncedemail)
* [getBouncedEmails](bouncecontrollerapi.md#getbouncedemails)
* [getBouncedRecipient](bouncecontrollerapi.md#getbouncedrecipient)
* [getBouncedRecipients](bouncecontrollerapi.md#getbouncedrecipients)

## Constructors

### constructor

\+ **new BounceControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [BounceControllerApi](bouncecontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [BounceControllerApi](bouncecontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L62)*

## Methods

### getBouncedEmail

▸ **getBouncedEmail**(`id`: string, `options?`: any): Promise\<[BouncedEmailDto](../interfaces/bouncedemaildto.md)>

*Defined in [src/generated/api.ts:9999](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L9999)*

Bounced emails are email you have sent that were rejected by a recipient

**`summary`** Get a bounced email.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the bounced email to fetch |
`options?` | any | - |

**Returns:** Promise\<[BouncedEmailDto](../interfaces/bouncedemaildto.md)>

___

### getBouncedEmails

▸ **getBouncedEmails**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageBouncedEmail](../interfaces/pagebouncedemail.md)>

*Defined in [src/generated/api.ts:10016](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L10016)*

Bounced emails are email you have sent that were rejected by a recipient

**`summary`** Get paginated list of bounced emails.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageBouncedEmail](../interfaces/pagebouncedemail.md)>

___

### getBouncedRecipient

▸ **getBouncedRecipient**(`id`: string, `options?`: any): Promise\<[BouncedRecipientDto](../interfaces/bouncedrecipientdto.md)>

*Defined in [src/generated/api.ts:10038](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L10038)*

Bounced emails are email you have sent that were rejected by a recipient

**`summary`** Get a bounced email.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the bounced recipient |
`options?` | any | - |

**Returns:** Promise\<[BouncedRecipientDto](../interfaces/bouncedrecipientdto.md)>

___

### getBouncedRecipients

▸ **getBouncedRecipients**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageBouncedRecipients](../interfaces/pagebouncedrecipients.md)>

*Defined in [src/generated/api.ts:10055](https://github.com/mailslurp/mailslurp-client/blob/98c6efc/src/generated/api.ts#L10055)*

Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.

**`summary`** Get paginated list of bounced recipients.

**`throws`** {RequiredError}

**`memberof`** BounceControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageBouncedRecipients](../interfaces/pagebouncedrecipients.md)>

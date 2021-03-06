**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / SentEmailsControllerApi

# Class: SentEmailsControllerApi

SentEmailsControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SentEmailsControllerApi**

## Index

### Constructors

* [constructor](sentemailscontrollerapi.md#constructor)

### Properties

* [basePath](sentemailscontrollerapi.md#basepath)
* [configuration](sentemailscontrollerapi.md#configuration)
* [fetch](sentemailscontrollerapi.md#fetch)

### Methods

* [getAllSentTrackingPixels](sentemailscontrollerapi.md#getallsenttrackingpixels)
* [getSentEmail](sentemailscontrollerapi.md#getsentemail)
* [getSentEmailTrackingPixels](sentemailscontrollerapi.md#getsentemailtrackingpixels)
* [getSentEmails](sentemailscontrollerapi.md#getsentemails)
* [getSentOrganizationEmails](sentemailscontrollerapi.md#getsentorganizationemails)

## Constructors

### constructor

\+ **new SentEmailsControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [SentEmailsControllerApi](sentemailscontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [SentEmailsControllerApi](sentemailscontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L62)*

## Methods

### getAllSentTrackingPixels

▸ **getAllSentTrackingPixels**(`page?`: number, `searchFilter?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageTrackingPixelProjection](../interfaces/pagetrackingpixelprojection.md)>

*Defined in [src/generated/api.ts:24451](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L24451)*

**`summary`** Get all sent email tracking pixels in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`searchFilter?` | string |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageTrackingPixelProjection](../interfaces/pagetrackingpixelprojection.md)>

___

### getSentEmail

▸ **getSentEmail**(`id`: string, `options?`: any): Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

*Defined in [src/generated/api.ts:24474](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L24474)*

**`summary`** Get sent email receipt

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`options?` | any | - |

**Returns:** Promise\<[SentEmailDto](../interfaces/sentemaildto.md)>

___

### getSentEmailTrackingPixels

▸ **getSentEmailTrackingPixels**(`id`: string, `page?`: number, `searchFilter?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageTrackingPixelProjection](../interfaces/pagetrackingpixelprojection.md)>

*Defined in [src/generated/api.ts:24493](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L24493)*

**`summary`** Get all tracking pixels for a sent email in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | id |
`page?` | number | - |
`searchFilter?` | string | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageTrackingPixelProjection](../interfaces/pagetrackingpixelprojection.md)>

___

### getSentEmails

▸ **getSentEmails**(`inboxId?`: string, `page?`: number, `searchFilter?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)>

*Defined in [src/generated/api.ts:24525](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L24525)*

**`summary`** Get all sent emails in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`page?` | number |
`searchFilter?` | string |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)>

___

### getSentOrganizationEmails

▸ **getSentOrganizationEmails**(`inboxId?`: string, `page?`: number, `searchFilter?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)>

*Defined in [src/generated/api.ts:24555](https://github.com/mailslurp/mailslurp-client/blob/730b817/src/generated/api.ts#L24555)*

**`summary`** Get all sent organization emails in paginated form

**`throws`** {RequiredError}

**`memberof`** SentEmailsControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`page?` | number |
`searchFilter?` | string |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageSentEmailProjection](../interfaces/pagesentemailprojection.md)>

**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / ExpiredControllerApi

# Class: ExpiredControllerApi

ExpiredControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ExpiredControllerApi**

## Index

### Constructors

* [constructor](expiredcontrollerapi.md#constructor)

### Properties

* [basePath](expiredcontrollerapi.md#basepath)
* [configuration](expiredcontrollerapi.md#configuration)
* [fetch](expiredcontrollerapi.md#fetch)

### Methods

* [getExpirationDefaults](expiredcontrollerapi.md#getexpirationdefaults)
* [getExpiredInboxByInboxId](expiredcontrollerapi.md#getexpiredinboxbyinboxid)
* [getExpiredInboxRecord](expiredcontrollerapi.md#getexpiredinboxrecord)
* [getExpiredInboxes](expiredcontrollerapi.md#getexpiredinboxes)

## Constructors

### constructor

\+ **new ExpiredControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [ExpiredControllerApi](expiredcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [ExpiredControllerApi](expiredcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L62)*

## Methods

### getExpirationDefaults

▸ **getExpirationDefaults**(`options?`: any): Promise\<[ExpirationDefaults](../interfaces/expirationdefaults.md)>

*Defined in [src/generated/api.ts:14828](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L14828)*

Return default times used for inbox expiration

**`summary`** Get default expiration settings

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[ExpirationDefaults](../interfaces/expirationdefaults.md)>

___

### getExpiredInboxByInboxId

▸ **getExpiredInboxByInboxId**(`inboxId`: string, `options?`: any): Promise\<[ExpiredInboxDto](../interfaces/expiredinboxdto.md)>

*Defined in [src/generated/api.ts:14842](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L14842)*

Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId

**`summary`** Get expired inbox record for a previously existing inbox

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of inbox you want to retrieve (not the inbox ID) |
`options?` | any | - |

**Returns:** Promise\<[ExpiredInboxDto](../interfaces/expiredinboxdto.md)>

___

### getExpiredInboxRecord

▸ **getExpiredInboxRecord**(`expiredId`: string, `options?`: any): Promise\<[ExpiredInboxDto](../interfaces/expiredinboxdto.md)>

*Defined in [src/generated/api.ts:14856](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L14856)*

Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties

**`summary`** Get an expired inbox record

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`expiredId` | string | ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId) |
`options?` | any | - |

**Returns:** Promise\<[ExpiredInboxDto](../interfaces/expiredinboxdto.md)>

___

### getExpiredInboxes

▸ **getExpiredInboxes**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageExpiredInboxRecordProjection](../interfaces/pageexpiredinboxrecordprojection.md)>

*Defined in [src/generated/api.ts:14873](https://github.com/mailslurp/mailslurp-client/blob/5a4fc29/src/generated/api.ts#L14873)*

Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties

**`summary`** List records of expired inboxes

**`throws`** {RequiredError}

**`memberof`** ExpiredControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageExpiredInboxRecordProjection](../interfaces/pageexpiredinboxrecordprojection.md)>

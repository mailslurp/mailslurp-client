**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / InboxForwarderControllerApi

# Class: InboxForwarderControllerApi

InboxForwarderControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **InboxForwarderControllerApi**

## Index

### Constructors

* [constructor](inboxforwardercontrollerapi.md#constructor)

### Properties

* [basePath](inboxforwardercontrollerapi.md#basepath)
* [configuration](inboxforwardercontrollerapi.md#configuration)
* [fetch](inboxforwardercontrollerapi.md#fetch)

### Methods

* [createNewInboxForwarder](inboxforwardercontrollerapi.md#createnewinboxforwarder)
* [deleteInboxForwarder](inboxforwardercontrollerapi.md#deleteinboxforwarder)
* [deleteInboxForwarders](inboxforwardercontrollerapi.md#deleteinboxforwarders)
* [getInboxForwarder](inboxforwardercontrollerapi.md#getinboxforwarder)
* [getInboxForwarders](inboxforwardercontrollerapi.md#getinboxforwarders)
* [testInboxForwarder](inboxforwardercontrollerapi.md#testinboxforwarder)
* [testInboxForwardersForInbox](inboxforwardercontrollerapi.md#testinboxforwardersforinbox)
* [testNewInboxForwarder](inboxforwardercontrollerapi.md#testnewinboxforwarder)

## Constructors

### constructor

\+ **new InboxForwarderControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [InboxForwarderControllerApi](inboxforwardercontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [InboxForwarderControllerApi](inboxforwardercontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L62)*

## Methods

### createNewInboxForwarder

▸ **createNewInboxForwarder**(`createInboxForwarderOptions`: [CreateInboxForwarderOptions](../modules/createinboxforwarderoptions.md), `inboxId?`: string, `options?`: any): Promise\<[InboxForwarderDto](../modules/inboxforwarderdto.md)>

*Defined in [src/generated/api.ts:22961](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L22961)*

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving

**`summary`** Create an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createInboxForwarderOptions` | [CreateInboxForwarderOptions](../modules/createinboxforwarderoptions.md) | createInboxForwarderOptions |
`inboxId?` | string | - |
`options?` | any | - |

**Returns:** Promise\<[InboxForwarderDto](../modules/inboxforwarderdto.md)>

___

### deleteInboxForwarder

▸ **deleteInboxForwarder**(`id`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:22983](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L22983)*

Delete inbox forwarder

**`summary`** Delete an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of inbox forwarder |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### deleteInboxForwarders

▸ **deleteInboxForwarders**(`inboxId?`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:22997](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L22997)*

Delete inbox forwarders. Accepts optional inboxId filter.

**`summary`** Delete inbox forwarders

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`options?` | any |

**Returns:** Promise\<Response>

___

### getInboxForwarder

▸ **getInboxForwarder**(`id`: string, `options?`: any): Promise\<[InboxForwarderDto](../modules/inboxforwarderdto.md)>

*Defined in [src/generated/api.ts:23011](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L23011)*

Get inbox ruleset

**`summary`** Get an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of inbox forwarder |
`options?` | any | - |

**Returns:** Promise\<[InboxForwarderDto](../modules/inboxforwarderdto.md)>

___

### getInboxForwarders

▸ **getInboxForwarders**(`inboxId?`: string, `page?`: number, `searchFilter?`: string, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageInboxForwarderDto](../interfaces/pageinboxforwarderdto.md)>

*Defined in [src/generated/api.ts:23029](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L23029)*

List all forwarders attached to an inbox

**`summary`** List inbox forwarders

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`page?` | number |
`searchFilter?` | string |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageInboxForwarderDto](../interfaces/pageinboxforwarderdto.md)>

___

### testInboxForwarder

▸ **testInboxForwarder**(`id`: string, `inboxForwarderTestOptions`: [InboxForwarderTestOptions](../interfaces/inboxforwardertestoptions.md), `options?`: any): Promise\<[InboxForwarderTestResult](../interfaces/inboxforwardertestresult.md)>

*Defined in [src/generated/api.ts:23054](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L23054)*

Test an inbox forwarder

**`summary`** Test an inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of inbox forwarder |
`inboxForwarderTestOptions` | [InboxForwarderTestOptions](../interfaces/inboxforwardertestoptions.md) | inboxForwarderTestOptions |
`options?` | any | - |

**Returns:** Promise\<[InboxForwarderTestResult](../interfaces/inboxforwardertestresult.md)>

___

### testInboxForwardersForInbox

▸ **testInboxForwardersForInbox**(`inboxForwarderTestOptions`: [InboxForwarderTestOptions](../interfaces/inboxforwardertestoptions.md), `inboxId`: string, `options?`: any): Promise\<[InboxForwarderTestResult](../interfaces/inboxforwardertestresult.md)>

*Defined in [src/generated/api.ts:23076](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L23076)*

Test inbox forwarders for inbox

**`summary`** Test inbox forwarders for inbox

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxForwarderTestOptions` | [InboxForwarderTestOptions](../interfaces/inboxforwardertestoptions.md) | inboxForwarderTestOptions |
`inboxId` | string | ID of inbox |
`options?` | any | - |

**Returns:** Promise\<[InboxForwarderTestResult](../interfaces/inboxforwardertestresult.md)>

___

### testNewInboxForwarder

▸ **testNewInboxForwarder**(`testNewInboxForwarderOptions`: [TestNewInboxForwarderOptions](../interfaces/testnewinboxforwarderoptions.md), `options?`: any): Promise\<[InboxForwarderTestResult](../interfaces/inboxforwardertestresult.md)>

*Defined in [src/generated/api.ts:23098](https://github.com/mailslurp/mailslurp-client/blob/cce5bf2/src/generated/api.ts#L23098)*

Test new inbox forwarder

**`summary`** Test new inbox forwarder

**`throws`** {RequiredError}

**`memberof`** InboxForwarderControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`testNewInboxForwarderOptions` | [TestNewInboxForwarderOptions](../interfaces/testnewinboxforwarderoptions.md) | testNewInboxForwarderOptions |
`options?` | any | - |

**Returns:** Promise\<[InboxForwarderTestResult](../interfaces/inboxforwardertestresult.md)>

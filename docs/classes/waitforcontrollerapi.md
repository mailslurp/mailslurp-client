**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WaitForControllerApi

# Class: WaitForControllerApi

WaitForControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **WaitForControllerApi**

## Index

### Constructors

* [constructor](waitforcontrollerapi.md#constructor)

### Properties

* [basePath](waitforcontrollerapi.md#basepath)
* [configuration](waitforcontrollerapi.md#configuration)
* [fetch](waitforcontrollerapi.md#fetch)

### Methods

* [waitFor](waitforcontrollerapi.md#waitfor)
* [waitForEmailCount](waitforcontrollerapi.md#waitforemailcount)
* [waitForLatestEmail](waitforcontrollerapi.md#waitforlatestemail)
* [waitForMatchingEmail](waitforcontrollerapi.md#waitformatchingemail)
* [waitForMatchingFirstEmail](waitforcontrollerapi.md#waitformatchingfirstemail)
* [waitForNthEmail](waitforcontrollerapi.md#waitfornthemail)

## Constructors

### constructor

\+ **new WaitForControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [WaitForControllerApi](waitforcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [WaitForControllerApi](waitforcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L62)*

## Methods

### waitFor

▸ **waitFor**(`waitForConditions?`: [WaitForConditions](../modules/waitforconditions.md), `options?`: any): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/generated/api.ts:23117](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L23117)*

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met

**`summary`** Wait for an email to match the provided filter conditions such as subject contains keyword.

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`waitForConditions?` | [WaitForConditions](../modules/waitforconditions.md) |
`options?` | any |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/generated/api.ts:23135](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L23135)*

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

**`summary`** Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): Promise\<[Email](../interfaces/email.md)>

*Defined in [src/generated/api.ts:23161](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L23161)*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.

**`summary`** Fetch inbox's latest email or if empty wait for an email to arrive

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** Promise\<[Email](../interfaces/email.md)>

___

### waitForMatchingEmail

▸ **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

*Defined in [src/generated/api.ts:23187](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L23187)*

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.

**`summary`** Wait or return list of emails that match simple matching patterns

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/matchoptions.md) | matchOptions |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |
`options?` | any | - |

**Returns:** Promise\<[EmailPreview](../interfaces/emailpreview.md)[]>

___

### waitForMatchingFirstEmail

▸ **waitForMatchingFirstEmail**(`matchOptions`: [MatchOptions](../interfaces/matchoptions.md), `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): Promise\<[Email](../interfaces/email.md)>

*Defined in [src/generated/api.ts:23216](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L23216)*

Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.

**`summary`** Wait for or return the first email that matches provided MatchOptions array

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/matchoptions.md) | matchOptions |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |
`options?` | any | - |

**Returns:** Promise\<[Email](../interfaces/email.md)>

___

### waitForNthEmail

▸ **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): Promise\<[Email](../interfaces/email.md)>

*Defined in [src/generated/api.ts:23245](https://github.com/mailslurp/mailslurp-client/blob/67ec74c/src/generated/api.ts#L23245)*

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

**`summary`** Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.

**`throws`** {RequiredError}

**`memberof`** WaitForControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`inboxId?` | string |
`index?` | number |
`timeout?` | number |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** Promise\<[Email](../interfaces/email.md)>

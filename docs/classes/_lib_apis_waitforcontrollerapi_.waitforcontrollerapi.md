[MailSlurp JS](../README.md) › [Globals](../globals.md) › ["lib/apis/WaitForControllerApi"](../modules/_lib_apis_waitforcontrollerapi_.md) › [WaitForControllerApi](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md)

# Class: WaitForControllerApi

no description

## Hierarchy

* [BaseAPI](_lib_runtime_.baseapi.md)

  ↳ **WaitForControllerApi**

## Index

### Constructors

* [constructor](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#constructor)

### Properties

* [configuration](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#protected-configuration)

### Methods

* [request](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#protected-request)
* [waitFor](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitfor)
* [waitForEmailCount](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitforemailcount)
* [waitForEmailCountRaw](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitforemailcountraw)
* [waitForLatestEmail](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitforlatestemail)
* [waitForLatestEmailRaw](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitforlatestemailraw)
* [waitForMatchingEmail](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitformatchingemail)
* [waitForMatchingEmailRaw](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitformatchingemailraw)
* [waitForNthEmail](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitfornthemail)
* [waitForNthEmailRaw](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitfornthemailraw)
* [waitForRaw](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#waitforraw)
* [withMiddleware](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#withmiddleware)
* [withPostMiddleware](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#withpostmiddleware)
* [withPreMiddleware](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md#withpremiddleware)

## Constructors

###  constructor

\+ **new WaitForControllerApi**(`configuration`: [Configuration](_lib_runtime_.configuration.md)‹›): *[WaitForControllerApi](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md)*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[constructor](_lib_runtime_.baseapi.md#constructor)*

*Defined in [src/lib/runtime.ts:24](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration` | [Configuration](_lib_runtime_.configuration.md)‹› |  new Configuration() |

**Returns:** *[WaitForControllerApi](_lib_apis_waitforcontrollerapi_.waitforcontrollerapi.md)*

## Properties

### `Protected` configuration

• **configuration**: *[Configuration](_lib_runtime_.configuration.md)‹›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[configuration](_lib_runtime_.baseapi.md#protected-configuration)*

*Defined in [src/lib/runtime.ts:26](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L26)*

## Methods

### `Protected` request

▸ **request**(`context`: [RequestOpts](../interfaces/_lib_runtime_.requestopts.md)): *Promise‹Response›*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[request](_lib_runtime_.baseapi.md#protected-request)*

*Defined in [src/lib/runtime.ts:52](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RequestOpts](../interfaces/_lib_runtime_.requestopts.md) |

**Returns:** *Promise‹Response›*

___

###  waitFor

▸ **waitFor**(`requestParameters`: [WaitForRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforrequest.md)): *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:103](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L103)*

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
Wait for conditions to be met

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforrequest.md) |

**Returns:** *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`requestParameters`: [WaitForEmailCountRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforemailcountrequest.md)): *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:159](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L159)*

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
Wait for and return count number of emails

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForEmailCountRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforemailcountrequest.md) |

**Returns:** *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

___

###  waitForEmailCountRaw

▸ **waitForEmailCountRaw**(`requestParameters`: [WaitForEmailCountRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforemailcountrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:114](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L114)*

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
Wait for and return count number of emails

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForEmailCountRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforemailcountrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`requestParameters`: [WaitForLatestEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforlatestemailrequest.md)): *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

*Defined in [src/lib/apis/WaitForControllerApi.ts:211](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L211)*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.
Fetch inbox\'s latest email or if empty wait for an email to arrive

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForLatestEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforlatestemailrequest.md) |

**Returns:** *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

___

###  waitForLatestEmailRaw

▸ **waitForLatestEmailRaw**(`requestParameters`: [WaitForLatestEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforlatestemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Email](../interfaces/_lib_models_email_.email.md)››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:170](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L170)*

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox see the other receive methods such as waitForNthEmail or waitForEmailCount.
Fetch inbox\'s latest email or if empty wait for an email to arrive

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForLatestEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforlatestemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Email](../interfaces/_lib_models_email_.email.md)››*

___

###  waitForMatchingEmail

▸ **waitForMatchingEmail**(`requestParameters`: [WaitForMatchingEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitformatchingemailrequest.md)): *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:280](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L280)*

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.
Wait or return list of emails that match simple matching patterns

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForMatchingEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitformatchingemailrequest.md) |

**Returns:** *Promise‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)››*

___

###  waitForMatchingEmailRaw

▸ **waitForMatchingEmailRaw**(`requestParameters`: [WaitForMatchingEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitformatchingemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:222](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L222)*

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options.
Wait or return list of emails that match simple matching patterns

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForMatchingEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitformatchingemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`requestParameters`: [WaitForNthEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitfornthemailrequest.md)): *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

*Defined in [src/lib/apis/WaitForControllerApi.ts:336](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L336)*

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
Wait for or fetch the email with a given index in the inbox specified

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForNthEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitfornthemailrequest.md) |

**Returns:** *Promise‹[Email](../interfaces/_lib_models_email_.email.md)›*

___

###  waitForNthEmailRaw

▸ **waitForNthEmailRaw**(`requestParameters`: [WaitForNthEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitfornthemailrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Email](../interfaces/_lib_models_email_.email.md)››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:291](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L291)*

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
Wait for or fetch the email with a given index in the inbox specified

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForNthEmailRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitfornthemailrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹[Email](../interfaces/_lib_models_email_.email.md)››*

___

###  waitForRaw

▸ **waitForRaw**(`requestParameters`: [WaitForRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforrequest.md)): *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

*Defined in [src/lib/apis/WaitForControllerApi.ts:71](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/apis/WaitForControllerApi.ts#L71)*

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
Wait for conditions to be met

**Parameters:**

Name | Type |
------ | ------ |
`requestParameters` | [WaitForRequest](../interfaces/_lib_apis_waitforcontrollerapi_.waitforrequest.md) |

**Returns:** *Promise‹[ApiResponse](../interfaces/_lib_runtime_.apiresponse.md)‹Array‹[EmailPreview](../interfaces/_lib_models_emailpreview_.emailpreview.md)›››*

___

###  withMiddleware

▸ **withMiddleware**<**T**>(`this`: T, ...`middlewares`: [Middleware](../interfaces/_lib_runtime_.middleware.md)[]): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withMiddleware](_lib_runtime_.baseapi.md#withmiddleware)*

*Defined in [src/lib/runtime.ts:30](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L30)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...middlewares` | [Middleware](../interfaces/_lib_runtime_.middleware.md)[] |

**Returns:** *T*

___

###  withPostMiddleware

▸ **withPostMiddleware**<**T**>(`this`: T, ...`postMiddlewares`: Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPostMiddleware](_lib_runtime_.baseapi.md#withpostmiddleware)*

*Defined in [src/lib/runtime.ts:44](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L44)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...postMiddlewares` | Array‹[post](../interfaces/_lib_runtime_.middleware.md#optional-post)› |

**Returns:** *T*

___

###  withPreMiddleware

▸ **withPreMiddleware**<**T**>(`this`: T, ...`preMiddlewares`: Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)›): *T*

*Inherited from [BaseAPI](_lib_runtime_.baseapi.md).[withPreMiddleware](_lib_runtime_.baseapi.md#withpremiddleware)*

*Defined in [src/lib/runtime.ts:36](https://github.com/mailslurp/mailslurp-client-ts-js/blob/fc9510a/src/lib/runtime.ts#L36)*

**Type parameters:**

▪ **T**: *[BaseAPI](_lib_runtime_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |
`...preMiddlewares` | Array‹[pre](../interfaces/_lib_runtime_.middleware.md#optional-pre)› |

**Returns:** *T*

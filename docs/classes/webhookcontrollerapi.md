**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / WebhookControllerApi

# Class: WebhookControllerApi

WebhookControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **WebhookControllerApi**

## Index

### Constructors

* [constructor](webhookcontrollerapi.md#constructor)

### Properties

* [basePath](webhookcontrollerapi.md#basepath)
* [configuration](webhookcontrollerapi.md#configuration)
* [fetch](webhookcontrollerapi.md#fetch)

### Methods

* [createWebhook](webhookcontrollerapi.md#createwebhook)
* [deleteWebhook](webhookcontrollerapi.md#deletewebhook)
* [getAllWebhookResults](webhookcontrollerapi.md#getallwebhookresults)
* [getAllWebhooks](webhookcontrollerapi.md#getallwebhooks)
* [getTestWebhookPayload](webhookcontrollerapi.md#gettestwebhookpayload)
* [getTestWebhookPayloadNewAttachment](webhookcontrollerapi.md#gettestwebhookpayloadnewattachment)
* [getTestWebhookPayloadNewContact](webhookcontrollerapi.md#gettestwebhookpayloadnewcontact)
* [getTestWebhookPayloadNewEmail](webhookcontrollerapi.md#gettestwebhookpayloadnewemail)
* [getWebhook](webhookcontrollerapi.md#getwebhook)
* [getWebhookResult](webhookcontrollerapi.md#getwebhookresult)
* [getWebhookResults](webhookcontrollerapi.md#getwebhookresults)
* [getWebhooks](webhookcontrollerapi.md#getwebhooks)
* [sendTestData](webhookcontrollerapi.md#sendtestdata)

## Constructors

### constructor

\+ **new WebhookControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [WebhookControllerApi](webhookcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [WebhookControllerApi](webhookcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L62)*

## Methods

### createWebhook

▸ **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../modules/createwebhookoptions.md), `options?`: any): Promise\<[WebhookDto](../modules/webhookdto.md)>

*Defined in [src/generated/api.ts:23135](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23135)*

Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.

**`summary`** Attach a WebHook URL to an inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookOptions` | [CreateWebhookOptions](../modules/createwebhookoptions.md) | webhookOptions |
`options?` | any | - |

**Returns:** Promise\<[WebhookDto](../modules/webhookdto.md)>

___

### deleteWebhook

▸ **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:23156](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23156)*

**`summary`** Delete and disable a Webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAllWebhookResults

▸ **getAllWebhookResults**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageWebhookResult](../interfaces/pagewebhookresult.md)>

*Defined in [src/generated/api.ts:23174](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23174)*

**`summary`** Get results for all webhooks

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageWebhookResult](../interfaces/pagewebhookresult.md)>

___

### getAllWebhooks

▸ **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageWebhookProjection](../interfaces/pagewebhookprojection.md)>

*Defined in [src/generated/api.ts:23198](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23198)*

List webhooks in paginated form. Allows for page index, page size, and sort direction.

**`summary`** List Webhooks Paginated

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageWebhookProjection](../interfaces/pagewebhookprojection.md)>

___

### getTestWebhookPayload

▸ **getTestWebhookPayload**(`eventName?`: \"EMAIL\_RECEIVED\" \| \"NEW\_EMAIL\" \| \"NEW\_CONTACT\" \| \"NEW\_ATTACHMENT\", `options?`: any): Promise\<[AbstractWebhookPayload](../modules/abstractwebhookpayload.md)>

*Defined in [src/generated/api.ts:23220](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23220)*

**`summary`** Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`eventName?` | \"EMAIL\_RECEIVED\" \| \"NEW\_EMAIL\" \| \"NEW\_CONTACT\" \| \"NEW\_ATTACHMENT\" |
`options?` | any |

**Returns:** Promise\<[AbstractWebhookPayload](../modules/abstractwebhookpayload.md)>

___

### getTestWebhookPayloadNewAttachment

▸ **getTestWebhookPayloadNewAttachment**(`options?`: any): Promise\<[WebhookNewAttachmentPayload](../modules/webhooknewattachmentpayload.md)>

*Defined in [src/generated/api.ts:23241](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23241)*

**`summary`** Get webhook test payload for new attachment event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[WebhookNewAttachmentPayload](../modules/webhooknewattachmentpayload.md)>

___

### getTestWebhookPayloadNewContact

▸ **getTestWebhookPayloadNewContact**(`options?`: any): Promise\<[WebhookNewContactPayload](../modules/webhooknewcontactpayload.md)>

*Defined in [src/generated/api.ts:23257](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23257)*

**`summary`** Get webhook test payload for new contact event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[WebhookNewContactPayload](../modules/webhooknewcontactpayload.md)>

___

### getTestWebhookPayloadNewEmail

▸ **getTestWebhookPayloadNewEmail**(`options?`: any): Promise\<[WebhookNewEmailPayload](../modules/webhooknewemailpayload.md)>

*Defined in [src/generated/api.ts:23270](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23270)*

**`summary`** Get webhook test payload for new email event

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[WebhookNewEmailPayload](../modules/webhooknewemailpayload.md)>

___

### getWebhook

▸ **getWebhook**(`webhookId`: string, `options?`: any): Promise\<[WebhookDto](../modules/webhookdto.md)>

*Defined in [src/generated/api.ts:23284](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23284)*

**`summary`** Get a webhook for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** Promise\<[WebhookDto](../modules/webhookdto.md)>

___

### getWebhookResult

▸ **getWebhookResult**(`webhookResultId`: string, `options?`: any): Promise\<[WebhookResultEntity](../modules/webhookresultentity.md)>

*Defined in [src/generated/api.ts:23299](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23299)*

**`summary`** Get a webhook result for a webhook

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`webhookResultId` | string | Webhook Result ID |
`options?` | any | - |

**Returns:** Promise\<[WebhookResultEntity](../modules/webhookresultentity.md)>

___

### getWebhookResults

▸ **getWebhookResults**(`webhookId`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageWebhookResult](../interfaces/pagewebhookresult.md)>

*Defined in [src/generated/api.ts:23317](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23317)*

**`summary`** Get a webhook results for a webhook

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | ID of webhook to get results for |
`page?` | number | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageWebhookResult](../interfaces/pagewebhookresult.md)>

___

### getWebhooks

▸ **getWebhooks**(`inboxId`: string, `options?`: any): Promise\<[WebhookDto](../modules/webhookdto.md)[]>

*Defined in [src/generated/api.ts:23341](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23341)*

**`summary`** Get all webhooks for an Inbox

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId |
`options?` | any | - |

**Returns:** Promise\<[WebhookDto](../modules/webhookdto.md)[]>

___

### sendTestData

▸ **sendTestData**(`webhookId`: string, `options?`: any): Promise\<[WebhookTestResult](../interfaces/webhooktestresult.md)>

*Defined in [src/generated/api.ts:23356](https://github.com/mailslurp/mailslurp-client/blob/a8663d0/src/generated/api.ts#L23356)*

**`summary`** Send webhook test data

**`throws`** {RequiredError}

**`memberof`** WebhookControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`webhookId` | string | webhookId |
`options?` | any | - |

**Returns:** Promise\<[WebhookTestResult](../interfaces/webhooktestresult.md)>

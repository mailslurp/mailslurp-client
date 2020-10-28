# Class: EmailControllerApi

## Hierarchy

* [BaseAPI](_generated_api_.baseapi.md)

  ↳ **EmailControllerApi**

## Constructors

###  constructor

\+ **new EmailControllerApi**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[EmailControllerApi](_generated_api_.emailcontrollerapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[constructor](_generated_api_.baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[EmailControllerApi](_generated_api_.emailcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[basePath](_generated_api_.baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[configuration](_generated_api_.baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Inherited from [BaseAPI](_generated_api_.baseapi.md).[fetch](_generated_api_.baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L62)*

## Methods

###  deleteAllEmails

▸ **deleteAllEmails**(`options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:7493](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7493)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:7507](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7507)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:7524](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7524)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId |
`apiKey?` | string | - |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  forwardEmail

▸ **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:7547](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7547)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`forwardEmailOptions` | [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md) | forwardEmailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

*Defined in [src/generated/api.ts:7568](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7568)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

___

###  getAttachments

▸ **getAttachments**(`emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)[]›*

*Defined in [src/generated/api.ts:7588](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7588)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)[]›*

___

###  getEmail

▸ **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

*Defined in [src/generated/api.ts:7604](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7604)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

###  getEmailHTML

▸ **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:7621](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7621)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  getEmailsPaginated

▸ **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

*Defined in [src/generated/api.ts:7641](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7641)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | Array‹string› |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

___

###  getRawEmailContents

▸ **getRawEmailContents**(`emailId`: string, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:7667](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7667)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  getRawEmailJson

▸ **getRawEmailJson**(`emailId`: string, `options?`: any): *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

*Defined in [src/generated/api.ts:7682](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7682)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

___

###  getUnreadEmailCount

▸ **getUnreadEmailCount**(`options?`: any): *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

*Defined in [src/generated/api.ts:7696](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7696)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

___

###  validateEmail

▸ **validateEmail**(`emailId`: string, `options?`: any): *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

*Defined in [src/generated/api.ts:7710](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7710)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

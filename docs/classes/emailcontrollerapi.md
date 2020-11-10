# Class: EmailControllerApi

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **EmailControllerApi**

## Constructors

###  constructor

\+ **new EmailControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[EmailControllerApi](emailcontrollerapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[EmailControllerApi](emailcontrollerapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [src/generated/api.ts:58](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L58)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

*Defined in [src/generated/api.ts:60](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L60)*

## Methods

###  deleteAllEmails

▸ **deleteAllEmails**(`options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:6076](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6076)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string, `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:6088](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6088)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:6102](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6102)*

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

▸ **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/forwardemailoptions.md), `options?`: any): *Promise‹Response›*

*Defined in [src/generated/api.ts:6115](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6115)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`forwardEmailOptions` | [ForwardEmailOptions](../interfaces/forwardemailoptions.md) | forwardEmailOptions |
`options?` | any | - |

**Returns:** *Promise‹Response›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/attachmentmetadata.md)›*

*Defined in [src/generated/api.ts:6128](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6128)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/attachmentmetadata.md)›*

___

###  getAttachments

▸ **getAttachments**(`emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/attachmentmetadata.md)[]›*

*Defined in [src/generated/api.ts:6140](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6140)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/attachmentmetadata.md)[]›*

___

###  getEmail

▸ **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/email.md)›*

*Defined in [src/generated/api.ts:6153](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6153)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹[Email](../interfaces/email.md)›*

___

###  getEmailHTML

▸ **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:6166](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6166)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`decode?` | boolean | - |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  getEmailsPaginated

▸ **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *Promise‹[PageEmailProjection](../interfaces/pageemailprojection.md)›*

*Defined in [src/generated/api.ts:6182](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6182)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | Array‹string› |
`page?` | number |
`size?` | number |
`sort?` | "ASC" &#124; "DESC" |
`unreadOnly?` | boolean |
`options?` | any |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/pageemailprojection.md)›*

___

###  getRawEmailContents

▸ **getRawEmailContents**(`emailId`: string, `options?`: any): *Promise‹string›*

*Defined in [src/generated/api.ts:6194](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6194)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹string›*

___

###  getRawEmailJson

▸ **getRawEmailJson**(`emailId`: string, `options?`: any): *Promise‹[RawEmailJson](../interfaces/rawemailjson.md)›*

*Defined in [src/generated/api.ts:6206](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6206)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[RawEmailJson](../interfaces/rawemailjson.md)›*

___

###  getUnreadEmailCount

▸ **getUnreadEmailCount**(`options?`: any): *Promise‹[UnreadCount](../interfaces/unreadcount.md)›*

*Defined in [src/generated/api.ts:6217](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6217)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹[UnreadCount](../interfaces/unreadcount.md)›*

___

###  validateEmail

▸ **validateEmail**(`emailId`: string, `options?`: any): *Promise‹[ValidationDto](../interfaces/validationdto.md)›*

*Defined in [src/generated/api.ts:6229](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/generated/api.ts#L6229)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`options?` | any | - |

**Returns:** *Promise‹[ValidationDto](../interfaces/validationdto.md)›*

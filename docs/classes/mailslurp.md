# Class: MailSlurp

## Hierarchy

* **MailSlurp**

## Constructors

###  constructor

\+ **new MailSlurp**(`opts`: [Config](../README.md#config)): *[MailSlurp](mailslurp.md)*

*Defined in [src/index.ts:99](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L99)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [Config](../README.md#config) |   |

**Returns:** *[MailSlurp](mailslurp.md)*

## Properties

###  aliasController

• **aliasController**: *[AliasControllerApi](aliascontrollerapi.md)*

*Defined in [src/index.ts:93](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L93)*

___

###  attachmentController

• **attachmentController**: *[AttachmentControllerApi](attachmentcontrollerapi.md)*

*Defined in [src/index.ts:87](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L87)*

___

###  bulkController

• **bulkController**: *[BulkActionsControllerApi](bulkactionscontrollerapi.md)*

*Defined in [src/index.ts:90](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L90)*

___

###  commonController

• **commonController**: *[CommonActionsControllerApi](commonactionscontrollerapi.md)*

*Defined in [src/index.ts:89](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L89)*

___

###  contactController

• **contactController**: *[ContactControllerApi](contactcontrollerapi.md)*

*Defined in [src/index.ts:96](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L96)*

___

###  domainController

• **domainController**: *[DomainControllerApi](domaincontrollerapi.md)*

*Defined in [src/index.ts:95](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L95)*

___

###  emailController

• **emailController**: *[EmailControllerApi](emailcontrollerapi.md)*

*Defined in [src/index.ts:85](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L85)*

___

###  formController

• **formController**: *[FormControllerApi](formcontrollerapi.md)*

*Defined in [src/index.ts:94](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L94)*

___

###  groupController

• **groupController**: *[GroupControllerApi](groupcontrollerapi.md)*

*Defined in [src/index.ts:97](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L97)*

___

###  inboxController

• **inboxController**: *[InboxControllerApi](inboxcontrollerapi.md)*

*Defined in [src/index.ts:86](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L86)*

___

###  templateController

• **templateController**: *[TemplateControllerApi](templatecontrollerapi.md)*

*Defined in [src/index.ts:98](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L98)*

___

###  waitController

• **waitController**: *[WaitForControllerApi](waitforcontrollerapi.md)*

*Defined in [src/index.ts:91](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L91)*

___

###  webhookController

• **webhookController**: *[WebhookControllerApi](webhookcontrollerapi.md)*

*Defined in [src/index.ts:99](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L99)*

## Methods

###  createInbox

▸ **createInbox**(`emailAddress?`: string, `name?`: string, `description?`: string, `expiresAt?`: Date, `favourite?`: boolean, `tags?`: Array‹string›): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/index.ts:157](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`emailAddress?` | string |
`name?` | string |
`description?` | string |
`expiresAt?` | Date |
`favourite?` | boolean |
`tags?` | Array‹string› |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  deleteEmail

▸ **deleteEmail**(`emailId`: string): *Promise‹Response›*

*Defined in [src/index.ts:343](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L343)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** *Promise‹Response›*

___

###  deleteInbox

▸ **deleteInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [src/index.ts:182](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L182)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** *Promise‹Response›*

___

###  downloadAttachment

▸ **downloadAttachment**(`emailId`: string, `attachmentId`: string): *Promise‹String›*

*Defined in [src/index.ts:441](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L441)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId |
`attachmentId` | string | attachmentId  |

**Returns:** *Promise‹String›*

___

###  emptyInbox

▸ **emptyInbox**(`inboxId`: string): *Promise‹Response›*

*Defined in [src/index.ts:193](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L193)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** *Promise‹Response›*

___

###  getAllEmails

▸ **getAllEmails**(`page?`: number, `size?`: number, `inboxId?`: Array‹string›, `sort?`: [SortEnum](../README.md#sortenum), `unreadOnly?`: boolean): *Promise‹[PageEmailProjection](../interfaces/pageemailprojection.md)›*

*Defined in [src/index.ts:358](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L358)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`inboxId?` | Array‹string› |
`sort?` | [SortEnum](../README.md#sortenum) |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[PageEmailProjection](../interfaces/pageemailprojection.md)›*

___

###  getAllInboxes

▸ **getAllInboxes**(`page?`: number, `size?`: number, `favourite?`: boolean, `search?`: string, `sort?`: [SortEnum](../README.md#sortenum), `tag?`: string): *Promise‹[PageInboxProjection](../interfaces/pageinboxprojection.md)›*

*Defined in [src/index.ts:228](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`favourite?` | boolean |
`search?` | string |
`sort?` | [SortEnum](../README.md#sortenum) |
`tag?` | string |

**Returns:** *Promise‹[PageInboxProjection](../interfaces/pageinboxprojection.md)›*

___

###  getAttachmentMetaData

▸ **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string): *Promise‹[AttachmentMetaData](../interfaces/attachmentmetadata.md)›*

*Defined in [src/index.ts:474](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L474)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attachmentId` | string | attachmentId |
`emailId` | string | emailId  |

**Returns:** *Promise‹[AttachmentMetaData](../interfaces/attachmentmetadata.md)›*

___

###  getEmail

▸ **getEmail**(`emailId`: string): *Promise‹[Email](../interfaces/email.md)›*

*Defined in [src/index.ts:403](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L403)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** *Promise‹[Email](../interfaces/email.md)›*

___

###  getEmails

▸ **getEmails**(`inboxId`: string, `args`: [GetMessagesOptions](../README.md#getmessagesoptions)): *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

*Defined in [src/index.ts:382](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L382)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`inboxId` | string | - | Id of inbox that emails belongs to |
`args` | [GetMessagesOptions](../README.md#getmessagesoptions) |  {} | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

___

###  getInbox

▸ **getInbox**(`inboxId`: string): *Promise‹[Inbox](../interfaces/inbox.md)›*

*Defined in [src/index.ts:204](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L204)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | inboxId  |

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)›*

___

###  getInboxes

▸ **getInboxes**(): *Promise‹[Inbox](../interfaces/inbox.md)[]›*

*Defined in [src/index.ts:214](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L214)*

**Returns:** *Promise‹[Inbox](../interfaces/inbox.md)[]›*

___

###  getRawEmail

▸ **getRawEmail**(`emailId`: string): *Promise‹string›*

*Defined in [src/index.ts:414](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L414)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emailId` | string | emailId  |

**Returns:** *Promise‹string›*

___

###  sendEmail

▸ **sendEmail**(`inboxId`: string, `sendEmailOptions`: [SendEmailOptions](../modules/sendemailoptions.md)): *Promise‹Response›*

*Defined in [src/index.ts:426](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L426)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`inboxId` | string | ID of the inbox you want to send the email from |
`sendEmailOptions` | [SendEmailOptions](../modules/sendemailoptions.md) | - |

**Returns:** *Promise‹Response›*

___

###  uploadAttachment

▸ **uploadAttachment**(`options`: [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md)): *Promise‹Array‹String››*

*Defined in [src/index.ts:458](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L458)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadAttachmentOptions](../interfaces/uploadattachmentoptions.md) |

**Returns:** *Promise‹Array‹String››*

___

###  waitForEmailCount

▸ **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

*Defined in [src/index.ts:322](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`count?` | number |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

___

###  waitForLatestEmail

▸ **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/email.md)›*

*Defined in [src/index.ts:256](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L256)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId?` | string |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/email.md)›*

___

###  waitForMatchingEmails

▸ **waitForMatchingEmails**(`matchOptions`: [MatchOptions](../interfaces/matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

*Defined in [src/index.ts:297](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L297)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matchOptions` | [MatchOptions](../interfaces/matchoptions.md) | matchOptions |
`count?` | number | - |
`inboxId?` | string | - |
`timeout?` | number | - |
`unreadOnly?` | boolean | - |

**Returns:** *Promise‹[EmailPreview](../interfaces/emailpreview.md)[]›*

___

###  waitForNthEmail

▸ **waitForNthEmail**(`inboxId`: string, `index`: number, `timeout?`: number, `unreadOnly?`: boolean): *Promise‹[Email](../interfaces/email.md)›*

*Defined in [src/index.ts:273](https://github.com/mailslurp/mailslurp-client-ts-js/blob/4ca018b/src/index.ts#L273)*

**Parameters:**

Name | Type |
------ | ------ |
`inboxId` | string |
`index` | number |
`timeout?` | number |
`unreadOnly?` | boolean |

**Returns:** *Promise‹[Email](../interfaces/email.md)›*

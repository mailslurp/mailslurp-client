[MailSlurp JS](../README.md) / InboxControllerApi

# Class: InboxControllerApi

InboxControllerApi - object-oriented interface

**`export`**

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InboxControllerApi`**

## Table of contents

### Constructors

- [constructor](InboxControllerApi.md#constructor)

### Properties

- [basePath](InboxControllerApi.md#basepath)
- [configuration](InboxControllerApi.md#configuration)
- [fetch](InboxControllerApi.md#fetch)

### Methods

- [createInbox](InboxControllerApi.md#createinbox)
- [createInboxRuleset](InboxControllerApi.md#createinboxruleset)
- [createInboxWithDefaults](InboxControllerApi.md#createinboxwithdefaults)
- [createInboxWithOptions](InboxControllerApi.md#createinboxwithoptions)
- [deleteAllInboxes](InboxControllerApi.md#deleteallinboxes)
- [deleteInbox](InboxControllerApi.md#deleteinbox)
- [getAllInboxes](InboxControllerApi.md#getallinboxes)
- [getEmails](InboxControllerApi.md#getemails)
- [getInbox](InboxControllerApi.md#getinbox)
- [getInboxEmailsPaginated](InboxControllerApi.md#getinboxemailspaginated)
- [getInboxSentEmails](InboxControllerApi.md#getinboxsentemails)
- [getInboxTags](InboxControllerApi.md#getinboxtags)
- [getInboxes](InboxControllerApi.md#getinboxes)
- [getOrganizationInboxes](InboxControllerApi.md#getorganizationinboxes)
- [listInboxRulesets](InboxControllerApi.md#listinboxrulesets)
- [listInboxTrackingPixels](InboxControllerApi.md#listinboxtrackingpixels)
- [sendEmail](InboxControllerApi.md#sendemail)
- [sendEmailAndConfirm](InboxControllerApi.md#sendemailandconfirm)
- [sendTestEmail](InboxControllerApi.md#sendtestemail)
- [setInboxFavourited](InboxControllerApi.md#setinboxfavourited)
- [updateInbox](InboxControllerApi.md#updateinbox)

## Constructors

### constructor

• **new InboxControllerApi**(`configuration?`, `basePath?`, `fetch?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) |
| `basePath` | `string` |
| `fetch` | [`FetchAPI`](../interfaces/FetchAPI.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/api.ts:59](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L59)

## Properties

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

[BaseAPI](BaseAPI.md).[basePath](BaseAPI.md#basepath)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L57)

___

### fetch

• `Protected` **fetch**: [`FetchAPI`](../interfaces/FetchAPI.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

## Methods

### createInbox

▸ **createInbox**(`allowTeamAccess?`, `description?`, `emailAddress?`, `expiresAt?`, `expiresIn?`, `favourite?`, `inboxType?`, `name?`, `tags?`, `useDomainPool?`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.

**`summary`** Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowTeamAccess?` | `boolean` |
| `description?` | `string` |
| `emailAddress?` | `string` |
| `expiresAt?` | `Date` |
| `expiresIn?` | `number` |
| `favourite?` | `boolean` |
| `inboxType?` | ``"HTTP_INBOX"`` \| ``"SMTP_INBOX"`` |
| `name?` | `string` |
| `tags?` | `string`[] |
| `useDomainPool?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:21772](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21772)

___

### createInboxRuleset

▸ **createInboxRuleset**(`createInboxRulesetOptions`, `inboxId`, `options?`): `Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving

**`summary`** Create an inbox ruleset

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createInboxRulesetOptions` | [`CreateInboxRulesetOptions`](../interfaces/CreateInboxRulesetOptions.md) | createInboxRulesetOptions |
| `inboxId` | `string` | inboxId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`InboxRulesetDto`](../interfaces/InboxRulesetDto.md)\>

#### Defined in

[src/generated/api.ts:21809](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21809)

___

### createInboxWithDefaults

▸ **createInboxWithDefaults**(`options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

**`summary`** Create an inbox with default options. Uses MailSlurp domain pool address and is private.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:21828](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21828)

___

### createInboxWithOptions

▸ **createInboxWithOptions**(`createInboxDto`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.

**`summary`** Create an inbox with options. Extended options for inbox creation.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createInboxDto` | [`CreateInboxDto`](../interfaces/CreateInboxDto.md) | createInboxDto |
| `options?` | `any` | - |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:21842](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21842)

___

### deleteAllInboxes

▸ **deleteAllInboxes**(`options?`): `Promise`<`Response`\>

Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.

**`summary`** Delete all inboxes

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:21859](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21859)

___

### deleteInbox

▸ **deleteInbox**(`inboxId`, `options?`): `Promise`<`Response`\>

Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.

**`summary`** Delete inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:21873](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21873)

___

### getAllInboxes

▸ **getAllInboxes**(`favourite?`, `page?`, `search?`, `size?`, `sort?`, `tag?`, `teamAccess?`, `options?`): `Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results. Results do not include team access inboxes by default. Use organization method to list team inboxes or set `teamAccess` to true.

**`summary`** List All Inboxes Paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `favourite?` | `boolean` |
| `page?` | `number` |
| `search?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `tag?` | `string` |
| `teamAccess?` | `boolean` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageInboxProjection`](../interfaces/PageInboxProjection.md)\>

#### Defined in

[src/generated/api.ts:21894](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21894)

___

### getEmails

▸ **getEmails**(`inboxId`, `delayTimeout?`, `limit?`, `minCount?`, `retryTimeout?`, `since?`, `size?`, `sort?`, `unreadOnly?`, `options?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached

**`summary`** Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | Id of inbox that emails belongs to |
| `delayTimeout?` | `number` | - |
| `limit?` | `number` | - |
| `minCount?` | `number` | - |
| `retryTimeout?` | `number` | - |
| `since?` | `Date` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `unreadOnly?` | `boolean` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

#### Defined in

[src/generated/api.ts:21932](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21932)

___

### getInbox

▸ **getInbox**(`inboxId`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Returns an inbox's properties, including its email address and ID.

**`summary`** Get Inbox. Returns properties of an inbox.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `options?` | `any` | - |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:21966](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21966)

___

### getInboxEmailsPaginated

▸ **getInboxEmailsPaginated**(`inboxId`, `page?`, `size?`, `sort?`, `options?`): `Promise`<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>

Get a paginated list of emails in an inbox. Does not hold connections open.

**`summary`** Get inbox emails paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | Id of inbox that emails belongs to |
| `page?` | `number` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>

#### Defined in

[src/generated/api.ts:21984](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L21984)

___

### getInboxSentEmails

▸ **getInboxSentEmails**(`inboxId`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.

**`summary`** Get Inbox Sent Emails

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageSentEmailProjection`](../interfaces/PageSentEmailProjection.md)\>

#### Defined in

[src/generated/api.ts:22012](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22012)

___

### getInboxTags

▸ **getInboxTags**(`options?`): `Promise`<`string`[]\>

Get all inbox tags

**`summary`** Get inbox tags

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/generated/api.ts:22037](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22037)

___

### getInboxes

▸ **getInboxes**(`size?`, `sort?`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)[]\>

List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended and allows paginated access using a limit and sort parameter.

**`summary`** List Inboxes and email addresses

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)[]\>

#### Defined in

[src/generated/api.ts:22053](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22053)

___

### getOrganizationInboxes

▸ **getOrganizationInboxes**(`page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageOrganizationInboxProjection`](../interfaces/PageOrganizationInboxProjection.md)\>

List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time).

**`summary`** List Organization Inboxes Paginated

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `searchFilter?` | `string` |
| `size?` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `options?` | `any` |

#### Returns

`Promise`<[`PageOrganizationInboxProjection`](../interfaces/PageOrganizationInboxProjection.md)\>

#### Defined in

[src/generated/api.ts:22072](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22072)

___

### listInboxRulesets

▸ **listInboxRulesets**(`inboxId`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

List all rulesets attached to an inbox

**`summary`** List inbox rulesets

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageInboxRulesetDto`](../interfaces/PageInboxRulesetDto.md)\>

#### Defined in

[src/generated/api.ts:22100](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22100)

___

### listInboxTrackingPixels

▸ **listInboxTrackingPixels**(`inboxId`, `page?`, `searchFilter?`, `size?`, `sort?`, `options?`): `Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

List all tracking pixels sent from an inbox

**`summary`** List inbox tracking pixels

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `page?` | `number` | - |
| `searchFilter?` | `string` | - |
| `size?` | `number` | - |
| `sort?` | ``"ASC"`` \| ``"DESC"`` | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`PageTrackingPixelProjection`](../interfaces/PageTrackingPixelProjection.md)\>

#### Defined in

[src/generated/api.ts:22130](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22130)

___

### sendEmail

▸ **sendEmail**(`inboxId`, `sendEmailOptions?`, `options?`): `Promise`<`Response`\>

Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.

**`summary`** Send Email

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | ID of the inbox you want to send the email from |
| `sendEmailOptions?` | [`SendEmailOptions`](../interfaces/SendEmailOptions.md) | - |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:22157](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22157)

___

### sendEmailAndConfirm

▸ **sendEmailAndConfirm**(`inboxId`, `sendEmailOptions?`, `options?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.

**`summary`** Send email and return sent confirmation

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | ID of the inbox you want to send the email from |
| `sendEmailOptions?` | [`SendEmailOptions`](../interfaces/SendEmailOptions.md) | - |
| `options?` | `any` | - |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

#### Defined in

[src/generated/api.ts:22178](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22178)

___

### sendTestEmail

▸ **sendTestEmail**(`inboxId`, `options?`): `Promise`<`Response`\>

Send an inbox a test email to test email receiving is working

**`summary`** Send a test email to inbox

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `options?` | `any` | - |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/generated/api.ts:22198](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22198)

___

### setInboxFavourited

▸ **setInboxFavourited**(`inboxId`, `setInboxFavouritedOptions`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Set and return new favourite state for an inbox

**`summary`** Set inbox favourited state

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `setInboxFavouritedOptions` | [`SetInboxFavouritedOptions`](../interfaces/SetInboxFavouritedOptions.md) | setInboxFavouritedOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:22214](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22214)

___

### updateInbox

▸ **updateInbox**(`inboxId`, `updateInboxOptions`, `options?`): `Promise`<[`Inbox`](../interfaces/Inbox.md)\>

Update editable fields on an inbox

**`summary`** Update Inbox. Change name and description. Email address is not editable.

**`throws`** {RequiredError}

**`memberof`** InboxControllerApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboxId` | `string` | inboxId |
| `updateInboxOptions` | [`UpdateInboxOptions`](../interfaces/UpdateInboxOptions.md) | updateInboxOptions |
| `options?` | `any` | - |

#### Returns

`Promise`<[`Inbox`](../interfaces/Inbox.md)\>

#### Defined in

[src/generated/api.ts:22235](https://github.com/mailslurp/mailslurp-client/blob/6bcf839/src/generated/api.ts#L22235)

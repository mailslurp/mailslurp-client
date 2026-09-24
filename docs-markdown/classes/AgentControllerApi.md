[MailSlurp JS](../README.md) / AgentControllerApi

# Class: AgentControllerApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AgentControllerApi`**

## Table of contents

### Constructors

- [constructor](AgentControllerApi.md#constructor)

### Properties

- [configuration](AgentControllerApi.md#configuration)

### Methods

- [agentAcquireConversationClaim](AgentControllerApi.md#agentacquireconversationclaim)
- [agentAcquireConversationClaimRaw](AgentControllerApi.md#agentacquireconversationclaimraw)
- [agentAddConversationNote](AgentControllerApi.md#agentaddconversationnote)
- [agentAddConversationNoteRaw](AgentControllerApi.md#agentaddconversationnoteraw)
- [agentAddSmsNote](AgentControllerApi.md#agentaddsmsnote)
- [agentAddSmsNoteRaw](AgentControllerApi.md#agentaddsmsnoteraw)
- [agentCheckInboxSendPolicy](AgentControllerApi.md#agentcheckinboxsendpolicy)
- [agentCheckInboxSendPolicyRaw](AgentControllerApi.md#agentcheckinboxsendpolicyraw)
- [agentClaimSmsConversation](AgentControllerApi.md#agentclaimsmsconversation)
- [agentClaimSmsConversationRaw](AgentControllerApi.md#agentclaimsmsconversationraw)
- [agentCompleteWorkItem](AgentControllerApi.md#agentcompleteworkitem)
- [agentCompleteWorkItemRaw](AgentControllerApi.md#agentcompleteworkitemraw)
- [agentCreateEmailDraft](AgentControllerApi.md#agentcreateemaildraft)
- [agentCreateEmailDraftRaw](AgentControllerApi.md#agentcreateemaildraftraw)
- [agentCreateInbox](AgentControllerApi.md#agentcreateinbox)
- [agentCreateInboxRaw](AgentControllerApi.md#agentcreateinboxraw)
- [agentCreateReplyDraft](AgentControllerApi.md#agentcreatereplydraft)
- [agentCreateReplyDraftRaw](AgentControllerApi.md#agentcreatereplydraftraw)
- [agentCreateTotpDeviceForBase32SecretKey](AgentControllerApi.md#agentcreatetotpdeviceforbase32secretkey)
- [agentCreateTotpDeviceForBase32SecretKeyRaw](AgentControllerApi.md#agentcreatetotpdeviceforbase32secretkeyraw)
- [agentCreateTotpDeviceForCustom](AgentControllerApi.md#agentcreatetotpdeviceforcustom)
- [agentCreateTotpDeviceForCustomRaw](AgentControllerApi.md#agentcreatetotpdeviceforcustomraw)
- [agentCreateTotpDeviceForOtpAuthUrl](AgentControllerApi.md#agentcreatetotpdeviceforotpauthurl)
- [agentCreateTotpDeviceForOtpAuthUrlRaw](AgentControllerApi.md#agentcreatetotpdeviceforotpauthurlraw)
- [agentDeferWorkItem](AgentControllerApi.md#agentdeferworkitem)
- [agentDeferWorkItemRaw](AgentControllerApi.md#agentdeferworkitemraw)
- [agentDeleteEmailDraft](AgentControllerApi.md#agentdeleteemaildraft)
- [agentDeleteEmailDraftRaw](AgentControllerApi.md#agentdeleteemaildraftraw)
- [agentDeleteTotpDevice](AgentControllerApi.md#agentdeletetotpdevice)
- [agentDeleteTotpDeviceRaw](AgentControllerApi.md#agentdeletetotpdeviceraw)
- [agentExtractEmailAttachmentText](AgentControllerApi.md#agentextractemailattachmenttext)
- [agentExtractEmailAttachmentTextRaw](AgentControllerApi.md#agentextractemailattachmenttextraw)
- [agentGenerateTotpDeviceCode](AgentControllerApi.md#agentgeneratetotpdevicecode)
- [agentGenerateTotpDeviceCodeRaw](AgentControllerApi.md#agentgeneratetotpdevicecoderaw)
- [agentGetCapabilities](AgentControllerApi.md#agentgetcapabilities)
- [agentGetCapabilitiesRaw](AgentControllerApi.md#agentgetcapabilitiesraw)
- [agentGetConversationV2](AgentControllerApi.md#agentgetconversationv2)
- [agentGetConversationV2Raw](AgentControllerApi.md#agentgetconversationv2raw)
- [agentGetEmail](AgentControllerApi.md#agentgetemail)
- [agentGetEmailDraft](AgentControllerApi.md#agentgetemaildraft)
- [agentGetEmailDraftRaw](AgentControllerApi.md#agentgetemaildraftraw)
- [agentGetEmailRaw](AgentControllerApi.md#agentgetemailraw)
- [agentGetEmailSummary](AgentControllerApi.md#agentgetemailsummary)
- [agentGetEmailSummaryRaw](AgentControllerApi.md#agentgetemailsummaryraw)
- [agentGetEmailThread](AgentControllerApi.md#agentgetemailthread)
- [agentGetEmailThreadRaw](AgentControllerApi.md#agentgetemailthreadraw)
- [agentGetLatestInboxEmail](AgentControllerApi.md#agentgetlatestinboxemail)
- [agentGetLatestInboxEmailRaw](AgentControllerApi.md#agentgetlatestinboxemailraw)
- [agentGetNextWorkItem](AgentControllerApi.md#agentgetnextworkitem)
- [agentGetNextWorkItemRaw](AgentControllerApi.md#agentgetnextworkitemraw)
- [agentGetPhoneMessageThreadItems](AgentControllerApi.md#agentgetphonemessagethreaditems)
- [agentGetPhoneMessageThreadItemsRaw](AgentControllerApi.md#agentgetphonemessagethreaditemsraw)
- [agentGetPhoneMessageThreads](AgentControllerApi.md#agentgetphonemessagethreads)
- [agentGetPhoneMessageThreadsRaw](AgentControllerApi.md#agentgetphonemessagethreadsraw)
- [agentGetPhoneNumber](AgentControllerApi.md#agentgetphonenumber)
- [agentGetPhoneNumberRaw](AgentControllerApi.md#agentgetphonenumberraw)
- [agentGetPhoneNumbers](AgentControllerApi.md#agentgetphonenumbers)
- [agentGetPhoneNumbersRaw](AgentControllerApi.md#agentgetphonenumbersraw)
- [agentGetReceivedSmsMessage](AgentControllerApi.md#agentgetreceivedsmsmessage)
- [agentGetReceivedSmsMessageRaw](AgentControllerApi.md#agentgetreceivedsmsmessageraw)
- [agentGetReceivedSmsMessages](AgentControllerApi.md#agentgetreceivedsmsmessages)
- [agentGetReceivedSmsMessagesRaw](AgentControllerApi.md#agentgetreceivedsmsmessagesraw)
- [agentGetSentSmsMessage](AgentControllerApi.md#agentgetsentsmsmessage)
- [agentGetSentSmsMessageRaw](AgentControllerApi.md#agentgetsentsmsmessageraw)
- [agentGetSentSmsMessages](AgentControllerApi.md#agentgetsentsmsmessages)
- [agentGetSentSmsMessagesRaw](AgentControllerApi.md#agentgetsentsmsmessagesraw)
- [agentGetSmsConversation](AgentControllerApi.md#agentgetsmsconversation)
- [agentGetSmsConversationRaw](AgentControllerApi.md#agentgetsmsconversationraw)
- [agentGetTotpDevice](AgentControllerApi.md#agentgettotpdevice)
- [agentGetTotpDeviceBy](AgentControllerApi.md#agentgettotpdeviceby)
- [agentGetTotpDeviceByRaw](AgentControllerApi.md#agentgettotpdevicebyraw)
- [agentGetTotpDeviceRaw](AgentControllerApi.md#agentgettotpdeviceraw)
- [agentGetTotpDevices](AgentControllerApi.md#agentgettotpdevices)
- [agentGetTotpDevicesRaw](AgentControllerApi.md#agentgettotpdevicesraw)
- [agentListAccessibleInboxes](AgentControllerApi.md#agentlistaccessibleinboxes)
- [agentListAccessibleInboxesRaw](AgentControllerApi.md#agentlistaccessibleinboxesraw)
- [agentListAutomationEvents](AgentControllerApi.md#agentlistautomationevents)
- [agentListAutomationEventsRaw](AgentControllerApi.md#agentlistautomationeventsraw)
- [agentListConversationsV2](AgentControllerApi.md#agentlistconversationsv2)
- [agentListConversationsV2Raw](AgentControllerApi.md#agentlistconversationsv2raw)
- [agentListEmailAttachments](AgentControllerApi.md#agentlistemailattachments)
- [agentListEmailAttachmentsRaw](AgentControllerApi.md#agentlistemailattachmentsraw)
- [agentListEmailDrafts](AgentControllerApi.md#agentlistemaildrafts)
- [agentListEmailDraftsRaw](AgentControllerApi.md#agentlistemaildraftsraw)
- [agentListInboxEmails](AgentControllerApi.md#agentlistinboxemails)
- [agentListInboxEmailsRaw](AgentControllerApi.md#agentlistinboxemailsraw)
- [agentListInboxThreads](AgentControllerApi.md#agentlistinboxthreads)
- [agentListInboxThreadsRaw](AgentControllerApi.md#agentlistinboxthreadsraw)
- [agentListSmsConversations](AgentControllerApi.md#agentlistsmsconversations)
- [agentListSmsConversationsRaw](AgentControllerApi.md#agentlistsmsconversationsraw)
- [agentPrepareWorkItemReply](AgentControllerApi.md#agentprepareworkitemreply)
- [agentPrepareWorkItemReplyRaw](AgentControllerApi.md#agentprepareworkitemreplyraw)
- [agentReleaseConversationClaim](AgentControllerApi.md#agentreleaseconversationclaim)
- [agentReleaseConversationClaimRaw](AgentControllerApi.md#agentreleaseconversationclaimraw)
- [agentReleaseSmsClaim](AgentControllerApi.md#agentreleasesmsclaim)
- [agentReleaseSmsClaimRaw](AgentControllerApi.md#agentreleasesmsclaimraw)
- [agentRenewConversationClaim](AgentControllerApi.md#agentrenewconversationclaim)
- [agentRenewConversationClaimRaw](AgentControllerApi.md#agentrenewconversationclaimraw)
- [agentRenewSmsClaim](AgentControllerApi.md#agentrenewsmsclaim)
- [agentRenewSmsClaimRaw](AgentControllerApi.md#agentrenewsmsclaimraw)
- [agentReplyToEmail](AgentControllerApi.md#agentreplytoemail)
- [agentReplyToEmailRaw](AgentControllerApi.md#agentreplytoemailraw)
- [agentReplyToSms](AgentControllerApi.md#agentreplytosms)
- [agentReplyToSmsRaw](AgentControllerApi.md#agentreplytosmsraw)
- [agentReportWorkerHeartbeat](AgentControllerApi.md#agentreportworkerheartbeat)
- [agentReportWorkerHeartbeatRaw](AgentControllerApi.md#agentreportworkerheartbeatraw)
- [agentRequestConversationHandoff](AgentControllerApi.md#agentrequestconversationhandoff)
- [agentRequestConversationHandoffRaw](AgentControllerApi.md#agentrequestconversationhandoffraw)
- [agentRequestSmsHandoff](AgentControllerApi.md#agentrequestsmshandoff)
- [agentRequestSmsHandoffRaw](AgentControllerApi.md#agentrequestsmshandoffraw)
- [agentSearchInboxEmails](AgentControllerApi.md#agentsearchinboxemails)
- [agentSearchInboxEmailsRaw](AgentControllerApi.md#agentsearchinboxemailsraw)
- [agentSendEmailDraft](AgentControllerApi.md#agentsendemaildraft)
- [agentSendEmailDraftRaw](AgentControllerApi.md#agentsendemaildraftraw)
- [agentSendSms](AgentControllerApi.md#agentsendsms)
- [agentSendSmsRaw](AgentControllerApi.md#agentsendsmsraw)
- [agentUpdateEmailDraft](AgentControllerApi.md#agentupdateemaildraft)
- [agentUpdateEmailDraftRaw](AgentControllerApi.md#agentupdateemaildraftraw)
- [agentUpdateInbox](AgentControllerApi.md#agentupdateinbox)
- [agentUpdateInboxRaw](AgentControllerApi.md#agentupdateinboxraw)
- [agentUpdateTotpDevice](AgentControllerApi.md#agentupdatetotpdevice)
- [agentUpdateTotpDeviceRaw](AgentControllerApi.md#agentupdatetotpdeviceraw)
- [request](AgentControllerApi.md#request)
- [withMiddleware](AgentControllerApi.md#withmiddleware)
- [withPostMiddleware](AgentControllerApi.md#withpostmiddleware)
- [withPreMiddleware](AgentControllerApi.md#withpremiddleware)

## Constructors

### constructor

• **new AgentControllerApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### agentAcquireConversationClaim

▸ **agentAcquireConversationClaim**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

Atomically leases a conversation to one worker. A conflict means another unexpired worker owns it. Use expectedVersion to reject work selected from stale context.
Acquire a renewable conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentAcquireConversationClaimRequest`](../interfaces/AgentAcquireConversationClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

___

### agentAcquireConversationClaimRaw

▸ **agentAcquireConversationClaimRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

Atomically leases a conversation to one worker. A conflict means another unexpired worker owns it. Use expectedVersion to reject work selected from stale context.
Acquire a renewable conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentAcquireConversationClaimRequest`](../interfaces/AgentAcquireConversationClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

___

### agentAddConversationNote

▸ **agentAddConversationNote**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>

Adds agent/operator collaboration context without sending any email to the customer.
Add an internal conversation note

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentAddConversationNoteRequest`](../interfaces/AgentAddConversationNoteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>

___

### agentAddConversationNoteRaw

▸ **agentAddConversationNoteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>\>

Adds agent/operator collaboration context without sending any email to the customer.
Add an internal conversation note

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentAddConversationNoteRequest`](../interfaces/AgentAddConversationNoteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>\>

___

### agentAddSmsNote

▸ **agentAddSmsNote**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>

Add an internal SMS conversation note

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentAddSmsNoteRequest`](../interfaces/AgentAddSmsNoteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>

___

### agentAddSmsNoteRaw

▸ **agentAddSmsNoteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>\>

Add an internal SMS conversation note

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentAddSmsNoteRequest`](../interfaces/AgentAddSmsNoteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationNoteDto`](../interfaces/AgentConversationNoteDto.md)\>\>

___

### agentCheckInboxSendPolicy

▸ **agentCheckInboxSendPolicy**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentInboxSendPolicyDto`](../interfaces/AgentInboxSendPolicyDto.md)\>

Evaluates effective inbox and account sending rules before an agent creates a send action. A blocked result includes the operator recovery route.
Check whether sending rules allow recipients

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCheckInboxSendPolicyRequest`](../interfaces/AgentCheckInboxSendPolicyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentInboxSendPolicyDto`](../interfaces/AgentInboxSendPolicyDto.md)\>

___

### agentCheckInboxSendPolicyRaw

▸ **agentCheckInboxSendPolicyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentInboxSendPolicyDto`](../interfaces/AgentInboxSendPolicyDto.md)\>\>

Evaluates effective inbox and account sending rules before an agent creates a send action. A blocked result includes the operator recovery route.
Check whether sending rules allow recipients

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCheckInboxSendPolicyRequest`](../interfaces/AgentCheckInboxSendPolicyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentInboxSendPolicyDto`](../interfaces/AgentInboxSendPolicyDto.md)\>\>

___

### agentClaimSmsConversation

▸ **agentClaimSmsConversation**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

Acquire an SMS conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentClaimSmsConversationRequest`](../interfaces/AgentClaimSmsConversationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

___

### agentClaimSmsConversationRaw

▸ **agentClaimSmsConversationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

Acquire an SMS conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentClaimSmsConversationRequest`](../interfaces/AgentClaimSmsConversationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

___

### agentCompleteWorkItem

▸ **agentCompleteWorkItem**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentCompletedWorkItemDto`](../interfaces/AgentCompletedWorkItemDto.md)\>

Revalidates conversation freshness, sends one threaded reply with an idempotency key, and releases the supplied claim only after the send succeeds.
Complete a work item with an idempotent reply

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCompleteWorkItemRequest`](../interfaces/AgentCompleteWorkItemRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentCompletedWorkItemDto`](../interfaces/AgentCompletedWorkItemDto.md)\>

___

### agentCompleteWorkItemRaw

▸ **agentCompleteWorkItemRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentCompletedWorkItemDto`](../interfaces/AgentCompletedWorkItemDto.md)\>\>

Revalidates conversation freshness, sends one threaded reply with an idempotency key, and releases the supplied claim only after the send succeeds.
Complete a work item with an idempotent reply

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCompleteWorkItemRequest`](../interfaces/AgentCompleteWorkItemRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentCompletedWorkItemDto`](../interfaces/AgentCompletedWorkItemDto.md)\>\>

___

### agentCreateEmailDraft

▸ **agentCreateEmailDraft**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

Creates a saved draft in the path inbox using the same SendEmailOptions shape as sending, without sending the email.
Create a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateEmailDraftRequest`](../interfaces/AgentCreateEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

___

### agentCreateEmailDraftRaw

▸ **agentCreateEmailDraftRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

Creates a saved draft in the path inbox using the same SendEmailOptions shape as sending, without sending the email.
Create a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateEmailDraftRequest`](../interfaces/AgentCreateEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

___

### agentCreateInbox

▸ **agentCreateInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Creates an inbox without changing this agent connection\'s scopes. Account-wide scope is required so the new inbox is already covered.
Create an inbox with an account-wide inbox-manager connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateInboxRequest`](../interfaces/AgentCreateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### agentCreateInboxRaw

▸ **agentCreateInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Creates an inbox without changing this agent connection\'s scopes. Account-wide scope is required so the new inbox is already covered.
Create an inbox with an account-wide inbox-manager connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateInboxRequest`](../interfaces/AgentCreateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### agentCreateReplyDraft

▸ **agentCreateReplyDraft**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

Builds the same recipients and RFC In-Reply-To/References headers as immediate reply, saves them as a draft, and preserves the required threading headers across later agent draft updates.
Create a correctly threaded reply draft

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateReplyDraftRequest`](../interfaces/AgentCreateReplyDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

___

### agentCreateReplyDraftRaw

▸ **agentCreateReplyDraftRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

Builds the same recipients and RFC In-Reply-To/References headers as immediate reply, saves them as a draft, and preserves the required threading headers across later agent draft updates.
Create a correctly threaded reply draft

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateReplyDraftRequest`](../interfaces/AgentCreateReplyDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

___

### agentCreateTotpDeviceForBase32SecretKey

▸ **agentCreateTotpDeviceForBase32SecretKey**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Create an agent-managed TOTP device from a base32 secret key

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateTotpDeviceForBase32SecretKeyRequest`](../interfaces/AgentCreateTotpDeviceForBase32SecretKeyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### agentCreateTotpDeviceForBase32SecretKeyRaw

▸ **agentCreateTotpDeviceForBase32SecretKeyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Create an agent-managed TOTP device from a base32 secret key

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateTotpDeviceForBase32SecretKeyRequest`](../interfaces/AgentCreateTotpDeviceForBase32SecretKeyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### agentCreateTotpDeviceForCustom

▸ **agentCreateTotpDeviceForCustom**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Create an agent-managed TOTP device from custom options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateTotpDeviceForCustomRequest`](../interfaces/AgentCreateTotpDeviceForCustomRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### agentCreateTotpDeviceForCustomRaw

▸ **agentCreateTotpDeviceForCustomRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Create an agent-managed TOTP device from custom options

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateTotpDeviceForCustomRequest`](../interfaces/AgentCreateTotpDeviceForCustomRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### agentCreateTotpDeviceForOtpAuthUrl

▸ **agentCreateTotpDeviceForOtpAuthUrl**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Create an agent-managed TOTP device from an OTP Auth URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateTotpDeviceForOtpAuthUrlRequest`](../interfaces/AgentCreateTotpDeviceForOtpAuthUrlRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### agentCreateTotpDeviceForOtpAuthUrlRaw

▸ **agentCreateTotpDeviceForOtpAuthUrlRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Create an agent-managed TOTP device from an OTP Auth URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentCreateTotpDeviceForOtpAuthUrlRequest`](../interfaces/AgentCreateTotpDeviceForOtpAuthUrlRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### agentDeferWorkItem

▸ **agentDeferWorkItem**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentDeferredWorkItemDto`](../interfaces/AgentDeferredWorkItemDto.md)\>

Creates or returns the active review handoff and releases the supplied claim after the handoff is durable. Deferral is a normal workflow result rather than an operational failure.
Defer a work item to human review

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentDeferWorkItemRequest`](../interfaces/AgentDeferWorkItemRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentDeferredWorkItemDto`](../interfaces/AgentDeferredWorkItemDto.md)\>

___

### agentDeferWorkItemRaw

▸ **agentDeferWorkItemRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentDeferredWorkItemDto`](../interfaces/AgentDeferredWorkItemDto.md)\>\>

Creates or returns the active review handoff and releases the supplied claim after the handoff is durable. Deferral is a normal workflow result rather than an operational failure.
Defer a work item to human review

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentDeferWorkItemRequest`](../interfaces/AgentDeferWorkItemRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentDeferredWorkItemDto`](../interfaces/AgentDeferredWorkItemDto.md)\>\>

___

### agentDeleteEmailDraft

▸ **agentDeleteEmailDraft**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Deletes a saved draft without sending it.
Delete a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentDeleteEmailDraftRequest`](../interfaces/AgentDeleteEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### agentDeleteEmailDraftRaw

▸ **agentDeleteEmailDraftRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Deletes a saved draft without sending it.
Delete a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentDeleteEmailDraftRequest`](../interfaces/AgentDeleteEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### agentDeleteTotpDevice

▸ **agentDeleteTotpDevice**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Delete an agent-managed TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentDeleteTotpDeviceRequest`](../interfaces/AgentDeleteTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### agentDeleteTotpDeviceRaw

▸ **agentDeleteTotpDeviceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Delete an agent-managed TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentDeleteTotpDeviceRequest`](../interfaces/AgentDeleteTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### agentExtractEmailAttachmentText

▸ **agentExtractEmailAttachmentText**(`requestParameters`, `initOverrides?`): `Promise`<[`ExtractAttachmentTextResult`](../interfaces/ExtractAttachmentTextResult.md)\>

Extracts bounded text only after verifying both the email scope and that the attachment belongs to that email. List attachments first instead of guessing IDs.
Extract text from a scoped email attachment for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentExtractEmailAttachmentTextRequest`](../interfaces/AgentExtractEmailAttachmentTextRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ExtractAttachmentTextResult`](../interfaces/ExtractAttachmentTextResult.md)\>

___

### agentExtractEmailAttachmentTextRaw

▸ **agentExtractEmailAttachmentTextRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExtractAttachmentTextResult`](../interfaces/ExtractAttachmentTextResult.md)\>\>

Extracts bounded text only after verifying both the email scope and that the attachment belongs to that email. List attachments first instead of guessing IDs.
Extract text from a scoped email attachment for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentExtractEmailAttachmentTextRequest`](../interfaces/AgentExtractEmailAttachmentTextRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ExtractAttachmentTextResult`](../interfaces/ExtractAttachmentTextResult.md)\>\>

___

### agentGenerateTotpDeviceCode

▸ **agentGenerateTotpDeviceCode**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>

Generate a code for an agent-managed TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGenerateTotpDeviceCodeRequest`](../interfaces/AgentGenerateTotpDeviceCodeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>

___

### agentGenerateTotpDeviceCodeRaw

▸ **agentGenerateTotpDeviceCodeRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>\>

Generate a code for an agent-managed TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGenerateTotpDeviceCodeRequest`](../interfaces/AgentGenerateTotpDeviceCodeRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceCodeDto`](../interfaces/TotpDeviceCodeDto.md)\>\>

___

### agentGetCapabilities

▸ **agentGetCapabilities**(`initOverrides?`): `Promise`<[`AgentCapabilitiesDto`](../interfaces/AgentCapabilitiesDto.md)\>

Returns the connection identity, role, effective permission names, declared resource scope, feature availability, and server-enforced limits. Call this once during worker startup instead of hard-coding role behavior.
Discover this agent connection\'s capabilities

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentCapabilitiesDto`](../interfaces/AgentCapabilitiesDto.md)\>

___

### agentGetCapabilitiesRaw

▸ **agentGetCapabilitiesRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentCapabilitiesDto`](../interfaces/AgentCapabilitiesDto.md)\>\>

Returns the connection identity, role, effective permission names, declared resource scope, feature availability, and server-enforced limits. Call this once during worker startup instead of hard-coding role behavior.
Discover this agent connection\'s capabilities

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentCapabilitiesDto`](../interfaces/AgentCapabilitiesDto.md)\>\>

___

### agentGetConversationV2

▸ **agentGetConversationV2**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationDetailV2Dto`](../interfaces/AgentConversationDetailV2Dto.md)\>

Returns the projected conversation plus this connection\'s bounded activity timeline, internal notes, and active human-review handoff.
Get one scoped conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetConversationV2Request`](../interfaces/AgentGetConversationV2Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationDetailV2Dto`](../interfaces/AgentConversationDetailV2Dto.md)\>

___

### agentGetConversationV2Raw

▸ **agentGetConversationV2Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationDetailV2Dto`](../interfaces/AgentConversationDetailV2Dto.md)\>\>

Returns the projected conversation plus this connection\'s bounded activity timeline, internal notes, and active human-review handoff.
Get one scoped conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetConversationV2Request`](../interfaces/AgentGetConversationV2Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationDetailV2Dto`](../interfaces/AgentConversationDetailV2Dto.md)\>\>

___

### agentGetEmail

▸ **agentGetEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Returns parsed email content after resolving the message inbox and checking agent scope.
Get scoped hydrated email for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailRequest`](../interfaces/AgentGetEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### agentGetEmailDraft

▸ **agentGetEmailDraft**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

Returns a saved draft including the full SendEmailOptions payload.
Get a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailDraftRequest`](../interfaces/AgentGetEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

___

### agentGetEmailDraftRaw

▸ **agentGetEmailDraftRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

Returns a saved draft including the full SendEmailOptions payload.
Get a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailDraftRequest`](../interfaces/AgentGetEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

___

### agentGetEmailRaw

▸ **agentGetEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Returns parsed email content after resolving the message inbox and checking agent scope.
Get scoped hydrated email for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailRequest`](../interfaces/AgentGetEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### agentGetEmailSummary

▸ **agentGetEmailSummary**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

Returns lightweight metadata and headers for an email after resolving its inbox and checking the agent key scope.
Get scoped email summary for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailSummaryRequest`](../interfaces/AgentGetEmailSummaryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)\>

___

### agentGetEmailSummaryRaw

▸ **agentGetEmailSummaryRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

Returns lightweight metadata and headers for an email after resolving its inbox and checking the agent key scope.
Get scoped email summary for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailSummaryRequest`](../interfaces/AgentGetEmailSummaryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)\>\>

___

### agentGetEmailThread

▸ **agentGetEmailThread**(`requestParameters`, `initOverrides?`): `Promise`<[`ScopedEmailThread`](../interfaces/ScopedEmailThread.md)\>

Returns thread metadata and ordered messages using an email ID as the authorization anchor. Arbitrary thread-ID probing is not allowed.
Get a scoped email thread for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailThreadRequest`](../interfaces/AgentGetEmailThreadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ScopedEmailThread`](../interfaces/ScopedEmailThread.md)\>

___

### agentGetEmailThreadRaw

▸ **agentGetEmailThreadRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScopedEmailThread`](../interfaces/ScopedEmailThread.md)\>\>

Returns thread metadata and ordered messages using an email ID as the authorization anchor. Arbitrary thread-ID probing is not allowed.
Get a scoped email thread for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetEmailThreadRequest`](../interfaces/AgentGetEmailThreadRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ScopedEmailThread`](../interfaces/ScopedEmailThread.md)\>\>

___

### agentGetLatestInboxEmail

▸ **agentGetLatestInboxEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`Email`](../interfaces/Email.md)\>

Waits for and returns the latest email in one scoped inbox. This is the agent-shaped equivalent of latest-message polling.
Get latest scoped inbox email for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetLatestInboxEmailRequest`](../interfaces/AgentGetLatestInboxEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Email`](../interfaces/Email.md)\>

___

### agentGetLatestInboxEmailRaw

▸ **agentGetLatestInboxEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

Waits for and returns the latest email in one scoped inbox. This is the agent-shaped equivalent of latest-message polling.
Get latest scoped inbox email for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetLatestInboxEmailRequest`](../interfaces/AgentGetLatestInboxEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Email`](../interfaces/Email.md)\>\>

___

### agentGetNextWorkItem

▸ **agentGetNextWorkItem**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentWorkItemDto`](../interfaces/AgentWorkItemDto.md)\>

Selects the oldest available scoped conversation and atomically claims it for one worker. This combines queue selection and claim acquisition so concurrent workers do not need to coordinate those steps themselves.
Claim the next conversation work item

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetNextWorkItemRequest`](../interfaces/AgentGetNextWorkItemRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentWorkItemDto`](../interfaces/AgentWorkItemDto.md)\>

___

### agentGetNextWorkItemRaw

▸ **agentGetNextWorkItemRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentWorkItemDto`](../interfaces/AgentWorkItemDto.md)\>\>

Selects the oldest available scoped conversation and atomically claims it for one worker. This combines queue selection and claim acquisition so concurrent workers do not need to coordinate those steps themselves.
Claim the next conversation work item

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetNextWorkItemRequest`](../interfaces/AgentGetNextWorkItemRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentWorkItemDto`](../interfaces/AgentWorkItemDto.md)\>\>

___

### agentGetPhoneMessageThreadItems

▸ **agentGetPhoneMessageThreadItems**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>

List SMS thread messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneMessageThreadItemsRequest`](../interfaces/AgentGetPhoneMessageThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>

___

### agentGetPhoneMessageThreadItemsRaw

▸ **agentGetPhoneMessageThreadItemsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>\>

List SMS thread messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneMessageThreadItemsRequest`](../interfaces/AgentGetPhoneMessageThreadItemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadItemProjection`](../interfaces/PagePhoneMessageThreadItemProjection.md)\>\>

___

### agentGetPhoneMessageThreads

▸ **agentGetPhoneMessageThreads**(`requestParameters`, `initOverrides?`): `Promise`<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>

List SMS threads

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneMessageThreadsRequest`](../interfaces/AgentGetPhoneMessageThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>

___

### agentGetPhoneMessageThreadsRaw

▸ **agentGetPhoneMessageThreadsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>\>

List SMS threads

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneMessageThreadsRequest`](../interfaces/AgentGetPhoneMessageThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PagePhoneMessageThreadProjection`](../interfaces/PagePhoneMessageThreadProjection.md)\>\>

___

### agentGetPhoneNumber

▸ **agentGetPhoneNumber**(`requestParameters`, `initOverrides?`): `Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

Get an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneNumberRequest`](../interfaces/AgentGetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>

___

### agentGetPhoneNumberRaw

▸ **agentGetPhoneNumberRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

Get an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneNumberRequest`](../interfaces/AgentGetPhoneNumberRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PhoneNumberDto`](../interfaces/PhoneNumberDto.md)\>\>

___

### agentGetPhoneNumbers

▸ **agentGetPhoneNumbers**(`requestParameters`, `initOverrides?`): `Promise`<[`PageAgentPhoneNumber`](../interfaces/PageAgentPhoneNumber.md)\>

Returns only active phone numbers explicitly assigned to this agent connection.
List assigned phone numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneNumbersRequest`](../interfaces/AgentGetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageAgentPhoneNumber`](../interfaces/PageAgentPhoneNumber.md)\>

___

### agentGetPhoneNumbersRaw

▸ **agentGetPhoneNumbersRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAgentPhoneNumber`](../interfaces/PageAgentPhoneNumber.md)\>\>

Returns only active phone numbers explicitly assigned to this agent connection.
List assigned phone numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetPhoneNumbersRequest`](../interfaces/AgentGetPhoneNumbersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageAgentPhoneNumber`](../interfaces/PageAgentPhoneNumber.md)\>\>

___

### agentGetReceivedSmsMessage

▸ **agentGetReceivedSmsMessage**(`requestParameters`, `initOverrides?`): `Promise`<[`SmsDto`](../interfaces/SmsDto.md)\>

Get received SMS

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetReceivedSmsMessageRequest`](../interfaces/AgentGetReceivedSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SmsDto`](../interfaces/SmsDto.md)\>

___

### agentGetReceivedSmsMessageRaw

▸ **agentGetReceivedSmsMessageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsDto`](../interfaces/SmsDto.md)\>\>

Get received SMS

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetReceivedSmsMessageRequest`](../interfaces/AgentGetReceivedSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SmsDto`](../interfaces/SmsDto.md)\>\>

___

### agentGetReceivedSmsMessages

▸ **agentGetReceivedSmsMessages**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>

List received SMS for an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetReceivedSmsMessagesRequest`](../interfaces/AgentGetReceivedSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>

___

### agentGetReceivedSmsMessagesRaw

▸ **agentGetReceivedSmsMessagesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>\>

List received SMS for an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetReceivedSmsMessagesRequest`](../interfaces/AgentGetReceivedSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSmsProjection`](../interfaces/PageSmsProjection.md)\>\>

___

### agentGetSentSmsMessage

▸ **agentGetSentSmsMessage**(`requestParameters`, `initOverrides?`): `Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

Get sent SMS

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetSentSmsMessageRequest`](../interfaces/AgentGetSentSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

___

### agentGetSentSmsMessageRaw

▸ **agentGetSentSmsMessageRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

Get sent SMS

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetSentSmsMessageRequest`](../interfaces/AgentGetSentSmsMessageRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

___

### agentGetSentSmsMessages

▸ **agentGetSentSmsMessages**(`requestParameters`, `initOverrides?`): `Promise`<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>

List sent SMS for an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetSentSmsMessagesRequest`](../interfaces/AgentGetSentSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>

___

### agentGetSentSmsMessagesRaw

▸ **agentGetSentSmsMessagesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>\>

List sent SMS for an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetSentSmsMessagesRequest`](../interfaces/AgentGetSentSmsMessagesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageSentSmsProjection`](../interfaces/PageSentSmsProjection.md)\>\>

___

### agentGetSmsConversation

▸ **agentGetSmsConversation**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentSmsConversationDetailDto`](../interfaces/AgentSmsConversationDetailDto.md)\>

Get one SMS conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetSmsConversationRequest`](../interfaces/AgentGetSmsConversationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentSmsConversationDetailDto`](../interfaces/AgentSmsConversationDetailDto.md)\>

___

### agentGetSmsConversationRaw

▸ **agentGetSmsConversationRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentSmsConversationDetailDto`](../interfaces/AgentSmsConversationDetailDto.md)\>\>

Get one SMS conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetSmsConversationRequest`](../interfaces/AgentGetSmsConversationRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentSmsConversationDetailDto`](../interfaces/AgentSmsConversationDetailDto.md)\>\>

___

### agentGetTotpDevice

▸ **agentGetTotpDevice**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Get an agent-accessible TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetTotpDeviceRequest`](../interfaces/AgentGetTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### agentGetTotpDeviceBy

▸ **agentGetTotpDeviceBy**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>

Find an agent-accessible TOTP device by name, issuer, or username

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetTotpDeviceByRequest`](../interfaces/AgentGetTotpDeviceByRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>

___

### agentGetTotpDeviceByRaw

▸ **agentGetTotpDeviceByRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>\>

Find an agent-accessible TOTP device by name, issuer, or username

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetTotpDeviceByRequest`](../interfaces/AgentGetTotpDeviceByRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceOptionalDto`](../interfaces/TotpDeviceOptionalDto.md)\>\>

___

### agentGetTotpDeviceRaw

▸ **agentGetTotpDeviceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Get an agent-accessible TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetTotpDeviceRequest`](../interfaces/AgentGetTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### agentGetTotpDevices

▸ **agentGetTotpDevices**(`requestParameters`, `initOverrides?`): `Promise`<[`PageTotpDeviceProjection`](../interfaces/PageTotpDeviceProjection.md)\>

List agent-accessible TOTP devices

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetTotpDevicesRequest`](../interfaces/AgentGetTotpDevicesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageTotpDeviceProjection`](../interfaces/PageTotpDeviceProjection.md)\>

___

### agentGetTotpDevicesRaw

▸ **agentGetTotpDevicesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTotpDeviceProjection`](../interfaces/PageTotpDeviceProjection.md)\>\>

List agent-accessible TOTP devices

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentGetTotpDevicesRequest`](../interfaces/AgentGetTotpDevicesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageTotpDeviceProjection`](../interfaces/PageTotpDeviceProjection.md)\>\>

___

### agentListAccessibleInboxes

▸ **agentListAccessibleInboxes**(`requestParameters`, `initOverrides?`): `Promise`<[`AccessibleInboxList`](../interfaces/AccessibleInboxList.md)\>

Returns the inbox IDs, addresses, names, and tags visible to this resource-scoped agent key. Agents should use this endpoint instead of guessing inbox IDs.
List inboxes accessible to an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListAccessibleInboxesRequest`](../interfaces/AgentListAccessibleInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AccessibleInboxList`](../interfaces/AccessibleInboxList.md)\>

___

### agentListAccessibleInboxesRaw

▸ **agentListAccessibleInboxesRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AccessibleInboxList`](../interfaces/AccessibleInboxList.md)\>\>

Returns the inbox IDs, addresses, names, and tags visible to this resource-scoped agent key. Agents should use this endpoint instead of guessing inbox IDs.
List inboxes accessible to an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListAccessibleInboxesRequest`](../interfaces/AgentListAccessibleInboxesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AccessibleInboxList`](../interfaces/AccessibleInboxList.md)\>\>

___

### agentListAutomationEvents

▸ **agentListAutomationEvents**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentAutomationEventPageDto`](../interfaces/AgentAutomationEventPageDto.md)\>

Returns an ordered at-least-once event batch. Persist nextCursor after processing and deduplicate by eventId. waitSeconds enables bounded long polling; production workers should not continuously call latest-email polling.
Read durable scoped automation events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListAutomationEventsRequest`](../interfaces/AgentListAutomationEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentAutomationEventPageDto`](../interfaces/AgentAutomationEventPageDto.md)\>

___

### agentListAutomationEventsRaw

▸ **agentListAutomationEventsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentAutomationEventPageDto`](../interfaces/AgentAutomationEventPageDto.md)\>\>

Returns an ordered at-least-once event batch. Persist nextCursor after processing and deduplicate by eventId. waitSeconds enables bounded long polling; production workers should not continuously call latest-email polling.
Read durable scoped automation events

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListAutomationEventsRequest`](../interfaces/AgentListAutomationEventsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentAutomationEventPageDto`](../interfaces/AgentAutomationEventPageDto.md)\>\>

___

### agentListConversationsV2

▸ **agentListConversationsV2**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationCursorPageDto`](../interfaces/AgentConversationCursorPageDto.md)\>

Reads the bounded mail-thread projection and applies current connection scope on every request. Persist nextCursor only after processing the returned page. Exact totals are intentionally omitted.
List active conversations with an opaque keyset cursor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListConversationsV2Request`](../interfaces/AgentListConversationsV2Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationCursorPageDto`](../interfaces/AgentConversationCursorPageDto.md)\>

___

### agentListConversationsV2Raw

▸ **agentListConversationsV2Raw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationCursorPageDto`](../interfaces/AgentConversationCursorPageDto.md)\>\>

Reads the bounded mail-thread projection and applies current connection scope on every request. Persist nextCursor only after processing the returned page. Exact totals are intentionally omitted.
List active conversations with an opaque keyset cursor

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListConversationsV2Request`](../interfaces/AgentListConversationsV2Request.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationCursorPageDto`](../interfaces/AgentConversationCursorPageDto.md)\>\>

___

### agentListEmailAttachments

▸ **agentListEmailAttachments**(`requestParameters`, `initOverrides?`): `Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>

Returns bounded attachment metadata only after verifying the email belongs to an inbox visible to the agent key.
List attachments on a scoped email for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListEmailAttachmentsRequest`](../interfaces/AgentListEmailAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>

___

### agentListEmailAttachmentsRaw

▸ **agentListEmailAttachmentsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>\>

Returns bounded attachment metadata only after verifying the email belongs to an inbox visible to the agent key.
List attachments on a scoped email for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListEmailAttachmentsRequest`](../interfaces/AgentListEmailAttachmentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AttachmentMetaData`](../interfaces/AttachmentMetaData.md)[]\>\>

___

### agentListEmailDrafts

▸ **agentListEmailDrafts**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailDraftProjection`](../interfaces/PageEmailDraftProjection.md)\>

Lists draft previews for one scoped inbox.
List scoped email drafts for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListEmailDraftsRequest`](../interfaces/AgentListEmailDraftsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailDraftProjection`](../interfaces/PageEmailDraftProjection.md)\>

___

### agentListEmailDraftsRaw

▸ **agentListEmailDraftsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailDraftProjection`](../interfaces/PageEmailDraftProjection.md)\>\>

Lists draft previews for one scoped inbox.
List scoped email drafts for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListEmailDraftsRequest`](../interfaces/AgentListEmailDraftsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailDraftProjection`](../interfaces/PageEmailDraftProjection.md)\>\>

___

### agentListInboxEmails

▸ **agentListInboxEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>

Returns paginated email previews for one inbox after checking the agent key has AGENT_READ_EMAIL and is scoped to the inbox.
List scoped inbox emails for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListInboxEmailsRequest`](../interfaces/AgentListInboxEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>

___

### agentListInboxEmailsRaw

▸ **agentListInboxEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>\>

Returns paginated email previews for one inbox after checking the agent key has AGENT_READ_EMAIL and is scoped to the inbox.
List scoped inbox emails for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListInboxEmailsRequest`](../interfaces/AgentListInboxEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailPreview`](../interfaces/PageEmailPreview.md)\>\>

___

### agentListInboxThreads

▸ **agentListInboxThreads**(`requestParameters`, `initOverrides?`): `Promise`<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>

Lists conversation threads for one scoped inbox, including unread state, attachment presence, message count, and latest-message excerpts.
List scoped inbox threads for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListInboxThreadsRequest`](../interfaces/AgentListInboxThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>

___

### agentListInboxThreadsRaw

▸ **agentListInboxThreadsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>\>

Lists conversation threads for one scoped inbox, including unread state, attachment presence, message count, and latest-message excerpts.
List scoped inbox threads for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListInboxThreadsRequest`](../interfaces/AgentListInboxThreadsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`PageEmailThreadProjection`](../interfaces/PageEmailThreadProjection.md)\>\>

___

### agentListSmsConversations

▸ **agentListSmsConversations**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentSmsConversationCursorPageDto`](../interfaces/AgentSmsConversationCursorPageDto.md)\>

List active SMS conversations

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListSmsConversationsRequest`](../interfaces/AgentListSmsConversationsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentSmsConversationCursorPageDto`](../interfaces/AgentSmsConversationCursorPageDto.md)\>

___

### agentListSmsConversationsRaw

▸ **agentListSmsConversationsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentSmsConversationCursorPageDto`](../interfaces/AgentSmsConversationCursorPageDto.md)\>\>

List active SMS conversations

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentListSmsConversationsRequest`](../interfaces/AgentListSmsConversationsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentSmsConversationCursorPageDto`](../interfaces/AgentSmsConversationCursorPageDto.md)\>\>

___

### agentPrepareWorkItemReply

▸ **agentPrepareWorkItemReply**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentPreparedReplyDto`](../interfaces/AgentPreparedReplyDto.md)\>

Checks that the selected conversation and latest inbound email are still current, then creates a correctly threaded reply draft. An optional internal note records context for human review without sending email.
Prepare a guarded reply draft

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentPrepareWorkItemReplyRequest`](../interfaces/AgentPrepareWorkItemReplyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentPreparedReplyDto`](../interfaces/AgentPreparedReplyDto.md)\>

___

### agentPrepareWorkItemReplyRaw

▸ **agentPrepareWorkItemReplyRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentPreparedReplyDto`](../interfaces/AgentPreparedReplyDto.md)\>\>

Checks that the selected conversation and latest inbound email are still current, then creates a correctly threaded reply draft. An optional internal note records context for human review without sending email.
Prepare a guarded reply draft

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentPrepareWorkItemReplyRequest`](../interfaces/AgentPrepareWorkItemReplyRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentPreparedReplyDto`](../interfaces/AgentPreparedReplyDto.md)\>\>

___

### agentReleaseConversationClaim

▸ **agentReleaseConversationClaim**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Release is idempotent; repeating it does not fail.
Release a conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReleaseConversationClaimRequest`](../interfaces/AgentReleaseConversationClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### agentReleaseConversationClaimRaw

▸ **agentReleaseConversationClaimRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Release is idempotent; repeating it does not fail.
Release a conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReleaseConversationClaimRequest`](../interfaces/AgentReleaseConversationClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### agentReleaseSmsClaim

▸ **agentReleaseSmsClaim**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

Release an SMS conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReleaseSmsClaimRequest`](../interfaces/AgentReleaseSmsClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

___

### agentReleaseSmsClaimRaw

▸ **agentReleaseSmsClaimRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

Release an SMS conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReleaseSmsClaimRequest`](../interfaces/AgentReleaseSmsClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

___

### agentRenewConversationClaim

▸ **agentRenewConversationClaim**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

Renew a conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRenewConversationClaimRequest`](../interfaces/AgentRenewConversationClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

___

### agentRenewConversationClaimRaw

▸ **agentRenewConversationClaimRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

Renew a conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRenewConversationClaimRequest`](../interfaces/AgentRenewConversationClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

___

### agentRenewSmsClaim

▸ **agentRenewSmsClaim**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

Renew an SMS conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRenewSmsClaimRequest`](../interfaces/AgentRenewSmsClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>

___

### agentRenewSmsClaimRaw

▸ **agentRenewSmsClaimRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

Renew an SMS conversation claim

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRenewSmsClaimRequest`](../interfaces/AgentRenewSmsClaimRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationClaimDto`](../interfaces/AgentConversationClaimDto.md)\>\>

___

### agentReplyToEmail

▸ **agentReplyToEmail**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Sends a reply using the original conversation context after checking AGENT_REPLY_EMAIL and inbox scope.
Reply to a scoped email as an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReplyToEmailRequest`](../interfaces/AgentReplyToEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### agentReplyToEmailRaw

▸ **agentReplyToEmailRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Sends a reply using the original conversation context after checking AGENT_REPLY_EMAIL and inbox scope.
Reply to a scoped email as an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReplyToEmailRequest`](../interfaces/AgentReplyToEmailRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

___

### agentReplyToSms

▸ **agentReplyToSms**(`requestParameters`, `initOverrides?`): `Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

Reply to received SMS

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReplyToSmsRequest`](../interfaces/AgentReplyToSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

___

### agentReplyToSmsRaw

▸ **agentReplyToSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

Reply to received SMS

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReplyToSmsRequest`](../interfaces/AgentReplyToSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

___

### agentReportWorkerHeartbeat

▸ **agentReportWorkerHeartbeat**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentWorkerHeartbeatDto`](../interfaces/AgentWorkerHeartbeatDto.md)\>

Records one running worker instance and its deployed release for owner-side health monitoring. Send this during startup and periodically while the process can accept work; it does not claim or mutate a conversation.
Report a worker heartbeat

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReportWorkerHeartbeatRequest`](../interfaces/AgentReportWorkerHeartbeatRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentWorkerHeartbeatDto`](../interfaces/AgentWorkerHeartbeatDto.md)\>

___

### agentReportWorkerHeartbeatRaw

▸ **agentReportWorkerHeartbeatRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentWorkerHeartbeatDto`](../interfaces/AgentWorkerHeartbeatDto.md)\>\>

Records one running worker instance and its deployed release for owner-side health monitoring. Send this during startup and periodically while the process can accept work; it does not claim or mutate a conversation.
Report a worker heartbeat

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentReportWorkerHeartbeatRequest`](../interfaces/AgentReportWorkerHeartbeatRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentWorkerHeartbeatDto`](../interfaces/AgentWorkerHeartbeatDto.md)\>\>

___

### agentRequestConversationHandoff

▸ **agentRequestConversationHandoff**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>

Creates or returns the active handoff and moves the shared workflow state into REVIEW without classifying the request as an operational failure.
Request human review for a conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRequestConversationHandoffRequest`](../interfaces/AgentRequestConversationHandoffRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>

___

### agentRequestConversationHandoffRaw

▸ **agentRequestConversationHandoffRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>\>

Creates or returns the active handoff and moves the shared workflow state into REVIEW without classifying the request as an operational failure.
Request human review for a conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRequestConversationHandoffRequest`](../interfaces/AgentRequestConversationHandoffRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>\>

___

### agentRequestSmsHandoff

▸ **agentRequestSmsHandoff**(`requestParameters`, `initOverrides?`): `Promise`<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>

Request human review for an SMS conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRequestSmsHandoffRequest`](../interfaces/AgentRequestSmsHandoffRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>

___

### agentRequestSmsHandoffRaw

▸ **agentRequestSmsHandoffRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>\>

Request human review for an SMS conversation

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentRequestSmsHandoffRequest`](../interfaces/AgentRequestSmsHandoffRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgentConversationHandoffDto`](../interfaces/AgentConversationHandoffDto.md)\>\>

___

### agentSearchInboxEmails

▸ **agentSearchInboxEmails**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

Searches one scoped inbox using explicit field matches and attachment conditions. Use this for deterministic automation recovery instead of repeatedly fetching the latest message.
Search scoped inbox emails for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentSearchInboxEmailsRequest`](../interfaces/AgentSearchInboxEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>

___

### agentSearchInboxEmailsRaw

▸ **agentSearchInboxEmailsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

Searches one scoped inbox using explicit field matches and attachment conditions. Use this for deterministic automation recovery instead of repeatedly fetching the latest message.
Search scoped inbox emails for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentSearchInboxEmailsRequest`](../interfaces/AgentSearchInboxEmailsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailPreview`](../interfaces/EmailPreview.md)[]\>\>

___

### agentSendEmailDraft

▸ **agentSendEmailDraft**(`requestParameters`, `initOverrides?`): `Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

Sends a saved draft through the existing inbox send pipeline and deletes it only after send success.
Send a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentSendEmailDraftRequest`](../interfaces/AgentSendEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>

___

### agentSendEmailDraftRaw

▸ **agentSendEmailDraftRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

Sends a saved draft through the existing inbox send pipeline and deletes it only after send success.
Send a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentSendEmailDraftRequest`](../interfaces/AgentSendEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentEmailDto`](../interfaces/SentEmailDto.md)\>\>

___

### agentSendSms

▸ **agentSendSms**(`requestParameters`, `initOverrides?`): `Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

Send SMS from an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentSendSmsRequest`](../interfaces/AgentSendSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>

___

### agentSendSmsRaw

▸ **agentSendSmsRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

Send SMS from an assigned phone number

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentSendSmsRequest`](../interfaces/AgentSendSmsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SentSmsDto`](../interfaces/SentSmsDto.md)\>\>

___

### agentUpdateEmailDraft

▸ **agentUpdateEmailDraft**(`requestParameters`, `initOverrides?`): `Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

Replaces the SendEmailOptions stored for a draft. The draft remains attached to its original inbox.
Update a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentUpdateEmailDraftRequest`](../interfaces/AgentUpdateEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>

___

### agentUpdateEmailDraftRaw

▸ **agentUpdateEmailDraftRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

Replaces the SendEmailOptions stored for a draft. The draft remains attached to its original inbox.
Update a scoped email draft for an agent

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentUpdateEmailDraftRequest`](../interfaces/AgentUpdateEmailDraftRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`EmailDraftDto`](../interfaces/EmailDraftDto.md)\>\>

___

### agentUpdateInbox

▸ **agentUpdateInbox**(`requestParameters`, `initOverrides?`): `Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

Update an inbox visible to an inbox-manager connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentUpdateInboxRequest`](../interfaces/AgentUpdateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InboxDto`](../interfaces/InboxDto.md)\>

___

### agentUpdateInboxRaw

▸ **agentUpdateInboxRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

Update an inbox visible to an inbox-manager connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentUpdateInboxRequest`](../interfaces/AgentUpdateInboxRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InboxDto`](../interfaces/InboxDto.md)\>\>

___

### agentUpdateTotpDevice

▸ **agentUpdateTotpDevice**(`requestParameters`, `initOverrides?`): `Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

Update an agent-managed TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentUpdateTotpDeviceRequest`](../interfaces/AgentUpdateTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>

___

### agentUpdateTotpDeviceRaw

▸ **agentUpdateTotpDeviceRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

Update an agent-managed TOTP device

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`AgentUpdateTotpDeviceRequest`](../interfaces/AgentUpdateTotpDeviceRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`TotpDeviceDto`](../interfaces/TotpDeviceDto.md)\>\>

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

___

### withMiddleware

▸ **withMiddleware**<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

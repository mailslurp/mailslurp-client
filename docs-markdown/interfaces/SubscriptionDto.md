[MailSlurp JS](../README.md) / SubscriptionDto

# Interface: SubscriptionDto

Subscription and limits

**`Export`**

**`Interface`**

SubscriptionDto

## Table of contents

### Properties

- [agents](SubscriptionDto.md#agents)
- [aiDestinationSheets](SubscriptionDto.md#aidestinationsheets)
- [aiTransformers](SubscriptionDto.md#aitransformers)
- [aliases](SubscriptionDto.md#aliases)
- [attachmentAutomations](SubscriptionDto.md#attachmentautomations)
- [attachments](SubscriptionDto.md#attachments)
- [auditLogs](SubscriptionDto.md#auditlogs)
- [backup](SubscriptionDto.md#backup)
- [bulk](SubscriptionDto.md#bulk)
- [campaignProbe](SubscriptionDto.md#campaignprobe)
- [cancelAt](SubscriptionDto.md#cancelat)
- [contacts](SubscriptionDto.md#contacts)
- [cost](SubscriptionDto.md#cost)
- [costMajor](SubscriptionDto.md#costmajor)
- [createdAt](SubscriptionDto.md#createdat)
- [currency](SubscriptionDto.md#currency)
- [currentPeriodEnd](SubscriptionDto.md#currentperiodend)
- [currentPeriodStart](SubscriptionDto.md#currentperiodstart)
- [customerId](SubscriptionDto.md#customerid)
- [dailyReceive](SubscriptionDto.md#dailyreceive)
- [dailySend](SubscriptionDto.md#dailysend)
- [deliverabilityTest](SubscriptionDto.md#deliverabilitytest)
- [demoDaysRemaining](SubscriptionDto.md#demodaysremaining)
- [devicePreviews](SubscriptionDto.md#devicepreviews)
- [domainMonitor](SubscriptionDto.md#domainmonitor)
- [domains](SubscriptionDto.md#domains)
- [emailAudit](SubscriptionDto.md#emailaudit)
- [emailFeatureCheck](SubscriptionDto.md#emailfeaturecheck)
- [environments](SubscriptionDto.md#environments)
- [externalPlanId](SubscriptionDto.md#externalplanid)
- [externalValidationPlanId](SubscriptionDto.md#externalvalidationplanid)
- [externalValidationSubscriptionItemId](SubscriptionDto.md#externalvalidationsubscriptionitemid)
- [gmailInboxConnection](SubscriptionDto.md#gmailinboxconnection)
- [gmailInboxConnectionLimit](SubscriptionDto.md#gmailinboxconnectionlimit)
- [id](SubscriptionDto.md#id)
- [importExport](SubscriptionDto.md#importexport)
- [inboxForwarders](SubscriptionDto.md#inboxforwarders)
- [inboxRepliers](SubscriptionDto.md#inboxrepliers)
- [inboxRulesets](SubscriptionDto.md#inboxrulesets)
- [inboxWarmUp](SubscriptionDto.md#inboxwarmup)
- [includedMonthlyWarmupCreditsPerSender](SubscriptionDto.md#includedmonthlywarmupcreditspersender)
- [includedWarmupSenderSeats](SubscriptionDto.md#includedwarmupsenderseats)
- [isDecimalLess](SubscriptionDto.md#isdecimalless)
- [loadTest](SubscriptionDto.md#loadtest)
- [maxAutomatedInboxPlacementSchedules](SubscriptionDto.md#maxautomatedinboxplacementschedules)
- [maxEmailSizeMb](SubscriptionDto.md#maxemailsizemb)
- [maxInboxPlacementSeedAddressesPerTest](SubscriptionDto.md#maxinboxplacementseedaddressespertest)
- [maxUniqueRecipients](SubscriptionDto.md#maxuniquerecipients)
- [members](SubscriptionDto.md#members)
- [metered](SubscriptionDto.md#metered)
- [monthlyGetMailServerRecords](SubscriptionDto.md#monthlygetmailserverrecords)
- [monthlyInboxes](SubscriptionDto.md#monthlyinboxes)
- [monthlyReceive](SubscriptionDto.md#monthlyreceive)
- [monthlySend](SubscriptionDto.md#monthlysend)
- [monthlyTemporaryInboxes](SubscriptionDto.md#monthlytemporaryinboxes)
- [monthlyVerifyEmailAddress](SubscriptionDto.md#monthlyverifyemailaddress)
- [oauthConnections](SubscriptionDto.md#oauthconnections)
- [oidcSSO](SubscriptionDto.md#oidcsso)
- [organizations](SubscriptionDto.md#organizations)
- [password](SubscriptionDto.md#password)
- [permanentInbox](SubscriptionDto.md#permanentinbox)
- [permitsExternalSend](SubscriptionDto.md#permitsexternalsend)
- [phoneNumbers](SubscriptionDto.md#phonenumbers)
- [phoneProvisionRequestLimit](SubscriptionDto.md#phoneprovisionrequestlimit)
- [recipients](SubscriptionDto.md#recipients)
- [samlSSO](SubscriptionDto.md#samlsso)
- [scimProvisioning](SubscriptionDto.md#scimprovisioning)
- [screenshots](SubscriptionDto.md#screenshots)
- [sendWithQueue](SubscriptionDto.md#sendwithqueue)
- [storageBytes](SubscriptionDto.md#storagebytes)
- [subscriptionId](SubscriptionDto.md#subscriptionid)
- [subscriptionSchedule](SubscriptionDto.md#subscriptionschedule)
- [subscriptionStatus](SubscriptionDto.md#subscriptionstatus)
- [subscriptionStatusIsBad](SubscriptionDto.md#subscriptionstatusisbad)
- [subscriptionType](SubscriptionDto.md#subscriptiontype)
- [threads](SubscriptionDto.md#threads)
- [totalInboxes](SubscriptionDto.md#totalinboxes)
- [totalPermanentInboxes](SubscriptionDto.md#totalpermanentinboxes)
- [trackingPixels](SubscriptionDto.md#trackingpixels)
- [trialAdjustedAt](SubscriptionDto.md#trialadjustedat)
- [trialAdjustmentReason](SubscriptionDto.md#trialadjustmentreason)
- [trialDays](SubscriptionDto.md#trialdays)
- [trialEnd](SubscriptionDto.md#trialend)
- [trialStart](SubscriptionDto.md#trialstart)
- [updatedAt](SubscriptionDto.md#updatedat)
- [userId](SubscriptionDto.md#userid)
- [userPermissions](SubscriptionDto.md#userpermissions)
- [virtualTotpDevices](SubscriptionDto.md#virtualtotpdevices)
- [warmupControlledRecipientCreditWeight](SubscriptionDto.md#warmupcontrolledrecipientcreditweight)
- [warmupPremiumRecipientCreditWeight](SubscriptionDto.md#warmuppremiumrecipientcreditweight)
- [warmupPremiumSeedAccess](SubscriptionDto.md#warmuppremiumseedaccess)
- [webhooks](SubscriptionDto.md#webhooks)
- [zapier](SubscriptionDto.md#zapier)

## Properties

### agents

• `Optional` **agents**: `number`

Maximum active API or MCP agent connections. Null identifies a legacy unlimited subscription.

**`Memberof`**

SubscriptionDto

___

### aiDestinationSheets

• **aiDestinationSheets**: `boolean`

**`Memberof`**

SubscriptionDto

___

### aiTransformers

• **aiTransformers**: `boolean`

**`Memberof`**

SubscriptionDto

___

### aliases

• **aliases**: `number`

**`Memberof`**

SubscriptionDto

___

### attachmentAutomations

• **attachmentAutomations**: `boolean`

**`Memberof`**

SubscriptionDto

___

### attachments

• **attachments**: `boolean`

**`Memberof`**

SubscriptionDto

___

### auditLogs

• `Optional` **auditLogs**: `boolean`

**`Memberof`**

SubscriptionDto

___

### backup

• `Optional` **backup**: `boolean`

**`Memberof`**

SubscriptionDto

___

### bulk

• **bulk**: `boolean`

**`Memberof`**

SubscriptionDto

___

### campaignProbe

• `Optional` **campaignProbe**: `boolean`

**`Memberof`**

SubscriptionDto

___

### cancelAt

• `Optional` **cancelAt**: `Date`

**`Memberof`**

SubscriptionDto

___

### contacts

• **contacts**: `boolean`

**`Memberof`**

SubscriptionDto

___

### cost

• `Optional` **cost**: `number`

**`Memberof`**

SubscriptionDto

___

### costMajor

• `Optional` **costMajor**: `number`

Subscription cost in major currency units for analytics and conversion value reporting.

**`Memberof`**

SubscriptionDto

___

### createdAt

• **createdAt**: `Date`

**`Memberof`**

SubscriptionDto

___

### currency

• `Optional` **currency**: [`SubscriptionDtoCurrencyEnum`](../enums/SubscriptionDtoCurrencyEnum.md)

**`Memberof`**

SubscriptionDto

___

### currentPeriodEnd

• **currentPeriodEnd**: `Date`

**`Memberof`**

SubscriptionDto

___

### currentPeriodStart

• **currentPeriodStart**: `Date`

**`Memberof`**

SubscriptionDto

___

### customerId

• `Optional` **customerId**: `string`

**`Memberof`**

SubscriptionDto

___

### dailyReceive

• **dailyReceive**: `number`

**`Memberof`**

SubscriptionDto

___

### dailySend

• **dailySend**: `number`

**`Memberof`**

SubscriptionDto

___

### deliverabilityTest

• `Optional` **deliverabilityTest**: `boolean`

**`Memberof`**

SubscriptionDto

___

### demoDaysRemaining

• `Optional` **demoDaysRemaining**: `number`

**`Memberof`**

SubscriptionDto

___

### devicePreviews

• `Optional` **devicePreviews**: `boolean`

**`Memberof`**

SubscriptionDto

___

### domainMonitor

• `Optional` **domainMonitor**: `boolean`

**`Memberof`**

SubscriptionDto

___

### domains

• **domains**: `number`

**`Memberof`**

SubscriptionDto

___

### emailAudit

• `Optional` **emailAudit**: `boolean`

**`Memberof`**

SubscriptionDto

___

### emailFeatureCheck

• `Optional` **emailFeatureCheck**: `boolean`

**`Memberof`**

SubscriptionDto

___

### environments

• `Optional` **environments**: `boolean`

**`Memberof`**

SubscriptionDto

___

### externalPlanId

• `Optional` **externalPlanId**: `string`

**`Memberof`**

SubscriptionDto

___

### externalValidationPlanId

• `Optional` **externalValidationPlanId**: `string`

Use validation entity

**`Memberof`**

SubscriptionDto

___

### externalValidationSubscriptionItemId

• `Optional` **externalValidationSubscriptionItemId**: `string`

Use validation entity

**`Memberof`**

SubscriptionDto

___

### gmailInboxConnection

• **gmailInboxConnection**: `boolean`

**`Memberof`**

SubscriptionDto

___

### gmailInboxConnectionLimit

• **gmailInboxConnectionLimit**: `number`

**`Memberof`**

SubscriptionDto

___

### id

• `Optional` **id**: `string`

**`Memberof`**

SubscriptionDto

___

### importExport

• `Optional` **importExport**: `boolean`

**`Memberof`**

SubscriptionDto

___

### inboxForwarders

• **inboxForwarders**: `boolean`

**`Memberof`**

SubscriptionDto

___

### inboxRepliers

• **inboxRepliers**: `boolean`

**`Memberof`**

SubscriptionDto

___

### inboxRulesets

• **inboxRulesets**: `boolean`

**`Memberof`**

SubscriptionDto

___

### inboxWarmUp

• `Optional` **inboxWarmUp**: `boolean`

**`Memberof`**

SubscriptionDto

___

### includedMonthlyWarmupCreditsPerSender

• **includedMonthlyWarmupCreditsPerSender**: `number`

**`Memberof`**

SubscriptionDto

___

### includedWarmupSenderSeats

• **includedWarmupSenderSeats**: `number`

Warmup sender seats included by the base subscription before paid add-ons.

**`Memberof`**

SubscriptionDto

___

### isDecimalLess

• **isDecimalLess**: `boolean`

**`Memberof`**

SubscriptionDto

___

### loadTest

• `Optional` **loadTest**: `boolean`

**`Memberof`**

SubscriptionDto

___

### maxAutomatedInboxPlacementSchedules

• **maxAutomatedInboxPlacementSchedules**: `number`

Maximum non-deleted automated inbox placement schedules. Paused schedules count; deleted schedules release capacity.

**`Memberof`**

SubscriptionDto

___

### maxEmailSizeMb

• **maxEmailSizeMb**: `number`

**`Memberof`**

SubscriptionDto

___

### maxInboxPlacementSeedAddressesPerTest

• **maxInboxPlacementSeedAddressesPerTest**: `number`

Maximum seed inbox addresses assigned to one inbox placement test.

**`Memberof`**

SubscriptionDto

___

### maxUniqueRecipients

• **maxUniqueRecipients**: `number`

**`Memberof`**

SubscriptionDto

___

### members

• **members**: `number`

**`Memberof`**

SubscriptionDto

___

### metered

• **metered**: `boolean`

**`Memberof`**

SubscriptionDto

___

### monthlyGetMailServerRecords

• **monthlyGetMailServerRecords**: `number`

**`Memberof`**

SubscriptionDto

___

### monthlyInboxes

• **monthlyInboxes**: `number`

**`Memberof`**

SubscriptionDto

___

### monthlyReceive

• **monthlyReceive**: `number`

**`Memberof`**

SubscriptionDto

___

### monthlySend

• **monthlySend**: `number`

**`Memberof`**

SubscriptionDto

___

### monthlyTemporaryInboxes

• `Optional` **monthlyTemporaryInboxes**: `number`

**`Memberof`**

SubscriptionDto

___

### monthlyVerifyEmailAddress

• **monthlyVerifyEmailAddress**: `number`

**`Memberof`**

SubscriptionDto

___

### oauthConnections

• **oauthConnections**: `number`

**`Memberof`**

SubscriptionDto

___

### oidcSSO

• `Optional` **oidcSSO**: `boolean`

**`Memberof`**

SubscriptionDto

___

### organizations

• `Optional` **organizations**: `number`

**`Memberof`**

SubscriptionDto

___

### password

• **password**: `boolean`

**`Memberof`**

SubscriptionDto

___

### permanentInbox

• **permanentInbox**: `boolean`

**`Memberof`**

SubscriptionDto

___

### permitsExternalSend

• `Optional` **permitsExternalSend**: `boolean`

**`Memberof`**

SubscriptionDto

___

### phoneNumbers

• **phoneNumbers**: `number`

**`Memberof`**

SubscriptionDto

___

### phoneProvisionRequestLimit

• **phoneProvisionRequestLimit**: `number`

**`Memberof`**

SubscriptionDto

___

### recipients

• **recipients**: `number`

**`Memberof`**

SubscriptionDto

___

### samlSSO

• `Optional` **samlSSO**: `boolean`

**`Memberof`**

SubscriptionDto

___

### scimProvisioning

• `Optional` **scimProvisioning**: `boolean`

**`Memberof`**

SubscriptionDto

___

### screenshots

• `Optional` **screenshots**: `boolean`

**`Memberof`**

SubscriptionDto

___

### sendWithQueue

• `Optional` **sendWithQueue**: `boolean`

**`Memberof`**

SubscriptionDto

___

### storageBytes

• **storageBytes**: `number`

**`Memberof`**

SubscriptionDto

___

### subscriptionId

• `Optional` **subscriptionId**: `string`

**`Memberof`**

SubscriptionDto

___

### subscriptionSchedule

• **subscriptionSchedule**: [`SubscriptionDtoSubscriptionScheduleEnum`](../enums/SubscriptionDtoSubscriptionScheduleEnum.md)

**`Memberof`**

SubscriptionDto

___

### subscriptionStatus

• `Optional` **subscriptionStatus**: [`SubscriptionDtoSubscriptionStatusEnum`](../enums/SubscriptionDtoSubscriptionStatusEnum.md)

**`Memberof`**

SubscriptionDto

___

### subscriptionStatusIsBad

• **subscriptionStatusIsBad**: `boolean`

**`Memberof`**

SubscriptionDto

___

### subscriptionType

• **subscriptionType**: [`SubscriptionDtoSubscriptionTypeEnum`](../enums/SubscriptionDtoSubscriptionTypeEnum.md)

**`Memberof`**

SubscriptionDto

___

### threads

• **threads**: `number`

**`Memberof`**

SubscriptionDto

___

### totalInboxes

• **totalInboxes**: `number`

**`Memberof`**

SubscriptionDto

___

### totalPermanentInboxes

• `Optional` **totalPermanentInboxes**: `number`

**`Memberof`**

SubscriptionDto

___

### trackingPixels

• **trackingPixels**: `boolean`

**`Memberof`**

SubscriptionDto

___

### trialAdjustedAt

• `Optional` **trialAdjustedAt**: `Date`

**`Memberof`**

SubscriptionDto

___

### trialAdjustmentReason

• `Optional` **trialAdjustmentReason**: `string`

**`Memberof`**

SubscriptionDto

___

### trialDays

• `Optional` **trialDays**: `number`

**`Memberof`**

SubscriptionDto

___

### trialEnd

• `Optional` **trialEnd**: `Date`

**`Memberof`**

SubscriptionDto

___

### trialStart

• `Optional` **trialStart**: `Date`

**`Memberof`**

SubscriptionDto

___

### updatedAt

• **updatedAt**: `Date`

**`Memberof`**

SubscriptionDto

___

### userId

• **userId**: `string`

**`Memberof`**

SubscriptionDto

___

### userPermissions

• `Optional` **userPermissions**: `boolean`

**`Memberof`**

SubscriptionDto

___

### virtualTotpDevices

• `Optional` **virtualTotpDevices**: `boolean`

**`Memberof`**

SubscriptionDto

___

### warmupControlledRecipientCreditWeight

• **warmupControlledRecipientCreditWeight**: `number`

**`Memberof`**

SubscriptionDto

___

### warmupPremiumRecipientCreditWeight

• **warmupPremiumRecipientCreditWeight**: `number`

**`Memberof`**

SubscriptionDto

___

### warmupPremiumSeedAccess

• `Optional` **warmupPremiumSeedAccess**: `boolean`

**`Memberof`**

SubscriptionDto

___

### webhooks

• **webhooks**: `boolean`

**`Memberof`**

SubscriptionDto

___

### zapier

• **zapier**: `boolean`

**`Memberof`**

SubscriptionDto

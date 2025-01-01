"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./AbstractWebhookPayload"), exports);
__exportStar(require("./AccountBounceBlockDto"), exports);
__exportStar(require("./AliasDto"), exports);
__exportStar(require("./AliasProjection"), exports);
__exportStar(require("./AliasThreadProjection"), exports);
__exportStar(require("./AttachmentEntityDto"), exports);
__exportStar(require("./AttachmentMetaData"), exports);
__exportStar(require("./AttachmentProjection"), exports);
__exportStar(require("./BasicAuthOptions"), exports);
__exportStar(require("./BounceProjection"), exports);
__exportStar(require("./BounceRecipientProjection"), exports);
__exportStar(require("./BouncedEmailDto"), exports);
__exportStar(require("./BouncedRecipientDto"), exports);
__exportStar(require("./BulkSendEmailOptions"), exports);
__exportStar(require("./CanSendEmailResults"), exports);
__exportStar(require("./CheckEmailBodyFeatureSupportResults"), exports);
__exportStar(require("./CheckEmailBodyResults"), exports);
__exportStar(require("./CheckEmailClientSupportOptions"), exports);
__exportStar(require("./CheckEmailClientSupportResults"), exports);
__exportStar(require("./CheckEmailFeaturesClientSupportOptions"), exports);
__exportStar(require("./CheckEmailFeaturesClientSupportResults"), exports);
__exportStar(require("./Complaint"), exports);
__exportStar(require("./ConditionOption"), exports);
__exportStar(require("./ConnectorDto"), exports);
__exportStar(require("./ConnectorEventDto"), exports);
__exportStar(require("./ConnectorEventProjection"), exports);
__exportStar(require("./ConnectorImapConnectionDto"), exports);
__exportStar(require("./ConnectorImapConnectionTestResult"), exports);
__exportStar(require("./ConnectorProjection"), exports);
__exportStar(require("./ConnectorProviderSettingsDto"), exports);
__exportStar(require("./ConnectorSmtpConnectionDto"), exports);
__exportStar(require("./ConnectorSmtpConnectionTestResult"), exports);
__exportStar(require("./ConnectorSyncRequestResult"), exports);
__exportStar(require("./ConnectorSyncResult"), exports);
__exportStar(require("./ConnectorSyncSettingsDto"), exports);
__exportStar(require("./ContactDto"), exports);
__exportStar(require("./ContactProjection"), exports);
__exportStar(require("./ContentMatchOptions"), exports);
__exportStar(require("./CountDto"), exports);
__exportStar(require("./CreateAliasOptions"), exports);
__exportStar(require("./CreateConnectorImapConnectionOptions"), exports);
__exportStar(require("./CreateConnectorOptions"), exports);
__exportStar(require("./CreateConnectorSmtpConnectionOptions"), exports);
__exportStar(require("./CreateConnectorSyncSettingsOptions"), exports);
__exportStar(require("./CreateConnectorWithOptions"), exports);
__exportStar(require("./CreateContactOptions"), exports);
__exportStar(require("./CreateDomainOptions"), exports);
__exportStar(require("./CreateEmergencyAddressOptions"), exports);
__exportStar(require("./CreateGroupOptions"), exports);
__exportStar(require("./CreateInboxDto"), exports);
__exportStar(require("./CreateInboxForwarderOptions"), exports);
__exportStar(require("./CreateInboxReplierOptions"), exports);
__exportStar(require("./CreateInboxRulesetOptions"), exports);
__exportStar(require("./CreatePortalOptions"), exports);
__exportStar(require("./CreatePortalUserOptions"), exports);
__exportStar(require("./CreateTemplateOptions"), exports);
__exportStar(require("./CreateTrackingPixelOptions"), exports);
__exportStar(require("./CreateWebhookOptions"), exports);
__exportStar(require("./DNSLookupOptions"), exports);
__exportStar(require("./DNSLookupResult"), exports);
__exportStar(require("./DNSLookupResults"), exports);
__exportStar(require("./DNSLookupsOptions"), exports);
__exportStar(require("./DeliveryStatusDto"), exports);
__exportStar(require("./DescribeDomainOptions"), exports);
__exportStar(require("./DescribeMailServerDomainResult"), exports);
__exportStar(require("./DomainDto"), exports);
__exportStar(require("./DomainGroup"), exports);
__exportStar(require("./DomainGroupsDto"), exports);
__exportStar(require("./DomainInformation"), exports);
__exportStar(require("./DomainIssuesDto"), exports);
__exportStar(require("./DomainNameRecord"), exports);
__exportStar(require("./DomainPreview"), exports);
__exportStar(require("./DownloadAttachmentDto"), exports);
__exportStar(require("./Email"), exports);
__exportStar(require("./EmailAnalysis"), exports);
__exportStar(require("./EmailAvailableResult"), exports);
__exportStar(require("./EmailContentMatchResult"), exports);
__exportStar(require("./EmailContentPartResult"), exports);
__exportStar(require("./EmailFeatureCategoryName"), exports);
__exportStar(require("./EmailFeatureFamilyName"), exports);
__exportStar(require("./EmailFeatureFamilyStatistics"), exports);
__exportStar(require("./EmailFeatureNames"), exports);
__exportStar(require("./EmailFeatureOverview"), exports);
__exportStar(require("./EmailFeaturePlatformName"), exports);
__exportStar(require("./EmailFeaturePlatformStatistics"), exports);
__exportStar(require("./EmailFeatureSupportFlags"), exports);
__exportStar(require("./EmailFeatureSupportResult"), exports);
__exportStar(require("./EmailFeatureSupportStatusPercentage"), exports);
__exportStar(require("./EmailFeatureVersionStatistics"), exports);
__exportStar(require("./EmailHtmlDto"), exports);
__exportStar(require("./EmailLinksResult"), exports);
__exportStar(require("./EmailPreview"), exports);
__exportStar(require("./EmailPreviewUrls"), exports);
__exportStar(require("./EmailProjection"), exports);
__exportStar(require("./EmailRecipients"), exports);
__exportStar(require("./EmailRecipientsProjection"), exports);
__exportStar(require("./EmailScreenshotResult"), exports);
__exportStar(require("./EmailTextLinesResult"), exports);
__exportStar(require("./EmailThreadDto"), exports);
__exportStar(require("./EmailThreadItem"), exports);
__exportStar(require("./EmailThreadItemsDto"), exports);
__exportStar(require("./EmailThreadProjection"), exports);
__exportStar(require("./EmailValidationRequestDto"), exports);
__exportStar(require("./EmailVerificationResult"), exports);
__exportStar(require("./EmergencyAddress"), exports);
__exportStar(require("./EmergencyAddressDto"), exports);
__exportStar(require("./EmptyResponseDto"), exports);
__exportStar(require("./ExpirationDefaults"), exports);
__exportStar(require("./ExpiredInboxDto"), exports);
__exportStar(require("./ExpiredInboxRecordProjection"), exports);
__exportStar(require("./ExportLink"), exports);
__exportStar(require("./ExportOptions"), exports);
__exportStar(require("./FakeEmailDto"), exports);
__exportStar(require("./FakeEmailPreview"), exports);
__exportStar(require("./FakeEmailResult"), exports);
__exportStar(require("./FilterBouncedRecipientsOptions"), exports);
__exportStar(require("./FilterBouncedRecipientsResult"), exports);
__exportStar(require("./FlushExpiredInboxesResult"), exports);
__exportStar(require("./ForwardEmailOptions"), exports);
__exportStar(require("./GenerateBimiRecordOptions"), exports);
__exportStar(require("./GenerateBimiRecordResults"), exports);
__exportStar(require("./GenerateDmarcRecordOptions"), exports);
__exportStar(require("./GenerateDmarcRecordResults"), exports);
__exportStar(require("./GenerateMtaStsRecordOptions"), exports);
__exportStar(require("./GenerateMtaStsRecordResults"), exports);
__exportStar(require("./GenerateTlsReportingRecordOptions"), exports);
__exportStar(require("./GenerateTlsReportingRecordResults"), exports);
__exportStar(require("./GetEmailScreenshotOptions"), exports);
__exportStar(require("./GravatarUrl"), exports);
__exportStar(require("./GroupContactsDto"), exports);
__exportStar(require("./GroupDto"), exports);
__exportStar(require("./GroupProjection"), exports);
__exportStar(require("./GuestPortalDto"), exports);
__exportStar(require("./GuestPortalUserCreateDto"), exports);
__exportStar(require("./GuestPortalUserDto"), exports);
__exportStar(require("./GuestPortalUserProjection"), exports);
__exportStar(require("./HTMLValidationResult"), exports);
__exportStar(require("./IPAddressResult"), exports);
__exportStar(require("./ImageIssue"), exports);
__exportStar(require("./ImapAccessDetails"), exports);
__exportStar(require("./ImapEmailProjection"), exports);
__exportStar(require("./ImapFlagOperationOptions"), exports);
__exportStar(require("./ImapMailboxStatus"), exports);
__exportStar(require("./ImapServerFetchItem"), exports);
__exportStar(require("./ImapServerFetchResult"), exports);
__exportStar(require("./ImapServerGetResult"), exports);
__exportStar(require("./ImapServerListOptions"), exports);
__exportStar(require("./ImapServerListResult"), exports);
__exportStar(require("./ImapServerMailboxResult"), exports);
__exportStar(require("./ImapServerSearchOptions"), exports);
__exportStar(require("./ImapServerSearchResult"), exports);
__exportStar(require("./ImapServerStatusOptions"), exports);
__exportStar(require("./ImapServerStatusResult"), exports);
__exportStar(require("./ImapSmtpAccessDetails"), exports);
__exportStar(require("./ImapSmtpAccessServers"), exports);
__exportStar(require("./ImapUpdateFlagsOptions"), exports);
__exportStar(require("./InboxByEmailAddressResult"), exports);
__exportStar(require("./InboxByNameResult"), exports);
__exportStar(require("./InboxDto"), exports);
__exportStar(require("./InboxExistsDto"), exports);
__exportStar(require("./InboxForwarderDto"), exports);
__exportStar(require("./InboxForwarderEventDto"), exports);
__exportStar(require("./InboxForwarderEventProjection"), exports);
__exportStar(require("./InboxForwarderTestOptions"), exports);
__exportStar(require("./InboxForwarderTestResult"), exports);
__exportStar(require("./InboxIdItem"), exports);
__exportStar(require("./InboxIdsResult"), exports);
__exportStar(require("./InboxPreview"), exports);
__exportStar(require("./InboxReplierDto"), exports);
__exportStar(require("./InboxReplierEventProjection"), exports);
__exportStar(require("./InboxRulesetDto"), exports);
__exportStar(require("./InboxRulesetTestOptions"), exports);
__exportStar(require("./InboxRulesetTestResult"), exports);
__exportStar(require("./InlineObject"), exports);
__exportStar(require("./JSONSchemaDto"), exports);
__exportStar(require("./LinkIssue"), exports);
__exportStar(require("./ListUnsubscribeRecipientProjection"), exports);
__exportStar(require("./LookupBimiDomainOptions"), exports);
__exportStar(require("./LookupBimiDomainResults"), exports);
__exportStar(require("./LookupDmarcDomainOptions"), exports);
__exportStar(require("./LookupDmarcDomainResults"), exports);
__exportStar(require("./LookupMtaStsDomainOptions"), exports);
__exportStar(require("./LookupMtaStsDomainResults"), exports);
__exportStar(require("./LookupTlsReportingDomainOptions"), exports);
__exportStar(require("./LookupTlsReportingDomainResults"), exports);
__exportStar(require("./MatchOption"), exports);
__exportStar(require("./MatchOptions"), exports);
__exportStar(require("./MissedEmailDto"), exports);
__exportStar(require("./MissedEmailProjection"), exports);
__exportStar(require("./NameServerRecord"), exports);
__exportStar(require("./NewFakeEmailAddressResult"), exports);
__exportStar(require("./OptionalConnectorDto"), exports);
__exportStar(require("./OptionalConnectorImapConnectionDto"), exports);
__exportStar(require("./OptionalConnectorSmtpConnectionDto"), exports);
__exportStar(require("./OptionalConnectorSyncSettingsDto"), exports);
__exportStar(require("./OrganizationInboxProjection"), exports);
__exportStar(require("./PageAlias"), exports);
__exportStar(require("./PageAliasThreadProjection"), exports);
__exportStar(require("./PageAttachmentEntity"), exports);
__exportStar(require("./PageBouncedEmail"), exports);
__exportStar(require("./PageBouncedRecipients"), exports);
__exportStar(require("./PageComplaint"), exports);
__exportStar(require("./PageConnector"), exports);
__exportStar(require("./PageConnectorEvents"), exports);
__exportStar(require("./PageContactProjection"), exports);
__exportStar(require("./PageDeliveryStatus"), exports);
__exportStar(require("./PageEmailPreview"), exports);
__exportStar(require("./PageEmailProjection"), exports);
__exportStar(require("./PageEmailThreadProjection"), exports);
__exportStar(require("./PageEmailValidationRequest"), exports);
__exportStar(require("./PageExpiredInboxRecordProjection"), exports);
__exportStar(require("./PageGroupProjection"), exports);
__exportStar(require("./PageGuestPortalUsers"), exports);
__exportStar(require("./PageInboxForwarderDto"), exports);
__exportStar(require("./PageInboxForwarderEvents"), exports);
__exportStar(require("./PageInboxProjection"), exports);
__exportStar(require("./PageInboxReplierDto"), exports);
__exportStar(require("./PageInboxReplierEvents"), exports);
__exportStar(require("./PageInboxRulesetDto"), exports);
__exportStar(require("./PageInboxTags"), exports);
__exportStar(require("./PageListUnsubscribeRecipients"), exports);
__exportStar(require("./PageMissedEmailProjection"), exports);
__exportStar(require("./PageOrganizationInboxProjection"), exports);
__exportStar(require("./PagePhoneNumberProjection"), exports);
__exportStar(require("./PagePlusAddressProjection"), exports);
__exportStar(require("./PageScheduledJobs"), exports);
__exportStar(require("./PageSentEmailProjection"), exports);
__exportStar(require("./PageSentEmailWithQueueProjection"), exports);
__exportStar(require("./PageSmsProjection"), exports);
__exportStar(require("./PageTemplateProjection"), exports);
__exportStar(require("./PageTrackingPixelProjection"), exports);
__exportStar(require("./PageUnknownMissedEmailProjection"), exports);
__exportStar(require("./PageWebhookEndpointProjection"), exports);
__exportStar(require("./PageWebhookProjection"), exports);
__exportStar(require("./PageWebhookResult"), exports);
__exportStar(require("./PageableObject"), exports);
__exportStar(require("./PhoneNumberDto"), exports);
__exportStar(require("./PhoneNumberProjection"), exports);
__exportStar(require("./PhonePlanAvailability"), exports);
__exportStar(require("./PhonePlanAvailabilityItem"), exports);
__exportStar(require("./PhonePlanDto"), exports);
__exportStar(require("./PlusAddressDto"), exports);
__exportStar(require("./PlusAddressProjection"), exports);
__exportStar(require("./ProviderSettings"), exports);
__exportStar(require("./RawEmailJson"), exports);
__exportStar(require("./Recipient"), exports);
__exportStar(require("./RecipientProjection"), exports);
__exportStar(require("./ReplyForSms"), exports);
__exportStar(require("./ReplyToAliasEmailOptions"), exports);
__exportStar(require("./ReplyToEmailOptions"), exports);
__exportStar(require("./ScheduledJob"), exports);
__exportStar(require("./ScheduledJobDto"), exports);
__exportStar(require("./SearchEmailsOptions"), exports);
__exportStar(require("./SearchInboxesOptions"), exports);
__exportStar(require("./SendEmailBodyPart"), exports);
__exportStar(require("./SendEmailOptions"), exports);
__exportStar(require("./SendSMTPEnvelopeOptions"), exports);
__exportStar(require("./SendWithQueueResult"), exports);
__exportStar(require("./Sender"), exports);
__exportStar(require("./SenderProjection"), exports);
__exportStar(require("./SentEmailDto"), exports);
__exportStar(require("./SentEmailProjection"), exports);
__exportStar(require("./SentSmsDto"), exports);
__exportStar(require("./ServerEndpoints"), exports);
__exportStar(require("./SetInboxFavouritedOptions"), exports);
__exportStar(require("./SetPhoneFavouritedOptions"), exports);
__exportStar(require("./SimpleSendEmailOptions"), exports);
__exportStar(require("./SmsDto"), exports);
__exportStar(require("./SmsMatchOption"), exports);
__exportStar(require("./SmsPreview"), exports);
__exportStar(require("./SmsProjection"), exports);
__exportStar(require("./SmsReplyOptions"), exports);
__exportStar(require("./SmtpAccessDetails"), exports);
__exportStar(require("./SortObject"), exports);
__exportStar(require("./SpellingIssue"), exports);
__exportStar(require("./TemplateDto"), exports);
__exportStar(require("./TemplatePreview"), exports);
__exportStar(require("./TemplateProjection"), exports);
__exportStar(require("./TemplateVariable"), exports);
__exportStar(require("./TestInboxRulesetReceivingOptions"), exports);
__exportStar(require("./TestInboxRulesetReceivingResult"), exports);
__exportStar(require("./TestInboxRulesetSendingOptions"), exports);
__exportStar(require("./TestInboxRulesetSendingResult"), exports);
__exportStar(require("./TestNewInboxForwarderOptions"), exports);
__exportStar(require("./TestNewInboxRulesetOptions"), exports);
__exportStar(require("./TestPhoneNumberOptions"), exports);
__exportStar(require("./TrackingPixelDto"), exports);
__exportStar(require("./TrackingPixelProjection"), exports);
__exportStar(require("./UnknownMissedEmailProjection"), exports);
__exportStar(require("./UnreadCount"), exports);
__exportStar(require("./UnseenErrorCountDto"), exports);
__exportStar(require("./UpdateAliasOptions"), exports);
__exportStar(require("./UpdateDomainOptions"), exports);
__exportStar(require("./UpdateGroupContacts"), exports);
__exportStar(require("./UpdateImapAccessOptions"), exports);
__exportStar(require("./UpdateInboxOptions"), exports);
__exportStar(require("./UpdateInboxReplierOptions"), exports);
__exportStar(require("./UpdatePhoneNumberOptions"), exports);
__exportStar(require("./UpdateSmtpAccessOptions"), exports);
__exportStar(require("./UploadAttachmentOptions"), exports);
__exportStar(require("./UserInfoDto"), exports);
__exportStar(require("./ValidateEmailAddressListOptions"), exports);
__exportStar(require("./ValidateEmailAddressListResult"), exports);
__exportStar(require("./ValidationDto"), exports);
__exportStar(require("./ValidationMessage"), exports);
__exportStar(require("./VerifyEmailAddressOptions"), exports);
__exportStar(require("./VerifyWebhookSignatureOptions"), exports);
__exportStar(require("./VerifyWebhookSignatureResults"), exports);
__exportStar(require("./WaitForConditions"), exports);
__exportStar(require("./WaitForSingleSmsOptions"), exports);
__exportStar(require("./WaitForSmsConditions"), exports);
__exportStar(require("./WebhookBouncePayload"), exports);
__exportStar(require("./WebhookBounceRecipientPayload"), exports);
__exportStar(require("./WebhookDeliveryStatusPayload"), exports);
__exportStar(require("./WebhookDto"), exports);
__exportStar(require("./WebhookEmailOpenedPayload"), exports);
__exportStar(require("./WebhookEmailReadPayload"), exports);
__exportStar(require("./WebhookEndpointProjection"), exports);
__exportStar(require("./WebhookHeaderNameValue"), exports);
__exportStar(require("./WebhookHeaders"), exports);
__exportStar(require("./WebhookNewAttachmentPayload"), exports);
__exportStar(require("./WebhookNewContactPayload"), exports);
__exportStar(require("./WebhookNewEmailPayload"), exports);
__exportStar(require("./WebhookNewSmsPayload"), exports);
__exportStar(require("./WebhookProjection"), exports);
__exportStar(require("./WebhookRedriveAllResult"), exports);
__exportStar(require("./WebhookRedriveResult"), exports);
__exportStar(require("./WebhookResultDto"), exports);
__exportStar(require("./WebhookTestRequest"), exports);
__exportStar(require("./WebhookTestResponse"), exports);
__exportStar(require("./WebhookTestResult"), exports);

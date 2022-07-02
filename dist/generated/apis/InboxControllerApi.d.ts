/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { CountDto, CreateInboxDto, CreateInboxRulesetOptions, Email, EmailPreview, FlushExpiredInboxesResult, ImapSmtpAccessDetails, InboxByEmailAddressResult, InboxByNameResult, InboxDto, InboxExistsDto, InboxIdsResult, InboxRulesetDto, PageEmailPreview, PageInboxProjection, PageInboxRulesetDto, PageOrganizationInboxProjection, PageSentEmailProjection, PageTrackingPixelProjection, SendEmailOptions, SendSMTPEnvelopeOptions, SentEmailDto, SetInboxFavouritedOptions, UpdateInboxOptions } from '../models';
export interface CreateInboxRequest {
    emailAddress?: string;
    tags?: Array<string>;
    name?: string;
    description?: string;
    useDomainPool?: boolean;
    favourite?: boolean;
    expiresAt?: Date;
    expiresIn?: number;
    allowTeamAccess?: boolean;
    inboxType?: CreateInboxInboxTypeEnum;
    virtualInbox?: boolean;
}
export interface CreateInboxRulesetRequest {
    inboxId: string;
    createInboxRulesetOptions: CreateInboxRulesetOptions;
}
export interface CreateInboxWithOptionsRequest {
    createInboxDto: CreateInboxDto;
}
export interface DeleteAllInboxEmailsRequest {
    inboxId: string;
}
export interface DeleteInboxRequest {
    inboxId: string;
}
export interface DoesInboxExistRequest {
    emailAddress: string;
}
export interface FlushExpiredRequest {
    before?: Date;
}
export interface GetAllInboxesRequest {
    page?: number;
    size?: number;
    sort?: GetAllInboxesSortEnum;
    favourite?: boolean;
    search?: string;
    tag?: string;
    teamAccess?: boolean;
    since?: Date;
    before?: Date;
}
export interface GetEmailsRequest {
    inboxId: string;
    size?: number;
    limit?: number;
    sort?: GetEmailsSortEnum;
    retryTimeout?: number;
    delayTimeout?: number;
    minCount?: number;
    unreadOnly?: boolean;
    before?: Date;
    since?: Date;
}
export interface GetImapSmtpAccessRequest {
    inboxId?: string;
}
export interface GetInboxRequest {
    inboxId: string;
}
export interface GetInboxByEmailAddressRequest {
    emailAddress: string;
}
export interface GetInboxByNameRequest {
    name: string;
}
export interface GetInboxEmailCountRequest {
    inboxId: string;
}
export interface GetInboxEmailsPaginatedRequest {
    inboxId: string;
    page?: number;
    size?: number;
    sort?: GetInboxEmailsPaginatedSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetInboxSentEmailsRequest {
    inboxId: string;
    page?: number;
    size?: number;
    sort?: GetInboxSentEmailsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface GetInboxesRequest {
    size?: number;
    sort?: GetInboxesSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetLatestEmailInInboxRequest {
    inboxId: string;
    timeoutMillis: number;
}
export interface GetOrganizationInboxesRequest {
    page?: number;
    size?: number;
    sort?: GetOrganizationInboxesSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface ListInboxRulesetsRequest {
    inboxId: string;
    page?: number;
    size?: number;
    sort?: ListInboxRulesetsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface ListInboxTrackingPixelsRequest {
    inboxId: string;
    page?: number;
    size?: number;
    sort?: ListInboxTrackingPixelsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface SendEmailRequest {
    inboxId: string;
    sendEmailOptions: SendEmailOptions;
}
export interface SendEmailAndConfirmRequest {
    inboxId: string;
    sendEmailOptions: SendEmailOptions;
}
export interface SendEmailWithQueueRequest {
    inboxId: string;
    validateBeforeEnqueue: boolean;
    sendEmailOptions: SendEmailOptions;
}
export interface SendSmtpEnvelopeRequest {
    inboxId: string;
    sendSMTPEnvelopeOptions: SendSMTPEnvelopeOptions;
}
export interface SendTestEmailRequest {
    inboxId: string;
}
export interface SetInboxFavouritedRequest {
    inboxId: string;
    setInboxFavouritedOptions: SetInboxFavouritedOptions;
}
export interface UpdateInboxRequest {
    inboxId: string;
    updateInboxOptions: UpdateInboxOptions;
}
/**
 *
 */
export declare class InboxControllerApi extends runtime.BaseAPI {
    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     */
    createInboxRaw(requestParameters: CreateInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxDto>>;
    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     */
    createInbox(requestParameters: CreateInboxRequest, initOverrides?: RequestInit): Promise<InboxDto>;
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     */
    createInboxRulesetRaw(requestParameters: CreateInboxRulesetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxRulesetDto>>;
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     */
    createInboxRuleset(requestParameters: CreateInboxRulesetRequest, initOverrides?: RequestInit): Promise<InboxRulesetDto>;
    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     */
    createInboxWithDefaultsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxDto>>;
    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     */
    createInboxWithDefaults(initOverrides?: RequestInit): Promise<InboxDto>;
    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     */
    createInboxWithOptionsRaw(requestParameters: CreateInboxWithOptionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxDto>>;
    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     */
    createInboxWithOptions(requestParameters: CreateInboxWithOptionsRequest, initOverrides?: RequestInit): Promise<InboxDto>;
    /**
     * Deletes all emails in an inbox. Be careful as emails cannot be recovered
     * Delete all emails in a given inboxes.
     */
    deleteAllInboxEmailsRaw(requestParameters: DeleteAllInboxEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes all emails in an inbox. Be careful as emails cannot be recovered
     * Delete all emails in a given inboxes.
     */
    deleteAllInboxEmails(requestParameters: DeleteAllInboxEmailsRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     */
    deleteAllInboxesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     */
    deleteAllInboxes(initOverrides?: RequestInit): Promise<void>;
    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     */
    deleteInboxRaw(requestParameters: DeleteInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     */
    deleteInbox(requestParameters: DeleteInboxRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
     * Does inbox exist
     */
    doesInboxExistRaw(requestParameters: DoesInboxExistRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxExistsDto>>;
    /**
     * Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
     * Does inbox exist
     */
    doesInboxExist(requestParameters: DoesInboxExistRequest, initOverrides?: RequestInit): Promise<InboxExistsDto>;
    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     */
    flushExpiredRaw(requestParameters: FlushExpiredRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FlushExpiredInboxesResult>>;
    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     */
    flushExpired(requestParameters: FlushExpiredRequest, initOverrides?: RequestInit): Promise<FlushExpiredInboxesResult>;
    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Paginated
     */
    getAllInboxesRaw(requestParameters: GetAllInboxesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageInboxProjection>>;
    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Paginated
     */
    getAllInboxes(requestParameters: GetAllInboxesRequest, initOverrides?: RequestInit): Promise<PageInboxProjection>;
    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     */
    getEmailsRaw(requestParameters: GetEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<EmailPreview>>>;
    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     */
    getEmails(requestParameters: GetEmailsRequest, initOverrides?: RequestInit): Promise<Array<EmailPreview>>;
    /**
     * Get IMAP and SMTP access usernames and passwords
     */
    getImapSmtpAccessRaw(requestParameters: GetImapSmtpAccessRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImapSmtpAccessDetails>>;
    /**
     * Get IMAP and SMTP access usernames and passwords
     */
    getImapSmtpAccess(requestParameters: GetImapSmtpAccessRequest, initOverrides?: RequestInit): Promise<ImapSmtpAccessDetails>;
    /**
     * Returns an inbox\'s properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     */
    getInboxRaw(requestParameters: GetInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxDto>>;
    /**
     * Returns an inbox\'s properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     */
    getInbox(requestParameters: GetInboxRequest, initOverrides?: RequestInit): Promise<InboxDto>;
    /**
     * Get a inbox result by email address
     * Search for an inbox with the provided email address
     */
    getInboxByEmailAddressRaw(requestParameters: GetInboxByEmailAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxByEmailAddressResult>>;
    /**
     * Get a inbox result by email address
     * Search for an inbox with the provided email address
     */
    getInboxByEmailAddress(requestParameters: GetInboxByEmailAddressRequest, initOverrides?: RequestInit): Promise<InboxByEmailAddressResult>;
    /**
     * Get a inbox result by name
     * Search for an inbox with the given name
     */
    getInboxByNameRaw(requestParameters: GetInboxByNameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxByNameResult>>;
    /**
     * Get a inbox result by name
     * Search for an inbox with the given name
     */
    getInboxByName(requestParameters: GetInboxByNameRequest, initOverrides?: RequestInit): Promise<InboxByNameResult>;
    /**
     * Get total inbox count
     */
    getInboxCountRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<CountDto>>;
    /**
     * Get total inbox count
     */
    getInboxCount(initOverrides?: RequestInit): Promise<CountDto>;
    /**
     * Get email count in inbox
     */
    getInboxEmailCountRaw(requestParameters: GetInboxEmailCountRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CountDto>>;
    /**
     * Get email count in inbox
     */
    getInboxEmailCount(requestParameters: GetInboxEmailCountRequest, initOverrides?: RequestInit): Promise<CountDto>;
    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     */
    getInboxEmailsPaginatedRaw(requestParameters: GetInboxEmailsPaginatedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageEmailPreview>>;
    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     */
    getInboxEmailsPaginated(requestParameters: GetInboxEmailsPaginatedRequest, initOverrides?: RequestInit): Promise<PageEmailPreview>;
    /**
     * Get list of inbox IDs
     * Get all inbox IDs
     */
    getInboxIdsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxIdsResult>>;
    /**
     * Get list of inbox IDs
     * Get all inbox IDs
     */
    getInboxIds(initOverrides?: RequestInit): Promise<InboxIdsResult>;
    /**
     * Returns an inbox\'s sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     */
    getInboxSentEmailsRaw(requestParameters: GetInboxSentEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageSentEmailProjection>>;
    /**
     * Returns an inbox\'s sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     */
    getInboxSentEmails(requestParameters: GetInboxSentEmailsRequest, initOverrides?: RequestInit): Promise<PageSentEmailProjection>;
    /**
     * Get all inbox tags
     * Get inbox tags
     */
    getInboxTagsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>>;
    /**
     * Get all inbox tags
     * Get inbox tags
     */
    getInboxTags(initOverrides?: RequestInit): Promise<Array<string>>;
    /**
     * List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     */
    getInboxesRaw(requestParameters: GetInboxesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<InboxDto>>>;
    /**
     * List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     */
    getInboxes(requestParameters: GetInboxesRequest, initOverrides?: RequestInit): Promise<Array<InboxDto>>;
    /**
     * Get the newest email in an inbox or wait for one to arrive
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     */
    getLatestEmailInInboxRaw(requestParameters: GetLatestEmailInInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Email>>;
    /**
     * Get the newest email in an inbox or wait for one to arrive
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     */
    getLatestEmailInInbox(requestParameters: GetLatestEmailInInboxRequest, initOverrides?: RequestInit): Promise<Email>;
    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time).
     * List Organization Inboxes Paginated
     */
    getOrganizationInboxesRaw(requestParameters: GetOrganizationInboxesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageOrganizationInboxProjection>>;
    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time).
     * List Organization Inboxes Paginated
     */
    getOrganizationInboxes(requestParameters: GetOrganizationInboxesRequest, initOverrides?: RequestInit): Promise<PageOrganizationInboxProjection>;
    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     */
    listInboxRulesetsRaw(requestParameters: ListInboxRulesetsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageInboxRulesetDto>>;
    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     */
    listInboxRulesets(requestParameters: ListInboxRulesetsRequest, initOverrides?: RequestInit): Promise<PageInboxRulesetDto>;
    /**
     * List all tracking pixels sent from an inbox
     * List inbox tracking pixels
     */
    listInboxTrackingPixelsRaw(requestParameters: ListInboxTrackingPixelsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageTrackingPixelProjection>>;
    /**
     * List all tracking pixels sent from an inbox
     * List inbox tracking pixels
     */
    listInboxTrackingPixels(requestParameters: ListInboxTrackingPixelsRequest, initOverrides?: RequestInit): Promise<PageTrackingPixelProjection>;
    /**
     * Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     */
    sendEmailRaw(requestParameters: SendEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     */
    sendEmail(requestParameters: SendEmailRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     */
    sendEmailAndConfirmRaw(requestParameters: SendEmailAndConfirmRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentEmailDto>>;
    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     */
    sendEmailAndConfirm(requestParameters: SendEmailAndConfirmRequest, initOverrides?: RequestInit): Promise<SentEmailDto>;
    /**
     * Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
     * Send email with queue
     */
    sendEmailWithQueueRaw(requestParameters: SendEmailWithQueueRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
     * Send email with queue
     */
    sendEmailWithQueue(requestParameters: SendEmailWithQueueRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
     * Send email using an SMTP mail envelope and message body and return sent confirmation
     */
    sendSmtpEnvelopeRaw(requestParameters: SendSmtpEnvelopeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentEmailDto>>;
    /**
     * Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
     * Send email using an SMTP mail envelope and message body and return sent confirmation
     */
    sendSmtpEnvelope(requestParameters: SendSmtpEnvelopeRequest, initOverrides?: RequestInit): Promise<SentEmailDto>;
    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     */
    sendTestEmailRaw(requestParameters: SendTestEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     */
    sendTestEmail(requestParameters: SendTestEmailRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     */
    setInboxFavouritedRaw(requestParameters: SetInboxFavouritedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxDto>>;
    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     */
    setInboxFavourited(requestParameters: SetInboxFavouritedRequest, initOverrides?: RequestInit): Promise<InboxDto>;
    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     */
    updateInboxRaw(requestParameters: UpdateInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxDto>>;
    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     */
    updateInbox(requestParameters: UpdateInboxRequest, initOverrides?: RequestInit): Promise<InboxDto>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum CreateInboxInboxTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_INBOX = "SMTP_INBOX"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAllInboxesSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetEmailsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetInboxEmailsPaginatedSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetInboxSentEmailsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetInboxesSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetOrganizationInboxesSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum ListInboxRulesetsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum ListInboxTrackingPixelsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

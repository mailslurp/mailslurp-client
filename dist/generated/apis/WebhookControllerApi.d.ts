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
import { AbstractWebhookPayload, CreateWebhookOptions, JSONSchemaDto, PageWebhookProjection, PageWebhookResult, UnseenErrorCountDto, VerifyWebhookSignatureOptions, VerifyWebhookSignatureResults, WebhookBouncePayload, WebhookBounceRecipientPayload, WebhookDto, WebhookEmailOpenedPayload, WebhookEmailReadPayload, WebhookHeaders, WebhookNewAttachmentPayload, WebhookNewContactPayload, WebhookNewEmailPayload, WebhookRedriveResult, WebhookResultDto, WebhookTestResult } from '../models';
export interface CreateAccountWebhookRequest {
    createWebhookOptions: CreateWebhookOptions;
}
export interface CreateWebhookRequest {
    inboxId: string;
    createWebhookOptions: CreateWebhookOptions;
}
export interface CreateWebhookForPhoneNumberRequest {
    phoneNumberId: string;
    createWebhookOptions: CreateWebhookOptions;
}
export interface DeleteAllWebhooksRequest {
    before?: Date;
}
export interface DeleteWebhookRequest {
    inboxId: string;
    webhookId: string;
}
export interface DeleteWebhookByIdRequest {
    webhookId: string;
}
export interface GetAllWebhookResultsRequest {
    page?: number;
    size?: number;
    sort?: GetAllWebhookResultsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
    unseenOnly?: boolean;
}
export interface GetAllWebhooksRequest {
    page?: number;
    size?: number;
    sort?: GetAllWebhooksSortEnum;
    searchFilter?: string;
    since?: Date;
    inboxId?: string;
    phoneId?: string;
    before?: Date;
}
export interface GetInboxWebhooksPaginatedRequest {
    inboxId: string;
    page?: number;
    size?: number;
    sort?: GetInboxWebhooksPaginatedSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface GetJsonSchemaForWebhookEventRequest {
    event: GetJsonSchemaForWebhookEventEventEnum;
}
export interface GetJsonSchemaForWebhookPayloadRequest {
    webhookId: string;
}
export interface GetPhoneNumberWebhooksPaginatedRequest {
    phoneId: string;
    page?: number;
    size?: number;
    sort?: GetPhoneNumberWebhooksPaginatedSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetTestWebhookPayloadRequest {
    eventName?: GetTestWebhookPayloadEventNameEnum;
}
export interface GetTestWebhookPayloadForWebhookRequest {
    webhookId: string;
}
export interface GetWebhookRequest {
    webhookId: string;
}
export interface GetWebhookResultRequest {
    webhookResultId: string;
}
export interface GetWebhookResultsRequest {
    webhookId: string;
    page?: number;
    size?: number;
    sort?: GetWebhookResultsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
    unseenOnly?: boolean;
}
export interface GetWebhooksRequest {
    inboxId: string;
}
export interface RedriveWebhookResultRequest {
    webhookResultId: string;
}
export interface SendTestDataRequest {
    webhookId: string;
}
export interface UpdateWebhookHeadersRequest {
    webhookId: string;
    webhookHeaders: WebhookHeaders;
}
export interface VerifyWebhookSignatureRequest {
    verifyWebhookSignatureOptions: VerifyWebhookSignatureOptions;
}
/**
 *
 */
export declare class WebhookControllerApi extends runtime.BaseAPI {
    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     */
    createAccountWebhookRaw(requestParameters: CreateAccountWebhookRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookDto>>;
    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     */
    createAccountWebhook(requestParameters: CreateAccountWebhookRequest, initOverrides?: RequestInit): Promise<WebhookDto>;
    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     */
    createWebhookRaw(requestParameters: CreateWebhookRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookDto>>;
    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     */
    createWebhook(requestParameters: CreateWebhookRequest, initOverrides?: RequestInit): Promise<WebhookDto>;
    /**
     * Get notified whenever a phone number receives an SMS via a WebHook URL.
     * Attach a WebHook URL to a phone number
     */
    createWebhookForPhoneNumberRaw(requestParameters: CreateWebhookForPhoneNumberRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookDto>>;
    /**
     * Get notified whenever a phone number receives an SMS via a WebHook URL.
     * Attach a WebHook URL to a phone number
     */
    createWebhookForPhoneNumber(requestParameters: CreateWebhookForPhoneNumberRequest, initOverrides?: RequestInit): Promise<WebhookDto>;
    /**
     * Delete all webhooks
     */
    deleteAllWebhooksRaw(requestParameters: DeleteAllWebhooksRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete all webhooks
     */
    deleteAllWebhooks(requestParameters: DeleteAllWebhooksRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Delete and disable a Webhook for an Inbox
     */
    deleteWebhookRaw(requestParameters: DeleteWebhookRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete and disable a Webhook for an Inbox
     */
    deleteWebhook(requestParameters: DeleteWebhookRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Delete a webhook
     */
    deleteWebhookByIdRaw(requestParameters: DeleteWebhookByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a webhook
     */
    deleteWebhookById(requestParameters: DeleteWebhookByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get results for all webhooks
     */
    getAllWebhookResultsRaw(requestParameters: GetAllWebhookResultsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageWebhookResult>>;
    /**
     * Get results for all webhooks
     */
    getAllWebhookResults(requestParameters: GetAllWebhookResultsRequest, initOverrides?: RequestInit): Promise<PageWebhookResult>;
    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     */
    getAllWebhooksRaw(requestParameters: GetAllWebhooksRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageWebhookProjection>>;
    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     */
    getAllWebhooks(requestParameters: GetAllWebhooksRequest, initOverrides?: RequestInit): Promise<PageWebhookProjection>;
    /**
     * Get paginated webhooks for an Inbox
     */
    getInboxWebhooksPaginatedRaw(requestParameters: GetInboxWebhooksPaginatedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageWebhookProjection>>;
    /**
     * Get paginated webhooks for an Inbox
     */
    getInboxWebhooksPaginated(requestParameters: GetInboxWebhooksPaginatedRequest, initOverrides?: RequestInit): Promise<PageWebhookProjection>;
    /**
     * Get JSON Schema definition for webhook payload by event
     */
    getJsonSchemaForWebhookEventRaw(requestParameters: GetJsonSchemaForWebhookEventRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JSONSchemaDto>>;
    /**
     * Get JSON Schema definition for webhook payload by event
     */
    getJsonSchemaForWebhookEvent(requestParameters: GetJsonSchemaForWebhookEventRequest, initOverrides?: RequestInit): Promise<JSONSchemaDto>;
    /**
     * Get JSON Schema definition for webhook payload
     */
    getJsonSchemaForWebhookPayloadRaw(requestParameters: GetJsonSchemaForWebhookPayloadRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<JSONSchemaDto>>;
    /**
     * Get JSON Schema definition for webhook payload
     */
    getJsonSchemaForWebhookPayload(requestParameters: GetJsonSchemaForWebhookPayloadRequest, initOverrides?: RequestInit): Promise<JSONSchemaDto>;
    /**
     * Get paginated webhooks for a phone number
     */
    getPhoneNumberWebhooksPaginatedRaw(requestParameters: GetPhoneNumberWebhooksPaginatedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageWebhookProjection>>;
    /**
     * Get paginated webhooks for a phone number
     */
    getPhoneNumberWebhooksPaginated(requestParameters: GetPhoneNumberWebhooksPaginatedRequest, initOverrides?: RequestInit): Promise<PageWebhookProjection>;
    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     */
    getTestWebhookPayloadRaw(requestParameters: GetTestWebhookPayloadRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AbstractWebhookPayload>>;
    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     */
    getTestWebhookPayload(requestParameters: GetTestWebhookPayloadRequest, initOverrides?: RequestInit): Promise<AbstractWebhookPayload>;
    /**
     * Get webhook test payload for bounce
     */
    getTestWebhookPayloadBounceRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookBouncePayload>>;
    /**
     * Get webhook test payload for bounce
     */
    getTestWebhookPayloadBounce(initOverrides?: RequestInit): Promise<WebhookBouncePayload>;
    /**
     * Get webhook test payload for bounce recipient
     */
    getTestWebhookPayloadBounceRecipientRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookBounceRecipientPayload>>;
    /**
     * Get webhook test payload for bounce recipient
     */
    getTestWebhookPayloadBounceRecipient(initOverrides?: RequestInit): Promise<WebhookBounceRecipientPayload>;
    /**
     * Get webhook test payload for email opened event
     */
    getTestWebhookPayloadEmailOpenedRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookEmailOpenedPayload>>;
    /**
     * Get webhook test payload for email opened event
     */
    getTestWebhookPayloadEmailOpened(initOverrides?: RequestInit): Promise<WebhookEmailOpenedPayload>;
    /**
     * Get webhook test payload for email opened event
     */
    getTestWebhookPayloadEmailReadRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookEmailReadPayload>>;
    /**
     * Get webhook test payload for email opened event
     */
    getTestWebhookPayloadEmailRead(initOverrides?: RequestInit): Promise<WebhookEmailReadPayload>;
    /**
     * Get example payload for webhook
     */
    getTestWebhookPayloadForWebhookRaw(requestParameters: GetTestWebhookPayloadForWebhookRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AbstractWebhookPayload>>;
    /**
     * Get example payload for webhook
     */
    getTestWebhookPayloadForWebhook(requestParameters: GetTestWebhookPayloadForWebhookRequest, initOverrides?: RequestInit): Promise<AbstractWebhookPayload>;
    /**
     * Get webhook test payload for new attachment event
     */
    getTestWebhookPayloadNewAttachmentRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookNewAttachmentPayload>>;
    /**
     * Get webhook test payload for new attachment event
     */
    getTestWebhookPayloadNewAttachment(initOverrides?: RequestInit): Promise<WebhookNewAttachmentPayload>;
    /**
     * Get webhook test payload for new contact event
     */
    getTestWebhookPayloadNewContactRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookNewContactPayload>>;
    /**
     * Get webhook test payload for new contact event
     */
    getTestWebhookPayloadNewContact(initOverrides?: RequestInit): Promise<WebhookNewContactPayload>;
    /**
     * Get webhook test payload for new email event
     */
    getTestWebhookPayloadNewEmailRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookNewEmailPayload>>;
    /**
     * Get webhook test payload for new email event
     */
    getTestWebhookPayloadNewEmail(initOverrides?: RequestInit): Promise<WebhookNewEmailPayload>;
    /**
     * Get a webhook
     */
    getWebhookRaw(requestParameters: GetWebhookRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookDto>>;
    /**
     * Get a webhook
     */
    getWebhook(requestParameters: GetWebhookRequest, initOverrides?: RequestInit): Promise<WebhookDto>;
    /**
     * Get a webhook result for a webhook
     */
    getWebhookResultRaw(requestParameters: GetWebhookResultRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookResultDto>>;
    /**
     * Get a webhook result for a webhook
     */
    getWebhookResult(requestParameters: GetWebhookResultRequest, initOverrides?: RequestInit): Promise<WebhookResultDto>;
    /**
     * Get a webhook results for a webhook
     */
    getWebhookResultsRaw(requestParameters: GetWebhookResultsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageWebhookResult>>;
    /**
     * Get a webhook results for a webhook
     */
    getWebhookResults(requestParameters: GetWebhookResultsRequest, initOverrides?: RequestInit): Promise<PageWebhookResult>;
    /**
     * Get count of unseen webhook results with error status
     */
    getWebhookResultsUnseenErrorCountRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnseenErrorCountDto>>;
    /**
     * Get count of unseen webhook results with error status
     */
    getWebhookResultsUnseenErrorCount(initOverrides?: RequestInit): Promise<UnseenErrorCountDto>;
    /**
     * Get all webhooks for an Inbox
     */
    getWebhooksRaw(requestParameters: GetWebhooksRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<WebhookDto>>>;
    /**
     * Get all webhooks for an Inbox
     */
    getWebhooks(requestParameters: GetWebhooksRequest, initOverrides?: RequestInit): Promise<Array<WebhookDto>>;
    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     */
    redriveWebhookResultRaw(requestParameters: RedriveWebhookResultRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookRedriveResult>>;
    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     */
    redriveWebhookResult(requestParameters: RedriveWebhookResultRequest, initOverrides?: RequestInit): Promise<WebhookRedriveResult>;
    /**
     * Send webhook test data
     */
    sendTestDataRaw(requestParameters: SendTestDataRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookTestResult>>;
    /**
     * Send webhook test data
     */
    sendTestData(requestParameters: SendTestDataRequest, initOverrides?: RequestInit): Promise<WebhookTestResult>;
    /**
     * Update a webhook request headers
     */
    updateWebhookHeadersRaw(requestParameters: UpdateWebhookHeadersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<WebhookDto>>;
    /**
     * Update a webhook request headers
     */
    updateWebhookHeaders(requestParameters: UpdateWebhookHeadersRequest, initOverrides?: RequestInit): Promise<WebhookDto>;
    /**
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     */
    verifyWebhookSignatureRaw(requestParameters: VerifyWebhookSignatureRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<VerifyWebhookSignatureResults>>;
    /**
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     */
    verifyWebhookSignature(requestParameters: VerifyWebhookSignatureRequest, initOverrides?: RequestInit): Promise<VerifyWebhookSignatureResults>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAllWebhookResultsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAllWebhooksSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetInboxWebhooksPaginatedSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetJsonSchemaForWebhookEventEventEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ",
    BOUNCE = "BOUNCE",
    BOUNCE_RECIPIENT = "BOUNCE_RECIPIENT",
    NEW_SMS = "NEW_SMS"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetPhoneNumberWebhooksPaginatedSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetTestWebhookPayloadEventNameEnum {
    EMAIL_RECEIVED = "EMAIL_RECEIVED",
    NEW_EMAIL = "NEW_EMAIL",
    NEW_CONTACT = "NEW_CONTACT",
    NEW_ATTACHMENT = "NEW_ATTACHMENT",
    EMAIL_OPENED = "EMAIL_OPENED",
    EMAIL_READ = "EMAIL_READ",
    BOUNCE = "BOUNCE",
    BOUNCE_RECIPIENT = "BOUNCE_RECIPIENT",
    NEW_SMS = "NEW_SMS"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetWebhookResultsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

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
import { BouncedEmailDto, BouncedRecipientDto, FilterBouncedRecipientsOptions, FilterBouncedRecipientsResult, PageBouncedEmail, PageBouncedRecipients, PageComplaint } from '../models';
export interface FilterBouncedRecipientRequest {
    filterBouncedRecipientsOptions: FilterBouncedRecipientsOptions;
}
export interface GetBouncedEmailRequest {
    id: string;
}
export interface GetBouncedEmailsRequest {
    page?: number;
    size?: number;
    sort?: GetBouncedEmailsSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetBouncedRecipientRequest {
    id: string;
}
export interface GetBouncedRecipientsRequest {
    page?: number;
    size?: number;
    sort?: GetBouncedRecipientsSortEnum;
    since?: Date;
    before?: Date;
}
export interface GetComplaintsRequest {
    page?: number;
    size?: number;
    sort?: GetComplaintsSortEnum;
    since?: Date;
    before?: Date;
}
/**
 *
 */
export declare class BounceControllerApi extends runtime.BaseAPI {
    /**
     * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
     * Filter a list of email recipients and remove those who have bounced
     */
    filterBouncedRecipientRaw(requestParameters: FilterBouncedRecipientRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FilterBouncedRecipientsResult>>;
    /**
     * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
     * Filter a list of email recipients and remove those who have bounced
     */
    filterBouncedRecipient(requestParameters: FilterBouncedRecipientRequest, initOverrides?: RequestInit): Promise<FilterBouncedRecipientsResult>;
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     */
    getBouncedEmailRaw(requestParameters: GetBouncedEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BouncedEmailDto>>;
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     */
    getBouncedEmail(requestParameters: GetBouncedEmailRequest, initOverrides?: RequestInit): Promise<BouncedEmailDto>;
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get paginated list of bounced emails.
     */
    getBouncedEmailsRaw(requestParameters: GetBouncedEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageBouncedEmail>>;
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get paginated list of bounced emails.
     */
    getBouncedEmails(requestParameters: GetBouncedEmailsRequest, initOverrides?: RequestInit): Promise<PageBouncedEmail>;
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     */
    getBouncedRecipientRaw(requestParameters: GetBouncedRecipientRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BouncedRecipientDto>>;
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     */
    getBouncedRecipient(requestParameters: GetBouncedRecipientRequest, initOverrides?: RequestInit): Promise<BouncedRecipientDto>;
    /**
     * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
     * Get paginated list of bounced recipients.
     */
    getBouncedRecipientsRaw(requestParameters: GetBouncedRecipientsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageBouncedRecipients>>;
    /**
     * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
     * Get paginated list of bounced recipients.
     */
    getBouncedRecipients(requestParameters: GetBouncedRecipientsRequest, initOverrides?: RequestInit): Promise<PageBouncedRecipients>;
    /**
     * SMTP complaints made against your account
     * Get paginated list of complaints.
     */
    getComplaintsRaw(requestParameters: GetComplaintsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageComplaint>>;
    /**
     * SMTP complaints made against your account
     * Get paginated list of complaints.
     */
    getComplaints(requestParameters: GetComplaintsRequest, initOverrides?: RequestInit): Promise<PageComplaint>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetBouncedEmailsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetBouncedRecipientsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetComplaintsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

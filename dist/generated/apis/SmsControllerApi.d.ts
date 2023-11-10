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
import { PageSmsProjection, ReplyForSms, SentSmsDto, SmsDto, SmsReplyOptions, UnreadCount } from '../models';
export interface DeleteSmsMessageRequest {
    smsId: string;
}
export interface DeleteSmsMessagesRequest {
    phoneNumberId?: string;
}
export interface GetReplyForSmsMessageRequest {
    smsId: string;
}
export interface GetSmsMessageRequest {
    smsId: string;
}
export interface GetSmsMessagesPaginatedRequest {
    phoneNumber?: string;
    page?: number;
    size?: number;
    sort?: GetSmsMessagesPaginatedSortEnum;
    unreadOnly?: boolean;
    since?: Date;
    before?: Date;
}
export interface ReplyToSmsMessageRequest {
    smsId: string;
    smsReplyOptions: SmsReplyOptions;
}
/**
 *
 */
export declare class SmsControllerApi extends runtime.BaseAPI {
    /**
     * Delete an SMS message
     * Delete SMS message.
     */
    deleteSmsMessageRaw(requestParameters: DeleteSmsMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete an SMS message
     * Delete SMS message.
     */
    deleteSmsMessage(requestParameters: DeleteSmsMessageRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Delete all SMS messages or all messages for a given phone number
     * Delete all SMS messages
     */
    deleteSmsMessagesRaw(requestParameters: DeleteSmsMessagesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete all SMS messages or all messages for a given phone number
     * Delete all SMS messages
     */
    deleteSmsMessages(requestParameters: DeleteSmsMessagesRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get reply for an SMS message.
     * Get reply for an SMS message
     */
    getReplyForSmsMessageRaw(requestParameters: GetReplyForSmsMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ReplyForSms>>;
    /**
     * Get reply for an SMS message.
     * Get reply for an SMS message
     */
    getReplyForSmsMessage(requestParameters: GetReplyForSmsMessageRequest, initOverrides?: RequestInit): Promise<ReplyForSms>;
    /**
     * Returns a SMS summary object with content.
     * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
     */
    getSmsMessageRaw(requestParameters: GetSmsMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SmsDto>>;
    /**
     * Returns a SMS summary object with content.
     * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
     */
    getSmsMessage(requestParameters: GetSmsMessageRequest, initOverrides?: RequestInit): Promise<SmsDto>;
    /**
     * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
     * Get all SMS messages in all phone numbers in paginated form. .
     */
    getSmsMessagesPaginatedRaw(requestParameters: GetSmsMessagesPaginatedRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageSmsProjection>>;
    /**
     * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
     * Get all SMS messages in all phone numbers in paginated form. .
     */
    getSmsMessagesPaginated(requestParameters: GetSmsMessagesPaginatedRequest, initOverrides?: RequestInit): Promise<PageSmsProjection>;
    /**
     * Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread SMS count
     */
    getUnreadSmsCountRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<UnreadCount>>;
    /**
     * Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread SMS count
     */
    getUnreadSmsCount(initOverrides?: RequestInit): Promise<UnreadCount>;
    /**
     * Reply to an SMS message.
     * Send a reply to a received SMS message. Replies are sent from the receiving number.
     */
    replyToSmsMessageRaw(requestParameters: ReplyToSmsMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentSmsDto>>;
    /**
     * Reply to an SMS message.
     * Send a reply to a received SMS message. Replies are sent from the receiving number.
     */
    replyToSmsMessage(requestParameters: ReplyToSmsMessageRequest, initOverrides?: RequestInit): Promise<SentSmsDto>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetSmsMessagesPaginatedSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

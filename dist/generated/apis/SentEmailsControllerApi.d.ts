/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { EmailPreviewUrls, PageSentEmailProjection, PageTrackingPixelProjection, RawEmailJson, SentEmailDto } from '../models';
export interface DeleteSentEmailRequest {
    id: string;
}
export interface GetAllSentTrackingPixelsRequest {
    page?: number;
    size?: number;
    sort?: GetAllSentTrackingPixelsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface GetRawSentEmailContentsRequest {
    emailId: string;
}
export interface GetRawSentEmailJsonRequest {
    emailId: string;
}
export interface GetSentEmailRequest {
    id: string;
}
export interface GetSentEmailHTMLContentRequest {
    id: string;
}
export interface GetSentEmailPreviewURLsRequest {
    id: string;
}
export interface GetSentEmailTrackingPixelsRequest {
    id: string;
    page?: number;
    size?: number;
    sort?: GetSentEmailTrackingPixelsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface GetSentEmailsRequest {
    inboxId?: string;
    page?: number;
    size?: number;
    sort?: GetSentEmailsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface GetSentOrganizationEmailsRequest {
    inboxId?: string;
    page?: number;
    size?: number;
    sort?: GetSentOrganizationEmailsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
/**
 *
 */
export declare class SentEmailsControllerApi extends runtime.BaseAPI {
    /**
     * Delete all sent email receipts
     */
    deleteAllSentEmailsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete all sent email receipts
     */
    deleteAllSentEmails(initOverrides?: RequestInit): Promise<void>;
    /**
     * Delete sent email receipt
     */
    deleteSentEmailRaw(requestParameters: DeleteSentEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete sent email receipt
     */
    deleteSentEmail(requestParameters: DeleteSentEmailRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get all sent email tracking pixels in paginated form
     */
    getAllSentTrackingPixelsRaw(requestParameters: GetAllSentTrackingPixelsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageTrackingPixelProjection>>;
    /**
     * Get all sent email tracking pixels in paginated form
     */
    getAllSentTrackingPixels(requestParameters: GetAllSentTrackingPixelsRequest, initOverrides?: RequestInit): Promise<PageTrackingPixelProjection>;
    /**
     * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
     * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
     */
    getRawSentEmailContentsRaw(requestParameters: GetRawSentEmailContentsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
     * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
     */
    getRawSentEmailContents(requestParameters: GetRawSentEmailContentsRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
     * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
     */
    getRawSentEmailJsonRaw(requestParameters: GetRawSentEmailJsonRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RawEmailJson>>;
    /**
     * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
     * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
     */
    getRawSentEmailJson(requestParameters: GetRawSentEmailJsonRequest, initOverrides?: RequestInit): Promise<RawEmailJson>;
    /**
     * Get sent email receipt
     */
    getSentEmailRaw(requestParameters: GetSentEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentEmailDto>>;
    /**
     * Get sent email receipt
     */
    getSentEmail(requestParameters: GetSentEmailRequest, initOverrides?: RequestInit): Promise<SentEmailDto>;
    /**
     * Get sent email HTML content
     */
    getSentEmailHTMLContentRaw(requestParameters: GetSentEmailHTMLContentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Get sent email HTML content
     */
    getSentEmailHTMLContent(requestParameters: GetSentEmailHTMLContentRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get sent email URL for viewing in browser or downloading
     */
    getSentEmailPreviewURLsRaw(requestParameters: GetSentEmailPreviewURLsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<EmailPreviewUrls>>;
    /**
     * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get sent email URL for viewing in browser or downloading
     */
    getSentEmailPreviewURLs(requestParameters: GetSentEmailPreviewURLsRequest, initOverrides?: RequestInit): Promise<EmailPreviewUrls>;
    /**
     * Get all tracking pixels for a sent email in paginated form
     */
    getSentEmailTrackingPixelsRaw(requestParameters: GetSentEmailTrackingPixelsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageTrackingPixelProjection>>;
    /**
     * Get all tracking pixels for a sent email in paginated form
     */
    getSentEmailTrackingPixels(requestParameters: GetSentEmailTrackingPixelsRequest, initOverrides?: RequestInit): Promise<PageTrackingPixelProjection>;
    /**
     * Get all sent emails in paginated form
     */
    getSentEmailsRaw(requestParameters: GetSentEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageSentEmailProjection>>;
    /**
     * Get all sent emails in paginated form
     */
    getSentEmails(requestParameters: GetSentEmailsRequest, initOverrides?: RequestInit): Promise<PageSentEmailProjection>;
    /**
     * Get all sent organization emails in paginated form
     */
    getSentOrganizationEmailsRaw(requestParameters: GetSentOrganizationEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageSentEmailProjection>>;
    /**
     * Get all sent organization emails in paginated form
     */
    getSentOrganizationEmails(requestParameters: GetSentOrganizationEmailsRequest, initOverrides?: RequestInit): Promise<PageSentEmailProjection>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAllSentTrackingPixelsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetSentEmailTrackingPixelsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetSentEmailsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetSentOrganizationEmailsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

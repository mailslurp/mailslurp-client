/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { PageSentEmailProjection, PageTrackingPixelProjection, SentEmailDto } from '../models';
export interface GetAllSentTrackingPixelsRequest {
    before?: Date;
    page?: number;
    searchFilter?: string;
    since?: Date;
    size?: number;
    sort?: GetAllSentTrackingPixelsSortEnum;
}
export interface GetSentEmailRequest {
    id: string;
}
export interface GetSentEmailHTMLContentRequest {
    id: string;
}
export interface GetSentEmailTrackingPixelsRequest {
    id: string;
    before?: Date;
    page?: number;
    searchFilter?: string;
    since?: Date;
    size?: number;
    sort?: GetSentEmailTrackingPixelsSortEnum;
}
export interface GetSentEmailsRequest {
    before?: Date;
    inboxId?: string;
    page?: number;
    searchFilter?: string;
    since?: Date;
    size?: number;
    sort?: GetSentEmailsSortEnum;
}
export interface GetSentOrganizationEmailsRequest {
    before?: Date;
    inboxId?: string;
    page?: number;
    searchFilter?: string;
    since?: Date;
    size?: number;
    sort?: GetSentOrganizationEmailsSortEnum;
}
/**
 *
 */
export declare class SentEmailsControllerApi extends runtime.BaseAPI {
    /**
     * Get all sent email tracking pixels in paginated form
     */
    getAllSentTrackingPixelsRaw(requestParameters: GetAllSentTrackingPixelsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageTrackingPixelProjection>>;
    /**
     * Get all sent email tracking pixels in paginated form
     */
    getAllSentTrackingPixels(requestParameters: GetAllSentTrackingPixelsRequest, initOverrides?: RequestInit): Promise<PageTrackingPixelProjection>;
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

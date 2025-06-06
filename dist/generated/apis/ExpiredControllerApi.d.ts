/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { ExpirationDefaults, ExpiredInboxDto, PageExpiredInboxRecordProjection } from '../models';
export interface GetExpiredInboxByInboxIdRequest {
    inboxId: string;
}
export interface GetExpiredInboxRecordRequest {
    expiredId: string;
}
export interface GetExpiredInboxesRequest {
    page?: number;
    size?: number;
    sort?: GetExpiredInboxesSortEnum;
    since?: Date;
    before?: Date;
    inboxId?: string;
}
/**
 *
 */
export declare class ExpiredControllerApi extends runtime.BaseAPI {
    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    getExpirationDefaultsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<ExpirationDefaults>>;
    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    getExpirationDefaults(initOverrides?: RequestInit): Promise<ExpirationDefaults>;
    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     */
    getExpiredInboxByInboxIdRaw(requestParameters: GetExpiredInboxByInboxIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ExpiredInboxDto>>;
    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     */
    getExpiredInboxByInboxId(requestParameters: GetExpiredInboxByInboxIdRequest, initOverrides?: RequestInit): Promise<ExpiredInboxDto>;
    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     */
    getExpiredInboxRecordRaw(requestParameters: GetExpiredInboxRecordRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ExpiredInboxDto>>;
    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     */
    getExpiredInboxRecord(requestParameters: GetExpiredInboxRecordRequest, initOverrides?: RequestInit): Promise<ExpiredInboxDto>;
    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     */
    getExpiredInboxesRaw(requestParameters: GetExpiredInboxesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageExpiredInboxRecordProjection>>;
    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     */
    getExpiredInboxes(requestParameters: GetExpiredInboxesRequest, initOverrides?: RequestInit): Promise<PageExpiredInboxRecordProjection>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetExpiredInboxesSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

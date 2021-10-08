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
import { ExportLink, ExportOptions } from '../models';
export interface ExportEntitiesRequest {
    apiKey: string;
    exportType: ExportEntitiesExportTypeEnum;
    outputFormat: ExportEntitiesOutputFormatEnum;
    createdEarliestTime?: Date;
    createdOldestTime?: Date;
    excludePreviouslyExported?: boolean;
    filter?: string;
    listSeparatorToken?: string;
}
export interface GetExportLinkRequest {
    exportType: GetExportLinkExportTypeEnum;
    exportOptions: ExportOptions;
    apiKey?: string;
}
/**
 *
 */
export declare class ExportControllerApi extends runtime.BaseAPI {
    /**
     * Export inboxes link callable via browser
     */
    exportEntitiesRaw(requestParameters: ExportEntitiesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>>;
    /**
     * Export inboxes link callable via browser
     */
    exportEntities(requestParameters: ExportEntitiesRequest, initOverrides?: RequestInit): Promise<string>;
    /**
     * Get export link
     */
    getExportLinkRaw(requestParameters: GetExportLinkRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ExportLink>>;
    /**
     * Get export link
     */
    getExportLink(requestParameters: GetExportLinkRequest, initOverrides?: RequestInit): Promise<ExportLink>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ExportEntitiesExportTypeEnum {
    INBOXES = "INBOXES",
    CONTACTS = "CONTACTS",
    ATTACHMENTS = "ATTACHMENTS",
    EMAILS = "EMAILS"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ExportEntitiesOutputFormatEnum {
    DEFAULT = "CSV_DEFAULT",
    EXCEL = "CSV_EXCEL"
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetExportLinkExportTypeEnum {
    INBOXES = "INBOXES",
    CONTACTS = "CONTACTS",
    ATTACHMENTS = "ATTACHMENTS",
    EMAILS = "EMAILS"
}

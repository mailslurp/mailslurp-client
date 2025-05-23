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
import { ImapServerFetchResult, ImapServerGetResult, ImapServerListOptions, ImapServerListResult, ImapServerMailboxResult, ImapServerSearchOptions, ImapServerSearchResult, ImapServerStatusOptions, ImapServerStatusResult, ImapUpdateFlagsOptions } from '../models';
export interface ImapServerFetchRequest {
    seqNum: number;
    inboxId?: string;
}
export interface ImapServerGetRequest {
    emailId: string;
    inboxId?: string;
}
export interface ImapServerListRequest {
    imapServerListOptions: ImapServerListOptions;
    inboxId?: string;
}
export interface ImapServerMailboxRequest {
    name: string;
}
export interface ImapServerSearchRequest {
    imapServerSearchOptions: ImapServerSearchOptions;
    inboxId?: string;
}
export interface ImapServerStatusRequest {
    imapServerStatusOptions: ImapServerStatusOptions;
    inboxId?: string;
}
export interface ImapServerUpdateFlagsRequest {
    imapUpdateFlagsOptions: ImapUpdateFlagsOptions;
    inboxId?: string;
}
/**
 *
 */
export declare class ImapControllerApi extends runtime.BaseAPI {
    /**
     * Fetch message in an inbox
     */
    imapServerFetchRaw(requestParameters: ImapServerFetchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImapServerFetchResult>>;
    /**
     * Fetch message in an inbox
     */
    imapServerFetch(requestParameters: ImapServerFetchRequest, initOverrides?: RequestInit): Promise<ImapServerFetchResult>;
    /**
     * Get a message by email ID
     */
    imapServerGetRaw(requestParameters: ImapServerGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImapServerGetResult>>;
    /**
     * Get a message by email ID
     */
    imapServerGet(requestParameters: ImapServerGetRequest, initOverrides?: RequestInit): Promise<ImapServerGetResult>;
    /**
     * List messages in an inbox
     */
    imapServerListRaw(requestParameters: ImapServerListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImapServerListResult>>;
    /**
     * List messages in an inbox
     */
    imapServerList(requestParameters: ImapServerListRequest, initOverrides?: RequestInit): Promise<ImapServerListResult>;
    /**
     * Create a new mailbox if possible
     */
    imapServerMailboxRaw(requestParameters: ImapServerMailboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImapServerMailboxResult>>;
    /**
     * Create a new mailbox if possible
     */
    imapServerMailbox(requestParameters: ImapServerMailboxRequest, initOverrides?: RequestInit): Promise<ImapServerMailboxResult>;
    /**
     * Search messages in an inbox
     */
    imapServerSearchRaw(requestParameters: ImapServerSearchRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImapServerSearchResult>>;
    /**
     * Search messages in an inbox
     */
    imapServerSearch(requestParameters: ImapServerSearchRequest, initOverrides?: RequestInit): Promise<ImapServerSearchResult>;
    /**
     * Get status for mailbox
     */
    imapServerStatusRaw(requestParameters: ImapServerStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImapServerStatusResult>>;
    /**
     * Get status for mailbox
     */
    imapServerStatus(requestParameters: ImapServerStatusRequest, initOverrides?: RequestInit): Promise<ImapServerStatusResult>;
    /**
     * Update message flags
     */
    imapServerUpdateFlagsRaw(requestParameters: ImapServerUpdateFlagsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Update message flags
     */
    imapServerUpdateFlags(requestParameters: ImapServerUpdateFlagsRequest, initOverrides?: RequestInit): Promise<void>;
}

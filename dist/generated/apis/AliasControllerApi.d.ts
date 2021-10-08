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
import { AliasDto, CreateAliasOptions, PageAlias, PageEmailProjection, PageThreadProjection, ReplyToAliasEmailOptions, SendEmailOptions, SentEmailDto, UpdateAliasOptions } from '../models';
export interface CreateAliasRequest {
    createAliasOptions: CreateAliasOptions;
}
export interface DeleteAliasRequest {
    aliasId: string;
}
export interface GetAliasRequest {
    aliasId: string;
}
export interface GetAliasEmailsRequest {
    aliasId: string;
    before?: Date;
    page?: number;
    since?: Date;
    size?: number;
    sort?: GetAliasEmailsSortEnum;
}
export interface GetAliasThreadsRequest {
    aliasId: string;
    before?: Date;
    page?: number;
    since?: Date;
    size?: number;
    sort?: GetAliasThreadsSortEnum;
}
export interface GetAliasesRequest {
    before?: Date;
    page?: number;
    since?: Date;
    size?: number;
    sort?: GetAliasesSortEnum;
}
export interface ReplyToAliasEmailRequest {
    aliasId: string;
    emailId: string;
    replyToAliasEmailOptions: ReplyToAliasEmailOptions;
}
export interface SendAliasEmailRequest {
    aliasId: string;
    sendEmailOptions?: SendEmailOptions;
}
export interface UpdateAliasRequest {
    aliasId: string;
    updateAliasOptions: UpdateAliasOptions;
}
/**
 *
 */
export declare class AliasControllerApi extends runtime.BaseAPI {
    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     */
    createAliasRaw(requestParameters: CreateAliasRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AliasDto>>;
    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     */
    createAlias(requestParameters: CreateAliasRequest, initOverrides?: RequestInit): Promise<AliasDto>;
    /**
     * Delete an email alias
     */
    deleteAliasRaw(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete an email alias
     */
    deleteAlias(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get an email alias by ID
     * Get an email alias
     */
    getAliasRaw(requestParameters: GetAliasRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AliasDto>>;
    /**
     * Get an email alias by ID
     * Get an email alias
     */
    getAlias(requestParameters: GetAliasRequest, initOverrides?: RequestInit): Promise<AliasDto>;
    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     */
    getAliasEmailsRaw(requestParameters: GetAliasEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageEmailProjection>>;
    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     */
    getAliasEmails(requestParameters: GetAliasEmailsRequest, initOverrides?: RequestInit): Promise<PageEmailProjection>;
    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     */
    getAliasThreadsRaw(requestParameters: GetAliasThreadsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageThreadProjection>>;
    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     */
    getAliasThreads(requestParameters: GetAliasThreadsRequest, initOverrides?: RequestInit): Promise<PageThreadProjection>;
    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     */
    getAliasesRaw(requestParameters: GetAliasesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageAlias>>;
    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     */
    getAliases(requestParameters: GetAliasesRequest, initOverrides?: RequestInit): Promise<PageAlias>;
    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     */
    replyToAliasEmailRaw(requestParameters: ReplyToAliasEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentEmailDto>>;
    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     */
    replyToAliasEmail(requestParameters: ReplyToAliasEmailRequest, initOverrides?: RequestInit): Promise<SentEmailDto>;
    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     */
    sendAliasEmailRaw(requestParameters: SendAliasEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SentEmailDto>>;
    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     */
    sendAliasEmail(requestParameters: SendAliasEmailRequest, initOverrides?: RequestInit): Promise<SentEmailDto>;
    /**
     * Update an email alias
     */
    updateAliasRaw(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Update an email alias
     */
    updateAlias(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit): Promise<void>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAliasEmailsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAliasThreadsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetAliasesSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

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
import { Inbox, SimpleSendEmailOptions } from '../models';
export interface CreateNewEmailAddressRequest {
    allowTeamAccess?: boolean;
    description?: string;
    emailAddress?: string;
    expiresAt?: Date;
    expiresIn?: number;
    favourite?: boolean;
    inboxType?: CreateNewEmailAddressInboxTypeEnum;
    name?: string;
    tags?: Array<string>;
    useDomainPool?: boolean;
}
export interface CreateNewEmailAddress1Request {
    allowTeamAccess?: boolean;
    description?: string;
    emailAddress?: string;
    expiresAt?: Date;
    expiresIn?: number;
    favourite?: boolean;
    inboxType?: CreateNewEmailAddress1InboxTypeEnum;
    name?: string;
    tags?: Array<string>;
    useDomainPool?: boolean;
}
export interface EmptyInboxRequest {
    inboxId: string;
}
export interface SendEmailSimpleRequest {
    emailOptions: SimpleSendEmailOptions;
}
/**
 *
 */
export declare class CommonActionsControllerApi extends runtime.BaseAPI {
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    createNewEmailAddressRaw(requestParameters: CreateNewEmailAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Inbox>>;
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    createNewEmailAddress(requestParameters: CreateNewEmailAddressRequest, initOverrides?: RequestInit): Promise<Inbox>;
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    createNewEmailAddress1Raw(requestParameters: CreateNewEmailAddress1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Inbox>>;
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    createNewEmailAddress1(requestParameters: CreateNewEmailAddress1Request, initOverrides?: RequestInit): Promise<Inbox>;
    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    emptyInboxRaw(requestParameters: EmptyInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    emptyInbox(requestParameters: EmptyInboxRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     */
    sendEmailSimpleRaw(requestParameters: SendEmailSimpleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     */
    sendEmailSimple(requestParameters: SendEmailSimpleRequest, initOverrides?: RequestInit): Promise<void>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum CreateNewEmailAddressInboxTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_INBOX = "SMTP_INBOX"
}
/**
 * @export
 * @enum {string}
 */
export declare enum CreateNewEmailAddress1InboxTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_INBOX = "SMTP_INBOX"
}
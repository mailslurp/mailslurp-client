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
import { Email, EmailPreview, MatchOptions, WaitForConditions } from '../models';
export interface WaitForRequest {
    waitForConditions?: WaitForConditions;
}
export interface WaitForEmailCountRequest {
    before?: Date;
    count?: number;
    delay?: number;
    inboxId?: string;
    since?: Date;
    sort?: WaitForEmailCountSortEnum;
    timeout?: number;
    unreadOnly?: boolean;
}
export interface WaitForLatestEmailRequest {
    before?: Date;
    delay?: number;
    inboxId?: string;
    since?: Date;
    sort?: WaitForLatestEmailSortEnum;
    timeout?: number;
    unreadOnly?: boolean;
}
export interface WaitForMatchingEmailsRequest {
    matchOptions: MatchOptions;
    before?: Date;
    count?: number;
    delay?: number;
    inboxId?: string;
    since?: Date;
    sort?: WaitForMatchingEmailsSortEnum;
    timeout?: number;
    unreadOnly?: boolean;
}
export interface WaitForMatchingFirstEmailRequest {
    matchOptions: MatchOptions;
    before?: Date;
    delay?: number;
    inboxId?: string;
    since?: Date;
    sort?: WaitForMatchingFirstEmailSortEnum;
    timeout?: number;
    unreadOnly?: boolean;
}
export interface WaitForNthEmailRequest {
    before?: Date;
    delay?: number;
    inboxId?: string;
    index?: number;
    since?: Date;
    sort?: WaitForNthEmailSortEnum;
    timeout?: number;
    unreadOnly?: boolean;
}
/**
 *
 */
export declare class WaitForControllerApi extends runtime.BaseAPI {
    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     */
    waitForRaw(requestParameters: WaitForRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<EmailPreview>>>;
    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     */
    waitFor(requestParameters: WaitForRequest, initOverrides?: RequestInit): Promise<Array<EmailPreview>>;
    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     */
    waitForEmailCountRaw(requestParameters: WaitForEmailCountRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<EmailPreview>>>;
    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     */
    waitForEmailCount(requestParameters: WaitForEmailCountRequest, initOverrides?: RequestInit): Promise<Array<EmailPreview>>;
    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox\'s latest email or if empty wait for an email to arrive
     */
    waitForLatestEmailRaw(requestParameters: WaitForLatestEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Email>>;
    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox\'s latest email or if empty wait for an email to arrive
     */
    waitForLatestEmail(requestParameters: WaitForLatestEmailRequest, initOverrides?: RequestInit): Promise<Email>;
    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     */
    waitForMatchingEmailsRaw(requestParameters: WaitForMatchingEmailsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<EmailPreview>>>;
    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     */
    waitForMatchingEmails(requestParameters: WaitForMatchingEmailsRequest, initOverrides?: RequestInit): Promise<Array<EmailPreview>>;
    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     */
    waitForMatchingFirstEmailRaw(requestParameters: WaitForMatchingFirstEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Email>>;
    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     */
    waitForMatchingFirstEmail(requestParameters: WaitForMatchingFirstEmailRequest, initOverrides?: RequestInit): Promise<Email>;
    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.
     */
    waitForNthEmailRaw(requestParameters: WaitForNthEmailRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Email>>;
    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.
     */
    waitForNthEmail(requestParameters: WaitForNthEmailRequest, initOverrides?: RequestInit): Promise<Email>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum WaitForEmailCountSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
    * @export
    * @enum {string}
    */
export declare enum WaitForLatestEmailSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
    * @export
    * @enum {string}
    */
export declare enum WaitForMatchingEmailsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
    * @export
    * @enum {string}
    */
export declare enum WaitForMatchingFirstEmailSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
    * @export
    * @enum {string}
    */
export declare enum WaitForNthEmailSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

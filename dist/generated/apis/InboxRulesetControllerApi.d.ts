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
import { CreateInboxRulesetOptions, InboxRulesetDto, InboxRulesetTestOptions, InboxRulesetTestResult, PageInboxRulesetDto, TestNewInboxRulesetOptions } from '../models';
export interface CreateNewInboxRulesetRequest {
    inboxId: string;
    createInboxRulesetOptions: CreateInboxRulesetOptions;
}
export interface DeleteInboxRulesetRequest {
    id: string;
}
export interface DeleteInboxRulesetsRequest {
    inboxId?: string;
}
export interface GetInboxRulesetRequest {
    id: string;
}
export interface GetInboxRulesetsRequest {
    inboxId?: string;
    page?: number;
    size?: number;
    sort?: GetInboxRulesetsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}
export interface TestInboxRulesetRequest {
    id: string;
    inboxRulesetTestOptions: InboxRulesetTestOptions;
}
export interface TestInboxRulesetsForInboxRequest {
    inboxId: string;
    inboxRulesetTestOptions: InboxRulesetTestOptions;
}
export interface TestNewInboxRulesetRequest {
    testNewInboxRulesetOptions: TestNewInboxRulesetOptions;
}
/**
 *
 */
export declare class InboxRulesetControllerApi extends runtime.BaseAPI {
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     */
    createNewInboxRulesetRaw(requestParameters: CreateNewInboxRulesetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxRulesetDto>>;
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     */
    createNewInboxRuleset(requestParameters: CreateNewInboxRulesetRequest, initOverrides?: RequestInit): Promise<InboxRulesetDto>;
    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     */
    deleteInboxRulesetRaw(requestParameters: DeleteInboxRulesetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     */
    deleteInboxRuleset(requestParameters: DeleteInboxRulesetRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     */
    deleteInboxRulesetsRaw(requestParameters: DeleteInboxRulesetsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     */
    deleteInboxRulesets(requestParameters: DeleteInboxRulesetsRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     */
    getInboxRulesetRaw(requestParameters: GetInboxRulesetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxRulesetDto>>;
    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     */
    getInboxRuleset(requestParameters: GetInboxRulesetRequest, initOverrides?: RequestInit): Promise<InboxRulesetDto>;
    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     */
    getInboxRulesetsRaw(requestParameters: GetInboxRulesetsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PageInboxRulesetDto>>;
    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     */
    getInboxRulesets(requestParameters: GetInboxRulesetsRequest, initOverrides?: RequestInit): Promise<PageInboxRulesetDto>;
    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     */
    testInboxRulesetRaw(requestParameters: TestInboxRulesetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxRulesetTestResult>>;
    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     */
    testInboxRuleset(requestParameters: TestInboxRulesetRequest, initOverrides?: RequestInit): Promise<InboxRulesetTestResult>;
    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     */
    testInboxRulesetsForInboxRaw(requestParameters: TestInboxRulesetsForInboxRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxRulesetTestResult>>;
    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     */
    testInboxRulesetsForInbox(requestParameters: TestInboxRulesetsForInboxRequest, initOverrides?: RequestInit): Promise<InboxRulesetTestResult>;
    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     */
    testNewInboxRulesetRaw(requestParameters: TestNewInboxRulesetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InboxRulesetTestResult>>;
    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     */
    testNewInboxRuleset(requestParameters: TestNewInboxRulesetRequest, initOverrides?: RequestInit): Promise<InboxRulesetTestResult>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GetInboxRulesetsSortEnum {
    ASC = "ASC",
    DESC = "DESC"
}

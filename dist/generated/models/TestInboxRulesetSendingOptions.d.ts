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
/**
 * Test options for inbox ruleset sending test
 * @export
 * @interface TestInboxRulesetSendingOptions
 */
export interface TestInboxRulesetSendingOptions {
    /**
     *
     * @type {string}
     * @memberof TestInboxRulesetSendingOptions
     */
    inboxId: string;
    /**
     *
     * @type {string}
     * @memberof TestInboxRulesetSendingOptions
     */
    recipient: string;
}
/**
 * Check if a given object implements the TestInboxRulesetSendingOptions interface.
 */
export declare function instanceOfTestInboxRulesetSendingOptions(value: object): value is TestInboxRulesetSendingOptions;
export declare function TestInboxRulesetSendingOptionsFromJSON(json: any): TestInboxRulesetSendingOptions;
export declare function TestInboxRulesetSendingOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestInboxRulesetSendingOptions;
export declare function TestInboxRulesetSendingOptionsToJSON(json: any): TestInboxRulesetSendingOptions;
export declare function TestInboxRulesetSendingOptionsToJSONTyped(value?: TestInboxRulesetSendingOptions | null, ignoreDiscriminator?: boolean): any;

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
import { MatchOption } from './';
/**
 * Conditions to apply to emails that you are waiting for
 * @export
 * @interface WaitForConditions
 */
export interface WaitForConditions {
    /**
     * ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.
     * @type {string}
     * @memberof WaitForConditions
     */
    inboxId: string;
    /**
     * Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.
     * @type {number}
     * @memberof WaitForConditions
     */
    count?: number;
    /**
     * Max time in milliseconds to wait between retries if a `timeout` is specified.
     * @type {number}
     * @memberof WaitForConditions
     */
    delayTimeout?: number;
    /**
     * Max time in milliseconds to retry the `waitFor` operation until conditions are met.
     * @type {number}
     * @memberof WaitForConditions
     */
    timeout: number;
    /**
     * Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.
     * @type {boolean}
     * @memberof WaitForConditions
     */
    unreadOnly?: boolean;
    /**
     * How result size should be compared with the expected size. Exactly or at-least matching result?
     * @type {string}
     * @memberof WaitForConditions
     */
    countType?: WaitForConditionsCountTypeEnum;
    /**
     * Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.
     * @type {Array<MatchOption>}
     * @memberof WaitForConditions
     */
    matches?: Array<MatchOption>;
    /**
     * Direction to sort matching emails by created time
     * @type {string}
     * @memberof WaitForConditions
     */
    sortDirection?: WaitForConditionsSortDirectionEnum;
    /**
     * ISO Date Time earliest time of email to consider. Filter for matching emails that were received after this date
     * @type {Date}
     * @memberof WaitForConditions
     */
    since?: Date;
    /**
     * ISO Date Time latest time of email to consider. Filter for matching emails that were received before this date
     * @type {Date}
     * @memberof WaitForConditions
     */
    before?: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum WaitForConditionsCountTypeEnum {
    EXACTLY = "EXACTLY",
    ATLEAST = "ATLEAST"
}
/**
 * @export
 * @enum {string}
 */
export declare enum WaitForConditionsSortDirectionEnum {
    ASC = "ASC",
    DESC = "DESC"
}
export declare function WaitForConditionsFromJSON(json: any): WaitForConditions;
export declare function WaitForConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitForConditions;
export declare function WaitForConditionsToJSON(value?: WaitForConditions | null): any;

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
import type { ImapEmailProjection } from './ImapEmailProjection';
/**
 *
 * @export
 * @interface ImapServerListResult
 */
export interface ImapServerListResult {
    /**
     *
     * @type {Array<ImapEmailProjection>}
     * @memberof ImapServerListResult
     */
    results: Array<ImapEmailProjection>;
}
/**
 * Check if a given object implements the ImapServerListResult interface.
 */
export declare function instanceOfImapServerListResult(value: object): value is ImapServerListResult;
export declare function ImapServerListResultFromJSON(json: any): ImapServerListResult;
export declare function ImapServerListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImapServerListResult;
export declare function ImapServerListResultToJSON(json: any): ImapServerListResult;
export declare function ImapServerListResultToJSONTyped(value?: ImapServerListResult | null, ignoreDiscriminator?: boolean): any;

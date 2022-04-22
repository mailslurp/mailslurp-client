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
import { NameServerRecord } from './';
/**
 * Name Server lookup result
 * @export
 * @interface DescribeMailServerDomainResult
 */
export interface DescribeMailServerDomainResult {
    /**
     *
     * @type {Array<NameServerRecord>}
     * @memberof DescribeMailServerDomainResult
     */
    mxRecords: Array<NameServerRecord>;
    /**
     *
     * @type {string}
     * @memberof DescribeMailServerDomainResult
     */
    domain: string;
    /**
     *
     * @type {string}
     * @memberof DescribeMailServerDomainResult
     */
    message?: string;
}
export declare function DescribeMailServerDomainResultFromJSON(json: any): DescribeMailServerDomainResult;
export declare function DescribeMailServerDomainResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeMailServerDomainResult;
export declare function DescribeMailServerDomainResultToJSON(value?: DescribeMailServerDomainResult | null): any;

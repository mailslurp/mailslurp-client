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
import { DNSLookupOptions, DNSLookupResult } from './';
/**
 *
 * @export
 * @interface LookupMtaStsDomainResults
 */
export interface LookupMtaStsDomainResults {
    /**
     *
     * @type {boolean}
     * @memberof LookupMtaStsDomainResults
     */
    valid: boolean;
    /**
     *
     * @type {DNSLookupOptions}
     * @memberof LookupMtaStsDomainResults
     */
    query: DNSLookupOptions;
    /**
     *
     * @type {Array<DNSLookupResult>}
     * @memberof LookupMtaStsDomainResults
     */
    records: Array<DNSLookupResult>;
    /**
     *
     * @type {string}
     * @memberof LookupMtaStsDomainResults
     */
    wellKnownQuery: string;
    /**
     *
     * @type {boolean}
     * @memberof LookupMtaStsDomainResults
     */
    wellKnownPresent: boolean;
    /**
     *
     * @type {string}
     * @memberof LookupMtaStsDomainResults
     */
    wellKnownValue: string;
    /**
     *
     * @type {Array<string>}
     * @memberof LookupMtaStsDomainResults
     */
    errors: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof LookupMtaStsDomainResults
     */
    warnings: Array<string>;
}
export declare function LookupMtaStsDomainResultsFromJSON(json: any): LookupMtaStsDomainResults;
export declare function LookupMtaStsDomainResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupMtaStsDomainResults;
export declare function LookupMtaStsDomainResultsToJSON(value?: LookupMtaStsDomainResults | null): any;

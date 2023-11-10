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
import { DNSLookupOptions, DNSLookupResult } from './';
/**
 *
 * @export
 * @interface LookupBimiDomainResults
 */
export interface LookupBimiDomainResults {
    /**
     *
     * @type {boolean}
     * @memberof LookupBimiDomainResults
     */
    valid: boolean;
    /**
     *
     * @type {DNSLookupOptions}
     * @memberof LookupBimiDomainResults
     */
    query: DNSLookupOptions;
    /**
     *
     * @type {Array<DNSLookupResult>}
     * @memberof LookupBimiDomainResults
     */
    records: Array<DNSLookupResult>;
    /**
     *
     * @type {Array<string>}
     * @memberof LookupBimiDomainResults
     */
    errors: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof LookupBimiDomainResults
     */
    warnings: Array<string>;
}
export declare function LookupBimiDomainResultsFromJSON(json: any): LookupBimiDomainResults;
export declare function LookupBimiDomainResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupBimiDomainResults;
export declare function LookupBimiDomainResultsToJSON(value?: LookupBimiDomainResults | null): any;
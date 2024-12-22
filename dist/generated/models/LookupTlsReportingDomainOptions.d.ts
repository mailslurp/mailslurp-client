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
 *
 * @export
 * @interface LookupTlsReportingDomainOptions
 */
export interface LookupTlsReportingDomainOptions {
    /**
     *
     * @type {string}
     * @memberof LookupTlsReportingDomainOptions
     */
    host: string;
}
/**
 * Check if a given object implements the LookupTlsReportingDomainOptions interface.
 */
export declare function instanceOfLookupTlsReportingDomainOptions(value: object): value is LookupTlsReportingDomainOptions;
export declare function LookupTlsReportingDomainOptionsFromJSON(json: any): LookupTlsReportingDomainOptions;
export declare function LookupTlsReportingDomainOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupTlsReportingDomainOptions;
export declare function LookupTlsReportingDomainOptionsToJSON(json: any): LookupTlsReportingDomainOptions;
export declare function LookupTlsReportingDomainOptionsToJSONTyped(value?: LookupTlsReportingDomainOptions | null, ignoreDiscriminator?: boolean): any;

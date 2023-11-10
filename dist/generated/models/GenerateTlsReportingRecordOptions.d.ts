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
 * @interface GenerateTlsReportingRecordOptions
 */
export interface GenerateTlsReportingRecordOptions {
    /**
     *
     * @type {Array<string>}
     * @memberof GenerateTlsReportingRecordOptions
     */
    reportingAddresses: Array<string>;
    /**
     *
     * @type {string}
     * @memberof GenerateTlsReportingRecordOptions
     */
    reportingUrl?: string;
    /**
     *
     * @type {string}
     * @memberof GenerateTlsReportingRecordOptions
     */
    host: string;
    /**
     *
     * @type {string}
     * @memberof GenerateTlsReportingRecordOptions
     */
    version: GenerateTlsReportingRecordOptionsVersionEnum;
    /**
     *
     * @type {number}
     * @memberof GenerateTlsReportingRecordOptions
     */
    ttl: number;
}
/**
 * @export
 * @enum {string}
 */
export declare enum GenerateTlsReportingRecordOptionsVersionEnum {
    TLSRPTv1 = "TLSRPTv1"
}
export declare function GenerateTlsReportingRecordOptionsFromJSON(json: any): GenerateTlsReportingRecordOptions;
export declare function GenerateTlsReportingRecordOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateTlsReportingRecordOptions;
export declare function GenerateTlsReportingRecordOptionsToJSON(value?: GenerateTlsReportingRecordOptions | null): any;
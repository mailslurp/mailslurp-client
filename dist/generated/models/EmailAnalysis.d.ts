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
/**
 * Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message
 * @export
 * @interface EmailAnalysis
 */
export interface EmailAnalysis {
    /**
     * Verdict of spam ranking analysis
     * @type {string}
     * @memberof EmailAnalysis
     */
    spamVerdict?: string | null;
    /**
     * Verdict of virus scan analysis
     * @type {string}
     * @memberof EmailAnalysis
     */
    virusVerdict?: string | null;
    /**
     * Verdict of Send Policy Framework record spoofing analysis
     * @type {string}
     * @memberof EmailAnalysis
     */
    spfVerdict?: string | null;
    /**
     * Verdict of DomainKeys Identified Mail analysis
     * @type {string}
     * @memberof EmailAnalysis
     */
    dkimVerdict?: string | null;
    /**
     * Verdict of Domain-based Message Authentication Reporting and Conformance analysis
     * @type {string}
     * @memberof EmailAnalysis
     */
    dmarcVerdict?: string | null;
}
export declare function EmailAnalysisFromJSON(json: any): EmailAnalysis;
export declare function EmailAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAnalysis;
export declare function EmailAnalysisToJSON(value?: EmailAnalysis | null): any;

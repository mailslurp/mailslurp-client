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
 *
 * @export
 * @interface LinkIssue
 */
export interface LinkIssue {
    /**
     *
     * @type {string}
     * @memberof LinkIssue
     */
    url: string;
    /**
     *
     * @type {number}
     * @memberof LinkIssue
     */
    responseStatus?: number;
    /**
     *
     * @type {string}
     * @memberof LinkIssue
     */
    severity: LinkIssueSeverityEnum;
    /**
     *
     * @type {string}
     * @memberof LinkIssue
     */
    message: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum LinkIssueSeverityEnum {
    Warning = "Warning",
    Error = "Error"
}
export declare function LinkIssueFromJSON(json: any): LinkIssue;
export declare function LinkIssueFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkIssue;
export declare function LinkIssueToJSON(value?: LinkIssue | null): any;

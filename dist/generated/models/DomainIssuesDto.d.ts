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
 * @interface DomainIssuesDto
 */
export interface DomainIssuesDto {
    /**
     *
     * @type {boolean}
     * @memberof DomainIssuesDto
     */
    hasIssues: boolean;
}
/**
 * Check if a given object implements the DomainIssuesDto interface.
 */
export declare function instanceOfDomainIssuesDto(value: object): value is DomainIssuesDto;
export declare function DomainIssuesDtoFromJSON(json: any): DomainIssuesDto;
export declare function DomainIssuesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainIssuesDto;
export declare function DomainIssuesDtoToJSON(json: any): DomainIssuesDto;
export declare function DomainIssuesDtoToJSONTyped(value?: DomainIssuesDto | null, ignoreDiscriminator?: boolean): any;

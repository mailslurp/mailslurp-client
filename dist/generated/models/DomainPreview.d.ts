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
 * Preview object for domain entity
 * @export
 * @interface DomainPreview
 */
export interface DomainPreview {
    /**
     *
     * @type {string}
     * @memberof DomainPreview
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainPreview
     */
    domain: string;
    /**
     *
     * @type {string}
     * @memberof DomainPreview
     */
    catchAllInboxId?: string;
    /**
     *
     * @type {Date}
     * @memberof DomainPreview
     */
    createdAt: Date;
    /**
     * Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.
     * @type {string}
     * @memberof DomainPreview
     */
    domainType: DomainPreviewDomainTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof DomainPreview
     */
    isVerified: boolean;
}
/**
 * @export
 * @enum {string}
 */
export declare enum DomainPreviewDomainTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_DOMAIN = "SMTP_DOMAIN"
}
export declare function DomainPreviewFromJSON(json: any): DomainPreview;
export declare function DomainPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainPreview;
export declare function DomainPreviewToJSON(value?: DomainPreview | null): any;

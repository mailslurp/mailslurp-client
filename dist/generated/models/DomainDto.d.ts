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
import { DomainNameRecord } from './';
/**
 * Domain plus verification records and status
 * @export
 * @interface DomainDto
 */
export interface DomainDto {
    /**
     *
     * @type {string}
     * @memberof DomainDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainDto
     */
    userId: string;
    /**
     * Custom domain name
     * @type {string}
     * @memberof DomainDto
     */
    domain: string;
    /**
     * Verification tokens
     * @type {string}
     * @memberof DomainDto
     */
    verificationToken: string;
    /**
     * Unique token DKIM tokens
     * @type {Array<string>}
     * @memberof DomainDto
     */
    dkimTokens: Array<string>;
    /**
     * Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.
     * @type {boolean}
     * @memberof DomainDto
     */
    isVerified: boolean;
    /**
     * List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.
     * @type {Array<DomainNameRecord>}
     * @memberof DomainDto
     */
    domainNameRecords: Array<DomainNameRecord>;
    /**
     * The optional catch all inbox that will receive emails sent to the domain that cannot be matched.
     * @type {string}
     * @memberof DomainDto
     */
    catchAllInboxId?: string | null;
    /**
     *
     * @type {Date}
     * @memberof DomainDto
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainDto
     */
    updatedAt: Date;
    /**
     * Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.
     * @type {string}
     * @memberof DomainDto
     */
    domainType: DomainDtoDomainTypeEnum;
}
/**
 * @export
 * @enum {string}
 */
export declare enum DomainDtoDomainTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_DOMAIN = "SMTP_DOMAIN"
}
export declare function DomainDtoFromJSON(json: any): DomainDto;
export declare function DomainDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDto;
export declare function DomainDtoToJSON(value?: DomainDto | null): any;

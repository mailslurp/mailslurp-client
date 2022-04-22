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
 * Options for creating a domain to use with MailSlurp. You must have ownership access to this domain in order to verify it. Domains will not function correctly until the domain has been verified. See https://www.mailslurp.com/guides/custom-domains for help. Domains can be either `HTTP` or `SMTP` type. The type of domain determines which inboxes can be used with it. `SMTP` inboxes use a mail server running `mx.mailslurp.com` while `HTTP` inboxes are handled by AWS SES.
 * @export
 * @interface CreateDomainOptions
 */
export interface CreateDomainOptions {
    /**
     * The top level domain you wish to use with MailSlurp. Do not specify subdomain just the top level. So `test.com` covers all subdomains such as `mail.test.com`. Don't include a protocol such as `http://`. Once added you must complete the verification steps by adding the returned records to your domain.
     * @type {string}
     * @memberof CreateDomainOptions
     */
    domain: string;
    /**
     * Optional description of the domain.
     * @type {string}
     * @memberof CreateDomainOptions
     */
    description?: string;
    /**
     * Whether to create a catch all inbox for the domain. Any email sent to an address using your domain that cannot be matched to an existing inbox you created with the domain will be routed to the created catch all inbox. You can access emails using the regular methods on this inbox ID.
     * @type {boolean}
     * @memberof CreateDomainOptions
     */
    createdCatchAllInbox?: boolean;
    /**
     * Type of domain. Dictates type of inbox that can be created with domain. HTTP means inboxes are processed using SES while SMTP inboxes use a custom SMTP mail server. SMTP does not support sending so use HTTP for sending emails.
     * @type {string}
     * @memberof CreateDomainOptions
     */
    domainType?: CreateDomainOptionsDomainTypeEnum;
}
/**
 * @export
 * @enum {string}
 */
export declare enum CreateDomainOptionsDomainTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_DOMAIN = "SMTP_DOMAIN"
}
export declare function CreateDomainOptionsFromJSON(json: any): CreateDomainOptions;
export declare function CreateDomainOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDomainOptions;
export declare function CreateDomainOptionsToJSON(value?: CreateDomainOptions | null): any;

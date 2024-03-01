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
 * @interface SearchInboxesOptions
 */
export interface SearchInboxesOptions {
    /**
     * Optional page index in list pagination
     * @type {number}
     * @memberof SearchInboxesOptions
     */
    pageIndex?: number | null;
    /**
     * Optional page size in list pagination
     * @type {number}
     * @memberof SearchInboxesOptions
     */
    pageSize?: number | null;
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type {string}
     * @memberof SearchInboxesOptions
     */
    sortDirection?: SearchInboxesOptionsSortDirectionEnum;
    /**
     * Optionally filter results for favourites only
     * @type {boolean}
     * @memberof SearchInboxesOptions
     */
    favourite?: boolean | null;
    /**
     * Optionally filter by search words partial matching ID, tags, name, and email address
     * @type {string}
     * @memberof SearchInboxesOptions
     */
    search?: string | null;
    /**
     * Optionally filter by tags. Will return inboxes that include given tags
     * @type {string}
     * @memberof SearchInboxesOptions
     */
    tag?: string | null;
    /**
     * Optional filter by created after given date time
     * @type {Date}
     * @memberof SearchInboxesOptions
     */
    since?: Date | null;
    /**
     * Optional filter by created before given date time
     * @type {Date}
     * @memberof SearchInboxesOptions
     */
    before?: Date | null;
    /**
     * Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).
     * @type {string}
     * @memberof SearchInboxesOptions
     */
    inboxType?: SearchInboxesOptionsInboxTypeEnum;
    /**
     * Optional filter by inbox function
     * @type {string}
     * @memberof SearchInboxesOptions
     */
    inboxFunction?: SearchInboxesOptionsInboxFunctionEnum;
    /**
     * Optional domain ID filter
     * @type {string}
     * @memberof SearchInboxesOptions
     */
    domainId?: string | null;
}
/**
 * @export
 * @enum {string}
 */
export declare enum SearchInboxesOptionsSortDirectionEnum {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * @export
 * @enum {string}
 */
export declare enum SearchInboxesOptionsInboxTypeEnum {
    HTTP_INBOX = "HTTP_INBOX",
    SMTP_INBOX = "SMTP_INBOX"
}
/**
 * @export
 * @enum {string}
 */
export declare enum SearchInboxesOptionsInboxFunctionEnum {
    ALIAS = "ALIAS",
    THREAD = "THREAD",
    CATCH_ALL = "CATCH_ALL",
    CONNECTOR = "CONNECTOR"
}
export declare function SearchInboxesOptionsFromJSON(json: any): SearchInboxesOptions;
export declare function SearchInboxesOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchInboxesOptions;
export declare function SearchInboxesOptionsToJSON(value?: SearchInboxesOptions | null): any;

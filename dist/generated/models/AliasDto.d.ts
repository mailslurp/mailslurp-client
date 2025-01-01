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
 * Email alias representation
 * @export
 * @interface AliasDto
 */
export interface AliasDto {
    /**
     *
     * @type {string}
     * @memberof AliasDto
     */
    id: string;
    /**
     * The alias's email address for receiving email
     * @type {string}
     * @memberof AliasDto
     */
    emailAddress: string;
    /**
     * The underlying email address that is hidden and will received forwarded email
     * @type {string}
     * @memberof AliasDto
     */
    maskedEmailAddress?: string | null;
    /**
     *
     * @type {string}
     * @memberof AliasDto
     */
    userId: string;
    /**
     * Inbox that is associated with the alias
     * @type {string}
     * @memberof AliasDto
     */
    inboxId: string;
    /**
     *
     * @type {string}
     * @memberof AliasDto
     */
    name?: string | null;
    /**
     * If alias will generate response threads or not when email are received by it
     * @type {boolean}
     * @memberof AliasDto
     */
    useThreads?: boolean | null;
    /**
     * Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account
     * @type {boolean}
     * @memberof AliasDto
     */
    isVerified: boolean;
    /**
     * Domain ID associated with the alias
     * @type {string}
     * @memberof AliasDto
     */
    domainId?: string | null;
    /**
     *
     * @type {Date}
     * @memberof AliasDto
     */
    createdAt?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof AliasDto
     */
    updatedAt?: Date | null;
}
export declare function AliasDtoFromJSON(json: any): AliasDto;
export declare function AliasDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasDto;
export declare function AliasDtoToJSON(value?: AliasDto | null): any;

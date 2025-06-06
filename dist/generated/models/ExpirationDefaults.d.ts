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
 * Expiration defaults for your account
 * @export
 * @interface ExpirationDefaults
 */
export interface ExpirationDefaults {
    /**
     *
     * @type {number}
     * @memberof ExpirationDefaults
     */
    defaultExpirationMillis?: number | null;
    /**
     *
     * @type {number}
     * @memberof ExpirationDefaults
     */
    maxExpirationMillis?: number | null;
    /**
     *
     * @type {Date}
     * @memberof ExpirationDefaults
     */
    defaultExpiresAt?: Date | null;
    /**
     *
     * @type {boolean}
     * @memberof ExpirationDefaults
     */
    canPermanentInbox: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ExpirationDefaults
     */
    nextInboxAllowsPermanent: boolean;
}
export declare function ExpirationDefaultsFromJSON(json: any): ExpirationDefaults;
export declare function ExpirationDefaultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpirationDefaults;
export declare function ExpirationDefaultsToJSON(value?: ExpirationDefaults | null): any;

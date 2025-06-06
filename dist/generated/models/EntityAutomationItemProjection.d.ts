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
 * @interface EntityAutomationItemProjection
 */
export interface EntityAutomationItemProjection {
    /**
     *
     * @type {string}
     * @memberof EntityAutomationItemProjection
     */
    inboxId?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAutomationItemProjection
     */
    phoneId?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAutomationItemProjection
     */
    action?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAutomationItemProjection
     */
    automationType: EntityAutomationItemProjectionAutomationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof EntityAutomationItemProjection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EntityAutomationItemProjection
     */
    id: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum EntityAutomationItemProjectionAutomationTypeEnum {
    FORWARDER = "INBOX_FORWARDER",
    REPLIER = "INBOX_REPLIER",
    RULESET = "INBOX_RULESET"
}
export declare function EntityAutomationItemProjectionFromJSON(json: any): EntityAutomationItemProjection;
export declare function EntityAutomationItemProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityAutomationItemProjection;
export declare function EntityAutomationItemProjectionToJSON(value?: EntityAutomationItemProjection | null): any;

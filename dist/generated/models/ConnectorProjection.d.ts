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
 * Connector
 * @export
 * @interface ConnectorProjection
 */
export interface ConnectorProjection {
    /**
     *
     * @type {boolean}
     * @memberof ConnectorProjection
     */
    enabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof ConnectorProjection
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorProjection
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorProjection
     */
    inboxId: string;
    /**
     *
     * @type {boolean}
     * @memberof ConnectorProjection
     */
    syncEnabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof ConnectorProjection
     */
    syncScheduleType: ConnectorProjectionSyncScheduleTypeEnum;
    /**
     *
     * @type {number}
     * @memberof ConnectorProjection
     */
    syncInterval?: number;
    /**
     *
     * @type {Date}
     * @memberof ConnectorProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof ConnectorProjection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorProjection
     */
    id?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum ConnectorProjectionSyncScheduleTypeEnum {
    INTERVAL = "INTERVAL"
}
export declare function ConnectorProjectionFromJSON(json: any): ConnectorProjection;
export declare function ConnectorProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorProjection;
export declare function ConnectorProjectionToJSON(value?: ConnectorProjection | null): any;

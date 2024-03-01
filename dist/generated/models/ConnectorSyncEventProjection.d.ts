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
 * ConnectorSyncEventProjection
 * @export
 * @interface ConnectorSyncEventProjection
 */
export interface ConnectorSyncEventProjection {
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventProjection
     */
    connectorId: string;
    /**
     *
     * @type {number}
     * @memberof ConnectorSyncEventProjection
     */
    syncCount: number;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventProjection
     */
    syncStatus: ConnectorSyncEventProjectionSyncStatusEnum;
    /**
     *
     * @type {Date}
     * @memberof ConnectorSyncEventProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventProjection
     */
    message?: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventProjection
     */
    id?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum ConnectorSyncEventProjectionSyncStatusEnum {
    SUCCESS = "SUCCESS",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    SUBSCRIPTION_ERROR = "SUBSCRIPTION_ERROR",
    CONNECTION_ERROR = "CONNECTION_ERROR",
    NOT_FOUND = "NOT_FOUND"
}
export declare function ConnectorSyncEventProjectionFromJSON(json: any): ConnectorSyncEventProjection;
export declare function ConnectorSyncEventProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorSyncEventProjection;
export declare function ConnectorSyncEventProjectionToJSON(value?: ConnectorSyncEventProjection | null): any;

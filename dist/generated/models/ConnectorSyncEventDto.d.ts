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
 * @interface ConnectorSyncEventDto
 */
export interface ConnectorSyncEventDto {
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventDto
     */
    connectorId: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventDto
     */
    syncStatus: ConnectorSyncEventDtoSyncStatusEnum;
    /**
     *
     * @type {number}
     * @memberof ConnectorSyncEventDto
     */
    syncCount: number;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncEventDto
     */
    message?: string;
    /**
     *
     * @type {Date}
     * @memberof ConnectorSyncEventDto
     */
    createdAt: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum ConnectorSyncEventDtoSyncStatusEnum {
    SUCCESS = "SUCCESS",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    SUBSCRIPTION_ERROR = "SUBSCRIPTION_ERROR",
    CONNECTION_ERROR = "CONNECTION_ERROR",
    NOT_FOUND = "NOT_FOUND"
}
export declare function ConnectorSyncEventDtoFromJSON(json: any): ConnectorSyncEventDto;
export declare function ConnectorSyncEventDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorSyncEventDto;
export declare function ConnectorSyncEventDtoToJSON(value?: ConnectorSyncEventDto | null): any;
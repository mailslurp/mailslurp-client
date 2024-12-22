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
 * @interface ConnectorSyncSettingsDto
 */
export interface ConnectorSyncSettingsDto {
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncSettingsDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncSettingsDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncSettingsDto
     */
    connectorId: string;
    /**
     *
     * @type {boolean}
     * @memberof ConnectorSyncSettingsDto
     */
    syncEnabled: boolean;
    /**
     *
     * @type {string}
     * @memberof ConnectorSyncSettingsDto
     */
    syncScheduleType?: ConnectorSyncSettingsDtoSyncScheduleTypeEnum | null;
    /**
     *
     * @type {number}
     * @memberof ConnectorSyncSettingsDto
     */
    syncInterval?: number | null;
}
/**
 * @export
 */
export declare const ConnectorSyncSettingsDtoSyncScheduleTypeEnum: {
    readonly INTERVAL: "INTERVAL";
};
export type ConnectorSyncSettingsDtoSyncScheduleTypeEnum = typeof ConnectorSyncSettingsDtoSyncScheduleTypeEnum[keyof typeof ConnectorSyncSettingsDtoSyncScheduleTypeEnum];
/**
 * Check if a given object implements the ConnectorSyncSettingsDto interface.
 */
export declare function instanceOfConnectorSyncSettingsDto(value: object): value is ConnectorSyncSettingsDto;
export declare function ConnectorSyncSettingsDtoFromJSON(json: any): ConnectorSyncSettingsDto;
export declare function ConnectorSyncSettingsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorSyncSettingsDto;
export declare function ConnectorSyncSettingsDtoToJSON(json: any): ConnectorSyncSettingsDto;
export declare function ConnectorSyncSettingsDtoToJSONTyped(value?: ConnectorSyncSettingsDto | null, ignoreDiscriminator?: boolean): any;

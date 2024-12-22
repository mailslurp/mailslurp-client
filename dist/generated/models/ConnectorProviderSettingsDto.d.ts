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
import type { ProviderSettings } from './ProviderSettings';
/**
 *
 * @export
 * @interface ConnectorProviderSettingsDto
 */
export interface ConnectorProviderSettingsDto {
    /**
     *
     * @type {ProviderSettings}
     * @memberof ConnectorProviderSettingsDto
     */
    googleSettings: ProviderSettings;
    /**
     *
     * @type {ProviderSettings}
     * @memberof ConnectorProviderSettingsDto
     */
    microsoftSettings: ProviderSettings;
}
/**
 * Check if a given object implements the ConnectorProviderSettingsDto interface.
 */
export declare function instanceOfConnectorProviderSettingsDto(value: object): value is ConnectorProviderSettingsDto;
export declare function ConnectorProviderSettingsDtoFromJSON(json: any): ConnectorProviderSettingsDto;
export declare function ConnectorProviderSettingsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorProviderSettingsDto;
export declare function ConnectorProviderSettingsDtoToJSON(json: any): ConnectorProviderSettingsDto;
export declare function ConnectorProviderSettingsDtoToJSONTyped(value?: ConnectorProviderSettingsDto | null, ignoreDiscriminator?: boolean): any;

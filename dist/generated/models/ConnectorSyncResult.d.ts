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
 * @interface ConnectorSyncResult
 */
export interface ConnectorSyncResult {
    /**
     *
     * @type {number}
     * @memberof ConnectorSyncResult
     */
    emailSyncCount: number;
    /**
     *
     * @type {Array<string>}
     * @memberof ConnectorSyncResult
     */
    logs?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ConnectorSyncResult
     */
    emailIds?: Array<string>;
}
/**
 * Check if a given object implements the ConnectorSyncResult interface.
 */
export declare function instanceOfConnectorSyncResult(value: object): value is ConnectorSyncResult;
export declare function ConnectorSyncResultFromJSON(json: any): ConnectorSyncResult;
export declare function ConnectorSyncResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorSyncResult;
export declare function ConnectorSyncResultToJSON(json: any): ConnectorSyncResult;
export declare function ConnectorSyncResultToJSONTyped(value?: ConnectorSyncResult | null, ignoreDiscriminator?: boolean): any;

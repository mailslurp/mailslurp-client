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
 * @interface ConnectorDto
 */
export interface ConnectorDto {
    /**
     *
     * @type {string}
     * @memberof ConnectorDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorDto
     */
    name?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof ConnectorDto
     */
    enabled: boolean;
    /**
     *
     * @type {string}
     * @memberof ConnectorDto
     */
    emailAddress?: string | null;
    /**
     *
     * @type {string}
     * @memberof ConnectorDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof ConnectorDto
     */
    inboxId: string;
    /**
     *
     * @type {Date}
     * @memberof ConnectorDto
     */
    createdAt: Date;
}
export declare function ConnectorDtoFromJSON(json: any): ConnectorDto;
export declare function ConnectorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorDto;
export declare function ConnectorDtoToJSON(value?: ConnectorDto | null): any;

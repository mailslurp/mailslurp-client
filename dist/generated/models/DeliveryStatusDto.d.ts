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
 * @interface DeliveryStatusDto
 */
export interface DeliveryStatusDto {
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    sentId?: string;
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    remoteMtaIp?: string;
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    inboxId?: string;
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    reportingMta?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DeliveryStatusDto
     */
    recipients?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    smtpResponse?: string;
    /**
     *
     * @type {number}
     * @memberof DeliveryStatusDto
     */
    smtpStatusCode?: number;
    /**
     *
     * @type {number}
     * @memberof DeliveryStatusDto
     */
    processingTimeMillis?: number;
    /**
     *
     * @type {Date}
     * @memberof DeliveryStatusDto
     */
    received?: Date;
    /**
     *
     * @type {string}
     * @memberof DeliveryStatusDto
     */
    subject?: string;
    /**
     *
     * @type {Date}
     * @memberof DeliveryStatusDto
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof DeliveryStatusDto
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the DeliveryStatusDto interface.
 */
export declare function instanceOfDeliveryStatusDto(value: object): value is DeliveryStatusDto;
export declare function DeliveryStatusDtoFromJSON(json: any): DeliveryStatusDto;
export declare function DeliveryStatusDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryStatusDto;
export declare function DeliveryStatusDtoToJSON(json: any): DeliveryStatusDto;
export declare function DeliveryStatusDtoToJSONTyped(value?: DeliveryStatusDto | null, ignoreDiscriminator?: boolean): any;

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
 * @interface EmergencyAddress
 */
export interface EmergencyAddress {
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    sid: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    customerName: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    address1: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    city: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    region: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    postalCode: string;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    phoneCountry: EmergencyAddressPhoneCountryEnum;
    /**
     *
     * @type {string}
     * @memberof EmergencyAddress
     */
    accountSid: string;
    /**
     *
     * @type {Date}
     * @memberof EmergencyAddress
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof EmergencyAddress
     */
    updatedAt: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum EmergencyAddressPhoneCountryEnum {
    US = "US",
    GB = "GB"
}
export declare function EmergencyAddressFromJSON(json: any): EmergencyAddress;
export declare function EmergencyAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmergencyAddress;
export declare function EmergencyAddressToJSON(value?: EmergencyAddress | null): any;

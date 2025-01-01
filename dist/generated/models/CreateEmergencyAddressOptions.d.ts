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
 * @interface CreateEmergencyAddressOptions
 */
export interface CreateEmergencyAddressOptions {
    /**
     *
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    customerName: string;
    /**
     *
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    address1: string;
    /**
     *
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    city: string;
    /**
     *
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    region: string;
    /**
     *
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    postalCode: string;
    /**
     *
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    isoCountryCode: CreateEmergencyAddressOptionsIsoCountryCodeEnum;
    /**
     *
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    displayName?: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum CreateEmergencyAddressOptionsIsoCountryCodeEnum {
    US = "US",
    GB = "GB",
    AU = "AU"
}
export declare function CreateEmergencyAddressOptionsFromJSON(json: any): CreateEmergencyAddressOptions;
export declare function CreateEmergencyAddressOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmergencyAddressOptions;
export declare function CreateEmergencyAddressOptionsToJSON(value?: CreateEmergencyAddressOptions | null): any;

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
 * Phone number projection
 * @export
 * @interface PhoneNumberProjection
 */
export interface PhoneNumberProjection {
    /**
     *
     * @type {string}
     * @memberof PhoneNumberProjection
     */
    userId: string;
    /**
     *
     * @type {Date}
     * @memberof PhoneNumberProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberProjection
     */
    phoneNumber: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberProjection
     */
    phoneCountry: PhoneNumberProjectionPhoneCountryEnum;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberProjection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberProjection
     */
    id: string;
}
/**
 * @export
 * @enum {string}
 */
export declare enum PhoneNumberProjectionPhoneCountryEnum {
    US = "US",
    GB = "GB",
    AU = "AU",
    CA = "CA",
    EE = "EE",
    HK = "HK",
    PL = "PL",
    CH = "CH",
    PT = "PT",
    NL = "NL",
    IL = "IL",
    SE = "SE"
}
export declare function PhoneNumberProjectionFromJSON(json: any): PhoneNumberProjection;
export declare function PhoneNumberProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumberProjection;
export declare function PhoneNumberProjectionToJSON(value?: PhoneNumberProjection | null): any;

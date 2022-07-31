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
 * @interface PhoneNumberDto
 */
export interface PhoneNumberDto {
    /**
     *
     * @type {string}
     * @memberof PhoneNumberDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberDto
     */
    complianceAddress?: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberDto
     */
    emergencyAddress?: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberDto
     */
    phoneNumber: string;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberDto
     */
    phoneCountry: PhoneNumberDtoPhoneCountryEnum;
    /**
     *
     * @type {string}
     * @memberof PhoneNumberDto
     */
    phonePlan: string;
    /**
     *
     * @type {Date}
     * @memberof PhoneNumberDto
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof PhoneNumberDto
     */
    updatedAt: Date;
}
/**
 * @export
 * @enum {string}
 */
export declare enum PhoneNumberDtoPhoneCountryEnum {
    US = "US",
    GB = "GB"
}
export declare function PhoneNumberDtoFromJSON(json: any): PhoneNumberDto;
export declare function PhoneNumberDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumberDto;
export declare function PhoneNumberDtoToJSON(value?: PhoneNumberDto | null): any;
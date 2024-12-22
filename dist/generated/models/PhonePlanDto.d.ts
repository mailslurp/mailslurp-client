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
 * @interface PhonePlanDto
 */
export interface PhonePlanDto {
    /**
     *
     * @type {string}
     * @memberof PhonePlanDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof PhonePlanDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof PhonePlanDto
     */
    phoneCountry: PhonePlanDtoPhoneCountryEnum;
    /**
     *
     * @type {Date}
     * @memberof PhonePlanDto
     */
    createdAt: Date;
}
/**
 * @export
 */
export declare const PhonePlanDtoPhoneCountryEnum: {
    readonly US: "US";
    readonly GB: "GB";
    readonly AU: "AU";
};
export type PhonePlanDtoPhoneCountryEnum = typeof PhonePlanDtoPhoneCountryEnum[keyof typeof PhonePlanDtoPhoneCountryEnum];
/**
 * Check if a given object implements the PhonePlanDto interface.
 */
export declare function instanceOfPhonePlanDto(value: object): value is PhonePlanDto;
export declare function PhonePlanDtoFromJSON(json: any): PhonePlanDto;
export declare function PhonePlanDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhonePlanDto;
export declare function PhonePlanDtoToJSON(json: any): PhonePlanDto;
export declare function PhonePlanDtoToJSONTyped(value?: PhonePlanDto | null, ignoreDiscriminator?: boolean): any;

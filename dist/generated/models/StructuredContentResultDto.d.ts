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
 * @interface StructuredContentResultDto
 */
export interface StructuredContentResultDto {
    /**
     *
     * @type {object}
     * @memberof StructuredContentResultDto
     */
    result: object;
}
export declare function StructuredContentResultDtoFromJSON(json: any): StructuredContentResultDto;
export declare function StructuredContentResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructuredContentResultDto;
export declare function StructuredContentResultDtoToJSON(value?: StructuredContentResultDto | null): any;

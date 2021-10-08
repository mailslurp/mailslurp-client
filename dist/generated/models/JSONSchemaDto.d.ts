/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface JSONSchemaDto
 */
export interface JSONSchemaDto {
    /**
     *
     * @type {string}
     * @memberof JSONSchemaDto
     */
    value: string;
}
export declare function JSONSchemaDtoFromJSON(json: any): JSONSchemaDto;
export declare function JSONSchemaDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): JSONSchemaDto;
export declare function JSONSchemaDtoToJSON(value?: JSONSchemaDto | null): any;
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
 * @interface TemplateProjection
 */
export interface TemplateProjection {
    /**
     *
     * @type {string}
     * @memberof TemplateProjection
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof TemplateProjection
     */
    id: string;
    /**
     *
     * @type {Date}
     * @memberof TemplateProjection
     */
    createdAt: Date;
    /**
     *
     * @type {Set<string>}
     * @memberof TemplateProjection
     */
    variables: Set<string>;
    /**
     *
     * @type {Date}
     * @memberof TemplateProjection
     */
    updatedAt: Date;
}
export declare function TemplateProjectionFromJSON(json: any): TemplateProjection;
export declare function TemplateProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateProjection;
export declare function TemplateProjectionToJSON(value?: TemplateProjection | null): any;

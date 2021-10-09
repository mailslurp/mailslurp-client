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
import { TemplateVariable } from './';
/**
 *
 * @export
 * @interface TemplateDto
 */
export interface TemplateDto {
    /**
     *
     * @type {string}
     * @memberof TemplateDto
     */
    content: string;
    /**
     *
     * @type {Date}
     * @memberof TemplateDto
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof TemplateDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof TemplateDto
     */
    name: string;
    /**
     *
     * @type {Array<TemplateVariable>}
     * @memberof TemplateDto
     */
    variables: Array<TemplateVariable>;
}
export declare function TemplateDtoFromJSON(json: any): TemplateDto;
export declare function TemplateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateDto;
export declare function TemplateDtoToJSON(value?: TemplateDto | null): any;

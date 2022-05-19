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
 * Create template options
 * @export
 * @interface CreateTemplateOptions
 */
export interface CreateTemplateOptions {
    /**
     * Name of template
     * @type {string}
     * @memberof CreateTemplateOptions
     */
    name: string;
    /**
     * Template content. Can include moustache style variables such as {{var_name}}
     * @type {string}
     * @memberof CreateTemplateOptions
     */
    content: string;
}
export declare function CreateTemplateOptionsFromJSON(json: any): CreateTemplateOptions;
export declare function CreateTemplateOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTemplateOptions;
export declare function CreateTemplateOptionsToJSON(value?: CreateTemplateOptions | null): any;

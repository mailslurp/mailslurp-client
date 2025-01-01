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
 * @interface CreatePortalOptions
 */
export interface CreatePortalOptions {
    /**
     *
     * @type {string}
     * @memberof CreatePortalOptions
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof CreatePortalOptions
     */
    domainId?: string;
    /**
     *
     * @type {string}
     * @memberof CreatePortalOptions
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof CreatePortalOptions
     */
    linkHelp?: string;
}
export declare function CreatePortalOptionsFromJSON(json: any): CreatePortalOptions;
export declare function CreatePortalOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePortalOptions;
export declare function CreatePortalOptionsToJSON(value?: CreatePortalOptions | null): any;
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
 * @interface SortObject
 */
export interface SortObject {
    /**
     *
     * @type {boolean}
     * @memberof SortObject
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SortObject
     */
    sorted?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SortObject
     */
    unsorted?: boolean;
}
export declare function SortObjectFromJSON(json: any): SortObject;
export declare function SortObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortObject;
export declare function SortObjectToJSON(value?: SortObject | null): any;
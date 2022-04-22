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
import { Sort } from './';
/**
 *
 * @export
 * @interface PageableObject
 */
export interface PageableObject {
    /**
     *
     * @type {number}
     * @memberof PageableObject
     */
    offset?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageableObject
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageableObject
     */
    pageNumber?: number;
    /**
     *
     * @type {number}
     * @memberof PageableObject
     */
    pageSize?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageableObject
     */
    paged?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageableObject
     */
    unpaged?: boolean;
}
export declare function PageableObjectFromJSON(json: any): PageableObject;
export declare function PageableObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageableObject;
export declare function PageableObjectToJSON(value?: PageableObject | null): any;

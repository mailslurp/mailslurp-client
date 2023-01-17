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
import { PageableObject, SmsProjection, Sort } from './';
/**
 * Paginated SMS messages. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageSmsProjection
 */
export interface PageSmsProjection {
    /**
     *
     * @type {Array<SmsProjection>}
     * @memberof PageSmsProjection
     */
    content?: Array<SmsProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageSmsProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageSmsProjection
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageSmsProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageSmsProjection
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageSmsProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageSmsProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageSmsProjection
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageSmsProjection
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageSmsProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageSmsProjection
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageSmsProjection
     */
    empty?: boolean;
}
export declare function PageSmsProjectionFromJSON(json: any): PageSmsProjection;
export declare function PageSmsProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageSmsProjection;
export declare function PageSmsProjectionToJSON(value?: PageSmsProjection | null): any;

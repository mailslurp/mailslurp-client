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
import { PageableObject, PhoneMessageThreadProjection, SortObject } from './';
/**
 * Paginated phone message threads. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PagePhoneMessageThreadProjection
 */
export interface PagePhoneMessageThreadProjection {
    /**
     *
     * @type {Array<PhoneMessageThreadProjection>}
     * @memberof PagePhoneMessageThreadProjection
     */
    content?: Array<PhoneMessageThreadProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PagePhoneMessageThreadProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PagePhoneMessageThreadProjection
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PagePhoneMessageThreadProjection
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PagePhoneMessageThreadProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PagePhoneMessageThreadProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PagePhoneMessageThreadProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PagePhoneMessageThreadProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PagePhoneMessageThreadProjection
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PagePhoneMessageThreadProjection
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PagePhoneMessageThreadProjection
     */
    empty?: boolean;
}
export declare function PagePhoneMessageThreadProjectionFromJSON(json: any): PagePhoneMessageThreadProjection;
export declare function PagePhoneMessageThreadProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagePhoneMessageThreadProjection;
export declare function PagePhoneMessageThreadProjectionToJSON(value?: PagePhoneMessageThreadProjection | null): any;

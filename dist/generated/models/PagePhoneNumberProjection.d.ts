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
import { PageableObject, PhoneNumberProjection, Sort } from './';
/**
 * Paginated phone numbers. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PagePhoneNumberProjection
 */
export interface PagePhoneNumberProjection {
    /**
     *
     * @type {Array<PhoneNumberProjection>}
     * @memberof PagePhoneNumberProjection
     */
    content?: Array<PhoneNumberProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PagePhoneNumberProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PagePhoneNumberProjection
     */
    total?: number;
    /**
     *
     * @type {boolean}
     * @memberof PagePhoneNumberProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PagePhoneNumberProjection
     */
    totalPages?: number;
    /**
     *
     * @type {number}
     * @memberof PagePhoneNumberProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PagePhoneNumberProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PagePhoneNumberProjection
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PagePhoneNumberProjection
     */
    sort?: Sort;
    /**
     *
     * @type {boolean}
     * @memberof PagePhoneNumberProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PagePhoneNumberProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PagePhoneNumberProjection
     */
    empty?: boolean;
}
export declare function PagePhoneNumberProjectionFromJSON(json: any): PagePhoneNumberProjection;
export declare function PagePhoneNumberProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagePhoneNumberProjection;
export declare function PagePhoneNumberProjectionToJSON(value?: PagePhoneNumberProjection | null): any;

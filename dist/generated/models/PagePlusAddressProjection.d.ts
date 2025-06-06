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
import { PageableObject, PlusAddressProjection, SortObject } from './';
/**
 * Paginated inbox plus addresses. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PagePlusAddressProjection
 */
export interface PagePlusAddressProjection {
    /**
     *
     * @type {Array<PlusAddressProjection>}
     * @memberof PagePlusAddressProjection
     */
    content?: Array<PlusAddressProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PagePlusAddressProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PagePlusAddressProjection
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PagePlusAddressProjection
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PagePlusAddressProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PagePlusAddressProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PagePlusAddressProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PagePlusAddressProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PagePlusAddressProjection
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PagePlusAddressProjection
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PagePlusAddressProjection
     */
    empty?: boolean;
}
export declare function PagePlusAddressProjectionFromJSON(json: any): PagePlusAddressProjection;
export declare function PagePlusAddressProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagePlusAddressProjection;
export declare function PagePlusAddressProjectionToJSON(value?: PagePlusAddressProjection | null): any;

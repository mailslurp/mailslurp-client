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
import { OrganizationInboxProjection, PageableObject, SortObject } from './';
/**
 * Paginated organization inbox results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageOrganizationInboxProjection
 */
export interface PageOrganizationInboxProjection {
    /**
     *
     * @type {Array<OrganizationInboxProjection>}
     * @memberof PageOrganizationInboxProjection
     */
    content?: Array<OrganizationInboxProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageOrganizationInboxProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageOrganizationInboxProjection
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PageOrganizationInboxProjection
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PageOrganizationInboxProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageOrganizationInboxProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageOrganizationInboxProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageOrganizationInboxProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageOrganizationInboxProjection
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageOrganizationInboxProjection
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageOrganizationInboxProjection
     */
    empty?: boolean;
}
export declare function PageOrganizationInboxProjectionFromJSON(json: any): PageOrganizationInboxProjection;
export declare function PageOrganizationInboxProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageOrganizationInboxProjection;
export declare function PageOrganizationInboxProjectionToJSON(value?: PageOrganizationInboxProjection | null): any;

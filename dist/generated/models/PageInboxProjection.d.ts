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
import type { PageableObject } from './PageableObject';
import type { InboxPreview } from './InboxPreview';
import type { SortObject } from './SortObject';
/**
 * Paginated inbox results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxProjection
 */
export interface PageInboxProjection {
    /**
     *
     * @type {Array<InboxPreview>}
     * @memberof PageInboxProjection
     */
    content?: Array<InboxPreview>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageInboxProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    totalElements: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    number?: number;
    /**
     *
     * @type {Array<SortObject>}
     * @memberof PageInboxProjection
     */
    sort?: Array<SortObject>;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxProjection
     */
    empty?: boolean;
}
/**
 * Check if a given object implements the PageInboxProjection interface.
 */
export declare function instanceOfPageInboxProjection(value: object): value is PageInboxProjection;
export declare function PageInboxProjectionFromJSON(json: any): PageInboxProjection;
export declare function PageInboxProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxProjection;
export declare function PageInboxProjectionToJSON(json: any): PageInboxProjection;
export declare function PageInboxProjectionToJSONTyped(value?: PageInboxProjection | null, ignoreDiscriminator?: boolean): any;

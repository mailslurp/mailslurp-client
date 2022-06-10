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
import { InboxPreview, PageableObject, Sort } from './';
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
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    totalPages?: number;
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
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxProjection
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageInboxProjection
     */
    sort?: Sort;
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
     * @type {boolean}
     * @memberof PageInboxProjection
     */
    empty?: boolean;
}
export declare function PageInboxProjectionFromJSON(json: any): PageInboxProjection;
export declare function PageInboxProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxProjection;
export declare function PageInboxProjectionToJSON(value?: PageInboxProjection | null): any;

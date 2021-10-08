/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Pageable, SentEmailProjection, Sort } from './';
/**
 * Paginated sent email results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full sent email entity use the projection ID with individual method calls.
 * @export
 * @interface PageSentEmailProjection
 */
export interface PageSentEmailProjection {
    /**
     * Collection of items
     * @type {Array<SentEmailProjection>}
     * @memberof PageSentEmailProjection
     */
    content?: Array<SentEmailProjection>;
    /**
     *
     * @type {boolean}
     * @memberof PageSentEmailProjection
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageSentEmailProjection
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageSentEmailProjection
     */
    last?: boolean;
    /**
     * Page number starting at 0
     * @type {number}
     * @memberof PageSentEmailProjection
     */
    number?: number;
    /**
     * Number of items returned
     * @type {number}
     * @memberof PageSentEmailProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {Pageable}
     * @memberof PageSentEmailProjection
     */
    pageable?: Pageable;
    /**
     * Size of page requested
     * @type {number}
     * @memberof PageSentEmailProjection
     */
    size?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageSentEmailProjection
     */
    sort?: Sort;
    /**
     * Total number of items available for querying
     * @type {number}
     * @memberof PageSentEmailProjection
     */
    totalElements?: number;
    /**
     * Total number of pages available
     * @type {number}
     * @memberof PageSentEmailProjection
     */
    totalPages?: number;
}
export declare function PageSentEmailProjectionFromJSON(json: any): PageSentEmailProjection;
export declare function PageSentEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageSentEmailProjection;
export declare function PageSentEmailProjectionToJSON(value?: PageSentEmailProjection | null): any;
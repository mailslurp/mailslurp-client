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
import type { SendWithQueueResult } from './SendWithQueueResult';
import type { SortObject } from './SortObject';
/**
 * Paginated sent email results for emails sent with queue. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full sent email entity use the projection ID with individual method calls.
 * @export
 * @interface PageSentEmailWithQueueProjection
 */
export interface PageSentEmailWithQueueProjection {
    /**
     *
     * @type {Array<SendWithQueueResult>}
     * @memberof PageSentEmailWithQueueProjection
     */
    content?: Array<SendWithQueueResult>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageSentEmailWithQueueProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageSentEmailWithQueueProjection
     */
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageSentEmailWithQueueProjection
     */
    totalElements: number;
    /**
     *
     * @type {boolean}
     * @memberof PageSentEmailWithQueueProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageSentEmailWithQueueProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageSentEmailWithQueueProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageSentEmailWithQueueProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageSentEmailWithQueueProjection
     */
    number?: number;
    /**
     *
     * @type {Array<SortObject>}
     * @memberof PageSentEmailWithQueueProjection
     */
    sort?: Array<SortObject>;
    /**
     *
     * @type {boolean}
     * @memberof PageSentEmailWithQueueProjection
     */
    empty?: boolean;
}
/**
 * Check if a given object implements the PageSentEmailWithQueueProjection interface.
 */
export declare function instanceOfPageSentEmailWithQueueProjection(value: object): value is PageSentEmailWithQueueProjection;
export declare function PageSentEmailWithQueueProjectionFromJSON(json: any): PageSentEmailWithQueueProjection;
export declare function PageSentEmailWithQueueProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageSentEmailWithQueueProjection;
export declare function PageSentEmailWithQueueProjectionToJSON(json: any): PageSentEmailWithQueueProjection;
export declare function PageSentEmailWithQueueProjectionToJSONTyped(value?: PageSentEmailWithQueueProjection | null, ignoreDiscriminator?: boolean): any;

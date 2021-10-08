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
import { Pageable, Sort, ThreadProjection } from './';
/**
 * Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.
 * @export
 * @interface PageThreadProjection
 */
export interface PageThreadProjection {
    /**
     *
     * @type {Array<ThreadProjection>}
     * @memberof PageThreadProjection
     */
    content?: Array<ThreadProjection>;
    /**
     *
     * @type {boolean}
     * @memberof PageThreadProjection
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageThreadProjection
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageThreadProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageThreadProjection
     */
    number?: number;
    /**
     *
     * @type {number}
     * @memberof PageThreadProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {Pageable}
     * @memberof PageThreadProjection
     */
    pageable?: Pageable;
    /**
     *
     * @type {number}
     * @memberof PageThreadProjection
     */
    size?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageThreadProjection
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageThreadProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageThreadProjection
     */
    totalPages?: number;
}
export declare function PageThreadProjectionFromJSON(json: any): PageThreadProjection;
export declare function PageThreadProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageThreadProjection;
export declare function PageThreadProjectionToJSON(value?: PageThreadProjection | null): any;
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
import { Pageable, Sort, TrackingPixelProjection } from './';
/**
 * Paginated TrackingPixel results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageTrackingPixelProjection
 */
export interface PageTrackingPixelProjection {
    /**
     *
     * @type {Array<TrackingPixelProjection>}
     * @memberof PageTrackingPixelProjection
     */
    content?: Array<TrackingPixelProjection>;
    /**
     *
     * @type {boolean}
     * @memberof PageTrackingPixelProjection
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageTrackingPixelProjection
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageTrackingPixelProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageTrackingPixelProjection
     */
    number?: number;
    /**
     *
     * @type {number}
     * @memberof PageTrackingPixelProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {Pageable}
     * @memberof PageTrackingPixelProjection
     */
    pageable?: Pageable;
    /**
     *
     * @type {number}
     * @memberof PageTrackingPixelProjection
     */
    size?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageTrackingPixelProjection
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageTrackingPixelProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageTrackingPixelProjection
     */
    totalPages?: number;
}
export declare function PageTrackingPixelProjectionFromJSON(json: any): PageTrackingPixelProjection;
export declare function PageTrackingPixelProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageTrackingPixelProjection;
export declare function PageTrackingPixelProjectionToJSON(value?: PageTrackingPixelProjection | null): any;
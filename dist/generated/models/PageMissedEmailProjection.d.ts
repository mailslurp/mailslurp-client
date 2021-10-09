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
import { MissedEmailProjection, Pageable, Sort } from './';
/**
 * Paginated MissedEmail results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageMissedEmailProjection
 */
export interface PageMissedEmailProjection {
    /**
     *
     * @type {Array<MissedEmailProjection>}
     * @memberof PageMissedEmailProjection
     */
    content?: Array<MissedEmailProjection>;
    /**
     *
     * @type {boolean}
     * @memberof PageMissedEmailProjection
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageMissedEmailProjection
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageMissedEmailProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    number?: number;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {Pageable}
     * @memberof PageMissedEmailProjection
     */
    pageable?: Pageable;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    size?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageMissedEmailProjection
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    totalPages?: number;
}
export declare function PageMissedEmailProjectionFromJSON(json: any): PageMissedEmailProjection;
export declare function PageMissedEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageMissedEmailProjection;
export declare function PageMissedEmailProjectionToJSON(value?: PageMissedEmailProjection | null): any;

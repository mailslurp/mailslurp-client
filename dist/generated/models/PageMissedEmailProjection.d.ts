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
import { MissedEmailProjection, PageableObject, SortObject } from './';
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
     * @type {PageableObject}
     * @memberof PageMissedEmailProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PageMissedEmailProjection
     */
    last?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageMissedEmailProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageMissedEmailProjection
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageMissedEmailProjection
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageMissedEmailProjection
     */
    empty?: boolean;
}
export declare function PageMissedEmailProjectionFromJSON(json: any): PageMissedEmailProjection;
export declare function PageMissedEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageMissedEmailProjection;
export declare function PageMissedEmailProjectionToJSON(value?: PageMissedEmailProjection | null): any;

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
import { PageableObject, Sort, UnknownMissedEmailProjection } from './';
/**
 * Paginated unknown MissedEmail results. Unknown missed emails are emails that were sent to MailSlurp /Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageUnknownMissedEmailProjection
 */
export interface PageUnknownMissedEmailProjection {
    /**
     *
     * @type {Array<UnknownMissedEmailProjection>}
     * @memberof PageUnknownMissedEmailProjection
     */
    content?: Array<UnknownMissedEmailProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageUnknownMissedEmailProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageUnknownMissedEmailProjection
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageUnknownMissedEmailProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageUnknownMissedEmailProjection
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageUnknownMissedEmailProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageUnknownMissedEmailProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageUnknownMissedEmailProjection
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageUnknownMissedEmailProjection
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageUnknownMissedEmailProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageUnknownMissedEmailProjection
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageUnknownMissedEmailProjection
     */
    empty?: boolean;
}
export declare function PageUnknownMissedEmailProjectionFromJSON(json: any): PageUnknownMissedEmailProjection;
export declare function PageUnknownMissedEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageUnknownMissedEmailProjection;
export declare function PageUnknownMissedEmailProjectionToJSON(value?: PageUnknownMissedEmailProjection | null): any;

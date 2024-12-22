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
import type { SortObject } from './SortObject';
import type { EmailProjection } from './EmailProjection';
/**
 * Paginated email projection results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full email entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.
 * @export
 * @interface PageEmailProjection
 */
export interface PageEmailProjection {
    /**
     *
     * @type {Array<EmailProjection>}
     * @memberof PageEmailProjection
     */
    content?: Array<EmailProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageEmailProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageEmailProjection
     */
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageEmailProjection
     */
    totalElements: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEmailProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEmailProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageEmailProjection
     */
    number?: number;
    /**
     *
     * @type {Array<SortObject>}
     * @memberof PageEmailProjection
     */
    sort?: Array<SortObject>;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailProjection
     */
    empty?: boolean;
}
/**
 * Check if a given object implements the PageEmailProjection interface.
 */
export declare function instanceOfPageEmailProjection(value: object): value is PageEmailProjection;
export declare function PageEmailProjectionFromJSON(json: any): PageEmailProjection;
export declare function PageEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageEmailProjection;
export declare function PageEmailProjectionToJSON(json: any): PageEmailProjection;
export declare function PageEmailProjectionToJSONTyped(value?: PageEmailProjection | null, ignoreDiscriminator?: boolean): any;

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
import { AITransformProjection, PageableObject, SortObject } from './';
/**
 * Paginated AI Transform entity. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageAITransformProjection
 */
export interface PageAITransformProjection {
    /**
     *
     * @type {Array<AITransformProjection>}
     * @memberof PageAITransformProjection
     */
    content?: Array<AITransformProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageAITransformProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageAITransformProjection
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PageAITransformProjection
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PageAITransformProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageAITransformProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageAITransformProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageAITransformProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageAITransformProjection
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageAITransformProjection
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageAITransformProjection
     */
    empty?: boolean;
}
export declare function PageAITransformProjectionFromJSON(json: any): PageAITransformProjection;
export declare function PageAITransformProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageAITransformProjection;
export declare function PageAITransformProjectionToJSON(value?: PageAITransformProjection | null): any;

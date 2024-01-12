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
import { PageableObject, SortObject, TemplateProjection } from './';
/**
 * Paginated email template results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageTemplateProjection
 */
export interface PageTemplateProjection {
    /**
     *
     * @type {Array<TemplateProjection>}
     * @memberof PageTemplateProjection
     */
    content?: Array<TemplateProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageTemplateProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageTemplateProjection
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageTemplateProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageTemplateProjection
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageTemplateProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageTemplateProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageTemplateProjection
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageTemplateProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageTemplateProjection
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageTemplateProjection
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageTemplateProjection
     */
    empty?: boolean;
}
export declare function PageTemplateProjectionFromJSON(json: any): PageTemplateProjection;
export declare function PageTemplateProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageTemplateProjection;
export declare function PageTemplateProjectionToJSON(value?: PageTemplateProjection | null): any;

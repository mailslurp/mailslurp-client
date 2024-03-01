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
import { AttachmentProjection, PageableObject, SortObject } from './';
/**
 * Paginated attachment entity results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageAttachmentEntity
 */
export interface PageAttachmentEntity {
    /**
     *
     * @type {Array<AttachmentProjection>}
     * @memberof PageAttachmentEntity
     */
    content?: Array<AttachmentProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageAttachmentEntity
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    totalElements: number;
    /**
     *
     * @type {boolean}
     * @memberof PageAttachmentEntity
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageAttachmentEntity
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageAttachmentEntity
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageAttachmentEntity
     */
    empty?: boolean;
}
export declare function PageAttachmentEntityFromJSON(json: any): PageAttachmentEntity;
export declare function PageAttachmentEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageAttachmentEntity;
export declare function PageAttachmentEntityToJSON(value?: PageAttachmentEntity | null): any;

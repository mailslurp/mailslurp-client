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
import { AttachmentProjection, Pageable, Sort } from './';
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
     * @type {boolean}
     * @memberof PageAttachmentEntity
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageAttachmentEntity
     */
    first?: boolean;
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
    number?: number;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    numberOfElements?: number;
    /**
     *
     * @type {Pageable}
     * @memberof PageAttachmentEntity
     */
    pageable?: Pageable;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    size?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageAttachmentEntity
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageAttachmentEntity
     */
    totalPages?: number;
}
export declare function PageAttachmentEntityFromJSON(json: any): PageAttachmentEntity;
export declare function PageAttachmentEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageAttachmentEntity;
export declare function PageAttachmentEntityToJSON(value?: PageAttachmentEntity | null): any;

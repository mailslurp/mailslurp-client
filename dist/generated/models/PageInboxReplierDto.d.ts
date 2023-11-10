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
import { InboxReplierDto, PageableObject, SortObject } from './';
/**
 * Paginated inbox replier results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxReplierDto
 */
export interface PageInboxReplierDto {
    /**
     *
     * @type {Array<InboxReplierDto>}
     * @memberof PageInboxReplierDto
     */
    content?: Array<InboxReplierDto>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageInboxReplierDto
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierDto
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierDto
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierDto
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxReplierDto
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierDto
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierDto
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageInboxReplierDto
     */
    sort?: SortObject;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierDto
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxReplierDto
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxReplierDto
     */
    empty?: boolean;
}
export declare function PageInboxReplierDtoFromJSON(json: any): PageInboxReplierDto;
export declare function PageInboxReplierDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxReplierDto;
export declare function PageInboxReplierDtoToJSON(value?: PageInboxReplierDto | null): any;

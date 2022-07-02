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
import { InboxForwarderDto, PageableObject, Sort } from './';
/**
 * Paginated inbox forwarder results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxForwarderDto
 */
export interface PageInboxForwarderDto {
    /**
     *
     * @type {Array<InboxForwarderDto>}
     * @memberof PageInboxForwarderDto
     */
    content?: Array<InboxForwarderDto>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageInboxForwarderDto
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderDto
     */
    total?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxForwarderDto
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderDto
     */
    totalPages?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderDto
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderDto
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderDto
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageInboxForwarderDto
     */
    sort?: Sort;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxForwarderDto
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderDto
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxForwarderDto
     */
    empty?: boolean;
}
export declare function PageInboxForwarderDtoFromJSON(json: any): PageInboxForwarderDto;
export declare function PageInboxForwarderDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxForwarderDto;
export declare function PageInboxForwarderDtoToJSON(value?: PageInboxForwarderDto | null): any;

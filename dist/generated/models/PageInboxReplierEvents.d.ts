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
import { InboxReplierEventProjection, PageableObject, SortObject } from './';
/**
 * Paginated inbox replier events. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxReplierEvents
 */
export interface PageInboxReplierEvents {
    /**
     *
     * @type {Array<InboxReplierEventProjection>}
     * @memberof PageInboxReplierEvents
     */
    content?: Array<InboxReplierEventProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageInboxReplierEvents
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierEvents
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierEvents
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxReplierEvents
     */
    last?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxReplierEvents
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierEvents
     */
    numberOfElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierEvents
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxReplierEvents
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageInboxReplierEvents
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxReplierEvents
     */
    empty?: boolean;
}
export declare function PageInboxReplierEventsFromJSON(json: any): PageInboxReplierEvents;
export declare function PageInboxReplierEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxReplierEvents;
export declare function PageInboxReplierEventsToJSON(value?: PageInboxReplierEvents | null): any;

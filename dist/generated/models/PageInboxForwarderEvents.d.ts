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
import { InboxForwarderEventProjection, PageableObject, SortObject } from './';
/**
 * Paginated inbox forwarder events. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxForwarderEvents
 */
export interface PageInboxForwarderEvents {
    /**
     *
     * @type {Array<InboxForwarderEventProjection>}
     * @memberof PageInboxForwarderEvents
     */
    content?: Array<InboxForwarderEventProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageInboxForwarderEvents
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderEvents
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderEvents
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxForwarderEvents
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderEvents
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxForwarderEvents
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderEvents
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxForwarderEvents
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageInboxForwarderEvents
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxForwarderEvents
     */
    empty?: boolean;
}
export declare function PageInboxForwarderEventsFromJSON(json: any): PageInboxForwarderEvents;
export declare function PageInboxForwarderEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxForwarderEvents;
export declare function PageInboxForwarderEventsToJSON(value?: PageInboxForwarderEvents | null): any;

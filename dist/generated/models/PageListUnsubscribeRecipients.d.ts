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
import { ListUnsubscribeRecipientProjection, PageableObject, SortObject } from './';
/**
 * Paginated list unsubscribe recipients. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageListUnsubscribeRecipients
 */
export interface PageListUnsubscribeRecipients {
    /**
     *
     * @type {Array<ListUnsubscribeRecipientProjection>}
     * @memberof PageListUnsubscribeRecipients
     */
    content?: Array<ListUnsubscribeRecipientProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageListUnsubscribeRecipients
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    totalElements: number;
    /**
     *
     * @type {boolean}
     * @memberof PageListUnsubscribeRecipients
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageListUnsubscribeRecipients
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageListUnsubscribeRecipients
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageListUnsubscribeRecipients
     */
    empty?: boolean;
}
export declare function PageListUnsubscribeRecipientsFromJSON(json: any): PageListUnsubscribeRecipients;
export declare function PageListUnsubscribeRecipientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageListUnsubscribeRecipients;
export declare function PageListUnsubscribeRecipientsToJSON(value?: PageListUnsubscribeRecipients | null): any;

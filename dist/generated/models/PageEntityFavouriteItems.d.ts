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
import { EntityFavouriteItemProjection, PageableObject, SortObject } from './';
/**
 * Paginated favourite items like inboxes, phones, sms, emails. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageEntityFavouriteItems
 */
export interface PageEntityFavouriteItems {
    /**
     *
     * @type {Array<EntityFavouriteItemProjection>}
     * @memberof PageEntityFavouriteItems
     */
    content?: Array<EntityFavouriteItemProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageEntityFavouriteItems
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageEntityFavouriteItems
     */
    totalElements: number;
    /**
     *
     * @type {number}
     * @memberof PageEntityFavouriteItems
     */
    totalPages: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEntityFavouriteItems
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEntityFavouriteItems
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEntityFavouriteItems
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEntityFavouriteItems
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageEntityFavouriteItems
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageEntityFavouriteItems
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageEntityFavouriteItems
     */
    empty?: boolean;
}
export declare function PageEntityFavouriteItemsFromJSON(json: any): PageEntityFavouriteItems;
export declare function PageEntityFavouriteItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageEntityFavouriteItems;
export declare function PageEntityFavouriteItemsToJSON(value?: PageEntityFavouriteItems | null): any;

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
import { BounceRecipientProjection, PageableObject, Sort } from './';
/**
 * Paginated bounced recipients. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageBouncedRecipients
 */
export interface PageBouncedRecipients {
    /**
     *
     * @type {Array<BounceRecipientProjection>}
     * @memberof PageBouncedRecipients
     */
    content?: Array<BounceRecipientProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageBouncedRecipients
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    total?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedRecipients
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    totalPages?: number;
    /**
     *
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageBouncedRecipients
     */
    sort?: Sort;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedRecipients
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedRecipients
     */
    empty?: boolean;
}
export declare function PageBouncedRecipientsFromJSON(json: any): PageBouncedRecipients;
export declare function PageBouncedRecipientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageBouncedRecipients;
export declare function PageBouncedRecipientsToJSON(value?: PageBouncedRecipients | null): any;

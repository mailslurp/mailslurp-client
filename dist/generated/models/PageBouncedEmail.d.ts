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
import { BounceProjection, Pageable, Sort } from './';
/**
 * Paginated bounced email. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageBouncedEmail
 */
export interface PageBouncedEmail {
    /**
     *
     * @type {Array<BounceProjection>}
     * @memberof PageBouncedEmail
     */
    content?: Array<BounceProjection>;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedEmail
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedEmail
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedEmail
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    number?: number;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    numberOfElements?: number;
    /**
     *
     * @type {Pageable}
     * @memberof PageBouncedEmail
     */
    pageable?: Pageable;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    size?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageBouncedEmail
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    totalPages?: number;
}
export declare function PageBouncedEmailFromJSON(json: any): PageBouncedEmail;
export declare function PageBouncedEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageBouncedEmail;
export declare function PageBouncedEmailToJSON(value?: PageBouncedEmail | null): any;

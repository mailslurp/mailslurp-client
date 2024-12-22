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
import type { PageableObject } from './PageableObject';
import type { SortObject } from './SortObject';
import type { BounceProjection } from './BounceProjection';
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
     * @type {PageableObject}
     * @memberof PageBouncedEmail
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    totalElements: number;
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
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedEmail
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageBouncedEmail
     */
    number?: number;
    /**
     *
     * @type {Array<SortObject>}
     * @memberof PageBouncedEmail
     */
    sort?: Array<SortObject>;
    /**
     *
     * @type {boolean}
     * @memberof PageBouncedEmail
     */
    empty?: boolean;
}
/**
 * Check if a given object implements the PageBouncedEmail interface.
 */
export declare function instanceOfPageBouncedEmail(value: object): value is PageBouncedEmail;
export declare function PageBouncedEmailFromJSON(json: any): PageBouncedEmail;
export declare function PageBouncedEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageBouncedEmail;
export declare function PageBouncedEmailToJSON(json: any): PageBouncedEmail;
export declare function PageBouncedEmailToJSONTyped(value?: PageBouncedEmail | null, ignoreDiscriminator?: boolean): any;

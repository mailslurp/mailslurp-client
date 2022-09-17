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
import { PageableObject, Sort, WebhookResultDto } from './';
/**
 * Paginated webhook results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageWebhookResult
 */
export interface PageWebhookResult {
    /**
     *
     * @type {Array<WebhookResultDto>}
     * @memberof PageWebhookResult
     */
    content?: Array<WebhookResultDto>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageWebhookResult
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageWebhookResult
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageWebhookResult
     */
    totalPages?: number;
    /**
     *
     * @type {number}
     * @memberof PageWebhookResult
     */
    totalElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageWebhookResult
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageWebhookResult
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageWebhookResult
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageWebhookResult
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageWebhookResult
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageWebhookResult
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageWebhookResult
     */
    empty?: boolean;
}
export declare function PageWebhookResultFromJSON(json: any): PageWebhookResult;
export declare function PageWebhookResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageWebhookResult;
export declare function PageWebhookResultToJSON(value?: PageWebhookResult | null): any;

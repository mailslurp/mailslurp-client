/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PageableObject, Sort, WebhookProjection } from './';
/**
 * Paginated webhook entity. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageWebhookProjection
 */
export interface PageWebhookProjection {
    /**
     *
     * @type {Array<WebhookProjection>}
     * @memberof PageWebhookProjection
     */
    content?: Array<WebhookProjection>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageWebhookProjection
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageWebhookProjection
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageWebhookProjection
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageWebhookProjection
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageWebhookProjection
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageWebhookProjection
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageWebhookProjection
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageWebhookProjection
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageWebhookProjection
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageWebhookProjection
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageWebhookProjection
     */
    empty?: boolean;
}
export declare function PageWebhookProjectionFromJSON(json: any): PageWebhookProjection;
export declare function PageWebhookProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageWebhookProjection;
export declare function PageWebhookProjectionToJSON(value?: PageWebhookProjection | null): any;

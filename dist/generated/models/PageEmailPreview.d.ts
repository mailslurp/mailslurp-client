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
import { EmailPreview, PageableObject, SortObject } from './';
/**
 * Paginated email preview results. EmailProjections and EmailPreviews are essentially the same but have legacy naming issues. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls. For emails there are several methods for fetching message bodies and attachments.
 * @export
 * @interface PageEmailPreview
 */
export interface PageEmailPreview {
    /**
     *
     * @type {Array<EmailPreview>}
     * @memberof PageEmailPreview
     */
    content?: Array<EmailPreview>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageEmailPreview
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageEmailPreview
     */
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageEmailPreview
     */
    totalElements: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailPreview
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEmailPreview
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailPreview
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEmailPreview
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageEmailPreview
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageEmailPreview
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailPreview
     */
    empty?: boolean;
}
export declare function PageEmailPreviewFromJSON(json: any): PageEmailPreview;
export declare function PageEmailPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageEmailPreview;
export declare function PageEmailPreviewToJSON(value?: PageEmailPreview | null): any;

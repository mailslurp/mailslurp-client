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
import { EmailValidationRequestDto, PageableObject, SortObject } from './';
/**
 * Paginated email validation request records. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageEmailValidationRequest
 */
export interface PageEmailValidationRequest {
    /**
     *
     * @type {Array<EmailValidationRequestDto>}
     * @memberof PageEmailValidationRequest
     */
    content?: Array<EmailValidationRequestDto>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageEmailValidationRequest
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageEmailValidationRequest
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageEmailValidationRequest
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageEmailValidationRequest
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailValidationRequest
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEmailValidationRequest
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailValidationRequest
     */
    first?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageEmailValidationRequest
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageEmailValidationRequest
     */
    number?: number;
    /**
     *
     * @type {SortObject}
     * @memberof PageEmailValidationRequest
     */
    sort?: SortObject;
    /**
     *
     * @type {boolean}
     * @memberof PageEmailValidationRequest
     */
    empty?: boolean;
}
export declare function PageEmailValidationRequestFromJSON(json: any): PageEmailValidationRequest;
export declare function PageEmailValidationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageEmailValidationRequest;
export declare function PageEmailValidationRequestToJSON(value?: PageEmailValidationRequest | null): any;

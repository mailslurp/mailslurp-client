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
import { InboxRulesetDto, Pageable, Sort } from './';
/**
 * Paginated inbox ruleset results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxRulesetDto
 */
export interface PageInboxRulesetDto {
    /**
     *
     * @type {Array<InboxRulesetDto>}
     * @memberof PageInboxRulesetDto
     */
    content?: Array<InboxRulesetDto>;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxRulesetDto
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxRulesetDto
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageInboxRulesetDto
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    number?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    numberOfElements?: number;
    /**
     *
     * @type {Pageable}
     * @memberof PageInboxRulesetDto
     */
    pageable?: Pageable;
    /**
     *
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    size?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageInboxRulesetDto
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    totalPages?: number;
}
export declare function PageInboxRulesetDtoFromJSON(json: any): PageInboxRulesetDto;
export declare function PageInboxRulesetDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxRulesetDto;
export declare function PageInboxRulesetDtoToJSON(value?: PageInboxRulesetDto | null): any;
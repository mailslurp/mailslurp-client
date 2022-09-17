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
import { Complaint, PageableObject, Sort } from './';
/**
 * Paginated complaint email. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageComplaint
 */
export interface PageComplaint {
    /**
     *
     * @type {Array<Complaint>}
     * @memberof PageComplaint
     */
    content?: Array<Complaint>;
    /**
     *
     * @type {PageableObject}
     * @memberof PageComplaint
     */
    pageable?: PageableObject;
    /**
     *
     * @type {number}
     * @memberof PageComplaint
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageComplaint
     */
    totalPages?: number;
    /**
     *
     * @type {number}
     * @memberof PageComplaint
     */
    totalElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageComplaint
     */
    last?: boolean;
    /**
     *
     * @type {number}
     * @memberof PageComplaint
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageComplaint
     */
    number?: number;
    /**
     *
     * @type {Sort}
     * @memberof PageComplaint
     */
    sort?: Sort;
    /**
     *
     * @type {number}
     * @memberof PageComplaint
     */
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageComplaint
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PageComplaint
     */
    empty?: boolean;
}
export declare function PageComplaintFromJSON(json: any): PageComplaint;
export declare function PageComplaintFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageComplaint;
export declare function PageComplaintToJSON(value?: PageComplaint | null): any;

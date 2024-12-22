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
import type { Complaint } from './Complaint';
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
    totalPages: number;
    /**
     *
     * @type {number}
     * @memberof PageComplaint
     */
    totalElements: number;
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
    numberOfElements?: number;
    /**
     *
     * @type {boolean}
     * @memberof PageComplaint
     */
    first?: boolean;
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
     * @type {Array<SortObject>}
     * @memberof PageComplaint
     */
    sort?: Array<SortObject>;
    /**
     *
     * @type {boolean}
     * @memberof PageComplaint
     */
    empty?: boolean;
}
/**
 * Check if a given object implements the PageComplaint interface.
 */
export declare function instanceOfPageComplaint(value: object): value is PageComplaint;
export declare function PageComplaintFromJSON(json: any): PageComplaint;
export declare function PageComplaintFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageComplaint;
export declare function PageComplaintToJSON(json: any): PageComplaint;
export declare function PageComplaintToJSONTyped(value?: PageComplaint | null, ignoreDiscriminator?: boolean): any;

/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    BounceProjection,
    BounceProjectionFromJSON,
    BounceProjectionFromJSONTyped,
    BounceProjectionToJSON,
    Pageable,
    PageableFromJSON,
    PageableFromJSONTyped,
    PageableToJSON,
    Sort,
    SortFromJSON,
    SortFromJSONTyped,
    SortToJSON,
} from './';

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

export function PageBouncedEmailFromJSON(json: any): PageBouncedEmail {
    return PageBouncedEmailFromJSONTyped(json, false);
}

export function PageBouncedEmailFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): PageBouncedEmail {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        content: !exists(json, 'content')
            ? undefined
            : (json['content'] as Array<any>).map(BounceProjectionFromJSON),
        empty: !exists(json, 'empty') ? undefined : json['empty'],
        first: !exists(json, 'first') ? undefined : json['first'],
        last: !exists(json, 'last') ? undefined : json['last'],
        number: !exists(json, 'number') ? undefined : json['number'],
        numberOfElements: !exists(json, 'numberOfElements')
            ? undefined
            : json['numberOfElements'],
        pageable: !exists(json, 'pageable')
            ? undefined
            : PageableFromJSON(json['pageable']),
        size: !exists(json, 'size') ? undefined : json['size'],
        sort: !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
        totalElements: !exists(json, 'totalElements')
            ? undefined
            : json['totalElements'],
        totalPages: !exists(json, 'totalPages')
            ? undefined
            : json['totalPages'],
    };
}

export function PageBouncedEmailToJSON(value?: PageBouncedEmail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        content:
            value.content === undefined
                ? undefined
                : (value.content as Array<any>).map(BounceProjectionToJSON),
        empty: value.empty,
        first: value.first,
        last: value.last,
        number: value.number,
        numberOfElements: value.numberOfElements,
        pageable: PageableToJSON(value.pageable),
        size: value.size,
        sort: SortToJSON(value.sort),
        totalElements: value.totalElements,
        totalPages: value.totalPages,
    };
}

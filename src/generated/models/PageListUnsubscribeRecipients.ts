/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { PageableObject } from './PageableObject';
import {
    PageableObjectFromJSON,
    PageableObjectFromJSONTyped,
    PageableObjectToJSON,
    PageableObjectToJSONTyped,
} from './PageableObject';
import type { SortObject } from './SortObject';
import {
    SortObjectFromJSON,
    SortObjectFromJSONTyped,
    SortObjectToJSON,
    SortObjectToJSONTyped,
} from './SortObject';
import type { ListUnsubscribeRecipientProjection } from './ListUnsubscribeRecipientProjection';
import {
    ListUnsubscribeRecipientProjectionFromJSON,
    ListUnsubscribeRecipientProjectionFromJSONTyped,
    ListUnsubscribeRecipientProjectionToJSON,
    ListUnsubscribeRecipientProjectionToJSONTyped,
} from './ListUnsubscribeRecipientProjection';

/**
 * Paginated list unsubscribe recipients. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageListUnsubscribeRecipients
 */
export interface PageListUnsubscribeRecipients {
    /**
     * 
     * @type {Array<ListUnsubscribeRecipientProjection>}
     * @memberof PageListUnsubscribeRecipients
     */
    content?: Array<ListUnsubscribeRecipientProjection>;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageListUnsubscribeRecipients
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    totalPages: number;
    /**
     * 
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    totalElements: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageListUnsubscribeRecipients
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    numberOfElements?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageListUnsubscribeRecipients
     */
    first?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageListUnsubscribeRecipients
     */
    number?: number;
    /**
     * 
     * @type {Array<SortObject>}
     * @memberof PageListUnsubscribeRecipients
     */
    sort?: Array<SortObject>;
    /**
     * 
     * @type {boolean}
     * @memberof PageListUnsubscribeRecipients
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageListUnsubscribeRecipients interface.
 */
export function instanceOfPageListUnsubscribeRecipients(value: object): value is PageListUnsubscribeRecipients {
    if (!('totalPages' in value) || value['totalPages'] === undefined) return false;
    if (!('totalElements' in value) || value['totalElements'] === undefined) return false;
    return true;
}

export function PageListUnsubscribeRecipientsFromJSON(json: any): PageListUnsubscribeRecipients {
    return PageListUnsubscribeRecipientsFromJSONTyped(json, false);
}

export function PageListUnsubscribeRecipientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageListUnsubscribeRecipients {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : ((json['content'] as Array<any>).map(ListUnsubscribeRecipientProjectionFromJSON)),
        'pageable': json['pageable'] == null ? undefined : PageableObjectFromJSON(json['pageable']),
        'totalPages': json['totalPages'],
        'totalElements': json['totalElements'],
        'last': json['last'] == null ? undefined : json['last'],
        'numberOfElements': json['numberOfElements'] == null ? undefined : json['numberOfElements'],
        'first': json['first'] == null ? undefined : json['first'],
        'size': json['size'] == null ? undefined : json['size'],
        'number': json['number'] == null ? undefined : json['number'],
        'sort': json['sort'] == null ? undefined : ((json['sort'] as Array<any>).map(SortObjectFromJSON)),
        'empty': json['empty'] == null ? undefined : json['empty'],
    };
}

export function PageListUnsubscribeRecipientsToJSON(json: any): PageListUnsubscribeRecipients {
    return PageListUnsubscribeRecipientsToJSONTyped(json, false);
}

export function PageListUnsubscribeRecipientsToJSONTyped(value?: PageListUnsubscribeRecipients | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'] == null ? undefined : ((value['content'] as Array<any>).map(ListUnsubscribeRecipientProjectionToJSON)),
        'pageable': PageableObjectToJSON(value['pageable']),
        'totalPages': value['totalPages'],
        'totalElements': value['totalElements'],
        'last': value['last'],
        'numberOfElements': value['numberOfElements'],
        'first': value['first'],
        'size': value['size'],
        'number': value['number'],
        'sort': value['sort'] == null ? undefined : ((value['sort'] as Array<any>).map(SortObjectToJSON)),
        'empty': value['empty'],
    };
}


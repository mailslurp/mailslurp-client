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
import type { WebhookProjection } from './WebhookProjection';
import {
    WebhookProjectionFromJSON,
    WebhookProjectionFromJSONTyped,
    WebhookProjectionToJSON,
    WebhookProjectionToJSONTyped,
} from './WebhookProjection';
import type { SortObject } from './SortObject';
import {
    SortObjectFromJSON,
    SortObjectFromJSONTyped,
    SortObjectToJSON,
    SortObjectToJSONTyped,
} from './SortObject';

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
    totalPages: number;
    /**
     * 
     * @type {number}
     * @memberof PageWebhookProjection
     */
    totalElements: number;
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
    numberOfElements?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageWebhookProjection
     */
    first?: boolean;
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
     * @type {Array<SortObject>}
     * @memberof PageWebhookProjection
     */
    sort?: Array<SortObject>;
    /**
     * 
     * @type {boolean}
     * @memberof PageWebhookProjection
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageWebhookProjection interface.
 */
export function instanceOfPageWebhookProjection(value: object): value is PageWebhookProjection {
    if (!('totalPages' in value) || value['totalPages'] === undefined) return false;
    if (!('totalElements' in value) || value['totalElements'] === undefined) return false;
    return true;
}

export function PageWebhookProjectionFromJSON(json: any): PageWebhookProjection {
    return PageWebhookProjectionFromJSONTyped(json, false);
}

export function PageWebhookProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageWebhookProjection {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : ((json['content'] as Array<any>).map(WebhookProjectionFromJSON)),
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

export function PageWebhookProjectionToJSON(json: any): PageWebhookProjection {
    return PageWebhookProjectionToJSONTyped(json, false);
}

export function PageWebhookProjectionToJSONTyped(value?: PageWebhookProjection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'] == null ? undefined : ((value['content'] as Array<any>).map(WebhookProjectionToJSON)),
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


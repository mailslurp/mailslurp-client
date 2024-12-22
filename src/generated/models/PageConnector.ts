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
import type { ConnectorProjection } from './ConnectorProjection';
import {
    ConnectorProjectionFromJSON,
    ConnectorProjectionFromJSONTyped,
    ConnectorProjectionToJSON,
    ConnectorProjectionToJSONTyped,
} from './ConnectorProjection';
import type { SortObject } from './SortObject';
import {
    SortObjectFromJSON,
    SortObjectFromJSONTyped,
    SortObjectToJSON,
    SortObjectToJSONTyped,
} from './SortObject';

/**
 * Paginated inbox connectors. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageConnector
 */
export interface PageConnector {
    /**
     * 
     * @type {Array<ConnectorProjection>}
     * @memberof PageConnector
     */
    content?: Array<ConnectorProjection>;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageConnector
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {number}
     * @memberof PageConnector
     */
    totalPages: number;
    /**
     * 
     * @type {number}
     * @memberof PageConnector
     */
    totalElements: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageConnector
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageConnector
     */
    numberOfElements?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageConnector
     */
    first?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageConnector
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageConnector
     */
    number?: number;
    /**
     * 
     * @type {Array<SortObject>}
     * @memberof PageConnector
     */
    sort?: Array<SortObject>;
    /**
     * 
     * @type {boolean}
     * @memberof PageConnector
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the PageConnector interface.
 */
export function instanceOfPageConnector(value: object): value is PageConnector {
    if (!('totalPages' in value) || value['totalPages'] === undefined) return false;
    if (!('totalElements' in value) || value['totalElements'] === undefined) return false;
    return true;
}

export function PageConnectorFromJSON(json: any): PageConnector {
    return PageConnectorFromJSONTyped(json, false);
}

export function PageConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageConnector {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : ((json['content'] as Array<any>).map(ConnectorProjectionFromJSON)),
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

export function PageConnectorToJSON(json: any): PageConnector {
    return PageConnectorToJSONTyped(json, false);
}

export function PageConnectorToJSONTyped(value?: PageConnector | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'] == null ? undefined : ((value['content'] as Array<any>).map(ConnectorProjectionToJSON)),
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


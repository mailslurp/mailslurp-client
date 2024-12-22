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
import type { ConnectorSyncResult } from './ConnectorSyncResult';
import {
    ConnectorSyncResultFromJSON,
    ConnectorSyncResultFromJSONTyped,
    ConnectorSyncResultToJSON,
    ConnectorSyncResultToJSONTyped,
} from './ConnectorSyncResult';

/**
 * 
 * @export
 * @interface ConnectorSyncRequestResult
 */
export interface ConnectorSyncRequestResult {
    /**
     * 
     * @type {ConnectorSyncResult}
     * @memberof ConnectorSyncRequestResult
     */
    syncResult?: ConnectorSyncResult;
    /**
     * 
     * @type {string}
     * @memberof ConnectorSyncRequestResult
     */
    exception?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorSyncRequestResult
     */
    eventId?: string;
}

/**
 * Check if a given object implements the ConnectorSyncRequestResult interface.
 */
export function instanceOfConnectorSyncRequestResult(value: object): value is ConnectorSyncRequestResult {
    return true;
}

export function ConnectorSyncRequestResultFromJSON(json: any): ConnectorSyncRequestResult {
    return ConnectorSyncRequestResultFromJSONTyped(json, false);
}

export function ConnectorSyncRequestResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorSyncRequestResult {
    if (json == null) {
        return json;
    }
    return {
        
        'syncResult': json['syncResult'] == null ? undefined : ConnectorSyncResultFromJSON(json['syncResult']),
        'exception': json['exception'] == null ? undefined : json['exception'],
        'eventId': json['eventId'] == null ? undefined : json['eventId'],
    };
}

export function ConnectorSyncRequestResultToJSON(json: any): ConnectorSyncRequestResult {
    return ConnectorSyncRequestResultToJSONTyped(json, false);
}

export function ConnectorSyncRequestResultToJSONTyped(value?: ConnectorSyncRequestResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'syncResult': ConnectorSyncResultToJSON(value['syncResult']),
        'exception': value['exception'],
        'eventId': value['eventId'],
    };
}


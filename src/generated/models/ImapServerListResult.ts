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
import type { ImapEmailProjection } from './ImapEmailProjection';
import {
    ImapEmailProjectionFromJSON,
    ImapEmailProjectionFromJSONTyped,
    ImapEmailProjectionToJSON,
    ImapEmailProjectionToJSONTyped,
} from './ImapEmailProjection';

/**
 * 
 * @export
 * @interface ImapServerListResult
 */
export interface ImapServerListResult {
    /**
     * 
     * @type {Array<ImapEmailProjection>}
     * @memberof ImapServerListResult
     */
    results: Array<ImapEmailProjection>;
}

/**
 * Check if a given object implements the ImapServerListResult interface.
 */
export function instanceOfImapServerListResult(value: object): value is ImapServerListResult {
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function ImapServerListResultFromJSON(json: any): ImapServerListResult {
    return ImapServerListResultFromJSONTyped(json, false);
}

export function ImapServerListResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImapServerListResult {
    if (json == null) {
        return json;
    }
    return {
        
        'results': ((json['results'] as Array<any>).map(ImapEmailProjectionFromJSON)),
    };
}

export function ImapServerListResultToJSON(json: any): ImapServerListResult {
    return ImapServerListResultToJSONTyped(json, false);
}

export function ImapServerListResultToJSONTyped(value?: ImapServerListResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'results': ((value['results'] as Array<any>).map(ImapEmailProjectionToJSON)),
    };
}


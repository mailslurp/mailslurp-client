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
import type { MatchOption } from './MatchOption';
import {
    MatchOptionFromJSON,
    MatchOptionFromJSONTyped,
    MatchOptionToJSON,
    MatchOptionToJSONTyped,
} from './MatchOption';

/**
 * Conditions to apply to emails that you are waiting for
 * @export
 * @interface WaitForConditions
 */
export interface WaitForConditions {
    /**
     * ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.
     * @type {string}
     * @memberof WaitForConditions
     */
    inboxId: string;
    /**
     * Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.
     * @type {number}
     * @memberof WaitForConditions
     */
    count?: number | null;
    /**
     * Max time in milliseconds to wait between retries if a `timeout` is specified.
     * @type {number}
     * @memberof WaitForConditions
     */
    delayTimeout?: number | null;
    /**
     * Max time in milliseconds to retry the `waitFor` operation until conditions are met.
     * @type {number}
     * @memberof WaitForConditions
     */
    timeout: number;
    /**
     * Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.
     * @type {boolean}
     * @memberof WaitForConditions
     */
    unreadOnly?: boolean | null;
    /**
     * How result size should be compared with the expected size. Exactly or at-least matching result?
     * @type {string}
     * @memberof WaitForConditions
     */
    countType?: WaitForConditionsCountTypeEnum | null;
    /**
     * Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.
     * @type {Array<MatchOption>}
     * @memberof WaitForConditions
     */
    matches?: Array<MatchOption> | null;
    /**
     * Direction to sort matching emails by created time
     * @type {string}
     * @memberof WaitForConditions
     */
    sortDirection?: WaitForConditionsSortDirectionEnum | null;
    /**
     * ISO Date Time earliest time of email to consider. Filter for matching emails that were received after this date
     * @type {Date}
     * @memberof WaitForConditions
     */
    since?: Date | null;
    /**
     * ISO Date Time latest time of email to consider. Filter for matching emails that were received before this date
     * @type {Date}
     * @memberof WaitForConditions
     */
    before?: Date | null;
}


/**
 * @export
 */
export const WaitForConditionsCountTypeEnum = {
    EXACTLY: 'EXACTLY',
    ATLEAST: 'ATLEAST'
} as const;
export type WaitForConditionsCountTypeEnum = typeof WaitForConditionsCountTypeEnum[keyof typeof WaitForConditionsCountTypeEnum];

/**
 * @export
 */
export const WaitForConditionsSortDirectionEnum = {
    ASC: 'ASC',
    DESC: 'DESC'
} as const;
export type WaitForConditionsSortDirectionEnum = typeof WaitForConditionsSortDirectionEnum[keyof typeof WaitForConditionsSortDirectionEnum];


/**
 * Check if a given object implements the WaitForConditions interface.
 */
export function instanceOfWaitForConditions(value: object): value is WaitForConditions {
    if (!('inboxId' in value) || value['inboxId'] === undefined) return false;
    if (!('timeout' in value) || value['timeout'] === undefined) return false;
    return true;
}

export function WaitForConditionsFromJSON(json: any): WaitForConditions {
    return WaitForConditionsFromJSONTyped(json, false);
}

export function WaitForConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitForConditions {
    if (json == null) {
        return json;
    }
    return {
        
        'inboxId': json['inboxId'],
        'count': json['count'] == null ? undefined : json['count'],
        'delayTimeout': json['delayTimeout'] == null ? undefined : json['delayTimeout'],
        'timeout': json['timeout'],
        'unreadOnly': json['unreadOnly'] == null ? undefined : json['unreadOnly'],
        'countType': json['countType'] == null ? undefined : json['countType'],
        'matches': json['matches'] == null ? undefined : ((json['matches'] as Array<any>).map(MatchOptionFromJSON)),
        'sortDirection': json['sortDirection'] == null ? undefined : json['sortDirection'],
        'since': json['since'] == null ? undefined : (new Date(json['since'])),
        'before': json['before'] == null ? undefined : (new Date(json['before'])),
    };
}

export function WaitForConditionsToJSON(json: any): WaitForConditions {
    return WaitForConditionsToJSONTyped(json, false);
}

export function WaitForConditionsToJSONTyped(value?: WaitForConditions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'inboxId': value['inboxId'],
        'count': value['count'],
        'delayTimeout': value['delayTimeout'],
        'timeout': value['timeout'],
        'unreadOnly': value['unreadOnly'],
        'countType': value['countType'],
        'matches': value['matches'] == null ? undefined : ((value['matches'] as Array<any>).map(MatchOptionToJSON)),
        'sortDirection': value['sortDirection'],
        'since': value['since'] == null ? undefined : ((value['since'] as any).toISOString()),
        'before': value['before'] == null ? undefined : ((value['before'] as any).toISOString()),
    };
}


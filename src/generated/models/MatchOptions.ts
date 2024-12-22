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
import type { ConditionOption } from './ConditionOption';
import {
    ConditionOptionFromJSON,
    ConditionOptionFromJSONTyped,
    ConditionOptionToJSON,
    ConditionOptionToJSONTyped,
} from './ConditionOption';

/**
 * Optional filter for matching emails based on fields. For instance filter results to only include emails whose `SUBJECT` value does `CONTAIN` given match value. An example payload would be `{ matches: [{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }] }`. You can also pass conditions such as `HAS_ATTACHMENT`. If you wish to extract regex matches inside the email content see the `getEmailContentMatch` method in the EmailController.
 * @export
 * @interface MatchOptions
 */
export interface MatchOptions {
    /**
     * Zero or more match options such as `{ field: 'SUBJECT', should: 'CONTAIN', value: 'Welcome' }`. Options are additive so if one does not match the email is excluded from results
     * @type {Array<MatchOption>}
     * @memberof MatchOptions
     */
    matches?: Array<MatchOption> | null;
    /**
     * Zero or more conditions such as `{ condition: 'HAS_ATTACHMENTS', value: 'TRUE' }`. Note the values are the strings `TRUE|FALSE` not booleans.
     * @type {Array<ConditionOption>}
     * @memberof MatchOptions
     */
    conditions?: Array<ConditionOption> | null;
}

/**
 * Check if a given object implements the MatchOptions interface.
 */
export function instanceOfMatchOptions(value: object): value is MatchOptions {
    return true;
}

export function MatchOptionsFromJSON(json: any): MatchOptions {
    return MatchOptionsFromJSONTyped(json, false);
}

export function MatchOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'matches': json['matches'] == null ? undefined : ((json['matches'] as Array<any>).map(MatchOptionFromJSON)),
        'conditions': json['conditions'] == null ? undefined : ((json['conditions'] as Array<any>).map(ConditionOptionFromJSON)),
    };
}

export function MatchOptionsToJSON(json: any): MatchOptions {
    return MatchOptionsToJSONTyped(json, false);
}

export function MatchOptionsToJSONTyped(value?: MatchOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'matches': value['matches'] == null ? undefined : ((value['matches'] as Array<any>).map(MatchOptionToJSON)),
        'conditions': value['conditions'] == null ? undefined : ((value['conditions'] as Array<any>).map(ConditionOptionToJSON)),
    };
}


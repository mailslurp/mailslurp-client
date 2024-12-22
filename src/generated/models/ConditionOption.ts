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
/**
 * Options for matching emails in an inbox based on a condition such as `HAS_ATTACHMENTS=TRUE`
 * @export
 * @interface ConditionOption
 */
export interface ConditionOption {
    /**
     * Condition of an email object that can be used to filter results
     * @type {string}
     * @memberof ConditionOption
     */
    condition: ConditionOptionConditionEnum;
    /**
     * Expected condition value
     * @type {string}
     * @memberof ConditionOption
     */
    value: ConditionOptionValueEnum;
}


/**
 * @export
 */
export const ConditionOptionConditionEnum = {
    HAS_ATTACHMENTS: 'HAS_ATTACHMENTS'
} as const;
export type ConditionOptionConditionEnum = typeof ConditionOptionConditionEnum[keyof typeof ConditionOptionConditionEnum];

/**
 * @export
 */
export const ConditionOptionValueEnum = {
    TRUE: 'TRUE',
    FALSE: 'FALSE'
} as const;
export type ConditionOptionValueEnum = typeof ConditionOptionValueEnum[keyof typeof ConditionOptionValueEnum];


/**
 * Check if a given object implements the ConditionOption interface.
 */
export function instanceOfConditionOption(value: object): value is ConditionOption {
    if (!('condition' in value) || value['condition'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function ConditionOptionFromJSON(json: any): ConditionOption {
    return ConditionOptionFromJSONTyped(json, false);
}

export function ConditionOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionOption {
    if (json == null) {
        return json;
    }
    return {
        
        'condition': json['condition'],
        'value': json['value'],
    };
}

export function ConditionOptionToJSON(json: any): ConditionOption {
    return ConditionOptionToJSONTyped(json, false);
}

export function ConditionOptionToJSONTyped(value?: ConditionOption | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'condition': value['condition'],
        'value': value['value'],
    };
}


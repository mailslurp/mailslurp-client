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
 * 
 * @export
 * @interface EmailFeatureSupportFlags
 */
export interface EmailFeatureSupportFlags {
    /**
     * 
     * @type {string}
     * @memberof EmailFeatureSupportFlags
     */
    status: EmailFeatureSupportFlagsStatusEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof EmailFeatureSupportFlags
     */
    notes?: Set<string>;
}


/**
 * @export
 */
export const EmailFeatureSupportFlagsStatusEnum = {
    SUPPORTED: 'SUPPORTED',
    PARTIAL: 'PARTIAL',
    NOT_SUPPORTED: 'NOT_SUPPORTED',
    UNKNOWN: 'UNKNOWN'
} as const;
export type EmailFeatureSupportFlagsStatusEnum = typeof EmailFeatureSupportFlagsStatusEnum[keyof typeof EmailFeatureSupportFlagsStatusEnum];


/**
 * Check if a given object implements the EmailFeatureSupportFlags interface.
 */
export function instanceOfEmailFeatureSupportFlags(value: object): value is EmailFeatureSupportFlags {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function EmailFeatureSupportFlagsFromJSON(json: any): EmailFeatureSupportFlags {
    return EmailFeatureSupportFlagsFromJSONTyped(json, false);
}

export function EmailFeatureSupportFlagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailFeatureSupportFlags {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'notes': json['notes'] == null ? undefined : new Set(json['notes']),
    };
}

export function EmailFeatureSupportFlagsToJSON(json: any): EmailFeatureSupportFlags {
    return EmailFeatureSupportFlagsToJSONTyped(json, false);
}

export function EmailFeatureSupportFlagsToJSONTyped(value?: EmailFeatureSupportFlags | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'notes': value['notes'] == null ? undefined : Array.from(value['notes'] as Set<any>),
    };
}


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
 * Result of email exists query
 * @export
 * @interface InboxExistsDto
 */
export interface InboxExistsDto {
    /**
     * 
     * @type {boolean}
     * @memberof InboxExistsDto
     */
    _exists: boolean;
}

/**
 * Check if a given object implements the InboxExistsDto interface.
 */
export function instanceOfInboxExistsDto(value: object): value is InboxExistsDto {
    if (!('_exists' in value) || value['_exists'] === undefined) return false;
    return true;
}

export function InboxExistsDtoFromJSON(json: any): InboxExistsDto {
    return InboxExistsDtoFromJSONTyped(json, false);
}

export function InboxExistsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxExistsDto {
    if (json == null) {
        return json;
    }
    return {
        
        '_exists': json['exists'],
    };
}

export function InboxExistsDtoToJSON(json: any): InboxExistsDto {
    return InboxExistsDtoToJSONTyped(json, false);
}

export function InboxExistsDtoToJSONTyped(value?: InboxExistsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'exists': value['_exists'],
    };
}


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
 * Update group contacts options. Pass a list of contact ids to replace existing group contacts.
 * @export
 * @interface UpdateGroupContacts
 */
export interface UpdateGroupContacts {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateGroupContacts
     */
    contactIds: Array<string>;
}

/**
 * Check if a given object implements the UpdateGroupContacts interface.
 */
export function instanceOfUpdateGroupContacts(value: object): value is UpdateGroupContacts {
    if (!('contactIds' in value) || value['contactIds'] === undefined) return false;
    return true;
}

export function UpdateGroupContactsFromJSON(json: any): UpdateGroupContacts {
    return UpdateGroupContactsFromJSONTyped(json, false);
}

export function UpdateGroupContactsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGroupContacts {
    if (json == null) {
        return json;
    }
    return {
        
        'contactIds': json['contactIds'],
    };
}

export function UpdateGroupContactsToJSON(json: any): UpdateGroupContacts {
    return UpdateGroupContactsToJSONTyped(json, false);
}

export function UpdateGroupContactsToJSONTyped(value?: UpdateGroupContacts | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'contactIds': value['contactIds'],
    };
}


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
 * @interface Complaint
 */
export interface Complaint {
    /**
     * 
     * @type {string}
     * @memberof Complaint
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Complaint
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof Complaint
     */
    eventType?: string;
    /**
     * 
     * @type {string}
     * @memberof Complaint
     */
    mailSource?: string;
    /**
     * 
     * @type {string}
     * @memberof Complaint
     */
    mailMessageId?: string;
    /**
     * 
     * @type {string}
     * @memberof Complaint
     */
    complaintRecipient: string;
    /**
     * 
     * @type {Date}
     * @memberof Complaint
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Complaint
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Complaint interface.
 */
export function instanceOfComplaint(value: object): value is Complaint {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('complaintRecipient' in value) || value['complaintRecipient'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ComplaintFromJSON(json: any): Complaint {
    return ComplaintFromJSONTyped(json, false);
}

export function ComplaintFromJSONTyped(json: any, ignoreDiscriminator: boolean): Complaint {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'eventType': json['eventType'] == null ? undefined : json['eventType'],
        'mailSource': json['mailSource'] == null ? undefined : json['mailSource'],
        'mailMessageId': json['mailMessageId'] == null ? undefined : json['mailMessageId'],
        'complaintRecipient': json['complaintRecipient'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function ComplaintToJSON(json: any): Complaint {
    return ComplaintToJSONTyped(json, false);
}

export function ComplaintToJSONTyped(value?: Complaint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'eventType': value['eventType'],
        'mailSource': value['mailSource'],
        'mailMessageId': value['mailMessageId'],
        'complaintRecipient': value['complaintRecipient'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}


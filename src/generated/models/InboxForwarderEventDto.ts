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
 * Inbox forwarder event. Describes how an email was handled by an inbox forwarder.
 * @export
 * @interface InboxForwarderEventDto
 */
export interface InboxForwarderEventDto {
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    inboxId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    emailId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    sentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    userId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    forwarderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderEventDto
     */
    status?: InboxForwarderEventDtoStatusEnum | null;
    /**
     * 
     * @type {Date}
     * @memberof InboxForwarderEventDto
     */
    createdAt: Date;
}


/**
 * @export
 */
export const InboxForwarderEventDtoStatusEnum = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
} as const;
export type InboxForwarderEventDtoStatusEnum = typeof InboxForwarderEventDtoStatusEnum[keyof typeof InboxForwarderEventDtoStatusEnum];


/**
 * Check if a given object implements the InboxForwarderEventDto interface.
 */
export function instanceOfInboxForwarderEventDto(value: object): value is InboxForwarderEventDto {
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function InboxForwarderEventDtoFromJSON(json: any): InboxForwarderEventDto {
    return InboxForwarderEventDtoFromJSONTyped(json, false);
}

export function InboxForwarderEventDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxForwarderEventDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'inboxId': json['inboxId'] == null ? undefined : json['inboxId'],
        'emailId': json['emailId'] == null ? undefined : json['emailId'],
        'sentId': json['sentId'] == null ? undefined : json['sentId'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'forwarderId': json['forwarderId'] == null ? undefined : json['forwarderId'],
        'message': json['message'] == null ? undefined : json['message'],
        'status': json['status'] == null ? undefined : json['status'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function InboxForwarderEventDtoToJSON(json: any): InboxForwarderEventDto {
    return InboxForwarderEventDtoToJSONTyped(json, false);
}

export function InboxForwarderEventDtoToJSONTyped(value?: InboxForwarderEventDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'inboxId': value['inboxId'],
        'emailId': value['emailId'],
        'sentId': value['sentId'],
        'userId': value['userId'],
        'forwarderId': value['forwarderId'],
        'message': value['message'],
        'status': value['status'],
        'createdAt': ((value['createdAt']).toISOString()),
    };
}


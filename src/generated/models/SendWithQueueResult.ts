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
 * @interface SendWithQueueResult
 */
export interface SendWithQueueResult {
    /**
     * 
     * @type {string}
     * @memberof SendWithQueueResult
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SendWithQueueResult
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof SendWithQueueResult
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof SendWithQueueResult
     */
    inboxId?: string;
    /**
     * 
     * @type {string}
     * @memberof SendWithQueueResult
     */
    headerId: string;
    /**
     * 
     * @type {boolean}
     * @memberof SendWithQueueResult
     */
    delivered: boolean;
    /**
     * 
     * @type {string}
     * @memberof SendWithQueueResult
     */
    exceptionName?: string;
    /**
     * 
     * @type {string}
     * @memberof SendWithQueueResult
     */
    message?: string;
    /**
     * 
     * @type {Date}
     * @memberof SendWithQueueResult
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SendWithQueueResult
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the SendWithQueueResult interface.
 */
export function instanceOfSendWithQueueResult(value: object): value is SendWithQueueResult {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('headerId' in value) || value['headerId'] === undefined) return false;
    if (!('delivered' in value) || value['delivered'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function SendWithQueueResultFromJSON(json: any): SendWithQueueResult {
    return SendWithQueueResultFromJSONTyped(json, false);
}

export function SendWithQueueResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendWithQueueResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'subject': json['subject'] == null ? undefined : json['subject'],
        'inboxId': json['inboxId'] == null ? undefined : json['inboxId'],
        'headerId': json['headerId'],
        'delivered': json['delivered'],
        'exceptionName': json['exceptionName'] == null ? undefined : json['exceptionName'],
        'message': json['message'] == null ? undefined : json['message'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function SendWithQueueResultToJSON(json: any): SendWithQueueResult {
    return SendWithQueueResultToJSONTyped(json, false);
}

export function SendWithQueueResultToJSONTyped(value?: SendWithQueueResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'subject': value['subject'],
        'inboxId': value['inboxId'],
        'headerId': value['headerId'],
        'delivered': value['delivered'],
        'exceptionName': value['exceptionName'],
        'message': value['message'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}


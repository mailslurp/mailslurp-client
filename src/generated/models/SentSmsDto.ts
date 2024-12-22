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
 * @interface SentSmsDto
 */
export interface SentSmsDto {
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    phoneNumber: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    fromNumber: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    toNumber: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    body: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    sid: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    replyToSid: string;
    /**
     * 
     * @type {string}
     * @memberof SentSmsDto
     */
    replyToId: string;
    /**
     * 
     * @type {Date}
     * @memberof SentSmsDto
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SentSmsDto
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the SentSmsDto interface.
 */
export function instanceOfSentSmsDto(value: object): value is SentSmsDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('phoneNumber' in value) || value['phoneNumber'] === undefined) return false;
    if (!('fromNumber' in value) || value['fromNumber'] === undefined) return false;
    if (!('toNumber' in value) || value['toNumber'] === undefined) return false;
    if (!('body' in value) || value['body'] === undefined) return false;
    if (!('sid' in value) || value['sid'] === undefined) return false;
    if (!('replyToSid' in value) || value['replyToSid'] === undefined) return false;
    if (!('replyToId' in value) || value['replyToId'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function SentSmsDtoFromJSON(json: any): SentSmsDto {
    return SentSmsDtoFromJSONTyped(json, false);
}

export function SentSmsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentSmsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'phoneNumber': json['phoneNumber'],
        'fromNumber': json['fromNumber'],
        'toNumber': json['toNumber'],
        'body': json['body'],
        'sid': json['sid'],
        'replyToSid': json['replyToSid'],
        'replyToId': json['replyToId'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function SentSmsDtoToJSON(json: any): SentSmsDto {
    return SentSmsDtoToJSONTyped(json, false);
}

export function SentSmsDtoToJSONTyped(value?: SentSmsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'phoneNumber': value['phoneNumber'],
        'fromNumber': value['fromNumber'],
        'toNumber': value['toNumber'],
        'body': value['body'],
        'sid': value['sid'],
        'replyToSid': value['replyToSid'],
        'replyToId': value['replyToId'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}


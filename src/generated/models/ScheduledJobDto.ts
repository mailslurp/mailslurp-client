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
 * @interface ScheduledJobDto
 */
export interface ScheduledJobDto {
    /**
     * 
     * @type {string}
     * @memberof ScheduledJobDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledJobDto
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledJobDto
     */
    inboxId: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledJobDto
     */
    jobId: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledJobDto
     */
    groupId: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledJobDto
     */
    triggerId: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledJobDto
     */
    status: ScheduledJobDtoStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof ScheduledJobDto
     */
    sendAtTimestamp: Date;
    /**
     * 
     * @type {Date}
     * @memberof ScheduledJobDto
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ScheduledJobDto
     */
    updatedAt: Date;
}


/**
 * @export
 */
export const ScheduledJobDtoStatusEnum = {
    SUBMITTED: 'SUBMITTED',
    COMPLETED: 'COMPLETED',
    ABORTED: 'ABORTED',
    FAILED: 'FAILED',
    CANCELLED: 'CANCELLED'
} as const;
export type ScheduledJobDtoStatusEnum = typeof ScheduledJobDtoStatusEnum[keyof typeof ScheduledJobDtoStatusEnum];


/**
 * Check if a given object implements the ScheduledJobDto interface.
 */
export function instanceOfScheduledJobDto(value: object): value is ScheduledJobDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('inboxId' in value) || value['inboxId'] === undefined) return false;
    if (!('jobId' in value) || value['jobId'] === undefined) return false;
    if (!('groupId' in value) || value['groupId'] === undefined) return false;
    if (!('triggerId' in value) || value['triggerId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('sendAtTimestamp' in value) || value['sendAtTimestamp'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ScheduledJobDtoFromJSON(json: any): ScheduledJobDto {
    return ScheduledJobDtoFromJSONTyped(json, false);
}

export function ScheduledJobDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledJobDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'inboxId': json['inboxId'],
        'jobId': json['jobId'],
        'groupId': json['groupId'],
        'triggerId': json['triggerId'],
        'status': json['status'],
        'sendAtTimestamp': (new Date(json['sendAtTimestamp'])),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function ScheduledJobDtoToJSON(json: any): ScheduledJobDto {
    return ScheduledJobDtoToJSONTyped(json, false);
}

export function ScheduledJobDtoToJSONTyped(value?: ScheduledJobDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'inboxId': value['inboxId'],
        'jobId': value['jobId'],
        'groupId': value['groupId'],
        'triggerId': value['triggerId'],
        'status': value['status'],
        'sendAtTimestamp': ((value['sendAtTimestamp']).toISOString()),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}


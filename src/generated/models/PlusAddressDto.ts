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
 * @interface PlusAddressDto
 */
export interface PlusAddressDto {
    /**
     * 
     * @type {string}
     * @memberof PlusAddressDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PlusAddressDto
     */
    plusAddress: string;
    /**
     * 
     * @type {string}
     * @memberof PlusAddressDto
     */
    fullAddress: string;
    /**
     * 
     * @type {string}
     * @memberof PlusAddressDto
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof PlusAddressDto
     */
    inboxId: string;
    /**
     * 
     * @type {Date}
     * @memberof PlusAddressDto
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof PlusAddressDto
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the PlusAddressDto interface.
 */
export function instanceOfPlusAddressDto(value: object): value is PlusAddressDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('plusAddress' in value) || value['plusAddress'] === undefined) return false;
    if (!('fullAddress' in value) || value['fullAddress'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('inboxId' in value) || value['inboxId'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function PlusAddressDtoFromJSON(json: any): PlusAddressDto {
    return PlusAddressDtoFromJSONTyped(json, false);
}

export function PlusAddressDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlusAddressDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'plusAddress': json['plusAddress'],
        'fullAddress': json['fullAddress'],
        'userId': json['userId'],
        'inboxId': json['inboxId'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function PlusAddressDtoToJSON(json: any): PlusAddressDto {
    return PlusAddressDtoToJSONTyped(json, false);
}

export function PlusAddressDtoToJSONTyped(value?: PlusAddressDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'plusAddress': value['plusAddress'],
        'fullAddress': value['fullAddress'],
        'userId': value['userId'],
        'inboxId': value['inboxId'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}


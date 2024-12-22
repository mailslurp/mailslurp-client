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
 * @interface PhonePlanDto
 */
export interface PhonePlanDto {
    /**
     * 
     * @type {string}
     * @memberof PhonePlanDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PhonePlanDto
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof PhonePlanDto
     */
    phoneCountry: PhonePlanDtoPhoneCountryEnum;
    /**
     * 
     * @type {Date}
     * @memberof PhonePlanDto
     */
    createdAt: Date;
}


/**
 * @export
 */
export const PhonePlanDtoPhoneCountryEnum = {
    US: 'US',
    GB: 'GB',
    AU: 'AU'
} as const;
export type PhonePlanDtoPhoneCountryEnum = typeof PhonePlanDtoPhoneCountryEnum[keyof typeof PhonePlanDtoPhoneCountryEnum];


/**
 * Check if a given object implements the PhonePlanDto interface.
 */
export function instanceOfPhonePlanDto(value: object): value is PhonePlanDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('phoneCountry' in value) || value['phoneCountry'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function PhonePlanDtoFromJSON(json: any): PhonePlanDto {
    return PhonePlanDtoFromJSONTyped(json, false);
}

export function PhonePlanDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhonePlanDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'phoneCountry': json['phoneCountry'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function PhonePlanDtoToJSON(json: any): PhonePlanDto {
    return PhonePlanDtoToJSONTyped(json, false);
}

export function PhonePlanDtoToJSONTyped(value?: PhonePlanDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'phoneCountry': value['phoneCountry'],
        'createdAt': ((value['createdAt']).toISOString()),
    };
}


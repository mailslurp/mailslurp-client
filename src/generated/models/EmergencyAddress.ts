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
 * @interface EmergencyAddress
 */
export interface EmergencyAddress {
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    sid: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    customerName: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    address1: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    region: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    phoneCountry: EmergencyAddressPhoneCountryEnum;
    /**
     * 
     * @type {string}
     * @memberof EmergencyAddress
     */
    accountSid: string;
    /**
     * 
     * @type {Date}
     * @memberof EmergencyAddress
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof EmergencyAddress
     */
    updatedAt: Date;
}


/**
 * @export
 */
export const EmergencyAddressPhoneCountryEnum = {
    US: 'US',
    GB: 'GB',
    AU: 'AU'
} as const;
export type EmergencyAddressPhoneCountryEnum = typeof EmergencyAddressPhoneCountryEnum[keyof typeof EmergencyAddressPhoneCountryEnum];


/**
 * Check if a given object implements the EmergencyAddress interface.
 */
export function instanceOfEmergencyAddress(value: object): value is EmergencyAddress {
    if (!('sid' in value) || value['sid'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('customerName' in value) || value['customerName'] === undefined) return false;
    if (!('address1' in value) || value['address1'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('region' in value) || value['region'] === undefined) return false;
    if (!('postalCode' in value) || value['postalCode'] === undefined) return false;
    if (!('phoneCountry' in value) || value['phoneCountry'] === undefined) return false;
    if (!('accountSid' in value) || value['accountSid'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function EmergencyAddressFromJSON(json: any): EmergencyAddress {
    return EmergencyAddressFromJSONTyped(json, false);
}

export function EmergencyAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmergencyAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'sid': json['sid'],
        'userId': json['userId'],
        'displayName': json['displayName'],
        'customerName': json['customerName'],
        'address1': json['address1'],
        'city': json['city'],
        'region': json['region'],
        'postalCode': json['postalCode'],
        'phoneCountry': json['phoneCountry'],
        'accountSid': json['accountSid'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function EmergencyAddressToJSON(json: any): EmergencyAddress {
    return EmergencyAddressToJSONTyped(json, false);
}

export function EmergencyAddressToJSONTyped(value?: EmergencyAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'sid': value['sid'],
        'userId': value['userId'],
        'displayName': value['displayName'],
        'customerName': value['customerName'],
        'address1': value['address1'],
        'city': value['city'],
        'region': value['region'],
        'postalCode': value['postalCode'],
        'phoneCountry': value['phoneCountry'],
        'accountSid': value['accountSid'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}


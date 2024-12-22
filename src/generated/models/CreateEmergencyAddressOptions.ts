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
 * @interface CreateEmergencyAddressOptions
 */
export interface CreateEmergencyAddressOptions {
    /**
     * 
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    customerName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    address1: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    region: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    isoCountryCode: CreateEmergencyAddressOptionsIsoCountryCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateEmergencyAddressOptions
     */
    displayName?: string;
}


/**
 * @export
 */
export const CreateEmergencyAddressOptionsIsoCountryCodeEnum = {
    US: 'US',
    GB: 'GB',
    AU: 'AU'
} as const;
export type CreateEmergencyAddressOptionsIsoCountryCodeEnum = typeof CreateEmergencyAddressOptionsIsoCountryCodeEnum[keyof typeof CreateEmergencyAddressOptionsIsoCountryCodeEnum];


/**
 * Check if a given object implements the CreateEmergencyAddressOptions interface.
 */
export function instanceOfCreateEmergencyAddressOptions(value: object): value is CreateEmergencyAddressOptions {
    if (!('customerName' in value) || value['customerName'] === undefined) return false;
    if (!('address1' in value) || value['address1'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('region' in value) || value['region'] === undefined) return false;
    if (!('postalCode' in value) || value['postalCode'] === undefined) return false;
    if (!('isoCountryCode' in value) || value['isoCountryCode'] === undefined) return false;
    return true;
}

export function CreateEmergencyAddressOptionsFromJSON(json: any): CreateEmergencyAddressOptions {
    return CreateEmergencyAddressOptionsFromJSONTyped(json, false);
}

export function CreateEmergencyAddressOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmergencyAddressOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'customerName': json['customerName'],
        'address1': json['address1'],
        'city': json['city'],
        'region': json['region'],
        'postalCode': json['postalCode'],
        'isoCountryCode': json['isoCountryCode'],
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
    };
}

export function CreateEmergencyAddressOptionsToJSON(json: any): CreateEmergencyAddressOptions {
    return CreateEmergencyAddressOptionsToJSONTyped(json, false);
}

export function CreateEmergencyAddressOptionsToJSONTyped(value?: CreateEmergencyAddressOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'customerName': value['customerName'],
        'address1': value['address1'],
        'city': value['city'],
        'region': value['region'],
        'postalCode': value['postalCode'],
        'isoCountryCode': value['isoCountryCode'],
        'displayName': value['displayName'],
    };
}


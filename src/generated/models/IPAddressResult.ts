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
 * IP Address look up result for a given domain / hostname
 * @export
 * @interface IPAddressResult
 */
export interface IPAddressResult {
    /**
     * 
     * @type {string}
     * @memberof IPAddressResult
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof IPAddressResult
     */
    hostname: string;
}

/**
 * Check if a given object implements the IPAddressResult interface.
 */
export function instanceOfIPAddressResult(value: object): value is IPAddressResult {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('hostname' in value) || value['hostname'] === undefined) return false;
    return true;
}

export function IPAddressResultFromJSON(json: any): IPAddressResult {
    return IPAddressResultFromJSONTyped(json, false);
}

export function IPAddressResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): IPAddressResult {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'hostname': json['hostname'],
    };
}

export function IPAddressResultToJSON(json: any): IPAddressResult {
    return IPAddressResultToJSONTyped(json, false);
}

export function IPAddressResultToJSONTyped(value?: IPAddressResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'hostname': value['hostname'],
    };
}


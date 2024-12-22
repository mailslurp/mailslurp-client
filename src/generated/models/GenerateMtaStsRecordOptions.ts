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
 * @interface GenerateMtaStsRecordOptions
 */
export interface GenerateMtaStsRecordOptions {
    /**
     * 
     * @type {string}
     * @memberof GenerateMtaStsRecordOptions
     */
    host: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateMtaStsRecordOptions
     */
    version: GenerateMtaStsRecordOptionsVersionEnum;
    /**
     * 
     * @type {string}
     * @memberof GenerateMtaStsRecordOptions
     */
    mode: GenerateMtaStsRecordOptionsModeEnum;
    /**
     * 
     * @type {number}
     * @memberof GenerateMtaStsRecordOptions
     */
    ttl: number;
    /**
     * 
     * @type {number}
     * @memberof GenerateMtaStsRecordOptions
     */
    maxAgeSeconds: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateMtaStsRecordOptions
     */
    mxRecords: Array<string>;
}


/**
 * @export
 */
export const GenerateMtaStsRecordOptionsVersionEnum = {
    STSv1: 'STSv1'
} as const;
export type GenerateMtaStsRecordOptionsVersionEnum = typeof GenerateMtaStsRecordOptionsVersionEnum[keyof typeof GenerateMtaStsRecordOptionsVersionEnum];

/**
 * @export
 */
export const GenerateMtaStsRecordOptionsModeEnum = {
    TESTING: 'TESTING',
    ENFORCE: 'ENFORCE',
    NONE: 'NONE'
} as const;
export type GenerateMtaStsRecordOptionsModeEnum = typeof GenerateMtaStsRecordOptionsModeEnum[keyof typeof GenerateMtaStsRecordOptionsModeEnum];


/**
 * Check if a given object implements the GenerateMtaStsRecordOptions interface.
 */
export function instanceOfGenerateMtaStsRecordOptions(value: object): value is GenerateMtaStsRecordOptions {
    if (!('host' in value) || value['host'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('mode' in value) || value['mode'] === undefined) return false;
    if (!('ttl' in value) || value['ttl'] === undefined) return false;
    if (!('maxAgeSeconds' in value) || value['maxAgeSeconds'] === undefined) return false;
    if (!('mxRecords' in value) || value['mxRecords'] === undefined) return false;
    return true;
}

export function GenerateMtaStsRecordOptionsFromJSON(json: any): GenerateMtaStsRecordOptions {
    return GenerateMtaStsRecordOptionsFromJSONTyped(json, false);
}

export function GenerateMtaStsRecordOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateMtaStsRecordOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'host': json['host'],
        'version': json['version'],
        'mode': json['mode'],
        'ttl': json['ttl'],
        'maxAgeSeconds': json['maxAgeSeconds'],
        'mxRecords': json['mxRecords'],
    };
}

export function GenerateMtaStsRecordOptionsToJSON(json: any): GenerateMtaStsRecordOptions {
    return GenerateMtaStsRecordOptionsToJSONTyped(json, false);
}

export function GenerateMtaStsRecordOptionsToJSONTyped(value?: GenerateMtaStsRecordOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'host': value['host'],
        'version': value['version'],
        'mode': value['mode'],
        'ttl': value['ttl'],
        'maxAgeSeconds': value['maxAgeSeconds'],
        'mxRecords': value['mxRecords'],
    };
}


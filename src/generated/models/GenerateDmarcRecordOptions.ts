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
 * @interface GenerateDmarcRecordOptions
 */
export interface GenerateDmarcRecordOptions {
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    version: GenerateDmarcRecordOptionsVersionEnum;
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    policy: GenerateDmarcRecordOptionsPolicyEnum;
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    subdomainPolicy?: GenerateDmarcRecordOptionsSubdomainPolicyEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateDmarcRecordOptions
     */
    reportEmailAddress?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GenerateDmarcRecordOptions
     */
    forensicEmailAddress?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GenerateDmarcRecordOptions
     */
    percentage?: number;
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    reportFormat?: GenerateDmarcRecordOptionsReportFormatEnum;
    /**
     * 
     * @type {number}
     * @memberof GenerateDmarcRecordOptions
     */
    secondsBetweenReports?: number;
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    adkim?: GenerateDmarcRecordOptionsAdkimEnum;
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    aspf?: GenerateDmarcRecordOptionsAspfEnum;
    /**
     * 
     * @type {string}
     * @memberof GenerateDmarcRecordOptions
     */
    fo?: GenerateDmarcRecordOptionsFoEnum;
}


/**
 * @export
 */
export const GenerateDmarcRecordOptionsVersionEnum = {
    DMARC1: 'DMARC1'
} as const;
export type GenerateDmarcRecordOptionsVersionEnum = typeof GenerateDmarcRecordOptionsVersionEnum[keyof typeof GenerateDmarcRecordOptionsVersionEnum];

/**
 * @export
 */
export const GenerateDmarcRecordOptionsPolicyEnum = {
    NONE: 'NONE',
    QUARANTINE: 'QUARANTINE',
    REJECT: 'REJECT'
} as const;
export type GenerateDmarcRecordOptionsPolicyEnum = typeof GenerateDmarcRecordOptionsPolicyEnum[keyof typeof GenerateDmarcRecordOptionsPolicyEnum];

/**
 * @export
 */
export const GenerateDmarcRecordOptionsSubdomainPolicyEnum = {
    NONE: 'NONE',
    QUARANTINE: 'QUARANTINE',
    REJECT: 'REJECT'
} as const;
export type GenerateDmarcRecordOptionsSubdomainPolicyEnum = typeof GenerateDmarcRecordOptionsSubdomainPolicyEnum[keyof typeof GenerateDmarcRecordOptionsSubdomainPolicyEnum];

/**
 * @export
 */
export const GenerateDmarcRecordOptionsReportFormatEnum = {
    AFRF: 'AFRF'
} as const;
export type GenerateDmarcRecordOptionsReportFormatEnum = typeof GenerateDmarcRecordOptionsReportFormatEnum[keyof typeof GenerateDmarcRecordOptionsReportFormatEnum];

/**
 * @export
 */
export const GenerateDmarcRecordOptionsAdkimEnum = {
    STRICT: 'STRICT',
    RELAXED: 'RELAXED'
} as const;
export type GenerateDmarcRecordOptionsAdkimEnum = typeof GenerateDmarcRecordOptionsAdkimEnum[keyof typeof GenerateDmarcRecordOptionsAdkimEnum];

/**
 * @export
 */
export const GenerateDmarcRecordOptionsAspfEnum = {
    STRICT: 'STRICT',
    RELAXED: 'RELAXED'
} as const;
export type GenerateDmarcRecordOptionsAspfEnum = typeof GenerateDmarcRecordOptionsAspfEnum[keyof typeof GenerateDmarcRecordOptionsAspfEnum];

/**
 * @export
 */
export const GenerateDmarcRecordOptionsFoEnum = {
    _0: 'FO_0',
    _1: 'FO_1',
    D: 'FO_D',
    S: 'FO_S'
} as const;
export type GenerateDmarcRecordOptionsFoEnum = typeof GenerateDmarcRecordOptionsFoEnum[keyof typeof GenerateDmarcRecordOptionsFoEnum];


/**
 * Check if a given object implements the GenerateDmarcRecordOptions interface.
 */
export function instanceOfGenerateDmarcRecordOptions(value: object): value is GenerateDmarcRecordOptions {
    if (!('domain' in value) || value['domain'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('policy' in value) || value['policy'] === undefined) return false;
    return true;
}

export function GenerateDmarcRecordOptionsFromJSON(json: any): GenerateDmarcRecordOptions {
    return GenerateDmarcRecordOptionsFromJSONTyped(json, false);
}

export function GenerateDmarcRecordOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateDmarcRecordOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'domain': json['domain'],
        'version': json['version'],
        'policy': json['policy'],
        'subdomainPolicy': json['subdomainPolicy'] == null ? undefined : json['subdomainPolicy'],
        'reportEmailAddress': json['reportEmailAddress'] == null ? undefined : json['reportEmailAddress'],
        'forensicEmailAddress': json['forensicEmailAddress'] == null ? undefined : json['forensicEmailAddress'],
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
        'reportFormat': json['reportFormat'] == null ? undefined : json['reportFormat'],
        'secondsBetweenReports': json['secondsBetweenReports'] == null ? undefined : json['secondsBetweenReports'],
        'adkim': json['adkim'] == null ? undefined : json['adkim'],
        'aspf': json['aspf'] == null ? undefined : json['aspf'],
        'fo': json['fo'] == null ? undefined : json['fo'],
    };
}

export function GenerateDmarcRecordOptionsToJSON(json: any): GenerateDmarcRecordOptions {
    return GenerateDmarcRecordOptionsToJSONTyped(json, false);
}

export function GenerateDmarcRecordOptionsToJSONTyped(value?: GenerateDmarcRecordOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domain': value['domain'],
        'version': value['version'],
        'policy': value['policy'],
        'subdomainPolicy': value['subdomainPolicy'],
        'reportEmailAddress': value['reportEmailAddress'],
        'forensicEmailAddress': value['forensicEmailAddress'],
        'percentage': value['percentage'],
        'reportFormat': value['reportFormat'],
        'secondsBetweenReports': value['secondsBetweenReports'],
        'adkim': value['adkim'],
        'aspf': value['aspf'],
        'fo': value['fo'],
    };
}


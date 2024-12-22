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
import type { DNSLookupResult } from './DNSLookupResult';
import {
    DNSLookupResultFromJSON,
    DNSLookupResultFromJSONTyped,
    DNSLookupResultToJSON,
    DNSLookupResultToJSONTyped,
} from './DNSLookupResult';
import type { DNSLookupOptions } from './DNSLookupOptions';
import {
    DNSLookupOptionsFromJSON,
    DNSLookupOptionsFromJSONTyped,
    DNSLookupOptionsToJSON,
    DNSLookupOptionsToJSONTyped,
} from './DNSLookupOptions';

/**
 * 
 * @export
 * @interface LookupTlsReportingDomainResults
 */
export interface LookupTlsReportingDomainResults {
    /**
     * 
     * @type {boolean}
     * @memberof LookupTlsReportingDomainResults
     */
    valid: boolean;
    /**
     * 
     * @type {DNSLookupOptions}
     * @memberof LookupTlsReportingDomainResults
     */
    query: DNSLookupOptions;
    /**
     * 
     * @type {Array<DNSLookupResult>}
     * @memberof LookupTlsReportingDomainResults
     */
    records: Array<DNSLookupResult>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LookupTlsReportingDomainResults
     */
    errors: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LookupTlsReportingDomainResults
     */
    warnings: Array<string>;
}

/**
 * Check if a given object implements the LookupTlsReportingDomainResults interface.
 */
export function instanceOfLookupTlsReportingDomainResults(value: object): value is LookupTlsReportingDomainResults {
    if (!('valid' in value) || value['valid'] === undefined) return false;
    if (!('query' in value) || value['query'] === undefined) return false;
    if (!('records' in value) || value['records'] === undefined) return false;
    if (!('errors' in value) || value['errors'] === undefined) return false;
    if (!('warnings' in value) || value['warnings'] === undefined) return false;
    return true;
}

export function LookupTlsReportingDomainResultsFromJSON(json: any): LookupTlsReportingDomainResults {
    return LookupTlsReportingDomainResultsFromJSONTyped(json, false);
}

export function LookupTlsReportingDomainResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupTlsReportingDomainResults {
    if (json == null) {
        return json;
    }
    return {
        
        'valid': json['valid'],
        'query': DNSLookupOptionsFromJSON(json['query']),
        'records': ((json['records'] as Array<any>).map(DNSLookupResultFromJSON)),
        'errors': json['errors'],
        'warnings': json['warnings'],
    };
}

export function LookupTlsReportingDomainResultsToJSON(json: any): LookupTlsReportingDomainResults {
    return LookupTlsReportingDomainResultsToJSONTyped(json, false);
}

export function LookupTlsReportingDomainResultsToJSONTyped(value?: LookupTlsReportingDomainResults | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'valid': value['valid'],
        'query': DNSLookupOptionsToJSON(value['query']),
        'records': ((value['records'] as Array<any>).map(DNSLookupResultToJSON)),
        'errors': value['errors'],
        'warnings': value['warnings'],
    };
}


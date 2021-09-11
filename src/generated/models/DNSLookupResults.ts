/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DNSLookupResult,
    DNSLookupResultFromJSON,
    DNSLookupResultFromJSONTyped,
    DNSLookupResultToJSON,
} from './';

/**
 * Results of query on domain name servers
 * @export
 * @interface DNSLookupResults
 */
export interface DNSLookupResults {
    /**
     *
     * @type {Array<DNSLookupResult>}
     * @memberof DNSLookupResults
     */
    results: Array<DNSLookupResult>;
}

export function DNSLookupResultsFromJSON(json: any): DNSLookupResults {
    return DNSLookupResultsFromJSONTyped(json, false);
}

export function DNSLookupResultsFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): DNSLookupResults {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        results: (json['results'] as Array<any>).map(DNSLookupResultFromJSON),
    };
}

export function DNSLookupResultsToJSON(value?: DNSLookupResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        results: (value.results as Array<any>).map(DNSLookupResultToJSON),
    };
}

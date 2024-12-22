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
import type { WebhookTestRequest } from './WebhookTestRequest';
import {
    WebhookTestRequestFromJSON,
    WebhookTestRequestFromJSONTyped,
    WebhookTestRequestToJSON,
    WebhookTestRequestToJSONTyped,
} from './WebhookTestRequest';
import type { WebhookTestResponse } from './WebhookTestResponse';
import {
    WebhookTestResponseFromJSON,
    WebhookTestResponseFromJSONTyped,
    WebhookTestResponseToJSON,
    WebhookTestResponseToJSONTyped,
} from './WebhookTestResponse';

/**
 * Results of testing a webhook
 * @export
 * @interface WebhookTestResult
 */
export interface WebhookTestResult {
    /**
     * 
     * @type {string}
     * @memberof WebhookTestResult
     */
    message?: string | null;
    /**
     * 
     * @type {WebhookTestResponse}
     * @memberof WebhookTestResult
     */
    response: WebhookTestResponse;
    /**
     * 
     * @type {WebhookTestRequest}
     * @memberof WebhookTestResult
     */
    request: WebhookTestRequest;
}

/**
 * Check if a given object implements the WebhookTestResult interface.
 */
export function instanceOfWebhookTestResult(value: object): value is WebhookTestResult {
    if (!('response' in value) || value['response'] === undefined) return false;
    if (!('request' in value) || value['request'] === undefined) return false;
    return true;
}

export function WebhookTestResultFromJSON(json: any): WebhookTestResult {
    return WebhookTestResultFromJSONTyped(json, false);
}

export function WebhookTestResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTestResult {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'response': WebhookTestResponseFromJSON(json['response']),
        'request': WebhookTestRequestFromJSON(json['request']),
    };
}

export function WebhookTestResultToJSON(json: any): WebhookTestResult {
    return WebhookTestResultToJSONTyped(json, false);
}

export function WebhookTestResultToJSONTyped(value?: WebhookTestResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'response': WebhookTestResponseToJSON(value['response']),
        'request': WebhookTestRequestToJSON(value['request']),
    };
}

